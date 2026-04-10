import { useMemo, useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useAuth } from '../components/auth/AuthProvider'
import Sidebar from '../components/Sidebar'
import BottomNav from '../components/layout/BottomNav'
import { 
  getDiscussionThreads, 
  createDiscussionThread, 
  getThreadReplies, 
  addThreadReply 
} from '../lib/discussionsApi'

const discussionFlow = {
  title: 'Discussion Area',
  action: 'Post question / reply to thread',
  system: 'Save post; notify participants',
  destination: 'Thread View',
}

export default function DiscussionsPage() {
  const { token } = useAuth()
  const queryClient = useQueryClient()
  
  const [activeThreadId, setActiveThreadId] = useState<string | null>(null)
  const [questionText, setQuestionText] = useState('')
  const [replyText, setReplyText] = useState('')
  const [searchText, setSearchText] = useState('')

  // 1. Fetch Threads
  const { data: threadsData, isLoading: isLoadingThreads } = useQuery({
    queryKey: ['discussionThreads'],
    queryFn: () => getDiscussionThreads(token!),
    enabled: !!token,
  })

  const threads = threadsData?.data || []

  // 2. Fetch Replies for active thread
  const { data: repliesData, isLoading: isLoadingReplies } = useQuery({
    queryKey: ['discussionReplies', activeThreadId],
    queryFn: () => getThreadReplies(activeThreadId!, token!),
    enabled: !!token && !!activeThreadId,
  })

  const replies = repliesData?.data || []

  // 3. Mutations
  const createThreadMutation = useMutation({
    mutationFn: (payload: { title: string, body: string }) => 
      createDiscussionThread(token!, payload),
    onSuccess: (newThread) => {
      queryClient.invalidateQueries({ queryKey: ['discussionThreads'] })
      setActiveThreadId(newThread.data.id)
      setQuestionText('')
    }
  })

  const addReplyMutation = useMutation({
    mutationFn: (payload: { body: string }) => 
      addThreadReply(activeThreadId!, token!, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['discussionReplies', activeThreadId] })
      queryClient.invalidateQueries({ queryKey: ['discussionThreads'] })
      setReplyText('')
    }
  })

  const filteredThreads = useMemo(() => {
    const query = searchText.trim().toLowerCase()
    if (!query) return threads

    return threads.filter(
      (thread) =>
        thread.title.toLowerCase().includes(query) ||
        thread.body.toLowerCase().includes(query)
    )
  }, [searchText, threads])

  const activeThread = useMemo(() => {
    if (!activeThreadId && filteredThreads.length > 0) {
      // Set first thread as active if none selected
      return filteredThreads[0]
    }
    return filteredThreads.find((thread) => thread.id === activeThreadId) || filteredThreads[0] || null
  }, [activeThreadId, filteredThreads])

  // Sync activeThreadId if it was null
  if (activeThread && !activeThreadId) {
    setActiveThreadId(activeThread.id)
  }

  const totalReplies = threads.reduce((total, thread) => total + (thread.replyCount || 0), 0)
  const totalParticipants = threads.length * 2 // Mocking for now since participants count isn't in top level API
  const unresolvedCount = threads.length // Mocking as all new threads for now

  const handlePostQuestion = () => {
    const value = questionText.trim()
    if (!value) return
    const title = value.length > 68 ? `${value.slice(0, 68)}...` : value
    createThreadMutation.mutate({ title, body: value })
  }

  const handleReply = () => {
    const value = replyText.trim()
    if (!value || !activeThreadId) return
    addReplyMutation.mutate({ body: value })
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

              <div className="mt-5 space-y-3 relative">
                {isLoadingThreads && (
                  <div className="absolute inset-0 bg-white/50 backdrop-blur-sm z-10 flex items-center justify-center rounded-[22px]">
                    <div className="flex flex-col items-center gap-2">
                      <span className="material-symbols-outlined animate-spin text-[#00327D]">progress_activity</span>
                      <p className="text-xs font-bold text-[#00327D]">Updating Queue...</p>
                    </div>
                  </div>
                )}
                {filteredThreads.map((thread) => {
                  const isActive = activeThread?.id === thread.id
                  const time = new Date(thread.createdAt).toLocaleDateString()
                  const tag = 'Discussion' 

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
                        <span className="rounded-full bg-[#EEF2F6] px-2.5 py-1 font-bold text-[#35566F]">
                          {tag}
                        </span>
                        <span>{time}</span>
                      </div>

                      <h3 className="mt-3 text-base font-black tracking-tight text-[#191C1E]">
                        {thread.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#64748B]">
                        {thread.body}
                      </p>
                      <div className="mt-3 flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-[0.16em] text-[#64748B]">
                        <span>{thread.replyCount || 0} replies</span>
                        <span>{thread.authorName || '1'} participants</span>
                        <span>Active Thread</span>
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
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#EEF2F6] px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-[#35566F]">
                      Discussion
                    </span>
                    <span className="text-sm text-[#64748B]">
                      Started by {activeThread.authorName} • {new Date(activeThread.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  <h2 className="mt-4 text-[2rem] font-black tracking-tight text-[#191C1E]">
                    {activeThread.title}
                  </h2>
                  <p className="mt-4 text-base leading-8 text-[#434653]">{activeThread.body}</p>

                  <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-[#64748B]">
                    <span className="inline-flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#35566F]">chat</span>
                      {activeThread.replyCount || 0} replies
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#35566F]">groups</span>
                      Active Participants
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
                      {isLoadingReplies ? (
                        <div className="text-center py-8">Loading replies...</div>
                      ) : replies.length === 0 ? (
                        <div className="text-center py-8 text-slate-400">No replies yet. Start the conversation!</div>
                      ) : (
                        replies.map((reply) => (
                          <article key={reply.id} className="rounded-[20px] bg-white p-4">
                            <div className="flex items-center justify-between gap-3">
                              <div>
                                <p className="text-sm font-black text-[#191C1E]">{reply.authorName}</p>
                                <p className="text-xs text-slate-500">Learner</p>
                              </div>
                              <span className="text-xs text-slate-400">{new Date(reply.createdAt).toLocaleTimeString()}</span>
                            </div>
                            <p className="mt-3 text-sm leading-7 text-[#434653]">{reply.body}</p>
                            <div className="mt-3 inline-flex rounded-full bg-[#EEF2F6] px-3 py-1 text-[11px] font-bold text-[#35566F]">
                              Response
                            </div>
                          </article>
                        ))
                      )}
                    </div>
                  </div>

                  <aside className="rounded-[24px] bg-[#F7F9FC] p-5">
                    <h3 className="text-lg font-black tracking-tight text-[#191C1E]">Context Panel</h3>
                    <div className="mt-4 space-y-4">
                      <div className="rounded-[20px] bg-white p-4">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#64748B]">Thread Status</p>
                        <p className="mt-2 text-sm font-bold text-[#191C1E]">
                          Open for fresh answers
                        </p>
                      </div>
                      <div className="rounded-[20px] bg-white p-4">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#64748B]">Recommended Reply Style</p>
                        <p className="mt-2 text-sm font-bold text-[#191C1E]">Concrete examples, concise structure, one actionable takeaway.</p>
                      </div>
                      <div className="rounded-[20px] bg-white p-4">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#64748B]">Momentum Signal</p>
                        <p className="mt-2 text-sm font-bold text-[#191C1E]">Active Discussion</p>
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
