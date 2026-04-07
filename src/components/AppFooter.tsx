type FooterLink = {
  label: string
  href: string
}

type AppFooterProps = {
  links?: FooterLink[]
  className?: string
}

const defaultLinks: FooterLink[] = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Contact Support', href: '#' },
]

export default function AppFooter({ links = defaultLinks, className = '' }: AppFooterProps) {
  return (
    <footer className={`w-full py-12 bg-surface-container-low ${className}`.trim()}>
      <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-6">
        <div className="text-center md:text-left">
          <div className="font-headline font-bold text-on-surface text-xl mb-2">TalentFlow</div>
          <p className="font-body text-sm tracking-wide text-on-surface-variant">
            © 2024 TalentFlow. Architecting the future of career mentorship.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              className="font-body text-sm tracking-wide text-on-surface-variant hover:text-primary transition-colors"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
