import BottomNav from '../components/layout/BottomNav';
import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

export default function InstructorMyCoursesPage() {
  const myCourses = [
    { title: 'Advanced UI Architecture Patterns', students: '124', level: 'Advanced', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCk5utjN07mkZOhvtLZIyLzTlvKn2L4iPZCxU2HE03HITuSyf687NvYeKy1N3BB3ni_PXK6x68sbgc75rNQ2L2yaSJm-G8klfuPjgpLJwHX36NoMakdz6P_Z2afHIAebaZV13Q7a3n9L2hbMhTqfjyw74ubS7f51FH_QDX66YnHaXq9NSQwc_7KrIjpQkDJ-Yp3aaAhNu-vnGsNf7SIO4uN_S4bTdHe0MSfe9aqNGnaSUESsnPKSC5Ebl9BWs9kMIL9tpe4Ug-K6OI', status: 'Active' },
    { title: 'Tonal Logic & Visual Perception', students: '86', level: 'Intermediate', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVxrI9I5n58GFjq4GFTGavFlXmZe1bnwXPHtwHXeUg1aK1lVc7QKPvWr4O3EaYIjo56Qyp-AehpphzpbwI3peCA6mH3SMiUQnPK5y_zNT1ZmR_FblJnP7oSIdV4oTn4k_dpA6R5o9EVH256JTlGMsvpDvLW7E2Kt-iJ4839-mW_cxwIDVedGKFpDZyRrVl92Y3swdRuk9oj5AeAYnCk74RmRPjXJAt7mbdlVteunFv_yurekYAEQqpvZMJ4eMQZz3sBVC1ru3TwM0', status: 'Paused' },
    { title: 'Systematic Scaffolding for Enterprise', students: '210', level: 'Foundational', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOob43RVwc0CW12KB2DOBUtlHf-ew8BT46J0LkWSlklYMWRvTXlfGxTj8f_hGk8DCjxYTFV0FYgMSdkIchWPU2n2hN7odES9Y79DF2NjAD-N8AdXIh5Jqwuyr3gqbeQ6gQO9lHGathfnZ8t7xnUX7qARnkKnypxwL4TgPHwGE30jrZpU1GLNKHnIrF5FFm7Q1ZpHlQVl4KPpTMjINcfIXSwtWpEM4tMy34N59zfkcEZQrDOxVXaSd1q8rnaMb9573149iRc69wJQw', status: 'Active' }
  ]

  return (
    <div className="flex bg-[#F7F9FB] min-h-screen font-body text-[#191C1E]">
      <Sidebar />
      <main className="grow flex flex-col pb-24 lg:pb-8 pt-16 xl:pt-0">
        {/* Header Section */}
        <div className="px-4 sm:px-6 lg:px-10 py-6 mb-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 sm:gap-0">
           <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#74777F]">Instructor Suite</span>
              <span className="w-1 h-1 bg-[#C3C6D5] rounded-full"></span>
              <span className="text-[10px] sm:text-xs font-bold text-[#434653]">Course Management</span>
           </div>
           <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6 w-full sm:w-auto">
              <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 bg-[#00327D] text-white rounded-xl text-[11px] sm:text-sm font-black transition-all hover:shadow-lg hover:scale-[1.02]">
                <span className="material-symbols-outlined text-[18px] sm:text-[20px]">add</span>
                Create Course
              </button>
              <div className="flex items-center gap-3 sm:gap-4 border-l border-[#C3C6D5]/30 pl-4 sm:pl-6">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-black text-[#191C1E]">Julian Casablancas</p>
                  <p className="text-[10px] font-bold text-[#434653] uppercase tracking-wider">Lead Instructor</p>
                </div>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#E0E3E5] overflow-hidden border-2 border-white shadow-sm transition-transform hover:scale-105 cursor-pointer shrink-0">
                   <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk5utjN07mkZOhvtLZIyLzTlvKn2L4iPZCxU2HE03HITuSyf687NvYeKy1N3BB3ni_PXK6x68sbgc75rNQ2L2yaSJm-G8klfuPjgpLJwHX36NoMakdz6P_Z2afHIAebaZV13Q7a3n9L2hbMhTqfjyw74ubS7f51FH_QDX66YnHaXq9NSQwc_7KrIjpQkDJ-Yp3aaAhNu-vnGsNf7SIO4uN_S4bTdHe0MSfe9aqNGnaSUESsnPKSC5Ebl9BWs9kMIL9tpe4Ug-K6OI" alt="Instructor" className="w-full h-full object-cover" />
                </div>
              </div>
           </div>
        </div>

        {/* Content Area */}
        <div className="px-4 sm:px-6 lg:px-10 pb-20 max-w-[1600px] w-full mx-auto">
          <div className="mb-10 sm:mb-16 animate-fade-in-up">
            <h1 className="text-[2.5rem] sm:text-[3.5rem] font-black leading-[1.1] tracking-[-0.03em] font-headline mb-4 sm:mb-6 text-[#191C1E]">
              My Courses
            </h1>
            <p className="text-base sm:text-lg font-medium text-[#434653] max-w-2xl leading-relaxed">
              Overview and management of your active teaching curriculum and student performance metrics.
            </p>
          </div>

          {/* Instructor Specific Stats */}
          <div className="bg-white rounded-[32px] sm:rounded-[40px] px-6 sm:px-8 py-8 sm:py-10 mb-10 sm:mb-16 shadow-ambient grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 animate-fade-in-up animate-stagger-1 w-full">
            {[
              { label: 'Total Enrollment', value: '420', trend: '+12%', icon: 'groups' },
              { label: 'Avg Rating', value: '4.9', trend: 'STABLE', icon: 'star' },
              { label: 'Submissions', value: '34', trend: 'ACTIVE', icon: 'assignment_turned_in' }
            ].map((s, i) => (
              <div key={i} className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-[#74777F]">
                  <span className="material-symbols-outlined text-[16px] sm:text-[18px]">{s.icon}</span>
                  <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em]">{s.label}</p>
                </div>
                <div className="flex items-baseline gap-3">
                  <p className="text-3xl sm:text-4xl font-black text-[#191C1E]">{s.value}</p>
                  <span className="text-[9px] sm:text-[10px] font-black text-[#005750] bg-[#57FAE9]/30 px-2 py-0.5 rounded-full uppercase">{s.trend}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Managed Courses List */}
          <div className="space-y-6 sm:space-y-8">
            {myCourses.map((course, i) => (
              <div key={i} className="bg-white rounded-[32px] sm:rounded-[40px] px-5 sm:px-8 py-6 sm:py-8 shadow-ambient hover:shadow-xl transition-all border border-transparent hover:border-[#00327D]/5 group animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                 <div className="flex flex-col xl:flex-row gap-6 xl:gap-10 items-stretch xl:items-center">
                    <div className="w-full h-48 sm:h-64 xl:w-64 xl:h-48 rounded-[24px] overflow-hidden shrink-0 shadow-sm">
                      <img src={((course as any).thumbnailUrl || course.img)} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="grow flex flex-col justify-between">
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6 gap-4 lg:gap-0">
                        <div>
                          <div className="flex items-center gap-3 mb-3">
                             <span className="text-[9px] sm:text-[10px] font-black text-[#00419E] uppercase tracking-[0.25em]">{course.level}</span>
                             <span className="w-1 h-1 bg-[#C3C6D5] rounded-full"></span>
                             <span className="text-[9px] sm:text-[10px] font-bold text-[#74777F] uppercase tracking-widest">Q4 2024</span>
                          </div>
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-black font-headline leading-tight tracking-tight text-[#191C1E] max-w-2xl">{course.title}</h3>
                        </div>
                        <span className={`self-start px-4 sm:px-5 py-2 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-widest shadow-sm border border-transparent ${course.status === 'Active' ? 'bg-[#57FAE9]/20 text-[#003E38] border-[#57FAE9]/40' : 'bg-[#F2F4F6] text-[#434653]'}`}>
                          {course.status}
                        </span>
                      </div>
                      
                      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-0 mt-2 sm:mt-auto border-t lg:border-none border-[#E0E3E5]/40 pt-6 lg:pt-0">
                         <div className="flex items-center gap-8 sm:gap-12 w-full lg:w-auto">
                            <div className="flex flex-col gap-1.5 flex-1 lg:flex-none">
                               <span className="text-[9px] font-black text-[#74777F] uppercase tracking-widest">Enrollment</span>
                               <div className="flex items-center gap-2">
                                  <span className="material-symbols-outlined text-[16px] sm:text-[18px] text-[#00327D]">groups</span>
                                  <span className="text-sm sm:text-base font-black text-[#191C1E]">{course.students} Learners</span>
                               </div>
                            </div>
                            <div className="flex flex-col gap-1.5 flex-1 lg:flex-none">
                               <span className="text-[9px] font-black text-[#74777F] uppercase tracking-widest">Performance</span>
                               <div className="flex items-center gap-2">
                                  <span className="material-symbols-outlined text-[16px] sm:text-[18px] text-[#005750]">analytics</span>
                                  <span className="text-sm sm:text-base font-black text-[#005750]">92% Activity</span>
                               </div>
                            </div>
                         </div>
                         
                         <div className="flex items-center gap-3 w-full lg:w-auto">
                            <Link 
                               to="/learner/courses" 
                               className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-4 bg-[#F2F4F6] text-[#191C1E] font-black rounded-xl sm:rounded-2xl hover:bg-[#E0E3E5] transition-all text-[10px] sm:text-xs uppercase tracking-widest no-underline border-none"
                            >
                               <span className="material-symbols-outlined text-[18px] sm:text-[20px]">visibility</span>
                               Preview
                            </Link>
                            <Link 
                               to="/instructor/curriculum-builder" 
                               className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-4 sm:px-8 py-3 sm:py-4 bg-[#00327D] text-white font-black rounded-xl sm:rounded-2xl hover:bg-[#002864] hover:shadow-xl hover:translate-y-[-2px] transition-all text-[10px] sm:text-xs uppercase tracking-widest no-underline border-none"
                            >
                               <span className="material-symbols-outlined text-[18px] sm:text-[20px]">edit</span>
                               Edit
                            </Link>
                         </div>
                      </div>
                    </div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  )
}
