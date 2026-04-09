import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import AppFooter from '../components/AppFooter'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 1500)
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
        {/* Background Decorative Elements */}
        <div className="absolute top-[-10%] left-[-5%] w-100 h-100 rounded-full bg-secondary-fixed/20 blur-[120px] -z-10"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-125 h-125 rounded-full bg-primary-fixed/15 blur-[150px] -z-10"></div>

        <div className="w-full max-w-115 bg-white rounded-[2rem] shadow-ambient p-8 md:p-12 flex flex-col animate-scale-in border border-white/40">
          {!isSubmitted ? (
            <div className="animate-fade-in">
              <div className="mb-10 text-center">
                <div className="w-16 h-16 bg-[#D3E4FE] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <span className="material-symbols-outlined text-[#00419E] text-3xl">lock_reset</span>
                </div>
                <h1 className="font-headline text-3xl font-extrabold tracking-tight text-on-surface mb-3">
                  Reset Password
                </h1>
                <p className="text-[#434653] text-sm font-medium px-4">
                  Enter your institutional email address and we'll send you a secure link to reset your access.
                </p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">
                    Institutional Email
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
                      Send Reset link
                      <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </>
                  )}
                </button>
              </form>

              <div className="mt-10 text-center">
                <Link to="/login" className="text-sm font-bold text-[#00419E] hover:underline flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-sm">arrow_back</span>
                  Back to Log In
                </Link>
              </div>
            </div>
          ) : (
            <div className="text-center animate-fade-in-up">
              <div className="w-16 h-16 bg-[#C6F0D8] rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm scale-110">
                <span className="material-symbols-outlined text-[#00502D] text-3xl">check_circle</span>
              </div>
              <h2 className="font-headline text-3xl font-extrabold tracking-tight text-on-surface mb-4">
                Check your inbox
              </h2>
              <p className="text-[#434653] text-base font-medium mb-10 leading-relaxed px-2">
                We've sent a secure password reset link to <span className="text-[#191C1E] font-bold">{email}</span>. Please check your junk folder if you don't see it within 5 minutes.
              </p>
              
              <div className="space-y-4">
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="w-full h-12 rounded-xl text-[#00419E] font-bold bg-[#D3E4FE]/50 hover:bg-[#D3E4FE] transition-colors"
                >
                  Didn't receive email? Try again
                </button>
                <Link 
                  to="/login"
                  className="block w-full h-14 flex items-center justify-center bg-[#191C1E] text-white font-bold rounded-2xl shadow-lg hover:bg-black transition-all"
                >
                  Return to Sign In
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>

      <AppFooter />
    </div>
  )
}
