import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../auth/AuthProvider';

const BottomNav = () => {
    const location = useLocation();
    const { user } = useAuth();
    const storedRole = user?.role === 'admin' ? 'Admin' : user?.role === 'tutor' ? 'Instructor' : 'Learner';
    const pathRole = location.pathname.startsWith('/admin') ? 'Admin' : (location.pathname.startsWith('/instructor') ? 'Instructor' : (location.pathname.startsWith('/learner') ? 'Learner' : null));
    const role = pathRole || storedRole || 'Learner';

    const navItemsByRole = {
        Admin: [
            { icon: 'dashboard', label: 'Overview', href: '/admin/dashboard' },
            { icon: 'person', label: 'Users', href: '/admin/user-management' },
            { icon: 'group', label: 'Talent', href: '/admin/talent-directory' },
            { icon: 'settings', label: 'Settings', href: '/admin/settings' },
        ],
        Instructor: [
            { icon: 'dashboard', label: 'Home', href: '/instructor/dashboard' },
            { icon: 'architecture', label: 'Courses', href: '/instructor/courses' },
            { icon: 'school', label: 'Grades', href: '/instructor/gradebook' },
            { icon: 'mail', label: 'Inbox', href: '/instructor/messages' },
        ],
        Learner: [
            { icon: 'dashboard', label: 'Home', href: '/learner/dashboard' },
            { icon: 'school', label: 'Catalog', href: '/learner/courses' },
            { icon: 'menu_book', label: 'Learning', href: '/learner/my-learning' },
            { icon: 'account_circle', label: 'Profile', href: '/settings/profile-setup' },
        ],
    };

    const currentNavItems = navItemsByRole[role as keyof typeof navItemsByRole] || navItemsByRole.Learner;

    return (
        <nav className="fixed md:hidden bottom-0 left-0 right-0 z-50 flex items-center justify-around h-[72px] sm:h-[80px] bg-white/90 backdrop-blur-xl border-t border-slate-200 shadow-[0_-4px_30px_rgba(0,0,0,0.05)] px-2 pb-safe">
            {currentNavItems.map((item) => {
                const isActive = location.pathname.startsWith(item.href);
                return (
                    <Link
                        key={item.label}
                        to={item.href}
                        className={`min-w-0 flex-1 flex flex-col items-center justify-center gap-1.5 h-full transition-all duration-300 ${
                            isActive
                                ? 'text-[#00327D]'
                                : 'text-[#74777F] hover:text-[#00327D]/70'
                        }`}
                    >
                        <span
                            className={`material-symbols-outlined text-[24px] sm:text-[26px] leading-none transition-all ${isActive ? 'fill-1 scale-110' : ''}`}
                        >
                            {item.icon}
                        </span>
                        <span className={`text-[10px] sm:text-[11px] font-bold tracking-wide ${isActive ? 'opacity-100' : 'opacity-70'}`}>
                            {item.label}
                        </span>
                    </Link>
                );
            })}
        </nav>
    );
};

export default BottomNav;
