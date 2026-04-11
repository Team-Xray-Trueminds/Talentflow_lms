import Sidebar from "../components/Sidebar";
import TopBar from "../components/layout/TopBar";
import BottomNav from "../components/layout/BottomNav";
import { Link } from "react-router-dom";

const UserManagementPage = () => {
    const mobileUsers = [
        { name: 'Sarah Jenkins', email: 's.jenkins@kinetic.academy', role: 'Instructor', status: 'Active', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLL-eI_6hjBET-j-aXGvez0pwWeELvWYe_5jfy0gaOF4ADAu4QbR5SDrFYKeCDzQZMSvId2k71MyXlAOnfl6Fk06kGEdo4dya2ZJ4GyPLV5toPUcgwDuw7BT2NCFybf7WO67PyMLV2eLnbIJPD4ECBvCYMpuy5CaklZiQ_tmt-slgj6_ajR_Lw_U9ELFyGqA2x0rYJ8FIlqOoIRpiVWL16mSif1Uuw6SpQirBo-Wj_kKK6O7M3uX6kU94Vzfcmd0hqTYVPXckdDyI' },
        { name: 'Marcus Thorne', email: 'm.thorne@kinetic.academy', role: 'Admin', status: 'Active', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAb759VNWSI7I1-yKOnLP4ksAcu8oYi-hf8RGQWP7ab_NdNkRWtcOX0xhw8R7nPkHEyyvE5ZsUZT8YWFayBmOnNYrp7R0X1qsVInPcSUCHOXnpM_VRRu0bAUemtacYBezf5wdZ_6HgsSemQAIeiIvY_aBGgWX6_QorP2byCdPhQYa7lLY7YPC2_Pzx0UlC7qmI1FWMNR-_yvU9TrrX1FMB_ka_08Pp2YWng5BGCJwRTuIAtYQY_-lg21bfjeHz6ZPG45n0k3gNjEHQ' },
        { name: 'Elena Rodriguez', email: 'e.rod@talentflow.edu', role: 'Learner', status: 'Inactive', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxhxD66ZHekQ3r5pPh0x3lSS3azW_1Y80mf_erAbb5HC0ifCsRikZhlOpLyY25myyaN5N8qmDSvQkm--_OThTqwM_YZaMvQp7kxLbgrUEAaRUuBjC5-43GwnK7PqukqLba5HOMC10LUr4h28AVgwN-X1ZkAAiGyIuTac_wS8KgozbKflWdPBjeRvPYdSzkFKz0KDcVPsVq1CT6A9S9LNA6MwU9vvwSYqs58RyH5L_0q3asudztLieirXowDj7l0Kq9ndKDe-7GzFs' }
    ];

    return (
        <div className="bg-[#F8FAFC] min-h-screen text-on-surface">
            <Sidebar />

            <main className="pl-0 lg:pl-80 min-h-screen pb-32 lg:pb-10">
                <TopBar />

                <div className="p-4 md:p-8 max-w-7xl mx-auto">
                    {/* DESKTOP VIEW */}
                    <div className="hidden md:block">
                        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div>
                                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-on-surface mb-2">User Directory</h1>
                                <p className="text-on-surface-variant max-w-xl leading-relaxed">Oversee and manage the talent ecosystem of TalentFlow LMS.</p>
                            </div>
                            <Link to="/admin/add-instructor" className="bg-[#00327D] text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:shadow-lg transition-all active:scale-95 no-underline">
                                <span className="material-symbols-outlined">person_add</span>
                                Add New User
                            </Link>
                        </div>

                        {/* Metrics */}
                        <div className="grid grid-cols-3 gap-6 mb-10">
                            {[
                                { label: 'Total Active Users', value: '1,248', icon: 'group', color: 'bg-blue-50 text-blue-600' },
                                { label: 'Growth Enrollment', value: '+12%', icon: 'trending_up', color: 'bg-emerald-50 text-emerald-600' },
                                { label: 'Completion Rate', value: '98%', icon: 'verified', color: 'bg-purple-50 text-purple-600' }
                            ].map((stat, i) => (
                                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 font-black ${stat.color.split(' ')[0]} ${stat.color.split(' ')[1]}">
                                        <span className="material-symbols-outlined">{stat.icon}</span>
                                    </div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                                    <h2 className="text-2xl font-black text-slate-800 mt-1">{stat.value}</h2>
                                </div>
                            ))}
                        </div>

                        {/* Table Placeholder (Simplified for brevity as we are fixing JSX) */}
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-slate-50 border-b border-slate-100">
                                    <tr>
                                        <th className="px-6 py-4 text-[10px] font-black uppercase text-slate-400">User Profile</th>
                                        <th className="px-6 py-4 text-[10px] font-black uppercase text-slate-400">Role</th>
                                        <th className="px-6 py-4 text-[10px] font-black uppercase text-slate-400 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {mobileUsers.map((user, i) => (
                                        <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <img src={((user as any).thumbnailUrl || user.img)} className="w-8 h-8 rounded-full" alt="" />
                                                    <div>
                                                        <p className="font-bold text-sm text-slate-700">{user.name}</p>
                                                        <p className="text-[10px] text-slate-400">{user.email}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="text-[10px] font-black uppercase bg-slate-100 px-2 py-1 rounded text-slate-500">{user.role}</span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <Link to="/admin/user-detail" className="text-slate-400 hover:text-blue-600"><span className="material-symbols-outlined">visibility</span></Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* MOBILE VIEW */}
                    <div className="md:hidden space-y-8">
                        <div>
                            <h1 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-slate-900 mb-2">User Directory</h1>
                            <p className="text-sm font-medium text-slate-500">Curation of the talent ecosystem.</p>
                        </div>

                        {/* Search */}
                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                             <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                                <input className="w-full pl-10 pr-4 py-3 bg-slate-50 border-none rounded-xl text-sm" placeholder="Search talent..." />
                             </div>
                        </div>

                        {/* List Cards */}
                        <div className="space-y-4">
                            {mobileUsers.map((user, idx) => (
                                <div key={idx} className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 flex flex-col gap-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <img src={((user as any).thumbnailUrl || user.img)} className="w-12 h-12 rounded-2xl object-cover shadow-sm" alt={user.name} />
                                            <div>
                                                <p className="font-black text-slate-800 leading-tight text-base">{user.name}</p>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">{user.role}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <span className={`w-2 h-2 rounded-full ${user.status === 'Active' ? 'bg-emerald-500 animate-pulse' : 'bg-slate-300'}`}></span>
                                            <span className="text-[9px] font-black text-slate-400 uppercase">Live</span>
                                        </div>
                                    </div>
                                    
                                    <div className="grid grid-cols-2 gap-3">
                                        <Link to="/admin/user-detail" className="flex items-center justify-center gap-2 py-3 bg-blue-50 text-blue-700 rounded-2xl text-[10px] font-black uppercase tracking-widest no-underline">
                                            <span className="material-symbols-outlined text-[18px]">visibility</span>
                                            Dossier
                                        </Link>
                                        <button className="flex items-center justify-center gap-2 py-3 bg-slate-50 text-slate-600 rounded-2xl text-[10px] font-black uppercase tracking-widest border-none">
                                            <span className="material-symbols-outlined text-[18px]">edit</span>
                                            Edit
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link to="/admin/add-instructor" className="flex items-center justify-center gap-3 bg-[#00327D] text-white py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl no-underline">
                            <span className="material-symbols-outlined">person_add</span>
                            Provision New Talent
                        </Link>
                    </div>
                </div>
            </main>

            <BottomNav />
        </div>
    );
};

export default UserManagementPage;
