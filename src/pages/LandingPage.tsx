import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

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
            <Link to="/login" className="text-[#434653] dark:text-[#c3c6d5] font-medium hover:text-[#0047AB] transition-all">
              Sign In
            </Link>
            <Link
              to="/login"
              className="bg-linear-to-r from-primary to-primary-container text-white px-6 py-2.5 rounded-lg font-bold scale-95 transition-transform duration-200 hover:scale-100"
            >
              Get Started
            </Link>
          </>
        }
      />
      <main className="pt-24 min-h-screen">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-8 py-16 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-secondary-container px-4 py-1.5 rounded-full">
              <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span>
              <span className="text-on-secondary-fixed-variant text-sm font-bold tracking-wide uppercase">Premier Growth Platform</span>
            </div>
            <h1 className="text-6xl font-extrabold text-on-surface leading-[1.1] font-headline tracking-tighter">
              Architecting the future of <span className="text-primary italic">career mentorship</span> and growth.
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed max-w-lg">
              TalentFlow provides the blueprints for professional evolution. We connect visionaries with curated expertise to build the next generation of global industry leaders.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <button className="bg-linear-to-r from-primary to-primary-container text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all">
                Get Started
              </button>
              <button className="flex items-center gap-2 text-primary font-bold px-8 py-4 rounded-lg hover:bg-surface-container-high transition-colors">
                <span className="material-symbols-outlined">play_circle</span>
                The TalentFlow Vision
              </button>
            </div>
            <div className="pt-8 grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-black text-primary font-headline">15k+</div>
                <div className="text-sm text-on-surface-variant font-medium">Global Mentors</div>
              </div>
              <div>
                <div className="text-3xl font-black text-primary font-headline">94%</div>
                <div className="text-sm text-on-surface-variant font-medium">Growth Rate</div>
              </div>
              <div>
                <div className="text-3xl font-black text-primary font-headline">200+</div>
                <div className="text-sm text-on-surface-variant font-medium">Enterprises</div>
              </div>
            </div>
          </div>
          <div className="relative">
            {/* Architectural Visual (Bento/Card Mashup) */}
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-64 rounded-xl overflow-hidden shadow-2xl">
                  <img className="w-full h-full object-cover" alt="Modern architectural glass building reflecting a blue sky with sharp geometric lines and premium corporate aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk5utjN07mkZOhvtLZIyLzTlvKn2L4iPZCxU2HE03HITuSyf687NvYeKy1N3BB3ni_PXK6x68sbgc75rNQ2L2yaSJm-G8klfuPjgpLJwHX36NoMakdz6P_Z2afHIAebaZV13Q7a3n9L2hbMhTqfjyw74ubS7f51FH_QDX66YnHaXq9NSQwc_7KrIjpQkDJ-Yp3aaAhNu-vnGsNf7SIO4uN_S4bTdHe0MSfe9aqNGnaSUESsnPKSC5Ebl9BWs9kMIL9tpe4Ug-K6OI" />
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-xl shadow-lg border-l-4 border-primary">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="material-symbols-outlined text-tertiary-container" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
                    <span className="font-bold text-on-surface">Career Pathing</span>
                  </div>
                  <p className="text-sm text-on-surface-variant italic">"The structural integrity of my career changed after just three sessions."</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-primary p-8 rounded-xl text-white shadow-2xl relative overflow-hidden">
                  <div className="relative z-10">
                    <span className="material-symbols-outlined text-4xl mb-4">hub</span>
                    <h3 className="text-xl font-bold font-headline mb-2">Network Flow</h3>
                    <p className="text-sm text-primary-fixed-dim">Integrated mentorship ecosystems for modern enterprises.</p>
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
        {/* Trusted Partners (Subtle Tonal Shift) */}
        <section className="bg-surface-container-low py-16">
          <div className="max-w-7xl mx-auto px-8">
            <p className="text-center text-sm font-bold tracking-widest text-on-surface-variant uppercase mb-12">Architecting growth for world-class teams</p>
            <div className="flex flex-wrap justify-center items-center gap-16 opacity-50 grayscale contrast-125">
              <span className="text-2xl font-black font-headline tracking-tighter">NEXUS</span>
              <span className="text-2xl font-black font-headline tracking-tighter">ORION</span>
              <span className="text-2xl font-black font-headline tracking-tighter">LUMINA</span>
              <span className="text-2xl font-black font-headline tracking-tighter">STRATOS</span>
              <span className="text-2xl font-black font-headline tracking-tighter">APEX</span>
            </div>
          </div>
        </section>
        {/* Bento Highlights Section */}
        <section className="max-w-7xl mx-auto px-8 py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-headline mb-4">Precision Engineering for Potential</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">We replace generic advice with architectural precision, ensuring every career move is supported by data and world-class mentorship.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Large Feature Card */}
            <div className="md:col-span-2 bg-surface-container-lowest p-10 rounded-xl flex flex-col justify-between relative overflow-hidden group shadow-sm">
              <div className="relative z-10">
                <div className="w-12 h-12 bg-secondary-container flex items-center justify-center rounded-lg mb-6">
                  <span className="material-symbols-outlined text-primary">psychology</span>
                </div>
                <h3 className="text-2xl font-bold font-headline mb-4">AI-Driven Path Mapping</h3>
                <p className="text-on-surface-variant max-w-md leading-relaxed">Our proprietary algorithms analyze your trajectory and skills to architect a mentorship journey tailored to your specific architectural career goals.</p>
              </div>
              <div className="mt-12 flex gap-4 overflow-hidden">
                <div className="w-24 h-24 bg-surface-container rounded-lg shrink-0"></div>
                <div className="w-24 h-24 bg-surface-container-high rounded-lg shrink-0"></div>
                <div className="w-24 h-24 bg-surface-container-highest rounded-lg shrink-0"></div>
                <div className="w-24 h-24 bg-primary-fixed rounded-lg shrink-0"></div>
              </div>
            </div>
            {/* Vertical Card */}
            <div className="bg-tertiary-container p-10 rounded-xl text-white flex flex-col justify-between shadow-sm">
              <div>
                <span className="material-symbols-outlined text-4xl text-on-tertiary-container mb-6">workspace_premium</span>
                <h3 className="text-2xl font-bold font-headline mb-4">Elite Global Network</h3>
                <p className="text-white/80 leading-relaxed">Direct access to the top 1% of industry experts who have architected global successes.</p>
              </div>
              <a className="inline-flex items-center gap-2 font-bold text-on-tertiary-container hover:underline group" href="#">
                Explore Network
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
            {/* Small Cards */}
            <div className="bg-surface-container-high p-8 rounded-xl shadow-sm">
              <h4 className="font-bold text-lg mb-2">Curated Insights</h4>
              <p className="text-sm text-on-surface-variant">Proprietary data to benchmark your growth against industry standards.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-xl border-t-4 border-primary shadow-sm">
              <h4 className="font-bold text-lg mb-2">Scaleable Flow</h4>
              <p className="text-sm text-on-surface-variant">Whether you are an individual or an enterprise, TalentFlow scales with your ambition.</p>
            </div>
            <div className="bg-secondary-fixed p-8 rounded-xl shadow-sm">
              <h4 className="font-bold text-lg mb-2">Verified Success</h4>
              <p className="text-sm text-on-surface-variant">Every mentor is vetted through a 5-tier architectural expertise framework.</p>
            </div>
          </div>
        </section>
      </main>
      {/* Footer (Shared Component) */}
      <footer className="w-full py-12 bg-[#f2f4f6] dark:bg-[#191c1e] mt-24">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 max-w-7xl mx-auto">
          <div className="mb-8 md:mb-0">
            <div className="font-['Manrope'] font-bold text-[#191c1e] dark:text-[#ffffff] text-xl mb-2">TalentFlow</div>
            <p className="font-['Inter'] text-sm tracking-wide text-[#434653] dark:text-[#c3c6d5]">© 2024 TalentFlow. Architecting the future of career mentorship.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a className="font-['Inter'] text-sm tracking-wide text-[#434653] dark:text-[#c3c6d5] hover:text-[#00327d] dark:hover:text-white transition-all opacity-80 hover:opacity-100" href="#">Privacy Policy</a>
            <a className="font-['Inter'] text-sm tracking-wide text-[#434653] dark:text-[#c3c6d5] hover:text-[#00327d] dark:hover:text-white transition-all opacity-80 hover:opacity-100" href="#">Terms of Service</a>
            <a className="font-['Inter'] text-sm tracking-wide text-[#434653] dark:text-[#c3c6d5] hover:text-[#00327d] dark:hover:text-white transition-all opacity-80 hover:opacity-100" href="#">Contact Support</a>
            <a className="font-['Inter'] text-sm tracking-wide text-[#434653] dark:text-[#c3c6d5] hover:text-[#00327d] dark:hover:text-white transition-all opacity-80 hover:opacity-100" href="#">Global Network</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;