import { useState } from 'react'
import Navbar from '../components/Navbar'
import AppFooter from '../components/AppFooter'
import OTPInput from '../components/auth/OTPInput'
import SuccessModal from '../components/auth/SuccessModal'

export default function VerifyEmailPage() {
  const [isVerifying, setIsVerifying] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const email = "alex.design@company.com" // This would normally come from context or state

  const handleVerify = (code: string) => {
    console.log('Verifying code:', code)
    setIsVerifying(true)
    // Simulate API call
    setTimeout(() => {
      setIsVerifying(false)
      setShowSuccess(true)
    }, 2000)
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

          <div className="mb-12">
            <OTPInput onComplete={handleVerify} />
          </div>

          <div className="w-full space-y-6">
            <button
              onClick={() => handleVerify('123456')}
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
              <button className="flex items-center gap-2 text-[#2559BD] font-bold hover:opacity-80 transition-all group">
                <span className="material-symbols-outlined text-[20px] group-hover:-rotate-12 transition-transform">edit</span>
                Change Email
              </button>
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
