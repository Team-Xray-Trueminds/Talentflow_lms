import { useMemo, useState } from 'react'
import Sidebar from '../components/Sidebar'
import BottomNav from '../components/layout/BottomNav'

type ReplyItem = {
  author: string
  role: string
  body: string
  time: string
  reaction: string
}

type ThreadItem = {
  id: number
  title: string
  author: string
  role: string
  body: string
  time: string
  pinned?: boolean
  notifyLabel: string
  tag: string
  participants: number
  views: number
  unresolved?: boolean
  replies: ReplyItem[]
}

const discussionFlow = {
  title: 'Discussion Area',
  action: 'Post question / reply to thread',
  system: 'Save post; notify participants',
  destination: 'Thread View',
}

const initialThreads: ThreadItem[] = [
  {
    id: 1,
    title: 'How are you structuring final portfolio case studies?',
    author: 'Alex Rivera',
    role: 'Learner',
    body:
      'I am refining my final portfolio narrative and want to balance process, visuals, and impact. How are you sequencing problem, system decisions, and measurable results without making the case study feel too long?',
    time: '12 min ago',
    pinned: true,
    notifyLabel: '8 participants notified',
    tag: 'Portfolio',
    participants: 8,
    views: 126,
    unresolved: true,
    replies: [
      {
        author: 'Seyi Daniels',
        role: 'Learner',
        body: 'I open with one summary frame, then move into the key system constraints before showing the polished screens.',
        time: '9 min ago',
        reaction: 'Useful framing',
      },
      {
        author: 'Mara Kent',
        role: 'Mentor',
        body: 'Try using a three-part structure: challenge, structural decisions, and outcome evidence. That usually keeps the story clear.',
        time: '4 min ago',
        reaction: 'Mentor pick',
      },
    ],
  },
  {
    id: 2,
    title: 'Best way to prepare for mentor critique sessions',
    author: 'Nina Cole',
    role: 'Learner',
    body:
      'What do you bring into a critique so the session becomes more actionable? I want sharper feedback instead of very broad comments.',
    time: '31 min ago',
    notifyLabel: '5 participants notified',
    tag: 'Critique',
    participants: 5,
    views: 84,
    replies: [
      {
        author: 'Jesse Ward',
        role: 'Learner',
        body: 'I usually prepare two questions only: what is unclear, and what looks weakest in the hierarchy.',
        time: '18 min ago',
        reaction: 'Tactical tip',
      },
      {
        author: 'Hawa Bello',
        role: 'Learner',
        body: 'I also attach one screenshot with annotations. That gives mentors something concrete to react to immediately.',
        time: '7 min ago',
        reaction: 'High signal',
      },
    ],
  },
  {
    id: 3,
    title: 'Frontend vs UI/UX learning order for faster progress',
    author: 'Lena Yusuf',
    role: 'Learner',
    body:
      'For people balancing design and implementation, which path created better momentum for you first: interface thinking or frontend fundamentals?',
    time: '1 hr ago',
    notifyLabel: '11 participants notified',
    tag: 'Growth Path',
    participants: 11,
    views: 152,
    replies: [
      {
        author: 'Ayo Mensah',
        role: 'Mentor',
        body: 'If your goal is product execution, pair them. Learn hierarchy and spacing while building real components at the same time.',
        time: '46 min ago',
        reaction: 'Mentor insight',
      },
      {
        author: 'Rachel Stone',
        role: 'Learner',
        body: 'Frontend first helped me remove fear. Once I could build, the design lessons became easier to retain.',
        time: '21 min ago',
        reaction: 'Perspective',
      },
    ],
  },
  {
    id: 4,
    title: 'How are people documenting design system decisions for handoff?',
    author: 'Mide Okafor',
    role: 'Learner',
    body:
      'I want a lightweight handoff format that explains component intent, spacing rules, and edge cases without writing a giant spec.',
    time: '2 hr ago',
    notifyLabel: '6 participants notified',
    tag: 'Design Systems',
    participants: 6,
    views: 67,
    unresolved: true,
    replies: [
      {
        author: 'Jordan Lake',
        role: 'Learner',
        body: 'I keep one page per component with intent, constraints, variants, and one anti-pattern example.',
        time: '1 hr ago',
        reaction: 'Clean workflow',
      },
      {
        author: 'Tara Obi',
        role: 'Mentor',
        body: 'Short principle notes beat long specs. Teams usually need decision rationale more than decoration-level detail.',
        time: '34 min ago',
        reaction: 'Mentor pick',
      },
    ],
  },
]

export default function DiscussionsPage() {
  const [threads, setThreads] = useState(initialThreads)
  const [activeThreadId, setActiveThreadId] = useState(initialThreads[0].id)
  const [questionText, setQuestionText] = useState('')
  const [replyText, setReplyText] = useState('')
  const [searchText, setSearchText] = useState('')

  const filteredThreads = useMemo(() => {
    const query = searchText.trim().toLowerCase()
    if (!query) return threads

    return threads.filter(
      (thread) =>
        thread.title.toLowerCase().includes(query) ||
        thread.body.toLowerCase().includes(query) ||
        thread.replies.some((reply) => reply.body.toLowerCase().includes(query)),
    )
  }, [searchText, threads])

  const activeThread =
    filteredThreads.find((thread) => thread.id === activeThreadId) ?? filteredThreads[0] ?? null

  const totalReplies = threads.reduce((total, thread) => total + thread.replies.length, 0)
  const totalParticipants = threads.reduce((total, thread) => total + thread.participants, 0)
  const unresolvedCount = threads.filter((thread) => thread.unresolved).length

  const handlePostQuestion = () => {
    const value = questionText.trim()
    if (!value) return

    const title = value.length > 68 ? `${value.slice(0, 68)}...` : value
    const newThread: ThreadItem = {
      id: Date.now(),
      title,
      author: 'Alex Rivera',
      role: 'Learner',
      body: value,
      time: 'Just now',
      notifyLabel: 'Participants notified',
      tag: 'New Thread',
      participants: 1,
      views: 1,
      unresolved: true,
      replies: [],
    }

    setThreads((current) => [newThread, ...current])
    setActiveThreadId(newThread.id)
    setQuestionText('')
  }

  const handleReply = () => {
    const value = replyText.trim()
    if (!value || !activeThread) return

    setThreads((current) =>
      current.map((thread) =>
        thread.id === activeThread.id
          ? {
              ...thread,
              replies: [
                ...thread.replies,
                {
                  author: 'Alex Rivera',
                  role: 'Learner',
                  body: value,
                  time: 'Just now',
                  reaction: 'New reply',
                },
              ],
              notifyLabel: 'Participants notified',
            }
          : thread,
      ),
    )
    setReplyText('')
  }

  return (
    <div className="flex min-h-screen bg-[#F7F9FB] font-body text-[#191C1E]">
      <Sidebar />

      <main className="grow px-6 py-8 lg:px-10 pb-32 lg:pb-8">
        <div className="mx-auto max-w-7xl">
          <section className="mb-8 grid gap-6 xl:grid-cols-[1fr_0.95fr]">
            <div className="rounded-[32px] bg-[linear-gradient(135deg,#25415F_0%,#325B7A_58%,#557D9A_100%)] p-8 text-white shadow-[0_24px_60px_rgba(50,77,103,0.18)]">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#D8E7F3]">
                Curator Portal
              </p>
              <h1 className="mt-4 max-w-xl text-4xl font-black tracking-tight lg:text-5xl">
                Discussion Area
              </h1>
              <p className="mt-4 max-w-2xl text-sm font-medium leading-7 text-[#E8F0F8]">
                Post a question, reply to the active thread, and keep participants aligned with live
                notifications.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-4">
                <div className="rounded-[24px] bg-white/10 p-5 backdrop-blur">
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/70">
                    Mode
                  </p>
                  <p className="mt-3 text-2xl font-black">{discussionFlow.destination}</p>
                </div>
                <div className="rounded-[24px] bg-white/10 p-5 backdrop-blur">
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/70">
                    Live Threads
                  </p>
                  <p className="mt-3 text-2xl font-black">{threads.length}</p>
                </div>
                <div className="rounded-[24px] bg-white/10 p-5 backdrop-blur">
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/70">
                    Replies Today
                  </p>
                  <p className="mt-3 text-2xl font-black">{totalReplies}</p>
                </div>
                <div className="rounded-[24px] bg-white/10 p-5 backdrop-blur">
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/70">
                    Open Topics
                  </p>
                  <p className="mt-3 text-2xl font-black">{unresolvedCount}</p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-[24px] bg-black/10 p-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-white/60">
                    Fastest Moving
                  </p>
                  <p className="mt-2 text-sm font-black text-white">Portfolio reviews and critique prep are trending now.</p>
                </div>
                <div className="rounded-[24px] bg-black/10 p-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-white/60">
                    Participants
                  </p>
                  <p className="mt-2 text-sm font-black text-white">{totalParticipants} active thread participants across the queue.</p>
                </div>
                <div className="rounded-[24px] bg-black/10 p-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-white/60">
                    Best Practice
                  </p>
                  <p className="mt-2 text-sm font-black text-white">Focused questions are getting the strongest mentor replies.</p>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] bg-white p-8 shadow-ambient">
              <div>
                <h2 className="text-2xl font-black tracking-tight text-[#191C1E]">
                  {discussionFlow.title}
                </h2>
                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  <div className="rounded-[20px] bg-[#F7F9FB] p-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#64748B]">
                      User Action
                    </p>
                    <p className="mt-2 text-sm font-bold text-[#191C1E]">
                      {discussionFlow.action}
                    </p>
                  </div>
                  <div className="rounded-[20px] bg-[#F7F9FB] p-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#64748B]">
                      System Response
                    </p>
                    <p className="mt-2 text-sm font-bold text-[#191C1E]">
                      {discussionFlow.system}
                    </p>
                  </div>
                  <div className="rounded-[20px] bg-[#F7F9FB] p-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#64748B]">
                      Destination
                    </p>
                    <p className="mt-2 text-sm font-bold text-[#00327D]">
                      {discussionFlow.destination}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-[24px] bg-[#F7F9FB] p-5">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#E7EEF4] text-[#35566F]">
                    <span className="material-symbols-outlined">forum</span>
                  </div>
                  <div>
                    <p className="text-lg font-black text-[#191C1E]">Start a new discussion</p>
                    <p className="text-sm text-[#64748B]">
                      Ask a focused question so mentors and learners can reply faster.
                    </p>
                  </div>
                </div>

                <textarea
                  value={questionText}
                  onChange={(event) => setQuestionText(event.target.value)}
                  placeholder="Post your question to the community..."
                  className="mt-5 min-h-[170px] w-full rounded-[24px] border border-[#D7DDEA] bg-white px-5 py-4 text-[0.96rem] leading-7 text-[#191C1E] outline-none placeholder:text-slate-400 focus:border-[#2559BD]"
                />

                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="inline-flex items-center gap-2 text-sm text-[#64748B]">
                    <span className="material-symbols-outlined text-[#35566F]">notifications_active</span>
                    Save post and notify participants automatically
                  </div>
                  <button
                    onClick={handlePostQuestion}
                    className="inline-flex items-center justify-center gap-2 rounded-[18px] bg-[linear-gradient(90deg,#35566F,#5D7E96)] px-5 py-3 text-sm font-black text-white shadow-[0_14px_30px_rgba(70,100,124,0.2)] transition hover:brightness-105"
                  >
                    <span className="material-symbols-outlined text-[18px]">send</span>
                    Save Post
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-6 xl:grid-cols-[0.78fr_1.22fr]">
            <div className="rounded-[32px] bg-white p-6 shadow-ambient">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h2 className="text-[1.45rem] font-black tracking-tight text-[#191C1E]">
                      Thread Queue
                    </h2>
                    <p className="mt-1 text-sm text-[#64748B]">
                      Select a thread to read or reply.
                    </p>
                  </div>
                  <span className="rounded-full bg-[#EEF5FF] px-3 py-1 text-[0.76rem] font-black uppercase tracking-[0.18em] text-[#00327D]">
                    {filteredThreads.length} active
                  </span>
                </div>

                <label className="flex items-center gap-3 rounded-full bg-[#EEF1F5] px-5 py-3">
                  <span className="material-symbols-outlined text-slate-500">search</span>
                  <input
                    value={searchText}
                    onChange={(event) => setSearchText(event.target.value)}
                    className="w-full bg-transparent text-sm outline-none placeholder:text-slate-500"
                    placeholder="Search thread view..."
                  />
                </label>
              </div>

              <div className="mt-5 space-y-3">
                {filteredThreads.map((thread) => {
                  const isActive = activeThread?.id === thread.id

                  return (
                    <button
                      key={thread.id}
                      onClick={() => setActiveThreadId(thread.id)}
                      className={`w-full rounded-[22px] border p-4 text-left transition ${
                        isActive
                          ? 'border-[#2559BD] bg-[#F3F7FF] shadow-sm'
                          : 'border-transparent bg-[#F7F9FC] hover:border-[#D7DDEA]'
                      }`}
                    >
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        {thread.pinned ? (
                          <span className="inline-flex items-center gap-1 rounded-full bg-[#DBE7FB] px-2.5 py-1 font-bold text-[#00327D]">
                            <span className="material-symbols-outlined text-[14px]">keep</span>
                            Pinned
                          </span>
                        ) : null}
                        <span className="rounded-full bg-[#EEF2F6] px-2.5 py-1 font-bold text-[#35566F]">
                          {thread.tag}
                        </span>
                        <span>{thread.time}</span>
                      </div>

                      <h3 className="mt-3 text-base font-black tracking-tight text-[#191C1E]">
                        {thread.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#64748B]">
                        {thread.body}
                      </p>
                      <div className="mt-3 flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-[0.16em] text-[#64748B]">
                        <span>{thread.replies.length} replies</span>
                        <span>{thread.participants} participants</span>
                        <span>{thread.views} views</span>
                        {thread.unresolved ? <span className="text-[#9A5B2A]">open topic</span> : null}
                        <span>{thread.notifyLabel}</span>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="rounded-[32px] bg-white p-6 shadow-ambient">
              {activeThread ? (
                <>
                  <div className="flex flex-wrap items-center gap-3">
                    {activeThread.pinned ? (
                      <span className="inline-flex items-center gap-2 rounded-full bg-[#DBE7FB] px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-[#00327D]">
                        <span className="material-symbols-outlined text-[16px]">keep</span>
                        Pinned Thread
                      </span>
                    ) : null}
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#EEF2F6] px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-[#35566F]">
                      {activeThread.tag}
                    </span>
                    <span className="text-sm text-[#64748B]">
                      Started by {activeThread.author} • {activeThread.role}
                    </span>
                  </div>

                  <h2 className="mt-4 text-[2rem] font-black tracking-tight text-[#191C1E]">
                    {activeThread.title}
                  </h2>
                  <p className="mt-4 text-base leading-8 text-[#434653]">{activeThread.body}</p>

                  <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-[#64748B]">
                    <span className="inline-flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#35566F]">chat</span>
                      {activeThread.replies.length} replies
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#35566F]">notifications_active</span>
                      {activeThread.notifyLabel}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#35566F]">groups</span>
                      {activeThread.participants} participants
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#35566F]">visibility</span>
                      {activeThread.views} views
                    </span>
                  </div>

                  <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_260px]">
                    <div className="rounded-[24px] bg-[#F7F9FC] p-5">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-lg font-black tracking-tight text-[#191C1E]">Replies</h3>
                      <span className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                        Thread View
                      </span>
                    </div>

                    <div className="mt-5 space-y-4">
                      {activeThread.replies.map((reply, index) => (
                        <article key={`${reply.author}-${index}`} className="rounded-[20px] bg-white p-4">
                          <div className="flex items-center justify-between gap-3">
                            <div>
                              <p className="text-sm font-black text-[#191C1E]">{reply.author}</p>
                              <p className="text-xs text-slate-500">{reply.role}</p>
                            </div>
                            <span className="text-xs text-slate-400">{reply.time}</span>
                          </div>
                          <p className="mt-3 text-sm leading-7 text-[#434653]">{reply.body}</p>
                          <div className="mt-3 inline-flex rounded-full bg-[#EEF2F6] px-3 py-1 text-[11px] font-bold text-[#35566F]">
                            {reply.reaction}
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>

                  <aside className="rounded-[24px] bg-[#F7F9FC] p-5">
                    <h3 className="text-lg font-black tracking-tight text-[#191C1E]">Context Panel</h3>
                    <div className="mt-4 space-y-4">
                      <div className="rounded-[20px] bg-white p-4">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#64748B]">Thread Status</p>
                        <p className="mt-2 text-sm font-bold text-[#191C1E]">
                          {activeThread.unresolved ? 'Open for fresh answers' : 'Mostly resolved'}
                        </p>
                      </div>
                      <div className="rounded-[20px] bg-white p-4">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#64748B]">Recommended Reply Style</p>
                        <p className="mt-2 text-sm font-bold text-[#191C1E]">Concrete examples, concise structure, one actionable takeaway.</p>
                      </div>
                      <div className="rounded-[20px] bg-white p-4">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#64748B]">Momentum Signal</p>
                        <p className="mt-2 text-sm font-bold text-[#191C1E]">{activeThread.notifyLabel}</p>
                      </div>
                    </div>
                  </aside>
                  </div>

                  <div className="mt-6 rounded-[24px] border border-[#E2E8F0] bg-white p-5">
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[#E9F3F8] text-[#35566F]">
                        <span className="material-symbols-outlined text-[18px]">reply</span>
                      </div>
                      <div>
                        <p className="text-base font-black text-[#191C1E]">Reply to thread</p>
                        <p className="text-sm text-[#64748B]">
                          Post a direct response and notify participants.
                        </p>
                      </div>
                    </div>

                    <textarea
                      value={replyText}
                      onChange={(event) => setReplyText(event.target.value)}
                      placeholder="Write your reply..."
                      className="mt-4 min-h-[150px] w-full rounded-[20px] bg-[#F7F9FC] px-4 py-4 text-sm leading-7 text-[#191C1E] outline-none placeholder:text-slate-400"
                    />

                    <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <span className="inline-flex items-center gap-2 text-sm text-[#64748B]">
                        <span className="material-symbols-outlined text-[#35566F]">mark_chat_read</span>
                        Reply will be saved to the active thread
                      </span>
                      <button
                        onClick={handleReply}
                        className="inline-flex items-center justify-center gap-2 rounded-[18px] bg-[linear-gradient(90deg,#35566F,#5D7E96)] px-5 py-3 text-sm font-black text-white shadow-[0_14px_30px_rgba(70,100,124,0.2)] transition hover:brightness-105"
                      >
                        <span className="material-symbols-outlined text-[18px]">reply</span>
                        Post Reply
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="rounded-[24px] bg-[#F7F9FB] p-8 text-center text-[#64748B]">
                  No threads match your search.
                </div>
              )}
            </div>
          </section>
        </div>
        <BottomNav />
      </main>
    </div>
  )
}
