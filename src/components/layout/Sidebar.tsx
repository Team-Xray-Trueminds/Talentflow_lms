import { Link, useLocation } from 'react-router-dom';

export interface NavItem {
    icon: string;
    label: string;
    href: string;
}

export const mainNavItems: NavItem[] = [
    { icon: 'dashboard', label: 'Dashboard', href: '/admin/dashboard' },
    { icon: 'person', label: 'User Management', href: '/admin/user-management' },
    { icon: 'group', label: 'Talent Directory', href: '/admin/talent-directory' },
];

export const footerNavItems: NavItem[] = [
    { icon: 'help', label: 'Help Center', href: '#' },
    { icon: 'logout', label: 'Log Out', href: '#' },
];

const Sidebar = () => {
    const location = useLocation();

    return (
        <aside className="h-screen w-64 fixed left-0 top-0 hidden md:flex flex-col bg-slate-100 dark:bg-slate-900 z-50">
            <div className="flex flex-col h-full p-4 gap-2">
                {/* Brand Header */}
                <div className="px-3 py-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center">
                        <span
                            className="material-symbols-outlined text-white"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                            architecture
                        </span>
                    </div>
                    <div>
                        <h1 className="font-manrope font-black text-blue-900 dark:text-blue-50 text-lg leading-none">
                            Curator Admin
                        </h1>
                        {location.pathname === '/admin/user-management' ? (
                            <p className="text-xs text-on-surface-variant">Admin Console</p>
                        ) : location.pathname !== '/admin/talent-directory' ? (
                            <p className="text-xs text-on-surface-variant">Educational Control</p>
                        ) : null}
                    </div>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 mt-4 space-y-1">
                    {mainNavItems.map((item) => {
                        const isActive = item.href !== '#' && location.pathname === item.href;
                        return (
                            <Link
                                key={item.label}
                                to={item.href}
                                className={
                                    isActive
                                        ? 'flex items-center gap-3 px-3 py-2.5 bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-300 rounded-lg shadow-sm font-bold transition-all hover:translate-x-1 duration-200'
                                        : 'flex items-center gap-3 px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-lg transition-all hover:translate-x-1 duration-200'
                                }
                            >
                                <span className="material-symbols-outlined">{item.icon}</span>
                                <span className="font-inter text-sm">{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>

                {/* CTA */}
                {location.pathname === '/admin/dashboard' && (
                    <button className="cursor-pointer mt-4 w-full bg-primary-container text-white py-3 rounded-lg font-manrope font-bold text-sm shadow-md active:scale-95 transition-transform">
                        Generate Report
                    </button>
                )}

                {/* Footer Links */}
                <div className="mt-auto space-y-1">
                    {footerNavItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-lg transition-all"
                        >
                            <span className="material-symbols-outlined">{item.icon}</span>
                            <span className="font-inter text-sm">{item.label}</span>
                        </a>
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
