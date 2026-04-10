import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const LearnerCoursePreviewPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const courseData = {
        title: 'Advanced UI Architecture Systems',
        instructor: 'Julian Casablancas',
        role: 'Senior Design Architect',
        rating: 4.9,
        reviews: 842,
        students: '12k',
        duration: '18.5 Hours',
        modules: 12,
        description: 'Master the art of high-fidelity interface construction. This curriculum transitions you from basic layout logic to advanced editorial glassmorphism and the "The Architectural Curator" design philosophy. We focus on building scalable systems that breathe through tonal depth rather than line-work.',
        curriculum: [
            { title: 'Foundations of Tonal Logic', duration: '2.5h', lessons: 4 },
            { title: 'The Architectural Curator System', duration: '4h', lessons: 6 },
            { title: 'Editorial Glassmorphism Patterns', duration: '5.5h', lessons: 8 },
            { title: 'Kinetic Motion & Depth Logic', duration: '6.5h', lessons: 10 }
        ],
        instructorBio: ' Julian is a lead architectural designer with 15+ years of experience in sculpting high-performance digital environments for world-class teams.',
        img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&auto=format&fit=crop&q=80'
    };

    return (
        <div className="flex bg-[#F7F9FB] min-h-screen font-inter text-[#191C1E]">
            <Sidebar />
            
            <main className="flex-1 flex flex-col min-w-0">
                {/* 1. HERO SECTION */}
                <section className="relative h-[600px] w-full overflow-hidden shrink-0">
                    <img src={courseData.img} className="absolute inset-0 w-full h-full object-cover" alt="Hero" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001946] via-[#001946]/40 to-transparent" />

                    <div className="absolute left-8 top-8 z-10">
                        <button
                            type="button"
                            onClick={() => navigate(-1)}
                            aria-label="Go back"
                            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-[#001946]/45 text-white shadow-[0_14px_30px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all hover:border-[#57FAE9]/40 hover:bg-[#001946]/70 hover:text-[#57FAE9]"
                        >
                            <span className="material-symbols-outlined text-base">west</span>
                        </button>
                    </div>
                    
                    <div className="absolute inset-0 flex flex-col justify-end p-20 pb-24 max-w-[1400px] mx-auto w-full">
                        <div className="flex items-center gap-4 mb-8">
                           <span className="px-4 py-1.5 bg-[#57FAE9] text-[#001946] rounded-full text-[11px] font-black uppercase tracking-[0.2em] shadow-xl">Architect Choice</span>
                           <div className="flex items-center gap-1 text-[#57FAE9]">
                               <span className="material-symbols-outlined text-sm fill-1">star</span>
                               <span className="text-sm font-black tracking-tight">{courseData.rating}</span>
                               <span className="text-white/40 text-[10px] font-bold ml-1">({courseData.reviews} Curations)</span>
                           </div>
                        </div>
                        
                        <h1 className="text-7xl font-black font-manrope tracking-tighter text-white mb-6 leading-[0.9]">
                            {courseData.title}
                        </h1>
                        
                        <div className="flex items-center gap-8 mb-12">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-white/10 p-[2px] shadow-2xl">
                                    <div className="w-full h-full bg-[#001946] rounded-[14px] overflow-hidden grayscale">
                                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk5utjN07mkZOhvtLZIyLzTlvKn2L4iPZCxU2HE03HITuSyf687NvYeKy1N3BB3ni_PXK6x68sbgc75rNQ2L2yaSJm-G8klfuPjgpLJwHX36NoMakdz6P_Z2afHIAebaZV13Q7a3n9L2hbMhTqfjyw74ubS7f51FH_QDX66YnHaXq9NSQwc_7KrIjpQkDJ-Yp3aaAhNu-vnGsNf7SIO4uN_S4bTdHe0MSfe9aqNGnaSUESsnPKSC5Ebl9BWs9kMIL9tpe4Ug-K6OI" className="w-full h-full object-cover opacity-80" alt="" />
                                    </div>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-1">Lead Instructor</p>
                                    <p className="text-sm font-black text-white">{courseData.instructor}</p>
                                </div>
                            </div>
                            
                            <div className="h-10 w-px bg-white/10" />
                            
                            <div className="flex gap-12">
                                {[
                                    { label: 'Runtime', val: courseData.duration },
                                    { label: 'Students', val: courseData.students },
                                    { label: 'Modules', val: courseData.modules }
                                ].map(stat => (
                                    <div key={stat.label}>
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-1">{stat.label}</p>
                                        <p className="text-sm font-black text-white">{stat.val}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. BODY LAYOUT */}
                <div className="max-w-[1400px] w-full mx-auto px-20 grid grid-cols-1 lg:grid-cols-12 gap-20 py-20">
                    
                    {/* Left content */}
                    <div className="lg:col-span-8 space-y-20">
                        {/* Overview */}
                        <section>
                            <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-[#737784] mb-8 flex items-center gap-3">
                                <span className="w-8 h-px bg-[#00327D]" />
                                Curriculum Architectural Intent
                            </h3>
                            <p className="text-2xl font-medium leading-[1.6] text-[#434653]">
                                {courseData.description}
                            </p>
                        </section>

                        {/* Curriculum Architecture */}
                        <section>
                            <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-[#737784] mb-12">Program Scaffolding</h3>
                            <div className="space-y-4">
                                {courseData.curriculum.map((mod, i) => (
                                    <div key={i} className="group bg-white p-8 rounded-[2.5rem] shadow-[0px_12px_32px_rgba(25,28,30,0.02)] ring-1 ring-[#E0E3E5]/30 hover:ring-[#00327D]/20 transition-all flex items-center justify-between">
                                        <div className="flex items-center gap-6">
                                            <div className="w-12 h-12 rounded-2xl bg-[#F2F4F6] flex items-center justify-center text-[#737784] font-black text-xs group-hover:bg-[#00327D] group-hover:text-white transition-colors">
                                                0{i + 1}
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-black tracking-tight mb-1">{mod.title}</h4>
                                                <p className="text-[10px] font-bold text-[#737784] uppercase tracking-widest">{mod.lessons} Systematic Lessons • {mod.duration}</p>
                                            </div>
                                        </div>
                                        <span className="material-symbols-outlined text-[#C3C6D5] group-hover:text-[#00327D] transition-colors">lock_open</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Instructor Bio */}
                        <section className="bg-[#DAE2FF]/30 p-12 rounded-[3.5rem] flex gap-10 items-start">
                             <div className="w-32 h-32 rounded-[2.5rem] overflow-hidden shrink-0 shadow-2xl grayscale border-4 border-white">
                                 <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk5utjN07mkZOhvtLZIyLzTlvKn2L4iPZCxU2HE03HITuSyf687NvYeKy1N3BB3ni_PXK6x68sbgc75rNQ2L2yaSJm-G8klfuPjgpLJwHX36NoMakdz6P_Z2afHIAebaZV13Q7a3n9L2hbMhTqfjyw74ubS7f51FH_QDX66YnHaXq9NSQwc_7KrIjpQkDJ-Yp3aaAhNu-vnGsNf7SIO4uN_S4bTdHe0MSfe9aqNGnaSUESsnPKSC5Ebl9BWs9kMIL9tpe4Ug-K6OI" className="w-full h-full object-cover" alt="" />
                             </div>
                             <div>
                                 <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#00327D] mb-4">Instructor Profile</h4>
                                 <h3 className="text-2xl font-black font-manrope tracking-tight mb-4">{courseData.instructor}</h3>
                                 <p className="text-base text-[#434653] font-medium leading-relaxed italic opacity-80">
                                     "{courseData.instructorBio}"
                                 </p>
                             </div>
                        </section>
                    </div>

                    {/* Right sidebar - Enrollment Card */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-[100px] bg-white rounded-[3rem] p-10 shadow-[0px_32px_80px_rgba(25,28,30,0.06)] ring-1 ring-[#E0E3E5]/40 flex flex-col items-center text-center">
                            <div className="w-20 h-20 bg-[#F2F4F6] rounded-[2rem] flex items-center justify-center text-[#00327D] mb-8">
                                <span className="material-symbols-outlined text-4xl fill-1">verified</span>
                            </div>
                            
                            <h3 className="text-sm font-black uppercase tracking-[0.3em] text-[#737784] mb-2">Platform Access</h3>
                            <div className="flex items-baseline gap-2 mb-10">
                                <span className="text-4xl font-black font-manrope">$420</span>
                                <span className="text-xs font-bold text-[#737784] line-through">$890</span>
                                <span className="text-xs font-black text-[#BA1A1A] uppercase tracking-tighter">53% Off</span>
                            </div>

                            <button 
                                onClick={() => navigate(`/learner/course-player/${id}`)}
                                className="w-full bg-[#00327D] text-white py-6 rounded-2xl font-black text-xs uppercase tracking-[0.25em] shadow-2xl shadow-[#00327D]/30 hover:scale-[1.03] active:scale-95 transition-all border-none cursor-pointer mb-6"
                            >
                                Enroll in Curriculum
                            </button>

                            <p className="text-[10px] font-bold text-[#737784] uppercase tracking-widest leading-relaxed">
                                Lifetime Professional Access<br/>Certification of Architectural Mastery
                            </p>
                            
                            <div className="h-px w-full bg-[#F2F4F6] my-10" />
                            
                            <div className="space-y-6 w-full text-left">
                                <h4 className="text-[9px] font-black uppercase tracking-widest text-[#C3C6D5]">Core Deliverables</h4>
                                {[
                                    '18.5 Hours of Scaffolding Theory',
                                    '24 Production-Ready Assets',
                                    'Architectural Peer Assessment',
                                    'Access to Studio Slack Base'
                                ].map(del => (
                                    <div key={del} className="flex items-center gap-4">
                                        <span className="material-symbols-outlined text-[#57FAE9] text-xl">check_circle</span>
                                        <span className="text-xs font-bold text-[#434653]">{del}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default LearnerCoursePreviewPage;
