import { useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

export default function ProfileSetupPage() {
  const [formData, setFormData] = useState({
    headline: '',
    bio: '',
    skills: [] as string[],
    github: '',
    linkedin: '',
    portfolio: ''
  })
  const [skillInput, setSkillInput] = useState('')

  const handleAddSkill = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && skillInput) {
      e.preventDefault()
      if (!formData.skills.includes(skillInput)) {
        setFormData(prev => ({ ...prev, skills: [...prev.skills, skillInput] }))
      }
      setSkillInput('')
    }
  }

  const removeSkill = (skill: string) => {
    setFormData(prev => ({ ...prev, skills: prev.skills.filter(s => s !== skill) }))
  }

  const getDashboardPath = () => {
    const role = localStorage.getItem('userRole')
    return role === 'Instructor' ? '/instructor/dashboard' : '/learner/dashboard'
  }

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate save
    window.location.href = getDashboardPath()
  }

  return (
    <div className="flex bg-[#F7F9FB] min-h-screen">
      <Sidebar />

      <main className="grow p-6 md:p-12 max-w-5xl mx-auto w-full">
        {/* Mobile Branding Header */}
        <div className="flex lg:hidden justify-between items-center mb-8">
           <h2 className="text-xl font-black text-[#00327D] font-headline tracking-tighter">
             TalentFlow
           </h2>
           <Link to="/login" className="text-sm font-bold text-[#00419E]">Login</Link>
        </div>

        {/* Header Content */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 md:mb-12 gap-4">
          <div className="animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#191C1E] tracking-tight font-headline mb-2 leading-tight">
              Complete your profile
            </h1>
            <p className="text-[#434653] font-medium text-base md:text-lg">
              Add a few details to get started on your professional journey.
            </p>
          </div>
          <Link
            to={getDashboardPath()}
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
          </div>

          <form className="pt-20 md:pt-24 pb-8 md:pb-12 px-6 md:px-12 space-y-8 md:space-y-10" onSubmit={handleSave}>
            <p className="text-xs font-bold text-[#00419E] uppercase tracking-widest lg:hidden">Upload profile photo</p>
            
            {/* Basic Info Group */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#434653] uppercase tracking-wider">
                  Professional Headline
                </label>
                <input
                  type="text"
                  placeholder="e.g. Senior Frontend Architect"
                  className="w-full px-5 py-4 rounded-xl bg-[#F2F4F6] border-none focus:ring-2 focus:ring-[#2559BD] text-[#191C1E] transition-all outline-none"
                  value={formData.headline}
                  onChange={e => setFormData({ ...formData, headline: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#434653] uppercase tracking-wider">
                  Specialized Skills
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Type and press Enter"
                    className="w-full px-5 py-4 rounded-xl bg-[#F2F4F6] border-none focus:ring-2 focus:ring-[#2559BD] text-[#191C1E] transition-all outline-none"
                    value={skillInput}
                    onChange={e => setSkillInput(e.target.value)}
                    onKeyDown={handleAddSkill}
                  />
                  <p className="text-[10px] text-[#74777F] mt-1 font-medium">Add up to 5 core competencies</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {formData.skills.map(skill => (
                    <span key={skill} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#D3E4FE] text-[#00419E] text-[10px] font-bold">
                      {skill}
                      <button type="button" onClick={() => removeSkill(skill)} className="hover:text-red-500">
                        <span className="material-symbols-outlined text-[12px]">close</span>
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bio Section */}
            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <label className="text-xs font-bold text-[#434653] uppercase tracking-wider">
                  Professional Bio
                </label>
                <span className="text-[10px] text-[#74777F] font-medium">Max 500 characters</span>
              </div>
              <textarea
                placeholder="Tell the community about your journey and what you curating..."
                rows={4}
                maxLength={500}
                className="w-full px-5 py-4 rounded-xl bg-[#F2F4F6] border-none focus:ring-2 focus:ring-[#2559BD] text-[#191C1E] transition-all outline-none resize-none"
                value={formData.bio}
                onChange={e => setFormData({ ...formData, bio: e.target.value })}
              />
            </div>

            {/* Social Links Group */}
            <div className="pt-6 border-t border-[#C3C6D5]/30">
              <h3 className="text-lg font-bold text-[#191C1E] mb-6 font-headline">Social Connectivity</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#434653] text-[20px]">link</span>
                  <input
                    type="text"
                    placeholder="GitHub"
                    className="w-full pl-12 pr-5 py-4 rounded-xl bg-[#F2F4F6] border-none focus:ring-2 focus:ring-[#2559BD] text-[#191C1E] transition-all outline-none"
                  />
                </div>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#434653] text-[20px]">link</span>
                  <input
                    type="text"
                    placeholder="LinkedIn"
                    className="w-full pl-12 pr-5 py-4 rounded-xl bg-[#F2F4F6] border-none focus:ring-2 focus:ring-[#2559BD] text-[#191C1E] transition-all outline-none"
                  />
                </div>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#434653] text-[20px]">language</span>
                  <input
                    type="text"
                    placeholder="Portfolio"
                    className="w-full pl-12 pr-5 py-4 rounded-xl bg-[#F2F4F6] border-none focus:ring-2 focus:ring-[#2559BD] text-[#191C1E] transition-all outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 md:pt-8 flex flex-col md:flex-row justify-end gap-3 md:gap-4">
              <button
                type="submit"
                className="order-1 md:order-2 w-full md:w-auto px-10 py-4 rounded-xl bg-linear-to-r from-[#00327D] to-[#2559BD] text-white font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
              >
                Save Profile
              </button>
               <button
                type="button"
                className="order-2 md:order-1 px-8 py-4 rounded-xl font-bold text-[#434653] hover:bg-[#F2F4F6] transition-all"
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
