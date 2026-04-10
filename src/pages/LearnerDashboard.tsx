import Sidebar from '../components/Sidebar'
import BottomNav from '../components/layout/BottomNav'
import { Link } from 'react-router-dom'
import { useAuth } from '../components/auth/AuthProvider'
import { getProgressOverview, getProgressTimeline, getRecommendedMentors } from '../lib/learnerApi'
import { getNotifications } from '../lib/communicationsApi'
import { useQuery } from '@tanstack/react-query'
import FallbackImage from '../components/common/FallbackImage'

export default function LearnerDashboard() {
  const { user } = useAuth()
  const displayName = user?.fullName || 'Learner'
  const displayNameUpper = displayName.toUpperCase()
  const avatarAlt = `${displayName} avatar`
  const token = localStorage.getItem('authToken') || ''

  const { data: announcementsRes } = useQuery({
    queryKey: ['notifications', token],
    queryFn: () => getNotifications(token)
  })
  
  const { data: mentorsRes } = useQuery({
    queryKey: ['mentors', token],
    queryFn: () => getRecommendedMentors(token)
  })
  
  const { data: milestonesRes } = useQuery({
    queryKey: ['milestones', token],
    queryFn: () => getProgressTimeline(token)
  })
  
  const { data: overviewRes } = useQuery({
    queryKey: ['overview', token],
    queryFn: () => getProgressOverview(token)
  })

  const announcements = announcementsRes?.data || []
  const mentors = mentorsRes?.data || []
  const milestones = milestonesRes?.data || []
  const overview = overviewRes?.data || null

  return (
    <div className="flex bg-[#F7F9FB] min-h-screen font-body">
      <Sidebar />
      
      <main className="grow p-10 max-w-[1600px] mx-auto w-full">
        {/* Top bar Profile Summary (Link 8 High-Fidelity) */}
        <div className="flex justify-between items-center mb-10">
           <div className="flex items-center gap-3">
              <span className="text-xs font-black uppercase tracking-widest text-[#74777F]">Curator Portal</span>
              <span className="w-1 h-1 bg-[#C3C6D5] rounded-full"></span>
              <span className="text-xs font-bold text-[#434653]">Manage your growth</span>
           </div>
           <div className="flex items-center gap-6">
              <Link to="/learner/notifications" className="relative group p-2 hover:bg-white rounded-xl transition-all">
                <span className="material-symbols-outlined text-[#434653] group-hover:text-[#00419E]">notifications</span>
                <span className="absolute top-2 right-2 w-2 h-2 bg-[#BA1A1A] rounded-full border-2 border-[#F7F9FB]"></span>
              </Link>
              <div className="text-right">
                <p className="text-sm font-black text-[#191C1E]">{displayNameUpper}</p>
                <p className="text-[10px] font-bold text-[#434653] uppercase tracking-wider">Talent Flow Catalyst</p>
              </div>
              <Link
                to="/settings/profile-setup"
                aria-label="Open account settings"
                className="block w-10 h-10 rounded-full bg-[#E0E3E5] overflow-hidden border-2 border-white shadow-sm transition-transform hover:scale-105"
              >
                 <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk5utjN07mkZOhvtLZIyLzTlvKn2L4iPZCxU2HE03HITuSyf687NvYeKy1N3BB3ni_PXK6x68sbgc75rNQ2L2yaSJm-G8klfuPjgpLJwHX36NoMakdz6P_Z2afHIAebaZV13Q7a3n9L2hbMhTqfjyw74ubS7f51FH_QDX66YnHaXq9NSQwc_7KrIjpQkDJ-Yp3aaAhNu-vnGsNf7SIO4uN_S4bTdHe0MSfe9aqNGnaSUESsnPKSC5Ebl9BWs9kMIL9tpe4Ug-K6OI" alt={avatarAlt} className="w-full h-full object-cover" />
              </Link>
           </div>
        </div>

        {/* Hero Welcome */}
        <div className="mb-12 animate-fade-in-up">
           <h1 className="text-3xl md:text-5xl font-extrabold text-[#191C1E] tracking-tight font-headline mb-4">
             Welcome, {displayNameUpper}
           </h1>
           <p className="text-[#434653] text-lg font-medium leading-relaxed max-w-2xl">
              You've completed <span className="text-[#00419E] font-black">{overview?.hoursCompleted || 0} hours</span> of learning this week. Keep up the momentum!
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Content (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Mastery & Focus Card */}
            <div className="bg-white rounded-[32px] p-10 shadow-ambient relative overflow-hidden flex flex-col md:flex-row gap-10 items-center animate-scale-in">
              <div className="grow space-y-4">
                 <div className="inline-block px-4 py-1.5 bg-[#D3E4FE] text-[#00419E] text-xs font-black uppercase tracking-[0.1em] rounded-lg">
                    Mastery Summary
                 </div>
                 <h2 className="text-3xl font-black text-[#191C1E] font-headline">You are in the Top {overview?.percentile || 5}% of learners this month.</h2>
                 <p className="text-[#434653] font-medium leading-relaxed">Your consistency in "{overview?.activeCourse || 'Modern UI Design Principles'}" is architecting a strong professional foundation.</p>
              </div>
              <div className="shrink-0 relative w-40 h-40 flex items-center justify-center">
                 <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#F2F4F6" strokeWidth="10" />
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#00327D" strokeWidth="10" strokeDasharray="212" strokeDashoffset="42" strokeLinecap="round" className="rotate-[-90deg] origin-center" />
                 </svg>
                 <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-black text-[#00327D]">{overview?.focus || 0}%</span>
                    <span className="text-[10px] font-bold text-[#434653] uppercase">Focus</span>
                 </div>
              </div>
            </div>

            {/* Announcements */}
            <div className="space-y-6">
               <h3 className="text-sm font-black text-[#74777F] uppercase tracking-[0.2em] flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">campaign</span>
                  Announcements
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {announcements.length > 0 ? (
                    announcements.slice(0, 4).map((ann, i) => (
                      <div key={i} className="bg-white p-6 rounded-3xl shadow-ambient hover:shadow-xl transition-all cursor-pointer group flex gap-4 items-start">
                         <div className="w-12 h-12 bg-[#F2F4F6] rounded-xl flex items-center justify-center text-[#00327D] group-hover:bg-[#00327D] group-hover:text-white transition-colors shrink-0">
                            <span className="material-symbols-outlined">{ann.icon || 'notifications'}</span>
                         </div>
                         <div>
                            <p className="font-bold text-[#191C1E] mb-1">{ann.title}</p>
                            <p className="text-xs text-[#74777F] font-medium leading-relaxed">{ann.desc}</p>
                         </div>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-full p-6 text-center text-[#74777F] bg-white rounded-3xl shadow-sm">
                      No new announcements.
                    </div>
                  )}
               </div>
            </div>

            {/* Current Course Focus */}
            <div className="space-y-6">
               <h3 className="text-sm font-black text-[#74777F] uppercase tracking-[0.2em]">Current Engagement</h3>
               <div className="bg-[#00327D] rounded-[40px] p-12 text-white relative overflow-hidden min-h-[400px] flex flex-col justify-end group shadow-2xl">
                  <FallbackImage 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB06ZF4rJWSKN23zp2wWsqwcW2AAK2QkSoDP8VJd3XcOmygrHupDSMRzlmq1pV7oIZmyGUWmoHieax_B0EhzWAKlA3mVAirTYUI7btKWWdLkEFw7NS5SmkEjHY-urpnaWWOzby9uwXtVCfd0xjLeIluwlQol8d9sOChqyuzLcu8hwIJZKuYVi7WMjsB_7DuwjZ7MBOWgf9H2W7DOYgCqdKZeTdDRVZqyp5Ox8q3TvJ3ndRGc5lXidkY5yfCJZDARcfbOl7kxPydQ1M" 
                    alt="Course" 
                    seedName={overview?.activeCourse}
                    fallbackType="course"
                    className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-1000" 
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#00327D] via-[#00327D]/20 to-transparent"></div>
                  <div className="relative z-10">
                     <p className="text-xs font-black uppercase tracking-[0.2em] text-[#D3E4FE] mb-4">Intermediate Flow</p>
                     <h2 className="text-4xl font-black font-headline mb-6 max-w-md leading-tight">{overview?.activeCourse || 'Modern UI Design Principles'}</h2>
                     <button className="px-8 py-4 bg-white text-[#00327D] font-black rounded-xl hover:bg-[#D3E4FE] transition-all flex items-center gap-2 w-fit">
                        Continue Learning
                        <span className="material-symbols-outlined">play_arrow</span>
                     </button>
                  </div>
               </div>
            </div>

            {/* Mentors */}
            <div className="space-y-6 pb-10">
               <div className="flex justify-between items-center">
                  <h3 className="text-sm font-black text-[#74777F] uppercase tracking-[0.2em]">Recommended Mentors</h3>
                  <button className="text-xs font-black text-[#00419E] hover:underline uppercase tracking-widest">View All</button>
               </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {mentors.length > 0 ? (
                    mentors.map((mentor: any, i: number) => (
                      <div key={i} className="bg-white p-6 rounded-3xl shadow-ambient hover:translate-y-[-4px] transition-all cursor-pointer flex flex-col items-center text-center">
                         <div className="w-16 h-16 rounded-2xl overflow-hidden mb-4 border-2 border-[#D3E4FE] bg-[#F2F4F6] flex items-center justify-center">
                            {(mentor?.thumbnailUrl || mentor?.img) ? (
                              <FallbackImage 
                                src={(mentor?.thumbnailUrl || mentor?.img)} 
                                alt={mentor?.name || 'Mentor'} 
                                fallbackType="avatar"
                                className="w-full h-full object-cover" 
                              />
                            ) : (
                              <span className="text-[#00327D] font-bold">{(mentor?.name || '?')[0].toUpperCase()}</span>
                            )}
                         </div>
                         <p className="font-bold text-[#191C1E]">{mentor?.name}</p>
                         <p className="text-[10px] text-[#74777F] font-bold uppercase tracking-wider mt-1">{mentor?.role}</p>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-full p-6 text-center text-[#74777F] bg-white rounded-3xl shadow-sm">
                      No mentors recommended at this time.
                    </div>
                  )}
               </div>
            </div>
          </div>

          {/* Sidebar Info (4 cols) */}
          <div className="lg:col-span-4 space-y-10">
            {/* Milestone List */}
            <div className="bg-[#ECEEF0] rounded-[32px] p-8 space-y-8 animate-scale-in animate-stagger-2">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#00327D] rounded-xl flex items-center justify-center text-white">
                     <span className="material-symbols-outlined text-[20px]">event_upcoming</span>
                  </div>
                  <h2 className="text-xl font-black text-[#191C1E] font-headline tracking-tight">Upcoming Milestones</h2>
               </div>

               <div className="space-y-10 relative">
                  {/* Vertical Line */}
                  <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-[#C3C6D5]/30"></div>
                  
                  {milestones.length > 0 ? (
                    milestones.map((m, i) => (
                      <div key={i} className="relative pl-10">
                         {/* Circle node */}
                         <div className={`absolute left-0 top-1.5 w-10 h-10 rounded-xl bg-white border-2 flex items-center justify-center transition-all ${i === 0 ? 'border-[#00327D] text-[#00327D]' : 'border-[#C3C6D5]/50 text-[#C3C6D5]'}`}>
                            <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-[#00327D]' : 'bg-[#C3C6D5]'}`}></div>
                         </div>
                         <div>
                            <p className={`text-[10px] font-black uppercase tracking-[0.2em] mb-1 ${i === 0 ? 'text-[#00419E]' : 'text-[#74777F]'}`}>
                               {m.date} <span className="text-[#C3C6D5] mx-1">•</span> {m.days}
                            </p>
                            <h4 className="font-bold text-[#191C1E] mb-1">{m.title}</h4>
                            <p className="text-xs text-[#74777F] leading-relaxed font-medium">{m.desc}</p>
                         </div>
                      </div>
                    ))
                  ) : (
                    <div className="p-4 text-[#74777F] text-center border-2 border-dashed border-[#C3C6D5] rounded-2xl">
                      No milestones tracked.
                    </div>
                  )}
               </div>
            </div>

            {/* Pro Plan Upsell */}
            <div className="bg-linear-to-br from-[#003E38] to-[#005750] rounded-[32px] p-10 text-white relative overflow-hidden shadow-xl animate-scale-in animate-stagger-3">
               <div className="relative z-10">
                  <span className="material-symbols-outlined text-4xl mb-4 text-[#57FAE9] animate-pulse">new_releases</span>
                  <h3 className="text-2xl font-black font-headline mb-3">Upgrade to PRO</h3>
                  <p className="text-[#DAE2FF] text-sm leading-relaxed mb-8">Unlock advanced portfolio reviews and direct 1:1 sessions with industry experts.</p>
                  <button className="w-full py-4 bg-[#57FAE9] text-[#00201D] font-black rounded-xl hover:scale-105 active:scale-95 transition-all">
                    Upgrade Now
                  </button>
               </div>
               <div className="absolute bottom-[-20%] right-[-10%] w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
        <BottomNav />
      </main>
    </div>
  )
}
