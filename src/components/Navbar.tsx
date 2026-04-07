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
    <header className="fixed top-0 z-50 w-full bg-[#f7f9fb]/70 dark:bg-[#191c1e]/70 backdrop-blur-xl shadow-[0px_12px_32px_rgba(25,28,30,0.06)]">
      <div className="flex justify-between items-center w-full px-6 md:px-8 py-4 md:py-6 max-w-7xl mx-auto">
        <Link
          to="/"
          className="text-xl md:text-2xl font-black tracking-tight text-[#00327d] dark:text-[#ffffff] font-headline"
        >
          TalentFlow
        </Link>

        {links.length > 0 && (
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-[#434653] dark:text-[#c3c6d5] text-sm md:text-base font-medium hover:text-[#0047AB] transition-colors duration-300 font-headline"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}

        {rightSlot && <div className="flex items-center space-x-6">{rightSlot}</div>}
      </div>
    </header>
  )
}