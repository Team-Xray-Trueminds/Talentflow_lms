import { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import BottomNav from '../components/layout/BottomNav';

const InstructorCourseBuilder = () => {
    const navigate = useNavigate();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [coverImage, setCoverImage] = useState<string | null>(null);
    const contentEditableRef = useRef<HTMLDivElement>(null);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setCoverImage(url);
        }
    };

    const handleFormat = (command: string) => {
        document.execCommand(command, false);
        contentEditableRef.current?.focus();
    };

    return (
        <div className="min-h-screen bg-[#F7F9FB] font-inter text-[#191C1E] flex flex-col">
            <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleImageUpload} 
                className="hidden" 
                accept="image/*" 
            />
            
            {/* 1. EDITORIAL HEADER */}
            <header className="h-16 md:h-20 bg-[#F7F9FB]/80 backdrop-blur-xl sticky top-0 z-50 flex items-center justify-between px-4 md:px-10 w-full shrink-0 border-b border-[#E0E3E5]/20">
                <div className="flex items-center gap-4 md:gap-12">
                    <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-tr from-[#00327D] to-[#2559BD] rounded-lg md:rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                            <span className="material-symbols-outlined text-white text-xl md:text-2xl">layers</span>
                        </div>
                        <span className="text-lg md:text-xl font-black tracking-tighter text-[#1C1B1F] font-manrope">Talent Flow</span>
                    </div>
                </div>
                
                <div className="flex items-center gap-2 md:gap-6">
                    <button className="bg-gradient-to-r from-[#00327D] to-[#2559BD] text-white px-4 md:px-8 py-2 md:py-3 rounded-lg md:rounded-xl font-bold text-[10px] md:text-xs hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary/20 border-none cursor-pointer">
                        Publish
                    </button>
                </div>
            </header>

            {/* ... Stepper ... */}
            <section className="bg-white border-b border-[#E0E3E5]/40 py-4 px-4 md:px-10 overflow-x-auto no-scrollbar">
                <div className="max-w-7xl mx-auto flex items-center justify-between min-w-[600px] md:min-w-0">
                    {[
                        { label: 'Details', icon: 'info', status: 'ACTIVE' },
                        { label: 'Curriculum', icon: 'account_tree', status: 'PENDING' },
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
            <div className="max-w-[1440px] mx-auto w-full px-4 md:px-10 flex flex-col lg:flex-row gap-12 flex-1 pt-8 md:pt-12 pb-32">
                
                {/* 4. LEFT NAVIGATION SIDEBAR */}
                <aside className="w-full lg:w-56 shrink-0 space-y-10">
                    <div>
                        <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-[#737784] mb-6">Talent Flow Builder</h3>
                        <nav className="space-y-1">
                            {[
                                { label: 'Course Identity', icon: 'info_outline', active: true },
                                { label: 'Module Hierarchy', icon: 'grid_view', path: '/instructor/curriculum-builder' },
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

                    <div className="bg-[#191C1E] p-6 rounded-[2rem] text-white shadow-2xl relative overflow-hidden group">
                        <div className="relative z-10 text-center">
                            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-[#57FAE9]">
                                <span className="material-symbols-outlined text-2xl tracking-tighter">verified</span>
                            </div>
                            <h4 className="text-sm font-black leading-tight mb-2 tracking-tight">Identity<br/>Score: 84%</h4>
                            <p className="text-[10px] text-white/40 font-bold mb-6">Your course data is nearly complete for indexing.</p>
                            <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-[10px] font-bold transition-all border-none text-white cursor-pointer w-full">Optimize SEO</button>
                        </div>
                    </div>
                </aside>

                {/* 5. MAIN CONTENT WORKSPACE */}
                <main className="flex-1 space-y-10">
                    <header>
                        <h1 className="text-3xl md:text-4xl font-black tracking-tighter text-[#1C1B1F] font-manrope mb-2">Course Identity</h1>
                        <p className="text-[#434653] text-[15px] font-medium leading-relaxed max-w-xl">
                            Establish the structural foundation. Define your title, classification, and visual identity for the curriculum.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 gap-10">
                        {/* Course Title Card */}
                        <section className="bg-white rounded-[2.5rem] p-10 shadow-[0px_12px_40px_rgba(0,0,0,0.02)] ring-1 ring-[#E0E3E5]/30 space-y-8">
                             <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#737784]">Curator Classification</label>
                                <div className="relative group">
                                    <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-[#737784] group-focus-within:text-[#00327D] transition-colors">search</span>
                                    <input 
                                        type="text" 
                                        list="classifications"
                                        placeholder="Search or type manual classification..."
                                        className="w-full bg-[#F2F4F6] border-none rounded-2xl pl-14 pr-6 py-5 text-sm font-bold placeholder:text-[#C3C6D5]/60 focus:ring-2 focus:ring-[#00327D]/10 transition-all outline-none"
                                    />
                                    <datalist id="classifications">
                                        <option value="UI Architecture" />
                                        <option value="Advanced Frontend" />
                                        <option value="Product Strategy" />
                                        <option value="Visual Logic" />
                                        <option value="System Design" />
                                        <option value="Enterprise Engineering" />
                                    </datalist>
                                </div>
                                <p className="text-[10px] font-bold text-[#737784]/60 italic ml-2">Note: Custom classifications will be verified by our curators.</p>
                             </div>

                             <div className="space-y-4">
                                <label className="text-lg font-black font-manrope tracking-tight text-[#191C1E]">Master Title</label>
                                <input 
                                    type="text" 
                                    placeholder="e.g. Advanced Symmetry & Cognitive Systems" 
                                    className="w-full bg-[#F2F4F6] border-none rounded-2xl px-6 py-5 text-sm font-bold placeholder:text-[#C3C6D5]/60 focus:ring-2 focus:ring-[#00327D]/10 transition-all outline-none"
                                />
                             </div>

                             <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#737784]">Editorial Description</label>
                                <div className="bg-[#F2F4F6] rounded-2xl overflow-hidden">
                                     <div className="px-4 py-3 bg-[#E0E3E5]/40 flex items-center gap-4 border-b border-[#E0E3E5]/20">
                                         {['format_bold', 'format_italic', 'format_list_bulleted', 'link'].map(cmd => (
                                             <button 
                                                key={cmd}
                                                onClick={() => handleFormat(cmd)}
                                                className="material-symbols-outlined text-lg text-[#434653] hover:text-[#00327D] cursor-pointer bg-transparent border-none"
                                             >
                                                {cmd}
                                             </button>
                                         ))}
                                     </div>
                                     <div 
                                        ref={contentEditableRef}
                                        contentEditable 
                                        className="min-h-[160px] p-6 text-sm font-medium leading-relaxed outline-none focus:bg-white transition-all text-[#191C1E]" 
                                    />
                                </div>
                             </div>
                        </section>

                        <div className="flex items-center justify-end pt-4">
                            <button 
                                onClick={() => navigate('/instructor/curriculum-builder')} 
                                className="bg-gradient-to-r from-[#00327D] to-[#2559BD] text-white px-10 py-4 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] shadow-2xl shadow-primary/30 flex items-center gap-4 hover:translate-x-[4px] transition-all border-none cursor-pointer group"
                            >
                                Establish Curriculum
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-lg">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                </main>

                {/* 6. RIGHT CONTEXTUAL SIDEBAR */}
                <aside className="w-full lg:w-80 shrink-0 space-y-8">
                    
                    {/* Visual Identity Card */}
                    <div className="bg-white rounded-[2.5rem] p-8 shadow-[0px_12px_32px_rgba(25,28,30,0.04)] ring-1 ring-[#E0E3E5]/30 group">
                         <div className="flex items-center justify-between mb-8">
                             <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-[#737784]">Visual Identity</h4>
                             <span className="material-symbols-outlined text-[#737784]">photo_camera</span>
                         </div>
                         
                         <div 
                            onClick={() => fileInputRef.current?.click()}
                            className="aspect-square bg-[#F7F9FB] rounded-[2rem] border-2 border-dashed border-[#E0E3E5] flex flex-col items-center justify-center text-center p-6 cursor-pointer hover:bg-[#F2F4F6] transition-all overflow-hidden relative"
                        >
                            {coverImage ? (
                                <img src={coverImage} className="absolute inset-0 w-full h-full object-cover" alt="Cover" />
                            ) : (
                                <>
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-[#00327D] mb-4 group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-2xl">add_photo_alternate</span>
                                    </div>
                                    <p className="text-[10px] font-black text-[#191C1E] uppercase tracking-widest mb-2">Upload Hero Image</p>
                                    <p className="text-[9px] text-[#737784] font-medium leading-relaxed">Recommended:<br/>16:9 • 1920x1080px</p>
                                </>
                            )}
                         </div>
                    </div>

                    {/* Architect's Tip card */}
                    <div className="bg-[#191C1E] rounded-[2.5rem] p-8 text-white relative overflow-hidden group shadow-2xl">
                        <div className="relative z-10">
                            <span className="material-symbols-outlined text-[#57FAE9] mb-6">architecture</span>
                            <h3 className="text-xl font-black font-manrope leading-tight mb-4 tracking-tight">Identity Strategy</h3>
                            <p className="text-xs text-white/50 leading-relaxed font-medium">
                                Your course title is the first touchpoint in the student journey. Aim for precision and authority.
                            </p>
                            <div className="h-0.5 w-8 bg-[#57FAE9] mt-6" />
                        </div>
                        <span className="material-symbols-outlined text-[120px] text-white/5 absolute -right-6 -bottom-6 transition-transform group-hover:scale-110">lightbulb</span>
                    </div>
                </aside>

            </div>
            <BottomNav />
        </div>
    );
};

export default InstructorCourseBuilder;
