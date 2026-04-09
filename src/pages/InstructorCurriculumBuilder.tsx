import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// ── Type Definitions ──────────────────────────────────────────────────────────
type LessonType = 'video' | 'resource' | 'assessment';

interface Lesson {
  id: number;
  title: string;
  type: LessonType;
  meta: string;
}

interface Module {
  id: number;
  title: string;
  lessons: Lesson[];
  minutesTotal: number;
}

// ── Helpers ────────────────────────────────────────────────────────────────────
const lessonIcon: Record<LessonType, string> = {
  video: 'play_circle',
  resource: 'description',
  assessment: 'assignment',
};

const lessonIconColor: Record<LessonType, string> = {
  video: 'text-brand-blue',
  resource: 'text-blue-400',
  assessment: 'text-teal-500',
};

const lessonTypeBadge: Record<LessonType, string> = {
  video: 'VIDEO CONTENT',
  resource: 'RESOURCE',
  assessment: 'ASSESSMENT',
};

// ── Initial Data ───────────────────────────────────────────────────────────────
const INITIAL_MODULES: Module[] = [
  {
    id: 1,
    title: 'Introduction to Architectural Theory',
    minutesTotal: 120,
    lessons: [
      { id: 1, title: 'Welcome & Course Objectives', type: 'video', meta: '12:00 MINS' },
      { id: 2, title: 'Foundations of Modern Design PDF', type: 'resource', meta: '15 PAGES' },
      { id: 3, title: 'Quiz: Architectural Eras', type: 'assessment', meta: 'DUE OCT 12' },
    ],
  },
  {
    id: 2,
    title: 'Spatial Planning & User Experience',
    minutesTotal: 85,
    lessons: [],
  },
];

// ── Component ──────────────────────────────────────────────────────────────────
export default function InstructorCurriculumBuilder() {
  const navigate = useNavigate();
  const [modules, setModules] = useState<Module[]>(INITIAL_MODULES);

  const totalLessons = modules.reduce((sum, m) => sum + m.lessons.length, 0);
  const estHours = (modules.reduce((sum, m) => sum + m.minutesTotal, 0) / 60).toFixed(1);

  const addModule = () => {
    const id = Date.now();
    setModules((prev) => [
      ...prev,
      { id, title: 'New Module', minutesTotal: 0, lessons: [] },
    ]);
  };

  const deleteModule = (moduleId: number) => {
    setModules((prev) => prev.filter((m) => m.id !== moduleId));
  };

  const addLesson = (moduleId: number) => {
    const newLesson: Lesson = {
      id: Date.now(),
      title: 'New Lesson',
      type: 'video',
      meta: '0:00 MINS',
    };
    setModules((prev) =>
      prev.map((m) =>
        m.id === moduleId ? { ...m, lessons: [...m.lessons, newLesson] } : m
      )
    );
  };

  return (
    <div className="flex min-h-screen font-sans bg-brand-page">

      {/* ══ LEFT SIDEBAR — hidden on mobile, always visible on desktop ══ */}
      <aside className="hidden md:flex w-52 shrink-0 flex-col bg-white min-h-screen sticky top-0 px-4 py-6 border-r border-brand-border">
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="w-9 h-9 rounded-xl bg-brand-blue flex items-center justify-center text-white font-black text-base shrink-0">A</div>
          <div>
            <p className="text-brand-navy font-extrabold text-sm leading-tight">Course Builder</p>
            <p className="text-brand-slate text-[10px] font-bold tracking-widest uppercase">V2.4 Enterprise</p>
          </div>
        </div>

        <nav className="flex flex-col gap-1 flex-1">
          <Link to="/instructor/dashboard" className="flex items-center gap-3 px-3 py-3 rounded-xl text-brand-slate hover:text-brand-navy hover:bg-brand-page transition-colors text-sm font-bold">
            <span className="material-symbols-outlined text-xl">dashboard</span>Dashboard
          </Link>
          <div className="flex items-center gap-3 px-3 py-3 rounded-xl bg-brand-blue/10 text-brand-blue text-sm font-bold">
            <span className="material-symbols-outlined text-xl">menu_book</span>Curriculum
          </div>
          <Link to="#" className="flex items-center gap-3 px-3 py-3 rounded-xl text-brand-slate hover:text-brand-navy hover:bg-brand-page transition-colors text-sm font-bold">
            <span className="material-symbols-outlined text-xl">group</span>Students
          </Link>
          <Link to="#" className="flex items-center gap-3 px-3 py-3 rounded-xl text-brand-slate hover:text-brand-navy hover:bg-brand-page transition-colors text-sm font-bold">
            <span className="material-symbols-outlined text-xl">assignment</span>Assignments
          </Link>
          <Link to="/instructor/gradebook" className="flex items-center gap-3 px-3 py-3 rounded-xl text-brand-slate hover:text-brand-navy hover:bg-brand-page transition-colors text-sm font-bold">
            <span className="material-symbols-outlined text-xl">bar_chart</span>Analytics
          </Link>
          <button onClick={addModule} className="mt-6 w-full bg-brand-blue text-white font-bold text-sm py-3 rounded-xl cursor-pointer hover:opacity-90 transition-opacity active:scale-95">
            New Module
          </button>
        </nav>

        <div className="flex flex-col gap-1 pt-4 border-t border-brand-border">
          <Link to="#" className="flex items-center gap-3 px-3 py-3 rounded-xl text-brand-slate hover:text-brand-navy hover:bg-brand-page transition-colors text-sm font-bold">
            <span className="material-symbols-outlined text-xl">settings</span>Settings
          </Link>
          <Link to="#" className="flex items-center gap-3 px-3 py-3 rounded-xl text-brand-slate hover:text-brand-navy hover:bg-brand-page transition-colors text-sm font-bold">
            <span className="material-symbols-outlined text-xl">help</span>Support
          </Link>
        </div>
      </aside>

      {/* ══ MAIN CONTENT ══ */}
      <div className="flex flex-col flex-1 min-w-0">

        {/* Mobile header — hidden on desktop */}
        <header className="md:hidden sticky top-0 z-20 bg-white border-b border-brand-border">
          <div className="flex items-center justify-between px-4 py-3">
            <button onClick={() => navigate(-1)} className="text-brand-blue flex items-center bg-transparent outline-none cursor-pointer">
              <span className="material-symbols-outlined text-xl">arrow_back</span>
            </button>
            <span className="font-extrabold text-brand-navy text-[15px]">Curriculum Builder</span>
            <button className="text-brand-blue text-sm font-bold bg-transparent outline-none cursor-pointer">Save Draft</button>
          </div>
          <div className="px-4 pb-3">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-black tracking-widest uppercase text-brand-slate">STEP 2 OF 4</span>
              <span className="text-[11px] font-bold text-brand-blue">50% Complete</span>
            </div>
            <div className="w-full h-1.5 rounded-full overflow-hidden bg-brand-divider">
              <div className="w-1/2 h-full rounded-full bg-brand-blue"></div>
            </div>
          </div>
        </header>

        {/* Desktop header — hidden on mobile */}
        <header className="hidden md:flex h-16 bg-white border-b border-brand-border items-center justify-between px-8 sticky top-0 z-20 shrink-0">
          <span className="font-black text-brand-navy text-lg tracking-tight">ArchitectCurator</span>
          <nav className="flex items-center gap-6">
            <button className="text-sm font-bold text-brand-slate hover:text-brand-dark transition-colors bg-transparent outline-none cursor-pointer">Preview</button>
            <button className="text-sm font-bold text-brand-blue border-b-2 border-brand-blue pb-0.5 bg-transparent outline-none cursor-pointer">Drafts</button>
            <button className="text-sm font-bold text-brand-slate hover:text-brand-dark transition-colors bg-transparent outline-none cursor-pointer">Publish</button>
          </nav>
          <div className="flex items-center gap-6">
            <button className="text-sm font-bold text-brand-blue hover:opacity-80 transition-opacity bg-transparent outline-none cursor-pointer">Curriculum View</button>
            <button className="text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-sm bg-brand-navy hover:opacity-90 transition-opacity cursor-pointer active:scale-95">Save Changes</button>
            <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 shadow-sm">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOob43RVwc0CW12KB2DOBUtlHf-ew8BT46J0LkWSlklYMWRvTXlfGxTj8f_hGk8DCjxYTFV0FYgMSdkIchWPU2n2hN7odES9Y79DF2NjAD-N8AdXIh5Jqwuyr3gqbeQ6gQO9lHGathfnZ8t7xnUX7qARnkKnypxwL4TgPHwGE30jrZpU1GLNKHnIrF5FFm7Q1ZpHlQVl4KPpTMjINcfIXSwtWpEM4tMy34N59zfkcEZQrDOxVXaSd1q8rnaMb9573149iRc69wJQw" alt="User" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>

        {/* Page body */}
        <div className="flex flex-1 gap-8 px-4 md:px-8 pt-6 md:pt-8 pb-36">

          {/* Center column */}
          <div className="flex-1 min-w-0 flex flex-col">

            {/* Desktop heading — hidden on mobile */}
            <div className="hidden md:block mb-8">
              <p className="text-xs font-black tracking-[0.15em] uppercase text-brand-slate mb-2">STEP 2 OF 4</p>
              <h1 className="text-4xl font-black text-brand-navy tracking-tight mb-3">Curriculum Structure</h1>
              <p className="text-sm text-brand-slate font-medium max-w-lg leading-relaxed">
                Define the roadmap for your students. Organize content into modules and draggable
                lessons to create a logical learning progression.
              </p>
            </div>

            {/* Mobile heading — hidden on desktop */}
            <div className="md:hidden mb-5">
              <h1 className="text-3xl font-black text-brand-navy tracking-tight mb-2">Curriculum Structure</h1>
              <p className="text-sm text-brand-slate font-medium leading-relaxed">
                Design the architectural flow of your course. Organize content into modules and lessons
                to create a logical learning path for your students.
              </p>
            </div>

            {/* Mobile Add Module button — hidden on desktop */}
            <button onClick={addModule} className="md:hidden w-full flex items-center justify-center gap-2 bg-brand-blue text-white font-bold text-sm py-3.5 rounded-xl mb-5 cursor-pointer hover:opacity-90 transition-opacity active:scale-95">
              <span className="material-symbols-outlined text-xl">add</span>
              Add Module
            </button>

            {/* Module list */}
            <div className="flex flex-col gap-4 md:gap-5">
              {modules.map((mod, modIndex) => (
                <div key={mod.id} className="rounded-2xl border border-brand-border bg-white overflow-hidden shadow-sm">
                  {/* Module header */}
                  <div className="flex items-center gap-4 px-4 md:px-6 py-4">
                    <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-brand-navy text-white flex items-center justify-center text-sm font-black shrink-0">
                      {modIndex + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-brand-dark text-[15px]">{mod.title}</p>
                      <p className="text-xs text-brand-slate font-medium mt-0.5">
                        {mod.lessons.length} Lessons • {mod.minutesTotal} Minutes Total
                      </p>
                    </div>
                    {/* Desktop controls */}
                    <button className="hidden md:flex text-brand-slate hover:text-brand-dark transition-colors cursor-pointer bg-transparent outline-none">
                      <span className="material-symbols-outlined text-xl">drag_indicator</span>
                    </button>
                    <button onClick={() => deleteModule(mod.id)} className="hidden md:flex text-brand-slate hover:text-red-500 transition-colors cursor-pointer bg-transparent outline-none">
                      <span className="material-symbols-outlined text-xl">delete</span>
                    </button>
                    {/* Mobile controls */}
                    <button className="md:hidden text-brand-slate cursor-pointer bg-transparent outline-none">
                      <span className="material-symbols-outlined text-xl">edit</span>
                    </button>
                    <button className="md:hidden text-brand-slate cursor-pointer bg-transparent outline-none">
                      <span className="material-symbols-outlined text-xl">more_vert</span>
                    </button>
                  </div>

                  {/* Lessons */}
                  {mod.lessons.length > 0 && (
                    <div className="border-t border-brand-border">
                      {mod.lessons.map((lesson) => (
                        <div key={lesson.id} className="flex items-center gap-4 px-4 md:px-6 py-4 border-b border-brand-border last:border-b-0 hover:bg-brand-page transition-colors">
                          <span className={`material-symbols-outlined text-2xl ${lessonIconColor[lesson.type]}`}>
                            {lessonIcon[lesson.type]}
                          </span>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-brand-dark text-sm">{lesson.title}</p>
                            <p className="text-[11px] font-bold text-brand-slate mt-0.5 tracking-wide">
                              <span>{lessonTypeBadge[lesson.type]}</span>
                              <span className="mx-2 opacity-40">•</span>
                              <span>{lesson.meta}</span>
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Empty state — only shown on mobile for modules with no lessons */}
                  {mod.lessons.length === 0 && (
                    <div className="md:hidden border-t border-brand-border px-6 py-8 flex flex-col items-center text-center">
                      <span className="material-symbols-outlined text-[40px] text-brand-divider mb-3">inbox</span>
                      <p className="text-sm font-bold text-brand-dark mb-1">No lessons yet</p>
                      <p className="text-xs text-brand-slate font-medium mb-4 max-w-[200px] leading-relaxed">
                        Start building this module by adding your first lesson, video, or assignment.
                      </p>
                      <button onClick={() => addLesson(mod.id)} className="flex items-center gap-2 text-sm font-bold text-brand-blue border border-brand-blue px-5 py-2.5 rounded-xl cursor-pointer hover:bg-brand-blue hover:text-white transition-colors bg-transparent">
                        <span className="material-symbols-outlined text-lg">add</span>
                        Add Lesson
                      </button>
                    </div>
                  )}

                  {/* Add Lesson — always shown on desktop; only shown on mobile when lessons exist */}
                  <div className={`px-4 md:px-6 py-4 border-t border-brand-border ${mod.lessons.length === 0 ? 'hidden md:block' : ''}`}>
                      <button onClick={() => addLesson(mod.id)} className="flex items-center gap-2 text-sm font-bold text-brand-slate hover:text-brand-blue transition-colors cursor-pointer bg-transparent outline-none">
                        <span className="material-symbols-outlined text-xl">add_circle</span>
                        Add Lesson
                      </button>
                    </div>
                </div>
              ))}

              {/* Create New Module */}
              <button onClick={addModule} className="w-full border-2 border-dashed border-brand-divider rounded-2xl py-5 flex items-center justify-center gap-3 text-brand-slate font-bold text-sm hover:border-brand-blue hover:text-brand-blue transition-colors cursor-pointer bg-transparent">
                <span className="material-symbols-outlined text-xl">add_box</span>
                Create New Module
              </button>
            </div>

            {/* Mobile Architect's Tip — hidden on desktop */}
            <div className="md:hidden mt-6 rounded-2xl overflow-hidden shadow-sm border border-brand-border bg-white">
              <div className="p-5">
                <h3 className="font-extrabold text-brand-dark text-base mb-2">Architect's Tip</h3>
                <p className="text-xs text-brand-slate leading-relaxed font-medium mb-4">
                  Courses with at least 5 lessons in the first module see a 46% higher completion rate.
                  Try breaking down complex topics into smaller, 5-10 minute segments.
                </p>
              </div>
              <div className="h-36 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=600&auto=format&fit=crop&q=60" alt="Architect tip" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* ══ RIGHT SIDEBAR — hidden on mobile, visible on desktop ══ */}
          <div className="hidden md:flex w-[280px] shrink-0 flex-col gap-5">

            {/* Progress — top of right column */}
            <div className="flex flex-col items-end gap-2">
              <span className="text-sm font-bold text-brand-blue whitespace-nowrap">50% Complete</span>
              <div className="w-full h-2 rounded-full overflow-hidden bg-brand-divider">
                <div className="w-1/2 h-full rounded-full bg-brand-blue"></div>
              </div>
            </div>

            {/* Tip card */}
            <div className="rounded-2xl overflow-hidden shadow-sm border border-brand-border bg-white">
              <div className="relative h-36">
                <img src="https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=600&auto=format&fit=crop&q=60" alt="Architect tip" className="w-full h-full object-cover" />
                <span className="absolute bottom-3 left-3 bg-brand-tip-accent text-brand-tip-bg text-[10px] font-black px-3 py-1 rounded-full tracking-widest uppercase">
                  ARCHITECT TIP
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-extrabold text-brand-dark text-base mb-2">Optimal Lesson Count</h3>
                <p className="text-xs text-brand-slate leading-relaxed font-medium">
                  Data shows that courses with <strong>5-8 lessons per module</strong> have a{' '}
                  <strong>+24% higher completion rate</strong>. Breaking complex topics into bite-sized
                  10-15 minute videos prevents cognitive overload.
                </p>
                <button className="mt-4 text-brand-blue text-xs font-bold flex items-center gap-1 hover:opacity-70 transition-opacity cursor-pointer bg-transparent outline-none">
                  Read Research Paper
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Course Summary card */}
            <div className="rounded-2xl bg-brand-navy p-6 text-white">
              <p className="text-[10px] font-black tracking-[0.2em] uppercase text-white/50 mb-5">COURSE SUMMARY</p>
              <div className="flex flex-col gap-4 mb-5">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-white/70">Total Modules</span>
                  <span className="text-2xl font-black">{String(modules.length).padStart(2, '0')}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-white/70">Total Lessons</span>
                  <span className="text-2xl font-black">{String(totalLessons).padStart(2, '0')}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-white/70">Est. Duration</span>
                  <span className="text-2xl font-black">{estHours}h</span>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white/10 rounded-xl p-3 mt-2">
                <span className="material-symbols-outlined text-brand-tip-accent text-xl shrink-0 mt-0.5">bolt</span>
                <p className="text-[11px] text-white/80 font-medium leading-relaxed">
                  Course pacing is currently "Moderate". Perfect for professional development.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop sticky footer — hidden on mobile */}
        <div className="hidden md:block fixed bottom-0 left-52 right-0 z-50 bg-gradient-to-t from-brand-page via-brand-page/70 to-transparent pb-6 pt-10 pointer-events-none">
          <div className="flex items-center justify-between px-8 pointer-events-auto">
            <button onClick={() => navigate('/instructor/course-builder')} className="flex items-center gap-2 text-sm font-bold text-brand-slate hover:text-brand-dark transition-colors cursor-pointer bg-transparent outline-none">
              <span className="material-symbols-outlined text-xl">arrow_back</span>
              Previous Step
            </button>
            <button className="text-sm font-bold text-brand-slate hover:text-brand-dark transition-colors cursor-pointer bg-transparent outline-none">
              Save as Draft
            </button>
            <button onClick={() => navigate('/instructor/content-upload')} className="flex items-center gap-2 text-white px-7 py-4 rounded-2xl font-bold text-sm bg-brand-blue shadow-lg hover:opacity-90 transition-opacity cursor-pointer active:scale-95">
              Next Step: Content Upload
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Mobile sticky footer — hidden on desktop */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-brand-border px-4 py-3 flex items-center justify-between gap-3">
          <button onClick={() => navigate('/instructor/course-builder')} className="flex items-center gap-1.5 text-sm font-bold text-brand-slate cursor-pointer bg-transparent outline-none">
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            Previous Step
          </button>
          <button onClick={() => navigate('/instructor/content-upload')} className="flex items-center gap-2 text-white px-6 py-3 rounded-xl font-bold text-sm bg-brand-blue shadow cursor-pointer active:scale-95">
            Next Step
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </button>
        </div>

      </div>
    </div>
  );
}
