import Sidebar from "../components/layout/Sidebar";
import TopBar from "../components/layout/TopBar";
import BottomNav from "../components/layout/BottomNav";
import MetricCard from "../components/MetricCard";
import UserGrowthChart from "../components/UserGrowthChart";
import MentorshipFlow from "../components/MentorshipFlow";
import AuditTrail from "../components/AuditTrail";



interface MetricConfig {
    icon: string;
    iconBgClass: string;
    iconTextClass: string;
    borderClass: string;
    badgeText: string;
    badgeClass: string;
    value: string;
    label: string;
}

const metrics: MetricConfig[] = [
    {
        icon: 'person_add',
        iconBgClass: 'bg-blue-50',
        iconTextClass: 'text-primary',
        borderClass: 'md:border-primary',
        badgeText: '+12.5%',
        badgeClass: 'text-teal-800 bg-teal-100',
        value: '12,842',
        label: 'Total Users',
    },
    {
        icon: 'auto_stories',
        iconBgClass: 'bg-slate-50',
        iconTextClass: 'text-slate-700',
        borderClass: 'md:border-blue-400',
        badgeText: 'Stable',
        badgeClass: 'text-slate-500 bg-slate-200',
        value: '458',
        label: 'Active Courses',
    },
    {
        icon: 'assignment_late',
        iconBgClass: 'bg-red-50',
        iconTextClass: 'text-red-700',
        borderClass: 'md:border-error',
        badgeText: 'Action Required',
        badgeClass: 'text-red-600 bg-red-100',
        value: '32',
        label: 'Pending Allocations',
    },
    {
        icon: 'speed',
        iconBgClass: 'bg-teal-50',
        iconTextClass: 'text-teal-800',
        borderClass: 'md:border-tertiary',
        badgeText: '99.9% Uptime',
        badgeClass: 'text-teal-800 bg-teal-300',
        value: '14ms',
        label: 'Avg. Latency',
    },
];

const AdminDashboard = () => {
    return (
        <div className="bg-surface text-on-surface">
            {/* Side Navigation */}
            <Sidebar />

            {/* Main Workspace Content */}
            <main className="pl-0 md:pl-64 min-h-screen pb-24 md:pb-0">
                {/* Top Navigation */}
                <TopBar />

                {/* Dashboard Content Area */}
                <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-6 md:space-y-8">
                    {/* Summary Header */}
                    <section className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <h2 className="text-[28px] leading-tight md:text-3xl font-extrabold text-blue-900 dark:text-blue-50 tracking-tight font-manrope">
                                TalentFlow<br className="md:hidden" /> Executive Overview
                            </h2>
                            <p className="text-slate-500 text-xs md:text-lg font-medium mt-3 md:mt-1 max-w-70 md:max-w-none leading-relaxed">
                                Curation of architecture-level platform metrics and real-time administrative
                                intelligence. Monitoring growth and system integrity.
                            </p>
                        </div>
                        <div className="hidden md:flex items-center gap-3">
                            <div className="flex bg-surface-container-low p-1 rounded-lg">
                                <button className="px-4 py-1.5 bg-white shadow-sm rounded-md text-xs font-bold text-blue-700">
                                    7D View
                                </button>
                                <button className="px-4 py-1.5 text-xs font-medium text-slate-500">
                                    30D View
                                </button>
                            </div>
                            <button className="flex items-center gap-2 bg-surface-container-highest px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-300 transition-colors">
                                <span className="material-symbols-outlined text-lg">download</span>
                                Export Summary
                            </button>
                        </div>
                    </section>

                    {/* Key Metric Grid */}
                    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {metrics.map((metric) => (
                            <MetricCard key={metric.label} {...metric} />
                        ))}
                    </section>

                    {/* Central Intelligence Row */}
                    <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <UserGrowthChart />
                        <MentorshipFlow />
                    </section>

                    {/* Audit Trail */}
                    <AuditTrail />
                </div>

                {/* Footer Area */}
                <footer className="p-8 text-center text-slate-400 text-xs font-medium">
                    © 2024 Architectural Curator Admin Console • Internal Use Only • v2.8.4-stable
                </footer>
            </main>

            {/* Bottom Navigation (Mobile only) */}
            <BottomNav />
        </div>
    );
};

export default AdminDashboard ;
