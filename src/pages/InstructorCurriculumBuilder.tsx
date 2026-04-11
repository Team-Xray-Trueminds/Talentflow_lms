import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import BottomNav from '../components/layout/BottomNav';

const InstructorCurriculumBuilder = () => {
    const navigate = useNavigate();
    
    const [modules, setModules] = useState([
        {
            id: 1,
            title: 'Theoretical Fundamentals',
            lessons: [
                { id: 101, title: 'Session 1.1: Axial Symmetry', type: 'video', duration: '12:00' },
                { id: 102, title: 'Concept Document: Spatial Logic', type: 'document', duration: '15p' },
            ]
        },
        {
            id: 2,
            title: 'Core Execution',
            lessons: [
                { id: 201, title: 'Session 2.1: Materials & Texture', type: 'video', duration: '08:45' },
            ]
        }
    ]);

    const addModule = () => {
        const id = Date.now();
        setModules([...modules, { id, title: 'New Module Architecture', lessons: [] }]);
    };

    const addLesson = (moduleId: number) => {
        setModules(modules.map(m => m.id === moduleId ? {
            ...m,
            lessons: [...m.lessons, { id: Date.now(), title: 'Draft Lesson Concept', type: 'video', duration: '0:00' }]
        } : m));
    };

    return (
        <div className="min-h-screen bg-[#F7F9FB] font-inter text-[#191C1E] flex flex-col">
            
            {/* 1. EDITORIAL HEADER */}
            <header className="h-20 bg-[#F7F9FB]/80 backdrop-blur-xl sticky top-0 z-50 flex items-center justify-between px-4 sm:px-6 lg:px-10 w-full shrink-0">
                <div className="flex items-center gap-12">
                    <div className="flex items-center gap-3">
                        <Link to="/instructor/courses" className="lg:hidden w-8 h-8 flex items-center justify-center text-[#434653] hover:text-[#00327D] hover:bg-black/5 rounded-full transition-colors mr-1 cursor-pointer">
                            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                        </Link>
                        <div className="w-10 h-10 bg-gradient-to-tr from-[#00327D] to-[#2559BD] rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                            <span className="material-symbols-outlined text-white text-2xl">layers</span>
                        </div>
                        <span className="text-xl font-black tracking-tighter text-[#1C1B1F] font-manrope">Talent Flow</span>
                    </div>
                    
                    <nav className="hidden lg:flex items-center gap-8">
                        {[
                            { label: 'Dashboard', path: '/instructor/dashboard' },
                            { label: 'Curriculum', path: '/instructor/courses' },
                            { label: 'Gradebook', path: '/instructor/gradebook' },
                            { label: 'Analytics', path: '/instructor/analytics' }
                        ].map((item) => (
                            <Link 
                                key={item.label} 
                                to={item.path}
                                className="text-xs font-bold text-[#434653] hover:text-[#00327D] transition-colors bg-transparent border-none cursor-pointer uppercase tracking-widest no-underline"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>
                
                <div className="flex items-center gap-3 sm:gap-6">
                    <button 
                        onClick={() => navigate('/learner/course-player')}
                        className="hidden sm:block text-xs font-bold text-[#434653] hover:text-[#191C1E] bg-transparent border-none cursor-pointer transition-colors uppercase tracking-widest shrink-0"
                    >
                        Preview View
                    </button>
                    <button className="bg-gradient-to-r from-[#00327D] to-[#2559BD] text-white px-5 sm:px-8 py-2.5 sm:py-3 rounded-xl font-bold text-xs hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary/20 border-none cursor-pointer shrink-0">
                        Publish Course
                    </button>
                </div>
            </header>

            {/* 2. PROGRESS STEPPER */}
            <section className="bg-white border-b border-[#E0E3E5]/40 py-4 px-4 sm:px-6 lg:px-10 overflow-x-auto scrollbar-hide">
                <div className="min-w-fit md:max-w-7xl md:mx-auto flex items-center justify-start xl:justify-between gap-6 xl:gap-0">
                    {[
                        { label: 'Details', icon: 'info', status: 'COMPLETE' },
                        { label: 'Curriculum', icon: 'account_tree', status: 'ACTIVE' },
                        { label: 'Content', icon: 'cloud_upload', status: 'PENDING' },
                        { label: 'Assignment', icon: 'assignment', status: 'PENDING' },
                        { label: 'Review', icon: 'rate_review', status: 'PENDING' }
                    ].map((step, i) => (
                        <div key={step.label} className="flex items-center gap-3 group">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                                step.status === 'COMPLETE' ? 'bg-[#D3E4FE] text-[#00419E]' : 
                                step.status === 'ACTIVE' ? 'bg-[#00327D] text-white ring-4 ring-primary/10 shadow-lg' : 
                                'bg-[#F2F4F6] text-[#737784] opacity-50'
                            }`}>
                                <span className="material-symbols-outlined text-lg">
                                    {step.status === 'COMPLETE' ? 'check' : step.icon}
                                </span>
                            </div>
                            <span className={`text-xs font-bold tracking-tight ${
                                step.status === 'ACTIVE' ? 'text-[#00327D]' : 
                                step.status === 'COMPLETE' ? 'text-[#191C1E]' : 'text-[#737784] opacity-50'
                            }`}>
                                {step.label}
                            </span>
                            {i < 4 && <div className="hidden xl:block w-16 h-px bg-[#E0E3E5] mx-2" />}
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. LAYOUT WRAPPER */}
            <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-10 flex flex-col xl:flex-row gap-8 xl:gap-12 flex-1 pt-8 xl:pt-12 pb-24">
                
                {/* 4. LEFT NAVIGATION SIDEBAR */}
                <aside className="w-full xl:w-56 shrink-0 space-y-6 xl:space-y-10">
                    <div>
                        <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-[#737784] mb-6">Talent Flow Builder</h3>
                        <nav className="space-y-1">
                            {[
                                { label: 'Course Identity', icon: 'info_outline', path: '/instructor/course-builder' },
                                { label: 'Module Hierarchy', icon: 'grid_view', active: true },
                                { label: 'Content Upload', icon: 'cloud_upload', path: '/instructor/content-upload' },
                                { label: 'Assignment Builder', icon: 'assignment', path: '/instructor/assignment-builder' },
                                { label: 'Platform Preview', icon: 'visibility', path: '/learner/course-player' }
                            ].map((item) => (
                                <Link 
                                    key={item.label}
                                    to={item.path || '#'} 
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 no-underline ${
                                        item.active 
                                        ? 'bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.04)] text-[#00327D] font-bold ring-1 ring-[#00327D]/5' 
                                        : 'text-[#434653] font-medium hover:bg-white/60 hover:translate-x-1'
                                    }`}
                                >
                                    <span className={`material-symbols-outlined text-xl ${item.active ? 'text-[#00327D]' : 'text-[#737784] opacity-60'}`}>
                                        {item.icon}
                                    </span>
                                    <span className="text-xs">{item.label}</span>
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <button 
                        onClick={addModule}
                        className="w-full bg-[#191C1E] text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all border-none cursor-pointer shadow-xl flex items-center justify-center gap-3"
                    >
                        <span className="material-symbols-outlined text-lg">add_box</span>
                        Append Module
                    </button>
                </aside>

                {/* 5. MAIN CONTENT WORKSPACE */}
                <main className="flex-1 space-y-10 pb-24 lg:pb-8">
                    <header>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter text-[#1C1B1F] font-manrope mb-2">Module Hierarchy</h1>
                        <p className="text-[#434653] text-[15px] font-medium leading-relaxed max-w-xl">
                            Map out the educational sequence. Use modules to group logical concepts and lessons to deliver functional knowledge.
                        </p>
                    </header>

                    <div className="space-y-8">
                        {modules.map((mod, idx) => (
                            <section key={mod.id} className="bg-white rounded-[2.5rem] shadow-[0px_12px_40px_rgba(0,0,0,0.02)] ring-1 ring-[#E0E3E5]/30 overflow-hidden">
                                <div className="px-4 py-6 sm:px-6 lg:p-8 flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#F2F4F6] gap-4 sm:gap-0">
                                    <div className="flex items-center gap-4 sm:gap-6">
                                        <div className="w-12 h-12 bg-[#F2F4F6] rounded-2xl flex items-center justify-center text-[#191C1E] font-black font-manrope text-sm shrink-0">
                                            {idx + 1}
                                        </div>
                                        <div>
                                            <h3 className="text-base sm:text-lg font-black text-[#191C1E] font-manrope leading-tight">{mod.title}</h3>
                                            <p className="text-[10px] font-bold text-[#737784] uppercase tracking-widest mt-1">{mod.lessons.length} LESSONS DEFINED</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 self-end sm:self-auto">
                                        <button className="w-10 h-10 rounded-xl hover:bg-[#F2F4F6] flex items-center justify-center transition-all bg-transparent border-none cursor-pointer text-[#737784]"><span className="material-symbols-outlined text-xl">drag_indicator</span></button>
                                        <button className="w-10 h-10 rounded-xl hover:bg-[#FFDAD6] hover:text-[#BA1A1A] flex items-center justify-center transition-all bg-transparent border-none cursor-pointer text-[#737784]"><span className="material-symbols-outlined text-xl">delete</span></button>
                                    </div>
                                </div>

                                <div className="px-8 py-2">
                                    {mod.lessons.map(lesson => (
                                        <div key={lesson.id} className="flex items-center justify-between py-6 border-b border-[#F2F4F6] last:border-b-0 group">
                                            <div className="flex items-center gap-5">
                                                <div className="w-10 h-10 bg-[#F7F9FB] rounded-xl flex items-center justify-center text-[#00327D] shadow-sm">
                                                    <span className="material-symbols-outlined text-xl">{lesson.type === 'video' ? 'play_circle' : 'description'}</span>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-black text-[#191C1E]">{lesson.title}</p>
                                                    <p className="text-[9px] font-black text-[#737784] uppercase tracking-widest mt-1">{lesson.type} • {lesson.duration}</p>
                                                </div>
                                            </div>
                                            <button className="w-9 h-9 rounded-lg hover:bg-[#F2F4F6] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all bg-transparent border-none cursor-pointer text-[#737784]">
                                                <span className="material-symbols-outlined text-[18px]">edit</span>
                                            </button>
                                        </div>
                                    ))}
                                </div>

                                <div className="p-6 bg-[#F7F9FB]/50">
                                    <button 
                                        onClick={() => addLesson(mod.id)}
                                        className="w-full py-4 border-2 border-dashed border-[#E0E3E5] rounded-2xl text-[10px] font-black uppercase tracking-widest text-[#737784] hover:bg-white hover:border-[#00327D]/30 hover:text-[#00327D] transition-all bg-transparent cursor-pointer"
                                    >
                                        + Append Lesson Concept
                                    </button>
                                </div>
                            </section>
                        ))}

                        <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-4 sm:gap-0 pt-10">
                            <button 
                                onClick={() => navigate('/instructor/course-builder')} 
                                className="flex items-center justify-center w-full sm:w-auto gap-3 text-[#434653] font-bold text-[11px] bg-white px-6 py-4 sm:py-3 rounded-xl shadow-sm hover:translate-x-[-4px] transition-all border-none cursor-pointer uppercase tracking-widest"
                            >
                                <span className="material-symbols-outlined text-lg">west</span>
                                Identity Profile
                            </button>
                            <button 
                                onClick={() => navigate('/instructor/content-upload')} 
                                className="w-full sm:w-auto justify-center bg-gradient-to-r from-[#00327D] to-[#2559BD] text-white px-4 sm:px-6 lg:px-10 py-4 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] shadow-2xl shadow-primary/30 flex items-center gap-4 hover:translate-x-[4px] transition-all border-none cursor-pointer group"
                            >
                                Upload Content
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-lg">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                </main>

                {/* 6. RIGHT CONTEXTUAL SIDEBAR */}
                <aside className="w-full xl:w-80 shrink-0 space-y-8 mt-4 xl:mt-0">
                     {/* Curriculum Stats Card */}
                    <div className="bg-[#191C1E] rounded-[2.5rem] px-4 py-6 sm:px-6 lg:p-8 text-white relative overflow-hidden group shadow-2xl">
                        <div className="relative z-10">
                            <span className="material-symbols-outlined text-[#57FAE9] mb-6">view_module</span>
                            <h3 className="text-xl font-black font-manrope leading-tight mb-4 tracking-tight">Curriculum<br/>Optimization</h3>
                            <div className="space-y-4 my-8">
                                <div className="flex justify-between items-center py-2 border-b border-white/5">
                                    <span className="text-[9px] font-black uppercase text-white/30 tracking-widest">Total Lessons</span>
                                    <span className="text-xl font-black">12</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-white/5">
                                    <span className="text-[9px] font-black uppercase text-white/30 tracking-widest">Est. Duration</span>
                                    <span className="text-xl font-black">3h 45m</span>
                                </div>
                            </div>
                            <p className="text-[10px] text-white/40 font-bold leading-relaxed mb-6">
                                Professional learners prefer lessons between 8-15 minutes for maximum retention.
                            </p>
                            <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-[10px] font-bold transition-all border-none text-white cursor-pointer w-full">Audit Sequence</button>
                        </div>
                    </div>
                </aside>

            </div>
            <BottomNav />
        </div>
    );
};

export default InstructorCurriculumBuilder;
