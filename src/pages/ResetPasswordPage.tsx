import { useMemo, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import AppFooter from '../components/AppFooter'
import OTPInput from '../components/auth/OTPInput'
import { ApiError } from '../lib/api'
import { authStorage, resendOtp, resetPassword, verifyOtp } from '../lib/auth'

export default function ResetPasswordPage() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const email = useMemo(
    () => searchParams.get('email') || authStorage.getPendingResetEmail() || '',
    [searchParams],
  )
  const [step, setStep] = useState<'otp' | 'password'>('otp')
  const [otpCode, setOtpCode] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isResending, setIsResending] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [infoMessage, setInfoMessage] = useState('')
  const [otpResetTrigger, setOtpResetTrigger] = useState(0)

  const handleVerifyOtp = async (code: string) => {
    if (!email) {
      setErrorMessage('No reset email found. Please restart the password reset flow.')
      return
    }

    setIsVerifyingOtp(true)
    setErrorMessage('')
    setInfoMessage('')

    try {
      await verifyOtp({ email, code, purpose: 'reset_password' })
      setOtpCode(code)
      setStep('password')
      setInfoMessage('OTP verified. You can now set a new password.')
    } catch (error) {
      if (error instanceof ApiError || error instanceof Error) {
        setErrorMessage(error.message)
      } else {
        setErrorMessage('Unable to validate the OTP right now.')
      }
      setOtpResetTrigger((value) => value + 1)
    } finally {
      setIsVerifyingOtp(false)
    }
  }

  const handleResend = async () => {
    if (!email) {
      setErrorMessage('No reset email found. Please restart the password reset flow.')
      return
    }

    setIsResending(true)
    setErrorMessage('')
    setInfoMessage('')

    try {
      const response = await resendOtp({ email, purpose: 'reset_password' })
      setOtpResetTrigger((value) => value + 1)
      setStep('otp')
      setOtpCode('')
      setInfoMessage(response.message || 'A new reset code has been sent to your email.')
    } catch (error) {
      if (error instanceof ApiError || error instanceof Error) {
        setErrorMessage(error.message)
      } else {
        setErrorMessage('Unable to resend the reset code.')
      }
    } finally {
      setIsResending(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage('')
    setInfoMessage('')

    if (!otpCode) {
      setErrorMessage('Validate your OTP before setting a new password.')
      setStep('otp')
      return
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.')
      return
    }

    setIsSubmitting(true)

    try {
      await resetPassword({ email, code: otpCode, password, confirmPassword })
      authStorage.clearPendingResetEmail()
      navigate('/login?resetSuccess=1', { replace: true })
    } catch (error) {
      if (error instanceof ApiError || error instanceof Error) {
        setErrorMessage(error.message)
      } else {
        setErrorMessage('Unable to reset your password right now.')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-[#F7F9FB] text-[#191C1E] min-h-screen flex flex-col selection:bg-primary-container selection:text-white">
      <Navbar
        links={[
          { label: 'About', to: '/' },
          { label: 'Contact', to: '/' },
        ]}
      />

      <main className="grow flex items-center justify-center px-4 pt-20 pb-20 relative overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-100 h-100 rounded-full bg-secondary-fixed/20 blur-[120px] -z-10"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-125 h-125 rounded-full bg-primary-fixed/15 blur-[150px] -z-10"></div>

        <div className="w-full max-w-115 bg-white rounded-[2rem] shadow-ambient p-8 md:p-12 flex flex-col animate-scale-in border border-white/40">
          <div className="mb-8">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-[#2559BD]">
              Password Recovery
            </p>
            <h1 className="font-headline text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
              {step === 'otp' ? 'Reset - Enter OTP' : 'Reset - New Password'}
            </h1>
            <p className="mt-3 text-sm font-medium text-[#434653] leading-relaxed">
              {step === 'otp'
                ? `Enter the 6-digit code sent to ${email || 'your email'} to validate the OTP and expiry.`
                : 'Enter your new password, confirm it, and submit to update your password server-side.'}
            </p>
          </div>

          {errorMessage ? (
            <div className="mb-5 rounded-lg border border-[#ff6b6b]/30 bg-[#12070b] px-4 py-3 text-sm text-[#ffb4ab]">
              {errorMessage}
            </div>
          ) : null}

          {infoMessage ? (
            <div className="mb-5 rounded-lg border border-[#57FAE9]/20 bg-[#05131c] px-4 py-3 text-sm text-[#9EF7FF]">
              {infoMessage}
            </div>
          ) : null}

          {step === 'otp' ? (
            <div className="space-y-6">
              <div className="rounded-2xl bg-[#F5F8FF] px-5 py-4 text-sm text-[#434653]">
                Enter the 6-digit code from your email. We will validate the OTP before unlocking the new password step.
              </div>

              <div className="flex justify-center">
                <OTPInput
                  onComplete={handleVerifyOtp}
                  resetTrigger={otpResetTrigger}
                  inputClassName="w-8 h-10 md:w-9 md:h-11 text-base md:text-lg rounded-md"
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setErrorMessage('Enter the full 6-digit OTP to continue.')}
                  disabled={isVerifyingOtp}
                  className="flex-1 h-14 bg-linear-to-r from-[#00419E] to-[#608DF4] text-white font-bold rounded-2xl active:scale-95 transition-all duration-300 shadow-xl shadow-primary/20 hover:shadow-2xl hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isVerifyingOtp ? 'Validating OTP...' : 'Validate OTP'}
                </button>
                <button
                  type="button"
                  onClick={handleResend}
                  disabled={isResending}
                  className="rounded-2xl border border-[#D3E4FE] bg-[#F5F8FF] px-6 py-4 text-sm font-bold text-[#00419E] transition-all hover:bg-[#DDEBFF] disabled:opacity-70"
                >
                  {isResending ? 'Resending...' : 'Resend Code'}
                </button>
              </div>
            </div>
          ) : (
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-[0.2em] text-on-surface-variant">
                  New Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="h-12 w-full rounded-xl bg-[#F2F4F6] px-4 pr-12 text-[#191C1E] outline-none transition-all focus:ring-2 focus:ring-[#2559BD]"
                    placeholder="Enter new password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((value) => !value)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#74777F]"
                  >
                    <span className="material-symbols-outlined">
                      {showPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-[0.2em] text-on-surface-variant">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="h-12 w-full rounded-xl bg-[#F2F4F6] px-4 pr-12 text-[#191C1E] outline-none transition-all focus:ring-2 focus:ring-[#2559BD]"
                    placeholder="Confirm new password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((value) => !value)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#74777F]"
                  >
                    <span className="material-symbols-outlined">
                      {showConfirmPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setStep('otp')}
                  className="rounded-2xl border border-[#D3E4FE] bg-[#F5F8FF] px-6 py-4 text-sm font-bold text-[#00419E] transition-all hover:bg-[#DDEBFF]"
                >
                  Back to OTP
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 h-14 bg-linear-to-r from-[#00419E] to-[#608DF4] text-white font-bold rounded-2xl active:scale-95 transition-all duration-300 shadow-xl shadow-primary/20 hover:shadow-2xl hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Updating Password...' : 'Submit New Password'}
                </button>
              </div>
            </form>
          )}

          <div className="mt-8 text-center">
            <Link to="/login" className="text-sm font-bold text-[#00419E] hover:underline">
              Return to sign in
            </Link>
          </div>
        </div>
      </main>

      <AppFooter />
    </div>
  )
}
