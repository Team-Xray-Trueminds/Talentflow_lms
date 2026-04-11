import { Link, useNavigate } from 'react-router-dom'

export default function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#F2F4F6] flex flex-col items-center justify-center p-6 text-center font-sans tracking-[-0.02em]">
      <div className="bg-white p-12 rounded-[2rem] shadow-ambient max-w-lg w-full relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-[-50px] left-[-50px] w-40 h-40 bg-gradient-to-br from-[#E3EDFD] to-transparent rounded-full opacity-50 blur-2xl"></div>
        <div className="absolute bottom-[-50px] right-[-50px] w-40 h-40 bg-gradient-to-tl from-gray-100 to-transparent rounded-full opacity-50 blur-2xl"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-24 h-24 bg-[#F2F4F6] rounded-full flex items-center justify-center mb-8 border border-white shadow-sm">
            <span className="material-symbols-outlined text-2xl sm:text-3xl md:text-4xl text-[#00419E]">explore</span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl sm:text-5xl lg:text-6xl font-black text-[#191C1E] tracking-tighter mb-2">404</h1>
          <h2 className="text-xl font-bold text-[#191C1E] mb-4">Location Not Found</h2>
          <p className="text-[#74777F] mb-10 leading-relaxed text-sm">
            The destination you are trying to reach does not exist within the current architecture. It may have been relocated or removed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <button 
              onClick={() => navigate(-1)}
              className="flex-1 flex items-center justify-center gap-2 bg-[#F2F4F6] text-[#191C1E] border border-gray-200 py-4 px-6 rounded-2xl font-bold hover:bg-[#E2E6EA] transition-colors focus:ring-4 focus:ring-gray-100"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span> Go Back
            </button>
            <Link 
              to="/" 
              className="flex-1 flex items-center justify-center gap-2 bg-[#00419E] text-white py-4 px-6 rounded-2xl font-bold shadow-soft hover:translate-y-[-2px] hover:shadow-ambient transition-all focus:ring-4 focus:ring-[#D3E4FE]"
            >
              <span className="material-symbols-outlined text-sm">home</span> Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
