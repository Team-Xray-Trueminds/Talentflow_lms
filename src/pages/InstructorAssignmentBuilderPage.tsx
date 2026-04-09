import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

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
        <div className="min-h-screen bg-[#F8F9FB] font-sans text-[#1E293B] flex flex-col">
            {/* Top Navigation */}
            <header className="h-16 bg-white border-b border-[#E2E8F0] flex items-center justify-between px-10 w-full z-50 shrink-0">
                <div className="flex items-center gap-10">
                    <span className="text-lg font-bold tracking-tight text-[#00327D]">Architectural Curator</span>
                    <nav className="flex gap-8 h-16">
                        <button onClick={() => navigate('/instructor/curriculum-builder')} className="text-[11px] font-bold text-[#64748B] hover:text-[#00327D] bg-transparent border-none cursor-pointer">Curriculum</button>
                        <button className="text-[11px] font-bold text-[#64748B] hover:text-[#00327D] bg-transparent border-none cursor-pointer">Students</button>
                        <button className="text-[11px] font-bold text-[#64748B] hover:text-[#00327D] bg-transparent border-none cursor-pointer">Analytics</button>
                        <button className="text-[11px] font-bold text-[#64748B] hover:text-[#00327D] bg-transparent border-none cursor-pointer">Resources</button>
                    </nav>
                </div>
                <div className="flex items-center gap-6">
                    <button className="text-[11px] font-bold text-[#64748B] hover:text-[#191C1E] bg-transparent border-none cursor-pointer">Save Draft</button>
                    <button className="bg-[#00327D] text-white px-6 py-2 rounded text-[11px] font-bold hover:bg-[#002864] border-none cursor-pointer shadow-sm">Publish</button>
                </div>
            </header>

            {/* Layout Wrapper - Unified Scroll (no isolated overflows) */}
            <div className="max-w-[1400px] mx-auto w-full px-10 flex items-stretch gap-12 flex-1 pb-20">
                
                {/* 1. LEFT SIDEBAR */}
                <aside className="w-52 flex flex-col pt-10 shrink-0">
                    <div className="mb-8 px-1">
                        <h3 className="text-[13px] font-bold text-[#00327D] mb-0.5 leading-tight">Course Wizard</h3>
                        <p className="text-[9px] text-[#64748B] font-bold uppercase tracking-wider">Step 4 of 4</p>
                    </div>

                    <nav className="space-y-0.5">
                        <Link to="#" className="w-full flex items-center gap-3 px-3 py-2.5 text-[11px] font-bold text-[#64748B] hover:bg-white rounded-lg transition-all no-underline">
                            <span className="material-symbols-outlined text-[18px] opacity-40">info</span>
                            Course Details
                        </Link>
                        <Link to="#" className="w-full flex items-center gap-3 px-3 py-2.5 text-[11px] font-bold text-[#64748B] hover:bg-white rounded-lg transition-all no-underline">
                            <span className="material-symbols-outlined text-[18px] opacity-40">grid_view</span>
                            Module Setup
                        </Link>
                        <Link to="/instructor/content-upload" className="w-full flex items-center gap-3 px-3 py-2.5 text-[11px] font-bold text-[#64748B] hover:bg-white rounded-lg transition-all no-underline">
                            <span className="material-symbols-outlined text-[18px] opacity-40">cloud_upload</span>
                            Content Upload
                        </Link>
                        <div className="w-full flex items-center gap-3 px-3 py-2.5 text-[11px] font-bold text-[#00327D] bg-white shadow-sm border-r-2 border-[#00327D] rounded-lg">
                            <span className="material-symbols-outlined text-[18px]">assignment</span>
                            Assignment Builder
                        </div>
                    </nav>

                    <div className="mt-auto pt-10">
                        <button className="w-full py-3 bg-[#E2E8F0] text-[#64748B] font-bold text-[11px] rounded flex items-center justify-center gap-2 border-none cursor-pointer hover:bg-[#D1D5DB] transition-colors">
                            <span className="material-symbols-outlined text-base">visibility</span>
                            Preview Course
                        </button>
                    </div>
                </aside>

                {/* Main Content Workspace */}
                <div className="flex-1 pt-10 flex flex-col">
                    <h1 className="text-2xl font-bold tracking-tight text-[#1E293B] mb-1">Build Final Assignment</h1>
                    <p className="text-[#64748B] text-[13px] font-medium mb-10">Define the parameters for the capstone portfolio project.</p>

                    <div className="space-y-8">
                        {/* Project Brief Card */}
                        <section className="bg-white rounded-xl p-8 shadow-sm border border-[#E2E8F0]/50">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="material-symbols-outlined text-[#00327D] text-xl">subject</span>
                                <h2 className="text-base font-bold text-[#1E293B]">Project Brief</h2>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-[11px] font-bold text-[#1E293B] mb-2 uppercase tracking-wide">Assignment Title</label>
                                    <input 
                                        type="text" 
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        className="w-full bg-[#F1F5F9]/60 border border-[#E2E8F0]/30 rounded-lg p-3.5 text-[13px] font-medium text-[#1E293B] focus:ring-1 focus:ring-[#00327D]/40 outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-bold text-[#1E293B] mb-2 uppercase tracking-wide">Detailed Brief</label>
                                    <textarea 
                                        value={brief}
                                        onChange={(e) => setBrief(e.target.value)}
                                        rows={5}
                                        className="w-full bg-[#F1F5F9]/60 border border-[#E2E8F0]/30 rounded-lg p-3.5 text-[13px] font-medium text-[#1E293B] leading-relaxed focus:ring-1 focus:ring-[#00327D]/40 outline-none resize-none transition-all"
                                    />
                                </div>
                                <div className="flex gap-6">
                                    <div className="flex-1">
                                        <label className="block text-[11px] font-bold text-[#1E293B] mb-2 uppercase tracking-wide">Due Date</label>
                                        <div className="relative">
                                            <input 
                                                type="text" 
                                                placeholder="mm/dd/yyyy"
                                                value={dueDate}
                                                onChange={(e) => setDueDate(e.target.value)}
                                                className="w-full bg-[#F1F5F9]/60 border border-[#E2E8F0]/30 rounded-lg p-3.5 text-[13px] font-medium text-[#1E293B] outline-none"
                                            />
                                            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-[#64748B] text-lg">calendar_today</span>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <label className="block text-[11px] font-bold text-[#1E293B] mb-2 uppercase tracking-wide">Total Points</label>
                                        <input 
                                            type="text" 
                                            value={points}
                                            onChange={(e) => setPoints(e.target.value)}
                                            className="w-full bg-[#F1F5F9]/60 border border-[#E2E8F0]/30 rounded-lg p-3.5 text-[13px] font-medium text-[#1E293B] outline-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Submission Requirements Card */}
                        <section className="bg-white rounded-xl p-8 border border-[#E2E8F0]/50 shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="material-symbols-outlined text-[#00327D] text-xl">checklist_rtl</span>
                                <h2 className="text-base font-bold text-[#1E293B]">Submission Requirements</h2>
                            </div>

                            <div className="flex gap-10">
                                <div className="flex-1">
                                    <label className="block text-[11px] font-bold text-[#1E293B] mb-3 uppercase tracking-wide">Allowed File Types</label>
                                    <div className="flex flex-wrap gap-2">
                                        {['PDF', 'DWG', 'RVT', 'JPEG', 'ZIP'].map(type => (
                                            <span 
                                                key={type} 
                                                className={`px-3 py-1.5 rounded-md text-[10px] font-bold transition-colors cursor-pointer border ${fileTypes.includes(type) ? 'bg-[#D3E4FE] text-[#00327D] border-[#00327D]/20' : 'bg-white text-[#64748B] border-[#E2E8F0]'}`}
                                                onClick={() => setFileTypes(prev => prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type])}
                                            >
                                                {type}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="w-56">
                                    <label className="block text-[11px] font-bold text-[#1E293B] mb-3 uppercase tracking-wide">Max File Size (MB)</label>
                                    <div className="relative">
                                        <select 
                                            value={maxSize}
                                            onChange={(e) => setMaxSize(e.target.value)}
                                            className="w-full bg-[#F1F5F9]/60 border border-[#E2E8F0]/30 rounded-lg p-3.5 text-[13px] font-medium text-[#1E293B] appearance-none outline-none cursor-pointer"
                                        >
                                            <option>50 MB</option>
                                            <option>100 MB</option>
                                            <option>200 MB</option>
                                            <option>500 MB</option>
                                        </select>
                                        <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-[#64748B] pointer-events-none">expand_more</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="flex justify-between items-center pt-8 border-t border-[#E2E8F0]">
                            <button onClick={() => navigate('/instructor/content-upload')} className="flex items-center gap-2 text-[#64748B] font-bold text-[11px] bg-transparent border-none cursor-pointer hover:text-[#1E293B]">
                                <span className="material-symbols-outlined text-base">arrow_back</span>
                                Previous Step
                            </button>
                            <button onClick={() => navigate('/instructor/dashboard')} className="bg-[#00327D] text-white px-8 py-2.5 rounded-lg font-bold text-[11px] shadow-lg shadow-[#00327D]/20 flex items-center gap-3 hover:translate-x-1 transition-all border-none cursor-pointer group">
                                Complete Setup
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-base">check_circle</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* 3. RIGHT SIDEBAR */}
                <aside className="w-[340px] shrink-0 pt-10 space-y-8 h-fit">
                    
                    {/* Student Preview Card */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-md border border-[#E2E8F0]/40">
                        <div className="bg-[#1E293B] p-3 flex items-center justify-between text-white">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">Student Preview</span>
                            <div className="flex gap-1">
                                <div className="w-2 h-2 rounded-full bg-[#FF5F57]"></div>
                                <div className="w-2 h-2 rounded-full bg-[#FFBD2E]"></div>
                                <div className="w-2 h-2 rounded-full bg-[#27C93F]"></div>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="w-full aspect-video rounded-lg overflow-hidden mb-5 bg-slate-900 border border-white/5 relative">
                                <img 
                                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                                    alt="Analysis Preview" 
                                    className="w-full h-full object-cover opacity-50 absolute inset-0"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white/20 text-4xl">play_circle</span>
                                </div>
                            </div>
                            <h4 className="text-lg font-bold text-[#1E293B] mb-3">Urban Spatial Analysis</h4>
                            <div className="flex items-center gap-5 mb-5">
                                <div className="flex items-center gap-1.5 text-[#64748B]">
                                    <span className="material-symbols-outlined text-base">calendar_today</span>
                                    <span className="text-[10px] font-bold">Oct 24, 2024</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-[#64748B]">
                                    <span className="material-symbols-outlined text-base">military_tech</span>
                                    <span className="text-[10px] font-bold">100 pts</span>
                                </div>
                            </div>
                            <p className="text-[11px] text-[#64748B] leading-relaxed mb-6 line-clamp-2">
                                Design a multi-story mixed-use complex that prioritizes pedestrian permeability and vertical green spaces...
                            </p>
                            <div className="pt-4 border-t border-[#F1F5F9] flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-[#D3E4FE] flex items-center justify-center text-[#00327D] font-bold text-[10px]">
                                    JD
                                </div>
                                <div>
                                    <h5 className="text-[10px] font-bold text-[#1E293B]">Reviewer</h5>
                                    <p className="text-[9px] font-medium text-[#64748B]">Arch. Jonathan Doe</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Architect Tip */}
                    <div className="bg-[#F1F9F8] rounded-xl p-6 border-l-4 border-[#0D9488] relative overflow-hidden group">
                        <div className="flex items-center gap-2 mb-3 relative z-10">
                            <span className="material-symbols-outlined text-[#0D9488] text-base">lightbulb</span>
                            <span className="text-[10px] font-bold text-[#0D9488] tracking-widest uppercase">Architect's Tip</span>
                        </div>
                        <p className="text-[11px] font-medium text-[#0D9488] leading-relaxed italic relative z-10">
                            "Encourage students to submit 'process sketches' alongside final renders. In the professional world, showing methodology is often more valuable than the final image."
                        </p>
                        <span className="material-symbols-outlined text-[80px] text-[#0D9488]/5 absolute -right-5 -bottom-5 transition-transform group-hover:scale-110">lightbulb</span>
                    </div>

                    {/* Setup Progress */}
                    <div className="px-1">
                        <h4 className="text-[9px] font-bold text-[#64748B] uppercase tracking-widest mb-6">Setup Progress</h4>
                        <div className="space-y-5">
                            {[
                                { label: 'Core details established', completed: true },
                                { label: 'Learning modules structured', completed: true },
                                { label: 'Resources & content linked', completed: true },
                                { label: 'Finalizing assessment', active: true }
                            ].map((step, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${step.completed ? 'bg-[#00A651]' : step.active ? 'bg-[#00327D]' : 'bg-[#E2E8F0]'}`}>
                                        <span className="material-symbols-outlined text-white text-[12px]">
                                            {step.completed ? 'check' : 'radio_button_checked'}
                                        </span>
                                    </div>
                                    <span className={`text-[11px] font-bold ${step.active ? 'text-[#00327D]' : step.completed ? 'text-[#1E293B]' : 'text-[#64748B]'}`}>
                                        {step.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                </aside>

            </div>
        </div>
    );
};

export default InstructorAssignmentBuilderPage;
