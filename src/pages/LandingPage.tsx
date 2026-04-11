import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AppFooter from '../components/AppFooter';
import { useTheme } from '../components/theme/ThemeProvider';
import { getFeaturedCourses } from '../lib/learnerApi';
import { useQuery } from '@tanstack/react-query';
const ScrollReveal: React.FC<{ children: React.ReactNode; className?: string; threshold?: number }> = ({ 
  children, 
  className = '',
  threshold = 0.1
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const elementRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={elementRef} className={`${className} ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
      {children}
    </div>
  );
};

const CountUp: React.FC<{ end: number; suffix?: string }> = ({ end, suffix = '' }) => {
  const [count, setCount] = React.useState(0);
  const elementRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTime: number | null = null;
          const duration = 2000;

          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
              requestAnimationFrame(step);
            }
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [end]);

  return <span ref={elementRef}>{count}{suffix}</span>;
};

const LandingPage: React.FC = () => {
  const { resolvedTheme, setThemeMode } = useTheme()
  const isDark = resolvedTheme === 'dark'
  const [showInstructorContact, setShowInstructorContact] = React.useState(false);
  const [interestSubmitted, setInterestSubmitted] = React.useState(false);
  const { data: featuredResponse, isLoading: loadingCourses } = useQuery({
    queryKey: ['featuredCourses'],
    queryFn: getFeaturedCourses
  });
  
  const featuredCourses = featuredResponse?.data || [];

  return (
    <>      <Navbar
        links={[
          { label: 'Platform', to: '/' },
          { label: 'Mentorship', to: '/' },
          { label: 'Insights', to: '/' },
          { label: 'About', to: '/' },
        ]}
        rightSlot={
          <>
            <button
              type="button"
              onClick={() => setThemeMode(isDark ? 'light' : 'dark')}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/80 text-[#0047AB] shadow-[0_10px_24px_rgba(37,89,189,0.12)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:text-[#2559BD] dark:bg-[#22374F] dark:text-[#DCE8FF] dark:hover:bg-[#2B4663] dark:hover:text-white"
            >
              <span
                className="material-symbols-outlined text-[20px]"
                style={{ fontVariationSettings: "'FILL' 1, 'wght' 500, 'GRAD' 0, 'opsz' 24" }}
              >
                {isDark ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
            <Link to="/login" className="text-on-surface-variant font-medium hover:text-primary transition-all dark:text-[#D8E4FF] dark:hover:text-[#57FAE9]">
              Sign In
            </Link>
            <Link
              to="/signup"
              className="bg-linear-to-r from-primary to-primary-container bg-[#0047AB] text-white px-6 py-2.5 rounded-lg font-bold scale-95 transition-transform duration-200 hover:scale-100 dark:from-[#0A5BFF] dark:to-[#57FAE9] dark:text-[#021223]"
            >
              Get Started
            </Link>
          </>
        }
      />
      <main className="pt-24 transition-colors duration-300">
        {/* Premium Hero Section */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-8 min-h-[calc(100vh-6rem)] flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-12 pb-24 lg:py-0">
          <div className="pointer-events-none absolute inset-0 overflow-hidden flex justify-center items-center -z-10">
             <div className="w-[800px] h-[800px] bg-gradient-to-tr from-[#57FAE9]/10 via-[#0047AB]/5 to-transparent rounded-full blur-[100px] dark:from-[#57FAE9]/20 dark:via-[#0A5BFF]/10 opacity-70 animate-pulse-slow"></div>
          </div>
          
          <div className="space-y-6 sm:space-y-8 z-10 w-full mt-4 lg:mt-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0047AB]/10 bg-white/50 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 shadow-sm animate-fade-in-up transition-all duration-300 dark:border-[#57FAE9]/20 dark:bg-[#021223]/80">
              <span className="material-symbols-outlined text-[#0047AB] text-[14px] sm:text-base dark:text-[#57FAE9]">vital_signs</span>
              <span className="text-[10px] sm:text-xs font-black tracking-[0.15em] uppercase text-[#002C70] dark:text-[#D2DEFF]">Platform 3.0 Live</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#57FAE9] animate-pulse ml-1"></span>
            </div>
            
            <h1 className="text-[2.75rem] leading-[1.05] sm:text-6xl lg:text-[4.5rem] xl:text-[5rem] lg:leading-[1] font-extrabold text-[#191C1E] font-headline tracking-tighter animate-fade-in-up animate-stagger-1 transition-colors duration-300 dark:text-white">
              Architecting the future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0047AB] to-[#00A3FF] dark:from-[#57FAE9] dark:to-[#3B82F6]">career mentorship</span>.
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-[#434653] leading-relaxed max-w-lg animate-fade-in-up animate-stagger-2 transition-colors duration-300 dark:text-[#9FB2D1]">
              TalentFlow provides the blueprints for professional evolution. We connect visionaries with curated expertise to build the next generation of global industry leaders.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-2 sm:pt-4 animate-fade-in-up animate-stagger-3">
              <Link to="/signup" className="w-full sm:w-auto relative group overflow-hidden inline-flex items-center justify-center rounded-2xl bg-[#002C70] px-8 py-4 text-sm sm:text-base font-black text-white shadow-[0_10px_30px_rgba(0,44,112,0.2)] transition-all hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,44,112,0.3)] active:translate-y-0 dark:bg-white dark:text-[#021223] dark:shadow-[0_10px_30px_rgba(255,255,255,0.1)]">
                <span className="relative z-10">Start Your Journey</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer dark:via-[#0047AB]/10"></div>
              </Link>
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-2xl border border-[#E0E3E5] px-8 py-4 text-sm sm:text-base font-bold text-[#002C70] transition-colors hover:bg-slate-50 dark:border-[#2559BD]/30 dark:text-[#DCE8FF] dark:hover:bg-[#0A1930]">
                <span className="material-symbols-outlined text-[20px]">play_circle</span>
                Platform Tour
              </button>
            </div>
            
            <div className="pt-6 sm:pt-8 flex items-center gap-4 animate-fade-in-up animate-stagger-3 opacity-80">
                <div className="flex -space-x-3">
                    <img className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white dark:border-[#021223] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk5utjN07mkZOhvtLZIyLzTlvKn2L4iPZCxU2HE03HITuSyf687NvYeKy1N3BB3ni_PXK6x68sbgc75rNQ2L2yaSJm-G8klfuPjgpLJwHX36NoMakdz6P_Z2afHIAebaZV13Q7a3n9L2hbMhTqfjyw74ubS7f51FH_QDX66YnHaXq9NSQwc_7KrIjpQkDJ-Yp3aaAhNu-vnGsNf7SIO4uN_S4bTdHe0MSfe9aqNGnaSUESsnPKSC5Ebl9BWs9kMIL9tpe4Ug-K6OI" alt="" />
                    <img className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white dark:border-[#021223] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB06ZF4rJWSKN23zp2wWsqwcW2AAK2QkSoDP8VJd3XcOmygrHupDSMRzlmq1pV7oIZmyGUWmoHieax_B0EhzWAKlA3mVAirTYUI7btKWWdLkEFw7NS5SmkEjHY-urpnaWWOzby9uwXtVCfd0xjLeIluwlQol8d9sOChqyuzLcu8hwIJZKuYVi7WMjsB_7DuwjZ7MBOWgf9H2W7DOYgCqdKZeTdDRVZqyp5Ox8q3TvJ3ndRGc5lXidkY5yfCJZDARcfbOl7kxPydQ1M" alt="" />
                    <img className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white dark:border-[#021223] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLL-eI_6hjBET-j-aXGvez0pwWeELvWYe_5jfy0gaOF4ADAu4QbR5SDrFYKeCDzQZMSvId2k71MyXlAOnfl6Fk06kGEdo4dya2ZJ4GyPLV5toPUcgwDuw7BT2NCFybf7WO67PyMLV2eLnbIJPD4ECBvCYMpuy5CaklZiQ_tmt-slgj6_ajR_Lw_U9ELFyGqA2x0rYJ8FIlqOoIRpiVWL16mSif1Uuw6SpQirBo-Wj_kKK6O7M3uX6kU94Vzfcmd0hqTYVPXckdDyI" alt="" />
                </div>
                <div>
                   <div className="flex items-center text-[#F2C94C] text-[14px]">
                       <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                       <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                       <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                       <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                       <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                   </div>
                   <p className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-[#434653] mt-0.5 dark:text-[#A8B7D8]">From 15,000+ Alumni</p>
                </div>
            </div>
          </div>
          
          <div className="relative w-full max-w-[500px] lg:max-w-none mx-auto opacity-0 animate-scale-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            {/* Dynamic Glass Bento Mashup */}
            <div className="relative z-10 grid grid-cols-2 gap-3 sm:gap-4 lg:-ml-12 xl:-ml-20">
              <div className="space-y-3 sm:space-y-4 translate-y-6">
                <div className="h-48 sm:h-64 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-[#0047AB]/5 dark:ring-[#57FAE9]/10">
                  <img className="w-full h-full object-cover saturate-150" alt="Modern architectural glass building" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk5utjN07mkZOhvtLZIyLzTlvKn2L4iPZCxU2HE03HITuSyf687NvYeKy1N3BB3ni_PXK6x68sbgc75rNQ2L2yaSJm-G8klfuPjgpLJwHX36NoMakdz6P_Z2afHIAebaZV13Q7a3n9L2hbMhTqfjyw74ubS7f51FH_QDX66YnHaXq9NSQwc_7KrIjpQkDJ-Yp3aaAhNu-vnGsNf7SIO4uN_S4bTdHe0MSfe9aqNGnaSUESsnPKSC5Ebl9BWs9kMIL9tpe4Ug-K6OI" />
                </div>
                <div className="rounded-3xl bg-white/80 backdrop-blur-xl p-5 sm:p-6 shadow-xl ring-1 ring-black/5 transition-colors duration-300 dark:border dark:border-[#57FAE9]/15 dark:bg-[#0A1526]/80 group hover:-translate-y-1 hover:shadow-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#EEF0FF] flex items-center justify-center text-[#0047AB] dark:bg-[#0D2748] dark:text-[#57FAE9] transition-transform group-hover:scale-110">
                        <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-[#191C1E] dark:text-[#DCE8FF] mb-1">Career Velocity</h3>
                  <p className="text-[10px] sm:text-xs text-[#74777F] dark:text-[#9FB2D1] line-clamp-2">"The structural integrity of my portfolio changed instantly."</p>
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="relative overflow-hidden rounded-3xl bg-[#002C70] p-6 sm:p-8 text-white shadow-2xl transition-colors duration-300 dark:bg-gradient-to-br dark:from-[#071529] dark:to-[#0B315D] dark:ring-1 dark:ring-[#57FAE9]/20 group hover:-translate-y-1">
                  <div className="relative z-10">
                    <span className="material-symbols-outlined text-xl sm:text-2xl md:text-3xl sm:text-4xl mb-4 text-[#57FAE9] group-hover:scale-110 transition-transform">model_training</span>
                    <h3 className="text-lg sm:text-xl font-bold font-headline mb-2 leading-tight">Elite Mentorship</h3>
                    <p className="text-[10px] sm:text-xs text-[#DAE2FF] dark:text-[#B8C9F5] line-clamp-2">Direct access to the top 1% of industry visionaries.</p>
                  </div>
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#57FAE9] rounded-full opacity-20 blur-3xl group-hover:opacity-40 transition-opacity"></div>
                </div>
                <div className="h-56 sm:h-80 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5 dark:ring-white/10 relative group">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Interior designer studio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB06ZF4rJWSKN23zp2wWsqwcW2AAK2QkSoDP8VJd3XcOmygrHupDSMRzlmq1pV7oIZmyGUWmoHieax_B0EhzWAKlA3mVAirTYUI7btKWWdLkEFw7NS5SmkEjHY-urpnaWWOzby9uwXtVCfd0xjLeIluwlQol8d9sOChqyuzLcu8hwIJZKuYVi7WMjsB_7DuwjZ7MBOWgf9H2W7DOYgCqdKZeTdDRVZqyp5Ox8q3TvJ3ndRGc5lXidkY5yfCJZDARcfbOl7kxPydQ1M" />
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <div className="flex items-center gap-2">
                        <span className="p-1 px-2 rounded bg-white/20 backdrop-blur text-[8px] font-black uppercase text-white tracking-widest border border-white/20">Live Workshop</span>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Trusted Partners & Stats Section */}
        <section className="relative overflow-hidden bg-[#002C70] py-24 text-white transition-colors duration-300 dark:bg-[linear-gradient(180deg,#030A18,#08172C)]">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-400 rounded-full blur-[100px]"></div>
          </div>
          
          <ScrollReveal className="max-w-7xl mx-auto px-8 relative z-10" threshold={0.5}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 border-b border-white/10 pb-20">
              <div className="text-center space-y-2">
                <div className="text-2xl sm:text-3xl md:text-4xl md:text-6xl font-black font-headline tracking-tight">
                  <CountUp end={15} suffix="k+" />
                </div>
                <div className="text-blue-100/60 font-bold uppercase tracking-[0.2em] text-xs">Global Mentors</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl sm:text-3xl md:text-4xl md:text-6xl font-black font-headline tracking-tight">
                  <CountUp end={94} suffix="%" />
                </div>
                <div className="text-blue-100/60 font-bold uppercase tracking-[0.2em] text-xs">Growth Rate</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl sm:text-3xl md:text-4xl md:text-6xl font-black font-headline tracking-tight">
                  <CountUp end={200} suffix="+" />
                </div>
                <div className="text-blue-100/60 font-bold uppercase tracking-[0.2em] text-xs">Enterprises</div>
              </div>
            </div>

            <p className="text-center text-sm font-bold tracking-[0.3em] text-blue-100/40 uppercase mb-12">Architecting growth for world-class teams</p>
            <div className="flex flex-wrap justify-center items-center gap-x-20 gap-y-10 opacity-40 grayscale brightness-200">
              <span className="text-2xl font-black font-headline tracking-tighter">NEXUS</span>
              <span className="text-2xl font-black font-headline tracking-tighter">ORION</span>
              <span className="text-2xl font-black font-headline tracking-tighter">LUMINA</span>
              <span className="text-2xl font-black font-headline tracking-tighter">STRATOS</span>
              <span className="text-2xl font-black font-headline tracking-tighter">APEX</span>
            </div>
          </ScrollReveal>
        </section>
        {/* Bento Highlights Section */}
        <section className="max-w-7xl mx-auto px-8 py-24">
          <ScrollReveal className="text-center mb-16">
            <h2 className="mb-4 text-xl sm:text-2xl md:text-3xl sm:text-4xl md:text-5xl font-bold font-headline transition-colors duration-300 dark:text-[#F5F9FF]">Precision Engineering for Potential</h2>
            <p className="mx-auto max-w-2xl text-sm sm:text-base animate-stagger-1 text-[#434653] transition-colors duration-300 dark:text-[#9FB2D1]">We replace generic advice with architectural precision, ensuring every career move is supported by data and world-class mentorship.</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Large Feature Card */}
            <ScrollReveal className="relative overflow-hidden rounded-xl bg-[#EEF0FF] p-10 shadow-sm group flex flex-col justify-between md:col-span-2 transition-colors duration-300 dark:border dark:border-[#8AB4FF]/15 dark:bg-[#09152A]">
              <div className="relative z-10">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary-container dark:bg-[#0D2748]">
                  <span className="material-symbols-outlined text-primary dark:text-[#57FAE9]">psychology</span>
                </div>
                <h3 className="mb-4 text-2xl font-bold font-headline transition-colors duration-300 dark:text-[#F5F9FF]">AI-Driven Path Mapping</h3>
                <p className="text-on-surface-variant max-w-md leading-relaxed">Our proprietary algorithms analyze your trajectory and skills to architect a mentorship journey tailored to your specific architectural career goals.</p>
              </div>
              <div className="mt-12 flex gap-4 overflow-hidden">
                <div className="h-24 w-24 shrink-0 rounded-lg bg-surface-container dark:bg-[#10223E]"></div>
                <div className="h-24 w-24 shrink-0 rounded-lg bg-surface-container-high dark:bg-[#133056]"></div>
                <div className="h-24 w-24 shrink-0 rounded-lg bg-surface-container-highest dark:bg-[#19416B]"></div>
                <div className="h-24 w-24 shrink-0 rounded-lg bg-primary-fixed dark:bg-[#57FAE9]"></div>
              </div>
            </ScrollReveal>
            {/* Vertical Card */}
            <ScrollReveal className="animate-stagger-1 flex flex-col justify-between rounded-xl bg-[#003732] p-10 text-white shadow-sm transition-colors duration-300 dark:bg-[linear-gradient(180deg,#03221F,#0B3F3A)]">
              <div>
                <span className="material-symbols-outlined text-2xl sm:text-3xl md:text-4xl text-on-tertiary-container mb-6">workspace_premium</span>
                <h3 className="text-2xl font-bold font-headline mb-4">Elite Global Network</h3>
                <p className="text-white/80 leading-relaxed">Direct access to the top 1% of industry experts who have architected global successes.</p>
              </div>
              <a className="inline-flex items-center gap-2 font-bold text-on-tertiary-container hover:underline group" href="#">
                Explore Network
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </ScrollReveal>
            {/* Small Cards */}
            <ScrollReveal className="animate-stagger-1 rounded-xl bg-[#C4C7C9] p-8 shadow-sm transition-colors duration-300 dark:bg-[#0D1E35] dark:border dark:border-[#8AB4FF]/15">
              <h4 className="mb-2 text-2xl font-bold transition-colors duration-300 dark:text-[#F5F9FF]">Curated Insights</h4>
              <p className="text-sm text-on-surface-variant">Proprietary data to benchmark your growth against industry standards.</p>
            </ScrollReveal>
            <ScrollReveal className="animate-stagger-2 rounded-xl bg-[#E6E8EA] p-8 shadow-sm transition-colors duration-300 dark:bg-[#0A1930] dark:border dark:border-[#8AB4FF]/15">
              <h4 className="mb-2 text-2xl font-bold transition-colors duration-300 dark:text-[#F5F9FF]">Scaleable Flow</h4>
              <p className="text-sm text-on-surface-variant">Whether you are an individual or an enterprise, TalentFlow scales with your ambition.</p>
            </ScrollReveal>
            <ScrollReveal className="animate-stagger-3 rounded-xl bg-[#B1C5FF] p-8 shadow-sm transition-colors duration-300 dark:bg-[#0B315D] dark:border dark:border-[#57FAE9]/15">
              <h4 className="mb-2 text-2xl font-bold transition-colors duration-300 dark:text-[#F5F9FF]">Verified Success</h4>
              <p className="text-sm text-on-surface-variant">Every mentor is vetted through a 5-tier architectural expertise framework.</p>
            </ScrollReveal>
          </div>
        </section>

        {/* Featured Courses Section */}
        <section className="max-w-7xl mx-auto px-8 pb-24">
          <ScrollReveal className="text-center mb-16">
            <h2 className="mb-4 text-xl sm:text-2xl md:text-3xl sm:text-4xl md:text-5xl font-bold font-headline transition-colors duration-300 dark:text-[#F5F9FF]">Featured Curriculums</h2>
            <p className="mx-auto max-w-2xl text-sm sm:text-base text-[#434653] transition-colors duration-300 dark:text-[#9FB2D1]">Preview the blueprints crafted by our top 1% industry mentors.</p>
          </ScrollReveal>
          
          {loadingCourses ? (
            <div className="flex justify-center items-center h-48">
              <div className="w-12 h-12 border-4 border-t-primary border-gray-200 rounded-full animate-spin dark:border-gray-800 dark:border-t-[#57FAE9]"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredCourses.slice(0, 3).map((course, idx) => (
                <ScrollReveal key={course.id || idx} className="rounded-2xl bg-white shadow-ambient overflow-hidden transition-all hover:-translate-y-2 hover:shadow-xl dark:bg-[#0D1E35] dark:border dark:border-[#8AB4FF]/15 group">
                  <div className="aspect-video relative overflow-hidden bg-[#E0E3E5] dark:bg-[#0A1526]">
                    {(course.thumbnailUrl || course.img) ? (
                      <img src={(course.thumbnailUrl || course.img)} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[#74777F]">No Image</div>
                    )}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-[10px] font-black uppercase text-[#00327D] dark:bg-[#021223]/90 dark:text-[#57FAE9]">
                      {course.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#74777F] mb-3 dark:text-[#A8B7D8]">{course.level}</p>
                    <h3 className="text-xl font-bold font-headline mb-4 line-clamp-2 dark:text-[#F5F9FF]">{course.title}</h3>
                    <div className="flex items-center justify-between border-t border-[#F2F4F6] pt-4 mt-6 dark:border-[#2B4663]">
                      <span className="text-sm font-bold text-[#00419E] dark:text-[#57FAE9]">Explore Course</span>
                      <span className="material-symbols-outlined text-[#00419E] dark:text-[#57FAE9]">arrow_forward</span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
              {featuredCourses.length === 0 && (
                <div className="col-span-full text-center py-10 text-[#74777F] dark:text-[#A8B7D8]">
                  New curriculums arriving shortly.
                </div>
              )}
            </div>
          )}
        </section>

        {/* Become an Instructor Section */}
        <section className="relative overflow-hidden bg-[#0047AB] py-24 text-white transition-colors duration-300 dark:bg-[linear-gradient(180deg,#051326,#081C38)]">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-1/2 left-1/4 w-[60%] h-[60%] bg-blue-400 rounded-full blur-[140px]"></div>
          </div>
          
          <ScrollReveal className="max-w-4xl mx-auto px-4 sm:px-8 relative z-10 text-center">
            <h2 className="text-[2rem] sm:text-4xl md:text-5xl font-black font-headline tracking-tighter mb-4 sm:mb-6 leading-tight">Architect Your Legacy: Become a Mentor</h2>
            <p className="text-xl text-blue-100/80 mb-10 leading-relaxed font-medium">
              Join our elite network of global visionaries. Share your expertise, shape the next generation of industry leaders, and architect the future of professional growth.
            </p>
            <button 
              onClick={() => setShowInstructorContact(true)}
              className="bg-white text-[#0047AB] px-10 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm hover:scale-[1.05] transition-all shadow-2xl active:scale-95 dark:bg-[#57FAE9] dark:text-[#021223]"
            >
              Express Interest
            </button>
          </ScrollReveal>
        </section>
      </main>

      {/* Instructor Interest Modal */}
      {showInstructorContact && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#021223]/80 backdrop-blur-md" onClick={() => setShowInstructorContact(false)}></div>
          <div className="relative w-full max-w-xl bg-white rounded-3xl p-8 shadow-2xl animate-fade-in-up dark:bg-[#0D1E35] dark:border dark:border-[#57FAE9]/20">
            {!interestSubmitted ? (
              <>
                <h3 className="text-2xl font-bold font-headline mb-4 dark:text-white">Instructor Partnership</h3>
                <p className="text-[#434653] mb-6 dark:text-[#A8B7D8]">
                  Please review our professional standards and terms of engagement before expressing intertest.
                </p>
                <div className="bg-[#F7F9FB] rounded-2xl p-6 mb-8 max-h-48 overflow-y-auto border border-[#E0E3E5] dark:bg-[#08172E] dark:border-[#2559BD]/30">
                  <h4 className="font-bold text-sm mb-2 dark:text-[#57FAE9]">Terms and Conditions</h4>
                  <p className="text-xs text-[#434653] leading-relaxed dark:text-[#D2DEFF]">
                    By continuing, you agree to the TalentFlow Instructor Code of Conduct. You acknowledge that all content must meet our architectural precision standards and that your profile will be subject to professional vetting. You agree to provide accurate credentials and maintain a commitment to mentee growth. TalentFlow reserves the right to review and approve all instructor applications to ensure the highest quality of mentorship within our global ecosystem.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="group">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-outline mb-2 block dark:text-[#57FAE9]/60">Corporate Email</label>
                    <input 
                      type="email" 
                      placeholder="name@company.com"
                      className="w-full bg-[#F7F9FB] border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-[#2559BD] text-[#191C1E] dark:bg-[#0A1930] dark:text-white dark:ring-1 dark:ring-[#57FAE9]/20"
                    />
                  </div>
                  <button 
                    onClick={() => setInterestSubmitted(true)}
                    className="w-full bg-[#0047AB] text-white py-4 rounded-xl font-bold hover:bg-[#00327D] transition-colors dark:bg-[#57FAE9] dark:text-[#021223]"
                  >
                    Agree & Send Interest
                  </button>
                  <button 
                    onClick={() => setShowInstructorContact(false)}
                    className="w-full py-4 text-[#434653] font-medium hover:text-[#0047AB] transition-colors dark:text-[#DCE8FF] dark:hover:text-[#57FAE9]"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-[#57FAE9]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined text-[#0047AB] text-2xl sm:text-3xl md:text-4xl dark:text-[#57FAE9]">mark_email_read</span>
                </div>
                <h3 className="text-2xl font-bold font-headline mb-4 dark:text-white">Interest Logged</h3>
                <p className="text-[#434653] mb-8 dark:text-[#A8B7D8]">
                  Your interest has been communicated to the TalentFlow Administrative Council. An admin will contact you via your corporate email for the next steps in your provisioning.
                </p>
                <button 
                  onClick={() => setShowInstructorContact(false)}
                  className="w-full bg-[#0047AB] text-white py-4 rounded-xl font-bold dark:bg-[#57FAE9] dark:text-[#021223]"
                >
                  Return to Platform
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <AppFooter className="mt-24 bg-[#E0E3E5] transition-colors duration-300 dark:bg-[#061221]" links={[
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Contact Support', href: '#' },
        { label: 'Global Network', href: '#' },
      ]} />
    </>
  );
};

export default LandingPage;
