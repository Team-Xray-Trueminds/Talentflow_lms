import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import BottomNav from '../components/layout/BottomNav';

const InstructorAssignmentBuilderPage = () => {
    const navigate = useNavigate();
    
    // -- Form State --
    const [title, setTitle] = useState('Urban Spatial Analysis: High-Density Mixed Use');
    const [brief, setBrief] = useState('Design a multi-story mixed-use complex that prioritizes pedestrian permeability and vertical green spaces. Your analysis should include solar studies, wind flow diagrams, and a clear program distribution for the proposed site in downtown Seattle.');
    const [dueDate, setDueDate] = useState('');
    const [points, setPoints] = useState('100');
    const [fileTypes, setFileTypes] = useState(['PDF', 'DWG', 'RVT', 'JPEG', 'ZIP']);
    const [maxSize, setMaxSize] = useState('100 MB');

    return (
        <div className="min-h-screen bg-[#F7F9FB] font-inter text-[#191C1E] flex flex-col">
            {/* 1. EDITORIAL HEADER */}
            <header className="h-20 bg-[#F7F9FB]/80 backdrop-blur-xl sticky top-0 z-50 flex items-center justify-between px-4 sm:px-6 lg:px-10 w-full shrink-0">
                <div className="flex items-center gap-12">
                    <div className="flex items-center gap-3">
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
                
                <div className="flex items-center gap-6">
                    <button className="text-xs font-bold text-[#434653] hover:text-[#191C1E] bg-transparent border-none cursor-pointer transition-colors uppercase tracking-widest">Save Progress</button>
                    <button className="bg-gradient-to-r from-[#00327D] to-[#2559BD] text-white px-8 py-3 rounded-xl font-bold text-xs hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary/20 border-none cursor-pointer">
                        Finalize & Publish
                    </button>
                </div>
            </header>

            {/* 2. PROGRESS STEPPER (Stitch Node Reference) */}
            <section className="bg-white border-b border-[#E0E3E5]/40 py-4 px-4 sm:px-6 lg:px-10">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {[
                        { label: 'Details', icon: 'info', status: 'COMPLETE' },
                        { label: 'Curriculum', icon: 'account_tree', status: 'COMPLETE' },
                        { label: 'Content', icon: 'cloud_upload', status: 'COMPLETE' },
                        { label: 'Assignment', icon: 'assignment', status: 'ACTIVE' },
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
            <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-10 flex gap-12 flex-1 pt-12 pb-24">
                
                {/* 4. LEFT NAVIGATION SIDEBAR */}
                <aside className="w-56 shrink-0 space-y-10">
                    <div>
                        <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-[#737784] mb-6">Talent Flow Builder</h3>
                        <nav className="space-y-1">
                            {[
                                { label: 'Course Identity', icon: 'info_outline', path: '#' },
                                { label: 'Module Hierarchy', icon: 'grid_view', path: '/instructor/curriculum-builder' },
                                { label: 'Content Upload', icon: 'cloud_upload', path: '/instructor/content-upload' },
                                { label: 'Assignment Builder', icon: 'assignment', active: true },
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

                    <div className="bg-gradient-to-br from-[#00327D] to-[#2559BD] p-6 rounded-[2rem] text-white shadow-2xl shadow-primary/20 relative overflow-hidden group">
                        <div className="relative z-10">
                            <span className="material-symbols-outlined text-[#57FAE9] mb-4">bolt</span>
                            <h4 className="text-sm font-black leading-tight mb-2 tracking-tight">Need expert<br/>guidance?</h4>
                            <p className="text-[10px] text-white/70 leading-relaxed mb-6 font-medium">Access our architectural design principles library.</p>
                            <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-[10px] font-bold transition-all border-none text-white cursor-pointer backdrop-blur-md">View Docs</button>
                        </div>
                        <span className="material-symbols-outlined text-[100px] text-white/5 absolute -right-6 -bottom-6 transition-transform group-hover:scale-110">lightbulb_circle</span>
                    </div>
                </aside>

                {/* 5. MAIN CONTENT WORKSPACE */}
                <main className="flex-1 space-y-10 pb-24 lg:pb-8">
                    <header>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter text-[#1C1B1F] font-manrope mb-2">Build Final Assignment</h1>
                        <p className="text-[#434653] text-[15px] font-medium leading-relaxed max-w-xl">
                            The capstone project represents the culmination of this track. Define rigorous parameters for technical analysis and aesthetic execution.
                        </p>
                    </header>

                    <div className="space-y-8">
                        {/* Assignment Definition Card */}
                        <section className="bg-white rounded-[2.5rem] px-4 py-6 sm:px-6 lg:p-10 shadow-[0px_12px_32px_rgba(25,28,30,0.04)] ring-1 ring-[#E0E3E5]/30">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-[#F2F4F6] rounded-2xl flex items-center justify-center text-[#00327D]">
                                    <span className="material-symbols-outlined text-2xl">subject</span>
                                </div>
                                <div>
                                    <h2 className="text-xl font-black text-[#191C1E] font-manrope leading-none">Assignment Protocol</h2>
                                    <p className="text-xs font-bold text-[#737784] mt-1.5 uppercase tracking-widest leading-none">Primary Definition</p>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div className="group">
                                    <label className="block text-[10px] font-black text-[#737784] mb-3 uppercase tracking-[0.2em]">Assignment Title</label>
                                    <input 
                                        type="text" 
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        className="w-full bg-[#F2F4F6] border-none rounded-2xl px-6 py-4 text-sm font-bold text-[#191C1E] focus:ring-2 focus:ring-[#2559BD] outline-none transition-all placeholder:text-[#737784]/60"
                                        placeholder="e.g. Sustainable Urban Framework"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-[10px] font-black text-[#737784] mb-3 uppercase tracking-[0.2em]">Project Brief & Methodology</label>
                                    <textarea 
                                        value={brief}
                                        onChange={(e) => setBrief(e.target.value)}
                                        rows={6}
                                        className="w-full bg-[#F2F4F6] border-none rounded-2xl px-6 py-4 text-sm font-medium text-[#191C1E] leading-relaxed focus:ring-2 focus:ring-[#2559BD] outline-none resize-none transition-all"
                                        placeholder="Outline the technical requirements and creative objectives..."
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-8">
                                    <div>
                                        <label className="block text-[10px] font-black text-[#737784] mb-3 uppercase tracking-[0.2em]">Submission Deadline</label>
                                        <div className="relative group">
                                            <input 
                                                type="text" 
                                                placeholder="mm/dd/yyyy"
                                                value={dueDate}
                                                onChange={(e) => setDueDate(e.target.value)}
                                                className="w-full bg-[#F2F4F6] border-none rounded-2xl px-6 py-4 text-sm font-bold text-[#191C1E] outline-none focus:ring-2 focus:ring-[#2559BD] transition-all"
                                            />
                                            <span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 text-[#737784] group-focus-within:text-[#00327D] transition-colors">calendar_today</span>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-black text-[#737784] mb-3 uppercase tracking-[0.2em]">Weight (Points)</label>
                                        <div className="relative">
                                            <input 
                                                type="text" 
                                                value={points}
                                                onChange={(e) => setPoints(e.target.value)}
                                                className="w-full bg-[#F2F4F6] border-none rounded-2xl px-6 py-4 text-sm font-bold text-[#191C1E] outline-none focus:ring-2 focus:ring-[#2559BD] transition-all"
                                            />
                                            <span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 text-[#737784] opacity-40">grade</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Submission Parameters Card */}
                        <section className="bg-white rounded-[2.5rem] px-4 py-6 sm:px-6 lg:p-10 shadow-[0px_12px_32px_rgba(25,28,30,0.04)] ring-1 ring-[#E0E3E5]/30 overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-[#D3E4FE]/20 rounded-full -mr-24 -mt-24 blur-3xl"></div>
                            
                            <div className="flex items-center gap-4 mb-8 relative z-10">
                                <div className="w-12 h-12 bg-[#F2F4F6] rounded-2xl flex items-center justify-center text-[#00327D]">
                                    <span className="material-symbols-outlined text-2xl">checklist_rtl</span>
                                </div>
                                <div>
                                    <h2 className="text-xl font-black text-[#191C1E] font-manrope leading-none">Technical Specifications</h2>
                                    <p className="text-xs font-bold text-[#737784] mt-1.5 uppercase tracking-widest leading-none">Submission Requirements</p>
                                </div>
                            </div>

                            <div className="flex flex-col xl:flex-row gap-12 relative z-10">
                                <div className="flex-1">
                                    <label className="block text-[10px] font-black text-[#737784] mb-4 uppercase tracking-[0.2em]">Allowed Artifact Formats</label>
                                    <div className="flex flex-wrap gap-2.5">
                                        {['PDF', 'DWG', 'RVT', 'JPEG', 'ZIP', 'STP', 'MP4'].map(type => (
                                            <button 
                                                key={type} 
                                                className={`px-5 py-2.5 rounded-xl text-[11px] font-black transition-all border-none cursor-pointer ${
                                                    fileTypes.includes(type) 
                                                    ? 'bg-[#00327D] text-white shadow-lg shadow-primary/20 scale-105' 
                                                    : 'bg-[#F2F4F6] text-[#434653] hover:bg-[#E0E3E5]'
                                                }`}
                                                onClick={() => setFileTypes(prev => prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type])}
                                            >
                                                {type}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div className="w-full xl:w-64">
                                    <label className="block text-[10px] font-black text-[#737784] mb-4 uppercase tracking-[0.2em]">Volume Constraint (Max Size)</label>
                                    <div className="relative">
                                        <select 
                                            value={maxSize}
                                            onChange={(e) => setMaxSize(e.target.value)}
                                            className="w-full bg-[#F2F4F6] border-none rounded-2xl px-6 py-4 text-sm font-bold text-[#191C1E] appearance-none outline-none cursor-pointer focus:ring-2 focus:ring-[#2559BD] transition-all"
                                        >
                                            {['50 MB', '100 MB', '200 MB', '500 MB', '1 GB'].map(opt => (
                                                <option key={opt}>{opt}</option>
                                            ))}
                                        </select>
                                        <span className="material-symbols-outlined absolute right-6 top-1/2 -translate-y-1/2 text-[#737784] pointer-events-none">expand_more</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Navigation Actions */}
                        <div className="flex items-center justify-between pt-10">
                            <button 
                                onClick={() => navigate('/instructor/content-upload')} 
                                className="flex items-center gap-3 text-[#434653] font-bold text-[11px] bg-white px-6 py-3 rounded-xl shadow-sm hover:translate-x-[-4px] transition-all border-none cursor-pointer uppercase tracking-widest"
                            >
                                <span className="material-symbols-outlined text-lg">west</span>
                                Content Setup
                            </button>
                            <button 
                                onClick={() => navigate('/instructor/dashboard')} 
                                className="bg-gradient-to-r from-[#00327D] to-[#2559BD] text-white px-4 sm:px-6 lg:px-10 py-4 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] shadow-2xl shadow-primary/30 flex items-center gap-4 hover:scale-[1.05] active:scale-95 transition-all border-none cursor-pointer group"
                            >
                                Complete Path
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-lg">task_alt</span>
                            </button>
                        </div>
                    </div>
                </main>

                {/* 6. RIGHT CONTEXTUAL SIDEBAR */}
                <aside className="w-80 shrink-0 space-y-8">
                    
                    {/* Editorial Student Preview */}
                    <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0px_20px_48px_rgba(25,28,30,0.06)] ring-1 ring-[#E0E3E5]/40 group">
                        <div className="bg-[#191C1E] p-4 flex items-center justify-between">
                            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/50">Simulated Learner View</span>
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#E0E3E5]/20"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-[#E0E3E5]/20"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-[#E0E3E5]/20"></div>
                            </div>
                        </div>
                        <div className="px-4 py-6 sm:px-6 lg:p-8">
                            <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 bg-[#F2F4F6] relative group">
                                <img 
                                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                                    alt="Architecture analysis" 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#191C1E] via-transparent to-transparent opacity-40"></div>
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/20 backdrop-blur-md text-white text-[9px] font-black px-3 py-1.5 rounded-full tracking-widest uppercase border border-white/20 shadow-lg">Final Capstone</span>
                                </div>
                            </div>
                            
                            <h4 className="text-xl font-black text-[#191C1E] font-manrope mb-3 leading-tight leading-none">{title || 'Assignment Title'}</h4>
                            
                            <div className="flex items-center gap-5 mb-6">
                                <div className="flex items-center gap-2 text-[#737784]">
                                    <span className="material-symbols-outlined text-lg opacity-60">calendar_month</span>
                                    <span className="text-[10px] font-black uppercase tracking-widest">{dueDate || 'TBD'}</span>
                                </div>
                                <div className="flex items-center gap-2 text-[#737784]">
                                    <span className="material-symbols-outlined text-lg opacity-60">military_tech</span>
                                    <span className="text-[10px] font-black uppercase tracking-widest">{points} PTS</span>
                                </div>
                            </div>

                            <p className="text-xs font-medium text-[#434653] leading-relaxed mb-8 line-clamp-3">
                                {brief || 'Assignment parameters will appear here for learners once published.'}
                            </p>
                            
                            <div className="pt-6 border-t border-[#F2F4F6] flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#00327D] to-[#2559BD] flex items-center justify-center text-white font-black text-[11px] shadow-lg shadow-primary/20">
                                        TV
                                    </div>
                                    <div>
                                        <h5 className="text-[10px] font-black text-[#191C1E] uppercase tracking-widest mb-0.5">Faculty Lead</h5>
                                        <p className="text-[10px] font-medium text-[#737784]">Prof. TalentFlow</p>
                                    </div>
                                </div>
                                <span className="material-symbols-outlined text-[#737784] opacity-40">more_horiz</span>
                            </div>
                        </div>
                    </div>

                    {/* Designer Insight Bento */}
                    <div className="bg-[#BAF1EA]/30 rounded-[2.5rem] px-4 py-6 sm:px-6 lg:p-8 border-l-8 border-[#005049] relative overflow-hidden group">
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center text-[#005049] shadow-sm">
                                    <span className="material-symbols-outlined text-lg">lightbulb</span>
                                </div>
                                <span className="text-[10px] font-black text-[#005049] tracking-[0.25em] uppercase">Architectural Insight</span>
                            </div>
                            <p className="text-[11px] font-black text-[#005049]/80 leading-relaxed italic pr-4">
                                "Encourage submission of 'Process Narratives'. In technical design, the methodology often defines the professional value as much as the final output."
                            </p>
                        </div>
                        <div className="absolute -right-8 -bottom-8 opacity-[0.03] rotate-12 transition-transform group-hover:scale-125 duration-1000">
                            <span className="material-symbols-outlined text-[160px]">architecture</span>
                        </div>
                    </div>

                    {/* Technical Constraints Summary */}
                    <div className="bg-[#F2F4F6] rounded-[2.5rem] px-4 py-6 sm:px-6 lg:p-8">
                        <h4 className="text-[10px] font-black text-[#737784] uppercase tracking-[0.25em] mb-6">Validators</h4>
                        <div className="space-y-4">
                            {[
                                { label: 'Metadata Integrity', status: 'verified' },
                                { label: 'Artifact Compatibility', status: 'verified' },
                                { label: 'Grading Logic', status: 'pending' }
                            ].map((val, i) => (
                                <div key={i} className="flex items-center justify-between bg-white px-5 py-3 rounded-2xl shadow-sm">
                                    <span className="text-[10px] font-bold text-[#191C1E]">{val.label}</span>
                                    <span className={`material-symbols-outlined text-lg ${val.status === 'verified' ? 'text-[#00A651]' : 'text-[#737784] opacity-30'}`}>
                                        {val.status === 'verified' ? 'check_circle' : 'pending'}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                </aside>

            </div>
            <BottomNav />
        </div>
    );
};

export default InstructorAssignmentBuilderPage;
