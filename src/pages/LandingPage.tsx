import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AppFooter from '../components/AppFooter';

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
  return (
    <>
      <Navbar
        links={[
          { label: 'Platform', to: '/' },
          { label: 'Mentorship', to: '/' },
          { label: 'Insights', to: '/' },
          { label: 'About', to: '/' },
        ]}
        rightSlot={
          <>
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
        {/* Hero Section */}
        <section className="relative max-w-7xl mx-auto px-8 min-h-[calc(100vh-6rem)] grid lg:grid-cols-2 gap-16 items-center">
          <div className="pointer-events-none absolute inset-x-0 top-8 h-64 bg-[radial-gradient(circle_at_top,rgba(87,250,233,0.16),transparent_42%)] opacity-0 blur-3xl transition-opacity duration-300 dark:opacity-100"></div>
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#D0E1FB] px-4 py-1.5 animate-fade-in-up transition-colors duration-300 dark:border dark:border-[#57FAE9]/20 dark:bg-[#08172E]/80 dark:shadow-[0_0_40px_rgba(87,250,233,0.08)]">
              <span className="material-symbols-outlined text-[#00327D] text-sm dark:text-[#57FAE9]" style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span>
              <span className="p-2 rounded-full text-sm font-bold tracking-wide uppercase text-[#38485D] dark:text-[#D2DEFF]">Premier Growth Platform</span>
            </div>
            <h1 className="text-6xl font-extrabold text-[#191C1E] leading-[1.1] font-headline tracking-tighter animate-fade-in-up animate-stagger-1 transition-colors duration-300 dark:text-[#F5F9FF]">
              Architecting the future of <span className="text-[#0047AB] italic dark:text-[#57FAE9]">career mentorship</span> and growth.
            </h1>
            <p className="text-xl text-[#434653] leading-relaxed max-w-lg animate-fade-in-up animate-stagger-2 transition-colors duration-300 dark:text-[#A8B7D8]">
              TalentFlow provides the blueprints for professional evolution. We connect visionaries with curated expertise to build the next generation of global industry leaders.
            </p>
            <div className="flex items-center gap-4 pt-4 animate-fade-in-up animate-stagger-3">
              <button className="rounded-lg bg-[#002C70] px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl active:scale-95 dark:bg-[linear-gradient(135deg,#0A5BFF,#57FAE9)] dark:text-[#021223] dark:shadow-[0_18px_35px_rgba(87,250,233,0.18)]">
                Get Started
              </button>
              <button className="flex items-center gap-2 rounded-lg px-8 py-4 font-bold text-[#002C70] transition-colors hover:bg-[#E6E8EA] dark:text-[#DCE8FF] dark:hover:bg-[#0B1A33]">
                <span className="material-symbols-outlined">play_circle</span>
                The TalentFlow Vision
              </button>
            </div>

          </div>
          <div className="relative">
            {/* Architectural Visual (Bento/Card Mashup) */}
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-64 rounded-xl overflow-hidden shadow-2xl">
                  <img className="w-full h-full object-cover" alt="Modern architectural glass building reflecting a blue sky with sharp geometric lines and premium corporate aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk5utjN07mkZOhvtLZIyLzTlvKn2L4iPZCxU2HE03HITuSyf687NvYeKy1N3BB3ni_PXK6x68sbgc75rNQ2L2yaSJm-G8klfuPjgpLJwHX36NoMakdz6P_Z2afHIAebaZV13Q7a3n9L2hbMhTqfjyw74ubS7f51FH_QDX66YnHaXq9NSQwc_7KrIjpQkDJ-Yp3aaAhNu-vnGsNf7SIO4uN_S4bTdHe0MSfe9aqNGnaSUESsnPKSC5Ebl9BWs9kMIL9tpe4Ug-K6OI" />
                </div>
                <div className="rounded-xl bg-surface-container-lowest p-6 shadow-lg transition-colors duration-300 dark:border dark:border-[#8AB4FF]/15 dark:bg-[#09172B]">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="material-symbols-outlined text-tertiary-container" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
                    <span className="font-bold text-on-surface">Career Pathing</span>
                  </div>
                  <p className="text-sm text-on-surface-variant italic">"The structural integrity of my career changed after just three sessions."</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative overflow-hidden rounded-xl bg-primary bg-[#002C70] p-8 text-white shadow-2xl transition-colors duration-300 dark:bg-[linear-gradient(145deg,#071529,#0B315D)] dark:ring-1 dark:ring-[#57FAE9]/15">
                  <div className="relative z-10">
                    <span className="material-symbols-outlined text-4xl mb-4">hub</span>
                    <h3 className="text-xl font-bold font-headline mb-2">Network Flow</h3>
                    <p className="text-sm text-primary-fixed-dim dark:text-[#B8C9F5]">Integrated mentorship ecosystems for modern enterprises.</p>
                  </div>
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary-container rounded-full opacity-50 blur-3xl"></div>
                </div>
                <div className="h-80 rounded-xl overflow-hidden shadow-2xl">
                  <img className="w-full h-full object-cover" alt="Interior of a clean minimalist minimalist designer studio with expansive windows and soft natural light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB06ZF4rJWSKN23zp2wWsqwcW2AAK2QkSoDP8VJd3XcOmygrHupDSMRzlmq1pV7oIZmyGUWmoHieax_B0EhzWAKlA3mVAirTYUI7btKWWdLkEFw7NS5SmkEjHY-urpnaWWOzby9uwXtVCfd0xjLeIluwlQol8d9sOChqyuzLcu8hwIJZKuYVi7WMjsB_7DuwjZ7MBOWgf9H2W7DOYgCqdKZeTdDRVZqyp5Ox8q3TvJ3ndRGc5lXidkY5yfCJZDARcfbOl7kxPydQ1M" />
                </div>
              </div>
            </div>
            {/* Background Accent Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary-container/5 rounded-full blur-[100px] -z-10"></div>
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
                <div className="text-6xl font-black font-headline tracking-tight">
                  <CountUp end={15} suffix="k+" />
                </div>
                <div className="text-blue-100/60 font-bold uppercase tracking-[0.2em] text-xs">Global Mentors</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-6xl font-black font-headline tracking-tight">
                  <CountUp end={94} suffix="%" />
                </div>
                <div className="text-blue-100/60 font-bold uppercase tracking-[0.2em] text-xs">Growth Rate</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-6xl font-black font-headline tracking-tight">
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
            <h2 className="mb-4 text-4xl font-bold font-headline transition-colors duration-300 dark:text-[#F5F9FF]">Precision Engineering for Potential</h2>
            <p className="mx-auto max-w-2xl animate-stagger-1 text-[#434653] transition-colors duration-300 dark:text-[#9FB2D1]">We replace generic advice with architectural precision, ensuring every career move is supported by data and world-class mentorship.</p>
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
                <span className="material-symbols-outlined text-4xl text-on-tertiary-container mb-6">workspace_premium</span>
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
      </main>
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
