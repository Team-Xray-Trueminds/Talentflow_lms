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
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(87,250,233,0.16),_transparent_28%),linear-gradient(180deg,_#07111f_0%,_#0b1730_22%,_#eef4ff_22%,_#f6fbff_100%)] px-4 py-5 font-body text-[#EAF4FF] sm:px-6 md:px-8 md:py-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 print:hidden">
        <Link
          to="/learner/my-learning"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-3 text-[10px] font-black uppercase tracking-[0.24em] text-white/88 backdrop-blur-xl transition-all hover:border-[#57FAE9]/40 hover:text-[#57FAE9] sm:w-auto sm:justify-start sm:text-xs"
        >
          <span className="material-symbols-outlined text-base">arrow_back</span>
          Back to Learning
        </Link>
        <button
          onClick={handleDownload}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#57FAE9] px-5 py-3 text-[10px] font-black uppercase tracking-[0.24em] text-[#04111f] shadow-[0_18px_40px_rgba(87,250,233,0.28)] transition-all hover:scale-[1.02] sm:w-auto sm:text-xs"
        >
          <span className="material-symbols-outlined text-[18px]">download</span>
          Download Certificate
        </button>
      </div>

      <div
        id="certificate-content"
        className="relative mx-auto mt-6 w-full max-w-[1200px] overflow-hidden rounded-[28px] border border-[#57FAE9]/20 bg-[#09172a] shadow-[0_35px_120px_rgba(2,10,24,0.45)] sm:rounded-[32px] lg:aspect-[1.414/1] lg:rounded-[36px] print:mt-0 print:max-w-none"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(87,250,233,0.16),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(61,118,255,0.16),_transparent_26%),linear-gradient(145deg,_rgba(255,255,255,0.06),_rgba(255,255,255,0.02))]" />
        <div className="absolute inset-[12px] rounded-[20px] border border-white/10 sm:inset-[16px] sm:rounded-[24px] lg:inset-[18px] lg:rounded-[28px]" />
        <div className="absolute left-4 top-4 h-24 w-24 rounded-full bg-[#57FAE9]/10 blur-3xl sm:left-8 sm:top-8 sm:h-32 sm:w-32 lg:left-10 lg:top-10 lg:h-36 lg:w-36" />
        <div className="absolute bottom-4 right-4 h-28 w-28 rounded-full bg-[#3b82f6]/10 blur-3xl sm:bottom-8 sm:right-8 sm:h-36 sm:w-36 lg:bottom-10 lg:right-10 lg:h-40 lg:w-40" />

        <div className="relative flex h-full flex-col gap-10 p-5 sm:p-8 md:p-10 lg:justify-between lg:gap-12 lg:p-16">
          <header className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="min-w-0">
              <p className="text-[11px] font-black uppercase tracking-[0.42em] text-[#57FAE9]">TalentFlow Academy</p>
              <h1 className="mt-4 max-w-2xl text-[2rem] font-black leading-tight tracking-[-0.04em] text-white sm:mt-5 sm:text-[2.6rem] md:text-5xl lg:mt-6 lg:text-6xl">
                Certificate of Professional Completion
              </h1>
              <p className="mt-4 max-w-xl text-sm font-medium leading-6 text-[#B5C6DD] md:text-base md:leading-7">
                This credential recognizes demonstrated mastery, sustained execution, and successful completion of the guided learning path listed below.
              </p>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-white/6 px-5 py-4 text-left backdrop-blur-xl sm:px-6 sm:py-5 lg:min-w-[270px] lg:rounded-[28px] lg:text-right">
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#8DA5C2]">Credential ID</p>
              <p className="mt-3 break-all text-base font-black tracking-[0.08em] text-white sm:text-lg">{certificateId}</p>
              <p className="mt-4 text-[10px] font-black uppercase tracking-[0.28em] text-[#8DA5C2]">Issued</p>
              <p className="mt-2 text-sm font-bold text-[#DCEBFF]">{issuedDate}</p>
            </div>
          </header>

          <section className="grid gap-8 lg:grid-cols-[1.6fr_0.8fr] lg:items-end lg:gap-10">
            <div className="min-w-0">
              <p className="text-[11px] font-black uppercase tracking-[0.34em] text-[#8DA5C2]">Awarded To</p>
              <h2 className="mt-4 break-words text-[1.9rem] font-black leading-tight tracking-[0.08em] text-white sm:text-[2.5rem] md:text-5xl md:tracking-[0.12em]">
                {learnerName}
              </h2>
              <div className="mt-5 h-[2px] w-40 bg-gradient-to-r from-[#57FAE9] to-transparent" />

              <p className="mt-8 text-[11px] font-black uppercase tracking-[0.34em] text-[#8DA5C2]">Program Completed</p>
              <h3 className="mt-4 max-w-3xl text-[1.65rem] font-black leading-tight tracking-[-0.03em] text-[#F7FBFF] sm:text-[2rem] md:text-4xl">
                {courseTitle}
              </h3>
              <p className="mt-5 max-w-3xl text-sm font-medium leading-6 text-[#B5C6DD] md:text-base md:leading-7">
                Certified for completing the full learning journey, meeting evaluation standards, and demonstrating applied capability across the curriculum.
              </p>
            </div>

            <div className="rounded-[26px] border border-white/10 bg-white/6 p-5 backdrop-blur-xl sm:p-6 lg:rounded-[32px]">
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

          <footer className="flex flex-col gap-6 border-t border-white/10 pt-6 sm:pt-8 lg:mt-2 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#8DA5C2]">Authorized Signature</p>
              <p className="mt-5 text-2xl font-semibold italic text-[#57FAE9]">TalentFlow Board</p>
            </div>

            <div className="lg:text-right">
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#8DA5C2]">Accreditation Note</p>
              <p className="mt-3 max-w-md text-sm font-medium leading-6 text-[#B5C6DD] lg:ml-auto">
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
            aspect-ratio: auto !important;
          }
        }
      `}</style>
    </div>
  )
}
