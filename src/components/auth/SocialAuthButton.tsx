import type { ReactNode } from 'react'

type SocialAuthButtonProps = {
  children: ReactNode
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

export default function SocialAuthButton({
  children,
  type = 'button',
  onClick,
}: SocialAuthButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="flex items-center justify-center gap-2 h-11 px-4 bg-surface-container-lowest hover:bg-surface-container-low text-on-surface text-sm font-medium rounded-lg transition-colors shadow-ambient"
    >
      {children}
    </button>
  )
}
