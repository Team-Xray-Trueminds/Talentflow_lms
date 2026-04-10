import { Link } from 'react-router-dom'

interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
  email: string
}

export default function SuccessModal({ isOpen, onClose, email }: SuccessModalProps) {
  if (!isOpen) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#191C1E]/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div
        className={`relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 ${
          isOpen ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-8 opacity-0'
        }`}
      >
        {/* Animated Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-br from-[#00419E] to-[#608DF4] overflow-hidden">
          <div className="absolute top-[-50%] left-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-[-50%] right-[-10%] w-48 h-48 bg-white/10 rounded-full blur-2xl animate-pulse delay-700"></div>
        </div>

        <div className="relative pt-16 pb-10 px-8 flex flex-col items-center text-center">
          {/* Success Icon Wrapper */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center animate-bounce-subtle">
             <div className="w-16 h-16 bg-[#D3E4FE] rounded-xl flex items-center justify-center text-[#00419E]">
                <span className="material-symbols-outlined text-4xl font-bold">check_circle</span>
             </div>
          </div>

          <div className="mt-12 space-y-4">
            <h2 className="text-3xl font-extrabold text-[#191C1E] tracking-tight font-headline">
              Verified!
            </h2>
            <p className="text-[#434653] font-medium leading-relaxed">
              Your email <span className="text-[#191C1E] font-bold">{email}</span> has been successfully verified.
            </p>
            <p className="text-sm text-[#74777F]">
              Welcome to the elite community of Talent Flow professionals. Your professional journey starts now.
            </p>
          </div>

          <div className="mt-10 w-full space-y-4">
            <Link
              to="/login"
              className="block w-full py-4 rounded-xl bg-linear-to-r from-[#00419E] to-[#608DF4] text-white font-bold text-lg shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all text-center"
            >
              Continue to Sign In
            </Link>
            <button
              onClick={onClose}
              className="w-full py-3 text-[#434653] font-bold text-sm hover:text-[#191C1E] transition-colors"
            >
              Dismiss
            </button>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="h-1.5 w-full bg-linear-to-r from-[#00419E] via-[#608DF4] to-[#00419E]"></div>
      </div>
    </div>
  )
}
