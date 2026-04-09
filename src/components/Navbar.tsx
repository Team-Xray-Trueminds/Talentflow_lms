import type { ReactNode } from 'react'
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
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/50 bg-[#F7F9FB]/70 backdrop-blur-[20px] shadow-ambient transition-colors duration-300 dark:border-[#57FAE9]/10 dark:bg-[#020816]/75">
      <div className="flex justify-between items-center w-full px-6 md:px-8 py-4 md:py-6 max-w-7xl mx-auto">
        <Link
          to="/"
          className="text-xl md:text-2xl text-[#0047AB] font-black tracking-tight font-headline transition-colors duration-300 dark:text-[#8AB4FF]"
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

        <div className="flex items-center gap-4 md:gap-6">
          {rightSlot && <div className="flex items-center space-x-6">{rightSlot}</div>}
        </div>
      </div>
    </header>
  )
}
