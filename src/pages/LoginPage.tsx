import { useState } from 'react'
import Navbar from '../components/Navbar'
import AppFooter from '../components/AppFooter'
import AuthDivider from '../components/auth/AuthDivider'
import SocialAuthButton from '../components/auth/SocialAuthButton'
import { Link } from 'react-router-dom'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Handle login logic
    console.log('Login attempted:', { email, password })
  }

  return (
    <div className="bg-[#F7F9FB] text-[#191C1E] min-h-screen flex flex-col">
      <Navbar
        links={[
          { label: 'About', to: '/' },
          { label: 'Contact', to: '/' },
        ]}
      />

      <main className="grow flex items-center mt-12 justify-center px-4 pt-20 md:pt-20 pb-20 md:pb-12 relative overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-100 h-100 rounded-full bg-secondary-fixed/30 blur-[120px] -z-10"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-125 h-125 rounded-full bg-primary-fixed/20 blur-[150px] -z-10"></div>

        <div className="w-full max-w-115 bg-white rounded-xl shadow-ambient p-8 md:py-16 flex flex-col animate-scale-in">
          <div className="mb-8">
            <h1 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight text-on-surface mb-2">
              Welcome Back
            </h1>
            <p className="text-[#434653] text-sm font-medium">
              Sign in to continue your growth journey.
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant ml-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full h-12 px-4 bg-[#E0E3E5] border-none rounded-lg focus:ring-2 focus:ring-[#2559BD] text-[#191C1E] transition-all placeholder:text-[#C3C6D5]"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant ml-1">
                  Password
                </label>
                <a
                  href="#"
                  className="text-xs font-semibold text-[#2559BD] hover:text-primary transition-colors"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full h-12 px-4 bg-[#E0E3E5] border-none rounded-lg focus:ring-2 focus:ring-[#2559BD] text-[#191C1E] transition-all placeholder:text-[#C3C6D5]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full h-12 bg-linear-to-r from-[#00419E] to-[#87A9FF] text-white font-semibold rounded-lg active:scale-95 transition-transform duration-150 shadow-md hover:shadow-lg"
            >
              Log In
            </button>
          </form>

          <AuthDivider label="Or continue with" />

          <div className="grid grid-cols-2 gap-4 mb-8">
            <SocialAuthButton>
              <img
                alt="Google"
                className="w-4 h-4"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSOtatWE6ZsAvJIi8VhTCvDhCQpWXl-sExaDhi4Nd23zmfLzaBj_ezlRpsuMBauqP6rAe_I2YZYpl7aP4boLOMHjXUCvDiqN1Z4QaceJC7JB07fpUR-gboHN8lz6d8zoABdc0C-Zfg7bdXP7DBnwQD00LjjTMQ_BJyx2GWtj2tAFOVHSjmcZlCaY9RQStC_oTH6s8i_PfSY_LOdEkqPkcnOZuy0xyAqt_vkI4mGixk6-PEg7nWvPg8U8fSduQny16Q7XuCoOwV8ks"
              />
              Google
            </SocialAuthButton>
            <SocialAuthButton>
              <span className="material-symbols-outlined text-[18px]">key</span>
              SSO
            </SocialAuthButton>
          </div>

          <p className="text-center text-sm text-[#434653]">
            New to TalentFlow?{' '}
            <Link to="/signup" className="text-[#4473D8] font-semibold hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </main>

      <div className="fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-120 h-150 bg-surface-container-low -z-20 rounded-4xl opacity-50 blur-2xl"></div>
      <AppFooter className="mt-10" />
    </div>
  )
}
