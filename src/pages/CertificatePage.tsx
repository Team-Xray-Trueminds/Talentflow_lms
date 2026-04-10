import { Link, useParams } from 'react-router-dom'
import { useAuth } from '../components/auth/AuthProvider'

const certificateCatalog: Record<
  string,
  {
    title: string
    credential: string
    faculty: string
    role: string
    cohort: string
  }
> = {
  'modern-ui-design-principles': {
    title: 'Modern UI Design Principles',
    credential: 'TF-UI-2401',
    faculty: 'Julian Architect',
    role: 'Lead Experience Curator',
    cohort: 'Spring Cohort 2026',
  },
  'visual-logic-fundamentals': {
    title: 'Visual Logic Fundamentals',
    credential: 'TF-VL-1932',
    faculty: 'Naomi Vale',
    role: 'Senior Visual Systems Mentor',
    cohort: 'Winter Cohort 2026',
  },
}

function toTitleFromSlug(slug?: string) {
  if (!slug) return 'Professional Accreditation'

  return slug
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

export default function CertificatePage() {
  const { courseId } = useParams<{ courseId: string }>()
  const { user } = useAuth()

  const course = courseId ? certificateCatalog[courseId] : undefined
  const courseTitle = course?.title || toTitleFromSlug(courseId)
  const learnerName = (user?.fullName || 'TalentFlow Learner').toUpperCase()
  const issuedDate = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date())
  const certificateId = course?.credential || `TF-${(courseId || 'CERT').slice(0, 8).toUpperCase()}-2026`

  const handleDownload = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(87,250,233,0.16),_transparent_28%),linear-gradient(180deg,_#07111f_0%,_#0b1730_32%,_#eef4ff_32%,_#f6fbff_100%)] px-4 py-6 font-body text-[#EAF4FF] md:px-8 md:py-10">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 print:hidden">
        <Link
          to="/learner/my-learning"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-white/88 backdrop-blur-xl transition-all hover:border-[#57FAE9]/40 hover:text-[#57FAE9]"
        >
          <span className="material-symbols-outlined text-base">arrow_back</span>
          Back to Learning
        </Link>
        <button
          onClick={handleDownload}
          className="inline-flex items-center gap-2 rounded-full bg-[#57FAE9] px-5 py-3 text-xs font-black uppercase tracking-[0.24em] text-[#04111f] shadow-[0_18px_40px_rgba(87,250,233,0.28)] transition-all hover:scale-[1.02]"
        >
          <span className="material-symbols-outlined text-[18px]">download</span>
          Download Certificate
        </button>
      </div>

      <div
        id="certificate-content"
        className="relative mx-auto mt-6 aspect-[1.414/1] w-full max-w-[1200px] overflow-hidden rounded-[36px] border border-[#57FAE9]/20 bg-[#09172a] shadow-[0_35px_120px_rgba(2,10,24,0.45)] print:mt-0 print:max-w-none"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(87,250,233,0.16),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(61,118,255,0.16),_transparent_26%),linear-gradient(145deg,_rgba(255,255,255,0.06),_rgba(255,255,255,0.02))]" />
        <div className="absolute inset-[18px] rounded-[28px] border border-white/10" />
        <div className="absolute left-10 top-10 h-36 w-36 rounded-full bg-[#57FAE9]/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-[#3b82f6]/10 blur-3xl" />

        <div className="relative flex h-full flex-col justify-between p-8 md:p-12 lg:p-16">
          <header className="flex items-start justify-between gap-6">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.42em] text-[#57FAE9]">TalentFlow Academy</p>
              <h1 className="mt-6 max-w-2xl text-4xl font-black tracking-[-0.04em] text-white md:text-5xl lg:text-6xl">
                Certificate of Professional Completion
              </h1>
              <p className="mt-5 max-w-xl text-sm font-medium leading-7 text-[#B5C6DD] md:text-base">
                This credential recognizes demonstrated mastery, sustained execution, and successful completion of the guided learning path listed below.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/6 px-6 py-5 text-right backdrop-blur-xl">
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#8DA5C2]">Credential ID</p>
              <p className="mt-3 text-lg font-black tracking-[0.08em] text-white">{certificateId}</p>
              <p className="mt-4 text-[10px] font-black uppercase tracking-[0.28em] text-[#8DA5C2]">Issued</p>
              <p className="mt-2 text-sm font-bold text-[#DCEBFF]">{issuedDate}</p>
            </div>
          </header>

          <section className="grid items-end gap-10 lg:grid-cols-[1.6fr_0.8fr]">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.34em] text-[#8DA5C2]">Awarded To</p>
              <h2 className="mt-4 text-3xl font-black tracking-[0.12em] text-white md:text-5xl">
                {learnerName}
              </h2>
              <div className="mt-5 h-[2px] w-40 bg-gradient-to-r from-[#57FAE9] to-transparent" />

              <p className="mt-8 text-[11px] font-black uppercase tracking-[0.34em] text-[#8DA5C2]">Program Completed</p>
              <h3 className="mt-4 max-w-3xl text-2xl font-black tracking-[-0.03em] text-[#F7FBFF] md:text-4xl">
                {courseTitle}
              </h3>
              <p className="mt-5 max-w-3xl text-sm font-medium leading-7 text-[#B5C6DD] md:text-base">
                Certified for completing the full learning journey, meeting evaluation standards, and demonstrating applied capability across the curriculum.
              </p>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/6 p-6 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#8DA5C2]">Verification</p>
                  <p className="mt-2 text-lg font-black text-white">Authentic Award</p>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#57FAE9]/30 bg-[#57FAE9]/10 text-[#57FAE9]">
                  <span className="material-symbols-outlined text-[30px]">verified</span>
                </div>
              </div>

              <div className="mt-8 space-y-5">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#8DA5C2]">Faculty Lead</p>
                  <p className="mt-2 text-sm font-black text-white">{course?.faculty || 'TalentFlow Faculty Board'}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.22em] text-[#9BB4D1]">
                    {course?.role || 'Academic Review Council'}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#8DA5C2]">Cohort</p>
                  <p className="mt-2 text-sm font-bold text-[#DCEBFF]">{course?.cohort || 'TalentFlow Global Cohort 2026'}</p>
                </div>
              </div>
            </div>
          </section>

          <footer className="mt-10 flex items-end justify-between gap-8 border-t border-white/10 pt-8">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#8DA5C2]">Authorized Signature</p>
              <p className="mt-5 text-2xl font-semibold italic text-[#57FAE9]">TalentFlow Board</p>
            </div>

            <div className="text-right">
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#8DA5C2]">Accreditation Note</p>
              <p className="mt-3 max-w-md text-sm font-medium leading-6 text-[#B5C6DD]">
                This certificate is issued by TalentFlow Academy as a verified record of course completion and professional achievement.
              </p>
            </div>
          </footer>
        </div>
      </div>

      <style>{`
        @media print {
          @page {
            size: landscape;
            margin: 0;
          }

          body {
            margin: 0 !important;
            background: #09172a !important;
          }

          .print\\:hidden {
            display: none !important;
          }

          #certificate-content {
            border: none !important;
            border-radius: 0 !important;
            box-shadow: none !important;
            width: 100vw !important;
            height: 100vh !important;
          }
        }
      `}</style>
    </div>
  )
}
