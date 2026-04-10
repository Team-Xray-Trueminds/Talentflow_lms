import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import AppFooter from '../components/AppFooter'
import { ApiError } from '../lib/api'
import { authStorage, forgotPassword } from '../lib/auth'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setErrorMessage('')

    try {
      await forgotPassword({ email })
      authStorage.setPendingResetEmail(email)
      navigate(`/reset-password?email=${encodeURIComponent(email)}`)
    } catch (error) {
      if (error instanceof ApiError || error instanceof Error) {
        setErrorMessage(error.message)
      } else {
        setErrorMessage('Unable to send reset email right now.')
      }
    } finally {
      setIsLoading(false)
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
          <div className="mb-10 text-center">
            <div className="w-16 h-16 bg-[#D3E4FE] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
              <span className="material-symbols-outlined text-[#00419E] text-3xl">mark_email_read</span>
            </div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-[#2559BD]">
              Reset - Enter Email
            </p>
            <h1 className="font-headline text-3xl font-extrabold tracking-tight text-on-surface mb-3">
              Send reset code
            </h1>
            <p className="text-[#434653] text-sm font-medium px-4 leading-relaxed">
              Enter your registered email, then tap send. We will dispatch your reset email and one-time passcode for the next step.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {errorMessage ? (
              <div className="rounded-lg border border-[#ff6b6b]/30 bg-[#12070b] px-4 py-3 text-sm text-[#ffb4ab]">
                {errorMessage}
              </div>
            ) : null}

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">
                Registered Email
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#74777F] text-[20px]">mail</span>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full h-14 pl-12 pr-4 bg-[#F2F4F6] border-none rounded-2xl focus:ring-2 focus:ring-[#2559BD] text-[#191C1E] transition-all placeholder:text-[#C3C6D5] font-medium"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-14 bg-linear-to-r from-[#00419E] to-[#608DF4] text-white font-bold rounded-2xl active:scale-95 transition-all duration-300 shadow-xl shadow-primary/20 hover:shadow-2xl hover:scale-[1.02] flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  Send Reset Email
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </>
              )}
            </button>
          </form>

          <div className="mt-8 rounded-2xl bg-[#F5F8FF] px-5 py-4 text-sm text-[#434653]">
            Next: enter the 6-digit code from your email, then create a new password.
          </div>

          <div className="mt-10 text-center">
            <Link to="/login" className="text-sm font-bold text-[#00419E] hover:underline flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              Back to Log In
            </Link>
          </div>
        </div>
      </main>

      <AppFooter />
    </div>
  )
}
