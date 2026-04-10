import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import AuthDivider from '../components/auth/AuthDivider'
import SocialAuthButton from '../components/auth/SocialAuthButton'
import { ApiError, API_BASE_URL } from '../lib/api'
import { authStorage, register } from '../lib/auth'

const TEAM_OPTIONS = [
  { value: 'learner', label: 'Learner' },
  { value: 'tutor', label: 'Instructor' },
  { value: 'admin', label: 'Admin' },
] as const

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    role: 'learner',
    password: '',
    confirmPassword: '',
    termsAgreed: false,
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement
      setFormData(prev => ({ ...prev, [name]: target.checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage('')

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match.')
      return
    }

    setIsSubmitting(true)

    try {
      await register({
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        role: formData.role,
      })
      authStorage.setPendingVerificationEmail(formData.email)
      navigate('/verify-email')
    } catch (error) {
      if (error instanceof ApiError || error instanceof Error) {
        setErrorMessage(error.message)
      } else {
        setErrorMessage('Unable to create your account right now.')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const getPasswordStrength = () => {
    const password = formData.password
    if (password.length < 6) return 0
    if (password.length < 8) return 1
    if (password.length < 12) return 2
    return 3
  }

  const passwordStrength = getPasswordStrength()

  return (
    <div className="bg-surface text-on-surface selection:bg-primary-container selection:text-white">
      <Navbar
        links={[
          { label: 'Programs', to: '/' },
          { label: 'Mentorship', to: '/' },
          { label: 'Research', to: '/' },
          { label: 'Insights', to: '/' },
        ]}
      />

      <main className="min-h-screen pt-20 flex bg-surface">
        {/* Left Column: Architectural Visual */}
        <div className="hidden lg:block w-1/2 relative overflow-hidden bg-[#00327D]">
          <img
            alt="Architectural structure"
            className="absolute inset-0 w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJgOLp5ENMaPMuhEYoXwSXMuerv9gL7scytOl7Fk8GlLTjjuUeNkZP1DIijsB6rwiufOYBMF8N8nT_QuLGVF4TBEaNTMNklZSFdAvv7dGxF0FzEtU_VjXBC4fr9zgUjWaCJZ8BDeuGdCZ151B2xZmi_8hnVW9C9ya8BM0BhWoBPF7wqMv-ofoBZPFsKerKsyDiGRvXZuWXfSSuRry6xfAWC9I_BZ-Ym0-EttLv1z2_3xzpkWiealV1l3UN2oLe-Lmk5agoQOmv0y0"
          />
          <div className="absolute inset-0 bg-[#00327D]/40 backdrop-multiply"></div>
          <div className="absolute inset-0 bg-linear-to-t from-[#00327D]/90 via-transparent to-transparent"></div>
          <div className="absolute bottom-20 left-16 right-16">
            <div className="inline-block p-1 mb-6 bg-tertiary-fixed rounded-lg">
              <span className="px-3 py-1 text-on-tertiary-fixed text-[10px] font-bold uppercase tracking-[0.2em]">
                Curated Growth
              </span>
            </div>
            <h2 className="text-5xl font-extrabold text-white leading-tight mb-6 tracking-tight font-headline animate-fade-in-up">
              Master the architecture of digital spaces.
            </h2>
            <p className="text-white/80 text-xl font-light leading-relaxed max-w-lg mb-8 animate-fade-in-up animate-stagger-1 text-[#DAE2FF]">
              Join a community of elite professionals designing the next generation of industry talent
              flows.
            </p>
            <div className="mt-12 flex items-center space-x-4">
              <div className="flex -space-x-3">
                <img
                  className="w-10 h-10 rounded-full border-2 border-primary"
                  alt="User 1"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVxrI9I5n58GFjq4GFTGavFlXmZe1bnwXPHtwHXeUg1aK1lVc7QKPvWr4O3EaYIjo56Qyp-AehpphzpbwI3peCA6mH3SMiUQnPK5y_zNT1ZmR_FblJnP7oSIdV4oTn4k_dpA6R5o9EVH256JTlGMsvpDvLW7E2Kt-iJ4839-mW_cxwIDVedGKFpDZyRrVl92Y3swdRuk9oj5AeAYnCk74RmRPjXJAt7mbdlVteunFv_yurekYAEQqpvZMJ4eMQZz3sBVC1ru3TwM0"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-primary"
                  alt="User 2"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOob43RVwc0CW12KB2DOBUtlHf-ew8BT46J0LkWSlklYMWRvTXlfGxTj8f_hGk8DCjxYTFV0FYgMSdkIchWPU2n2hN7odES9Y79DF2NjAD-N8AdXIh5Jqwuyr3gqbeQ6gQO9lHGathfnZ8t7xnUX7qARnkKnypxwL4TgPHwGE30jrZpU1GLNKHnIrF5FFm7Q1ZpHlQVl4KPpTMjINcfIXSwtWpEM4tMy34N59zfkcEZQrDOxVXaSd1q8rnaMb9573149iRc69wJQw"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-primary"
                  alt="User 3"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuSaxmsWaDeDfuFTFA6AOZfuiXWOiOZdbCDtc0TRm4vIvUnDcFYgxg-3GiykXQ6piGpupz92uli7GK-c88t_Bj236Eo0Jt4a3znXGpG2Abdywt_o3WxZdqHHQPHQcAQhhSSicLVV4oImwIvwoZMKi-0fUx9CbJsM4L2uLsI-eJ-r83k0tRbZ6kFQrc-HDWjTEkPsQUEG_jFBZK2FMzgroFpsZNaPaj4lKpHFBNQUodcY_ojab8pK4UaOyEVjPt82HwOmam6WsYV6E"
                />
              </div>
              <span className="text-white/60 text-sm font-medium">Joined by 2,400+ members this month</span>
            </div>
          </div>
        </div>

        {/* Right Column: Registration Card */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-24 bg-surface">
          <div className="w-full max-w-md">
            <div className="mb-10">
              <h1 className="text-3xl font-extrabold text-on-surface mb-2 tracking-tight font-headline">
                Create your account
              </h1>
              <p className="text-on-surface-variant font-medium">
                Join TalentFlow LMS and start your journey.
              </p>
            </div>

            {/* Social Sign-on */}
            <div className="grid grid-cols-2 gap-4 mb-8 animate-fade-in-up animate-stagger-1">
              <SocialAuthButton onClick={() => window.location.href = `${API_BASE_URL}/auth/google`}>
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  ></path>
                </svg>
                <span className="text-sm font-semibold text-[#191C1E]">Google</span>
              </SocialAuthButton>
              <SocialAuthButton onClick={() => window.location.href = `${API_BASE_URL}/auth/github`}>
                <svg className="w-5 h-5 fill-on-surface" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                <span className="text-sm font-semibold text-[#191C1E]">GitHub</span>
              </SocialAuthButton>
            </div>

            <AuthDivider label="Or continue with email" />

            {/* Form */}
            <form className="space-y-5" onSubmit={handleSubmit}>
              {errorMessage ? (
                <div className="rounded-lg border border-[#57FAE9]/20 bg-[#05131c] px-4 py-3 text-sm text-[#9EF7FF]">
                  {errorMessage}
                </div>
              ) : null}
              <div className="animate-fade-in-up animate-stagger-2">
                <label className="block text-sm font-semibold text-[#434653] mb-2">
                  Full Name
                </label>
                <input
                  className="w-full px-4 py-3 rounded-lg bg-[#E0E3E5] border-none focus:ring-2 focus:ring-[#2559BD] text-[#191C1E] transition-all outline-none"
                  placeholder="John Doe"
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="animate-fade-in-up animate-stagger-2">
                <label className="block text-sm font-semibold text-[#434653] mb-2">
                  Email Address
                </label>
                <input
                  className="w-full px-4 py-3 rounded-lg bg-[#E0E3E5] border-none focus:ring-2 focus:ring-[#2559BD] text-[#191C1E] transition-all outline-none"
                  placeholder="john@example.com"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="animate-fade-in-up animate-stagger-2">
                <label className="block text-sm font-semibold text-[#434653] mb-2">
                  Select Role
                </label>
                <select
                  className="w-full px-4 py-3 rounded-lg bg-[#E0E3E5] border-none focus:ring-2 focus:ring-[#2559BD] text-[#191C1E] transition-all outline-none"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                >
                  {TEAM_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>


              <div>
                <label className="block text-sm font-semibold text-on-surface-variant mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    className="w-full px-4 py-3 rounded-lg bg-[#E0E3E5] border-none focus:ring-2 focus:ring-[#2559BD] text-[#191C1E] transition-all outline-none"
                    placeholder="••••••••"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant cursor-pointer hover:text-on-surface transition-colors"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    <span className="material-symbols-outlined">
                      {showPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
                <div className="mt-3 flex gap-1">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 flex-1 rounded-full ${i < passwordStrength
                          ? 'bg-tertiary-container'
                          : 'bg-surface-container-highest'
                        }`}
                    ></div>
                  ))}
                </div>
                <p className="mt-2 text-[10px] text-tertiary-fixed-dim font-bold uppercase tracking-wider">
                  {passwordStrength === 0 && 'Too weak'}
                  {passwordStrength === 1 && 'Weak'}
                  {passwordStrength === 2 && 'Good'}
                  {passwordStrength === 3 && 'Strong Security'}
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-on-surface-variant mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    className="w-full px-4 py-3 rounded-lg bg-[#E0E3E5] border-none focus:ring-2 focus:ring-[#2559BD] text-[#191C1E] transition-all outline-none"
                    placeholder="••••••••"
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant cursor-pointer hover:text-on-surface transition-colors"
                    aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                  >
                    <span className="material-symbols-outlined">
                      {showConfirmPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-3 py-2">
                <input
                  className="mt-1 w-4 h-4 rounded text-[#608DF4] focus:ring-primary border-outline-variant/15 cursor-pointer"
                  type="checkbox"
                  name="termsAgreed"
                  id="terms"
                  checked={formData.termsAgreed}
                  onChange={handleChange}
                  required
                />
                <label className="text-xs text-[#434653] leading-relaxed" htmlFor="terms">
                  By creating an account, I agree to the{' '}
                  <a
                    className="text-[#00419E] font-bold hover:underline"
                    href="#"
                  >
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a
                    className="text-[#00419E] font-bold hover:underline"
                    href="#"
                  >
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>

              <button
                className="w-full py-4 rounded-lg bg-linear-to-r from-[#00419E] to-[#608DF4] text-white font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
                disabled={!formData.termsAgreed || isSubmitting}
              >
                {isSubmitting ? 'Creating Account...' : 'Create Account'}
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm font-medium text-on-surface-variant">
                Already have an account?{' '}
                <Link
                  to="/login"
                  className="text-primary font-extrabold hover:underline"
                >
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
