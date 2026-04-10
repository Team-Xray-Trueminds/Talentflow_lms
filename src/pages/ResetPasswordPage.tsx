import { useMemo, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import AppFooter from '../components/AppFooter'
import { ApiError } from '../lib/api'
import { resetPassword } from '../lib/auth'

export default function ResetPasswordPage() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const token = useMemo(() => searchParams.get('token') || '', [searchParams])
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage('')

    if (!token) {
      setErrorMessage('This reset link is missing or invalid.')
      return
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.')
      return
    }

    setIsSubmitting(true)

    try {
      await resetPassword({ token, password, confirmPassword })
      setIsSuccess(true)
      window.setTimeout(() => navigate('/login', { replace: true }), 1500)
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
    <div className="min-h-screen bg-[#020816] text-white flex flex-col">
      <Navbar
        links={[
          { label: 'Platform', to: '/' },
          { label: 'Support', to: '/' },
        ]}
      />

      <main className="grow flex items-center justify-center px-4 pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(87,250,233,0.18),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(10,91,255,0.22),transparent_32%)]"></div>

        <div className="relative w-full max-w-xl rounded-[2rem] border border-[#57FAE9]/15 bg-[#061221]/85 p-8 md:p-12 shadow-[0_24px_80px_rgba(2,8,22,0.55)] backdrop-blur-xl">
          <div className="mb-8">
            <p className="mb-3 inline-flex rounded-full border border-[#57FAE9]/20 bg-[#081a2c] px-4 py-1 text-[11px] font-black uppercase tracking-[0.25em] text-[#9EF7FF]">
              Secure Recovery
            </p>
            <h1 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Set a new password
            </h1>
            <p className="mt-3 text-sm font-medium text-[#9FB2D1]">
              Choose a strong password for your TalentFlow account.
            </p>
          </div>

          {errorMessage ? (
            <div className="mb-5 rounded-2xl border border-[#ff8a8a]/20 bg-[#180b12] px-4 py-3 text-sm text-[#ffb4ab]">
              {errorMessage}
            </div>
          ) : null}

          {isSuccess ? (
            <div className="rounded-2xl border border-[#57FAE9]/20 bg-[#05131c] px-5 py-4 text-sm text-[#9EF7FF]">
              Password updated successfully. Redirecting you to sign in.
            </div>
          ) : (
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-[0.2em] text-[#9FB2D1]">
                  New Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="h-14 w-full rounded-2xl border border-[#57FAE9]/10 bg-[#08172E] px-4 pr-12 text-white outline-none transition-all focus:border-[#57FAE9]/40 focus:ring-2 focus:ring-[#57FAE9]/20"
                    placeholder="Enter new password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((value) => !value)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9FB2D1]"
                  >
                    <span className="material-symbols-outlined">
                      {showPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-[0.2em] text-[#9FB2D1]">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="h-14 w-full rounded-2xl border border-[#57FAE9]/10 bg-[#08172E] px-4 pr-12 text-white outline-none transition-all focus:border-[#57FAE9]/40 focus:ring-2 focus:ring-[#57FAE9]/20"
                    placeholder="Confirm new password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((value) => !value)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9FB2D1]"
                  >
                    <span className="material-symbols-outlined">
                      {showConfirmPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-2xl bg-[linear-gradient(135deg,#0A5BFF,#57FAE9)] px-6 py-4 text-base font-black text-[#021223] shadow-[0_18px_40px_rgba(87,250,233,0.2)] transition-all hover:scale-[1.01] active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? 'Updating Password...' : 'Reset Password'}
              </button>
            </form>
          )}

          <div className="mt-8 text-center">
            <Link to="/login" className="text-sm font-bold text-[#9EF7FF] hover:text-white">
              Return to sign in
            </Link>
          </div>
        </div>
      </main>

      <AppFooter className="bg-[#061221]" />
    </div>
  )
}
