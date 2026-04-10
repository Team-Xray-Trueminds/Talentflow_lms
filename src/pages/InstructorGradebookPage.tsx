import { useState } from 'react';
import Sidebar from '../components/Sidebar';

interface Assignment {
    title: string;
    score: number | null;
    status: string;
}

interface Student {
    id: number;
    name: string;
    program: string;
    email: string;
    img: string;
    progress: number;
    grade: string;
    lastActive: string;
    status: string;
    thumbnailUrl?: string;
    assignments: Assignment[];
}

const InstructorGradebookPage = () => {
    const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

    const metrics = [
        { label: 'Avg Achievement', value: '88.4%', trend: '+2.4%', icon: 'trending_up', color: '#00327D' },
        { label: 'Platform Activity', value: '94.1%', trend: '+5.2%', icon: 'bolt', color: '#57FAE9' },
        { label: 'Review Latency', value: '1.2d', trend: '-0.4d', icon: 'schedule', color: '#F2C94C' }
    ];

    const students: Student[] = [
        { 
            id: 1, 
            name: 'Alexandru Chen', 
            program: 'UI Architecture II', 
            email: 'alex@talentflow.edu', 
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCk5utjN07mkZOhvtLZIyLzTlvKn2L4iPZCxU2HE03HITuSyf687NvYeKy1N3BB3ni_PXK6x68sbgc75rNQ2L2yaSJm-G8klfuPjgpLJwHX36NoMakdz6P_Z2afHIAebaZV13Q7a3n9L2hbMhTqfjyw74ubS7f51FH_QDX66YnHaXq9NSQwc_7KrIjpQkDJ-Yp3aaAhNu-vnGsNf7SIO4uN_S4bTdHe0MSfe9aqNGnaSUESsnPKSC5Ebl9BWs9kMIL9tpe4Ug-K6OI', 
            progress: 82, 
            grade: 'A-', 
            lastActive: '12m ago',
            status: 'On Track',
            assignments: [
                { title: 'Foundational Scaffolding', score: 92, status: 'Graded' },
                { title: 'Interaction Logic v2', score: 85, status: 'Graded' },
                { title: 'Final Case Study', score: null, status: 'Submitted' }
            ]
        },
        { 
            id: 2, 
            name: 'Elena Rodriguez', 
            program: 'Product Strategy', 
            email: 'elena@talentflow.edu', 
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB06ZF4rJWSKN23zp2wWsqwcW2AAK2QkSoDP8VJd3XcOmygrHupDSMRzlmq1pV7oIZmyGUWmoHieax_B0EhzWAKlA3mVAirTYUI7btKWWdLkEFw7NS5SmkEjHY-urpnaWWOzby9uwXtVCfd0xjLeIluwlQol8d9sOChqyuzLcu8hwIJZKuYVi7WMjsB_7DuwjZ7MBOWgf9H2W7DOYgCqdKZeTdDRVZqyp5Ox8q3TvJ3ndRGc5lXidkY5yfCJZDARcfbOl7kxPydQ1M', 
            progress: 45, 
            grade: 'C+', 
            lastActive: '2h ago',
            status: 'Attention Needed',
            assignments: [
                { title: 'Market Logic', score: 72, status: 'Graded' },
                { title: 'User Archetypes', score: null, status: 'Pending' }
            ]
        },
        { 
            id: 3, 
            name: 'Jordan Smyth', 
            program: 'UI Architecture II', 
            email: 'jordan@talentflow.edu', 
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVxrI9I5n58GFjq4GFTGavFlXmZe1bnwXPHtwHXeUg1aK1lVc7QKPvWr4O3EaYIjo56Qyp-AehpphzpbwI3peCA6mH3SMiUQnPK5y_zNT1ZmR_FblJnP7oSIdV4oTn4k_dpA6R5o9EVH256JTlGMsvpDvLW7E2Kt-iJ4839-mW_cxwIDVedGKFpDZyRrVl92Y3swdRuk9oj5AeAYnCk74RmRPjXJAt7mbdlVteunFv_yurekYAEQqpvZMJ4eMQZz3sBVC1ru3TwM0', 
            progress: 96, 
            grade: 'A+', 
            lastActive: 'Just now',
            status: 'On Track',
            assignments: []
        }
    ];

    return (
        <div className="flex bg-[#F7F9FB] min-h-screen font-inter text-[#191C1E]">
            <Sidebar />
            
            <main className="flex-1 flex flex-col min-w-0">
                {/* 1. GLASS HEADER */}
                <header className="h-20 bg-[#F7F9FB]/80 backdrop-blur-xl sticky top-0 z-50 flex items-center justify-between px-10 border-b border-[#E0E3E5]/20">
                    <div className="flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.2em] text-[#434653]">
                        <span className="text-[#00327D]">Talent Flow</span>
                        <span className="text-[#C3C6D5]">/</span>
                        <span>Instructor Gradebook</span>
                    </div>
                    
                    <div className="flex items-center gap-6">
                        <div className="hidden md:block text-right">
                           <p className="text-xs font-black">Julian Casablancas</p>
                           <p className="text-[10px] font-bold text-[#737784] uppercase tracking-widest leading-none mt-1">Senior Curator</p>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00327D] to-[#2559BD] p-[2px] shadow-lg shadow-[#00327D]/20">
                           <div className="w-full h-full bg-white rounded-[9px] overflow-hidden">
                              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk5utjN07mkZOhvtLZIyLzTlvKn2L4iPZCxU2HE03HITuSyf687NvYeKy1N3BB3ni_PXK6x68sbgc75rNQ2L2yaSJm-G8klfuPjgpLJwHX36NoMakdz6P_Z2afHIAebaZV13Q7a3n9L2hbMhTqfjyw74ubS7f51FH_QDX66YnHaXq9NSQwc_7KrIjpQkDJ-Yp3aaAhNu-vnGsNf7SIO4uN_S4bTdHe0MSfe9aqNGnaSUESsnPKSC5Ebl9BWs9kMIL9tpe4Ug-K6OI" className="w-full h-full object-cover grayscale" alt="Avatar" />
                           </div>
                        </div>
                    </div>
                </header>

                <div className="p-10 max-w-[1600px] w-full mx-auto space-y-12">
                    {/* 2. PAGE OVERVIEW */}
                    <header className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div>
                            <h1 className="text-5xl font-black font-manrope tracking-tighter text-[#1C1B1F] mb-3">Academic Performance</h1>
                            <p className="text-[#434653] font-medium text-lg leading-relaxed max-w-xl">
                                Real-time monitoring of learner achievement and intervention signals throughout the architecture curriculum.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <button className="bg-white px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest shadow-sm ring-1 ring-[#E0E3E5] hover:bg-[#F2F4F6] transition-all cursor-pointer border-none">Export Audit</button>
                            <button className="bg-[#00327D] text-white px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest shadow-xl shadow-[#00327D]/20 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer border-none">View Full Report</button>
                        </div>
                    </header>

                    {/* 3. BENTO METRICS */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {metrics.map((m, i) => (
                            <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-[0px_12px_32px_rgba(25,28,30,0.04)] ring-1 ring-[#E0E3E5]/30 group hover:translate-y-[-4px] transition-all duration-500">
                                <div className="w-12 h-12 rounded-2xl bg-[#F2F4F6] flex items-center justify-center text-[#00327D] mb-6 group-hover:bg-[#00327D] group-hover:text-white transition-colors duration-500">
                                    <span className="material-symbols-outlined text-2xl">{m.icon}</span>
                                </div>
                                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#737784] mb-2">{m.label}</p>
                                <div className="flex items-baseline gap-3">
                                    <h3 className="text-3xl font-black text-[#191C1E]">{m.value}</h3>
                                    <span className="text-[11px] font-bold text-[#005049]">{m.trend}</span>
                                </div>
                            </div>
                        ))}
                        
                        <div className="bg-[#FFDAD6] p-8 rounded-[2.5rem] border border-[#BA1A1A]/10 shadow-[0px_12px_32px_rgba(186,26,26,0.04)]">
                            <div className="w-12 h-12 rounded-2xl bg-[#BA1A1A] flex items-center justify-center text-white mb-6">
                                <span className="material-symbols-outlined text-2xl">priority_high</span>
                            </div>
                            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#93000A] mb-2">Attention Required</p>
                            <h3 className="text-xl font-black text-[#410002] leading-tight">14 Pending<br/>Assessments</h3>
                        </div>
                    </div>

                    {/* 4. MAIN DATA ARCHITECTURE */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                        
                        {/* Student Directory Table */}
                        <section className={`transition-all duration-700 ${selectedStudent ? 'lg:col-span-7' : 'lg:col-span-12'}`}>
                            <div className="flex items-center justify-between mb-8 px-4">
                                <h2 className="text-2xl font-black font-manrope tracking-tighter">Student Directory</h2>
                                <div className="flex items-center gap-4">
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#737784] text-[18px]">search</span>
                                        <input type="text" placeholder="Filter by name..." className="bg-white border-none px-10 py-2.5 rounded-xl text-xs font-bold ring-1 ring-[#E0E3E5] focus:ring-2 focus:ring-[#00327D]/30 transition-all outline-none" />
                                    </div>
                                    <button className="material-symbols-outlined text-[#737784] hover:text-[#00327D] cursor-pointer">sort</button>
                                </div>
                            </div>

                            <div className="bg-white rounded-[3rem] shadow-[0px_12px_40px_rgba(0,0,0,0.02)] ring-1 ring-[#E0E3E5]/30 overflow-hidden">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-[#F2F4F6]/50">
                                            <th className="px-8 py-6 text-left text-[9px] font-black uppercase tracking-widest text-[#737784]">Learner Profile</th>
                                            <th className="px-8 py-6 text-left text-[9px] font-black uppercase tracking-widest text-[#737784]">Course Path</th>
                                            <th className="px-8 py-6 text-center text-[9px] font-black uppercase tracking-widest text-[#737784]">Mastery</th>
                                            <th className="px-8 py-6 text-right text-[9px] font-black uppercase tracking-widest text-[#737784]">Audit</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[#F2F4F6]">
                                        {students.map((student) => (
                                            <tr 
                                                key={student.id} 
                                                className={`group hover:bg-[#F2F4F6]/40 transition-all duration-300 cursor-pointer ${selectedStudent?.id === student.id ? 'bg-[#D3E4FE]/30' : ''}`}
                                                onClick={() => setSelectedStudent(student)}
                                            >
                                                <td className="px-8 py-8">
                                                    <div className="flex items-center gap-5">
                                                        <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-sm relative group-hover:scale-105 transition-transform">
                                                            <img src={(student.thumbnailUrl || student.img)} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all" alt="" />
                                                            {student.status === 'Attention Needed' && (
                                                                <div className="absolute top-0 right-0 w-3 h-3 bg-[#BA1A1A] rounded-full border-2 border-white ring-1 ring-[#BA1A1A]/20"></div>
                                                            )}
                                                        </div>
                                                        <div>
                                                            <p className="text-sm font-black text-[#191C1E]">{student.name}</p>
                                                            <p className="text-[10px] font-bold text-[#737784] uppercase tracking-widest mt-1">LAtest: {student.lastActive}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-8 py-8">
                                                    <span className="text-[11px] font-black uppercase tracking-widest text-[#434653] leading-tight block">{student.program}</span>
                                                </td>
                                                <td className="px-8 py-8">
                                                    <div className="flex flex-col items-center">
                                                        <span className={`text-[13px] font-black ${student.progress > 80 ? 'text-[#00327D]' : 'text-[#BA1A1A]'}`}>{student.grade}</span>
                                                        <div className="w-16 h-1 bg-[#F2F4F6] rounded-full mt-2 overflow-hidden">
                                                            <div className={`h-full rounded-full ${student.progress > 80 ? 'bg-[#00327D]' : 'bg-[#BA1A1A]'}`} style={{ width: `${student.progress}%` }}></div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-8 py-8 text-right">
                                                    <span className="material-symbols-outlined text-[#C3C6D5] group-hover:text-[#00327D] group-hover:translate-x-1 transition-all">chevron_right</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Student Performance Sidebar */}
                        {selectedStudent && (
                            <section className="lg:col-span-5 animate-fade-in-right sticky top-[120px]">
                                <div className="bg-white rounded-[3rem] p-10 shadow-[0px_32px_80px_rgba(25,28,30,0.08)] ring-1 ring-[#E0E3E5]/30">
                                    <div className="flex justify-between items-start mb-10">
                                        <div className="flex items-center gap-5">
                                            <div className="w-20 h-20 rounded-[2rem] overflow-hidden shadow-2xl">
                                                <img src={(selectedStudent.thumbnailUrl || selectedStudent.img)} className="w-full h-full object-cover" alt="" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-black font-manrope tracking-tighter">{selectedStudent.name}</h3>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <span className="w-2 h-2 rounded-full bg-[#57FAE9]"></span>
                                                    <p className="text-[10px] font-black uppercase tracking-widest text-[#737784]">{selectedStudent.program}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <button onClick={() => setSelectedStudent(null)} className="w-10 h-10 rounded-xl hover:bg-[#F2F4F6] transition-all flex items-center justify-center text-[#737784] cursor-pointer border-none bg-transparent">
                                            <span className="material-symbols-outlined">close</span>
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 mb-10">
                                        <a href={`mailto:${selectedStudent.email}`} className="bg-[#F2F4F6] py-4 rounded-2xl flex flex-col items-center justify-center gap-2 group hover:bg-[#D3E4FE] transition-all no-underline">
                                            <span className="material-symbols-outlined text-[#00327D] transition-transform group-hover:scale-110">alternate_email</span>
                                            <span className="text-[9px] font-black uppercase tracking-widest text-[#00327D]">Send Notice</span>
                                        </a>
                                        <button className="bg-[#191C1E] text-white py-4 rounded-2xl flex flex-col items-center justify-center gap-2 group hover:scale-[1.02] transition-all cursor-pointer border-none shadow-xl">
                                            <span className="material-symbols-outlined text-[#57FAE9] transition-transform group-hover:scale-110">forum</span>
                                            <span className="text-[9px] font-black uppercase tracking-widest text-white">Open Chat</span>
                                        </button>
                                    </div>

                                    <div className="space-y-8">
                                        <header className="flex justify-between items-center border-b border-[#F2F4F6] pb-4">
                                            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#737784]">Assessment Log</h4>
                                            <span className="text-[11px] font-black text-[#00327D]">{selectedStudent.assignments.length} Projects</span>
                                        </header>

                                        <div className="space-y-4">
                                            {selectedStudent.assignments.map((asgn: Assignment, i: number) => (
                                                <div key={i} className="p-6 bg-[#F7F9FB] rounded-3xl group hover:bg-white hover:shadow-lg transition-all ring-1 ring-[#E0E3E5]/10">
                                                    <div className="flex justify-between items-start mb-6">
                                                        <div>
                                                            <p className="text-xs font-black text-[#191C1E] mb-1">{asgn.title}</p>
                                                            <p className="text-[9px] font-bold text-[#737784] uppercase tracking-widest">{asgn.status}</p>
                                                        </div>
                                                        <div className="text-right">
                                                            <span className="text-xl font-black font-manrope">{asgn.score || '--'}</span>
                                                            <span className="text-[10px] font-bold text-[#C3C6D5] ml-1">/100</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <input type="number" placeholder="New" className="w-16 bg-white border-none px-3 py-2 rounded-lg text-xs font-bold ring-1 ring-[#E0E3E5] focus:ring-2 focus:ring-[#00327D]/20 outline-none" />
                                                        <button className="flex-1 bg-white text-[#00327D] py-2 rounded-lg text-[9px] font-black uppercase tracking-widest ring-1 ring-[#00327D]/20 hover:bg-[#00327D] hover:text-white transition-all border-none cursor-pointer">Grade Mastery</button>
                                                    </div>
                                                </div>
                                            ))}
                                            
                                            {selectedStudent.assignments.length === 0 && (
                                                <div className="py-12 flex flex-col items-center justify-center text-center opacity-30">
                                                    <span className="material-symbols-outlined text-4xl mb-2">empty_dashboard</span>
                                                    <p className="text-[10px] font-black uppercase tracking-widest">No activities detected</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <button className="w-full mt-12 py-5 bg-[#005049] text-white rounded-[2rem] font-black text-[10px] uppercase tracking-[0.2em] shadow-2xl shadow-[#005049]/20 hover:scale-[1.02] active:scale-95 transition-all border-none cursor-pointer">
                                        Generate Performance Audit
                                    </button>
                                </div>
                            </section>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default InstructorGradebookPage;
