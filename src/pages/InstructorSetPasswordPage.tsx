import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import AppFooter from '../components/AppFooter'
import { authStorage } from '../lib/auth'

export default function InstructorSetPasswordPage() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()
  const email = authStorage.getPendingVerificationEmail() || ''

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage('')

    if (password !== confirmPassword) {
      setErrorMessage('Verification failed: Passwords do not match.')
      return
    }

    if (password.length < 8) {
      setErrorMessage('Architectural integrity requirement: Password must be at least 8 characters.')
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call to set permanent password
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Verification successful, clear the mock flags
      localStorage.removeItem(`must_change_password_${email}`)
      authStorage.clearPendingVerificationEmail()
      
      // Redirect to the final step of the flow
      navigate('/settings/instructor-setup')
    } catch (error) {
      setErrorMessage('Unable to synchronize credentials at this time.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-[#F8FAFC] text-[#191C1E] min-h-screen flex flex-col font-sans">
      <Navbar
         links={[
          { label: 'Platform', to: '/' },
          { label: 'Mentorship', to: '/' },
        ]}
      />

      <main className="grow flex items-center justify-center px-4 pt-24 pb-20 relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-[-20%] left-[-10%] w-[140%] h-[140%] bg-[radial-gradient(circle_at_center,rgba(0,71,171,0.03)_0%,transparent_70%)] -z-10"></div>
        
        <div className="w-full max-w-xl bg-white rounded-[2.5rem] shadow-[0_40px_120px_rgba(0,0,0,0.08)] p-12 md:p-16 flex flex-col animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="mb-10 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
              <span className="material-symbols-outlined text-3xl">lock_reset</span>
            </div>
            <h1 className="font-headline text-4xl font-extrabold tracking-tighter text-[#121417] mb-2 italic">
              Credential Setup
            </h1>
            <p className="text-[#434653] text-lg font-medium">
              Establish your permanent access credentials for the TalentFlow ecosystem.
            </p>
          </div>

          {errorMessage && (
            <div className="mb-8 w-full rounded-2xl border border-error/20 bg-error/5 px-6 py-4 text-sm text-error font-bold flex items-center gap-3">
              <span className="material-symbols-outlined text-lg">error</span>
              {errorMessage}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-outline ml-1">New Access Phrase</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="w-full h-14 px-6 bg-[#F8FAFC] border-none rounded-2xl focus:ring-2 focus:ring-primary/20 text-[#191C1E] transition-all font-medium"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-outline ml-1">Confirm Access Phrase</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="w-full h-14 px-6 bg-[#F8FAFC] border-none rounded-2xl focus:ring-2 focus:ring-primary/20 text-[#191C1E] transition-all font-medium"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {showConfirmPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-16 bg-primary text-white font-black uppercase tracking-[0.2em] text-sm rounded-2xl active:scale-95 transition-all duration-300 shadow-xl shadow-primary/20 hover:shadow-2xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed mt-4"
            >
              {isSubmitting ? 'Establishing Connection...' : 'Set Permanent Access'}
            </button>
          </form>

          <p className="mt-10 text-center text-xs font-bold text-outline leading-relaxed max-w-sm mx-auto">
            Security Protocol: Your permanent password should be unique and distinct from your temporary provisioning code.
          </p>
        </div>
      </main>

      <AppFooter />
    </div>
  )
}
