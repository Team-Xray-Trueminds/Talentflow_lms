import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LearnerCoursePlayerPage = () => {
    const navigate = useNavigate();
    const [activeLessonId, setActiveLessonId] = useState(101);

    const curriculum = [
        {
            title: 'Module 1: Foundations',
            lessons: [
                { id: 101, title: 'Concept: The Architectural Curator', type: 'video', duration: '12:45', status: 'completed' },
                { id: 102, title: 'Visual Grammar & Tonal Logic', type: 'video', duration: '18:20', status: 'active' },
                { id: 103, title: 'Exercise: The Scaffolding Method', type: 'assignment', duration: '45m', status: 'locked' }
            ]
        },
        {
            title: 'Module 2: Advanced Interaction',
            lessons: [
                { id: 201, title: 'Kinetic Motion Systems', type: 'video', duration: '22:10', status: 'locked' },
                { id: 202, title: 'Glassmorphism & Depth Logic', type: 'video', duration: '15:30', status: 'locked' }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-[#000F29] text-white font-inter flex flex-col overflow-hidden">
            {/* 1. LAYERED HEADER */}
            <header className="h-20 bg-[#001946]/40 backdrop-blur-2xl border-b border-white/5 flex items-center justify-between px-8 shrink-0 z-50">
                <div className="flex items-center gap-8">
                    <button 
                        onClick={() => navigate(-1)} 
                        className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all border-none cursor-pointer text-white group"
                    >
                        <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">west</span>
                    </button>
                    <div className="h-6 w-px bg-white/10" />
                    <div>
                        <h1 className="text-base font-black tracking-tight font-manrope leading-none mb-1.5">Modern UI Design Principles</h1>
                        <p className="text-[10px] font-black text-[#57FAE9] uppercase tracking-[0.25em]">Session 1.2 • Visual Grammar & Logic</p>
                    </div>
                </div>

                <div className="flex items-center gap-10">
                    <div className="hidden xl:flex flex-col items-end">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Architectural Progress</span>
                            <span className="text-xs font-black text-[#57FAE9]">32%</span>
                        </div>
                        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                            <div className="w-1/3 h-full bg-[#57FAE9] rounded-full shadow-[0_0_12px_rgba(87,250,233,0.4)]"></div>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                        <button className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all border-none text-white cursor-pointer"><span className="material-symbols-outlined">settings</span></button>
                        <button className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all border-none text-white cursor-pointer"><span className="material-symbols-outlined">help</span></button>
                    </div>
                </div>
            </header>

            <div className="flex flex-1 overflow-hidden">
                {/* 2. PLAYER CORE CANVAS */}
                <main className="flex-1 overflow-y-auto bg-[#000F29] relative flex flex-col pt-12 px-12 pb-24">
                    <div className="max-w-[1400px] mx-auto w-full space-y-12">
                        
                        {/* Immersive Player Shell */}
                        <div className="w-full aspect-video bg-[#001C38] rounded-[3rem] shadow-[0px_48px_120px_rgba(0,0,0,0.5)] relative overflow-hidden group border border-white/5">
                            <img 
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&auto=format&fit=crop&q=80" 
                                className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[3000ms]" 
                                alt="Lesson Content"
                            />
                            
                            {/* Cinematic Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button className="w-24 h-24 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border-2 border-white/20 text-white shadow-2xl transform scale-90 hover:scale-100 group-hover:scale-100 transition-all duration-700 cursor-pointer">
                                    <span className="material-symbols-outlined text-5xl fill-1">play_arrow</span>
                                </button>
                            </div>

                            {/* Integrated Glass Controls */}
                            <div className="absolute bottom-10 left-10 right-10 p-6 bg-black/30 backdrop-blur-3xl border border-white/10 rounded-3xl flex items-center gap-8 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 duration-700">
                                <span className="material-symbols-outlined text-3xl cursor-pointer hover:text-[#57FAE9] transition-colors">play_circle</span>
                                <div className="flex-1 space-y-2">
                                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-white/40">
                                        <span>Current Execution</span>
                                        <span className="text-white">12:45 / 18:20</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-white/10 rounded-full relative overflow-hidden">
                                        <div className="absolute inset-y-0 left-0 w-[45%] bg-[#57FAE9] rounded-full"></div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <span className="material-symbols-outlined text-2xl cursor-pointer hover:text-[#57FAE9]">volume_up</span>
                                    <span className="material-symbols-outlined text-2xl cursor-pointer hover:text-[#57FAE9]">closed_caption</span>
                                    <span className="material-symbols-outlined text-2xl cursor-pointer hover:text-[#57FAE9]">fullscreen</span>
                                </div>
                            </div>
                        </div>

                        {/* Lesson Contextual Data */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                            <div className="lg:col-span-8 space-y-10">
                                <div>
                                    <h2 className="text-5xl font-black font-manrope tracking-tighter mb-6 text-white leading-tight">Visual Grammar & <br/>Tonal Logic</h2>
                                    <p className="text-[#B1C5FF]/70 leading-relaxed text-lg font-medium max-w-[90%]">
                                        Exploration into the structural integrity of user interfaces. We define how "Architectural Tones" establish focus without the noise of traditional 1px borders. This lesson covers the "Curator's Sweep" technique for clean typography hierarchy.
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    {['UI Systems', 'System Design', 'Visual Logic', 'Advanced Architecture'].map(tag => (
                                        <span key={tag} className="px-5 py-2.5 bg-white/5 border border-white/5 rounded-2xl text-[10px] font-black uppercase tracking-widest text-white/40">{tag}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="lg:col-span-4 bg-[#DAE2FF]/5 border border-white/5 rounded-[3rem] p-10 flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-[#57FAE9] rounded-[1.5rem] flex items-center justify-center text-[#001946] mb-6 shadow-2xl shadow-[#57FAE9]/20">
                                    <span className="material-symbols-outlined text-3xl">lightbulb</span>
                                </div>
                                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#57FAE9] mb-4">Architectural Protip</h4>
                                <p className="text-sm text-[#B1C5FF]/80 leading-relaxed font-medium italic">
                                    "When designing cinematic player states, ensure the background-blur doesn't exceed 24px to maintain hardware performance."
                                </p>
                            </div>
                        </div>
                    </div>
                </main>

                {/* 3. CURRICULUM ARCHITECTURE (Right Panel) */}
                <aside className="w-[450px] shrink-0 bg-[#001C38] border-l border-white/5 flex flex-col z-40">
                    <div className="p-10 sticky top-0 bg-[#001C38]/90 backdrop-blur-2xl z-10 border-b border-white/5 mb-4">
                        <div className="flex items-center justify-between mb-2">
                           <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">Curriculum Structure</h3>
                           <span className="text-[9px] font-black text-[#57FAE9] tracking-widest uppercase">12 Sessions Total</span>
                        </div>
                        <p className="text-lg font-black text-white font-manrope">Advanced UI Systems</p>
                    </div>

                    <div className="flex-1 overflow-y-auto px-6 pb-12 space-y-12">
                        {curriculum.map((mod, modIdx) => (
                            <div key={modIdx}>
                                <div className="px-4 flex items-center gap-3 mb-6">
                                   <div className="w-1.5 h-1.5 rounded-full bg-[#57FAE9]"></div>
                                   <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#57FAE9]">{mod.title}</h4>
                                </div>
                                <div className="space-y-2">
                                    {mod.lessons.map(lesson => (
                                        <button 
                                            key={lesson.id}
                                            onClick={() => {
                                                if (lesson.type === 'assignment') {
                                                    navigate(`/learner/assignment/${lesson.id}`);
                                                } else {
                                                    setActiveLessonId(lesson.id);
                                                }
                                            }}
                                            className={`w-full text-left px-5 py-5 rounded-[2rem] transition-all duration-500 flex items-start gap-5 border-none cursor-pointer group ${
                                                activeLessonId === lesson.id 
                                                ? 'bg-white text-[#001946] shadow-[0_20px_48px_rgba(0,0,0,0.3)]' 
                                                : 'text-white/50 hover:bg-white/5'
                                            }`}
                                        >
                                            <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${
                                                activeLessonId === lesson.id ? 'bg-[#001946] text-[#57FAE9]' : 
                                                lesson.status === 'completed' ? 'bg-[#57FAE9]/10 text-[#57FAE9]' : 
                                                lesson.status === 'locked' ? 'bg-white/5 text-white/10' : 
                                                lesson.type === 'assignment' ? 'bg-[#2559BD]/20 text-[#2559BD]' : 'bg-white/5 text-white/40'
                                            }`}>
                                                <span className="material-symbols-outlined text-[20px] font-black">
                                                    {lesson.status === 'locked' ? 'lock' : 
                                                     lesson.type === 'video' ? 'play_arrow' : 'assignment'}
                                                </span>
                                            </div>
                                            <div className="pt-0.5">
                                                <p className="text-xs font-black tracking-tight leading-tight mb-2 group-hover:translate-x-1 transition-transform">{lesson.title}</p>
                                                <div className="flex items-center gap-3">
                                                    <span className={`text-[9px] font-black uppercase tracking-[0.1em] ${activeLessonId === lesson.id ? 'text-[#001946]/60' : 'text-white/20'}`}>
                                                        {lesson.type} • {lesson.duration}
                                                    </span>
                                                    {lesson.status === 'completed' && activeLessonId !== lesson.id && (
                                                        <span className="material-symbols-outlined text-[14px] text-[#57FAE9] animate-pulse">check_circle</span>
                                                    )}
                                                </div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Fixed Module Footer */}
                    <div className="p-8 bg-[#001946]/40 border-t border-white/5">
                        <button className="w-full bg-[#57FAE9] text-[#001946] py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-[#57FAE9]/20 hover:scale-[1.02] active:scale-95 transition-all border-none cursor-pointer flex items-center justify-center gap-3">
                            <span className="material-symbols-outlined font-black">east</span>
                            Advance to Next Module
                        </button>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default LearnerCoursePlayerPage;
