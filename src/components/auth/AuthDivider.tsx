type AuthDividerProps = {
  label: string
}

export default function AuthDivider({ label }: AuthDividerProps) {
  return (
    <div className="relative flex items-center my-8">
      <div className="grow h-px bg-surface-container-high"></div>
      <span className="shrink mx-4 text-xs font-bold text-outline uppercase tracking-widest">{label}</span>
      <div className="grow h-px bg-surface-container-high"></div>
    </div>
  )
}
