import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

export default function InstructorCoursesPage() {
  const role = localStorage.getItem('userRole')
  const isInstructor = role === 'Instructor'

  const departments = [
    { title: 'UI Architecture', desc: 'Design systems & scale', icon: 'architecture', courses: 14 },
    { title: 'Frontend Engineering', desc: 'Modern React patterns', icon: 'code', courses: 8 },
    { title: 'Backend Systems', desc: 'Distributed architectures', icon: 'dns', courses: 6 },
    { title: 'Product Strategy', desc: 'Market fit & growth', icon: 'insights', courses: 10 },
    { title: 'Visual Logic', desc: 'Complex data logic', icon: 'monitoring', courses: 5 },
    { title: 'System Design', desc: 'Scalable frameworks', icon: 'hub', courses: 7 }
  ]

  return (
    <div className="flex bg-[#F7F9FB] min-h-screen">
      <Sidebar />
      <main className="grow p-6 md:p-10 max-w-[1600px] mx-auto w-full pb-32 lg:pb-10">
        {/* Header */}
        <div className="flex justify-between items-start mb-12 animate-fade-in-up">
           <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#191C1E] font-headline mb-2">Academic Explorer</h1>
              <p className="text-base font-medium text-[#434653]">
                {isInstructor 
                  ? 'Manage departments and oversee curriculum architecture.' 
                  : 'Direct access to major academic departments and specialized tracks.'}
              </p>
           </div>
           {isInstructor && (
             <button className="hidden md:flex items-center gap-2 bg-[#00327D] text-white px-6 py-3 rounded-xl font-black text-sm hover:shadow-lg transition-all active:scale-95">
                <span className="material-symbols-outlined text-[20px]">add</span>
                Add Department
             </button>
           )}
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {departments.map((dept, i) => (
            <div key={i} className="bg-white p-8 rounded-[32px] shadow-ambient hover:shadow-xl transition-all group cursor-pointer border border-[#C3C6D5]/10 animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="w-14 h-14 bg-[#F2F4F6] rounded-2xl flex items-center justify-center text-[#00327D] mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[28px]">{dept.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-[#191C1E] mb-1">{dept.title}</h3>
              <p className="text-xs text-[#74777F] font-bold uppercase tracking-widest">{dept.desc}</p>
              <div className="mt-8 flex items-center justify-between border-t border-[#C3C6D5]/10 pt-6">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-[#74777F] uppercase">Active Courses</span>
                  <span className="text-lg font-black text-[#191C1E]">{dept.courses}</span>
                </div>
                <button className={`p-2 transition-colors ${isInstructor ? 'text-[#74777F] hover:text-[#00327D]' : 'text-[#00327D]'}`}>
                  <span className="material-symbols-outlined">{isInstructor ? 'settings' : 'arrow_forward'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Global Overview Section */}
        <div className="bg-[#00327D] rounded-[32px] p-10 text-white relative overflow-hidden shadow-2xl">
           <div className="relative z-10 max-w-lg">
              <h2 className="text-2xl font-black font-headline mb-4">
                {isInstructor ? 'Curriculum Health Summary' : 'Elite Academic Pathways'}
              </h2>
              <p className="text-white/80 text-sm leading-relaxed mb-8">
                {isInstructor 
                  ? 'Review student engagement metrics across all departments to identify scaling opportunities.'
                  : 'Our curriculum is designed by Silicon Valley veterans to bridge the gap between academic theory and architectural mastery.'}
              </p>
              <div className="flex gap-4">
                 <button className="px-6 py-3 bg-white text-[#00327D] rounded-xl font-black text-xs hover:scale-105 transition-transform">
                    {isInstructor ? 'View Detailed Report' : 'Download Syllabus'}
                 </button>
              </div>
           </div>
           <div className="absolute right-[-5%] top-[-10%] w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        {/* Mobile Bottom Navigation */}
        <nav className="lg:hidden fixed bottom-6 left-6 right-6 bg-white/80 backdrop-blur-xl border border-[#C3C6D5]/20 h-16 rounded-2xl shadow-2xl flex items-center justify-around px-4 z-50">
          {[
            { icon: 'dashboard', label: 'Home', to: isInstructor ? '/instructor/dashboard' : '/learner/dashboard' },
            { icon: 'school', label: 'Curricula', to: '/curriculum', active: true },
            { icon: 'groups', label: 'Base', to: '#' },
            { icon: 'account_circle', label: 'Profile', to: '/settings/profile-setup' }
          ].map((nav, i) => (
            <Link key={i} to={nav.to} className={`flex flex-col items-center gap-1 transition-all ${nav.active ? 'text-[#00327D]' : 'text-[#74777F]'}`}>
              <span className={`material-symbols-outlined text-[24px] ${nav.active ? 'fill-1' : ''}`}>{nav.icon}</span>
              <span className="text-[10px] font-bold tracking-tighter uppercase">{nav.label}</span>
            </Link>
          ))}
        </nav>
      </main>
    </div>
  )
}
