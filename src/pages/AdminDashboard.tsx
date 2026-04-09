<<<<<<< Updated upstream
import { useState } from 'react'
import Sidebar from '../components/Sidebar'
=======
import { useState } from 'react';
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
>>>>>>> Stashed changes

interface Instructor {
  id: string
  name: string
  email: string
  expertise: string
  status: 'active' | 'pending'
}

<<<<<<< Updated upstream
export default function AdminDashboard() {
  const [instructors, setInstructors] = useState<Instructor[]>([
    { id: '1', name: 'Dr. Sarah Chen', email: 'sarah.chen@talentflow.edu', expertise: 'System Architecture', status: 'active' },
    { id: '2', name: 'Prof. James Wilson', email: 'j.wilson@talentflow.edu', expertise: 'Data Engineering', status: 'active' }
  ])

  const [showAddModal, setShowAddModal] = useState(false)
  const [newInstructor, setNewInstructor] = useState({ name: '', email: '', expertise: '' })

  const handleAddInstructor = (e: React.FormEvent) => {
    e.preventDefault()
    const instructor: Instructor = {
      id: Math.random().toString(36).substr(2, 9),
      ...newInstructor,
      status: 'pending'
    }
    setInstructors([...instructors, instructor])
    setShowAddModal(false)
    setNewInstructor({ name: '', email: '', expertise: '' })
    alert(`Account created for ${instructor.name}. An invitation email has been sent to ${instructor.email}.`)
  }

  return (
    <div className="flex bg-[#F7F9FB] min-h-screen">
      <Sidebar />
      <main className="grow p-8 md:p-12 max-w-7xl mx-auto w-full">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-extrabold text-[#191C1E] font-headline tracking-tight">Admin Oversight</h1>
            <p className="text-[#434653] font-medium mt-1">Manage platform instructors and system architecture.</p>
          </div>
          <button 
            onClick={() => setShowAddModal(true)}
            className="px-6 py-3 rounded-xl bg-linear-to-r from-[#00327D] to-[#2559BD] text-white font-bold shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined">person_add</span>
            Create Instructor Account
          </button>
        </header>

        <section className="bg-white rounded-3xl shadow-ambient border border-[#E0E3E5]/50 overflow-hidden">
          <div className="p-8 border-b border-[#E0E3E5]">
            <h2 className="text-xl font-bold text-[#191C1E] font-headline">Instructor Directory</h2>
          </div>
          
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#F2F4F6]">
                <th className="px-8 py-4 text-xs font-bold text-[#434653] uppercase tracking-wider">Instructor</th>
                <th className="px-8 py-4 text-xs font-bold text-[#434653] uppercase tracking-wider">Expertise</th>
                <th className="px-8 py-4 text-xs font-bold text-[#434653] uppercase tracking-wider">Status</th>
                <th className="px-8 py-4 text-xs font-bold text-[#434653] uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E0E3E5]">
              {instructors.map(inst => (
                <tr key={inst.id} className="hover:bg-[#F7F9FB] transition-colors">
                  <td className="px-8 py-6">
                    <div className="font-bold text-[#191C1E]">{inst.name}</div>
                    <div className="text-sm text-[#434653]">{inst.email}</div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="px-3 py-1.5 rounded-lg bg-[#D3E4FE] text-[#00419E] text-xs font-bold">
                      {inst.expertise}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                      inst.status === 'active' ? 'bg-[#C6F0D8] text-[#00502D]' : 'bg-[#FFE2D9] text-[#711600]'
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${inst.status === 'active' ? 'bg-[#00A651]' : 'bg-[#FF4D00]'}`}></div>
                      {inst.status.charAt(0).toUpperCase() + inst.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <button className="text-[#434653] hover:text-[#00419E] transition-colors">
                      <span className="material-symbols-outlined">settings</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {showAddModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg p-8 animate-scale-in">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-[#191C1E] font-headline">New Instructor Account</h2>
                <button onClick={() => setShowAddModal(false)} className="text-[#434653] hover:text-[#191C1E]">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              
              <form onSubmit={handleAddInstructor} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-[#434653] mb-2">Full Name</label>
                  <input 
                    required
                    className="w-full px-5 py-4 rounded-xl bg-[#F2F4F6] border-none focus:ring-2 focus:ring-[#2559BD] text-[#191C1E] transition-all outline-none"
                    placeholder="e.g. Dr. Alex Rivera"
                    value={newInstructor.name}
                    onChange={e => setNewInstructor({...newInstructor, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#434653] mb-2">Institutional Email</label>
                  <input 
                    type="email"
                    required
                    className="w-full px-5 py-4 rounded-xl bg-[#F2F4F6] border-none focus:ring-2 focus:ring-[#2559BD] text-[#191C1E] transition-all outline-none"
                    placeholder="a.rivera@talentflow.edu"
                    value={newInstructor.email}
                    onChange={e => setNewInstructor({...newInstructor, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#434653] mb-2">Target Expertise Area</label>
                  <select 
                    required
                    className="w-full px-5 py-4 rounded-xl bg-[#F2F4F6] border-none focus:ring-2 focus:ring-[#2559BD] text-[#191C1E] transition-all outline-none"
                    value={newInstructor.expertise}
                    onChange={e => setNewInstructor({...newInstructor, expertise: e.target.value})}
                  >
                    <option value="">Select Domain</option>
                    <option value="System Architecture">System Architecture</option>
                    <option value="Data Science">Data Science</option>
                    <option value="Cloud Infrastructure">Cloud Infrastructure</option>
                    <option value="Cybersecurity">Cybersecurity</option>
                  </select>
                </div>
                <div className="p-4 bg-[#EEF0FF] rounded-xl border border-[#D3E4FE]">
                  <p className="text-xs text-[#00419E] font-medium leading-relaxed">
                    Account credentials will be automatically generated and sent to the instructor's institutional email address.
                  </p>
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 rounded-xl bg-linear-to-r from-[#00327D] to-[#2559BD] text-white font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
                >
                  Confirm & Create Account
                </button>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
=======
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
    const [instructors, setInstructors] = useState<Instructor[]>([
        { id: '1', name: 'Dr. Sarah Chen', email: 'sarah.chen@talentflow.edu', expertise: 'System Architecture', status: 'active' },
        { id: '2', name: 'Prof. James Wilson', email: 'j.wilson@talentflow.edu', expertise: 'Data Engineering', status: 'active' }
      ])
    
      const [showAddModal, setShowAddModal] = useState(false)
      const [newInstructor, setNewInstructor] = useState({ name: '', email: '', expertise: '' })
    
      const handleAddInstructor = (e: React.FormEvent) => {
        e.preventDefault()
        const instructor: Instructor = {
          id: Math.random().toString(36).substr(2, 9),
          ...newInstructor,
          status: 'pending'
        }
        setInstructors([...instructors, instructor])
        setShowAddModal(false)
        setNewInstructor({ name: '', email: '', expertise: '' })
      }

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
                            <button 
                                onClick={() => setShowAddModal(true)}
                                className="flex items-center gap-2 bg-[#00327D] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-800 transition-colors shadow-lg"
                            >
                                <span className="material-symbols-outlined text-lg">person_add</span>
                                Create Instructor
                            </button>
                            <button className="flex items-center gap-2 bg-surface-container-highest px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-300 transition-colors border border-slate-200">
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
                                                    {inst.status.charAt(0).toUpperCase() + inst.status.slice(1)}
                                                </span>
                                            </td>
                                            <td className="px-8 py-6">
                                                <button className="text-[#64748B] hover:text-[#3730A3] transition-colors">
                                                    <span className="material-symbols-outlined">settings</span>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
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

            {/* Add Instructor Modal */}
            {showAddModal && (
                <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 animate-in fade-in zoom-in duration-200">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-[#1E293B] font-manrope">New Instructor Account</h2>
                            <button onClick={() => setShowAddModal(false)} className="text-slate-400 hover:text-slate-600 transition-colors">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        
                        <form onSubmit={handleAddInstructor} className="space-y-5">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1.5">Full Name</label>
                                <input 
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-[#3730A3] focus:border-transparent text-slate-900 transition-all outline-none"
                                    placeholder="e.g. Dr. Alex Rivera"
                                    value={newInstructor.name}
                                    onChange={e => setNewInstructor({...newInstructor, name: e.target.value})}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1.5">Institutional Email</label>
                                <input 
                                    type="email"
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-[#3730A3] focus:border-transparent text-slate-900 transition-all outline-none"
                                    placeholder="a.rivera@talentflow.edu"
                                    value={newInstructor.email}
                                    onChange={e => setNewInstructor({...newInstructor, email: e.target.value})}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1.5">Target Expertise Area</label>
                                <select 
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-[#3730A3] focus:border-transparent text-slate-900 transition-all outline-none appearance-none"
                                    value={newInstructor.expertise}
                                    onChange={e => setNewInstructor({...newInstructor, expertise: e.target.value})}
                                >
                                    <option value="">Select Domain</option>
                                    <option value="System Architecture">System Architecture</option>
                                    <option value="Data Science">Data Science</option>
                                    <option value="Cloud Infrastructure">Cloud Infrastructure</option>
                                    <option value="Cybersecurity">Cybersecurity</option>
                                </select>
                            </div>
                            <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                                <p className="text-xs text-blue-700 font-medium leading-relaxed">
                                    Account credentials will be automatically generated and sent to the instructor's institutional email address.
                                </p>
                            </div>
                            <button 
                                type="submit"
                                className="w-full py-4 rounded-xl bg-[#00327D] text-white font-bold text-lg shadow-xl shadow-blue-900/10 hover:bg-blue-800 active:scale-[0.98] transition-all"
                            >
                                Confirm & Create Account
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;
>>>>>>> Stashed changes
