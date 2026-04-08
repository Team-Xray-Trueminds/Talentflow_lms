import Sidebar from '../components/Sidebar'

export default function InstructorDashboard() {
  const stats = [
    { label: 'Total Revenue', value: '$12,840.00', icon: 'payments', trend: '+14%', color: '#005049' },
    { label: 'Total Students', value: '842', icon: 'group', trend: '+42', color: '#00327D' },
    { label: 'Course Rating', value: '4.9', icon: 'star', subtext: 'Across 12 courses', color: '#F2C94C' }
  ]

  const activities = [
    { user: 'Elena Vance', action: 'submitted Final Portfolio', time: '24 minutes ago', course: 'Advanced UI Systems', icon: 'description' },
    { user: 'Marcus Thorne', action: 'commented', time: '1 hour ago', course: 'Product Strategy 101', comment: '"Could we explore more about the MVP phase in tomorrow\'s session?"', icon: 'chat_bubble' },
    { user: 'Sarah Jenkins', action: 'joined the cohort', time: '3 hours ago', course: 'Advanced UI Systems', icon: 'person_add' }
  ]

  return (
    <div className="flex bg-[#F7F9FB] min-h-screen">
      <Sidebar />
      <main className="grow p-10 max-w-[1600px] mx-auto w-full">
        {/* Top Nav */}
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-4 text-sm font-bold text-[#434653]">
            <span className="text-[#00419E]">Resource Hub</span>
            <span className="text-[#C3C6D5]">/</span>
            <span>Help Center</span>
          </div>
          <div className="flex items-center gap-4">
             <div className="text-right">
                <p className="text-sm font-black text-[#191C1E]">Instructor Julian</p>
                <p className="text-[10px] font-bold text-[#434653] uppercase tracking-wider">Arch-Lead</p>
             </div>
             <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOob43RVwc0CW12KB2DOBUtlHf-ew8BT46J0LkWSlklYMWRvTXlfGxTj8f_hGk8DCjxYTFV0FYgMSdkIchWPU2n2hN7odES9Y79DF2NjAD-N8AdXIh5Jqwuyr3gqbeQ6gQO9lHGathfnZ8t7xnUX7qARnkKnypxwL4TgPHwGE30jrZpU1GLNKHnIrF5FFm7Q1ZpHlQVl4KPpTMjINcfIXSwtWpEM4tMy34N59zfkcEZQrDOxVXaSd1q8rnaMb9573149iRc69wJQw" alt="Avatar" className="w-full h-full object-cover" />
             </div>
          </div>
        </div>

        {/* Hero Welcome */}
        <div className="mb-12 animate-fade-in-up">
           <h1 className="text-4xl md:text-5xl font-extrabold text-[#191C1E] tracking-tight font-headline mb-4">
             Good morning, Welcome back, Instructor Julian
           </h1>
           <p className="text-[#434653] text-lg font-medium">
             Your architectural studio is showing <span className="text-[#00419E] font-black">strong momentum</span> this week.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {stats.map((stat, i) => (
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

            {/* Action Required Callout */}
            <div className="bg-[#FFDAD6] border-2 border-[#BA1A1A]/10 p-8 rounded-[32px] flex flex-col md:flex-row gap-8 items-center animate-scale-in animate-stagger-1 shadow-sm">
               <div className="w-16 h-16 bg-[#BA1A1A] rounded-2xl flex items-center justify-center text-white shrink-0">
                  <span className="material-symbols-outlined text-3xl">assignment_late</span>
               </div>
               <div className="grow">
                  <h4 className="text-xl font-black text-[#410002] font-headline mb-1">14 Pending Reviews</h4>
                  <p className="text-[#410002]/70 font-medium">Action required: Assignments from <span className="font-bold underline cursor-pointer">"Advanced UI Systems"</span> need feedback.</p>
               </div>
               <button className="px-8 py-4 bg-[#BA1A1A] text-white font-black rounded-xl hover:bg-[#93000A] transition-all whitespace-nowrap">
                  Start Reviewing
               </button>
            </div>

            {/* Active Courses */}
            <div className="space-y-6">
               <h3 className="text-sm font-black text-[#74777F] uppercase tracking-[0.2em]">Active Curricula</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: 'Advanced UI Systems', students: 420, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCk5utjN07mkZOhvtLZIyLzTlvKn2L4iPZCxU2HE03HITuSyf687NvYeKy1N3BB3ni_PXK6x68sbgc75rNQ2L2yaSJm-G8klfuPjgpLJwHX36NoMakdz6P_Z2afHIAebaZV13Q7a3n9L2hbMhTqfjyw74ubS7f51FH_QDX66YnHaXq9NSQwc_7KrIjpQkDJ-Yp3aaAhNu-vnGsNf7SIO4uN_S4bTdHe0MSfe9aqNGnaSUESsnPKSC5Ebl9BWs9kMIL9tpe4Ug-K6OI' },
                    { title: 'Product Strategy 101', students: 382, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB06ZF4rJWSKN23zp2wWsqwcW2AAK2QkSoDP8VJd3XcOmygrHupDSMRzlmq1pV7oIZmyGUWmoHieax_B0EhzWAKlA3mVAirTYUI7btKWWdLkEFw7NS5SmkEjHY-urpnaWWOzby9uwXtVCfd0xjLeIluwlQol8d9sOChqyuzLcu8hwIJZKuYVi7WMjsB_7DuwjZ7MBOWgf9H2W7DOYgCqdKZeTdDRVZqyp5Ox8q3TvJ3ndRGc5lXidkY5yfCJZDARcfbOl7kxPydQ1M' }
                  ].map((course, i) => (
                    <div key={i} className="bg-white p-6 rounded-3xl shadow-ambient hover:shadow-xl transition-all cursor-pointer group flex items-center gap-6">
                       <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0">
                          <img src={course.img} alt="Course" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                       </div>
                       <div>
                          <p className="font-bold text-[#191C1E] text-lg mb-1">{course.title}</p>
                          <p className="text-sm text-[#74777F] font-medium">{course.students} Learners Active</p>
                          <div className="mt-4 flex gap-2">
                             <div className="w-8 h-8 rounded-full border-2 border-white bg-[#D3E4FE] -ml-2"></div>
                             <div className="w-8 h-8 rounded-full border-2 border-white bg-[#DAE2FF] -ml-2"></div>
                             <div className="w-8 h-8 rounded-full border-2 border-white bg-[#F2F4F6] -ml-2 flex items-center justify-center text-[10px] font-black text-[#434653]">+32</div>
                          </div>
                       </div>
                    </div>
                  ))}
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
                    { label: 'New Course', icon: 'add_circle' },
                    { label: 'Live Stream', icon: 'videocam' },
                    { label: 'Analytics', icon: 'monitoring' },
                    { label: 'Broadcast', icon: 'podcasts' }
                  ].map((btn, i) => (
                    <button key={i} className="flex flex-col items-center justify-center p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition-all gap-2 border border-white/10">
                       <span className="material-symbols-outlined">{btn.icon}</span>
                       <span className="text-[10px] font-bold uppercase tracking-widest">{btn.label}</span>
                    </button>
                  ))}
               </div>
            </div>

            {/* Learner Activity Feed */}
            <div className="bg-white rounded-[40px] p-8 shadow-ambient animate-scale-in animate-stagger-3">
               <h3 className="text-xl font-black text-[#191C1E] font-headline mb-8">Learner Activity</h3>
               <div className="space-y-8 relative">
                  <div className="absolute left-[20px] top-4 bottom-4 w-0.5 bg-[#F2F4F6]"></div>
                  {activities.map((act, i) => (
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
                          {act.comment && (
                            <div className="mt-3 p-3 bg-[#F2F4F6] rounded-xl italic text-xs text-[#434653] font-medium leading-relaxed">
                               {act.comment}
                            </div>
                          )}
                       </div>
                    </div>
                  ))}
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
