import { Link, useLocation } from 'react-router-dom';

interface BottomNavItem {
    icon: string;
    label: string;
    href: string;
}

const navItems: BottomNavItem[] = [
    { icon: 'dashboard', label: 'Dashboard', href: '/admin/dashboard' },
    { icon: 'person', label: 'User Management', href: '/admin/user-management' },
    { icon: 'group', label: 'Talent Directory', href: '/admin/talent-directory' },
    { icon: 'history_edu', label: 'Logs', href: '#' },
];

const BottomNav = () => {
    const location = useLocation();

    return (
        <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-4 pt-2 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-t border-slate-200/50 dark:border-slate-800/50 rounded-t-2xl md:hidden z-50">
            {navItems.map((item) => {
                const isActive = item.href !== '#' && location.pathname === item.href;
                return (
                    <Link
                        key={item.label}
                        to={item.href}
                        className={
                            isActive
                                ? 'flex flex-col items-center justify-center bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-100 rounded-xl px-3 py-1 scale-95 duration-100'
                                : 'flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 active:bg-slate-100 dark:active:bg-slate-800 rounded-xl px-3 py-1 transition-colors'
                        }
                    >
                        <span
                            className="material-symbols-outlined text-lg mb-0.5"
                            style={isActive ? { fontVariationSettings: "'FILL' 1" } : undefined}
                        >
                            {item.icon}
                        </span>
                        <span className="font-inter text-[10px] font-semibold">{item.label}</span>
                    </Link>
                );
            })}
        </nav>
    );
};

export default BottomNav;
