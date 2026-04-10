import { useState } from "react";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/layout/TopBar";
import BottomNav from "../components/layout/BottomNav";
import { Link } from "react-router-dom";

const AdminAddInstructorPage = () => {
    const [isProvisioned, setIsProvisioned] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Simulate storing the "must change password" status
        // In a real app, this would be on the server
        localStorage.setItem(`must_change_password_${email}`, 'true');
        
        setIsProvisioned(true);
        setIsSubmitting(false);
    };

    if (isProvisioned) {
        return (
            <div className="bg-[#F8FAFC] text-on-surface min-h-screen">
                <Sidebar />
                <main className="pl-0 lg:pl-80 min-h-screen pb-24 md:pb-0 flex items-center justify-center p-6">
                    <div className="max-w-md w-full bg-white rounded-[2rem] p-10 shadow-2xl text-center animate-in zoom-in duration-500">
                        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 text-primary">
                            <span className="material-symbols-outlined text-5xl">mark_email_read</span>
                        </div>
                        <h2 className="text-3xl font-black italic mb-4 tracking-tighter">Instructor Provisioned</h2>
                        <p className="text-on-surface-variant font-medium mb-10 leading-relaxed">
                            A welcome email has been dispatched to <span className="text-primary font-bold">{email}</span>. The new instructor will be required to verify their access and establish a permanent credential upon first entry.
                        </p>
                        <div className="space-y-4">
                            <button 
                                onClick={() => setIsProvisioned(false)}
                                className="w-full bg-primary text-on-primary py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-sm"
                            >
                                Provision Another
                            </button>
                            <Link 
                                to="/admin/user-management"
                                className="block w-full py-4 text-on-surface-variant font-bold hover:text-primary transition-colors text-sm"
                            >
                                Return to Directory
                            </Link>
                        </div>
                    </div>
                </main>
                <BottomNav />
            </div>
        );
    }

    return (
        <div className="bg-[#F8FAFC] text-on-surface min-h-screen">
            {/* Navigation Components */}
            <Sidebar />
            
            <main className="pl-0 lg:pl-80 min-h-screen pb-24 md:pb-0">
                <TopBar />
                
                <div className="p-6 md:p-8 max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <div>
                            <Link to="/admin/user-management" className="text-primary font-bold text-sm flex items-center gap-1 mb-4 hover:opacity-70 transition-opacity">
                                <span className="material-symbols-outlined text-sm">arrow_back</span>
                                Back to Directory
                            </Link>
                            <h1 className="text-4xl font-black tracking-tighter text-on-surface mb-2 italic">Provision Instructor</h1>
                            <p className="text-on-surface-variant font-medium leading-relaxed max-w-xl">
                                Onboard a new architectural visionary to the TalentFlow LMS mentorship core. Credentials and permissions are precision-engineered for professional excellence.
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined">shield_person</span>
                            </div>
                            <span className="text-xs font-bold text-outline uppercase tracking-widest">Administrative Provisioning</span>
                        </div>
                    </div>

                    {/* Form Sections - Bento Style */}
                    <form className="grid grid-cols-1 md:grid-cols-12 gap-8" onSubmit={handleSubmit}>
                        {/* Primary Credentials Section */}
                        <div className="md:col-span-8 bg-surface-container-low p-8 rounded-3xl animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
                            <h2 className="text-xl font-bold mb-8 flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">badge</span>
                                Profile Essentials
                            </h2>
                            
                            <div className="space-y-8">
                                <div className="group">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-outline mb-2 block group-focus-within:text-primary transition-colors">Visionary Name</label>
                                    <input 
                                        type="text" 
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="e.g. Julian Vane"
                                        className="w-full bg-surface-container-lowest border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-primary/20 placeholder-outline/30 font-medium text-on-surface transition-all"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="group">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-outline mb-2 block group-focus-within:text-primary transition-colors">Corporate Identity (Email)</label>
                                        <input 
                                            type="email" 
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="name@talentflow.edu"
                                            className="w-full bg-surface-container-lowest border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-primary/20 placeholder-outline/30 font-medium text-on-surface transition-all"
                                        />
                                    </div>
                                    <div className="group">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-outline mb-2 block group-focus-within:text-primary transition-colors">Secure Access Phrase (Password)</label>
                                        <input 
                                            type="password" 
                                            required
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="••••••••"
                                            className="w-full bg-surface-container-lowest border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-primary/20 placeholder-outline/30 font-medium text-on-surface transition-all"
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Access & Level Section */}
                        <div className="md:col-span-4 space-y-8">
                            <div className="bg-surface-container-low p-8 rounded-3xl animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
                                <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                                    <span className="material-symbols-outlined text-secondary">verified_user</span>
                                    Access Level
                                </h2>
                                
                                <div className="space-y-4">
                                    <label className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-lowest cursor-pointer hover:bg-primary/5 transition-colors group">
                                        <input type="radio" name="level" defaultChecked className="w-5 h-5 accent-primary border-none bg-surface-container-high" />
                                        <div>
                                            <div className="font-bold text-sm">Lead Instructor</div>
                                            <div className="text-[10px] text-outline font-medium uppercase tracking-wider">Full Studio Control</div>
                                        </div>
                                    </label>
                                    
                                    <label className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-lowest cursor-pointer hover:bg-primary/5 transition-colors group border border-transparent">
                                        <input type="radio" name="level" className="w-5 h-5 accent-primary border-none bg-surface-container-high" />
                                        <div>
                                            <div className="font-bold text-sm">Guest Mentor</div>
                                            <div className="text-[10px] text-outline font-medium uppercase tracking-wider">Restricted Access</div>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div className="bg-primary/5 p-8 rounded-3xl animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined text-xl">rocket_launch</span>
                                    </div>
                                    <div className="font-bold text-sm">Onboarding Protocol</div>
                                </div>
                                <p className="text-xs text-on-surface-variant leading-relaxed mb-6 font-medium">
                                    Administrative override: Credentials are set manually. The instructor should be alerted of their permanent access phrase via secure internal channels.
                                </p>
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className="w-full bg-primary text-on-primary py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-sm hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-primary/20 disabled:opacity-50"
                                >
                                    {isSubmitting ? 'Provisioning...' : 'Commit Provision'}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </main>

            <BottomNav />
        </div>
    );
};

export default AdminAddInstructorPage;
