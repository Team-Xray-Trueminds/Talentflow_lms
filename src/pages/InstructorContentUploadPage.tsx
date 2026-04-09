import { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const InstructorContentUploadPage = () => {
    const navigate = useNavigate();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [activeLessonId, setActiveLessonId] = useState<number | null>(null);
    
    // -- Interactive Logic --
    const [modules, setModules] = useState([
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

    const deleteLesson = (modId: number, lessonId: number) => {
        setModules(prev => prev.map(mod => 
            mod.id === modId ? { ...mod, lessons: mod.lessons.filter(l => l.id !== lessonId) } : mod
        ));
    };

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
        <div className="min-h-screen bg-[#F8F9FB] font-sans text-[#1E293B] flex flex-col">
            <input type="file" ref={fileInputRef} onChange={onFileChange} className="hidden" />
            
            {/* 1. HEADER - Responsive */}
            <header className="h-16 bg-white border-b border-[#E2E8F0] flex items-center justify-between px-6 md:px-10 w-full z-50 shrink-0 sticky top-0">
                {/* Desktop Logo/Nav */}
                <div className="hidden md:flex items-center gap-10">
                    <span className="text-lg font-bold tracking-tight text-[#00327D]">Course Architect</span>
                    <nav className="flex gap-8 h-16">
                        <button className="text-[11px] font-bold text-[#64748B] hover:text-[#00327D] bg-transparent border-none cursor-pointer">Dashboard</button>
                        <div className="flex items-center border-b-2 border-[#00327D]">
                            <button className="text-[11px] font-bold text-[#00327D] bg-transparent border-none cursor-pointer">Courses</button>
                        </div>
                        <button className="text-[11px] font-bold text-[#64748B] hover:text-[#00327D] bg-transparent border-none cursor-pointer">Library</button>
                        <button className="text-[11px] font-bold text-[#64748B] hover:text-[#00327D] bg-transparent border-none cursor-pointer">Analytics</button>
                    </nav>
                </div>

                {/* Mobile Header elements */}
                <div className="flex md:hidden items-center gap-4 w-full justify-between">
                    <button onClick={() => navigate(-1)} className="bg-transparent border-none cursor-pointer text-[#00327D]">
                        <span className="material-symbols-outlined font-bold">arrow_back</span>
                    </button>
                    <span className="text-sm font-bold text-[#1E293B]">Course Builder</span>
                    <button className="text-xs font-bold text-[#00327D] bg-transparent border-none cursor-pointer">Save Draft</button>
                </div>

                {/* Desktop Profile Actions */}
                <div className="hidden md:flex items-center gap-5">
                    <button className="text-[11px] font-bold text-[#64748B] hover:text-[#191C1E] bg-transparent border-none cursor-pointer">Save Draft</button>
                    <button className="bg-[#00327D] text-white px-5 py-2 rounded-lg text-[11px] font-bold hover:bg-[#002864] border-none cursor-pointer">Publish Course</button>
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-[#E2E8F0] bg-gray-100">
                        <img 
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                            alt="User" 
                            className="w-full h-full object-cover" 
                        />
                    </div>
                </div>
            </header>

            {/* Layout Wrapper */}
            <div className="max-w-[1400px] mx-auto w-full px-4 md:px-10 flex flex-col md:flex-row items-stretch gap-6 md:gap-11 flex-1 pb-24 md:pb-0">
                
                {/* 2. LEFT SIDEBAR - Desktop Only */}
                <aside className="hidden md:flex w-52 flex-col pt-10 pb-12 shrink-0 border-r border-[#E2E8F0]/30 mr-2">
                    <div className="flex items-center gap-3 px-1 mb-8">
                        <div className="w-9 h-9 rounded-lg overflow-hidden border border-[#E2E8F0] bg-gray-100">
                            <img 
                                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                                alt="Course" 
                                className="w-full h-full object-cover" 
                            />
                        </div>
                        <div>
                            <h3 className="text-[11px] font-bold text-[#1E293B] leading-tight">Advanced UI Design</h3>
                            <p className="text-[9px] text-[#64748B] font-semibold">Step 3 of 5</p>
                        </div>
                    </div>

                    <nav className="space-y-0.5">
                        <Link to="#" className="item-nav-desktop">
                            <span className="material-symbols-outlined text-[18px] opacity-40">info</span>
                            Course Details
                        </Link>
                        <Link to="/instructor/curriculum-builder" className="item-nav-desktop">
                            <span className="material-symbols-outlined text-[18px] opacity-40">account_tree</span>
                            Curriculum
                        </Link>
                        <div className="w-full flex items-center gap-3 px-3 py-2 text-[11px] font-bold text-[#00327D] bg-white shadow-sm border-l-2 border-[#00327D] rounded-lg">
                            <span className="material-symbols-outlined text-[18px]">cloud_upload</span>
                            Content Upload
                        </div>
                        <div className="w-full flex items-center gap-3 px-3 py-2 text-[11px] font-semibold text-[#64748B] opacity-40">
                            <span className="material-symbols-outlined text-[18px]">payments</span>
                            Pricing
                        </div>
                        <div className="w-full flex items-center gap-3 px-3 py-2 text-[11px] font-semibold text-[#64748B] opacity-40">
                            <span className="material-symbols-outlined text-[18px]">rate_review</span>
                            Review
                        </div>
                    </nav>

                    <div className="mt-auto space-y-3 pt-6">
                        <div className="bg-[#D3E4FE]/60 p-3 rounded-xl flex items-center gap-3 hover:bg-[#D3E4FE] transition-colors cursor-pointer">
                            <span className="material-symbols-outlined text-[#00327D] text-lg">menu_book</span>
                            <span className="text-[9px] font-bold text-[#00327D] uppercase tracking-wider">Architect's Guide</span>
                        </div>
                        <div className="space-y-0.5 px-2">
                            <button className="sidebar-btn-mobile">
                                <span className="material-symbols-outlined text-base opacity-40">settings</span>
                                Settings
                            </button>
                            <button className="sidebar-btn-mobile">
                                <span className="material-symbols-outlined text-base opacity-40">help</span>
                                Help Center
                            </button>
                        </div>
                    </div>
                </aside>

                {/* 3. MAIN WORKSPACE */}
                <div className="flex-1 flex flex-col min-w-0 pt-6 md:pt-10 pb-12">
                    
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 md:mb-3 pr-0 md:pr-8">
                        <div className="flex-1">
                            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#00327D] mb-2 md:mb-1">Upload Content</h1>
                            <p className="text-[#64748B] text-xs font-medium leading-relaxed max-w-[420px]">
                                Add your teaching materials. Supported formats: MP4, PDF, and Markdown text.
                            </p>
                        </div>
                        <div className="hidden md:flex text-right flex-col items-end pb-1">
                            <span className="text-2xl font-bold text-[#00327D] leading-none">75%</span>
                            <span className="text-[9px] font-bold text-[#64748B] tracking-[0.2em] uppercase mt-1">COMPLETE</span>
                        </div>
                    </div>

                    {/* Mobile Progress Row */}
                    <div className="flex md:hidden justify-between items-center mb-2 px-1 text-[11px] font-bold">
                        <span className="text-[#00327D]">Progress</span>
                        <span className="text-[#64748B]">75% Complete</span>
                    </div>

                    <div className="w-full h-1.5 md:h-1 bg-[#E2E8F0] rounded-full overflow-hidden mb-8 md:mb-10">
                        <div className="w-3/4 h-full bg-[#00327D] rounded-full"></div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-10 items-stretch flex-1">
                        <main className="flex-1 min-w-0">
                            <div className="space-y-6 md:space-y-8">
                                {modules.map(mod => (
                                    <section key={mod.id} className="bg-white md:bg-transparent rounded-2xl md:rounded-none p-0 overflow-hidden md:overflow-visible">
                                        {/* Module Header */}
                                        <div className="bg-[#F1F5F9]/30 md:bg-transparent p-5 md:p-0 flex items-center gap-4 mb-0 md:mb-4 border-b md:border-none border-[#E2E8F0]/30">
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-[#F1F5F9] text-[#1E293B] text-xs font-bold shrink-0`}>
                                                {mod.id}
                                            </div>
                                            <h2 className={`text-sm md:text-base font-bold tracking-tight ${mod.status === 'PENDING' ? 'text-[#64748B] opacity-60' : 'text-[#1E293B]'}`}>
                                                Module {mod.id}: {mod.title}
                                            </h2>
                                        </div>

                                        <div className="p-5 md:p-0 space-y-4 md:space-y-3">
                                            {mod.lessons.length > 0 ? (
                                                mod.lessons.map((lesson: any) => (
                                                    <div key={lesson.id} className="group bg-white rounded-xl border border-[#E2E8F0] p-4 flex flex-col gap-3 hover:shadow-sm transition-all relative">
                                                        <div className="flex items-center gap-4">
                                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-[#E2E8F0]/50 ${lesson.status === 'verified' ? 'bg-[#E8F5E9] text-[#2E7D32]' : lesson.status === 'uploading' ? 'bg-[#D3E4FE]/40 text-[#00327D]' : 'bg-transparent text-[#64748B] opacity-40'}`}>
                                                                <span className="material-symbols-outlined text-lg">
                                                                    {lesson.status === 'verified' ? 'check_circle' : lesson.status === 'uploading' ? 'cloud_upload' : 'radio_button_unchecked'}
                                                                </span>
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <h4 className="text-[13px] font-bold text-[#1E293B] mb-0.5 truncate">{lesson.title}</h4>
                                                                <p className="text-[10px] font-medium text-[#64748B] uppercase tracking-wide">
                                                                    {lesson.type} • {lesson.meta}
                                                                </p>
                                                            </div>
                                                            {lesson.status === 'verified' && (
                                                                <button className="bg-transparent border-none text-[#64748B] hover:text-[#00327D] cursor-pointer">
                                                                    <span className="material-symbols-outlined text-lg">edit</span>
                                                                </button>
                                                            )}
                                                        </div>
                                                        
                                                        {lesson.status === 'verified' && (
                                                            <div className="flex items-center">
                                                                <span className="bg-[#57FAE9]/30 text-[#00897B] text-[10px] font-bold px-3 py-1.5 rounded-md uppercase tracking-widest border-none">COMPLETE</span>
                                                            </div>
                                                        )}

                                                        {lesson.status === 'uploading' && (
                                                            <div className="w-full">
                                                                <div className="w-full h-1.5 bg-[#E2E8F0] rounded-full overflow-hidden mb-2">
                                                                    <div className="w-[45%] h-full bg-[#00327D] rounded-full"></div>
                                                                </div>
                                                                <button className="w-full bg-transparent border-none text-[#F44336] text-[11px] font-bold cursor-pointer uppercase tracking-widest hover:underline">Cancel</button>
                                                            </div>
                                                        )}

                                                        {lesson.status === 'pending' && (
                                                            <button 
                                                                onClick={() => handleFileClick(lesson.id)} 
                                                                className="w-full bg-[#E2E8F0]/50 text-[#1E293B] flex items-center justify-center gap-2 py-3 rounded-lg text-[11px] font-bold border-none cursor-pointer hover:bg-[#E2E8F0] transition-colors"
                                                            >
                                                                <span className="material-symbols-outlined text-base">add</span>
                                                                Select File
                                                            </button>
                                                        )}
                                                    </div>
                                                ))
                                            ) : (
                                                <div className="bg-white rounded-xl border border-[#E2E8F0]/60 p-10 flex flex-col items-center justify-center text-center">
                                                    <div className="w-12 h-12 bg-[#F1F5F9] rounded-full flex items-center justify-center mb-4">
                                                        <span className="material-symbols-outlined text-[#64748B] text-2xl">edit_document</span>
                                                    </div>
                                                    <p className="text-[13px] font-bold text-[#1E293B] mb-1">No lessons created yet</p>
                                                    <p className="text-[11px] font-medium text-[#64748B] mb-0 ml-0">{mod.description}</p>
                                                </div>
                                            )}
                                        </div>
                                    </section>
                                ))}
                            </div>

                            {/* Mobile Sidebar stack starts here */}
                            <div className="md:hidden space-y-6 mt-8">
                                {/* Architect's Tip - Mobile style */}
                                <div className="bg-[#00327D] rounded-2xl p-7 text-white shadow-lg">
                                    <div className="flex items-center gap-2 mb-5">
                                        <span className="material-symbols-outlined text-sm font-bold text-[#57FAE9]">architecture</span>
                                        <span className="text-[9px] font-bold tracking-[0.2em] text-white/50 uppercase">Architect's Tip</span>
                                    </div>
                                    <h4 className="text-xl font-bold leading-tight mb-3">Optimizing for Mobile</h4>
                                    <p className="text-xs font-medium text-white/70 leading-relaxed mb-6">
                                        High-bitrate videos can buffer on mobile networks. We recommend H.264 encoding at 1080p for the perfect balance of clarity and speed.
                                    </p>
                                    <button className="bg-transparent border-none text-[#57FAE9] text-[11px] font-bold uppercase tracking-widest flex items-center gap-2 cursor-pointer hover:underline">
                                        Read the Guidelines
                                        <span className="material-symbols-outlined text-base">north_east</span>
                                    </button>
                                </div>

                                {/* Upload Summary - Mobile style */}
                                <div className="bg-[#F1F5F9]/40 rounded-2xl p-7 border border-[#E2E8F0]/50">
                                    <h3 className="text-[11px] font-bold text-[#1E293B] uppercase tracking-widest mb-6">Upload Summary</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <span className="material-symbols-outlined text-[#1E293B] text-xl opacity-60">video_library</span>
                                                <span className="text-[11px] font-bold text-[#64748B]">Videos</span>
                                            </div>
                                            <span className="text-[13px] font-bold text-[#1E293B]">2 / 5</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <span className="material-symbols-outlined text-[#1E293B] text-xl opacity-60">description</span>
                                                <span className="text-[11px] font-bold text-[#64748B]">Documents</span>
                                            </div>
                                            <span className="text-[13px] font-bold text-[#1E293B]">1 / 3</span>
                                        </div>
                                        <div className="flex items-center justify-between pt-4 border-t border-[#E2E8F0]">
                                            <div className="flex items-center gap-3 text-[#1E293B]">
                                                <span className="material-symbols-outlined text-xl font-bold">sort</span>
                                                <span className="text-[11px] font-bold uppercase tracking-widest">Total Size</span>
                                            </div>
                                            <span className="text-[13px] font-bold text-[#1E293B]">1.2 GB</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Need Help - Mobile style */}
                                <div className="bg-white border-2 border-dashed border-[#E2E8F0]/60 rounded-2xl p-6">
                                    <h4 className="text-[12px] font-bold text-[#1E293B] mb-2 font-black">Need help?</h4>
                                    <p className="text-[11px] font-medium text-[#64748B] leading-relaxed ml-0">
                                        Our support team is available 24/7 to help with media processing issues.
                                    </p>
                                </div>
                            </div>
                        </main>

                        {/* DESKTOP SIDEBAR */}
                        <aside className="hidden lg:flex w-[320px] shrink-0 space-y-6 flex-col">
                            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm">
                                <h3 className="text-[10px] font-bold text-[#64748B] tracking-[0.2em] uppercase mb-6 text-center">Summary</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-[#D3E4FE]/40 rounded-lg flex items-center justify-center">
                                                <span className="material-symbols-outlined text-[#00327D] text-lg font-light">video_library</span>
                                            </div>
                                            <span className="text-[11px] font-semibold text-[#64748B]">Videos</span>
                                        </div>
                                        <span className="text-sm font-bold text-[#1E293B]">2 / 5</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-[#FFF7ED] rounded-lg flex items-center justify-center">
                                                <span className="material-symbols-outlined text-[#F97316] text-lg font-light">description</span>
                                            </div>
                                            <span className="text-[11px] font-semibold text-[#64748B]">Files</span>
                                        </div>
                                        <span className="text-sm font-bold text-[#1E293B]">1 / 3</span>
                                    </div>
                                    <div className="pt-4 border-t border-[#E2E8F0] flex justify-between items-center mt-2">
                                        <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest">Total Size</span>
                                        <span className="text-lg font-bold text-[#00327D] tracking-tighter">1.2 GB</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#00327D] rounded-[32px] p-8 text-white relative overflow-hidden shadow-xl min-h-[320px] flex flex-col justify-center">
                                <div className="flex items-center gap-2 mb-6 relative z-10">
                                    <span className="material-symbols-outlined text-sm font-bold text-[#57FAE9]">bolt</span>
                                    <span className="text-[9px] font-bold tracking-[0.3em] text-white/50 uppercase">Architect's Tip</span>
                                </div>
                                <h4 className="text-xl font-bold leading-tight mb-4 tracking-tight relative z-10">Optimizing for Desktop & Mobile</h4>
                                <p className="text-xs font-medium text-white/70 leading-relaxed mb-8 relative z-10">
                                    Ensure your videos use H.264 encoding and 1080p resolution for the perfect balance of quality and streaming speed across all student devices.
                                </p>
                                <div className="w-10 h-1 bg-[#57FAE9] rounded-full relative z-10"></div>
                                <span className="material-symbols-outlined text-[120px] text-white/5 absolute -right-8 -bottom-8">architecture</span>
                            </div>

                            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 flex flex-col items-center text-center">
                                <div className="w-8 h-8 bg-[#F1F5F9] rounded-full flex items-center justify-center mb-3">
                                    <span className="material-symbols-outlined text-[#00327D] text-lg font-light">help_outline</span>
                                </div>
                                <h4 className="text-[11px] font-bold text-[#1E293B] mb-1">Need help?</h4>
                                <p className="text-[9px] font-semibold text-[#64748B] leading-relaxed mb-4">Support team is available 24/7 for assistance.</p>
                                <button className="text-[#00327D] font-bold text-[9px] uppercase tracking-widest bg-transparent border-none cursor-pointer hover:underline">Support Center</button>
                            </div>
                        </aside>
                    </div>

                    {/* Desktop Step Navigation */}
                    <div className="hidden md:flex justify-between items-center py-8 mt-10 border-t border-[#E2E8F0]">
                        <button onClick={() => navigate('/instructor/curriculum-builder')} className="flex items-center gap-2 text-[#64748B] font-bold text-xs bg-transparent border-none cursor-pointer hover:text-[#1E293B]">
                            <span className="material-symbols-outlined text-base">arrow_back</span>
                            Previous Step
                        </button>
                        <button onClick={() => navigate('/instructor/assignment-builder')} className="bg-[#00327D] text-white px-8 py-2.5 rounded-xl font-bold text-xs shadow-lg shadow-[#00327D]/10 flex items-center gap-3 hover:translate-x-1 transition-all border-none cursor-pointer group">
                            Next Step
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-base">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* 4. MOBILE FOOTER - Sticky */}
            <footer className="flex md:hidden fixed bottom-0 left-0 w-full bg-[#F1F5F9] p-4 gap-3 z-50 border-t border-[#E2E8F0]">
                <button onClick={() => navigate(-1)} className="flex-1 bg-[#E2E8F5] text-[#1E293B] py-4 rounded-xl font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 border-none cursor-pointer">
                    <span className="material-symbols-outlined text-base">chevron_left</span>
                    Previous Step
                </button>
                <button onClick={() => navigate('/instructor/assignment-builder')} className="flex-[1.5] bg-[#2962FF] text-white py-4 rounded-xl font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 border-none cursor-pointer shadow-lg shadow-[#2962FF]/30">
                    Next Step
                    <span className="material-symbols-outlined text-base">chevron_right</span>
                </button>
            </footer>

            <style>{`
                .item-nav-desktop {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 10px 12px;
                    font-size: 11px;
                    font-weight: 700;
                    color: #64748B;
                    border-radius: 8px;
                    transition: all 0.2s;
                    text-decoration: none;
                }
                .item-nav-desktop:hover {
                    background-color: white;
                }
                .sidebar-btn-mobile {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 6px 0;
                    font-size: 10px;
                    font-weight: 600;
                    color: #64748B;
                    background-color: transparent;
                    border: none;
                    cursor: pointer;
                }
                .sidebar-btn-mobile:hover {
                    color: #1E293B;
                }
                @media (max-width: 767px) {
                    body {
                        background-color: #F8F9FA !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default InstructorContentUploadPage;
