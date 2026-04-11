import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import BottomNav from '../components/layout/BottomNav'
import { useAuth } from '../components/auth/AuthProvider'

const progressFlow = {
  title: 'Progress Page',
  action: 'View % completion per course and overall',
  system: 'Aggregate progress data',
  destination: '— or Certificate',
}

export default function MyLearningPage() {
  const { user } = useAuth()
  const displayName = user?.fullName || 'Learner'
  const displayNameUpper = displayName.toUpperCase()
  const activeCourses = [
    { 
      title: 'Modern UI Design Principles', 
      category: 'UI Architecture', 
      progress: 45, 
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCk5utjN07mkZOhvtLZIyLzTlvKn2L4iPZCxU2HE03HITuSyf687NvYeKy1N3BB3ni_PXK6x68sbgc75rNQ2L2yaSJm-G8klfuPjgpLJwHX36NoMakdz6P_Z2afHIAebaZV13Q7a3n9L2hbMhTqfjyw74ubS7f51FH_QDX66YnHaXq9NSQwc_7KrIjpQkDJ-Yp3aaAhNu-vnGsNf7SIO4uN_S4bTdHe0MSfe9aqNGnaSUESsnPKSC5Ebl9BWs9kMIL9tpe4Ug-K6OI',
      nextModule: 'Hierarchy and Tonal Depth'
    },
    { 
      title: 'Sustainable Urban Frameworks', 
      category: 'System Design', 
      progress: 12, 
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVxrI9I5n58GFjq4GFTGavFlXmZe1bnwXPHtwHXeUg1aK1lVc7QKPvWr4O3EaYIjo56Qyp-AehpphzpbwI3peCA6mH3SMiUQnPK5y_zNT1ZmR_FblJnP7oSIdV4oTn4k_dpA6R5o9EVH256JTlGMsvpDvLW7E2Kt-iJ4839-mW_cxwIDVedGKFpDZyRrVl92Y3swdRuk9oj5AeAYnCk74RmRPjXJAt7mbdlVteunFv_yurekYAEQqpvZMJ4eMQZz3sBVC1ru3TwM0',
      nextModule: 'Grid Systems in Motion'
    }
  ]

  const completedCourses = [
    { 
      title: 'Visual Logic: Fundamentals', 
      category: 'Visual Logic', 
      score: '94%', 
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOob43RVwc0CW12KB2DOBUtlHf-ew8BT46J0LkWSlklYMWRvTXlfGxTj8f_hGk8DCjxYTFV0FYgMSdkIchWPU2n2hN7odES9Y79DF2NjAD-N8AdXIh5Jqwuyr3gqbeQ6gQO9lHGathfnZ8t7xnUX7qARnkKnypxwL4TgPHwGE30jrZpU1GLNKHnIrF5FFm7Q1ZpHlQVl4KPpTMjINcfIXSwtWpEM4tMy34N59zfkcEZQrDOxVXaSd1q8rnaMb9573149iRc69wJQw',
      date: 'Oct 12'
    }
  ]

  return (
    <div className="flex bg-[#F7F9FB] min-h-screen font-body text-[#191C1E]">
      <Sidebar />
      <main className="grow flex flex-col pb-24 lg:pb-8">
        {/* Top bar */}
        <div className="bg-[#F7F9FB] px-4 pt-20 pb-6 sm:px-6 lg:px-10 lg:py-8">
           <div className="mb-6 flex items-center justify-end rounded-[28px] border border-white/70 bg-white/90 px-4 py-4 shadow-[0_18px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:hidden">
              <div className="flex items-center gap-3">
                <Link to="/learner/notifications" className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[#E6ECF7] bg-white text-[#0D2240] shadow-sm transition-all hover:border-[#00327D]/20 hover:text-[#00327D]">
                  <span className="material-symbols-outlined text-[20px]">notifications</span>
                </Link>
              </div>
           </div>
           <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
           <div className="hidden sm:flex items-center gap-3">
              <span className="text-xs font-black uppercase tracking-widest text-[#74777F]">Curator Portal</span>
              <span className="w-1 h-1 bg-[#C3C6D5] rounded-full"></span>
              <span className="text-xs font-bold text-[#434653]">My Learning</span>
           </div>
           <div className="hidden sm:flex items-center gap-6">
              <Link to="/learner/notifications" className="relative group p-2 hover:bg-white rounded-xl transition-all">
                <span className="material-symbols-outlined text-[#434653] group-hover:text-[#00419E]">notifications</span>
                <span className="absolute top-2 right-2 w-2 h-2 bg-[#BA1A1A] rounded-full border-2 border-[#F7F9FB]"></span>
              </Link>
              <div className="text-right">
                <p className="text-sm font-black text-[#191C1E]">{displayNameUpper}</p>
                <p className="text-[10px] font-bold text-[#434653] uppercase tracking-wider">Talent Flow Catalyst</p>
              </div>
           </div>
           </div>
        </div>

        {/* Content Area */}
        <div className="w-full max-w-[1200px] mx-auto px-4 pb-20 sm:px-6 lg:px-10">
          <header className="mb-12 animate-fade-in-up">
            <h1 className="mb-4 text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-[#191C1E] font-headline sm:text-4xl">
              My Learning Journey
            </h1>
            <p className="text-[#434653] font-medium">Continue your architectual mastery. Consistency is the key to depth.</p>
          </header>

          <div className="space-y-16">
            <section className="animate-fade-in-up">
              <div className="rounded-[32px] bg-white px-4 py-6 sm:px-6 lg:p-8 shadow-ambient">
                <div>
                  <div>
                    <h2 className="text-2xl font-black tracking-tight text-[#191C1E]">
                      {progressFlow.title}
                    </h2>
                    <div className="mt-5 grid gap-4 md:grid-cols-3">
                      <div className="rounded-[20px] bg-[#F7F9FB] p-4">
                        <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#64748B]">User Action</p>
                        <p className="mt-2 text-sm font-bold text-[#191C1E]">{progressFlow.action}</p>
                      </div>
                      <div className="rounded-[20px] bg-[#F7F9FB] p-4">
                        <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#64748B]">System Response</p>
                        <p className="mt-2 text-sm font-bold text-[#191C1E]">{progressFlow.system}</p>
                      </div>
                      <div className="rounded-[20px] bg-[#F7F9FB] p-4">
                        <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#64748B]">Destination</p>
                        <p className="mt-2 text-sm font-bold text-[#00327D]">{progressFlow.destination}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Active Section */}
            <section className="animate-fade-in-up animate-stagger-1">
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#00327D] mb-8 flex items-center gap-2">
                Active Programs
                <span className="w-1.5 h-1.5 bg-[#57FAE9] rounded-full animate-pulse"></span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {activeCourses.map((course, i) => (
                  <div key={i} className="bg-white rounded-[40px] p-6 shadow-ambient flex flex-col group transition-all hover:scale-[1.01]">
                    <div className="flex gap-6 mb-8">
                      <div className="w-32 h-32 rounded-3xl overflow-hidden shrink-0">
                        <img src={((course as any).thumbnailUrl || course.img)} alt={course.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="grow">
                        <p className="text-[10px] font-black text-[#00419E] uppercase tracking-widest mb-1">{course.category}</p>
                        <h3 className="text-lg font-bold leading-tight mb-4 group-hover:text-[#00419E] transition-colors">{course.title}</h3>
                        <p className="text-[10px] font-bold text-[#74777F] uppercase tracking-wider italic">Next: {course.nextModule}</p>
                      </div>
                    </div>
                    <div className="mt-auto space-y-4">
                      <div className="flex justify-between items-end mb-1">
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#74777F]">Sync Progress</span>
                        <span className="text-sm font-black text-[#00327D]">{course.progress}%</span>
                      </div>
                      <div className="h-2 w-full bg-[#F2F4F6] rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-linear-to-r from-[#00327D] to-[#2559BD] transition-all duration-1000" 
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                      <Link 
                        to={`/learner/course-player/${i + 101}`}
                        className="w-full py-4 mt-2 bg-linear-to-r from-[#00327D] to-[#2559BD] text-white font-black rounded-2xl shadow-lg shadow-[#00327D]/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center no-underline"
                      >
                        Resume Session
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Completed Section */}
            <section className="animate-fade-in-up animate-stagger-2">
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#74777F] mb-8">Archived Mastery</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {completedCourses.map((course, i) => (
                  <div key={i} className="bg-white/60 border border-[#C3C6D5]/20 rounded-[32px] p-5 flex flex-col group hover:bg-white transition-all">
                    <div className="aspect-square rounded-2xl overflow-hidden mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                      <img src={((course as any).thumbnailUrl || course.img)} alt={course.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                    </div>
                    <h3 className="font-bold text-[#191C1E] line-clamp-1 mb-2">{course.title}</h3>
                    <div className="flex justify-between items-center mt-auto pt-4 border-t border-[#C3C6D5]/10">
                      <span className="text-[10px] font-black uppercase text-[#005049] bg-[#57FAE9]/20 px-2 py-1 rounded-md">{course.score} Score</span>
                      <Link 
                        to={`/certificate/${course.title.toLowerCase().replace(/\s+/g, '-')}`} 
                        className="text-[10px] font-black uppercase text-[#00327D] hover:underline"
                      >
                        View Certificate
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        <BottomNav />
      </main>
    </div>
  )
}
