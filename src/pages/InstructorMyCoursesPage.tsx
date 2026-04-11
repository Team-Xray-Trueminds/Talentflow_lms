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
      <main className="grow flex flex-col pb-24 lg:pb-8">
        {/* Header Section */}
        <div className="px-4 sm:px-6 lg:px-10 py-8 flex justify-between items-center bg-[#F7F9FB]">
           <div className="flex items-center gap-3">
              <span className="text-xs font-black uppercase tracking-widest text-[#74777F]">Instructor Suite</span>
              <span className="w-1 h-1 bg-[#C3C6D5] rounded-full"></span>
              <span className="text-xs font-bold text-[#434653]">Course Management</span>
           </div>
           <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 px-5 py-2.5 bg-[#00327D] text-white rounded-xl text-sm font-black transition-all hover:shadow-lg hover:scale-[1.02]">
                <span className="material-symbols-outlined text-[20px]">add</span>
                Create New Course
              </button>
              <div className="flex items-center gap-4 border-l border-[#C3C6D5]/30 pl-6">
                <div className="text-right">
                  <p className="text-sm font-black text-[#191C1E]">Julian Casablancas</p>
                  <p className="text-[10px] font-bold text-[#434653] uppercase tracking-wider">Lead Instructor</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#E0E3E5] overflow-hidden border-2 border-white shadow-sm transition-transform hover:scale-105 cursor-pointer">
                   <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk5utjN07mkZOhvtLZIyLzTlvKn2L4iPZCxU2HE03HITuSyf687NvYeKy1N3BB3ni_PXK6x68sbgc75rNQ2L2yaSJm-G8klfuPjgpLJwHX36NoMakdz6P_Z2afHIAebaZV13Q7a3n9L2hbMhTqfjyw74ubS7f51FH_QDX66YnHaXq9NSQwc_7KrIjpQkDJ-Yp3aaAhNu-vnGsNf7SIO4uN_S4bTdHe0MSfe9aqNGnaSUESsnPKSC5Ebl9BWs9kMIL9tpe4Ug-K6OI" alt="Instructor" className="w-full h-full object-cover" />
                </div>
              </div>
           </div>
        </div>

        {/* Content Area */}
        <div className="px-4 sm:px-6 lg:px-10 pb-20 max-w-[1600px] w-full mx-auto">
          <div className="mb-16 animate-fade-in-up">
            <h1 className="text-[3.5rem] font-black leading-[1.1] tracking-[-0.03em] font-headline mb-6 text-[#191C1E]">
              My Courses
            </h1>
            <p className="text-lg font-medium text-[#434653] max-w-2xl leading-relaxed">
              Overview and management of your active teaching curriculum and student performance metrics.
            </p>
          </div>

          {/* Instructor Specific Stats */}
          <div className="bg-white rounded-[40px] px-4 py-6 sm:px-6 lg:p-10 mb-16 shadow-ambient flex flex-wrap gap-20 animate-fade-in-up animate-stagger-1">
            {[
              { label: 'Total Enrollment', value: '420', trend: '+12%', icon: 'groups' },
              { label: 'Avg Rating', value: '4.9', trend: 'STABLE', icon: 'star' },
              { label: 'Submissions', value: '34', trend: 'ACTIVE', icon: 'assignment_turned_in' }
            ].map((s, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[#74777F]">
                  <span className="material-symbols-outlined text-[18px]">{s.icon}</span>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em]">{s.label}</p>
                </div>
                <div className="flex items-baseline gap-3">
                  <p className="text-2xl sm:text-3xl md:text-4xl font-black text-[#191C1E]">{s.value}</p>
                  <span className="text-[10px] font-black text-[#005750] bg-[#57FAE9]/30 px-2 py-0.5 rounded-full uppercase">{s.trend}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Managed Courses List */}
          <div className="grid grid-cols-1 gap-8">
            {myCourses.map((course, i) => (
              <div key={i} className="bg-white rounded-[40px] px-4 py-6 sm:px-6 lg:p-8 shadow-ambient hover:shadow-xl transition-all border border-transparent hover:border-[#00327D]/5 group animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                 <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-stretch lg:items-center">
                    <div className="w-full h-48 lg:w-56 lg:h-40 rounded-[28px] overflow-hidden shrink-0 shadow-sm">
                      <img src={((course as any).thumbnailUrl || course.img)} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="grow">
                      <div className="flex flex-col sm:flex-row justify-between items-start mb-4 sm:mb-6 gap-3 sm:gap-0">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                             <span className="text-[10px] font-black text-[#00419E] uppercase tracking-[0.25em]">{course.level}</span>
                             <span className="w-1 h-1 bg-[#C3C6D5] rounded-full"></span>
                             <span className="text-[10px] font-bold text-[#74777F] uppercase tracking-widest">Q4 2024</span>
                          </div>
                          <h3 className="text-xl md:text-2xl lg:text-3xl font-black font-headline leading-tight tracking-tight text-[#191C1E]">{course.title}</h3>
                        </div>
                        <span className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm ${course.status === 'Active' ? 'bg-[#57FAE9]/30 text-[#003E38]' : 'bg-[#F2F4F6] text-[#434653]'}`}>
                          {course.status}
                        </span>
                      </div>
                      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 xl:gap-0">
                         <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-12">
                            <div className="flex flex-col gap-1">
                               <span className="text-[9px] font-black text-[#74777F] uppercase tracking-widest">Enrollment</span>
                               <div className="flex items-center gap-2">
                                  <span className="material-symbols-outlined text-[18px] text-[#00327D]">groups</span>
                                  <span className="text-base font-black text-[#191C1E]">{course.students} Learners</span>
                               </div>
                            </div>
                            <div className="flex flex-col gap-1">
                               <span className="text-[9px] font-black text-[#74777F] uppercase tracking-widest">Performance</span>
                               <div className="flex items-center gap-2">
                                  <span className="material-symbols-outlined text-[18px] text-[#005750]">analytics</span>
                                  <span className="text-base font-black text-[#005750]">92% Activity</span>
                               </div>
                            </div>
                         </div>
                         
                         <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                            <Link 
                               to="/learner/courses" 
                               className="flex items-center justify-center gap-2 px-6 py-4 bg-[#F2F4F6] text-[#191C1E] font-black rounded-2xl hover:bg-[#E0E3E5] transition-all text-xs uppercase tracking-widest no-underline"
                            >
                               <span className="material-symbols-outlined text-[20px]">visibility</span>
                               Preview
                            </Link>
                            <Link 
                               to="/instructor/curriculum-builder" 
                               className="flex items-center justify-center gap-2 px-8 py-4 bg-[#00327D] text-white font-black rounded-2xl hover:bg-[#002864] hover:shadow-xl hover:translate-y-[-2px] transition-all text-xs uppercase tracking-widest no-underline"
                            >
                               <span className="material-symbols-outlined text-[20px]">edit</span>
                               Edit Course
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
