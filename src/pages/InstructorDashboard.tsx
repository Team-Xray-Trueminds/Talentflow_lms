import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'
import { getTutorOverview } from '../lib/tutorApi'
import { useQuery } from '@tanstack/react-query'

export default function InstructorDashboard() {
  const token = localStorage.getItem('authToken') || ''

  const { data: overviewRes } = useQuery({
    queryKey: ['tutorOverview', token],
    queryFn: () => getTutorOverview(token)
  })

  const stats = overviewRes?.data?.stats || null
  const activities = overviewRes?.data?.activities || []
  const activeCourses = overviewRes?.data?.activeCourses || []
  const pendingReviews = overviewRes?.data?.pendingReviews || 0
  const pendingCourseName = overviewRes?.data?.pendingCourseName || ''

  const displayStats = [
    { label: 'Total Revenue', value: stats?.totalRevenue || '$0.00', icon: 'payments', trend: stats?.revenueTrend, color: '#005049' },
    { label: 'Total Students', value: stats?.totalStudents || 0, icon: 'group', trend: stats?.studentsTrend, color: '#00327D' },
    { label: 'Course Rating', value: stats?.courseRating || 0, icon: 'star', subtext: stats?.ratingSubtext, color: '#F2C94C' }
  ]

  return (
    <div className="flex bg-[#F7F9FB] min-h-screen">
      <Sidebar />
      <main className="grow p-10 max-w-[1600px] mx-auto w-full">
        {/* Top Nav */}
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-4 text-sm font-bold text-[#434653]">
            <span className="text-[#00419E]">Talent Flow</span>
            <span className="text-[#C3C6D5]">/</span>
            <span>Studio</span>
          </div>
          <div className="flex items-center gap-4">
             <div className="text-right">
                <p className="text-sm font-black text-[#191C1E]">Instructor Julian</p>
                <p className="text-[10px] font-bold text-[#434653] uppercase tracking-wider">Senior Instructor</p>
             </div>
             <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOob43RVwc0CW12KB2DOBUtlHf-ew8BT46J0LkWSlklYMWRvTXlfGxTj8f_hGk8DCjxYTFV0FYgMSdkIchWPU2n2hN7odES9Y79DF2NjAD-N8AdXIh5Jqwuyr3gqbeQ6gQO9lHGathfnZ8t7xnUX7qARnkKnypxwL4TgPHwGE30jrZpU1GLNKHnIrF5FFm7Q1ZpHlQVl4KPpTMjINcfIXSwtWpEM4tMy34N59zfkcEZQrDOxVXaSd1q8rnaMb9573149iRc69wJQw" alt="Avatar" className="w-full h-full object-cover" />
             </div>
          </div>
        </div>

        {/* Hero Welcome */}
        <div className="mb-12 animate-fade-in-up">
           <div className="flex justify-between items-end mb-4">
             <h1 className="text-4xl md:text-5xl font-extrabold text-[#191C1E] tracking-tight font-headline">
               Good morning, Instructor Julian
             </h1>
             <div className="text-right hidden md:block">
               <p className="text-[10px] font-black uppercase tracking-widest text-[#74777F]">Current Date</p>
               <p className="text-sm font-bold text-[#191C1E]">October 24, 2023</p>
             </div>
           </div>
           <p className="text-[#434653] text-lg font-medium leading-relaxed max-w-2xl">
              Here is what is happening with your courses today. Your education studio is showing <span className="text-[#00419E] font-black">strong momentum</span> this week.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {displayStats.map((stat, i) => (
                 <div key={i} className="bg-white p-8 rounded-3xl shadow-ambient animate-scale-in">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#74777F] mb-2">{stat.label}</p>
                    <h3 className="text-3xl font-black text-[#191C1E] font-headline mb-1">{stat.value}</h3>
                    {stat.trend && (
                      <p className="text-xs font-bold text-[#005049] flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">trending_up</span>
                        {stat.trend} this week
                      </p>
                    )}
                    {stat.subtext && (
                      <p className="text-xs font-medium text-[#74777F]">{stat.subtext}</p>
                    )}
                 </div>
               ))}
            </div>

            {pendingReviews > 0 && (
              <div className="bg-[#FFDAD6] border-2 border-[#BA1A1A]/10 p-8 rounded-[32px] flex flex-col md:flex-row gap-8 items-center animate-scale-in animate-stagger-1 shadow-sm">
                 <div className="w-16 h-16 bg-[#BA1A1A] rounded-2xl flex items-center justify-center text-white shrink-0">
                    <span className="material-symbols-outlined text-3xl">assignment_late</span>
                 </div>
                 <div className="grow">
                    <h4 className="text-xl font-black text-[#410002] font-headline mb-1">{pendingReviews} Pending Reviews</h4>
                    <p className="text-[#410002]/70 font-medium">Action required: Assignments from <span className="font-bold underline cursor-pointer">"{pendingCourseName}"</span> need feedback.</p>
                 </div>
                 <button className="px-8 py-4 bg-[#BA1A1A] text-white font-black rounded-xl hover:bg-[#93000A] transition-all whitespace-nowrap">
                    Start Reviewing
                 </button>
              </div>
            )}

            {/* Active Courses */}
            <div className="space-y-6">
               <h3 className="text-sm font-black text-[#74777F] uppercase tracking-[0.2em]">Active Courses</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   {activeCourses.length > 0 ? activeCourses.map((course, i) => (
                    <div key={i} className="bg-white p-6 rounded-[32px] shadow-ambient hover:shadow-xl transition-all group flex flex-col gap-6 relative overflow-hidden ring-1 ring-[#F2F4F6]">
                       <div className="flex items-center gap-6">
                          <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 shadow-sm">
                             <img src={course.img} alt="Course" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                          </div>
                          <div className="flex-1 min-w-0">
                             <p className="font-black text-[#191C1E] text-md mb-0.5 line-clamp-1 truncate">{course.title}</p>
                             <p className="text-[10px] text-[#74777F] font-black uppercase tracking-widest">{course.students} Learners Active</p>
                          </div>
                       </div>
                       
                       <div className="flex items-center justify-between pt-4 border-t border-[#F2F4F6]">
                          <div className="flex -space-x-3">
                             {[1, 2, 3].map((n) => (
                               <div key={n} className="w-8 h-8 rounded-full border-2 border-white bg-[#E0E3E5]"></div>
                             ))}
                          </div>
                          <div className="flex items-center gap-2">
                             <Link 
                                to="/learner/courses" 
                                className="w-10 h-10 rounded-xl bg-[#F2F4F6] flex items-center justify-center text-[#74777F] hover:bg-[#E0E3E5] hover:text-[#00327D] transition-all"
                                title="Preview Student View"
                             >
                                <span className="material-symbols-outlined text-[20px]">visibility</span>
                             </Link>
                             <Link 
                                to="/instructor/curriculum-builder" 
                                className="px-5 py-2.5 bg-[#00327D] text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#002864] hover:shadow-lg transition-all no-underline"
                             >
                                Edit
                             </Link>
                          </div>
                       </div>
                    </div>
                  )) : (
                    <div className="col-span-full text-center py-6 text-[#74777F] border-2 border-dashed border-[#F2F4F6] rounded-3xl">
                      No active courses managed.
                    </div>
                  )}
               </div>
            </div>
          </div>

          {/* Sidebar Stats/Activity (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            {/* Quick Actions */}
            <div className="bg-[#00327D] rounded-[40px] p-8 text-white shadow-xl animate-scale-in animate-stagger-2">
               <h3 className="text-xl font-black font-headline mb-6">Quick Actions</h3>
               <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'New Course', icon: 'add_circle', to: '/instructor/course-builder' },
                    { label: 'Live Stream', icon: 'videocam' },
                    { label: 'Analytics', icon: 'monitoring' },
                    { label: 'Broadcast', icon: 'podcasts' }
                  ].map((btn, i) => (
                    btn.to ? (
                      <Link key={i} to={btn.to} className="flex flex-col items-center justify-center p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition-all gap-2 border border-white/10">
                         <span className="material-symbols-outlined">{btn.icon}</span>
                         <span className="text-[10px] font-bold uppercase tracking-widest">{btn.label}</span>
                      </Link>
                    ) : (
                      <button key={i} className="flex flex-col items-center justify-center p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition-all gap-2 border border-white/10">
                         <span className="material-symbols-outlined">{btn.icon}</span>
                         <span className="text-[10px] font-bold uppercase tracking-widest">{btn.label}</span>
                      </button>
                    )
                  ))}
               </div>
            </div>

            {/* Learner Activity Feed */}
            <div className="bg-white rounded-[40px] p-8 shadow-ambient animate-scale-in animate-stagger-3">
               <h3 className="text-xl font-black text-[#191C1E] font-headline mb-8">Learner Activity</h3>
               <div className="space-y-8 relative">
                  <div className="absolute left-[20px] top-4 bottom-4 w-0.5 bg-[#F2F4F6]"></div>
                  {activities.length > 0 ? (
                    activities.map((act, i) => (
                      <div key={i} className="relative pl-12">
                         <div className="absolute left-0 top-0 w-10 h-10 rounded-xl bg-[#F2F4F6] flex items-center justify-center text-[#00327D]">
                            <span className="material-symbols-outlined text-[20px]">{act.icon}</span>
                         </div>
                         <div>
                            <p className="text-sm font-bold text-[#191C1E] leading-tight">
                               <span className="text-[#00419E]">{act.user}</span> {act.action}
                            </p>
                            <p className="text-[10px] text-[#74777F] font-bold uppercase tracking-wider mt-1">
                               {act.time} <span className="text-[#C3C6D5] mx-1">•</span> {act.course}
                            </p>
                            {act.attachment && (
                              <div className="mt-3 flex items-center gap-2 p-3 bg-[#F2F4F6] rounded-xl text-xs font-bold text-[#00327D] border border-[#00327D]/5">
                                 <span className="material-symbols-outlined text-[16px]">description</span>
                                 {act.attachment}
                              </div>
                            )}
                            {act.status && (
                              <div className={`mt-2 inline-block px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                                act.status === 'Pending Review' ? 'bg-[#FFDAD6] text-[#BA1A1A]' : 'bg-[#57FAE9]/20 text-[#005049]'
                              }`}>
                                 {act.status}
                              </div>
                            )}
                            {act.comment && (
                              <div className="mt-3 p-3 bg-[#F2F4F6] rounded-xl italic text-xs text-[#434653] font-medium leading-relaxed">
                                 {act.comment}
                              </div>
                            )}
                         </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-6 text-[#74777F]">
                       No recent learner activity.
                     </div>
                  )}
               </div>
               <button className="w-full mt-10 py-4 text-[#00419E] font-black text-xs uppercase tracking-[0.2em] border-2 border-[#D3E4FE] rounded-2xl hover:bg-[#D3E4FE] transition-all">
                  View Full Audit Log
               </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
