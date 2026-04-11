import Sidebar from '../components/Sidebar'
import BottomNav from '../components/layout/BottomNav'

const submissions = [
  {
    title: 'Interactive Dashboard Prototype',
    course: 'Modern UI Design Principles',
    submitted: 'Submitted Apr 08',
    result: 'Awaiting feedback',
    icon: 'upload_file'
  },
  {
    title: 'Design System Audit',
    course: 'Frontend Foundations',
    submitted: 'Submitted Apr 05',
    result: 'Approved',
    icon: 'task_alt'
  },
  {
    title: 'Case Study Storyboard',
    course: 'Career Growth Sprint',
    submitted: 'Submitted Apr 02',
    result: 'Revision requested',
    icon: 'rate_review'
  }
]

export default function SubmissionsPage() {
  return (
    <div className="flex min-h-screen bg-[radial-gradient(circle_at_top,_#e8fbff_0%,_#f7f9fb_45%,_#eef2ff_100%)] font-body text-[#191C1E]">
      <Sidebar />
      <main className="grow px-6 py-8 lg:px-10 pb-32 lg:pb-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[32px] border border-white/70 bg-white/75 p-8 shadow-[0_24px_80px_rgba(0,50,125,0.12)] backdrop-blur-xl">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#64748B]">Curator Portal</p>
              <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[#0F172A]">Submissions</h1>
              <p className="mt-4 max-w-2xl text-sm font-medium leading-7 text-[#475569]">
                Track what you have turned in, what needs revision, and what is ready to showcase.
              </p>
            </div>
            <div className="rounded-[32px] bg-[linear-gradient(135deg,_#031B4E_0%,_#00327D_60%,_#00B7FF_100%)] p-8 text-white shadow-[0_22px_60px_rgba(0,50,125,0.28)]">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#B8DCFF]">Submission Rate</p>
              <p className="mt-4 text-xl sm:text-2xl md:text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">92%</p>
              <p className="mt-3 text-sm font-medium text-[#D9F4FF]">You are ahead of the cohort average this week.</p>
            </div>
          </div>

          <div className="space-y-5">
            {submissions.map((submission) => (
              <article
                key={submission.title}
                className="flex flex-col gap-5 rounded-[28px] border border-white/80 bg-white/85 p-6 shadow-[0_18px_55px_rgba(15,23,42,0.08)] lg:flex-row lg:items-center lg:justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF2FF] text-[#00327D]">
                    <span className="material-symbols-outlined text-[28px]">{submission.icon}</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#64748B]">{submission.course}</p>
                    <h2 className="mt-2 text-2xl font-black tracking-tight text-[#0F172A]">{submission.title}</h2>
                  </div>
                </div>
                <div className="flex gap-6 text-xs font-black uppercase tracking-[0.2em] text-[#64748B]">
                  <span>{submission.submitted}</span>
                  <span className="text-[#00327D]">{submission.result}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
        <BottomNav />
      </main>
    </div>
  )
}
