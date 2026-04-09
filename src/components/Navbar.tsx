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
    <header className="fixed top-0 z-50 w-full border-b border-white/50 bg-[#F7F9FB]/70 backdrop-blur-[20px] shadow-ambient transition-colors duration-300 dark:border-[#57FAE9]/10 dark:bg-[#020816]/75">
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
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-[#0047AB]/5 text-[#0047AB] transition-all active:scale-90"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`fixed inset-0 top-[64px] z-40 md:hidden bg-white/95 backdrop-blur-xl transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
        <div className="flex flex-col p-8 space-y-8">
          {links.map((link, i) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-black text-[#191C1E] tracking-tight hover:text-[#0047AB] transition-colors border-b border-slate-100 pb-4"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-8 flex flex-col gap-4">
            {rightSlot}
          </div>
        </div>
      </div>
    </header>
  )
}
