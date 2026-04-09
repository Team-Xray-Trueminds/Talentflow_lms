import { useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import { useTheme, type ThemeMode } from '../components/theme/ThemeProvider'

const displayModes: Array<{
  value: ThemeMode
  title: string
  note: string
  icon: string
}> = [
  { value: 'light', title: 'Light Mode', note: 'Keep your studio bright and editorial.', icon: 'light_mode' },
  { value: 'dark', title: 'Dark Mode', note: 'Use a softer dark palette for focused work.', icon: 'dark_mode' },
]

export default function InstructorProfileSetupPage() {
  const { themeMode, resolvedTheme, setThemeMode } = useTheme()
  const [formData, setFormData] = useState({
    headline: '',
    expertiseArea: '',
    bio: '', // Teaching Philosophy
    linkedin: '',
    portfolio: '',
    credentials: ''
  })

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = '/instructor/dashboard'
  }

  return (
    <div className="flex bg-[#F7F9FB] min-h-screen">
      <Sidebar forceRole="Instructor" />

      <main className="grow p-6 md:p-12 max-w-5xl mx-auto w-full">
        {/* Header Content */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 md:mb-12 gap-4">
          <div className="animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#191C1E] tracking-tight font-headline mb-2 leading-tight">
              Configure your Studio
            </h1>
            <p className="text-[#434653] font-medium text-base md:text-lg">
              Set your teaching credentials and curate your unique educator profile.
            </p>
          </div>
          <Link
            to="/instructor/dashboard"
            className="text-[#00419E] font-bold hover:underline py-2 md:py-2"
          >
            Skip for now
          </Link>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-[24px] md:rounded-3xl shadow-ambient overflow-hidden animate-scale-in">
          {/* Cover Placeholder */}
          <div className="h-32 md:h-40 bg-linear-to-r from-[#00327D] to-[#2559BD] relative">
            <div className="absolute -bottom-12 md:-bottom-16 left-6 md:left-12 w-24 md:w-32 h-24 md:h-32 rounded-2xl md:rounded-3xl border-[6px] md:border-8 border-white bg-[#E0E3E5] flex items-center justify-center overflow-hidden shadow-lg group cursor-pointer">
              <span className="material-symbols-outlined text-3xl md:text-4xl text-[#434653] group-hover:scale-110 transition-transform">add_a_photo</span>
              <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
            </div>
            <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-black uppercase rounded-lg tracking-widest">
                Verified Educator
            </div>
          </div>

          <form className="pt-20 md:pt-24 pb-8 md:pb-12 px-6 md:px-12 space-y-8 md:space-y-10" onSubmit={handleSave}>
            
            {/* Primary Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-wider text-[#434653]">
                  Teaching Headline
                </label>
                <input
                  type="text"
                  placeholder="e.g. Senior Architecture Lead"
                  className="w-full px-5 py-4 rounded-xl bg-[#F2F4F6] border-none focus:ring-2 focus:ring-[#2559BD] text-[#191C1E] transition-all outline-none"
                  value={formData.headline}
                  onChange={e => setFormData({ ...formData, headline: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-wider text-[#434653]">
                  Core Expertise
                </label>
                <input
                  type="text"
                  placeholder="e.g. System Design, Urbanism"
                  className="w-full px-5 py-4 rounded-xl bg-[#F2F4F6] border-none focus:ring-2 focus:ring-[#2559BD] text-[#191C1E] transition-all outline-none"
                  value={formData.expertiseArea}
                  onChange={e => setFormData({ ...formData, expertiseArea: e.target.value })}
                />
              </div>
            </div>

            {/* Teaching Philosophy */}
            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <label className="text-xs font-black uppercase tracking-wider text-[#434653]">
                  Teaching Philosophy
                </label>
              </div>
              <textarea
                placeholder="How do you guide students to mastery?"
                rows={4}
                className="w-full px-5 py-4 rounded-xl bg-[#F2F4F6] border-none focus:ring-2 focus:ring-[#2559BD] text-[#191C1E] transition-all outline-none resize-none"
                value={formData.bio}
                onChange={e => setFormData({ ...formData, bio: e.target.value })}
              />
            </div>

            {/* Social & Portfolio Links */}
            <div className="pt-6 border-t border-[#C3C6D5]/30">
              <h3 className="text-lg font-bold text-[#191C1E] mb-6 font-headline">Professional Ecosystem</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#434653] text-[20px]">link</span>
                  <input
                    type="text"
                    placeholder="LinkedIn Profile"
                    className="w-full pl-12 pr-5 py-4 rounded-xl bg-[#F2F4F6] border-none focus:ring-2 focus:ring-[#2559BD] text-[#191C1E] transition-all outline-none"
                  />
                </div>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#434653] text-[20px]">language</span>
                  <input
                    type="text"
                    placeholder="Personal Portfolio"
                    className="w-full pl-12 pr-5 py-4 rounded-xl bg-[#F2F4F6] border-none focus:ring-2 focus:ring-[#2559BD] text-[#191C1E] transition-all outline-none"
                  />
                </div>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#434653] text-[20px]">history_edu</span>
                  <input
                    type="text"
                    placeholder="Academic Credentials"
                    className="w-full pl-12 pr-5 py-4 rounded-xl bg-[#F2F4F6] border-none focus:ring-2 focus:ring-[#2559BD] text-[#191C1E] transition-all outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#C3C6D5]/30">
              <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#191C1E] font-headline">Workspace Settings</h3>
                  <p className="mt-2 text-sm leading-6 text-[#434653]">
                    Display preferences apply across your educator studio and learning tools.
                  </p>
                </div>
                <span className="rounded-full bg-[#EAF0FF] px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-[#2559BD] w-fit">
                  {resolvedTheme === 'dark' ? 'Dark Active' : 'Light Active'}
                </span>
              </div>

              <div className="mt-6 grid gap-4">
                {displayModes.map((mode) => {
                  const active = themeMode === mode.value

                  return (
                    <button
                      key={mode.value}
                      type="button"
                      onClick={() => setThemeMode(mode.value)}
                      className={`flex w-full items-center justify-between gap-4 rounded-[24px] border px-5 py-4 text-left transition ${
                        active
                          ? 'border-[#2559BD]/30 bg-[#EAF0FF]'
                          : 'border-[#D7DDEA] bg-[#FBFCFE] hover:border-[#2559BD]/20 hover:bg-[#F7F9FB]'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className={`grid h-12 w-12 place-items-center rounded-2xl ${
                          active ? 'bg-[#2559BD] text-white' : 'bg-white text-[#2559BD] border border-[#D7DDEA]'
                        }`}>
                          <span className="material-symbols-outlined">{mode.icon}</span>
                        </span>
                        <div>
                          <p className="text-sm font-black text-[#191C1E]">{mode.title}</p>
                          <p className="mt-1 text-xs leading-5 text-[#434653]">{mode.note}</p>
                        </div>
                      </div>
                      <span className={`grid h-6 w-6 place-items-center rounded-full border ${
                        active
                          ? 'border-[#2559BD] bg-[#2559BD] text-white'
                          : 'border-[#C3C6D5] bg-white text-transparent'
                      }`}>
                        <span className="material-symbols-outlined text-[15px]">check</span>
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 md:pt-8 flex flex-col md:flex-row justify-end gap-3 md:gap-4">
              <button
                type="submit"
                className="order-1 md:order-2 w-full md:w-auto px-10 py-4 rounded-xl bg-linear-to-r from-[#00327D] to-[#2559BD] text-white font-bold text-lg shadow-xl shadow-[#00327D]/20 hover:scale-[1.02] active:scale-95 transition-all"
              >
                Activate Studio
              </button>
               <button
                type="button"
                className="order-2 md:order-1 px-8 py-4 rounded-xl font-bold text-[#434653] hover:bg-[#F2F4F6] transition-all"
                onClick={() => setFormData({ headline: '', expertiseArea: '', bio: '', linkedin: '', portfolio: '', credentials: '' })}
              >
                Reset Fields
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
