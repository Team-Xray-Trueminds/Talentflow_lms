import { useState } from 'react'
import Navbar from '../components/Navbar'

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
    <div className="bg-surface text-on-surface min-h-screen flex flex-col">
      <Navbar
        links={[
          { label: 'About', to: '/' },
          { label: 'Contact', to: '/' },
        ]}
      />

      {/* Main Content */}
      <main className="grow flex items-center justify-center px-4 pt-20 md:pt-20 pb-20 md:pb-12 relative overflow-hidden">
        {/* Asymmetric Background Elements */}
        <div className="absolute top-[-10%] left-[-5%] w-100 h-100 rounded-full bg-secondary-fixed/30 blur-[120px] -z-10"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-125 h-125 rounded-full bg-primary-fixed/20 blur-[150px] -z-10"></div>

        {/* Login Card */}
        <div className="w-full max-w-115 bg-surface-container-lowest rounded-xl shadow-[0px_12px_32px_rgba(25,28,30,0.06)] p-8 md:p-10 flex flex-col">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight text-on-surface mb-2">
              Welcome Back
            </h1>
            <p className="text-on-surface-variant text-sm font-medium">
              Sign in to continue your growth journey.
            </p>
          </div>

          {/* Login Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Email Field */}
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
                className="w-full h-12 px-4 bg-surface-container-highest border-none rounded-lg focus:ring-2 focus:ring-surface-tint text-on-surface transition-all placeholder:text-outline-variant"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant ml-1">
                  Password
                </label>
                <a
                  href="#"
                  className="text-xs font-semibold text-primary-container hover:text-primary transition-colors"
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
                  className="w-full h-12 px-4 bg-surface-container-highest border-none rounded-lg focus:ring-2 focus:ring-surface-tint text-on-surface transition-all placeholder:text-outline-variant"
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

            {/* Login Button */}
            <button
              type="submit"
              className="w-full h-12 bg-linear-to-r from-[#00327d] to-[#0047ab] text-white font-semibold rounded-lg active:scale-95 transition-transform duration-150 shadow-md hover:shadow-lg"
            >
              Log In
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-outline-variant/30"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase tracking-widest">
              <span className="bg-surface-container-lowest px-4 text-on-surface-variant">
                Or continue with
              </span>
            </div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button className="flex items-center justify-center gap-2 h-11 bg-surface-container-low hover:bg-surface-container-high text-on-surface text-sm font-medium rounded-lg transition-colors border border-outline-variant/15">
              <img
                alt="Google"
                className="w-4 h-4"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSOtatWE6ZsAvJIi8VhTCvDhCQpWXl-sExaDhi4Nd23zmfLzaBj_ezlRpsuMBauqP6rAe_I2YZYpl7aP4boLOMHjXUCvDiqN1Z4QaceJC7JB07fpUR-gboHN8lz6d8zoABdc0C-Zfg7bdXP7DBnwQD00LjjTMQ_BJyx2GWtj2tAFOVHSjmcZlCaY9RQStC_oTH6s8i_PfSY_LOdEkqPkcnOZuy0xyAqt_vkI4mGixk6-PEg7nWvPg8U8fSduQny16Q7XuCoOwV8ks"
              />
              Google
            </button>
            <button className="flex items-center justify-center gap-2 h-11 bg-surface-container-low hover:bg-surface-container-high text-on-surface text-sm font-medium rounded-lg transition-colors border border-outline-variant/15">
              <span className="material-symbols-outlined text-[18px]">key</span>
              SSO
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="text-center text-sm text-on-surface-variant">
            New to TalentFlow?{' '}
            <a href="#" className="text-primary-container font-semibold hover:underline">
              Create an account
            </a>
          </p>
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-white/70 dark:bg-[#191c1e]/70 backdrop-blur-xl flex justify-around items-center px-4 h-16">
        <a
          href="#"
          className="flex flex-col items-center justify-center text-[#434653] p-2 hover:bg-[#f2f4f6] dark:hover:bg-[#191c1e] transition-all rounded-xl"
        >
          <span className="material-symbols-outlined">help_outline</span>
          <span className="text-[10px] font-medium tracking-wide font-label mt-1">Help</span>
        </a>
        <a
          href="#"
          className="flex flex-col items-center justify-center text-[#434653] p-2 hover:bg-[#f2f4f6] dark:hover:bg-[#191c1e] transition-all rounded-xl"
        >
          <span className="material-symbols-outlined">chat_bubble_outline</span>
          <span className="text-[10px] font-medium tracking-wide font-label mt-1">Support</span>
        </a>
      </nav>

      {/* Decorative Background */}
      <div className="fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-120 h-150 bg-surface-container-low -z-20 rounded-4xl opacity-50 blur-2xl"></div>
    </div>
  )
}
