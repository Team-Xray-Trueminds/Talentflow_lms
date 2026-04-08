import { Link, useLocation } from 'react-router-dom'

interface SidebarItemProps {
  icon: string
  label: string
  to: string
  active?: boolean
  isSubItem?: boolean
}

function SidebarItem({ icon, label, to, active, isSubItem }: SidebarItemProps) {
  return (
    <Link
      to={to}
      className={`relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group overflow-hidden ${
        active
          ? 'bg-white text-[#00327D] shadow-ambient translate-x-1'
          : 'text-[#434653] hover:bg-white/50 hover:text-[#00327D]'
      } ${isSubItem ? 'ml-6 opacity-80 hover:opacity-100' : ''}`}
    >
      {active && (
        <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-[#00327D] rounded-r-full animate-fade-in ${isSubItem ? 'h-4' : 'h-6'}`}></div>
      )}
      <span className={`material-symbols-outlined transition-transform duration-300 ${active ? 'fill-1 scale-110' : 'group-hover:scale-110'} ${isSubItem ? 'text-[18px]' : 'text-[22px]'}`}>
        {icon}
      </span>
      <span className={`${isSubItem ? 'text-xs uppercase tracking-wider' : 'text-sm'} tracking-tight transition-all ${active ? 'font-black' : 'font-bold'}`}>
        {label}
      </span>
    </Link>
  )
}

export default function Sidebar() {
  const location = useLocation()
  const role = localStorage.getItem('userRole')
  const dashboardPath = role === 'Instructor' ? '/instructor/dashboard' : '/learner/dashboard'

  const menuItems = role === 'Instructor' 
    ? [
        { icon: 'dashboard', label: 'Dashboard', to: dashboardPath },
        { icon: 'school', label: 'My Courses', to: '/my-courses' },
        { icon: 'trending_up', label: 'Performance', to: '/performance' },
        { icon: 'assignment', label: 'Assignments', to: '/assignments' },
        { icon: 'chat', label: 'Messages', to: '/messages' },
        { icon: 'settings', label: 'Settings', to: '/settings' },
        { icon: 'account_circle', label: 'Profile Setup', to: '/settings/profile-setup', isSubItem: true },
      ]
    : [
        { icon: 'dashboard', label: 'Overview', to: dashboardPath },
        { icon: 'school', label: 'My Learning', to: '/my-learning' },
        { icon: 'event_upcoming', label: 'Milestones', to: '/milestones' },
        { icon: 'group', label: 'Community', to: '/community' },
        { icon: 'help_outline', label: 'Support', to: '/support' },
        { icon: 'account_circle', label: 'Profile Setup', to: '/settings/profile-setup', isSubItem: true },
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
