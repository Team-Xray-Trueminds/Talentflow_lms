import { useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import BottomNav from '../components/layout/BottomNav'
import { useAuth } from '../components/auth/AuthProvider'

export default function LearnerCoursesPage() {
  const { user } = useAuth()
  const displayName = user?.fullName || 'Learner'
  const displayNameUpper = displayName.toUpperCase()
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const tracks = [
    { title: 'UI Architecture', icon: 'architecture', count: '12 Courses' },
    { title: 'Frontend Engineering', icon: 'code', count: '8 Courses' },
    { title: 'Backend Systems', icon: 'dns', count: '6 Courses' },
    { title: 'Product Strategy', icon: 'insights', count: '10 Courses' },
    { title: 'Visual Logic', icon: 'monitoring', count: '5 Courses' },
    { title: 'System Design', icon: 'hub', count: '7 Courses' }
  ]

  const courses = [
    { title: 'Modern UI Design Principles', category: 'UI Architecture', level: 'Intermediate', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCk5utjN07mkZOhvtLZIyLzTlvKn2L4iPZCxU2HE03HITuSyf687NvYeKy1N3BB3ni_PXK6x68sbgc75rNQ2L2yaSJm-G8klfuPjgpLJwHX36NoMakdz6P_Z2afHIAebaZV13Q7a3n9L2hbMhTqfjyw74ubS7f51FH_QDX66YnHaXq9NSQwc_7KrIjpQkDJ-Yp3aaAhNu-vnGsNf7SIO4uN_S4bTdHe0MSfe9aqNGnaSUESsnPKSC5Ebl9BWs9kMIL9tpe4Ug-K6OI' },
    { title: 'Advanced React for Architects', category: 'Frontend Engineering', level: 'Advanced', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB06ZF4rJWSKN23zp2wWsqwcW2AAK2QkSoDP8VJd3XcOmygrHupDSMRzlmq1pV7oIZmyGUWmoHieax_B0EhzWAKlA3mVAirTYUI7btKWWdLkEFw7NS5SmkEjHY-urpnaWWOzby9uwXtVCfd0xjLeIluwlQol8d9sOChqyuzLcu8hwIJZKuYVi7WMjsB_7DuwjZ7MBOWgf9H2W7DOYgCqdKZeTdDRVZqyp5Ox8q3TvJ3ndRGc5lXidkY5yfCJZDARcfbOl7kxPydQ1M' },
    { title: 'Sustainable Urban Frameworks', category: 'System Design', level: 'Advanced', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVxrI9I5n58GFjq4GFTGavFlXmZe1bnwXPHtwHXeUg1aK1lVc7QKPvWr4O3EaYIjo56Qyp-AehpphzpbwI3peCA6mH3SMiUQnPK5y_zNT1ZmR_FblJnP7oSIdV4oTn4k_dpA6R5o9EVH256JTlGMsvpDvLW7E2Kt-iJ4839-mW_cxwIDVedGKFpDZyRrVl92Y3swdRuk9oj5AeAYnCk74RmRPjXJAt7mbdlVteunFv_yurekYAEQqpvZMJ4eMQZz3sBVC1ru3TwM0' },
    { title: 'Visualizing Large Data Sets', category: 'Visual Logic', level: 'Master', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOob43RVwc0CW12KB2DOBUtlHf-ew8BT46J0LkWSlklYMWRvTXlfGxTj8f_hGk8DCjxYTFV0FYgMSdkIchWPU2n2hN7odES9Y79DF2NjAD-N8AdXIh5Jqwuyr3gqbeQ6gQO9lHGathfnZ8t7xnUX7qARnkKnypxwL4TgPHwGE30jrZpU1GLNKHnIrF5FFm7Q1ZpHlQVl4KPpTMjINcfIXSwtWpEM4tMy34N59zfkcEZQrDOxVXaSd1q8rnaMb9573149iRc69wJQw' },
    { title: 'The Psychology of Space', category: 'UI Architecture', level: 'Foundational', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuSaxmsWaDeDfuFTFA6AOZfuiXWOiOZdbCDtc0TRm4vIvUnDcFYgxg-3GiykXQ6piGpupz92uli7GK-c88t_Bj236Eo0Jt4a3znXGpG2Abdywt_o3WxZdqHHQPHQcAQhhSSicLVV4oImwIvwoZMKi-0fUx9CbJsM4L2uLsI-eJ-r83k0tRbZ6kFQrc-HDWjTEkPsQUEG_jFBZK2FMzgroFpsZNaPaj4lKpHFBNQUodcY_ojab8pK4UaOyEVjPt82HwOmam6WsYV6E' },
    { title: 'TypeScript for Design Systems', category: 'Frontend Engineering', level: 'Advanced', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuSaxmsWaDeDfuFTFA6AOZfuiXWOiOZdbCDtc0TRm4vIvUnDcFYgxg-3GiykXQ6piGpupz92uli7GK-c88t_Bj236Eo0Jt4a3znXGpG2Abdywt_o3WxZdqHHQPHQcAQhhSSicLVV4oImwIvwoZMKi-0fUx9CbJsM4L2uLsI-eJ-r83k0tRbZ6kFQrc-HDWjTEkPsQUEG_jFBZK2FMzgroFpsZNaPaj4lKpHFBNQUodcY_ojab8pK4UaOyEVjPt82HwOmam6WsYV6E' }
  ]

  const filteredCourses = courses.filter(c => {
    const matchesTrack = selectedTrack ? c.category === selectedTrack : true
    const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesTrack && matchesSearch
  })

  return (
    <div className="flex bg-[#F7F9FB] min-h-screen font-body text-[#191C1E]">
      <Sidebar />
      <main className="grow flex flex-col">
        {/* Top bar Profile Summary (Link 8 High-Fidelity) */}
        <div className="px-4 py-6 sm:px-6 lg:px-8 xl:px-10 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center bg-[#F7F9FB]">
           <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-black uppercase tracking-widest text-[#74777F]">Curator Portal</span>
              <span className="w-1 h-1 bg-[#C3C6D5] rounded-full"></span>
              <span className="text-xs font-bold text-[#434653]">Manage your growth</span>
           </div>
           <div className="flex items-center justify-between gap-4 sm:justify-end sm:gap-6">
              <Link to="/learner/notifications" className="relative group p-2 hover:bg-white rounded-xl transition-all">
                <span className="material-symbols-outlined text-[#434653] group-hover:text-[#00419E]">notifications</span>
                <span className="absolute top-2 right-2 w-2 h-2 bg-[#BA1A1A] rounded-full border-2 border-[#F7F9FB]"></span>
              </Link>
              <div className="text-right">
                <p className="text-sm font-black text-[#191C1E]">{displayNameUpper}</p>
                <p className="text-[10px] font-bold text-[#434653] uppercase tracking-wider">Talent Flow Catalyst</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#E0E3E5] overflow-hidden border-2 border-white shadow-sm transition-transform hover:scale-105 cursor-pointer">
                 <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk5utjN07mkZOhvtLZIyLzTlvKn2L4iPZCxU2HE03HITuSyf687NvYeKy1N3BB3ni_PXK6x68sbgc75rNQ2L2yaSJm-G8klfuPjgpLJwHX36NoMakdz6P_Z2afHIAebaZV13Q7a3n9L2hbMhTqfjyw74ubS7f51FH_QDX66YnHaXq9NSQwc_7KrIjpQkDJ-Yp3aaAhNu-vnGsNf7SIO4uN_S4bTdHe0MSfe9aqNGnaSUESsnPKSC5Ebl9BWs9kMIL9tpe4Ug-K6OI" alt={`${displayName} avatar`} className="w-full h-full object-cover" />
              </div>
           </div>
        </div>

        {/* Content Area */}
        <div className="px-4 sm:px-6 lg:px-8 xl:px-10 pb-28 lg:pb-20 max-w-[1600px] w-full mx-auto">
          {/* Hero Section */}
          <div className="mb-16 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black leading-[1.1] tracking-[-0.03em] font-headline mb-6 text-[#191C1E]">
              Curated Wisdom for Modern Builders.
            </h1>
            <p className="text-lg font-medium text-[#434653] max-w-2xl leading-relaxed mb-10">
              A workspace designed for high-stakes career development and professional mastery in architecture and design.
            </p>
            <div className="relative max-w-2xl group animate-scale-in">
               <span className="absolute left-6 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#74777F] group-focus-within:text-[#00419E] transition-colors">search</span>
               <input 
                 type="text" 
                 placeholder="Search specific courses or methodologies..." 
                 className="w-full pl-14 sm:pl-16 pr-6 py-4 sm:py-5 lg:py-6 bg-white rounded-[20px] sm:rounded-[24px] shadow-ambient border-none outline-none focus:ring-2 focus:ring-[#00327D]/10 text-base sm:text-lg font-medium placeholder:text-[#C3C6D5] transition-all"
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
               />
               {searchQuery && (
                 <button 
                   onClick={() => setSearchQuery('')}
                   className="absolute right-6 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#74777F] hover:text-[#BA1A1A] transition-colors"
                 >
                   close
                 </button>
               )}
            </div>
          </div>

          {/* Choose Track Section */}
          <section className="mb-20 animate-fade-in-up animate-stagger-1">
             <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
               <h2 className="text-xs font-black uppercase tracking-[0.3em] text-[#00327D]">Choose your track</h2>
               {selectedTrack && (
                 <button onClick={() => setSelectedTrack(null)} className="text-[10px] font-black uppercase text-[#BA1A1A] hover:underline">Clear Filter</button>
               )}
             </div>
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
                {tracks.map((track, i) => (
                  <div 
                    key={i} 
                    onClick={() => setSelectedTrack(selectedTrack === track.title ? null : track.title)}
                    className={`p-6 rounded-[24px] transition-all group cursor-pointer text-center flex flex-col items-center border-2 ${
                      selectedTrack === track.title 
                        ? 'bg-white border-[#00327D] shadow-ambient' 
                        : 'bg-[#F2F4F6] border-transparent hover:bg-white hover:border-[#00327D]/20'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all ${
                      selectedTrack === track.title ? 'bg-[#00327D] text-white' : 'bg-white text-[#00327D] group-hover:scale-110'
                    }`}>
                      <span className="material-symbols-outlined text-[24px]">{track.icon}</span>
                    </div>
                    <p className="text-[10px] font-black text-[#191C1E] uppercase tracking-wider mb-1">{track.title}</p>
                    <p className="text-[8px] font-bold text-[#74777F] uppercase tracking-widest">{track.count}</p>
                  </div>
                ))}
             </div>
          </section>

          {/* Stats Bar (Talent Flow Style: Shift in color, no lines) */}
          <div className="bg-[#F2F4F6] rounded-[28px] md:rounded-[32px] p-6 sm:p-8 mb-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 animate-fade-in-up animate-stagger-1">
            {[
              { label: 'Active Learners', value: '1,280', icon: 'groups' },
              { label: 'Average Completion', value: '84%', icon: 'task_alt' },
              { label: 'New Modules', value: '12', icon: 'new_releases' }
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-5">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#00327D] shadow-sm">
                  <span className="material-symbols-outlined">{s.icon}</span>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[#74777F] mb-1">{s.label}</p>
                  <p className="text-3xl font-black">{s.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Courses Column */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 min-h-[600px]">
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course, i) => (
                  <div key={i} className="bg-white rounded-[28px] md:rounded-[40px] p-4 shadow-ambient hover:shadow-xl transition-all group animate-fade-in-up h-fit" style={{ animationDelay: `${i * 0.1}s` }}>
                    <div className="aspect-video rounded-[24px] md:rounded-[32px] overflow-hidden mb-6 md:mb-8 relative">
                      <img src={course.img} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute top-5 left-5">
                        <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-xl text-[10px] font-black uppercase tracking-widest text-[#00327D]">
                          {course.category}
                        </span>
                      </div>
                    </div>
                    <div className="px-3 sm:px-6 pb-3 sm:pb-6">
                      <p className="text-[10px] font-black text-[#00419E] uppercase tracking-[0.25em] mb-4">{course.level}</p>
                      <h3 className="text-xl font-bold font-headline mb-8 leading-tight line-clamp-2 h-14">
                        {course.title}
                      </h3>
                      <div className="flex justify-between items-center pt-6 border-t border-[#C3C6D5]/10">
                        <div className="flex -space-x-2">
                          {[1, 2, 3].map((num) => (
                            <div key={num} className="w-8 h-8 rounded-full border-2 border-white bg-[#D3E4FE]"></div>
                          ))}
                        </div>
                        <Link 
                          to={`/learner/course-preview/${i + 1}`}
                          className="flex items-center gap-2 text-sm font-black text-[#00327D] group no-underline"
                        >
                          Explore Course
                          <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full flex flex-col items-center justify-center bg-[#F2F4F6] rounded-[48px] p-20 animate-scale-in">
                   <span className="material-symbols-outlined text-6xl text-[#C3C6D5] mb-6">search_off</span>
                   <p className="text-xl font-bold text-[#434653]">No courses found for this track</p>
                   <button onClick={() => setSelectedTrack(null)} className="mt-4 text-[#00327D] font-black uppercase text-xs tracking-widest hover:underline">View All Programs</button>
                </div>
              )}
            </div>

            {/* Elite Sidebar Column */}
            <div className="lg:col-span-4">
              <div className="sticky top-6 lg:top-10 bg-linear-to-br from-[#00327D] to-[#2559BD] p-6 sm:p-8 lg:p-12 rounded-[32px] md:rounded-[48px] text-white shadow-2xl overflow-hidden group">
                <div className="relative z-10 flex flex-col h-full min-h-[500px]">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-[20px] flex items-center justify-center mb-10">
                    <span className="material-symbols-outlined text-3xl">workspace_premium</span>
                  </div>
                  <h2 className="text-3xl font-black font-headline mb-6 leading-[1.1]">Elite Mentorship Program 2024</h2>
                  <p className="text-white/80 text-lg leading-relaxed mb-12">
                    An exclusive 6-month journey with top architectural leads from Silicon Valley. Limited seats available for Q3 cohorts.
                  </p>
                  <div className="mt-auto">
                    <button className="w-full py-5 bg-white text-[#00327D] font-black rounded-2xl hover:bg-[#F2F4F6] hover:scale-[1.02] active:scale-95 transition-all shadow-xl">
                      Apply for Access
                    </button>
                    <p className="text-center mt-6 text-[10px] font-bold text-white/50 uppercase tracking-widest">Enrollment ends in 14 days</p>
                  </div>
                </div>
                {/* Decorative textures as per "Talent Flow" spec */}
                <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-[2000ms]"></div>
                <div className="absolute top-[-10%] left-[-10%] w-48 h-48 bg-white/5 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-[1500ms]"></div>
              </div>
            </div>
          </div>
        </div>

        <BottomNav />
      </main>
    </div>
  )
}
