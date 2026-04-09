import Sidebar from "../components/layout/Sidebar";
import TopBar from "../components/layout/TopBar";
import BottomNav from "../components/layout/BottomNav";

const UserManagementPage = () => {
    return (
        <div className="bg-surface text-on-surface">
            {/* Side Navigation */}
            <Sidebar />

            {/* Main Workspace Content */}
            <main className="pl-0 md:pl-64 min-h-screen pb-24 md:pb-0">
                {/* Top Navigation */}
                <TopBar />

                {/* Dashboard Content Area */}
                <div className="p-6 md:p-8 max-w-7xl mx-auto">
                    {/* DESKTOP VIEW */}
                    <div className="hidden md:block">
                        {/* Page Header */}
                        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div>
                                <h1 className="text-4xl font-extrabold tracking-tight text-on-surface mb-2">User Directory</h1>
                                <p className="text-on-surface-variant max-w-xl leading-relaxed">Oversee and manage the talent ecosystem of Kinetic Academy. Curate roles, verify permissions, and track professional trajectories across the organization.</p>
                            </div>
                            <button className="cursor-pointer bg-gradient-to-tr from-primary to-primary-container text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity">
                                <span className="material-symbols-outlined text-lg">person_add</span>
                                Add New User
                            </button>
                        </div>
                        {/* Key Performance Metrics - Bento Grid Style */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                            <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center text-on-primary-fixed-variant">
                                        <span className="material-symbols-outlined">group</span>
                                    </div>
                                    <span className="text-xs font-bold text-on-tertiary-fixed-variant bg-tertiary-fixed px-2 py-1 rounded">LIVE</span>
                                </div>
                                <span className="text-on-surface-variant text-sm font-medium">Total Active Users</span>
                                <h2 className="text-3xl font-extrabold mt-1">1,248</h2>
                            </div>
                            <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-12 h-12 rounded-lg bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed-variant">
                                        <span className="material-symbols-outlined">trending_up</span>
                                    </div>
                                    <div className="flex items-center text-tertiary-container font-bold text-sm">
                                        <span className="material-symbols-outlined text-sm mr-1">arrow_upward</span>
                                        +12%
                                    </div>
                                </div>
                                <span className="text-on-surface-variant text-sm font-medium">Growth in Enrollment</span>
                                <h2 className="text-3xl font-extrabold mt-1">Quarterly Surge</h2>
                            </div>
                            <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-12 h-12 rounded-lg bg-tertiary-fixed-dim flex items-center justify-center text-on-tertiary-fixed-variant">
                                        <span className="material-symbols-outlined">verified</span>
                                    </div>
                                    <span className="text-sm font-bold text-primary">98%</span>
                                </div>
                                <span className="text-on-surface-variant text-sm font-medium">Profile Completion Rate</span>
                                <h2 className="text-3xl font-extrabold mt-1">Optimal Health</h2>
                            </div>
                        </div>
                        {/* Directory Controls */}
                        <div className="bg-surface-container-low p-6 rounded-xl mb-6">
                            <div className="flex flex-col lg:flex-row gap-4 items-center">
                                <div className="flex-1 w-full relative">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
                                    <input className="w-full pl-12 pr-4 py-3 bg-surface-container-lowest border-none rounded-lg focus:ring-2 focus:ring-surface-tint" placeholder="Search by name, email, or department..." type="text" />
                                </div>
                                <div className="flex gap-4 w-full lg:w-auto">
                                    <select className="flex-1 lg:flex-none bg-surface-container-lowest border-none rounded-lg py-3 px-6 text-sm font-medium focus:ring-2 focus:ring-surface-tint">
                                        <option>All Roles</option>
                                        <option>Instructor</option>
                                        <option>Learner</option>
                                        <option>Admin</option>
                                    </select>
                                    <select className="flex-1 lg:flex-none bg-surface-container-lowest border-none rounded-lg py-3 px-6 text-sm font-medium focus:ring-2 focus:ring-surface-tint">
                                        <option>All Status</option>
                                        <option>Active</option>
                                        <option>Deactivated</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/* User Data Table */}
                        <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-surface-container-low/50">
                                        <th className="px-8 py-5 text-xs font-bold text-outline uppercase tracking-wider">User Profile</th>
                                        <th className="px-6 py-5 text-xs font-bold text-outline uppercase tracking-wider">Assigned Role</th>
                                        <th className="px-6 py-5 text-xs font-bold text-outline uppercase tracking-wider">Account Status</th>
                                        <th className="px-6 py-5 text-xs font-bold text-outline uppercase tracking-wider">Joined Date</th>
                                        <th className="px-8 py-5 text-xs font-bold text-outline uppercase tracking-wider text-right">Administrative Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-outline-variant/10">
                                    <tr className="hover:bg-surface-container-low/30 transition-colors">
                                        <td className="px-8 py-5">
                                            <div className="flex items-center gap-4">
                                                <img alt="User Avatar" className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLL-eI_6hjBET-j-aXGvez0pwWeELvWYe_5jfy0gaOF4ADAu4QbR5SDrFYKeCDzQZMSvId2k71MyXlAOnfl6Fk06kGEdo4dya2ZJ4GyPLV5toPUcgwDuw7BT2NCFybf7WO67PyMLV2eLnbIJPD4ECBvCYMpuy5CaklZiQ_tmt-slgj6_ajR_Lw_U9ELFyGqA2x0rYJ8FIlqOoIRpiVWL16mSif1Uuw6SpQirBo-Wj_kKK6O7M3uX6kU94Vzfcmd0hqTYVPXckdDyI" />
                                                <div>
                                                    <div className="font-bold text-on-surface">Sarah Jenkins</div>
                                                    <div className="text-xs text-on-surface-variant">s.jenkins@kinetic.academy</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <span className="bg-secondary-fixed text-on-secondary-fixed-variant px-3 py-1 rounded-full text-xs font-bold">Instructor</span>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-tertiary-container"></span>
                                                <span className="text-sm font-medium">Active</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 text-sm text-on-surface-variant font-medium">Oct 12, 2023</td>
                                        <td className="px-8 py-5 text-right">
                                            <div className="flex items-center justify-end gap-3">
                                                <button className="p-2 hover:bg-surface-container-high rounded-lg text-outline-variant hover:text-primary transition-all">
                                                    <span className="material-symbols-outlined text-lg">edit</span>
                                                </button>
                                                <button className="p-2 hover:bg-error-container rounded-lg text-outline-variant hover:text-error transition-all">
                                                    <span className="material-symbols-outlined text-lg">block</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-surface-container-low/30 transition-colors">
                                        <td className="px-8 py-5">
                                            <div className="flex items-center gap-4">
                                                <img alt="User Avatar" className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb759VNWSI7I1-yKOnLP4ksAcu8oYi-hf8RGQWP7ab_NdNkRWtcOX0xhw8R7nPkHEyyvE5ZsUZT8YWFayBmOnNYrp7R0X1qsVInPcSUCHOXnpM_VRRu0bAUemtacYBezf5wdZ_6HgsSemQAIeiIvY_aBGgWX6_QorP2byCdPhQYa7lLY7YPC2_Pzx0UlC7qmI1FWMNR-_yvU9TrrX1FMB_ka_08Pp2YWng5BGCJwRTuIAtYQY_-lg21bfjeHz6ZPG45n0k3gNjEHQ" />
                                                <div>
                                                    <div className="font-bold text-on-surface">Marcus Thorne</div>
                                                    <div className="text-xs text-on-surface-variant">m.thorne@kinetic.academy</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <span className="bg-primary-fixed text-on-primary-fixed-variant px-3 py-1 rounded-full text-xs font-bold">Admin</span>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-tertiary-container"></span>
                                                <span className="text-sm font-medium">Active</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 text-sm text-on-surface-variant font-medium">Jan 05, 2024</td>
                                        <td className="px-8 py-5 text-right">
                                            <div className="flex items-center justify-end gap-3">
                                                <button className="p-2 hover:bg-surface-container-high rounded-lg text-outline-variant hover:text-primary transition-all">
                                                    <span className="material-symbols-outlined text-lg">edit</span>
                                                </button>
                                                <button className="p-2 hover:bg-error-container rounded-lg text-outline-variant hover:text-error transition-all">
                                                    <span className="material-symbols-outlined text-lg">block</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-surface-container-low/30 transition-colors">
                                        <td className="px-8 py-5">
                                            <div className="flex items-center gap-4">
                                                <img alt="User Avatar" className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxhxD66ZHekQ3r5pPh0x3lSS3azW_1Y80mf_erAbb5HC0ifCsRikZhlOpLyY25myyaN5N8qmDSvQkm--_OThTqwM_YZaMvQp7kxLbgrUEAaRUuBjC5-43GwnK7PqukqLba5HOMC10LUr4h28AVgwN-X1ZkAAiGyIuTac_wS8KgozbKflWdPBjeRvPYdSzkFKz0KDcVPsVq1CT6A9S9LNA6MwU9vvwSYqs58RyH5L_0q3asudztLieirXowDj7l0Kq9ndKDe-7GzFs" />
                                                <div>
                                                    <div className="font-bold text-on-surface">Elena Rodriguez</div>
                                                    <div className="text-xs text-on-surface-variant">e.rod@kinetic.academy</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <span className="bg-surface-container-high text-on-surface-variant px-3 py-1 rounded-full text-xs font-bold">Learner</span>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-outline-variant"></span>
                                                <span className="text-sm font-medium text-outline">Deactivated</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 text-sm text-on-surface-variant font-medium">Feb 18, 2024</td>
                                        <td className="px-8 py-5 text-right">
                                            <div className="flex items-center justify-end gap-3">
                                                <button className="p-2 hover:bg-surface-container-high rounded-lg text-outline-variant hover:text-primary transition-all">
                                                    <span className="material-symbols-outlined text-lg">edit</span>
                                                </button>
                                                <button className="p-2 bg-tertiary-fixed text-on-tertiary-fixed-variant hover:opacity-80 rounded-lg transition-all">
                                                    <span className="material-symbols-outlined text-lg">check_circle</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="px-8 py-4 bg-surface-container-low/20 border-t border-outline-variant/10 flex items-center justify-between">
                                <span className="text-xs text-on-surface-variant font-medium tracking-tight">Displaying 1–25 of 1,248 Curator Profiles</span>
                                <div className="flex items-center gap-2">
                                    <button className="p-2 rounded-lg hover:bg-surface-container-high text-outline transition-colors">
                                        <span className="material-symbols-outlined">chevron_left</span>
                                    </button>
                                    <div className="flex gap-1">
                                        <button className="w-8 h-8 rounded-lg bg-primary text-white text-xs font-bold">1</button>
                                        <button className="w-8 h-8 rounded-lg hover:bg-surface-container-high text-xs font-bold">2</button>
                                        <button className="w-8 h-8 rounded-lg hover:bg-surface-container-high text-xs font-bold">3</button>
                                    </div>
                                    <button className="p-2 rounded-lg hover:bg-surface-container-high text-outline transition-colors">
                                        <span className="material-symbols-outlined">chevron_right</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* MOBILE VIEW */}
                    <div className="md:hidden block">
                        {/* Header Section */}
                        <div className="mb-10">
                            <h2 className="text-4xl font-extrabold text-on-surface tracking-tight mb-2">Manage Users</h2>
                            <p className="text-on-surface-variant font-body">Curation and management of the talent ecosystem.</p>
                        </div>
                        {/* Controls: Search & Filters */}
                        <div className="bg-surface-container-low p-6 rounded-xl mb-8 flex flex-col gap-4 items-end">
                            <div className="flex-1 w-full relative">
                                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2 block">Search Directory</label>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
                                    <input className="w-full pl-10 pr-4 py-3 bg-surface-container-lowest border-0 rounded-lg focus:ring-2 focus:ring-surface-tint text-on-surface placeholder-outline/50 transition-all" placeholder="Search by name, email or role..." type="text" />
                                </div>
                            </div>
                            <div className="w-full">
                                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2 block">Role</label>
                                <select className="w-full px-4 py-3 bg-surface-container-lowest border-0 rounded-lg focus:ring-2 focus:ring-surface-tint text-on-surface transition-all appearance-none">
                                    <option>All Roles</option>
                                    <option>Learner</option>
                                    <option>Instructor</option>
                                    <option>Admin</option>
                                </select>
                            </div>
                            <div className="w-full">
                                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2 block">Status</label>
                                <select className="w-full px-4 py-3 bg-surface-container-lowest border-0 rounded-lg focus:ring-2 focus:ring-surface-tint text-on-surface transition-all appearance-none">
                                    <option>All Status</option>
                                    <option>Active</option>
                                    <option>Inactive</option>
                                </select>
                            </div>
                            <button className="cursor-pointer bg-primary text-on-primary px-6 py-3 rounded-lg font-bold flex w-full justify-center items-center gap-2 hover:opacity-90 active:scale-95 transition-all h-[52px] mt-2">
                                <span className="material-symbols-outlined">person_add</span>
                                <span>Add User</span>
                            </button>
                        </div>
                        {/* User List Table */}
                        <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm">
                            <table className="w-full border-collapse">
                                <thead className="bg-surface-container-low border-b border-outline-variant/10">
                                    <tr>
                                        <th className="text-left py-4 px-6 text-xs font-bold text-on-surface-variant uppercase tracking-widest">User Details</th>
                                        <th className="text-left py-4 px-3 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Role</th>
                                        <th className="text-right py-4 px-6 text-xs font-bold text-on-surface-variant uppercase tracking-widest"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-outline-variant/10">
                                    <tr className="hover:bg-surface-container-low/50 transition-colors">
                                        <td className="py-5 px-6">
                                            <div className="flex items-center gap-4">
                                                <img alt="Felix Miller" className="w-10 h-10 rounded-xl bg-slate-200" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOMhfWOqLFumTz1mwPnHo-aKix5eAnRJS0Qn0NdOghkTNzRHUtJnc-bXhoeW5BxjE53QutCZx1hKgwvofoJXzyWawdVATHN9ETyrgCQPCCidzmDXXRBTRMfWJ6W5vvwrElwhc7x_ON6EYIiD0A-3MSkHNY_YDKioIYNPrJHZ-9BW4ncJi54DRj2dTS-mTb7-MIxYLD91tjrKu_0kMnvKBHctVt9YEnlwPnLkMLpPPZQJ3f3Leq4fmoCTthlnrr36OGQrFALFqWdHY" />
                                                <div>
                                                    <div className="font-bold text-on-surface text-sm">Felix Miller</div>
                                                    <div className="text-xs text-on-surface-variant">felix.m@talentflow.edu</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-5 px-3">
                                            <span className="bg-secondary-container text-on-secondary-fixed-variant px-3 py-1 rounded-full text-xs font-semibold">Instructor</span>
                                        </td>
                                        <td className="py-5 px-6 text-right">
                                            <button className="p-2 hover:bg-surface-container rounded-lg transition-colors text-outline">
                                                <span className="material-symbols-outlined">more_vert</span>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-surface-container-low/50 transition-colors">
                                        <td className="py-5 px-6">
                                            <div className="flex items-center gap-4">
                                                <img alt="Sarah Connor" className="w-10 h-10 rounded-xl bg-slate-200" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7RE4W0y9qhULp7QxH78vYg1rdxOtgeheWzGhXMI-8wUrHkcQLAUBFEHCbcG_mUCcS9nilMwKtyPQ7cdpIv2Jslc1FqUFHAdBJ5LkNK_haAciWfgELmYNtRW-PduI3rkDd3sEbOXIfaDAF22OyQyDNgFxKeSbc9_P2YxvmLz9K07Tm4INjmMiE5-ITNNxt-4gC1z7IhMUh43AVPKjJVfGg41uzqzdTKJPjk3nAww6BfM0o8CLciaj0Ct_YumsdFH281tbSI4-uvG8" />
                                                <div>
                                                    <div className="font-bold text-on-surface text-sm">Sarah Connor</div>
                                                    <div className="text-xs text-on-surface-variant">s.connor@sky-learn.net</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-5 px-3">
                                            <span className="bg-primary-fixed text-on-primary-fixed-variant px-3 py-1 rounded-full text-xs font-semibold">Learner</span>
                                        </td>
                                        <td className="py-5 px-6 text-right">
                                            <button className="p-2 hover:bg-surface-container rounded-lg transition-colors text-outline">
                                                <span className="material-symbols-outlined">more_vert</span>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-surface-container-low/50 transition-colors">
                                        <td className="py-5 px-6">
                                            <div className="flex items-center gap-4">
                                                <img alt="Marcus Aurelius" className="w-10 h-10 rounded-xl bg-slate-200" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_s3qn9STxsh5Zirgk3bdWKr-CZqYcIoqeB3ogZ3JLINbLftFJCQZre7EruXXi21qaA2bbu_mOTrRwP0OQgzKGpwVgpZMrvC42Nw2Y1o49s7uVdjYjplJ_D51GFxRUP8guoUYwn5pbGT22X5JJvZmOT6bb073qDZdvuasIcNp5FxfTYWamzuz4YwzgwcK2Z-DlYZaJ0Q5Cc44ZOmmd05od9oin2zi3nAc1FEHbVM13EcAdiS1479QEDYEWsB2IJujRasugYjRNRg8" />
                                                <div>
                                                    <div className="font-bold text-on-surface text-sm">Marcus Aurelius</div>
                                                    <div className="text-xs text-on-surface-variant">m.aurelius@admin.flow</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-5 px-3">
                                            <span className="bg-surface-container-highest text-on-surface-variant px-3 py-1 rounded-full text-xs font-semibold">Admin</span>
                                        </td>
                                        <td className="py-5 px-6 text-right">
                                            <button className="p-2 hover:bg-surface-container rounded-lg transition-colors text-outline">
                                                <span className="material-symbols-outlined">more_vert</span>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* Pagination */}
                            <div className="px-6 py-4 flex items-center justify-between border-t border-outline-variant/10">
                                <p className="text-sm text-on-surface-variant">Showing <span className="font-bold">1</span> to <span className="font-bold">3</span> of <span className="font-bold">24</span></p>
                                <div className="flex gap-2">
                                    <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container disabled:opacity-30" disabled>
                                        <span className="material-symbols-outlined">chevron_left</span>
                                    </button>
                                    <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-on-primary font-bold">1</button>
                                    <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container">2</button>
                                    <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container">
                                        <span className="material-symbols-outlined">chevron_right</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Bento Stats Grid (Editorial Layout) */}
                        <div className="grid grid-cols-1 gap-6 mt-12">
                            <div className="bg-secondary-container/30 p-6 rounded-2xl flex flex-col justify-between h-40">
                                <span className="material-symbols-outlined text-primary text-3xl">groups</span>
                                <div>
                                    <div className="text-2xl font-black text-on-surface">1,248</div>
                                    <div className="text-sm font-medium text-on-secondary-fixed-variant">Total active users this month</div>
                                </div>
                            </div>
                            <div className="bg-tertiary-fixed/20 p-6 rounded-2xl flex flex-col justify-between h-40">
                                <span className="material-symbols-outlined text-tertiary text-3xl">trending_up</span>
                                <div>
                                    <div className="text-2xl font-black text-on-surface">+12%</div>
                                    <div className="text-sm font-medium text-on-tertiary-fixed-variant">Growth in learner enrollment</div>
                                </div>
                            </div>
                            <div className="bg-surface-container-highest p-6 rounded-2xl flex flex-col justify-between h-40">
                                <span className="material-symbols-outlined text-on-surface-variant text-3xl">assignment_turned_in</span>
                                <div>
                                    <div className="text-2xl font-black text-on-surface">98%</div>
                                    <div className="text-sm font-medium text-on-surface-variant">Profile completion rate</div>
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

export default UserManagementPage;
