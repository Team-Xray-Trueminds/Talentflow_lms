import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'

export default function InstructorGradebookPage() {
  const [selectedStudent, setSelectedStudent] = useState<any>(null);

  const stats = [
    { label: 'Average Course Grade', value: '84.2%', icon: 'bar_chart' },
    { label: 'Completion Rate', value: '92%', icon: 'check_circle' }
  ]

  const students = [
    { id: 1, name: 'Alexandru Chen', program: 'B.Arch Year 2', email: 'alex@talentflow.edu', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCk5utjN07mkZOhvtLZIyLzTlvKn2L4iPZCxU2HE03HITuSyf687NvYeKy1N3BB3ni_PXK6x68sbgc75rNQ2L2yaSJm-G8klfuPjgpLJwHX36NoMakdz6P_Z2afHIAebaZV13Q7a3n9L2hbMhTqfjyw74ubS7f51FH_QDX66YnHaXq9NSQwc_7KrIjpQkDJ-Yp3aaAhNu-vnGsNf7SIO4uN_S4bTdHe0MSfe9aqNGnaSUESsnPKSC5Ebl9BWs9kMIL9tpe4Ug-K6OI', assignments: [
      { title: 'Modern UI Foundations', grade: 92, status: 'Graded' },
      { title: 'Project: Grid Systems', grade: null, status: 'Submitted' }
    ]},
    { id: 2, name: 'Elena Rodriguez', program: 'B.Arch Year 3', email: 'elena@talentflow.edu', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB06ZF4rJWSKN23zp2wWsqwcW2AAK2QkSoDP8VJd3XcOmygrHupDSMRzlmq1pV7oIZmyGUWmoHieax_B0EhzWAKlA3mVAirTYUI7btKWWdLkEFw7NS5SmkEjHY-urpnaWWOzby9uwXtVCfd0xjLeIluwlQol8d9sOChqyuzLcu8hwIJZKuYVi7WMjsB_7DuwjZ7MBOWgf9H2W7DOYgCqdKZeTdDRVZqyp5Ox8q3TvJ3ndRGc5lXidkY5yfCJZDARcfbOl7kxPydQ1M', assignments: [
      { title: 'Principles of Flow', grade: 88, status: 'Graded' },
      { title: 'Final Studio Exam', grade: 94, status: 'Graded' }
    ]},
    { id: 3, name: 'Jordan Smyth', program: 'B.Arch Year 2', email: 'jordan@talentflow.edu', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVxrI9I5n58GFjq4GFTGavFlXmZe1bnwXPHtwHXeUg1aK1lVc7QKPvWr4O3EaYIjo56Qyp-AehpphzpbwI3peCA6mH3SMiUQnPK5y_zNT1ZmR_FblJnP7oSIdV4oTn4k_dpA6R5o9EVH256JTlGMsvpDvLW7E2Kt-iJ4839-mW_cxwIDVedGKFpDZyRrVl92Y3swdRuk9oj5AeAYnCk74RmRPjXJAt7mbdlVteunFv_yurekYAEQqpvZMJ4eMQZz3sBVC1ru3TwM0', assignments: [
      { title: 'Modern UI Foundations', grade: 75, status: 'Graded' }
    ]},
    { id: 4, name: 'Maya Ishikawa', program: 'B.Arch Year 4', email: 'maya@talentflow.edu', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOob43RVwc0CW12KB2DOBUtlHf-ew8BT46J0LkWSlklYMWRvTXlfGxTj8f_hGk8DCjxYTFV0FYgMSdkIchWPU2n2hN7odES9Y79DF2NjAD-N8AdXIh5Jqwuyr3gqbeQ6gQO9lHGathfnZ8t7xnUX7qARnkKnypxwL4TgPHwGE30jrZpU1GLNKHnIrF5FFm7Q1ZpHlQVl4KPpTMjINcfIXSwtWpEM4tMy34N59zfkcEZQrDOxVXaSd1q8rnaMb9573149iRc69wJQw', assignments: [
      { title: 'Urban Scale Analysis', grade: 98, status: 'Graded' }
    ]}
  ]

  return (
    <div className="flex bg-[#F7F9FB] min-h-screen font-body text-[#191C1E]">
      <Sidebar />
      <main className="grow flex flex-col relative overflow-hidden">
        {/* Top bar */}
        <div className="px-10 py-6 flex justify-between items-center bg-[#F7F9FB] border-b border-[#C3C6D5]/10">
           <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-[#434653]">Instructor Portal</span>
              <span className="text-[#C3C6D5]">/</span>
              <span className="text-sm font-black text-[#00327D]">Gradebook</span>
           </div>
           <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="text-sm font-black text-[#191C1E]">Dr. Julian Vance</p>
                <p className="text-[10px] font-bold text-[#434653] uppercase tracking-wider">Lead Architect</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#E0E3E5] overflow-hidden border-2 border-white shadow-sm">
                 <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk5utjN07mkZOhvtLZIyLzTlvKn2L4iPZCxU2HE03HITuSyf687NvYeKy1N3BB3ni_PXK6x68sbgc75rNQ2L2yaSJm-G8klfuPjgpLJwHX36NoMakdz6P_Z2afHIAebaZV13Q7a3n9L2hbMhTqfjyw74ubS7f51FH_QDX66YnHaXq9NSQwc_7KrIjpQkDJ-Yp3aaAhNu-vnGsNf7SIO4uN_S4bTdHe0MSfe9aqNGnaSUESsnPKSC5Ebl9BWs9kMIL9tpe4Ug-K6OI" alt="" className="w-full h-full object-cover" />
              </div>
           </div>
        </div>

        {/* Content Area */}
        <div className="px-10 pb-20 max-w-[1400px] w-full mx-auto pt-10">
          <header className="mb-12">
            <h1 className="text-5xl font-black font-headline tracking-tighter text-[#191C1E]">Instructor Gradebook</h1>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {stats.map((stat, i) => (
              <div key={i} className="bg-[#F2F4F6] p-10 rounded-[48px] animate-fade-in-up shadow-sm" style={{ animationDelay: `${i * 0.1}s` }}>
                <p className="text-sm font-bold text-[#434653] mb-6 tracking-tight">{stat.label}</p>
                <h3 className="text-6xl font-black tracking-tighter text-[#191C1E]">{stat.value}</h3>
              </div>
            ))}

            <div className="bg-[#FFDAD6] p-10 rounded-[48px] animate-fade-in-up border border-[#BA1A1A]/10 shadow-sm" style={{ animationDelay: '0.2s' }}>
              <p className="text-sm font-bold text-[#410002] mb-6">Attention Required</p>
              <h3 className="text-3xl font-black text-[#410002] mb-3 leading-tight">2 Missing Submissions</h3>
              <p className="text-sm font-medium text-[#410002]/80 leading-relaxed">Structural Integrity II submissions are pending for 2 students.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Student Table */}
            <section className={`transition-all duration-500 ${selectedStudent ? 'lg:col-span-7' : 'lg:col-span-12'}`}>
              <div className="flex justify-between items-end mb-8 px-4">
                <h2 className="text-2xl font-black font-headline text-[#191C1E]">Student Directory</h2>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#74777F]">Showing {students.length} students</span>
              </div>
              
              <div className="bg-white rounded-[40px] p-4 shadow-ambient overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="text-left">
                      <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-[#74777F]">Student</th>
                      {!selectedStudent && <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-[#74777F]">Program</th>}
                      <th className="px-8 py-6 text-right text-[10px] font-black uppercase tracking-widest text-[#74777F]">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F2F4F6]">
                    {students.map((student, i) => (
                      <tr key={i} className={`group hover:bg-[#F7F9FB] transition-colors ${selectedStudent?.id === student.id ? 'bg-[#F2F4F6]' : ''}`}>
                        <td className="px-8 py-8">
                          <div className="flex items-center gap-5">
                            <img src={student.img} className="w-14 h-14 rounded-2xl object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 shadow-sm" alt="" />
                            <span className="text-lg font-black text-[#191C1E] tracking-tight">{student.name}</span>
                          </div>
                        </td>
                        {!selectedStudent && (
                          <td className="px-8 py-8">
                            <span className="text-lg font-medium text-[#434653]">{student.program}</span>
                          </td>
                        )}
                        <td className="px-8 py-8 text-right">
                          <button 
                            onClick={() => setSelectedStudent(student)}
                            className="text-xs font-black uppercase tracking-widest text-[#00327D] hover:underline px-6 py-3 rounded-xl border border-[#C3C6D5]/20 hover:bg-white transition-all shadow-sm"
                          >
                            Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Student Details Panel */}
            {selectedStudent && (
              <section className="lg:col-span-5 animate-fade-in-right">
                <div className="bg-white rounded-[40px] p-10 shadow-2xl border border-[#C3C6D5]/10 sticky top-10">
                   <div className="flex justify-between items-start mb-8">
                      <div className="flex items-center gap-4">
                         <img src={selectedStudent.img} className="w-20 h-20 rounded-[24px] object-cover shadow-lg" alt="" />
                         <div>
                            <h3 className="text-2xl font-black font-headline tracking-tighter">{selectedStudent.name}</h3>
                            <p className="text-sm font-bold text-[#74777F]">{selectedStudent.program}</p>
                         </div>
                      </div>
                      <button onClick={() => setSelectedStudent(null)} className="p-2 hover:bg-[#F2F4F6] rounded-xl">
                         <span className="material-symbols-outlined">close</span>
                      </button>
                   </div>

                   {/* Quick Actions */}
                   <div className="grid grid-cols-2 gap-4 mb-10">
                      <a href={`mailto:${selectedStudent.email}`} className="flex items-center justify-center gap-3 py-4 bg-[#F2F4F6] rounded-2xl hover:bg-[#D3E4FE] transition-all group">
                         <span className="material-symbols-outlined text-[#00327D] group-hover:scale-110">mail</span>
                         <span className="text-[10px] font-black uppercase tracking-widest text-[#00327D]">Email</span>
                      </a>
                      <Link to={`/instructor/messages?student=${encodeURIComponent(selectedStudent.name)}`} className="flex items-center justify-center gap-3 py-4 bg-[#00327D] text-white rounded-2xl hover:bg-[#00419E] transition-all group shadow-lg shadow-[#00327D]/20">
                         <span className="material-symbols-outlined text-white group-hover:scale-110">forum</span>
                         <span className="text-[10px] font-black uppercase tracking-widest">Message</span>
                      </Link>
                   </div>

                   {/* Assignments Grading */}
                   <div className="space-y-6 text-[#191C1E]">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#74777F]">Pending & Completed Assignments</h4>
                      <div className="space-y-4">
                        {selectedStudent.assignments.map((asgn: any, idx: number) => (
                          <div key={idx} className="p-6 bg-[#F7F9FB] rounded-[24px] border border-[#C3C6D5]/10 group hover:border-[#00327D]/20 transition-all">
                             <div className="flex justify-between items-start mb-4">
                                <span className="font-bold text-sm tracking-tight">{asgn.title}</span>
                                <span className={`text-[10px] font-black uppercase px-2 py-1 rounded-md ${asgn.status === 'Graded' ? 'bg-[#57FAE9]/20 text-[#005049]' : 'bg-[#FFDAD6] text-[#BA1A1A]'}`}>
                                   {asgn.status}
                                </span>
                             </div>
                             <div className="flex items-center gap-4">
                                <input 
                                  type="number" 
                                  placeholder="Score" 
                                  defaultValue={asgn.grade} 
                                  className="w-24 px-4 py-2 rounded-xl bg-white border border-[#C3C6D5]/30 text-sm font-bold focus:ring-2 focus:ring-[#00327D]/10 outline-hidden"
                                />
                                <button className="grow py-2.5 bg-white text-[#00327D] border border-[#00327D]/20 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#00327D] hover:text-white transition-all">
                                   Update Grade
                                </button>
                             </div>
                          </div>
                        ))}
                      </div>
                   </div>

                   <button className="w-full mt-10 py-5 bg-[#F2F4F6] text-[#434653] font-black text-xs uppercase tracking-[0.2em] border-2 border-dashed border-[#C3C6D5] rounded-3xl hover:bg-white hover:border-[#00327D]/30 transition-all">
                      View Full Performance Report
                   </button>
                </div>
              </section>
            )}
          </div>
        </div>

        {/* Mobile Nav */}
        <nav className="lg:hidden fixed bottom-6 left-6 right-6 bg-[#191C1E] text-white h-20 rounded-[24px] shadow-2xl flex items-center justify-around px-4 z-50">
          {[
            { icon: 'dashboard', label: 'Dashboard', to: '/instructor/dashboard' },
            { icon: 'architecture', label: 'Curriculum', to: '/instructor/courses' },
            { icon: 'school', label: 'Gradebook', to: '/instructor/gradebook', active: true },
            { icon: 'person', label: 'Profile', to: '/settings/instructor-setup' }
          ].map((nav, i) => (
            <Link key={i} to={nav.to} className={`flex flex-col items-center gap-1.5 transition-all ${nav.active ? 'text-[#57FAE9]' : 'text-white/40'}`}>
              <span className={`material-symbols-outlined text-[24px] ${nav.active ? 'fill-1' : ''}`}>{nav.icon}</span>
              <span className="text-[10px] font-black tracking-tight uppercase">{nav.label}</span>
            </Link>
          ))}
        </nav>
      </main>
    </div>
  )
}
