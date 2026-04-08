import React from 'react';
import { useParams, Link } from 'react-router-dom';

const CertificatePage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  
  // Simple mapping for demo purposes
  const getCourseTitle = (slug?: string) => {
    if (slug?.includes('visual-logic')) return "Visual Logic: Fundamentals";
    if (slug?.includes('modern-ui')) return "Modern UI Design Principles";
    return "Professional Accreditation";
  };

  const certificateData = {
    userName: "Alex Rivera",
    courseTitle: getCourseTitle(courseId),
    completionDate: "October 24, 2023",
    certificateId: "TF-8842-XCV-99",
    instructorName: "Julian Architect",
    instructorRole: "Senior Studio Instructor"
  };

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#F0F2F5] flex flex-col items-center justify-center p-4 md:p-10 font-body">
      {/* Navigation / Actions bar */}
      <div className="max-w-4xl w-full flex justify-between items-center mb-8 print:hidden animate-fade-in">
        <Link to="/learner/my-learning" className="flex items-center gap-2 text-[#434653] font-bold hover:text-[#00419E] transition-colors">
          <span className="material-symbols-outlined font-bold">arrow_back</span>
          Back to My Learning
        </Link>
        <button 
          onClick={handleDownload}
          className="bg-[#00327D] text-white px-8 py-3 rounded-xl font-black flex items-center gap-2 hover:bg-[#00419E] transition-all shadow-lg active:scale-95"
        >
          <span className="material-symbols-outlined">download</span>
          Download Certificate
        </button>
      </div>

      {/* Certificate Container */}
      <div 
        className="relative bg-white shadow-2xl rounded-sm overflow-hidden aspect-[1.414/1] w-full max-w-[1000px] border-[12px] border-white shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] animate-scale-in"
        id="certificate-content"
      >
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/certificate_bg.png" 
            alt="Certificate Background" 
            className="w-full h-full object-cover opacity-90"
          />
        </div>

        {/* Certificate Content Overlay */}
        <div className="relative z-10 h-full w-full flex flex-col items-center justify-center p-16 text-center text-[#191C1E]">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-[#00327D] font-black uppercase tracking-[0.5em] text-xs mb-4">TalentFlow Academy</h2>
            <h1 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight text-[#191C1E]">Certificate of Completion</h1>
          </div>

          {/* Body */}
          <div className="space-y-6 max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#74777F]">This is to certify that</p>
            <h3 className="text-3xl md:text-4xl font-black font-headline text-[#002C70] italic underline decoration-[#57FAE9] decoration-4 underline-offset-8">
              {certificateData.userName}
            </h3>
            <p className="text-sm font-medium text-[#434653] leading-relaxed px-10 pt-4">
              Has successfully architected their path and demonstrated professional mastery in the comprehensive curriculum of
            </p>
            <h4 className="text-2xl font-bold text-[#191C1E] font-headline pt-2">
              {certificateData.courseTitle}
            </h4>
          </div>

          {/* Footer Info */}
          <div className="mt-16 w-full flex justify-between items-end px-12">
            <div className="text-left space-y-2">
               <div className="w-40 border-b-2 border-[#191C1E]">
                  <p className="font-headline font-bold text-lg italic text-[#00327D] pb-1">J. Architect</p>
               </div>
               <p className="text-[10px] font-black uppercase tracking-wider text-[#191C1E]">{certificateData.instructorName}</p>
               <p className="text-[8px] font-bold text-[#74777F] uppercase tracking-widest">{certificateData.instructorRole}</p>
            </div>

            <div className="flex flex-col items-center">
               <div className="w-16 h-16 bg-[#F7F9FB] rounded-full flex items-center justify-center border border-[#C3C6D5]/30 mb-2">
                  <span className="material-symbols-outlined text-[#00327D] text-3xl">verified_user</span>
               </div>
               <p className="text-[8px] font-black uppercase tracking-widest text-[#74777F]">Verified Identity</p>
            </div>

            <div className="text-right space-y-2">
               <p className="text-[10px] font-black uppercase tracking-widest text-[#74777F]">Issued On</p>
               <p className="font-bold text-sm text-[#191C1E]">{certificateData.completionDate}</p>
               <p className="text-[9px] font-bold text-[#00327D]/60 pt-2 tracking-tighter">ID: {certificateData.certificateId}</p>
            </div>
          </div>
        </div>

        {/* Corner Accents */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-[#00327D]/5 rotate-45 translate-x-12 -translate-y-12"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#57FAE9]/10 rotate-45 -translate-x-12 translate-y-12"></div>
      </div>

      {/* Styles */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
        .animate-scale-in { animation: scaleIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

        @media print {
          @page {
            size: landscape;
            margin: 0;
          }
          body {
            background: white !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          .print\\:hidden {
            display: none !important;
          }
          #certificate-content {
            box-shadow: none !important;
            border: none !important;
            width: 100vw !important;
            height: 100vh !important;
            max-width: none !important;
            border-radius: 0 !important;
          }
        }
      `}</style>

      <p className="mt-8 text-xs font-bold text-[#74777F] print:hidden uppercase tracking-widest">
        TalentFlow Accredited Program • Verification ID: {certificateData.certificateId}
      </p>
    </div>
  );
};

export default CertificatePage;
