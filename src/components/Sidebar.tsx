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
      className={`relative flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-300 group overflow-hidden ${
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
      <span className={`${isSubItem ? 'text-[11px] uppercase tracking-wider' : 'text-sm'} tracking-tight transition-all ${active ? 'font-black' : 'font-bold'}`}>
        {label}
      </span>
    </Link>
  )
}

function SidebarGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <p className="px-4 text-[9px] font-black uppercase tracking-[0.25em] text-[#74777F] mb-3">{label}</p>
      <div className="space-y-1">
        {children}
      </div>
    </div>
  )
}

export default function Sidebar() {
  const location = useLocation()
  const role = localStorage.getItem('userRole')
  const isInstructor = role === 'Instructor'
  const dashboardPath = isInstructor ? '/instructor/dashboard' : '/learner/dashboard'

  return (
    <aside className="hidden lg:flex w-80 h-screen sticky top-0 bg-[#F2F4F6] flex-col p-6 z-10 overflow-y-auto scrollbar-hide">
      <div className="mb-12 px-4 shrink-0">
        <h2 className="text-2xl font-black text-[#00327D] font-headline tracking-tighter">
          Talent Flow
        </h2>
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#434653] mt-1">
          Professional Suite
        </p>
      </div>

      <nav className="grow">
        {isInstructor ? (
          <>
            <SidebarGroup label="Management">
              <SidebarItem icon="dashboard" label="Dashboard" to={dashboardPath} active={location.pathname === dashboardPath} />
              <SidebarItem icon="school" label="My Courses" to="/instructor/courses" active={location.pathname === '/instructor/courses'} />
            </SidebarGroup>
            
            <SidebarGroup label="Academic">
              <SidebarItem icon="architecture" label="Academic Explorer" to="/curriculum" active={location.pathname === '/curriculum'} />
              <SidebarItem icon="assignment" label="Assignments" to="/assignments" active={location.pathname === '/assignments'} />
            </SidebarGroup>

            <SidebarGroup label="Operations">
              <SidebarItem icon="trending_up" label="Performance" to="/performance" active={location.pathname === '/performance'} />
              <SidebarItem icon="chat" label="Messages" to="/messages" active={location.pathname === '/messages'} />
              <SidebarItem icon="settings" label="Settings" to="/settings" active={location.pathname.startsWith('/settings')} />
            </SidebarGroup>
          </>
        ) : (
          <>
            <SidebarGroup label="Learning Path">
              <SidebarItem icon="dashboard" label="Dashboard" to={dashboardPath} active={location.pathname === dashboardPath} />
              <SidebarItem icon="school" label="Program Catalog" to="/learner/courses" active={location.pathname === '/learner/courses'} />
              <SidebarItem icon="menu_book" label="Academic Explorer" to="/curriculum" active={location.pathname === '/curriculum'} />
            </SidebarGroup>

            <SidebarGroup label="Growth Tools">
              <SidebarItem icon="groups" label="Mentors" to="/mentors" active={location.pathname === '/mentors'} />
              <SidebarItem icon="analytics" label="Insights" to="/insights" active={location.pathname === '/insights'} />
              <SidebarItem icon="settings" label="Account" to="/settings/profile-setup" active={location.pathname.startsWith('/settings')} />
            </SidebarGroup>
          </>
        )}
      </nav>

      <div className="mt-auto space-y-2 pt-6 border-t border-[#C3C6D5]/30 shrink-0">
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
