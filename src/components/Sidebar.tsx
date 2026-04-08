import { Link, useLocation } from 'react-router-dom'

interface SidebarItemProps {
  icon: string
  label: string
  to: string
  active?: boolean
}

function SidebarItem({ icon, label, to, active }: SidebarItemProps) {
  return (
    <Link
      to={to}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
        active
          ? 'bg-[#00327D] text-white shadow-lg'
          : 'text-[#434653] hover:bg-white hover:text-[#00327D]'
      }`}
    >
      <span className={`material-symbols-outlined text-[20px] ${active ? 'fill-1' : 'group-hover:scale-110'}`}>
        {icon}
      </span>
      <span className="text-sm font-bold tracking-tight">{label}</span>
    </Link>
  )
}

export default function Sidebar() {
  const location = useLocation()

  const menuItems = [
    { icon: 'auto_stories', label: 'Learning Path', to: '/learning-path' },
    { icon: 'diversity_3', label: 'Mentorship', to: '/mentorship' },
    { icon: 'groups', label: 'Community', to: '/community' },
    { icon: 'settings', label: 'Settings', to: '/settings' },
  ]

  return (
    <aside className="w-80 h-screen sticky top-0 bg-[#F2F4F6] border-r border-[#C3C6D5]/15 flex flex-col p-6 z-10">
      <div className="mb-12 px-4">
        <h2 className="text-2xl font-black text-[#00327D] font-headline tracking-tighter">
          The Curator
        </h2>
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#434653] mt-1">
          Professional Suite
        </p>
      </div>

      <nav className="grow space-y-2">
        {menuItems.map((item) => (
          <SidebarItem
            key={item.to}
            {...item}
            active={location.pathname === item.to}
          />
        ))}
      </nav>

      <div className="mt-auto space-y-2 pt-6 border-t border-[#C3C6D5]/30">
        <SidebarItem icon="help" label="Help Center" to="/help" active={location.pathname === '/help'} />
        <Link
          to="/login"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#BA1A1A] hover:bg-[#FFDAD6] transition-all duration-200"
        >
          <span className="material-symbols-outlined text-[20px]">logout</span>
          <span className="text-sm font-bold tracking-tight">Logout</span>
        </Link>
      </div>
    </aside>
  )
}
