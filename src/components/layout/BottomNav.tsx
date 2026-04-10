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
        <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-2 pb-6 pt-3 bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl border-t border-slate-200/50 dark:border-slate-800/50 rounded-t-[32px] lg:hidden z-50 shadow-[0_-8px_30px_rgb(0,0,0,0.04)]">
            {currentNavItems.map((item) => {
                const isActive = location.pathname.startsWith(item.href);
                return (
                    <Link
                        key={item.label}
                        to={item.href}
                        className={`flex flex-col items-center justify-center p-2 rounded-2xl transition-all duration-300 ${
                            isActive
                                ? 'text-[#0047AB] bg-[#0047AB]/5 scale-110'
                                : 'text-slate-400'
                        }`}
                    >
                        <span
                            className={`material-symbols-outlined text-[24px] mb-1 transition-all ${isActive ? 'fill-1' : ''}`}
                        >
                            {item.icon}
                        </span>
                        <span className={`text-[9px] font-black uppercase tracking-widest leading-none ${isActive ? 'opacity-100' : 'opacity-60'}`}>
                            {item.label}
                        </span>
                    </Link>
                );
            })}
        </nav>
    );
};

export default BottomNav;
