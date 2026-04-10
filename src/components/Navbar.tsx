import { useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'

type NavbarLink = {
  label: string
  to: string
}

type NavbarProps = {
  links?: NavbarLink[]
  rightSlot?: ReactNode
}

export default function Navbar({ links = [], rightSlot }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 z-[70] w-full border-b border-white/50 bg-[#F7F9FB]/92 backdrop-blur-[20px] shadow-ambient transition-colors duration-300 dark:border-[#57FAE9]/10 dark:bg-[#020816]/92">
      <div className="flex justify-between items-center w-full px-6 md:px-8 py-4 md:py-6 max-w-7xl mx-auto">
        <Link
          to="/"
          className="text-xl md:text-2xl text-[#0047AB] font-black tracking-tight font-headline shrink-0 transition-colors duration-300 dark:text-[#8AB4FF]"
        >
          TalentFlow
        </Link>

        {links.length > 0 && (
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                  className="text-[#434653] text-sm md:text-base font-medium hover:text-[#0047AB] transition-colors duration-300 font-headline animate-fade-in-up dark:text-[#C8D7F8] dark:hover:text-[#57FAE9]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center space-x-6">
            {rightSlot}
          </div>
          
          <button 
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-xl border border-[#0047AB]/15 bg-[linear-gradient(135deg,#ffffff,#e8f0ff)] text-[#0047AB] shadow-[0_14px_32px_rgba(37,89,189,0.2)] transition-all active:scale-90 dark:border-[#57FAE9]/20 dark:bg-[linear-gradient(135deg,#0A1930,#123457)] dark:text-[#57FAE9] dark:shadow-[0_12px_30px_rgba(2,10,24,0.45)]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`fixed inset-0 z-[80] md:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <div
          className={`absolute inset-0 z-0 bg-[#00142F]/42 backdrop-blur-[4px] transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsMenuOpen(false)}
        ></div>
        <div className={`absolute inset-0 z-10 transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex min-h-screen w-full flex-col overflow-y-auto bg-[linear-gradient(180deg,#00327D_0%,#00275F_100%)] px-6 pb-8 pt-[5.5rem] text-white shadow-[0_24px_80px_rgba(0,32,82,0.48)]">
          <div className="mb-10 flex justify-end">
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/8 text-[#F5F9FF] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] transition-all hover:border-white/30 hover:bg-white/12"
            >
              <span className="material-symbols-outlined text-[26px]">close</span>
            </button>
          </div>

          <nav className="flex flex-col items-center gap-6 pt-2 text-center">
            {links.map((link, i) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className="w-full max-w-sm border-b border-white/10 pb-4 text-[1.95rem] font-black tracking-tight text-white transition-colors hover:text-[#D7E7FF]"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-8 px-2">
            <Link
              to="/signup"
              onClick={() => setIsMenuOpen(false)}
              className="flex w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,#FF8A3D,#FFC07A)] px-6 py-5 text-xl font-black tracking-tight text-[#06101F] shadow-[0_18px_40px_rgba(255,138,61,0.28)] transition-transform hover:scale-[1.01]"
            >
              Get Started
            </Link>
            <div className="mt-4 h-px w-full bg-[linear-gradient(90deg,transparent,#A9C7FF,transparent)] opacity-80"></div>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-white [&_a]:text-white [&_button]:text-white">
            {rightSlot}
          </div>
        </div>
        </div>
      </div>
    </header>
  )
}
