import { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import BottomNav from '../components/layout/BottomNav';

interface Lesson {
    id: number;
    title: string;
    type: string;
    meta: string;
    file: string;
    status: 'verified' | 'uploading' | 'pending';
    progress: number;
}

interface Module {
    id: number;
    title: string;
    status: 'COMPLETE' | 'PENDING';
    lessons: Lesson[];
    description?: string;
}

const InstructorContentUploadPage = () => {
    const navigate = useNavigate();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [activeLessonId, setActiveLessonId] = useState<number | null>(null);
    
    // -- Interactive Logic --
    const [modules, setModules] = useState<Module[]>([
        {
            id: 1,
            title: 'Foundations',
            status: 'COMPLETE',
            lessons: [
                { id: 101, title: 'Lesson 1.1: The Curator\'s Eye', type: 'Video Content', meta: '12:45 min', file: 'uploaded_v1.mp4', status: 'verified', progress: 100 },
                { id: 102, title: 'Lesson 1.2: Aesthetic Principles', type: 'Video Content', meta: 'Uploading... 45%', file: '', progress: 45, status: 'uploading' },
                { id: 103, title: 'Lesson 1.3: Lighting Systems', type: 'Document Content', meta: 'No media attached', file: '', status: 'pending', progress: 0 }
            ]
        },
        {
            id: 2,
            title: 'Execution',
            status: 'PENDING',
            description: 'Finish Module 1 to start uploading here.',
            lessons: []
        }
    ]);

    const handleFileClick = (lessonId: number) => {
        setActiveLessonId(lessonId);
        fileInputRef.current?.click();
    };

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && activeLessonId) {
            simulateLessonUpload(activeLessonId, file.name);
        }
    };

    const simulateLessonUpload = (lessonId: number, fileName: string) => {
        setModules(prev => prev.map(mod => ({
            ...mod,
            lessons: mod.lessons.map(L => L.id === lessonId ? { ...L, status: 'uploading', progress: 10, meta: 'Uploading...' } : L)
        })));

        setTimeout(() => {
            setModules(prev => prev.map(mod => ({
                ...mod,
                lessons: mod.lessons.map(L => L.id === lessonId ? { 
                    ...L, 
                    status: 'verified', 
                    progress: 100, 
                    meta: 'Uploaded', 
                    file: fileName 
                } : L)
            })));
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-[#F7F9FB] font-inter text-[#191C1E] flex flex-col">
            <input type="file" ref={fileInputRef} onChange={onFileChange} className="hidden" />
            
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
                    <button className="hidden sm:block text-xs font-bold text-[#434653] hover:text-[#191C1E] bg-transparent border-none cursor-pointer transition-colors uppercase tracking-widest shrink-0">Save Draft</button>
                    <button className="bg-gradient-to-r from-[#00327D] to-[#2559BD] text-white px-5 sm:px-8 py-2.5 sm:py-3 rounded-xl font-bold text-xs hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary/20 border-none cursor-pointer shrink-0">
                        Publish Course
                    </button>
                </div>
            </header>

            {/* 2. PROGRESS STEPPER (Stitch Node Reference) */}
            <section className="bg-white border-b border-[#E0E3E5]/40 py-4 px-4 sm:px-6 lg:px-10 overflow-x-auto scrollbar-hide">
                <div className="min-w-fit md:max-w-7xl md:mx-auto flex items-center justify-start xl:justify-between gap-6 xl:gap-0">
                    {[
                        { label: 'Details', icon: 'info', status: 'COMPLETE' },
                        { label: 'Curriculum', icon: 'account_tree', status: 'COMPLETE' },
                        { label: 'Content', icon: 'cloud_upload', status: 'ACTIVE' },
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
                                { label: 'Course Identity', icon: 'info_outline', path: '#' },
                                { label: 'Module Hierarchy', icon: 'grid_view', path: '/instructor/curriculum-builder' },
                                { label: 'Content Upload', icon: 'cloud_upload', active: true },
                                { label: 'Assignment Builder', icon: 'assignment', path: '/instructor/assignment-builder' },
                                { label: 'Platform Preview', icon: 'visibility', path: '#' }
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

                    <div className="bg-[#191C1E] p-6 rounded-[2rem] text-white shadow-2xl relative overflow-hidden group">
                        <div className="relative z-10">
                            <span className="material-symbols-outlined text-[#57FAE9] mb-4">analytics</span>
                            <h4 className="text-sm font-black leading-tight mb-2 tracking-tight">Upload<br/>Statistics</h4>
                            <div className="space-y-4 my-6">
                                <div className="flex justify-between items-end">
                                    <span className="text-[9px] text-white/50 uppercase font-black">Storage</span>
                                    <span className="text-xs font-black">1.2 GB / 5GB</span>
                                </div>
                                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                    <div className="w-1/4 h-full bg-[#57FAE9] rounded-full"></div>
                                </div>
                            </div>
                            <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-[10px] font-bold transition-all border-none text-white cursor-pointer w-full">Manage Media</button>
                        </div>
                    </div>
                </aside>

                {/* 5. MAIN CONTENT WORKSPACE */}
                <main className="flex-1 space-y-10 pb-24 lg:pb-8">
                    <header>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter text-[#1C1B1F] font-manrope mb-2">Upload Content</h1>
                        <p className="text-[#434653] text-[15px] font-medium leading-relaxed max-w-xl">
                            Attach your primary teaching materials, video lectures, and support documents to each module.
                        </p>
                    </header>

                    <div className="space-y-8">
                        {modules.map(mod => (
                            <section key={mod.id} className="space-y-4">
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-[#E0E3E5]/40 flex items-center justify-center font-black text-[#00327D] text-sm">
                                        {mod.id}
                                    </div>
                                    <h2 className="text-lg font-black tracking-tight text-[#191C1E] font-manrope">Module {mod.id}: {mod.title}</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {mod.lessons.map(lesson => (
                                        <div key={lesson.id} className="bg-white rounded-[1.5rem] p-6 shadow-[0px_8px_24px_rgba(25,28,30,0.03)] ring-1 ring-[#E0E3E5]/30 hover:ring-[#00327D]/20 transition-all flex flex-col gap-4">
                                            <div className="flex items-start justify-between">
                                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                                                    lesson.status === 'verified' ? 'bg-[#E8F5E9] text-[#2E7D32]' : 
                                                    lesson.status === 'uploading' ? 'bg-[#D3E4FE] text-[#00419E]' : 
                                                    'bg-[#F2F4F6] text-[#737784]'
                                                }`}>
                                                    <span className="material-symbols-outlined text-xl">
                                                        {lesson.status === 'verified' ? 'check_circle' : 
                                                         lesson.status === 'uploading' ? 'cloud_sync' : 'draft'}
                                                    </span>
                                                </div>
                                                <button className="text-[#737784] hover:text-[#191C1E] transition-colors bg-transparent border-none cursor-pointer">
                                                    <span className="material-symbols-outlined text-lg">more_vert</span>
                                                </button>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-black text-[#191C1E] mb-1 line-clamp-1">{lesson.title}</h4>
                                                <span className="text-[10px] font-black text-[#737784] uppercase tracking-widest">{lesson.type} • {lesson.meta}</span>
                                            </div>

                                            {lesson.status === 'uploading' && (
                                                <div className="pt-2">
                                                    <div className="w-full h-1.5 bg-[#F2F4F6] rounded-full overflow-hidden mb-2">
                                                        <div className="h-full bg-[#00327D] transition-all" style={{ width: `${lesson.progress}%` }}></div>
                                                    </div>
                                                </div>
                                            )}

                                            {lesson.status === 'pending' ? (
                                                <button 
                                                    onClick={() => handleFileClick(lesson.id)}
                                                    className="mt-2 w-full bg-[#F2F4F6] hover:bg-[#E0E3E5] py-3 rounded-xl text-[10px] font-black uppercase tracking-widest text-[#191C1E] transition-colors border-none cursor-pointer"
                                                >
                                                    Select File
                                                </button>
                                            ) : (
                                                <div className="mt-2 flex items-center gap-2">
                                                    <span className="material-symbols-outlined text-xs text-[#00A651]">attachment</span>
                                                    <span className="text-[10px] font-bold text-[#434653] truncate">{lesson.file || 'No file attached'}</span>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                    
                                    {mod.lessons.length === 0 && (
                                        <div className="col-span-full py-12 bg-white rounded-[2rem] border-2 border-dashed border-[#E0E3E5] flex flex-col items-center justify-center text-center opacity-60">
                                            <span className="material-symbols-outlined text-2xl sm:text-3xl md:text-4xl text-[#737784] mb-4">folder_open</span>
                                            <p className="text-xs font-bold text-[#737784] uppercase tracking-widest">{mod.description}</p>
                                        </div>
                                    )}
                                </div>
                            </section>
                        ))}

                        <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-4 sm:gap-0 pt-10">
                            <button 
                                onClick={() => navigate('/instructor/curriculum-builder')} 
                                className="flex items-center justify-center w-full sm:w-auto gap-3 text-[#434653] font-bold text-[11px] bg-white px-6 py-4 sm:py-3 rounded-xl shadow-sm hover:translate-x-[-4px] transition-all border-none cursor-pointer uppercase tracking-widest"
                            >
                                <span className="material-symbols-outlined text-lg">west</span>
                                Module Structure
                            </button>
                            <button 
                                onClick={() => navigate('/instructor/assignment-builder')} 
                                className="w-full sm:w-auto justify-center bg-gradient-to-r from-[#00327D] to-[#2559BD] text-white px-4 sm:px-6 lg:px-10 py-4 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] shadow-2xl shadow-primary/30 flex items-center gap-4 hover:translate-x-[4px] transition-all border-none cursor-pointer group"
                            >
                                Build Assignment
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-lg">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                </main>

                {/* 6. RIGHT CONTEXTUAL SIDEBAR */}
                <aside className="w-full xl:w-80 shrink-0 space-y-8 mt-4 xl:mt-0">
                    
                    {/* Media Guidelines Card */}
                    <div className="bg-[#191C1E] rounded-[2.5rem] px-4 py-6 sm:px-6 lg:p-8 text-white relative overflow-hidden group shadow-2xl">
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center text-[#57FAE9]">
                                    <span className="material-symbols-outlined text-xl">play_circle</span>
                                </div>
                                <span className="text-[10px] font-black tracking-[0.25em] uppercase text-white/40">Media Protocol</span>
                            </div>
                            
                            <h3 className="text-2xl font-black font-manrope leading-tight mb-4 tracking-tight">Optimizing Legacy Content</h3>
                            <p className="text-xs text-white/60 leading-relaxed mb-8 font-medium">
                                High-bitrate videos can buffer on mobile networks. We recommend H.264 encoding at 1080p for the perfect balance of clarity and speed.
                            </p>
                            
                            <div className="space-y-3">
                                {[
                                    { label: 'Resolution', val: '1920 x 1080' },
                                    { label: 'Encoding', val: 'H.264 / AAC' },
                                    { label: 'Max Filesize', val: '500 MB' }
                                ].map((spec) => (
                                    <div key={spec.label} className="flex justify-between items-center py-2 border-b border-white/5">
                                        <span className="text-[9px] font-black uppercase text-white/30 tracking-widest">{spec.label}</span>
                                        <span className="text-[10px] font-bold">{spec.val}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <span className="material-symbols-outlined text-[140px] text-white/5 absolute -right-8 -bottom-8 transition-transform group-hover:scale-110">video_settings</span>
                    </div>

                    {/* Support Bento */}
                    <div className="bg-white rounded-[2.5rem] px-4 py-6 sm:px-6 lg:p-8 shadow-[0px_12px_32px_rgba(25,28,30,0.04)] ring-1 ring-[#E0E3E5]/30">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-[#F2F4F6] rounded-2xl flex items-center justify-center text-[#00327D] mb-4">
                                <span className="material-symbols-outlined text-2xl">help_outline</span>
                            </div>
                            <h4 className="text-sm font-black text-[#191C1E] mb-2 font-manrope">Verification Issues?</h4>
                            <p className="text-[11px] font-medium text-[#737784] leading-relaxed mb-6">
                                If your file fails the automated verification check, our technical curators can assist you.
                            </p>
                            <button className="text-[10px] font-black uppercase tracking-[0.2em] text-[#00327D] bg-transparent border-none cursor-pointer hover:underline">Open Support Ticket</button>
                        </div>
                    </div>
                </aside>

            </div>
            <BottomNav />
        </div>
    );
};

export default InstructorContentUploadPage;
