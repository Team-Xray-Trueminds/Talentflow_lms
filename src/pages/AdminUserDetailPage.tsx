import Sidebar from "../components/layout/Sidebar";
import TopBar from "../components/layout/TopBar";
import BottomNav from "../components/layout/BottomNav";

const AdminUserDetailPage = () => {
    return (
        <div className="bg-surface text-on-surface">
            {/* Side Navigation */}
            <Sidebar />

            {/* Main Workspace Content */}
            <main className="pl-0 md:pl-64 min-h-screen pb-24 md:pb-0">
                {/* Top Navigation */}
                <TopBar />

                {/* Dashboard Content Area */}
                <div className="p-6 md:p-8 max-w-7xl mx-auto pt-8 md:pt-12">
                    
                    {/* DESKTOP VIEW (3-Column Layout from Desktop Code) */}
                    <div className="hidden xl:block">
                        <div className="grid grid-cols-12 gap-8">
                            {/* Left Column: Profile Card & Actions */}
                            <div className="col-span-12 xl:col-span-3 space-y-6">
                                <div className="bg-surface-container-lowest p-6 rounded-xl space-y-6 shadow-sm">
                                    <div className="text-center">
                                        <div className="relative inline-block">
                                            <div className="w-32 h-32 rounded-full border-4 border-surface p-1">
                                                <img 
                                                    className="w-full h-full object-cover rounded-full" 
                                                    alt="Professional portrait of Elena Rodriguez" 
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtC-9aMSGJq-ZewlqAaTT02ZyjQ5owWCqe_umOBIqMEk7TL3d7W4EeqhuhsB99RjfIeg2gjy82skJx9jT47qRHYuppBWrPWJF9arggzgQik9zEeIJM2LCA-dXrG1C9PMt2EDYsXCtnzqofUwWa2s-eJTAYHBuAr0KKVlxoIMZEMacJS_6k0dsuPAvQZ5OcFDJ7DC4o2TW-Aalt-U175YKygJt-JSGVfcHpQKdhSACnMXYhSoQ4n0tmp5QXT3l8id8JRV9G1F2cln0"
                                                />
                                            </div>
                                            <span className="absolute bottom-1 right-1 bg-tertiary-container text-on-tertiary-container text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Active</span>
                                        </div>
                                        <h1 className="text-2xl font-extrabold text-on-surface mt-4 tracking-tight">Elena Rodriguez</h1>
                                        <p className="text-on-surface-variant text-sm font-medium">Senior Architectural Lead</p>
                                    </div>
                                    <div className="space-y-4 pt-4 border-t border-outline-variant/10">
                                        <div className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-primary text-xl">mail</span>
                                            <div>
                                                <p className="text-[10px] uppercase font-bold text-on-surface-variant/60 tracking-widest">Email</p>
                                                <p className="text-sm font-medium text-on-surface break-all">elena.rodriguez@archcurator.com</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-primary text-xl">call</span>
                                            <div>
                                                <p className="text-[10px] uppercase font-bold text-on-surface-variant/60 tracking-widest">Phone</p>
                                                <p className="text-sm font-medium text-on-surface">+1 (555) 902-1143</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-primary text-xl">location_on</span>
                                            <div>
                                                <p className="text-[10px] uppercase font-bold text-on-surface-variant/60 tracking-widest">Location</p>
                                                <p className="text-sm font-medium text-on-surface">London, UK (GMT +1)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Engagement Metrics */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-surface-container-lowest p-4 rounded-xl text-center border-b-4 border-tertiary-container shadow-sm">
                                        <p className="text-[10px] uppercase font-bold text-on-surface-variant/60 tracking-widest mb-1">Score</p>
                                        <p className="text-2xl font-extrabold text-primary">98<span className="text-xs text-on-surface-variant">/100</span></p>
                                    </div>
                                    <div className="bg-surface-container-lowest p-4 rounded-xl text-center border-b-4 border-secondary-container shadow-sm">
                                        <p className="text-[10px] uppercase font-bold text-on-surface-variant/60 tracking-widest mb-1">Projects</p>
                                        <p className="text-2xl font-extrabold text-primary">42</p>
                                    </div>
                                </div>
                                {/* Admin Actions */}
                                <div className="space-y-3">
                                    <button className="cursor-pointer w-full py-3 bg-gradient-to-r from-primary to-primary-container text-white rounded-lg font-bold text-sm transition-transform active:scale-95 shadow-sm">
                                        Edit Role
                                    </button>
                                    <button className="cursor-pointer w-full py-3 bg-surface-container-highest text-on-primary-fixed-variant rounded-lg font-bold text-sm transition-transform active:scale-95">
                                        Assign Team
                                    </button>
                                    <button className="cursor-pointer w-full py-3 border border-error/20 text-error rounded-lg font-bold text-sm hover:bg-error-container/30 transition-colors">
                                        Deactivate Account
                                    </button>
                                </div>
                            </div>
                            
                            {/* Center Column: Role History Timeline */}
                            <div className="col-span-12 xl:col-span-5">
                                <div className="bg-surface-container-lowest rounded-xl p-8 h-full shadow-sm">
                                    <div className="flex justify-between items-center mb-8">
                                        <h2 className="text-xl font-extrabold text-on-surface tracking-tight">Role History</h2>
                                        <span className="text-xs font-bold text-primary px-3 py-1 bg-primary-fixed rounded-full">8 Year Tenure</span>
                                    </div>
                                    <div className="relative">
                                        {/* Timeline Thread */}
                                        <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-outline-variant opacity-20"></div>
                                        <div className="space-y-12">
                                            {/* Node 1 */}
                                            <div className="relative pl-10">
                                                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-tertiary-container flex items-center justify-center z-10 shadow-sm">
                                                    <div className="w-2.5 h-2.5 rounded-full bg-on-tertiary-container animate-pulse"></div>
                                                </div>
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h3 className="text-lg font-bold text-on-surface">Senior Architectural Lead</h3>
                                                        <p className="text-sm text-on-surface-variant">Global Infrastructure Group</p>
                                                        <div className="mt-2 flex gap-2">
                                                            <span className="text-[10px] px-2 py-0.5 bg-surface-container-highest rounded text-on-surface-variant font-semibold">Leadership</span>
                                                            <span className="text-[10px] px-2 py-0.5 bg-surface-container-highest rounded text-on-surface-variant font-semibold">Strategy</span>
                                                        </div>
                                                    </div>
                                                    <span className="text-xs font-bold text-on-surface-variant/40 bg-surface-container-low px-2 py-1 rounded">2021 — PRESENT</span>
                                                </div>
                                            </div>
                                            {/* Node 2 */}
                                            <div className="relative pl-10">
                                                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-surface-container-highest flex items-center justify-center z-10">
                                                    <div className="w-2.5 h-2.5 rounded-full bg-outline-variant"></div>
                                                </div>
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h3 className="text-lg font-bold text-on-surface">Architecture Consultant</h3>
                                                        <p className="text-sm text-on-surface-variant">Heritage Preservation Studio</p>
                                                        <div className="mt-2 flex gap-2">
                                                            <span className="text-[10px] px-2 py-0.5 bg-surface-container-highest rounded text-on-surface-variant font-semibold">BIM</span>
                                                            <span className="text-[10px] px-2 py-0.5 bg-surface-container-highest rounded text-on-surface-variant font-semibold">Client Relations</span>
                                                        </div>
                                                    </div>
                                                    <span className="text-xs font-bold text-on-surface-variant/40 bg-surface-container-low px-2 py-1 rounded">2018 — 2021</span>
                                                </div>
                                            </div>
                                            {/* Node 3 */}
                                            <div className="relative pl-10">
                                                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-surface-container-highest flex items-center justify-center z-10">
                                                    <div className="w-2.5 h-2.5 rounded-full bg-outline-variant"></div>
                                                </div>
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h3 className="text-lg font-bold text-on-surface">Junior Associate</h3>
                                                        <p className="text-sm text-on-surface-variant">Urban Flow Designs</p>
                                                        <div className="mt-2 flex gap-2">
                                                            <span className="text-[10px] px-2 py-0.5 bg-surface-container-highest rounded text-on-surface-variant font-semibold">Drafting</span>
                                                        </div>
                                                    </div>
                                                    <span className="text-xs font-bold text-on-surface-variant/40 bg-surface-container-low px-2 py-1 rounded">2015 — 2018</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Right Column: Activity Log */}
                            <div className="col-span-12 xl:col-span-4 space-y-6">
                                <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
                                    <h2 className="text-xl font-extrabold text-on-surface tracking-tight mb-6">Recent Activity</h2>
                                    <div className="space-y-6">
                                        <div className="flex gap-4">
                                            <div className="w-10 h-10 rounded-lg bg-tertiary-container/10 flex items-center justify-center shrink-0">
                                                <span className="material-symbols-outlined text-tertiary-container">verified_user</span>
                                            </div>
                                            <div className="flex-1 border-b border-surface-container-low pb-4">
                                                <p className="text-sm font-bold text-on-surface">Security Verification Successful</p>
                                                <div className="flex justify-between mt-1">
                                                    <span className="text-xs text-on-surface-variant">Admin login from London, UK</span>
                                                    <span className="text-[10px] font-medium text-on-surface-variant/60">2h ago</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center shrink-0">
                                                <span className="material-symbols-outlined text-primary">rate_review</span>
                                            </div>
                                            <div className="flex-1 border-b border-surface-container-low pb-4">
                                                <p className="text-sm font-bold text-on-surface">Updated Performance Review</p>
                                                <div className="flex justify-between mt-1">
                                                    <span className="text-xs text-on-surface-variant">Q3 2023 feedback finalized</span>
                                                    <span className="text-[10px] font-medium text-on-surface-variant/60">Yesterday</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="w-10 h-10 rounded-lg bg-error-container/20 flex items-center justify-center shrink-0">
                                                <span className="material-symbols-outlined text-error">lock_reset</span>
                                            </div>
                                            <div className="flex-1 border-b border-surface-container-low pb-4">
                                                <p className="text-sm font-bold text-on-surface">Password Reset Requested</p>
                                                <div className="flex justify-between mt-1">
                                                    <span className="text-xs text-on-surface-variant">System generated request</span>
                                                    <span className="text-[10px] font-medium text-on-surface-variant/60">Oct 24</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="w-10 h-10 rounded-lg bg-secondary-container flex items-center justify-center shrink-0">
                                                <span className="material-symbols-outlined text-secondary">groups</span>
                                            </div>
                                            <div className="flex-1 pb-2">
                                                <p className="text-sm font-bold text-on-surface">Team Reassignment</p>
                                                <div className="flex justify-between mt-1">
                                                    <span className="text-xs text-on-surface-variant">Moved to 'Heritage Modern' squad</span>
                                                    <span className="text-[10px] font-medium text-on-surface-variant/60">Oct 20</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="cursor-pointer w-full mt-8 py-3 text-primary text-sm font-bold border-2 border-primary/10 rounded-lg hover:bg-primary-fixed/30 transition-colors">
                                        View Full Interaction History
                                    </button>
                                </div>
                                {/* Notes Section */}
                                <div className="bg-surface-container-low rounded-xl p-6 border-l-4 border-primary">
                                    <h3 className="text-sm font-bold text-on-surface flex items-center gap-2 mb-2">
                                        <span className="material-symbols-outlined text-primary text-lg">sticky_note_2</span>
                                        Administrative Note
                                    </h3>
                                    <p className="text-xs text-on-surface-variant leading-relaxed">
                                        Elena is currently being considered for a Partner role. Her mentorship scores remain consistently in the top 2% of the organization. Focus development on cross-departmental operations.
                                    </p>
                                    <p className="text-[10px] font-bold text-primary mt-4 cursor-pointer hover:underline">Add New Note</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* MOBILE / TABLET VIEW (Bento Flow Layout) */}
                    <div className="xl:hidden block">
                        {/* Breadcrumbs & Header Actions */}
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                            <div>
                                <nav className="flex items-center gap-2 text-on-surface-variant text-sm mb-2">
                                    <span className="hover:underline cursor-pointer">Directory</span>
                                    <span className="material-symbols-outlined text-xs">chevron_right</span>
                                    <span className="text-primary font-semibold">User Details</span>
                                </nav>
                                <h1 className="text-4xl font-extrabold tracking-tight text-on-surface">Elena Rodriguez</h1>
                                <p className="text-on-surface-variant mt-1">Senior Architectural Lead • Staff ID: #TF-8829</p>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <button className="cursor-pointer px-5 py-2.5 bg-surface-container-highest text-on-primary-fixed-variant rounded-lg font-semibold flex items-center gap-2 hover:bg-surface-container-high transition-colors">
                                    <span className="material-symbols-outlined text-lg">edit</span>
                                    Edit Role
                                </button>
                                <button className="cursor-pointer px-5 py-2.5 bg-surface-container-highest text-on-primary-fixed-variant rounded-lg font-semibold flex items-center gap-2 hover:bg-surface-container-high transition-colors">
                                    <span className="material-symbols-outlined text-lg">group_add</span>
                                    Assign Team
                                </button>
                                <button className="cursor-pointer px-5 py-2.5 bg-error-container text-on-error-container rounded-lg font-bold flex items-center gap-2 hover:opacity-90 transition-opacity">
                                    <span className="material-symbols-outlined text-lg">lock</span>
                                    Deactivate Account
                                </button>
                            </div>
                        </div>
                        
                        {/* Bento Grid Layout */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                            {/* Left Column: Profile Card */}
                            <div className="lg:col-span-4 flex flex-col gap-6">
                                {/* User Identity Card */}
                                <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden p-8 flex flex-col items-center text-center">
                                    <div className="relative mb-6">
                                        <img 
                                            className="w-32 h-32 rounded-2xl object-cover shadow-lg" 
                                            alt="Professional headshot of Elena" 
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLI_rStB8-C0OphOum2cNv7mCpuDokc_RFiPglQVlAeKa31L4zyXLzTzp1OlB-8XJd-6QZw36xuoZ0niHFC5-94Oxj_nI0F6AHzORzrHY8DoBE_7L3d3zmzm79fyvtacSbgrJfLHx9zIDgNz6RxPzEaspLGdDDuo17IXwwpvwEIvjHVeWNpJFBsX3J_q594QbwBEu3xXfQ3bv-FJMMMOvN2CG7bjRn-7LKorAI_RCRkftm2sCVVItk9LCZuQVoFSSB7MuXDCnL5Io"
                                        />
                                        <div className="absolute -bottom-2 -right-2 bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">Active</div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-on-surface">Elena Rodriguez</h3>
                                    <p className="text-on-surface-variant text-sm font-medium mb-6 break-all">e.rodriguez@talentflow.arch</p>
                                    <div className="w-full space-y-4 pt-6 border-t border-outline-variant/15">
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-on-surface-variant">Phone</span>
                                            <span className="font-semibold text-on-surface">+1 (555) 902-1143</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-on-surface-variant">Location</span>
                                            <span className="font-semibold text-on-surface">London, UK</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-on-surface-variant">Timezone</span>
                                            <span className="font-semibold text-on-surface">GMT +1</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Role Stats Card */}
                                <div className="bg-surface-container-low rounded-xl p-8 space-y-6">
                                    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-on-surface-variant">Engagement Metrics</h4>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                                <span className="material-symbols-outlined">workspace_premium</span>
                                            </div>
                                            <div>
                                                <p className="text-xs text-on-surface-variant">Mentorship Score</p>
                                                <p className="text-lg font-bold">98 / 100</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-lg bg-tertiary-container/10 flex items-center justify-center text-tertiary-container">
                                                <span className="material-symbols-outlined" style={{ color: '#13d4c4' }}>rocket_launch</span>
                                            </div>
                                            <div>
                                                <p className="text-xs text-on-surface-variant">Projects Completed</p>
                                                <p className="text-lg font-bold">42</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Right Column: Details & Logs */}
                            <div className="lg:col-span-8 flex flex-col gap-6">
                                {/* Role History Section */}
                                <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm">
                                    <div className="flex items-center justify-between mb-8">
                                        <h3 className="text-xl font-bold flex items-center gap-2">
                                            <span className="material-symbols-outlined text-primary">assignment_ind</span>
                                            Role History
                                        </h3>
                                        <span className="text-xs font-medium bg-secondary-container px-3 py-1 rounded-full text-on-secondary-fixed-variant">8 Years Tenure</span>
                                    </div>
                                    <div className="relative pl-8 space-y-8">
                                        {/* Vertical Timeline Thread */}
                                        <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-outline-variant/20"></div>
                                        <div className="relative">
                                            <div className="absolute -left-[27px] top-1 w-4 h-4 rounded-full bg-tertiary border-4 border-surface-container-lowest"></div>
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                                <div>
                                                    <h4 className="font-bold text-on-surface">Senior Architectural Lead</h4>
                                                    <p className="text-sm text-on-surface-variant">Current • Strategy &amp; Execution Division</p>
                                                </div>
                                                <span className="text-xs font-semibold text-on-surface-variant tabular-nums">Jan 2021 — Present</span>
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <div className="absolute -left-[27px] top-1 w-4 h-4 rounded-full bg-outline-variant border-4 border-surface-container-lowest"></div>
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                                <div>
                                                    <h4 className="font-bold text-on-surface">Architecture Consultant</h4>
                                                    <p className="text-sm text-on-surface-variant">Design &amp; Research Lab</p>
                                                </div>
                                                <span className="text-xs font-semibold text-on-surface-variant tabular-nums">Mar 2018 — Dec 2020</span>
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <div className="absolute -left-[27px] top-1 w-4 h-4 rounded-full bg-outline-variant border-4 border-surface-container-lowest"></div>
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                                <div>
                                                    <h4 className="font-bold text-on-surface">Junior Associate</h4>
                                                    <p className="text-sm text-on-surface-variant">Urban Planning Committee</p>
                                                </div>
                                                <span className="text-xs font-semibold text-on-surface-variant tabular-nums">Aug 2015 — Feb 2018</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Activity Log Section */}
                                <div className="bg-surface-container-lowest rounded-xl p-8 flex-grow shadow-sm">
                                    <div className="flex items-center justify-between mb-8">
                                        <h3 className="text-xl font-bold flex items-center gap-2">
                                            <span className="material-symbols-outlined text-primary">analytics</span>
                                            Activity Log
                                        </h3>
                                        <div className="flex gap-2">
                                            <button className="material-symbols-outlined p-2 text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors">filter_list</button>
                                            <button className="material-symbols-outlined p-2 text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors">download</button>
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        {/* Log Item */}
                                        <div className="group flex items-center justify-between p-4 rounded-xl hover:bg-surface-container-low transition-colors">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full bg-tertiary-container/10 flex items-center justify-center text-on-tertiary-container">
                                                    <span className="material-symbols-outlined text-xl">verified_user</span>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-semibold text-on-surface">Security Verification Successful</p>
                                                    <p className="text-xs text-on-surface-variant">Biometric re-auth for financial module</p>
                                                </div>
                                            </div>
                                            <span className="text-[10px] font-bold text-on-surface-variant uppercase tabular-nums">10:42 AM Today</span>
                                        </div>
                                        {/* Log Item */}
                                        <div className="group flex items-center justify-between p-4 rounded-xl hover:bg-surface-container-low transition-colors">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                                    <span className="material-symbols-outlined text-xl">drive_file_rename_outline</span>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-semibold text-on-surface">Updated Performance Review</p>
                                                    <p className="text-xs text-on-surface-variant">Appraised 4 Junior Architects in Team Delta</p>
                                                </div>
                                            </div>
                                            <span className="text-[10px] font-bold text-on-surface-variant uppercase tabular-nums">Yesterday</span>
                                        </div>
                                        {/* Log Item */}
                                        <div className="group flex items-center justify-between p-4 rounded-xl hover:bg-surface-container-low transition-colors">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full bg-error-container/20 flex items-center justify-center text-error">
                                                    <span className="material-symbols-outlined text-xl">vpn_key</span>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-semibold text-on-surface">Password Reset Requested</p>
                                                    <p className="text-xs text-on-surface-variant">Self-service reset from IP 192.168.1.4</p>
                                                </div>
                                            </div>
                                            <span className="text-[10px] font-bold text-on-surface-variant uppercase tabular-nums">2 days ago</span>
                                        </div>
                                        {/* Log Item */}
                                        <div className="group flex items-center justify-between p-4 rounded-xl hover:bg-surface-container-low transition-colors">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600">
                                                    <span className="material-symbols-outlined text-xl">group</span>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-semibold text-on-surface">Team Reassignment</p>
                                                    <p className="text-xs text-on-surface-variant">Moved from 'Innovation' to 'Strategy'</p>
                                                </div>
                                            </div>
                                            <span className="text-[10px] font-bold text-on-surface-variant uppercase tabular-nums">Oct 12, 2023</span>
                                        </div>
                                    </div>
                                    <button className="cursor-pointer w-full mt-6 py-3 border border-outline-variant/30 rounded-lg text-sm font-bold text-on-surface-variant hover:bg-surface-container-low transition-colors">
                                        View Full Interaction History
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </main>

            {/* Bottom Navigation (Mobile only) */}
            <BottomNav />
        </div>
    );
};

export default AdminUserDetailPage;
