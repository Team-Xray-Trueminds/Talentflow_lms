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
        <nav className="hidden">
            {currentNavItems.map((item) => {
                const isActive = location.pathname.startsWith(item.href);
                return (
                    <Link
                        key={item.label}
                        to={item.href}
                        className={`min-w-0 flex-1 flex flex-col items-center justify-center gap-1 rounded-2xl px-1 py-2 text-center transition-all duration-300 ${
                            isActive
                                ? 'bg-[#0047AB]/8 text-[#0047AB]'
                                : 'text-slate-500 dark:text-slate-400'
                        }`}
                    >
                        <span
                            className={`material-symbols-outlined text-[22px] sm:text-[24px] leading-none transition-all ${isActive ? 'fill-1 scale-105' : ''}`}
                        >
                            {item.icon}
                        </span>
                        <span className={`max-w-full truncate px-1 text-[10px] sm:text-[11px] font-bold leading-none ${isActive ? 'opacity-100' : 'opacity-75'}`}>
                            {item.label}
                        </span>
                    </Link>
                );
            })}
        </nav>
    );
};

export default BottomNav;
