
const TopBar = () => {
    return (
        <header className="bg-surface md:bg-slate-50/70 dark:bg-slate-900 md:dark:bg-slate-950/70 md:backdrop-blur-xl h-18 sticky top-0 z-40 md:shadow-sm flex justify-between items-center w-full px-6 md:px-8 py-3">
            <div className="flex items-center gap-2 md:gap-8 flex-1">
                <span
                    className="material-symbols-outlined text-blue-900 dark:text-blue-200 md:hidden text-2xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                >
                    admin_panel_settings
                </span>
                <span className="text-lg md:text-xl font-bold tracking-tight text-blue-900 dark:text-blue-100 md:hidden">
                    Admin Curator
                </span>
                <span className="text-xl font-bold tracking-tighter text-blue-900 dark:text-blue-100 font-manrope truncate hidden md:block">
                    Architectural Curator
                </span>

                {/* Search Bar */}
                <div className="max-w-md w-full relative hidden md:block">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
                        search
                    </span>
                    <input
                        className="w-full bg-slate-200/50 dark:bg-slate-800/50 border-none rounded-full py-2 pl-10 pr-4 text-sm font-inter focus:ring-2 focus:ring-blue-700/20 placeholder-slate-500"
                        placeholder="Global system search..."
                        type="text"
                    />
                </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 md:gap-4 shrink-0">
                <button className="w-10 h-10 hidden md:flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200 relative">
                    <span className="material-symbols-outlined text-slate-500">notifications</span>
                    <span className="absolute top-2 right-2 w-2 h-2 bg-blue-600 rounded-full border-2 border-white"></span>
                </button>
                <button className="w-10 h-10 hidden md:flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200">
                    <span className="material-symbols-outlined text-slate-500">settings</span>
                </button>
                <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 mx-1 md:mx-2 hidden md:block"></div>
                <div className="flex items-center gap-2 md:gap-3 p-1 md:px-2 rounded-full hover:bg-slate-100 transition-colors cursor-pointer">
                    <div className="text-right hidden xl:block">
                        <p className="text-xs font-bold text-blue-900 dark:text-blue-100 font-manrope">Admin User</p>
                        <p className="text-[10px] text-slate-500 font-medium">System Overseer</p>
                    </div>
                    <img
                        alt="Administrator Avatar"
                        className="w-8 h-8 md:w-9 md:h-9 rounded-full object-cover border-0 md:border-2 border-primary-container/20 md:shadow-sm"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAn-fBVkwCIOq-84VKtMLdKECaKC12uQ-AnCrVDzTkdErU9_sRNZm6-uKm0zF08UxcWJ3QafglEKeKNsYxOGeP976D4Fw1bDau4RmP3ljbePXOlAsk9djarRQh99CTTI24Btqvxa8ZtR1oJ9ATUXgxeuD4BMkPMIGdEHvqgv5hq9iV_zzyYAp7YZ2r9J2vXL6R8irqLGBybawS_axJQ5tMNj17C2rIUsOmqTuf4_8cVcrG2pMKBjIdO75PQxV8wwlCgk3Xr_jmcTIc"
                    />
                </div>
            </div>
        </header>
    );
};

export default TopBar;
