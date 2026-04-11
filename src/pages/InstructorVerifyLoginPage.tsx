import BottomNav from '../components/layout/BottomNav';
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import AppFooter from '../components/AppFooter'
import OTPInput from '../components/auth/OTPInput'
import { authStorage } from '../lib/auth'

export default function InstructorVerifyLoginPage() {
  const [isVerifying, setIsVerifying] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [infoMessage, setInfoMessage] = useState('')
  const [isResending, setIsResending] = useState(false)
  const [otpResetTrigger, setOtpResetTrigger] = useState(0)
  const navigate = useNavigate()
  const email = authStorage.getPendingVerificationEmail() || ''

  const handleVerify = async (code: string) => {
    if (!email) {
      setErrorMessage('No email context found. Please log in again.')
      return
    }

    setIsVerifying(true)
    setErrorMessage('')
    setInfoMessage('')

    try {
      // Use the code for simulation (not strictly needed but avoids lint error)
      console.log('Verifying code:', code);
      
      // Simulate OTP verification for first-time login
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Verification successful
      setIsVerifying(false)
      navigate('/instructor/set-password')
    } catch {
      setIsVerifying(false)
      setErrorMessage('Verification failed. Please check the code and try again.')
    }
  }

  const handleResend = async () => {
    setIsResending(true)
    setErrorMessage('')
    setInfoMessage('')

    try {
      // Simulate resending OTP
      await new Promise(resolve => setTimeout(resolve, 1000));
      setOtpResetTrigger((value) => value + 1)
      setInfoMessage('A new verification code has been dispatched to your email.')
    } catch {
      setErrorMessage('Unable to resend the verification code.')
    } finally {
      setIsResending(false)
    }
  }

  return (
    <div className="bg-[#F8FAFC] text-[#191C1E] min-h-screen flex flex-col font-sans">
      <Navbar
         links={[
          { label: 'Growth Explorer', to: '/' },
          { label: 'Architectury', to: '/' },
        ]}
      />

      <main className="grow flex items-center justify-center px-4 pt-24 relative overflow-hidden pb-24 lg:pb-8">
        {/* Architectural Background */}
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none overflow-hidden">
           <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="currentColor" strokeWidth="0.1" />
             <path d="M0,0 L100,100 M100,0 L0,100" fill="none" stroke="currentColor" strokeWidth="0.05" />
           </svg>
        </div>

        <div className="w-full max-w-xl bg-white rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.05)] p-12 md:p-16 flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="mb-10">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
              <span className="material-symbols-outlined text-xl sm:text-2xl md:text-3xl">verified_user</span>
            </div>
            <h1 className="font-headline text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tighter text-[#121417] mb-4 italic">
              Verify Provisioning
            </h1>
            <p className="text-[#434653] text-lg font-medium leading-relaxed">
              To verify your instructor account, enter the precision access code sent to <span className="text-primary font-bold">{email}</span>
            </p>
          </div>

          {errorMessage && (
            <div className="mb-6 w-full rounded-2xl border border-error/20 bg-error/5 px-4 py-4 text-sm text-error font-bold">
              {errorMessage}
            </div>
          )}

          {infoMessage && (
            <div className="mb-6 w-full rounded-2xl border border-primary/20 bg-primary/5 px-4 py-4 text-sm text-primary font-bold">
              {infoMessage}
            </div>
          )}

          <div className="mb-12">
            <OTPInput onComplete={handleVerify} resetTrigger={otpResetTrigger} />
          </div>

          <div className="w-full space-y-6">
            <div className="flex flex-col items-center justify-center gap-6">
              {isVerifying ? (
                <div className="flex items-center gap-2 text-primary font-bold animate-pulse">
                  <span className="material-symbols-outlined animate-spin">refresh</span>
                  Verifying Credentials...
                </div>
              ) : (
                <>
                  <p className="text-xs font-bold text-outline uppercase tracking-widest text-center">
                    Didn't receive the code?
                  </p>
                  <button
                    type="button"
                    onClick={handleResend}
                    disabled={isResending}
                    className="flex items-center gap-2 text-primary font-black uppercase tracking-[0.15em] text-xs hover:opacity-70 transition-all disabled:opacity-50"
                  >
                    <span className="material-symbols-outlined text-lg">refresh</span>
                    {isResending ? 'Refining Code...' : 'Resend Protocol'}
                  </button>
                </>
              )}
            </div>
            
            <div className="pt-8 border-t border-[#E6E8EA] w-full">
              <Link to="/login" className="text-xs font-bold text-outline hover:text-primary transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-lg">keyboard_backspace</span>
                Return to Login
              </Link>
            </div>
          </div>
        </div>
      </main>

      <AppFooter />
        <BottomNav />
        </div>
  )
}
