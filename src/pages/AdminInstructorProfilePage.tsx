import Sidebar from "../components/layout/Sidebar";
import TopBar from "../components/layout/TopBar";
import BottomNav from "../components/layout/BottomNav";
import { Link } from "react-router-dom";

const AdminInstructorProfilePage = () => {
    return (
        <div className="bg-surface text-on-surface">
            <Sidebar />
            <main className="pl-0 md:pl-64 min-h-screen pb-24 md:pb-0">
                <TopBar />
                
                <div className="p-6 md:p-8 max-w-7xl mx-auto pt-8 md:pt-12">
                    {/* Header with Breadcrumbs */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                        <div>
                            <nav className="flex items-center gap-2 text-on-surface-variant text-sm mb-2">
                                <Link to="/admin/user-management" className="hover:underline cursor-pointer">Directory</Link>
                                <span className="material-symbols-outlined text-xs">chevron_right</span>
                                <span className="text-primary font-semibold">Instructor Profile</span>
                            </nav>
                            <h1 className="text-4xl font-extrabold tracking-tight text-on-surface">Dr. Julian Vance</h1>
                            <p className="text-on-surface-variant mt-1">Lead Architect • Faculty ID: #INST-0042</p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <button className="cursor-pointer px-5 py-2.5 bg-primary text-white rounded-lg font-semibold flex items-center gap-2 hover:bg-primary/90 transition-all shadow-sm">
                                <span className="material-symbols-outlined text-lg">edit</span>
                                Edit Credentials
                            </button>
                            <button className="cursor-pointer px-5 py-2.5 bg-surface-container-highest text-on-primary-fixed-variant rounded-lg font-semibold flex items-center gap-2 hover:bg-surface-container-high transition-colors">
                                <span className="material-symbols-outlined text-lg">contract</span>
                                View Agreement
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Sidebar: Identity & Vital Stats */}
                        <div className="lg:col-span-3 space-y-6">
                            <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/30">
                                <div className="text-center">
                                    <div className="relative inline-block mb-4">
                                        <img 
                                            className="w-32 h-32 rounded-3xl object-cover border-4 border-surface shadow-md" 
                                            alt="Dr. Julian Vance" 
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk5utjN07mkZOhvtLZIyLzTlvKn2L4iPZCxU2HE03HITuSyf687NvYeKy1N3BB3ni_PXK6x68sbgc75rNQ2L2yaSJm-G8klfuPjgpLJwHX36NoMakdz6P_Z2afHIAebaZV13Q7a3n9L2hbMhTqfjyw74ubS7f51FH_QDX66YnHaXq9NSQwc_7KrIjpQkDJ-Yp3aaAhNu-vnGsNf7SIO4uN_S4bTdHe0MSfe9aqNGnaSUESsnPKSC5Ebl9BWs9kMIL9tpe4Ug-K6OI"
                                        />
                                        <span className="absolute -bottom-2 -right-2 bg-tertiary-container text-on-tertiary-container text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">Active</span>
                                    </div>
                                    <h2 className="text-xl font-bold text-on-surface">Dr. Julian Vance</h2>
                                    <p className="text-on-surface-variant text-xs">Joined TalentFlow Sept 2023</p>
                                </div>
                                
                                <div className="mt-8 space-y-4 pt-6 border-t border-outline-variant/10">
                                    <div>
                                        <p className="text-[10px] uppercase font-bold text-on-surface-variant/60 tracking-widest mb-1">Email Domain</p>
                                        <p className="text-sm font-medium text-on-surface">j.vance@talentflow.edu</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase font-bold text-on-surface-variant/60 tracking-widest mb-1">Specialization</p>
                                        <p className="text-sm font-medium text-on-surface">Sustainable Urbanism</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase font-bold text-on-surface-variant/60 tracking-widest mb-1">Workload</p>
                                        <p className="text-sm font-medium text-on-surface">Full-Time (40h/week)</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                                <h3 className="text-sm font-bold text-primary flex items-center gap-2 mb-4">
                                    <span className="material-symbols-outlined text-lg">task_alt</span>
                                    Compliance Check
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-2 text-xs text-on-surface-variant">
                                        <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span>
                                        Background Verified
                                    </li>
                                    <li className="flex items-center gap-2 text-xs text-on-surface-variant">
                                        <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span>
                                        Credentials Validated
                                    </li>
                                    <li className="flex items-center gap-2 text-xs text-on-surface-variant">
                                        <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span>
                                        Terms Accepted
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Middle: Course Oversight & Students */}
                        <div className="lg:col-span-6 space-y-8">
                            {/* Instructor Stats Banner */}
                            <div className="grid grid-cols-3 gap-4">
                                <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/30 text-center shadow-sm">
                                    <p className="text-[10px] uppercase font-black text-on-surface-variant/60 tracking-widest mb-1">Total Students</p>
                                    <p className="text-2xl font-black text-primary">1,204</p>
                                </div>
                                <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/30 text-center shadow-sm">
                                    <p className="text-[10px] uppercase font-black text-on-surface-variant/60 tracking-widest mb-1">Avg. Rating</p>
                                    <p className="text-2xl font-black text-tertiary">4.9/5</p>
                                </div>
                                <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/30 text-center shadow-sm">
                                    <p className="text-[10px] uppercase font-black text-on-surface-variant/60 tracking-widest mb-1">Success Rate</p>
                                    <p className="text-2xl font-black text-secondary">92%</p>
                                </div>
                            </div>

                            {/* Active Courses */}
                            <div className="bg-surface-container-lowest rounded-2xl p-8 border border-outline-variant/30 shadow-sm">
                                <div className="flex justify-between items-center mb-8">
                                    <h3 className="text-xl font-black tracking-tight flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary">school</span>
                                        Active Courses
                                    </h3>
                                    <button className="text-xs font-bold text-primary hover:underline">Add Course Assignment</button>
                                </div>
                                <div className="space-y-4">
                                    {[
                                        { title: 'The Future of Urban Flow', students: 432, status: 'In Progress', sessions: 12 },
                                        { title: 'Architectural Data Structures', students: 256, status: 'In Progress', sessions: 8 },
                                        { title: 'Sustainable Systems I', students: 516, status: 'Paused', sessions: 0 }
                                    ].map((course, i) => (
                                        <div key={i} className="flex items-center justify-between p-4 rounded-xl hover:bg-surface-container-low transition-colors group">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center">
                                                    <span className="material-symbols-outlined text-on-surface-variant">architecture</span>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-on-surface text-sm">{course.title}</h4>
                                                    <p className="text-xs text-on-surface-variant">{course.students} Learners • {course.sessions} Sessions</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${course.status === 'In Progress' ? 'bg-green-100 text-green-700' : 'bg-surface-container-highest text-on-surface-variant'}`}>
                                                    {course.status}
                                                </span>
                                                <button className="material-symbols-outlined text-outline-variant opacity-0 group-hover:opacity-100 transition-opacity">more_vert</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Performance Insights */}
                            <div className="bg-surface-container-lowest rounded-2xl p-8 border border-outline-variant/30 shadow-sm">
                                <h3 className="text-xl font-black tracking-tight flex items-center gap-2 mb-8">
                                    <span className="material-symbols-outlined text-primary">insights</span>
                                    Teaching Insights
                                </h3>
                                <div className="h-48 flex items-end justify-between gap-2 px-4 border-b border-outline-variant/10 pb-4 mb-6">
                                    {[65, 80, 45, 90, 70, 85, 95].map((h, i) => (
                                        <div key={i} className="w-full bg-primary/20 rounded-t-lg relative group overflow-visible" style={{ height: `${h}%` }}>
                                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-on-surface text-surface text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                                                {h}% Engagement
                                            </div>
                                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full"></div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-between text-[10px] font-bold text-on-surface-variant/60 uppercase tracking-widest">
                                    <span>Mon</span>
                                    <span>Tue</span>
                                    <span>Wed</span>
                                    <span>Thu</span>
                                    <span>Fri</span>
                                    <span>Sat</span>
                                    <span>Sun</span>
                                </div>
                            </div>
                        </div>

                        {/* Right: Administrative Actions & Notes */}
                        <div className="lg:col-span-3 space-y-6">
                            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 shadow-sm">
                                <h3 className="text-sm font-black uppercase tracking-widest text-on-surface-variant/60 mb-6">Administrative Control</h3>
                                <div className="space-y-3">
                                    <button className="w-full py-3 bg-surface-container-highest rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-surface-container-high transition-colors text-on-surface">
                                        <span className="material-symbols-outlined text-lg">history_edu</span>
                                        Curriculum Review
                                    </button>
                                    <button className="w-full py-3 bg-surface-container-highest rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-surface-container-high transition-colors text-on-surface">
                                        <span className="material-symbols-outlined text-lg">admin_panel_settings</span>
                                        Manage Permissions
                                    </button>
                                    <button className="w-full py-3 text-error border border-error/20 rounded-xl text-sm font-bold hover:bg-error-container transition-colors">
                                        Revoke Teaching Access
                                    </button>
                                </div>
                            </div>

                            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 shadow-sm">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-sm font-black uppercase tracking-widest text-on-surface-variant/60">Privileged Notes</h3>
                                    <button className="material-symbols-outlined text-primary text-lg">add_notes</button>
                                </div>
                                <div className="space-y-4">
                                    <div className="p-3 bg-surface-container rounded-xl border-l-4 border-primary">
                                        <p className="text-xs font-bold text-on-surface mb-1">Q1 Performance Review</p>
                                        <p className="text-[10px] text-on-surface-variant leading-relaxed">Excels in mentoring junior faculty. Consider for Department Head role in 2025.</p>
                                        <p className="text-[9px] text-on-surface-variant/50 mt-2">Added by Admin Oct 12, 2023</p>
                                    </div>
                                    <div className="p-3 bg-surface-container rounded-xl">
                                        <p className="text-xs font-bold text-on-surface mb-1">Contract Negotiation</p>
                                        <p className="text-[10px] text-on-surface-variant leading-relaxed">Negotiating exclusivity for the upcoming Global Urbanism Series.</p>
                                        <p className="text-[9px] text-on-surface-variant/50 mt-2">Added by HR Nov 05, 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <BottomNav />
        </div>
    );
};

export default AdminInstructorProfilePage;
