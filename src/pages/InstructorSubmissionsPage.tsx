import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import Sidebar from '../components/Sidebar'
import BottomNav from '../components/layout/BottomNav'
import { getSubmissionQueue } from '../lib/tutorApi'

export default function InstructorSubmissionsPage() {
  const token = localStorage.getItem('authToken') || ''
  const [filter, setFilter] = useState('urgent')

  const { data: queueRes, isLoading } = useQuery({
    queryKey: ['submissionQueue', filter],
    queryFn: () => getSubmissionQueue(token, filter),
    enabled: !!token
  })

  const queue = queueRes?.data || []

  return (
    <div className="flex bg-[#F7F9FB] min-h-screen font-body">
      <Sidebar />
      <main className="grow px-6 py-8 lg:px-10 pb-24 lg:pb-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#64748B]">Curator Focus</p>
              <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[#191C1E]">Grading Queue</h1>
              <p className="mt-4 max-w-2xl text-sm font-medium leading-7 text-[#434653]">
                Review student work, provide architecture-level feedback, and maintain academic momentum.
              </p>
            </div>
            
            <div className="flex gap-2 bg-white p-1 rounded-2xl shadow-sm ring-1 ring-[#E0E3E5]/50">
              {['urgent', 'newest', 'pending'].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                    filter === f ? 'bg-[#00327D] text-white' : 'text-[#64748B] hover:bg-[#F2F4F6]'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {isLoading ? (
            <div className="grid h-64 place-items-center bg-white rounded-[32px] shadow-ambient">
              <span className="material-symbols-outlined animate-spin text-2xl sm:text-3xl md:text-4xl text-[#00327D]">progress_activity</span>
            </div>
          ) : queue.length === 0 ? (
            <div className="bg-white rounded-[40px] p-20 text-center shadow-ambient border-2 border-dashed border-[#F2F4F6]">
              <span className="material-symbols-outlined text-2xl sm:text-3xl md:text-4xl sm:text-5xl lg:text-6xl text-[#C3C6D5]">task_alt</span>
              <h3 className="mt-6 text-2xl font-black text-[#191C1E]">Queue is Clear</h3>
              <p className="mt-2 text-[#64748B]">All student submissions have been reviewed. Great work!</p>
            </div>
          ) : (
            <div className="grid gap-6">
              {queue.map((item) => (
                <article
                  key={item.id}
                  className="bg-white rounded-[32px] px-4 py-6 sm:px-6 lg:p-8 shadow-ambient flex flex-col md:flex-row items-center justify-between gap-8 group hover:shadow-xl transition-all ring-1 ring-[#F2F4F6]"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#F2F4FB] flex items-center justify-center text-[#00327D]">
                      <span className="material-symbols-outlined text-xl sm:text-2xl md:text-3xl">assignment</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-[#191C1E]">{item.assignmentTitle}</h3>
                      <p className="text-sm font-bold text-[#434653]">Student: <span className="text-[#00419E]">{item.studentName}</span></p>
                      <p className="text-[10px] font-black uppercase tracking-widest text-[#74777F] mt-2">Submitted {new Date(item.submittedAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                      item.status === 'pending' ? 'bg-[#FFDAD6] text-[#BA1A1A]' : 'bg-[#E7F3F1] text-[#005049]'
                    }`}>
                      {item.status}
                    </span>
                    <button className="px-8 py-4 bg-[#00327D] text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-[#2559BD] transition-all shadow-lg shadow-[#00327D]/20">
                      Review Work
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
        <BottomNav />
      </main>
    </div>
  )
}
