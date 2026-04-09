import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import BottomNav from '../components/layout/BottomNav'

const certificates = [
  {
    title: 'Modern UI Design Principles',
    courseId: 'modern-ui-design-principles',
    issued: 'Issued Apr 01',
    credential: 'TF-UI-2401'
  },
  {
    title: 'Visual Logic Fundamentals',
    courseId: 'visual-logic-fundamentals',
    issued: 'Issued Mar 14',
    credential: 'TF-VL-1932'
  }
]

export default function CertificatesPage() {
  return (
    <div className="flex min-h-screen bg-[radial-gradient(circle_at_top,_#eff7ff_0%,_#f7f9fb_45%,_#eefcfb_100%)] font-body text-[#191C1E]">
      <Sidebar />
      <main className="grow px-6 py-8 lg:px-10 pb-32 lg:pb-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 rounded-[32px] border border-white/70 bg-white/75 p-8 shadow-[0_24px_80px_rgba(0,50,125,0.12)] backdrop-blur-xl">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#64748B]">Curator Portal</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-[#0F172A]">Certificates</h1>
            <p className="mt-4 max-w-2xl text-sm font-medium leading-7 text-[#475569]">
              Review your earned credentials and open the full certificate view for download or print.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {certificates.map((certificate) => (
              <article
                key={certificate.courseId}
                className="rounded-[30px] border border-white/80 bg-white/85 p-6 shadow-[0_18px_55px_rgba(15,23,42,0.08)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#64748B]">{certificate.issued}</p>
                    <h2 className="mt-3 text-2xl font-black tracking-tight text-[#0F172A]">{certificate.title}</h2>
                    <p className="mt-3 text-sm font-medium text-[#475569]">Credential ID: {certificate.credential}</p>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF2FF] text-[#00327D] shadow-sm">
                    <span className="material-symbols-outlined text-[28px]">workspace_premium</span>
                  </div>
                </div>
                <Link
                  to={`/certificate/${certificate.courseId}`}
                  className="mt-6 inline-flex rounded-2xl bg-[#00327D] px-5 py-3 text-xs font-black uppercase tracking-[0.25em] text-white transition-all hover:bg-[#0048B2]"
                >
                  Open Certificate
                </Link>
              </article>
            ))}
          </div>
        </div>
        <BottomNav />
      </main>
    </div>
  )
}
