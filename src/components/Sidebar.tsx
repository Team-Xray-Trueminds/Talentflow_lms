import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from './auth/AuthProvider'

interface SidebarItemProps {
  icon: string
  label: string
  to: string
  active?: boolean
  isSubItem?: boolean
}

function SidebarItem({ icon, label, to, active, isSubItem, isInstructor }: SidebarItemProps & { isInstructor?: boolean }) {
  const activeClasses = isInstructor
    ? 'bg-white/15 text-[#57FAE9] shadow-lg translate-x-1'
    : 'bg-white text-[#00327D] shadow-ambient translate-x-1'
  
  const inactiveClasses = isInstructor
    ? 'text-[#D3E4FE]/70 hover:bg-white/5 hover:text-white'
    : 'text-[#434653] hover:bg-white/50 hover:text-[#00327D]'

  const indicatorColor = isInstructor ? 'bg-[#57FAE9]' : 'bg-[#00327D]'

  return (
    <Link
      to={to}
      className={`relative flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-300 group overflow-hidden ${
        active ? activeClasses : inactiveClasses
      } ${isSubItem ? 'ml-6 opacity-80 hover:opacity-100' : ''}`}
    >
      {active && (
        <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-6 rounded-r-full animate-fade-in ${indicatorColor} ${isSubItem ? 'h-4' : 'h-6'}`}></div>
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

function SidebarGroup({ label, children, isInstructor }: { label: string; children: React.ReactNode; isInstructor?: boolean }) {
  return (
    <div className="mb-8">
      <p className={`px-4 text-[9px] font-black uppercase tracking-[0.25em] mb-3 ${isInstructor ? 'text-[#D3E4FE]/40' : 'text-[#74777F]'}`}>{label}</p>
      <div className="space-y-1">
        {children}
      </div>
    </div>
  )
}

export default function Sidebar({ forceRole }: { forceRole?: 'Instructor' | 'Learner' | 'Admin' }) {
  const location = useLocation()
  const navigate = useNavigate()
  const { clearSession, user } = useAuth()
  const storedRole = user?.role === 'admin' ? 'Admin' : user?.role === 'tutor' ? 'Instructor' : 'Learner'
  // Use forceRole prop if provided, otherwise fallback to path detection, then finally localStorage
  const pathRole = location.pathname.startsWith('/admin') ? 'Admin' : (location.pathname.startsWith('/instructor') ? 'Instructor' : (location.pathname.startsWith('/learner') ? 'Learner' : null));
  const role = forceRole || pathRole || storedRole || 'Learner'
  const isInstructor = role === 'Instructor'
  const isAdmin = role === 'Admin'
  const dashboardPath = isAdmin ? '/admin/dashboard' : (isInstructor ? '/instructor/dashboard' : '/learner/dashboard')
  const assignmentMenuOpen =
    location.pathname === '/learner/assignments' || location.pathname === '/learner/submissions'

  const themeClasses = isAdmin 
    ? {
        aside: 'bg-white text-[#191C1E] border-r border-[#E0E3E5]',
        border: 'border-[#E0E3E5]'
      }
    : isInstructor 
    ? {
        aside: 'bg-[#001946] text-white',
        border: 'border-white/10'
      }
    : {
        aside: 'bg-[#F2F4F6] text-[#191C1E]',
        border: 'border-[#C3C6D5]/30'
      }

  const handleLogout = () => {
    clearSession()
    navigate('/login', { replace: true })
  }

  return (
    <aside className={`hidden lg:flex w-80 h-screen sticky top-0 flex-col p-6 z-10 transition-colors duration-500 overflow-y-auto scrollbar-hide ${themeClasses.aside}`}>
      <div className="mb-12 px-4 shrink-0">
        <div className="flex items-center justify-between mb-1">
          <h2 className={`text-2xl font-black font-headline tracking-tighter ${isInstructor ? 'text-white' : 'text-[#00327D]'}`}>
            Talent Flow
          </h2>
          <div className={`px-2 py-0.5 rounded-md text-[8px] font-black uppercase tracking-widest ${isAdmin ? 'bg-[#00327D] text-white' : (isInstructor ? 'bg-[#57FAE9] text-[#001946]' : 'bg-[#00327D] text-white')}`}>
            {role === 'Admin' ? 'Director' : (role === 'Instructor' ? 'Studio' : 'Path')}
          </div>
        </div>
        <p className={`text-[10px] font-black uppercase tracking-[0.2em] mt-1 ${isInstructor ? 'text-[#D3E4FE]/80' : 'text-[#434653]'}`}>
          {isAdmin ? 'Academic Governance Suite' : (isInstructor ? 'Professional Educator Suite' : 'Career Growth Platform')}
        </p>
      </div>

      <nav className="grow">
        {isAdmin ? (
          <>
            <SidebarGroup label="Governance Core">
              <SidebarItem 
                icon="dashboard" 
                label="Executive Overview" 
                to="/admin/dashboard" 
                active={location.pathname === '/admin/dashboard' || location.pathname === '/admin'}
              />
              <SidebarItem 
                icon="person" 
                label="User Management" 
                to="/admin/user-management" 
                active={location.pathname === '/admin/user-management'}
              />
              <SidebarItem 
                icon="person_add" 
                label="Add Instructor" 
                to="/admin/add-instructor" 
                isSubItem={true}
                active={location.pathname === '/admin/add-instructor'}
              />
              <SidebarItem 
                icon="badge" 
                label="User Records" 
                to="/admin/user-detail" 
                isSubItem={true}
                active={location.pathname.startsWith('/admin/user-detail')}
              />
              <SidebarItem 
                icon="group" 
                label="Talent Directory" 
                to="/admin/talent-directory" 
                active={location.pathname === '/admin/talent-directory' || location.pathname === '/admin/instructor-profile'}
              />
            </SidebarGroup>
            
            <SidebarGroup label="Academic Oversight">
              <SidebarItem 
                icon="architecture" 
                label="Curriculum Audit" 
                to="/admin/curriculum" 
                active={location.pathname === '/admin/curriculum'}
              />
              <SidebarItem 
                icon="analytics" 
                label="System Metrics" 
                to="/admin/dashboard" 
                active={false}
              />
            </SidebarGroup>

            <SidebarGroup label="Operations">
              <SidebarItem 
                icon="settings" 
                label="Global Settings" 
                to="/admin/settings" 
                active={location.pathname === '/admin/settings'}
              />
            </SidebarGroup>
          </>
        ) : isInstructor ? (
          <>
            <SidebarGroup label="Curator Studio" isInstructor={true}>
              <SidebarItem 
                icon="dashboard" 
                label="Dashboard" 
                to={dashboardPath} 
                active={location.pathname === dashboardPath}
                isInstructor={true}
              />
              <SidebarItem 
                icon="architecture" 
                label="Curriculum" 
                to="/instructor/courses" 
                active={location.pathname === '/instructor/courses'}
                isInstructor={true}
              />
              <SidebarItem 
                icon="group" 
                label="Faculty" 
                to="/instructor/reviews" 
                active={location.pathname === '/instructor/reviews'}
                isInstructor={true}
              />
              <SidebarItem 
                icon="school" 
                label="Students" 
                to="/instructor/gradebook" 
                active={location.pathname === '/instructor/gradebook'}
                isInstructor={true}
              />
              <SidebarItem 
                icon="mail" 
                label="Messages" 
                to="/instructor/messages" 
                active={location.pathname === '/instructor/messages'}
                isInstructor={true}
              />
            </SidebarGroup>
            
            <SidebarGroup label="Insights" isInstructor={true}>
              <SidebarItem 
                icon="analytics" 
                label="Reports" 
                to="/instructor/analytics" 
                active={location.pathname === '/instructor/analytics'}
                isInstructor={true}
              />
            </SidebarGroup>

            <SidebarGroup label="Operations" isInstructor={true}>
              <SidebarItem 
                icon="settings" 
                label="Settings" 
                to={isInstructor ? "/settings/instructor-setup" : "/settings/profile-setup"} 
                active={location.pathname === (isInstructor ? "/settings/instructor-setup" : "/settings/profile-setup")} 
                isInstructor={true}
              />
            </SidebarGroup>
          </>
        ) : (
          <>
            <SidebarGroup label="Curator Portal">
              <SidebarItem 
                icon="dashboard" 
                label="Overview" 
                to={dashboardPath} 
                active={location.pathname === dashboardPath} 
              />
              <SidebarItem 
                icon="school" 
                label="Catalog" 
                to="/learner/courses" 
                active={location.pathname === '/learner/courses'} 
              />
              <SidebarItem 
                icon="menu_book" 
                label="My Learning" 
                to="/learner/my-learning" 
                active={location.pathname === '/learner/my-learning'} 
              />
              <div className="space-y-1">
                <Link
                  to="/learner/assignments"
                  className={`relative flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl transition-all duration-300 group overflow-hidden ${
                    assignmentMenuOpen
                      ? 'bg-white text-[#00327D] shadow-ambient translate-x-1'
                      : 'text-[#434653] hover:bg-white/50 hover:text-[#00327D]'
                  }`}
                >
                  {assignmentMenuOpen && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-6 rounded-r-full animate-fade-in bg-[#00327D]"></div>
                  )}
                  <div className="flex items-center gap-3">
                    <span className={`material-symbols-outlined transition-transform duration-300 ${assignmentMenuOpen ? 'fill-1 scale-110' : 'group-hover:scale-110'} text-[22px]`}>
                      assignment
                    </span>
                    <span className={`text-sm tracking-tight transition-all ${assignmentMenuOpen ? 'font-black' : 'font-bold'}`}>
                      Assignment
                    </span>
                  </div>
                  <span className={`material-symbols-outlined text-[18px] transition-transform duration-300 ${assignmentMenuOpen ? 'rotate-180' : ''}`}>
                    expand_more
                  </span>
                </Link>
                {assignmentMenuOpen && (
                  <SidebarItem
                    icon="assignment_turned_in"
                    label="Submission"
                    to="/learner/submissions"
                    active={location.pathname === '/learner/submissions'}
                    isSubItem={true}
                  />
                )}
              </div>
              <SidebarItem 
                icon="donut_large" 
                label="Progress" 
                to="/learner/progress" 
                active={location.pathname === '/learner/progress'}
              />
              <SidebarItem 
                icon="forum" 
                label="Discussions" 
                to="/learner/discussions" 
                active={location.pathname === '/learner/discussions'}
              />
              <SidebarItem 
                icon="notifications" 
                label="Notifications" 
                to="/learner/notifications" 
                active={location.pathname === '/learner/notifications'}
              />
              <SidebarItem 
                icon="workspace_premium" 
                label="Certificate" 
                to="/learner/certificates" 
                active={location.pathname === '/learner/certificates'} 
              />
            </SidebarGroup>

            <SidebarGroup label="Personal">
              <SidebarItem 
                icon="settings" 
                label="Account Settings" 
                to={isInstructor ? "/settings/instructor-setup" : "/settings/profile-setup"} 
                active={location.pathname === (isInstructor ? "/settings/instructor-setup" : "/settings/profile-setup")} 
              />
            </SidebarGroup>
          </>
        )}
      </nav>

      <div className={`mt-auto space-y-2 pt-6 border-t shrink-0 ${themeClasses.border}`}>
        <button
          type="button"
          onClick={handleLogout}
          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
            isInstructor 
              ? 'text-[#FF8A8A] hover:bg-white/5' 
              : 'text-[#BA1A1A] hover:bg-[#FFDAD6]'
          }`}
        >
          <span className="material-symbols-outlined text-[20px]">logout</span>
          <span className="text-sm font-bold tracking-tight">Logout</span>
        </button>
      </div>
    </aside>
  )
}
