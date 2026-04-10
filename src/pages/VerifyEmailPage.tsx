import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import AppFooter from '../components/AppFooter'
import OTPInput from '../components/auth/OTPInput'
import SuccessModal from '../components/auth/SuccessModal'
import { ApiError } from '../lib/api'
import { authStorage, resendOtp, verifyOtp } from '../lib/auth'

export default function VerifyEmailPage() {
  const [isVerifying, setIsVerifying] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [infoMessage, setInfoMessage] = useState('')
  const [isResending, setIsResending] = useState(false)
  const [otpResetTrigger, setOtpResetTrigger] = useState(0)
  const email = authStorage.getPendingVerificationEmail() || ''

  const handleVerify = async (code: string) => {
    if (!email) {
      setErrorMessage('No email is waiting for verification. Please create an account first.')
      return
    }

    setIsVerifying(true)
    setErrorMessage('')
    setInfoMessage('')

    try {
      await verifyOtp({ email, code })
      authStorage.clearPendingVerificationEmail()
      setIsVerifying(false)
      setShowSuccess(true)
    } catch (error) {
      setIsVerifying(false)
      if (error instanceof ApiError || error instanceof Error) {
        setErrorMessage(error.message)
      } else {
        setErrorMessage('Unable to verify that code.')
      }
    }
  }

  const handleResend = async () => {
    if (!email) {
      setErrorMessage('No email is waiting for verification.')
      return
    }

    setIsResending(true)
    setErrorMessage('')
    setInfoMessage('')

    try {
      const response = await resendOtp({ email })
      setOtpResetTrigger((value) => value + 1)
      setInfoMessage(response.message || 'A new verification code has been sent.')
    } catch (error) {
      if (error instanceof ApiError || error instanceof Error) {
        setErrorMessage(error.message)
      } else {
        setErrorMessage('Unable to resend the verification code.')
      }
    } finally {
      setIsResending(false)
    }
  }

  return (
    <div className="bg-[#F7F9FB] text-[#191C1E] min-h-screen flex flex-col">
      <Navbar
        links={[
          { label: 'Courses', to: '#' },
          { label: 'Mentors', to: '#' },
          { label: 'Resources', to: '#' },
          { label: 'Community', to: '#' },
        ]}
      />

      <main className="grow flex items-center justify-center px-4 pt-24 pb-20 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-[-10%] left-[-5%] w-100 h-100 rounded-full bg-[#D3E4FE]/30 blur-[120px] -z-10"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-125 h-125 rounded-full bg-[#DAE2FF]/20 blur-[150px] -z-10"></div>

        <div className="w-full max-w-140 bg-white rounded-2xl shadow-ambient p-8 md:p-16 flex flex-col items-center text-center animate-scale-in">
          <div className="mb-10 max-w-lg">
            <h1 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight text-[#191C1E] mb-4">
              Verify your email
            </h1>
            <p className="text-[#434653] text-base md:text-lg font-medium leading-relaxed">
              Enter the 6-digit code sent to your email address <span className="text-[#191C1E] font-bold">{email}</span>
            </p>
          </div>

          {errorMessage ? (
            <div className="mb-6 w-full max-w-lg rounded-xl border border-[#ff6b6b]/30 bg-[#12070b] px-4 py-3 text-sm text-[#ffb4ab]">
              {errorMessage}
            </div>
          ) : null}

          {infoMessage ? (
            <div className="mb-6 w-full max-w-lg rounded-xl border border-[#57FAE9]/20 bg-[#05131c] px-4 py-3 text-sm text-[#9EF7FF]">
              {infoMessage}
            </div>
          ) : null}

          <div className="mb-12">
            <OTPInput onComplete={handleVerify} resetTrigger={otpResetTrigger} />
          </div>

          <div className="w-full space-y-6">
            <button
              onClick={() => setErrorMessage('Enter the full code above to continue.')}
              disabled={isVerifying}
              className="w-full h-14 bg-linear-to-r from-[#00419E] to-[#87A9FF] text-white font-bold text-lg rounded-xl active:scale-95 transition-all duration-150 shadow-md hover:shadow-xl disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {isVerifying ? (
                <span className="animate-pulse">Verifying...</span>
              ) : (
                'Verify Email'
              )}
            </button>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-4">
              <button className="flex items-center gap-2 text-[#2559BD] font-bold hover:opacity-80 transition-all group">
                <span className="material-symbols-outlined text-[20px] group-hover:rotate-12 transition-transform">support_agent</span>
                Contact Support
              </button>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={handleResend}
                  disabled={isResending}
                  className="flex items-center gap-2 text-[#2559BD] font-bold hover:opacity-80 transition-all group disabled:opacity-60"
                >
                  <span className="material-symbols-outlined text-[20px] group-hover:-rotate-12 transition-transform">refresh</span>
                  {isResending ? 'Resending...' : 'Resend Code'}
                </button>
                <Link to="/signup" className="flex items-center gap-2 text-[#2559BD] font-bold hover:opacity-80 transition-all group">
                  <span className="material-symbols-outlined text-[20px] group-hover:-rotate-12 transition-transform">edit</span>
                  Change Email
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating accent blur */}
      <div className="fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-120 h-150 bg-[#ECEEF0] -z-20 rounded-4xl opacity-40 blur-3xl"></div>
      
      <AppFooter className="mt-10" />

      {/* Success Modal */}
      <SuccessModal 
        isOpen={showSuccess} 
        onClose={() => setShowSuccess(false)} 
        email={email}
      />
    </div>
  )
}
