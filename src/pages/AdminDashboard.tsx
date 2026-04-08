import { useState } from 'react'
import Sidebar from '../components/Sidebar'

interface Instructor {
  id: string
  name: string
  email: string
  expertise: string
  status: 'active' | 'pending'
}

export default function AdminDashboard() {
  const [instructors, setInstructors] = useState<Instructor[]>([
    { id: '1', name: 'Dr. Sarah Chen', email: 'sarah.chen@talentflow.edu', expertise: 'System Architecture', status: 'active' },
    { id: '2', name: 'Prof. James Wilson', email: 'j.wilson@talentflow.edu', expertise: 'Data Engineering', status: 'active' }
  ])

  const [showAddModal, setShowAddModal] = useState(false)
  const [newInstructor, setNewInstructor] = useState({ name: '', email: '', expertise: '' })

  const handleAddInstructor = (e: React.FormEvent) => {
    e.preventDefault()
    const instructor: Instructor = {
      id: Math.random().toString(36).substr(2, 9),
      ...newInstructor,
      status: 'pending'
    }
    setInstructors([...instructors, instructor])
    setShowAddModal(false)
    setNewInstructor({ name: '', email: '', expertise: '' })
    alert(`Account created for ${instructor.name}. An invitation email has been sent to ${instructor.email}.`)
  }

  return (
    <div className="flex bg-[#F7F9FB] min-h-screen">
      <Sidebar />
      <main className="grow p-8 md:p-12 max-w-7xl mx-auto w-full">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-extrabold text-[#191C1E] font-headline tracking-tight">Admin Oversight</h1>
            <p className="text-[#434653] font-medium mt-1">Manage platform instructors and system architecture.</p>
          </div>
          <button 
            onClick={() => setShowAddModal(true)}
            className="px-6 py-3 rounded-xl bg-linear-to-r from-[#00327D] to-[#2559BD] text-white font-bold shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined">person_add</span>
            Create Instructor Account
          </button>
        </header>

        <section className="bg-white rounded-3xl shadow-ambient border border-[#E0E3E5]/50 overflow-hidden">
          <div className="p-8 border-b border-[#E0E3E5]">
            <h2 className="text-xl font-bold text-[#191C1E] font-headline">Instructor Directory</h2>
          </div>
          
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#F2F4F6]">
                <th className="px-8 py-4 text-xs font-bold text-[#434653] uppercase tracking-wider">Instructor</th>
                <th className="px-8 py-4 text-xs font-bold text-[#434653] uppercase tracking-wider">Expertise</th>
                <th className="px-8 py-4 text-xs font-bold text-[#434653] uppercase tracking-wider">Status</th>
                <th className="px-8 py-4 text-xs font-bold text-[#434653] uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E0E3E5]">
              {instructors.map(inst => (
                <tr key={inst.id} className="hover:bg-[#F7F9FB] transition-colors">
                  <td className="px-8 py-6">
                    <div className="font-bold text-[#191C1E]">{inst.name}</div>
                    <div className="text-sm text-[#434653]">{inst.email}</div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="px-3 py-1.5 rounded-lg bg-[#D3E4FE] text-[#00419E] text-xs font-bold">
                      {inst.expertise}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                      inst.status === 'active' ? 'bg-[#C6F0D8] text-[#00502D]' : 'bg-[#FFE2D9] text-[#711600]'
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${inst.status === 'active' ? 'bg-[#00A651]' : 'bg-[#FF4D00]'}`}></div>
                      {inst.status.charAt(0).toUpperCase() + inst.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <button className="text-[#434653] hover:text-[#00419E] transition-colors">
                      <span className="material-symbols-outlined">settings</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {showAddModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg p-8 animate-scale-in">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-[#191C1E] font-headline">New Instructor Account</h2>
                <button onClick={() => setShowAddModal(false)} className="text-[#434653] hover:text-[#191C1E]">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              
              <form onSubmit={handleAddInstructor} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-[#434653] mb-2">Full Name</label>
                  <input 
                    required
                    className="w-full px-5 py-4 rounded-xl bg-[#F2F4F6] border-none focus:ring-2 focus:ring-[#2559BD] text-[#191C1E] transition-all outline-none"
                    placeholder="e.g. Dr. Alex Rivera"
                    value={newInstructor.name}
                    onChange={e => setNewInstructor({...newInstructor, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#434653] mb-2">Institutional Email</label>
                  <input 
                    type="email"
                    required
                    className="w-full px-5 py-4 rounded-xl bg-[#F2F4F6] border-none focus:ring-2 focus:ring-[#2559BD] text-[#191C1E] transition-all outline-none"
                    placeholder="a.rivera@talentflow.edu"
                    value={newInstructor.email}
                    onChange={e => setNewInstructor({...newInstructor, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#434653] mb-2">Target Expertise Area</label>
                  <select 
                    required
                    className="w-full px-5 py-4 rounded-xl bg-[#F2F4F6] border-none focus:ring-2 focus:ring-[#2559BD] text-[#191C1E] transition-all outline-none"
                    value={newInstructor.expertise}
                    onChange={e => setNewInstructor({...newInstructor, expertise: e.target.value})}
                  >
                    <option value="">Select Domain</option>
                    <option value="System Architecture">System Architecture</option>
                    <option value="Data Science">Data Science</option>
                    <option value="Cloud Infrastructure">Cloud Infrastructure</option>
                    <option value="Cybersecurity">Cybersecurity</option>
                  </select>
                </div>
                <div className="p-4 bg-[#EEF0FF] rounded-xl border border-[#D3E4FE]">
                  <p className="text-xs text-[#00419E] font-medium leading-relaxed">
                    Account credentials will be automatically generated and sent to the instructor's institutional email address.
                  </p>
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 rounded-xl bg-linear-to-r from-[#00327D] to-[#2559BD] text-white font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
                >
                  Confirm & Create Account
                </button>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
