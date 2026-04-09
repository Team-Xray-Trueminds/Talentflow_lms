import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function InstructorCourseBuilder() {
  const navigate = useNavigate();

  // --- Image Upload State & Handlers ---
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [coverImage, setCoverImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCoverImage(url);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      setCoverImage(url);
    }
  };

  const clearImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCoverImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // --- Rich Text Handlers ---
  const contentEditableRef = useRef<HTMLDivElement>(null);

  const handleFormat = (command: string) => {
    document.execCommand(command, false);
    contentEditableRef.current?.focus();
  };

  const handleLink = () => {
    const url = prompt('Enter link URL:');
    if (url) {
      document.execCommand('createLink', false, url);
    }
    contentEditableRef.current?.focus();
  };

  return (
    <div className="flex flex-col min-h-screen font-sans pb-32 bg-brand-page">

      {/* ── Top Header ── */}
      <header className="h-20 flex items-center justify-between px-10 shrink-0 w-full shadow-sm z-20 sticky top-0 bg-white border-b border-gray-200">
        <div className="flex items-center h-full">
          <h1 className="text-xl font-black tracking-tight whitespace-nowrap mr-16 text-brand-navy">
            Architectural Curator
          </h1>
          <nav className="flex items-center gap-10 h-full">
            <Link
              to="/instructor/dashboard"
              className="text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors h-full flex items-center pt-1 whitespace-nowrap"
            >
              Dashboard
            </Link>
            <div className="text-sm font-bold text-brand-navy border-b-[3px] border-brand-navy h-full flex items-center pt-1 whitespace-nowrap">
              Courses
            </div>
            <Link
              to="#"
              className="text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors h-full flex items-center pt-1 whitespace-nowrap"
            >
              Students
            </Link>
            <Link
              to="/instructor/analytics"
              className="text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors h-full flex items-center pt-1 whitespace-nowrap"
            >
              Analytics
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <button className="text-gray-500 hover:text-gray-900 transition-colors flex bg-transparent outline-none cursor-pointer">
            <span className="material-symbols-outlined text-2xl">notifications</span>
          </button>
          <button className="text-gray-500 hover:text-gray-900 transition-colors flex bg-transparent outline-none cursor-pointer">
            <span className="material-symbols-outlined text-2xl">help</span>
          </button>
          <button className="text-white px-7 py-3 rounded-xl text-sm font-bold shadow-sm transition-transform active:scale-95 whitespace-nowrap ml-2 cursor-pointer bg-brand-navy">
            Publish Course
          </button>
          <div className="w-11 h-11 rounded-full overflow-hidden shrink-0 shadow-sm ml-2">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOob43RVwc0CW12KB2DOBUtlHf-ew8BT46J0LkWSlklYMWRvTXlfGxTj8f_hGk8DCjxYTFV0FYgMSdkIchWPU2n2hN7odES9Y79DF2NjAD-N8AdXIh5Jqwuyr3gqbeQ6gQO9lHGathfnZ8t7xnUX7qARnkKnypxwL4TgPHwGE30jrZpU1GLNKHnIrF5FFm7Q1ZpHlQVl4KPpTMjINcfIXSwtWpEM4tMy34N59zfkcEZQrDOxVXaSd1q8rnaMb9573149iRc69wJQw"
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>

      {/* ── Main 3-Column Layout ── */}
      <div className="flex flex-1 w-full max-w-[1400px] mx-auto px-8 lg:px-12 gap-12 items-stretch pt-10">

        {/* ── Left Sidebar ── */}
        <div className="w-60 flex flex-col shrink-0">
          <h2 className="font-extrabold text-lg mb-1 tracking-tight text-brand-navy">Course Builder</h2>
          <p className="text-xs font-semibold mb-10 text-brand-muted">Step 1 of 4</p>

          <nav className="flex flex-col gap-2">
            {/* Active step */}
            <div className="flex items-center gap-3 font-bold text-sm py-4 px-5 rounded-2xl shadow-sm bg-white text-brand-blue border-l-4 border-brand-blue">
              <span className="material-symbols-outlined text-[22px]">edit_note</span>
              <span>Course Details</span>
            </div>
            <div className="flex items-center gap-3 font-bold text-sm py-4 px-5 rounded-2xl cursor-pointer transition-colors text-brand-slate">
              <span className="material-symbols-outlined text-[22px]">view_module</span>
              <span>Module Setup</span>
            </div>
            <div className="flex items-center gap-3 font-bold text-sm py-4 px-5 rounded-2xl cursor-pointer transition-colors text-brand-slate">
              <span className="material-symbols-outlined text-[22px]">cloud_upload</span>
              <span>Content Upload</span>
            </div>
            <div className="flex items-center gap-3 font-bold text-sm py-4 px-5 rounded-2xl cursor-pointer transition-colors text-brand-slate">
              <span className="material-symbols-outlined text-[22px]">help_center</span>
              <span>Assignment Builder</span>
            </div>
          </nav>
        </div>

        {/* ── Center Form ── */}
        <main className="flex-1 max-w-[680px] flex flex-col min-w-0">
          {/* Progress header */}
          <div className="flex flex-col mb-6 mt-1">
            <div className="flex justify-between items-end mb-3">
              <p className="text-xs font-black tracking-[0.15em] uppercase text-brand-blue">STEP 1 OF 4</p>
              <p className="text-xs font-bold tracking-wide text-brand-slate">25% Completed</p>
            </div>
            <div className="w-full h-1.5 rounded-full overflow-hidden bg-brand-divider">
              <div className="w-1/4 h-full rounded-full bg-brand-blue"></div>
            </div>
          </div>

          {/* Form card */}
          <div className="rounded-3xl p-8 shadow-sm flex flex-col bg-white border border-brand-border">
            <div className="flex flex-col gap-8">

              {/* Course Title */}
              <div>
                <label className="block text-[13px] font-bold mb-3 text-brand-dark">Course Title</label>
                <input
                  type="text"
                  placeholder="e.g. Architectural Design System"
                  className="w-full rounded-2xl px-5 py-4 text-sm focus:outline-none font-medium border-none bg-brand-surface text-brand-dark"
                />
              </div>

              {/* Academic Category */}
              <div>
                <label className="block text-[13px] font-bold mb-3 text-brand-dark">Academic Category</label>
                <div className="relative">
                  <select className="appearance-none w-full rounded-2xl px-5 py-4 text-sm focus:outline-none font-medium cursor-pointer border-none bg-brand-surface text-brand-mid">
                    <option>Select Academic Field</option>
                    <option>UI Architecture</option>
                    <option>Frontend Engineering</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-xl text-brand-slate">
                    expand_more
                  </span>
                </div>
              </div>

              {/* Course Description – rich text */}
              <div>
                <label className="block text-[13px] font-bold mb-3 text-brand-dark">Course Description</label>
                <div className="rounded-2xl overflow-hidden flex flex-col bg-brand-surface" style={{ minHeight: '160px' }}>
                  {/* Toolbar */}
                  <div className="px-5 py-3 flex items-center gap-6 border-b border-brand-divider shrink-0 bg-brand-back">
                    <button
                      title="Bold"
                      type="button"
                      onClick={() => handleFormat('bold')}
                      className="rounded p-1 flex leading-none bg-transparent outline-none hover:bg-black/5 transition-colors cursor-pointer text-brand-mid"
                    >
                      <span className="material-symbols-outlined text-[18px]">format_bold</span>
                    </button>
                    <button
                      title="Italic"
                      type="button"
                      onClick={() => handleFormat('italic')}
                      className="rounded p-1 flex leading-none bg-transparent outline-none hover:bg-black/5 transition-colors cursor-pointer text-brand-mid"
                    >
                      <span className="material-symbols-outlined text-[18px]">format_italic</span>
                    </button>
                    <button
                      title="Bullet List"
                      type="button"
                      onClick={() => handleFormat('insertUnorderedList')}
                      className="rounded p-1 flex leading-none bg-transparent outline-none hover:bg-black/5 transition-colors cursor-pointer text-brand-mid"
                    >
                      <span className="material-symbols-outlined text-[18px]">format_list_bulleted</span>
                    </button>
                    <button
                      title="Insert Link"
                      type="button"
                      onClick={handleLink}
                      className="rounded p-1 flex leading-none bg-transparent outline-none hover:bg-black/5 transition-colors cursor-pointer text-brand-mid"
                    >
                      <span className="material-symbols-outlined text-[18px]">link</span>
                    </button>
                  </div>

                  {/* Editable area */}
                  <div
                    ref={contentEditableRef}
                    contentEditable
                    className="w-full px-5 py-4 focus:outline-none flex-1 text-sm leading-relaxed text-brand-dark"
                    onInput={(e) => {
                      if (e.currentTarget.textContent?.trim() === '') {
                        e.currentTarget.innerHTML = '';
                      }
                    }}
                  />
                  {/* Scoped styles for contenteditable behaviour – these cannot be expressed as Tailwind classes */}
                  <style>{`
                    div[contenteditable]:empty::before {
                      content: "Define your course curriculum and learning objectives...";
                      color: #94a3b8;
                      pointer-events: none;
                      display: block;
                    }
                    div[contenteditable] ul {
                      list-style-type: disc;
                      padding-left: 2rem;
                      margin-top: 0.5rem;
                      margin-bottom: 0.5rem;
                    }
                    div[contenteditable] a {
                      color: #0047AB;
                      text-decoration: underline;
                    }
                  `}</style>
                </div>
              </div>

              {/* Cover Image */}
              <div>
                <label className="block text-[13px] font-bold mb-3 text-brand-dark">
                  Course Cover Image (16:9 Recommended)
                </label>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-[20px] flex flex-col items-center justify-center cursor-pointer overflow-hidden group relative transition-all h-[220px] ${
                    coverImage
                      ? 'border-transparent bg-black'
                      : 'border-brand-upload-border bg-brand-upload hover:bg-black/5'
                  }`}
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    accept="image/*"
                    className="hidden"
                  />

                  {coverImage ? (
                    <div className="w-full h-full relative">
                      <img src={coverImage} alt="Cover Preview" className="w-full h-full object-cover" />
                      <button
                        onClick={clearImage}
                        title="Remove Image"
                        className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors z-20 cursor-pointer text-brand-dark"
                      >
                        <span className="material-symbols-outlined text-xl">close</span>
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="w-15 h-15 rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform z-10 bg-white text-brand-blue">
                        <span className="material-symbols-outlined text-[32px]">cloud_upload</span>
                      </div>
                      <p className="text-[15px] font-bold mb-1.5 z-10 text-center text-brand-dark">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-[11px] font-bold z-10 text-center uppercase tracking-widest text-brand-slate">
                        PNG, JPG, OR WEBP (MAX. 5MB)
                      </p>
                    </>
                  )}
                </div>
              </div>

            </div>
          </div>
        </main>

        {/* ── Right Sidebar ── */}
        <div className="w-[340px] flex flex-col pt-1 shrink-0">
          <div className="flex flex-col gap-6">

            {/* Architect's Tip card */}
            <div className="rounded-3xl p-8 relative shadow-lg overflow-hidden bg-brand-tip-bg text-white">
              <div className="flex items-center mb-5 relative z-10">
                <span className="material-symbols-outlined text-xl text-brand-tip-accent mr-3">architecture</span>
                <span className="font-bold text-sm tracking-wide">Architect's Tip</span>
              </div>
              <span className="material-symbols-outlined text-[56px] text-white/10 opacity-80 absolute -right-3 -top-3">
                emoji_objects
              </span>
              <p className="text-[13px] leading-relaxed font-medium relative z-10 mt-2 text-brand-tip-text">
                "A course title is like the foundation of a skyscraper. It needs to be structural yet
                inspiring. Aim for 5-8 words that clearly state the value proposition."
              </p>
              <div className="w-12 h-1 mt-8 rounded-full relative z-10 bg-brand-tip-accent"></div>
            </div>

            {/* Setup Progress card */}
            <div className="rounded-3xl p-8 shadow-sm border bg-white border-brand-border">
              <h3 className="font-extrabold text-sm mb-8 tracking-tight text-brand-dark">Setup Progress</h3>

              <div className="space-y-8 relative ml-2">
                {/* connector line */}
                <div className="absolute left-3 top-2 bottom-6 w-0.5 bg-brand-divider"></div>

                <div className="flex gap-5 relative z-10">
                  <div className="w-[26px] h-[26px] rounded-full text-white flex items-center justify-center text-[10px] font-black shadow-md shrink-0 outline outline-4 outline-white bg-brand-navy">
                    1
                  </div>
                  <div className="pt-0.5">
                    <p className="text-[13px] font-bold leading-none text-brand-dark">Course Identity</p>
                    <p className="text-[11px] font-medium mt-1.5 text-brand-slate">Title, description & category</p>
                  </div>
                </div>

                <div className="flex gap-5 relative z-10 opacity-70">
                  <div className="w-[26px] h-[26px] rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 outline outline-4 outline-white border-2 bg-brand-back text-brand-mid border-brand-divider">
                    2
                  </div>
                  <div className="pt-0.5">
                    <p className="text-[13px] font-bold leading-none text-brand-dark">Curriculum Structure</p>
                    <p className="text-[11px] font-medium mt-1.5 text-brand-slate">Modules and lesson mapping</p>
                  </div>
                </div>

                <div className="flex gap-5 relative z-10 opacity-70">
                  <div className="w-[26px] h-[26px] rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 outline outline-4 outline-white border-2 bg-brand-back text-brand-mid border-brand-divider">
                    3
                  </div>
                  <div className="pt-0.5">
                    <p className="text-[13px] font-bold leading-none text-brand-dark">Resource Portal</p>
                    <p className="text-[11px] font-medium mt-1.5 text-brand-slate">Upload PDFs and assets</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ── Sticky Footer Action Bar ── */}
      <div className="fixed bottom-0 left-0 w-full z-50 pointer-events-none pb-8 pt-10 bg-gradient-to-t from-brand-page via-brand-page/60 to-transparent">
        <div className="flex flex-row w-full max-w-[1400px] mx-auto px-8 lg:px-12 gap-12 items-end">

          {/* Save Draft — left column */}
          <div className="w-60 shrink-0 pointer-events-auto">
            <button className="font-bold py-4 rounded-2xl text-sm w-full text-center transition-colors shadow-sm cursor-pointer bg-brand-draft text-brand-navy">
              Save Draft
            </button>
          </div>

          {/* Exit Wizard / Back — center column */}
          <div className="flex-1 max-w-[680px] min-w-0 pointer-events-auto">
            <div className="rounded-2xl px-8 h-[72px] shadow-md border bg-white border-brand-border flex flex-row justify-between items-center">
              <button
                onClick={() => navigate(-1)}
                className="font-bold transition-colors text-sm bg-transparent outline-none whitespace-nowrap cursor-pointer text-brand-navy flex items-center"
              >
                <span className="material-symbols-outlined text-[18px] mr-2">close</span>
                Exit Wizard
              </button>
              <button
                onClick={() => navigate(-1)}
                className="font-bold text-sm outline-none whitespace-nowrap px-8 py-3 rounded-xl cursor-pointer bg-brand-back text-brand-navy"
              >
                Back
              </button>
            </div>
          </div>

          {/* Next Step — right column */}
          <div className="w-[340px] shrink-0 pointer-events-auto">
            <button
              onClick={() => navigate('/instructor/curriculum-builder')}
              className="w-full h-[72px] text-white px-7 rounded-2xl font-bold text-sm shadow-lg transition-colors active:scale-95 whitespace-nowrap cursor-pointer bg-brand-blue flex justify-center items-center"
            >
              Next Step: Curriculum Builder
              <span className="material-symbols-outlined text-[18px] ml-2">arrow_forward</span>
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}
