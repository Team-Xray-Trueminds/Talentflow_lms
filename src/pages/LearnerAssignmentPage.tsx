import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useAuth } from '../components/auth/AuthProvider';
import { getAssignmentDetails, getAssignmentAttempts } from '../lib/learnerApi';

const LearnerAssignmentPage = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const { token } = useAuth();
    const queryClient = useQueryClient();
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [fileUploaded, setFileUploaded] = useState(false);

    // 1. Fetch Assignment Details
    const { data: detailsRes, isLoading: isLoadingDetails } = useQuery({
        queryKey: ['assignmentDetails', id],
        queryFn: () => getAssignmentDetails(id!, token!),
        enabled: !!id && !!token,
    });

    // 2. Fetch Attempts
    const { data: attemptsRes } = useQuery({
        queryKey: ['assignmentAttempts', id],
        queryFn: () => getAssignmentAttempts(id!, token!),
        enabled: !!id && !!token,
    });

    const assignment = detailsRes?.data;
    const attempts = attemptsRes?.data || [];

    const handleFileUpload = () => {
        setIsSubmitting(true);
        // This will eventually be a real mutation to /assignments/:id/submit
        setTimeout(() => {
            setIsSubmitting(false);
            setFileUploaded(true);
            queryClient.invalidateQueries({ queryKey: ['assignmentAttempts', id] });
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-[#000F29] text-white font-inter flex flex-col">
            {/* 1. CINEMATIC HEADER */}
            <header className="h-20 bg-[#001946]/40 backdrop-blur-2xl border-b border-white/5 flex items-center justify-between px-10 shrink-0 z-50">
                 <div className="flex items-center gap-6">
                    <button 
                        onClick={() => navigate(-1)} 
                        className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all border-none cursor-pointer text-white"
                    >
                        <span className="material-symbols-outlined">west</span>
                    </button>
                    <div className="h-6 w-px bg-white/10" />
                    <div>
                        <h1 className="text-base font-black tracking-tight font-manrope leading-none mb-1.5">{assignment?.title || 'Loading Artifact...'}</h1>
                        <p className="text-[10px] font-black text-[#57FAE9] uppercase tracking-[0.25em]">Assignment Portfolio • System Architecture</p>
                    </div>
                 </div>

                 <div className="bg-[#57FAE9]/10 px-4 py-2 rounded-xl border border-[#57FAE9]/20 flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#57FAE9] text-lg">schedule</span>
                    <span className="text-[10px] font-black text-[#57FAE9] uppercase tracking-widest">{assignment?.dueDate ? new Date(assignment.dueDate).toLocaleDateString() : 'No Deadline'}</span>
                 </div>
            </header>

            <main className="flex-1 overflow-y-auto pt-16 px-10 pb-32">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Left: Assignment Brief */}
                    <div className="lg:col-span-8 space-y-12">
                        {isLoadingDetails ? (
                            <div className="py-20 text-center opacity-20">
                                <span className="material-symbols-outlined animate-spin text-6xl">progress_activity</span>
                            </div>
                        ) : (
                            <>
                                <section>
                                    <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-white/30 mb-8 flex items-center gap-3">
                                        <span className="w-8 h-px bg-[#57FAE9]" />
                                        Project Manifest
                                    </h3>
                                    <p className="text-3xl font-medium leading-[1.6] text-white/90">
                                        {assignment?.description}
                                    </p>
                                </section>

                                <section className="bg-white/5 border border-white/5 rounded-[3rem] p-10">
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#57FAE9] mb-8">Technical Requirements</h4>
                                    <div className="space-y-6">
                                        {(assignment?.attachments || ['Project Link', 'Rationale PDF']).map((req: string, i: number) => (
                                            <div key={i} className="flex items-center gap-5">
                                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#57FAE9]">
                                                    <span className="material-symbols-outlined text-xl">verified</span>
                                                </div>
                                                <span className="text-sm font-bold text-white/70">{req}</span>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                {attempts.length > 0 && (
                                    <section className="space-y-6">
                                        <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-white/30 flex items-center gap-3">
                                            <span className="w-8 h-px bg-[#57FAE9]" />
                                            Submission History
                                        </h3>
                                        <div className="grid gap-4">
                                            {attempts.map((attempt: any) => (
                                                <div key={attempt.id} className="bg-white/5 p-6 rounded-2xl flex items-center justify-between">
                                                    <div>
                                                        <p className="text-sm font-black">Attempt #{attempt.attemptNumber}</p>
                                                        <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Submitted {new Date(attempt.submittedAt).toLocaleDateString()}</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <span className="text-lg font-black text-[#57FAE9]">{attempt.score || '--'}</span>
                                                        <span className="text-[10px] text-white/20 ml-1">/ {assignment?.points || 100}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>
                                )}
                            </>
                        )}
                    </div>

                    {/* Right: Submission Canvas */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-8 space-y-8">
                            <div className="bg-[#001C38] border border-white/5 rounded-[3rem] p-10 shadow-2xl">
                                <div className="text-center mb-10">
                                    <div className="w-20 h-20 bg-white/5 rounded-[2.5rem] flex items-center justify-center text-[#57FAE9] mx-auto mb-6">
                                        <span className="material-symbols-outlined text-4xl">{fileUploaded ? 'check_circle' : 'cloud_upload'}</span>
                                    </div>
                                    <h3 className="text-lg font-black font-manrope mb-2">{fileUploaded ? 'Artifact Submitted' : 'Submit Architectural Work'}</h3>
                                    <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest leading-relaxed">Max Filesize: 500MB • PDF, ZIP, MP4</p>
                                </div>

                                {fileUploaded ? (
                                    <div className="bg-[#57FAE9]/10 border border-[#57FAE9]/20 p-6 rounded-2xl flex flex-col items-center text-center gap-4">
                                        <p className="text-xs font-bold text-[#57FAE9]">Your submission is being reviewed by the curriculum board.</p>
                                        <button 
                                            onClick={() => setFileUploaded(false)}
                                            className="text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors bg-transparent border-none cursor-pointer"
                                        >
                                            Unsubmit & Update
                                        </button>
                                    </div>
                                ) : (
                                    <div className="space-y-6">
                                        <div className="group bg-white/5 border-2 border-dashed border-white/10 p-10 rounded-[2rem] flex flex-col items-center justify-center cursor-pointer hover:border-[#57FAE9]/40 hover:bg-white/[0.07] transition-all">
                                            <span className="material-symbols-outlined text-3xl text-white/20 group-hover:text-[#57FAE9] group-hover:scale-110 transition-all mb-4">add_circle</span>
                                            <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Select Artifacts</span>
                                        </div>
                                        
                                        <button 
                                            onClick={handleFileUpload}
                                            disabled={isSubmitting || isLoadingDetails}
                                            className="w-full bg-[#57FAE9] text-[#001946] py-5 rounded-2xl font-black text-xs uppercase tracking-[0.25em] shadow-2xl shadow-[#57FAE9]/20 hover:scale-[1.03] active:scale-95 transition-all border-none cursor-pointer flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <span className="animate-spin material-symbols-outlined">sync</span>
                                                    Syncing...
                                                </>
                                            ) : (
                                                <>
                                                    <span className="material-symbols-outlined font-black">bolt</span>
                                                    Execute Submission
                                                </>
                                            )}
                                        </button>
                                    </div>
                                )}

                                <div className="h-px bg-white/5 my-10" />
                                <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-white/30 px-2">
                                    <span>Weight</span>
                                    <span className="text-white">{assignment?.points || 100} Points</span>
                                </div>
                            </div>

                            {/* Protip */}
                            <div className="bg-[#191919] rounded-[2.5rem] p-8 relative overflow-hidden group shadow-xl">
                                <div className="relative z-10 flex items-start gap-4">
                                    <span className="material-symbols-outlined text-[#57FAE9] text-xl mt-1">lightbulb</span>
                                    <p className="text-xs text-white/60 leading-relaxed font-medium">
                                        Ensure your rationale document covers the <span className="text-[#57FAE9]">Structural Depth</span> principles discussed in Lesson 1.2.
                                    </p>
                                </div>
                                <span className="material-symbols-outlined text-[100px] text-white/[0.02] absolute -right-4 -bottom-4 group-hover:scale-110 transition-transform duration-1000">architecture</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default LearnerAssignmentPage;
