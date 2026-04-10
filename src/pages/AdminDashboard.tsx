import Sidebar from "../components/Sidebar";
import TopBar from "../components/layout/TopBar";
import BottomNav from "../components/layout/BottomNav";
import MetricCard from "../components/MetricCard";
import { Link } from "react-router-dom";
import UserGrowthChart from "../components/UserGrowthChart";
import MentorshipFlow from "../components/MentorshipFlow";
import AuditTrail from "../components/AuditTrail";
import { getAdminDashboard } from '../lib/adminApi';
import { useQuery } from '@tanstack/react-query';

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



const AdminDashboard = () => {
    const token = localStorage.getItem('authToken') || ''
    
    const { data: dashboardRes } = useQuery({
        queryKey: ['adminDashboard', token],
        queryFn: () => getAdminDashboard(token)
    })

    const metrics = dashboardRes?.data?.metrics || null
    const instructors = dashboardRes?.data?.instructors || []

    const displayMetrics: MetricConfig[] = [
        {
            icon: 'person_add',
            iconBgClass: 'bg-blue-50',
            iconTextClass: 'text-primary',
            borderClass: 'md:border-primary',
            badgeText: metrics?.usersTrend || '+0%',
            badgeClass: 'text-teal-800 bg-teal-100',
            value: metrics?.totalUsers || '0',
            label: 'Total Users',
        },
        {
            icon: 'auto_stories',
            iconBgClass: 'bg-slate-50',
            iconTextClass: 'text-slate-700',
            borderClass: 'md:border-blue-400',
            badgeText: 'Stable',
            badgeClass: 'text-slate-500 bg-slate-200',
            value: metrics?.activeCourses || '0',
            label: 'Active Courses',
        },
        {
            icon: 'assignment_late',
            iconBgClass: 'bg-red-50',
            iconTextClass: 'text-red-700',
            borderClass: 'md:border-error',
            badgeText: 'Action Required',
            badgeClass: 'text-red-600 bg-red-100',
            value: metrics?.pendingAllocations || '0',
            label: 'Pending Allocations',
        },
        {
            icon: 'speed',
            iconBgClass: 'bg-teal-50',
            iconTextClass: 'text-teal-800',
            borderClass: 'md:border-tertiary',
            badgeText: '99.9% Uptime',
            badgeClass: 'text-teal-800 bg-teal-300',
            value: metrics?.avgLatency || '0ms',
            label: 'Avg. Latency',
        },
    ];

    return (
        <div className="bg-[#F8FAFC] min-h-screen text-on-surface">
            {/* Side Navigation */}
            <Sidebar />

            {/* Main Workspace Content */}
            <main className="pl-0 lg:pl-80 min-h-screen pb-24 md:pb-0">
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
                            <Link 
                                to="/admin/add-instructor"
                                className="flex items-center gap-2 bg-[#00327D] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-800 transition-colors shadow-lg"
                            >
                                <span className="material-symbols-outlined text-lg">person_add</span>
                                Create Instructor
                            </Link>
                            <button className="flex items-center gap-2 bg-surface-container-highest px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-300 transition-colors border border-slate-200">
                                <span className="material-symbols-outlined text-lg">download</span>
                                Export Summary
                            </button>
                        </div>
                    </section>

                    {/* Key Metric Grid */}
                    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {displayMetrics.map((metric) => (
                            <MetricCard key={metric.label} {...metric} />
                        ))}
                    </section>

                    {/* Central Intelligence Row */}
                    <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                             <UserGrowthChart />
                        </div>
                        <MentorshipFlow />
                    </section>

                    {/* Instructor Management Section */}
                    <section className="bg-white rounded-3xl shadow-sm border border-[#E0E3E5]/50 overflow-hidden">
                        <div className="p-6 border-b border-[#E0E3E5] flex justify-between items-center">
                            <h2 className="text-xl font-bold text-[#191C1E] font-manrope">Instructor Directory</h2>
                            <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">
                                {instructors.length} Verified Educators
                            </span>
                        </div>
                        
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-[#F8FAFC]">
                                        <th className="px-8 py-4 text-xs font-bold text-[#64748B] uppercase tracking-wider">Instructor</th>
                                        <th className="px-8 py-4 text-xs font-bold text-[#64748B] uppercase tracking-wider">Expertise</th>
                                        <th className="px-8 py-4 text-xs font-bold text-[#64748B] uppercase tracking-wider">Status</th>
                                        <th className="px-8 py-4 text-xs font-bold text-[#64748B] uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#F1F5F9]">
                                    {instructors.map(inst => (
                                        <tr key={inst.id} className="hover:bg-[#F8F9FF] transition-colors">
                                            <td className="px-8 py-6">
                                                <div className="font-bold text-[#1E293B]">{inst.name}</div>
                                                <div className="text-sm text-[#64748B]">{inst.email}</div>
                                            </td>
                                            <td className="px-8 py-6">
                                                <span className="px-3 py-1.5 rounded-lg bg-[#E0E7FF] text-[#3730A3] text-xs font-bold">
                                                    {inst.expertise}
                                                </span>
                                            </td>
                                            <td className="px-8 py-6">
                                                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                                                    inst.status === 'active' ? 'bg-[#DCFCE7] text-[#166534]' : 'bg-[#FEE2E2] text-[#991B1B]'
                                                }`}>
                                                    <div className={`w-1.5 h-1.5 rounded-full ${inst.status === 'active' ? 'bg-[#22C55E]' : 'bg-[#EF4444]'}`}></div>
                                                    {inst.status ? inst.status.charAt(0).toUpperCase() + inst.status.slice(1) : 'Unknown'}
                                                </span>
                                            </td>
                                            <td className="px-8 py-6">
                                                <button className="text-[#64748B] hover:text-[#3730A3] transition-colors">
                                                    <span className="material-symbols-outlined">settings</span>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    {instructors.length === 0 && (
                                        <tr>
                                            <td colSpan={4} className="px-8 py-6 text-center text-[#64748B]">No instructors found</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Audit Trail */}
                    <AuditTrail />
                </div>

                {/* Footer Area */}
                <footer className="p-8 text-center text-slate-400 text-xs font-medium">
                    © 2026 TalentFlow LMS Admin Executive • Internal Use Only • v2.8.4-stable
                </footer>
            </main>

            {/* Bottom Navigation (Mobile only) */}
            <BottomNav />

        </div>
    );
};

export default AdminDashboard;
