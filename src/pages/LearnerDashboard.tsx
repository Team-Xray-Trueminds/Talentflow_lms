import Sidebar from '../components/Sidebar'
import BottomNav from '../components/layout/BottomNav'
import { Link } from 'react-router-dom'
import { useAuth } from '../components/auth/AuthProvider'
import { useTheme } from '../components/theme/ThemeProvider'

export default function LearnerDashboard() {
  const { user } = useAuth()
  const { resolvedTheme, setThemeMode } = useTheme()
  const isDark = resolvedTheme === 'dark'
  const displayName = user?.fullName || 'Learner'
  const displayNameUpper = displayName.toUpperCase()
  const avatarAlt = `${displayName} avatar`
  const announcements = [
    { title: 'Live Q&A with Design Lead at 5 PM', desc: "Don't miss out on industry secrets...", icon: 'campaign' },
    { title: 'New Resource: UI Kit v2.4 released', desc: 'Download the latest Figma components...', icon: 'description' }
  ]

  const mentors = [
    { name: 'Sarah Jenkins', role: 'Senior Product Designer', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVxrI9I5n58GFjq4GFTGavFlXmZe1bnwXPHtwHXeUg1aK1lVc7QKPvWr4O3EaYIjo56Qyp-AehpphzpbwI3peCA6mH3SMiUQnPK5y_zNT1ZmR_FblJnP7oSIdV4oTn4k_dpA6R5o9EVH256JTlGMsvpDvLW7E2Kt-iJ4839-mW_cxwIDVedGKFpDZyRrVl92Y3swdRuk9oj5AeAYnCk74RmRPjXJAt7mbdlVteunFv_yurekYAEQqpvZMJ4eMQZz3sBVC1ru3TwM0' },
    { name: 'Marcus Chen', role: 'UX Strategy Lead', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOob43RVwc0CW12KB2DOBUtlHf-ew8BT46J0LkWSlklYMWRvTXlfGxTj8f_hGk8DCjxYTFV0FYgMSdkIchWPU2n2hN7odES9Y79DF2NjAD-N8AdXIh5Jqwuyr3gqbeQ6gQO9lHGathfnZ8t7xnUX7qARnkKnypxwL4TgPHwGE30jrZpU1GLNKHnIrF5FFm7Q1ZpHlQVl4KPpTMjINcfIXSwtWpEM4tMy34N59zfkcEZQrDOxVXaSd1q8rnaMb9573149iRc69wJQw' },
    { name: 'Lena Volkova', role: 'Visual Systems Designer', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuSaxmsWaDeDfuFTFA6AOZfuiXWOiOZdbCDtc0TRm4vIvUnDcFYgxg-3GiykXQ6piGpupz92uli7GK-c88t_Bj236Eo0Jt4a3znXGpG2Abdywt_o3WxZdqHHQPHQcAQhhSSicLVV4oImwIvwoZMKi-0fUx9CbJsM4L2uLsI-eJ-r83k0tRbZ6kFQrc-HDWjTEkPsQUEG_jFBZK2FMzgroFpsZNaPaj4lKpHFBNQUodcY_ojab8pK4UaOyEVjPt82HwOmam6WsYV6E' }
  ]

  const milestones = [
    { date: 'MAY 24', days: '2 DAYS', title: 'Project Workshop', desc: 'Present your initial wireframes for peer review.' },
    { date: 'MAY 28', days: '6 DAYS', title: 'Portfolio Review', desc: 'One-on-one session with Senior Mentor Sarah.' },
    { date: 'JUN 02', days: '11 DAYS', title: 'Final Design Submission', desc: 'Complete the high-fidelity prototype phase.' },
    { date: 'JUN 05', days: '14 DAYS', title: 'Career Placement Prep', desc: 'Module 12 unlocked: Resume & Pitching.' }
  ]

  return (
    <div className="flex bg-[#F7F9FB] min-h-screen font-body">
      <Sidebar />
      
      <main className="grow w-full max-w-[1600px] mx-auto px-4 py-6 sm:px-6 lg:px-8 xl:px-10 pb-28 lg:pb-10">
        {/* Top bar Profile Summary (Link 8 High-Fidelity) */}
        <div className="mb-8">
           <div className="mb-6 flex items-center justify-end rounded-[28px] border border-white/70 bg-white/90 px-4 py-4 shadow-[0_18px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:hidden">
              <div className="ml-auto flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setThemeMode(isDark ? 'light' : 'dark')}
                  aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                  title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E6ECF7] bg-white text-[#0D2240] shadow-sm transition-all hover:border-[#00327D]/20 hover:text-[#00327D] dark:border-[#28456E] dark:bg-[#0B1930] dark:text-[#DCE8FF] dark:hover:border-[#57FAE9]/30 dark:hover:text-brand-tip-accent"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {isDark ? 'light_mode' : 'dark_mode'}
                  </span>
                </button>
                <Link
                  to="/learner/notifications"
                  aria-label="Open notifications"
                  className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[#E6ECF7] bg-white text-[#0D2240] shadow-sm transition-all hover:border-[#00327D]/20 hover:text-[#00327D]"
                >
                  <span className="material-symbols-outlined text-[20px]">notifications</span>
                </Link>
                <Link
                  to="/settings/profile-setup"
                  aria-label="Open account settings"
                  className="block h-12 w-12 overflow-hidden rounded-full border-2 border-[#FF7C57] bg-[#FF7C57] shadow-[0_10px_24px_rgba(255,124,87,0.28)] transition-transform hover:scale-105"
                >
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk5utjN07mkZOhvtLZIyLzTlvKn2L4iPZCxU2HE03HITuSyf687NvYeKy1N3BB3ni_PXK6x68sbgc75rNQ2L2yaSJm-G8klfuPjgpLJwHX36NoMakdz6P_Z2afHIAebaZV13Q7a3n9L2hbMhTqfjyw74ubS7f51FH_QDX66YnHaXq9NSQwc_7KrIjpQkDJ-Yp3aaAhNu-vnGsNf7SIO4uN_S4bTdHe0MSfe9aqNGnaSUESsnPKSC5Ebl9BWs9kMIL9tpe4Ug-K6OI" alt={avatarAlt} className="h-full w-full object-cover" />
                </Link>
              </div>
           </div>

           <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
           <div className="hidden sm:flex flex-wrap items-center gap-3">
              <span className="text-xs font-black uppercase tracking-widest text-[#74777F]">Curator Portal</span>
              <span className="w-1 h-1 bg-[#C3C6D5] rounded-full"></span>
              <span className="text-xs font-bold text-[#434653]">Manage your growth</span>
           </div>
           <div className="hidden sm:flex items-center justify-between gap-4 sm:justify-end sm:gap-6">
              <Link to="/learner/notifications" className="relative group p-2 hover:bg-white rounded-xl transition-all">
                <span className="material-symbols-outlined text-[#434653] group-hover:text-[#00419E]">notifications</span>
                <span className="absolute top-2 right-2 w-2 h-2 bg-[#BA1A1A] rounded-full border-2 border-[#F7F9FB]"></span>
              </Link>
              <div className="text-right min-w-0">
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
        </div>

        {/* Hero Welcome */}
        <div className="mb-12 animate-fade-in-up">
           <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#191C1E] tracking-tight font-headline mb-4">
             Welcome, {displayNameUpper}
           </h1>
           <p className="text-[#434653] text-lg font-medium leading-relaxed max-w-2xl">
              You've completed <span className="text-[#00419E] font-black">4.5 hours</span> of learning this week. Keep up the momentum!
           </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Main Content (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Mastery & Focus Card */}
            <div className="bg-white rounded-[28px] md:rounded-[32px] p-6 sm:p-8 md:p-10 shadow-ambient relative overflow-hidden flex flex-col md:flex-row gap-8 md:gap-10 items-center animate-scale-in">
              <div className="grow space-y-4">
                 <div className="inline-block px-4 py-1.5 bg-[#D3E4FE] text-[#00419E] text-xs font-black uppercase tracking-[0.1em] rounded-lg">
                    Mastery Summary
                 </div>
                 <h2 className="text-3xl font-black text-[#191C1E] font-headline">You are in the Top 5% of learners this month.</h2>
                 <p className="text-[#434653] font-medium leading-relaxed">Your consistency in "Modern UI Design Principles" is architecting a strong professional foundation.</p>
              </div>
              <div className="shrink-0 relative w-40 h-40 flex items-center justify-center">
                 <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#F2F4F6" strokeWidth="10" />
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#00327D" strokeWidth="10" strokeDasharray="212" strokeDashoffset="42" strokeLinecap="round" className="rotate-[-90deg] origin-center" />
                 </svg>
                 <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-black text-[#00327D]">85%</span>
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
                  {announcements.map((ann, i) => (
                    <div key={i} className="bg-white p-6 rounded-3xl shadow-ambient hover:shadow-xl transition-all cursor-pointer group flex gap-4 items-start">
                       <div className="w-12 h-12 bg-[#F2F4F6] rounded-xl flex items-center justify-center text-[#00327D] group-hover:bg-[#00327D] group-hover:text-white transition-colors">
                          <span className="material-symbols-outlined">{ann.icon}</span>
                       </div>
                       <div>
                          <p className="font-bold text-[#191C1E] mb-1">{ann.title}</p>
                          <p className="text-xs text-[#74777F] font-medium leading-relaxed">{ann.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            {/* Current Course Focus */}
            <div className="space-y-6">
               <h3 className="text-sm font-black text-[#74777F] uppercase tracking-[0.2em]">Current Engagement</h3>
               <div className="bg-[#00327D] rounded-[32px] md:rounded-[40px] p-6 sm:p-8 md:p-12 text-white relative overflow-hidden min-h-[320px] md:min-h-[400px] flex flex-col justify-end group shadow-2xl">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB06ZF4rJWSKN23zp2wWsqwcW2AAK2QkSoDP8VJd3XcOmygrHupDSMRzlmq1pV7oIZmyGUWmoHieax_B0EhzWAKlA3mVAirTYUI7btKWWdLkEFw7NS5SmkEjHY-urpnaWWOzby9uwXtVCfd0xjLeIluwlQol8d9sOChqyuzLcu8hwIJZKuYVi7WMjsB_7DuwjZ7MBOWgf9H2W7DOYgCqdKZeTdDRVZqyp5Ox8q3TvJ3ndRGc5lXidkY5yfCJZDARcfbOl7kxPydQ1M" alt="Course" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-linear-to-t from-[#00327D] via-[#00327D]/20 to-transparent"></div>
                  <div className="relative z-10">
                     <p className="text-xs font-black uppercase tracking-[0.2em] text-[#D3E4FE] mb-4">Intermediate Flow</p>
                     <h2 className="text-3xl md:text-4xl font-black font-headline mb-6 max-w-md leading-tight">Modern UI Design Principles</h2>
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
                  {mentors.map((mentor, i) => (
                    <div key={i} className="bg-white p-6 rounded-3xl shadow-ambient hover:translate-y-[-4px] transition-all cursor-pointer flex flex-col items-center text-center">
                       <div className="w-16 h-16 rounded-2xl overflow-hidden mb-4 border-2 border-[#D3E4FE]">
                          <img src={mentor.img} alt={mentor.name} className="w-full h-full object-cover" />
                       </div>
                       <p className="font-bold text-[#191C1E]">{mentor.name}</p>
                       <p className="text-[10px] text-[#74777F] font-bold uppercase tracking-wider mt-1">{mentor.role}</p>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* Sidebar Info (4 cols) */}
          <div className="lg:col-span-4 space-y-10">
            {/* Milestone List */}
            <div className="bg-[#ECEEF0] rounded-[28px] md:rounded-[32px] p-6 sm:p-8 space-y-8 animate-scale-in animate-stagger-2">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#00327D] rounded-xl flex items-center justify-center text-white">
                     <span className="material-symbols-outlined text-[20px]">event_upcoming</span>
                  </div>
                  <h2 className="text-xl font-black text-[#191C1E] font-headline tracking-tight">Upcoming Milestones</h2>
               </div>

               <div className="space-y-10 relative">
                  {/* Vertical Line */}
                  <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-[#C3C6D5]/30"></div>
                  
                  {milestones.map((m, i) => (
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
                  ))}
               </div>
            </div>

            {/* Pro Plan Upsell */}
            <div className="bg-linear-to-br from-[#003E38] to-[#005750] rounded-[28px] md:rounded-[32px] p-6 sm:p-8 md:p-10 text-white relative overflow-hidden shadow-xl animate-scale-in animate-stagger-3">
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
