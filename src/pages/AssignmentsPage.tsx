import Sidebar from '../components/Sidebar'

const assignments = [
  {
    title: 'Neon Product Teardown',
    course: 'Modern UI Design Principles',
    due: 'Due Apr 12',
    status: 'Active',
    icon: 'bolt',
    accent: 'from-[#00327D] to-[#00A6FF]'
  },
  {
    title: 'Responsive Layout Lab',
    course: 'Frontend Foundations',
    due: 'Due Apr 15',
    status: 'Review Prep',
    icon: 'grid_view',
    accent: 'from-[#031B4E] to-[#57FAE9]'
  },
  {
    title: 'Portfolio Case Study Draft',
    course: 'Career Growth Sprint',
    due: 'Due Apr 18',
    status: 'In Progress',
    icon: 'docs',
    accent: 'from-[#111827] to-[#475569]'
  }
]

const assignmentFlow = [
  {
    step: '06',
    title: 'Assignment Details',
    action: "Read brief -> tap 'Start Assignment'",
    system: 'Load submission form',
    destination: 'Assignment Submission Page',
  },
]

export default function AssignmentsPage() {
  return (
    <div className="flex min-h-screen bg-[radial-gradient(circle_at_top_left,_#dff5ff_0%,_#f7f9fb_48%,_#eef2ff_100%)] font-body text-[#191C1E]">
      <Sidebar />
      <main className="grow px-6 py-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 rounded-[32px] border border-white/70 bg-white/75 p-8 shadow-[0_24px_80px_rgba(0,50,125,0.12)] backdrop-blur-xl">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#64748B]">Curator Portal</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-[#0F172A]">Assignments</h1>
            <p className="mt-4 max-w-2xl text-sm font-medium leading-7 text-[#475569]">
              Keep every active brief, due date, and review milestone in one focused space.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {assignments.map((assignment) => (
              <article
                key={assignment.title}
                className="rounded-[28px] border border-white/80 bg-white/85 p-6 shadow-[0_18px_55px_rgba(15,23,42,0.08)]"
              >
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${assignment.accent} text-white shadow-lg`}>
                  <span className="material-symbols-outlined text-[28px]">{assignment.icon}</span>
                </div>
                <p className="mt-5 text-[10px] font-black uppercase tracking-[0.3em] text-[#64748B]">{assignment.course}</p>
                <h2 className="mt-3 text-2xl font-black tracking-tight text-[#0F172A]">{assignment.title}</h2>
                <div className="mt-6 flex items-center justify-between text-xs font-black uppercase tracking-[0.2em]">
                  <span className="text-[#00327D]">{assignment.due}</span>
                  <span className="rounded-full bg-[#EEF5FF] px-3 py-2 text-[#00327D]">{assignment.status}</span>
                </div>
              </article>
            ))}
          </div>

          <section className="mt-10 rounded-[32px] border border-white/80 bg-white/85 p-8 shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#64748B]">Assignment Flow</p>
            <div className="mt-6 grid gap-5">
              {assignmentFlow.map((item) => (
                <article
                  key={item.step}
                  className="grid gap-5 rounded-[24px] bg-[#F7F9FB] p-6 md:grid-cols-[80px_1fr]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#00327D,#2559BD)] text-lg font-black text-white shadow-lg">
                    {item.step}
                  </div>
                  <div>
                    <h2 className="text-2xl font-black tracking-tight text-[#0F172A]">{item.title}</h2>
                    <div className="mt-5 grid gap-4 md:grid-cols-3">
                      <div className="rounded-[20px] bg-white p-4">
                        <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#64748B]">User Action</p>
                        <p className="mt-2 text-sm font-bold text-[#191C1E]">{item.action}</p>
                      </div>
                      <div className="rounded-[20px] bg-white p-4">
                        <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#64748B]">System Response</p>
                        <p className="mt-2 text-sm font-bold text-[#191C1E]">{item.system}</p>
                      </div>
                      <div className="rounded-[20px] bg-white p-4">
                        <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#64748B]">Destination</p>
                        <p className="mt-2 text-sm font-bold text-[#00327D]">{item.destination}</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
