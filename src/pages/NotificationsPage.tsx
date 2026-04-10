import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'

export default function NotificationsPage() {
  const notifications = {
    today: [
      { 
        title: 'New Assignment', 
        desc: 'Module 2: Advanced Layout assignment is now available.', 
        icon: 'assignment', 
        time: '2h ago',
        type: 'primary' 
      },
      { 
        title: 'Feedback Received', 
        desc: 'Instructor Julian Draper left feedback on your "Tonal Depth" submission.', 
        icon: 'reviews', 
        time: '5h ago',
        type: 'tertiary' 
      }
    ],
    earlier: [
      { 
        title: 'Course Update', 
        desc: 'A new video has been added to "Modern UI Design Principles".', 
        icon: 'play_circle', 
        time: 'Yesterday',
        type: 'secondary'
      },
      { 
        title: 'System Alert', 
        desc: 'Scheduled maintenance on Oct 28th from 02:00 to 04:00 UTC.', 
        icon: 'error_outline', 
        time: 'Oct 26',
        type: 'error'
      }
    ]
  }

  return (
    <div className="flex bg-[#F7F9FB] min-h-screen font-body text-[#191C1E]">
      <Sidebar />
      <main className="grow flex flex-col">
        {/* Top bar (Consistent with Curator Portal branding) */}
        <div className="px-6 lg:px-10 py-8 flex justify-between items-center bg-[#F7F9FB]">
           <div className="flex items-center gap-3">
              <span className="text-xs font-black uppercase tracking-widest text-[#74777F]">Curator Portal</span>
              <span className="w-1 h-1 bg-[#C3C6D5] rounded-full"></span>
              <span className="text-xs font-bold text-[#434653]">Notifications</span>
           </div>
           <div className="flex items-center gap-4">
              <Link to="/settings/profile-setup" className="w-10 h-10 rounded-full bg-[#E0E3E5] overflow-hidden border-2 border-white shadow-sm transition-transform hover:scale-105 cursor-pointer block">
                 <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk5utjN07mkZOhvtLZIyLzTlvKn2L4iPZCxU2HE03HITuSyf687NvYeKy1N3BB3ni_PXK6x68sbgc75rNQ2L2yaSJm-G8klfuPjgpLJwHX36NoMakdz6P_Z2afHIAebaZV13Q7a3n9L2hbMhTqfjyw74ubS7f51FH_QDX66YnHaXq9NSQwc_7KrIjpQkDJ-Yp3aaAhNu-vnGsNf7SIO4uN_S4bTdHe0MSfe9aqNGnaSUESsnPKSC5Ebl9BWs9kMIL9tpe4Ug-K6OI" alt="Avatar" className="w-full h-full object-cover" />
              </Link>
           </div>
        </div>

        {/* Content Area */}
        <div className="px-6 lg:px-10 pb-20 max-w-[800px] w-full mx-auto">
          <h1 className="text-4xl font-black font-headline mb-12 tracking-tight">Notifications</h1>

          <div className="space-y-12">
            {/* Today Section */}
            <section className="animate-fade-in-up">
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#74777F] mb-6">Today</h2>
              <div className="space-y-4">
                {notifications.today.map((notif, i) => (
                  <div key={i} className="bg-white p-6 rounded-[24px] shadow-ambient flex gap-5 items-start group hover:scale-[1.01] transition-all cursor-pointer">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                      notif.type === 'primary' ? 'bg-[#D3E4FE] text-[#00327D]' : 
                      notif.type === 'tertiary' ? 'bg-[#57FAE9]/20 text-[#005049]' : 'bg-[#F2F4F6] text-[#434653]'
                    }`}>
                      <span className="material-symbols-outlined">{notif.icon}</span>
                    </div>
                    <div className="grow">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold text-[#191C1E]">{notif.title}</h3>
                        <span className="text-[10px] font-bold text-[#74777F] uppercase tracking-wider">{notif.time}</span>
                      </div>
                      <p className="text-sm text-[#434653] font-medium leading-relaxed">{notif.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Earlier Section */}
            <section className="animate-fade-in-up animate-stagger-1">
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#74777F] mb-6">Earlier</h2>
              <div className="space-y-4">
                {notifications.earlier.map((notif, i) => (
                  <div key={i} className="bg-white/60 p-6 rounded-[24px] border border-transparent hover:border-[#C3C6D5]/30 flex gap-5 items-start group transition-all cursor-pointer">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                      notif.type === 'error' ? 'bg-[#FFDAD6] text-[#BA1A1A]' : 'bg-[#F2F4F6] text-[#434653]'
                    }`}>
                      <span className="material-symbols-outlined">{notif.icon}</span>
                    </div>
                    <div className="grow">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold text-[#191C1E] opacity-70">{notif.title}</h3>
                        <span className="text-[10px] font-bold text-[#74777F] uppercase tracking-wider opacity-60">{notif.time}</span>
                      </div>
                      <p className="text-sm text-[#434653]/60 font-medium leading-relaxed">{notif.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div className="flex flex-col items-center pt-8 animate-fade-in animate-stagger-2">
               <span className="material-symbols-outlined text-4xl text-[#C3C6D5] mb-4">check_circle</span>
               <p className="text-sm font-bold text-[#74777F] uppercase tracking-widest">You're all caught up!</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
