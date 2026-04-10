import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import { useTheme, type ThemeMode } from '../components/theme/ThemeProvider'
import { useAuth } from '../components/auth/AuthProvider'
import { updateCurrentUserProfile } from '../lib/auth'
import { ApiError } from '../lib/api'

const notificationItems = [
  {
    key: 'mentorMessages',
    title: 'Mentor Messages',
    note: 'Receive updates when a mentor replies or reviews your work.',
  },
  {
    key: 'assignmentReminders',
    title: 'Assignment Reminders',
    note: 'Stay ahead of upcoming deadlines and milestone checkpoints.',
  },
  {
    key: 'weeklyDigest',
    title: 'Weekly Performance Digest',
    note: 'Get a concise summary of progress, ranking, and study momentum.',
  },
] as const

const workspacePreferenceItems = [
  'Compact dashboard density',
  'Enable mentor availability indicators',
  'Show streak and rank insights',
] as const

type NotificationKey = (typeof notificationItems)[number]['key']
type WorkspacePreference = (typeof workspacePreferenceItems)[number]

type ProfileFormState = {
  fullName: string
  email: string
  role: string
  timezone: string
  bio: string
  skills: string[]
  notifications: Record<NotificationKey, boolean>
  preferences: Record<WorkspacePreference, boolean>
}

const initialState: ProfileFormState = {
  fullName: 'Alex Rivera',
  email: 'alex.rivera@talentflow.io',
  role: 'Learner',
  timezone: 'Africa/Lagos (GMT+1)',
  bio: '',
  skills: ['UI/UX Strategy', 'Product Thinking', 'Design Systems', 'Research Ops'],
  notifications: {
    mentorMessages: true,
    assignmentReminders: true,
    weeklyDigest: false,
  },
  preferences: {
    'Compact dashboard density': true,
    'Enable mentor availability indicators': false,
    'Show streak and rank insights': true,
  },
}

function Checkbox({
  checked,
  onClick,
}: {
  checked: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={checked}
      className={`grid h-6 w-6 place-items-center rounded-md border transition ${
        checked
          ? 'border-[#2559BD] bg-[#2559BD] text-white'
          : 'border-[#C3C6D5] bg-white text-transparent'
      }`}
    >
      <span className="material-symbols-outlined text-[16px]">check</span>
    </button>
  )
}

const displayModes: Array<{
  value: ThemeMode
  title: string
  note: string
  icon: string
}> = [
  { value: 'light', title: 'Light Mode', note: 'Bright workspace with crisp surfaces.', icon: 'light_mode' },
  { value: 'dark', title: 'Dark Mode', note: 'Soft low-light palette that stays easy on the eyes.', icon: 'dark_mode' },
]

export default function ProfileSetupPage() {
  const { user, token, updateUser, refreshUser } = useAuth()
  const personalizedInitialState = useMemo<ProfileFormState>(() => ({
    ...initialState,
    fullName: user?.fullName || initialState.fullName,
    email: user?.email || initialState.email,
    role: user?.role === 'admin' ? 'Admin' : user?.role === 'tutor' ? 'Tutor' : 'Learner',
  }), [user])
  const [formData, setFormData] = useState<ProfileFormState>(personalizedInitialState)
  const [isSaving, setIsSaving] = useState(false)
  const [saveMessage, setSaveMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const { themeMode, resolvedTheme, setThemeMode } = useTheme()
  const identityName = formData.fullName.toUpperCase()

  const updateField = <K extends keyof ProfileFormState>(key: K, value: ProfileFormState[K]) => {
    setFormData((current) => ({ ...current, [key]: value }))
  }

  const handleReset = () => {
    setFormData(personalizedInitialState)
    setSaveMessage('')
    setErrorMessage('')
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!token) {
      setErrorMessage('You need to be signed in to save profile changes.')
      return
    }

    setIsSaving(true)
    setSaveMessage('')
    setErrorMessage('')

    try {
      const response = await updateCurrentUserProfile(
        {
          fullName: formData.fullName,
          bio: formData.bio,
          skills: formData.skills,
        },
        token,
      )
      updateUser(response.data)
      await refreshUser(token)
      setSaveMessage(response.message || 'Profile updated successfully.')
    } catch (error) {
      if (error instanceof ApiError || error instanceof Error) {
        setErrorMessage(error.message)
      } else {
        setErrorMessage('Unable to save your profile right now.')
      }
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="flex min-h-screen bg-[#F7F9FB] text-[#191C1E]">
      <Sidebar forceRole="Learner" />

      <main className="grow w-full px-4 py-6 md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.35em] text-[#2559BD]/70">
                Profile Control Center
              </p>
              <h1 className="mt-3 text-3xl font-black tracking-tight text-[#191C1E] md:text-5xl">
                Profile Setup
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#434653] md:text-base">
                Tune your learner identity, notification settings, and workspace behavior from one
                clean control surface.
              </p>
            </div>

            <Link
              to="/learner/dashboard"
              className="inline-flex items-center justify-center rounded-2xl border border-[#C3C6D5] bg-white px-5 py-3 text-sm font-bold text-[#2559BD] transition hover:border-[#2559BD]/40 hover:bg-[#F2F4F6]"
            >
              Skip for now
            </Link>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-[#DDE3EC] bg-white shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
            <div className="grid gap-0 xl:grid-cols-[320px_1fr]">
              <aside className="border-b border-[#E3E8F0] bg-[linear-gradient(180deg,#00327D_0%,#2559BD_100%)] p-6 xl:border-b-0 xl:border-r">
                <div className="rounded-[28px] border border-white/10 bg-white/10 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/70">
                        Identity Core
                      </p>
                      <h2 className="mt-3 text-2xl font-black tracking-tight text-white">
                        {identityName}
                      </h2>
                      <p className="mt-2 text-sm text-white/75">Learner • UI/UX Track</p>
                    </div>
                    <div className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[8px] font-black uppercase tracking-[0.22em] text-white">
                      Synced
                    </div>
                  </div>

                  <div className="mt-8 flex justify-center">
                    <div className="relative h-32 w-32 rounded-[28px] border border-white/25 bg-white/15 p-1 shadow-xl">
                      <div className="flex h-full w-full items-center justify-center rounded-[24px] border border-white/10 bg-[#0B1733]/50 text-4xl font-black text-white">
                        AR
                      </div>
                      <button
                        type="button"
                        className="absolute -bottom-2 -right-2 grid h-11 w-11 place-items-center rounded-2xl border border-white/20 bg-white text-[#2559BD] shadow-lg transition hover:bg-[#F2F4F6]"
                      >
                        <span className="material-symbols-outlined text-lg">photo_camera</span>
                      </button>
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                      <p className="text-[10px] font-black uppercase tracking-[0.28em] text-white/65">
                        Workspace
                      </p>
                      <p className="mt-2 text-sm font-bold text-white">Product Design Lab</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                      <p className="text-[10px] font-black uppercase tracking-[0.28em] text-white/65">
                        Plan
                      </p>
                      <p className="mt-2 text-sm font-bold text-white">Professional Mentorship</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                      <p className="text-[10px] font-black uppercase tracking-[0.28em] text-white/65">
                        Security
                      </p>
                      <p className="mt-2 text-sm font-bold text-[#9BF2C8]">
                        No unusual sign-in activity
                      </p>
                    </div>
                  </div>
                </div>
              </aside>

              <form className="space-y-6 p-6 md:p-8 lg:p-10" onSubmit={handleSave}>
                {errorMessage ? (
                  <div className="rounded-2xl border border-[#ff6b6b]/25 bg-[#12070b] px-4 py-3 text-sm text-[#ffb4ab]">
                    {errorMessage}
                  </div>
                ) : null}

                {saveMessage ? (
                  <div className="rounded-2xl border border-[#57FAE9]/20 bg-[#05131c] px-4 py-3 text-sm text-[#9EF7FF]">
                    {saveMessage}
                  </div>
                ) : null}

                <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
                  <article className="rounded-[28px] border border-[#E3E8F0] bg-[#FBFCFE] p-6">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#2559BD]">badge</span>
                      <h2 className="text-xl font-black tracking-tight text-[#191C1E]">Public Profile</h2>
                    </div>

                    <div className="mt-6 grid gap-5 md:grid-cols-2">
                      <label className="space-y-2">
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-[#434653]">
                          Full Name
                        </span>
                        <input
                          className="w-full rounded-2xl border border-[#D7DDEA] bg-white px-4 py-3 text-[#191C1E] outline-none transition placeholder:text-slate-500 focus:border-[#2559BD] focus:shadow-[0_0_0_3px_rgba(37,89,189,0.12)]"
                          value={formData.fullName}
                          onChange={(e) => updateField('fullName', e.target.value)}
                        />
                      </label>

                      <label className="space-y-2">
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-[#434653]">
                          Email Address
                        </span>
                        <input
                          readOnly
                          aria-readonly="true"
                          className="w-full cursor-not-allowed rounded-2xl border border-[#D7DDEA] bg-[#F2F4F6] px-4 py-3 text-[#191C1E] outline-none transition placeholder:text-slate-500"
                          value={formData.email}
                        />
                      </label>

                      <label className="space-y-2">
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-[#434653]">
                          Role
                        </span>
                        <input
                          readOnly
                          aria-readonly="true"
                          className="w-full cursor-not-allowed rounded-2xl border border-[#D7DDEA] bg-[#F2F4F6] px-4 py-3 text-[#191C1E] outline-none transition placeholder:text-slate-500"
                          value={formData.role}
                        />
                      </label>

                      <label className="space-y-2">
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-[#434653]">
                          Timezone
                        </span>
                        <input
                          readOnly
                          aria-readonly="true"
                          className="w-full cursor-not-allowed rounded-2xl border border-[#D7DDEA] bg-[#F2F4F6] px-4 py-3 text-[#191C1E] outline-none transition placeholder:text-slate-500"
                          value={formData.timezone}
                        />
                      </label>
                    </div>

                    <label className="mt-6 block space-y-2">
                      <span className="text-xs font-black uppercase tracking-[0.2em] text-[#434653]">
                        Professional Bio
                      </span>
                      <textarea
                        rows={5}
                        placeholder="Describe your learning goals, current focus, and the kind of projects you want to build."
                        className="min-h-[160px] w-full rounded-[24px] border border-[#D7DDEA] bg-white px-5 py-4 text-[#191C1E] outline-none transition placeholder:text-slate-500 focus:border-[#2559BD] focus:shadow-[0_0_0_3px_rgba(37,89,189,0.12)]"
                        value={formData.bio}
                        onChange={(e) => updateField('bio', e.target.value)}
                      />
                    </label>

                    <div className="mt-6">
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-[#434653]">
                        Top Skills
                      </p>
                      <div className="mt-4 flex flex-wrap gap-3">
                        {formData.skills.map((skill, index) => (
                          <button
                            key={skill}
                            type="button"
                            className={`rounded-full border px-4 py-2 text-sm font-bold transition ${
                              index === 0
                                ? 'border-[#2559BD]/20 bg-[#EAF0FF] text-[#2559BD]'
                                : 'border-[#D7DDEA] bg-white text-[#434653] hover:border-[#2559BD]/25'
                            }`}
                          >
                            {skill}
                          </button>
                        ))}
                      </div>
                    </div>
                  </article>

                  <article className="rounded-[28px] border border-[#E3E8F0] bg-white p-6">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[#2559BD]">shield_lock</span>
                        <h2 className="text-xl font-black tracking-tight text-[#191C1E]">
                          Security Center
                        </h2>
                      </div>
                      <span className="rounded-full bg-[#DCF6E8] px-3 py-1 text-[10px] font-black uppercase tracking-[0.24em] text-[#0F8A5F]">
                        Protected
                      </span>
                    </div>

                    <div className="mt-6 space-y-4">
                      {[
                        {
                          icon: 'password',
                          title: 'Password',
                          detail: 'Last updated 18 days ago',
                        },
                        {
                          icon: 'phonelink_lock',
                          title: 'Two-factor authentication',
                          detail: 'App-based verification enabled',
                        },
                        {
                          icon: 'admin_panel_settings',
                          title: 'Account protection',
                          detail: 'Advanced sign-in review and session monitoring',
                        },
                      ].map((item) => (
                        <button
                          key={item.title}
                          type="button"
                          className="flex w-full items-center justify-between rounded-[22px] border border-[#E3E8F0] bg-[#FBFCFE] px-4 py-4 text-left transition hover:border-[#2559BD]/25 hover:bg-[#F7F9FB]"
                        >
                          <div className="flex items-center gap-4">
                            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#EAF0FF] text-[#2559BD]">
                              <span className="material-symbols-outlined">{item.icon}</span>
                            </span>
                            <div>
                              <p className="text-sm font-bold text-[#191C1E]">{item.title}</p>
                              <p className="mt-1 text-xs leading-5 text-[#6B7280]">{item.detail}</p>
                            </div>
                          </div>
                          <span className="material-symbols-outlined text-slate-400">
                            chevron_right
                          </span>
                        </button>
                      ))}
                    </div>

                    <div className="mt-6 rounded-[24px] bg-[linear-gradient(135deg,#00327D,#2559BD)] p-5">
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/70">
                        Session Health
                      </p>
                      <p className="mt-3 text-lg font-black text-white">
                        Latest active device: Lagos, Nigeria
                      </p>
                      <p className="mt-2 text-sm leading-6 text-white/75">
                        Continuous review is enabled and no abnormal behavior has been detected.
                      </p>
                    </div>
                  </article>
                </section>

                <section className="grid gap-6 xl:grid-cols-[1fr_360px]">
                  <article className="rounded-[28px] border border-[#E3E8F0] bg-white p-6">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h2 className="text-xl font-black tracking-tight text-[#191C1E]">
                          Notification Settings
                        </h2>
                        <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                          Control which updates reach you first and how loud the platform should be.
                        </p>
                      </div>
                      <span className="rounded-full bg-[#EAF0FF] px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-[#2559BD]">
                        3 Channels
                      </span>
                    </div>

                    <div className="mt-6 space-y-4">
                      {notificationItems.map((item) => (
                        <div
                          key={item.key}
                          className="flex items-start justify-between gap-4 rounded-[22px] border border-[#E3E8F0] bg-[#FBFCFE] px-5 py-4"
                        >
                          <div>
                            <p className="text-sm font-bold text-[#191C1E]">{item.title}</p>
                            <p className="mt-1 text-sm leading-6 text-[#6B7280]">{item.note}</p>
                          </div>
                          <Checkbox
                            checked={formData.notifications[item.key]}
                            onClick={() =>
                              updateField('notifications', {
                                ...formData.notifications,
                                [item.key]: !formData.notifications[item.key],
                              })
                            }
                          />
                        </div>
                      ))}
                    </div>
                  </article>

                  <article className="rounded-[28px] border border-[#E3E8F0] bg-white p-6">
                    <h2 className="text-xl font-black tracking-tight text-[#191C1E]">
                      Workspace Settings
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                      Control how your workspace looks and behaves across every screen.
                    </p>

                    <div className="mt-6">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#434653]">
                            Display
                          </h3>
                          <p className="mt-2 text-sm text-[#6B7280]">
                            Current appearance: {resolvedTheme === 'dark' ? 'Dark' : 'Light'}
                          </p>
                        </div>
                        <span className="rounded-full bg-[#EAF0FF] px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-[#2559BD]">
                          {themeMode}
                        </span>
                      </div>

                      <div className="mt-4 space-y-3">
                        {displayModes.map((mode) => {
                          const active = themeMode === mode.value

                          return (
                            <button
                              key={mode.value}
                              type="button"
                              onClick={() => setThemeMode(mode.value)}
                              className={`flex w-full items-center justify-between gap-4 rounded-[22px] border px-4 py-4 text-left transition ${
                                active
                                  ? 'border-[#2559BD]/30 bg-[#EAF0FF]'
                                  : 'border-[#E3E8F0] bg-[#FBFCFE] hover:border-[#2559BD]/20 hover:bg-[#F7F9FB]'
                              }`}
                            >
                              <div className="flex items-center gap-4">
                                <span className={`grid h-12 w-12 place-items-center rounded-2xl ${
                                  active ? 'bg-[#2559BD] text-white' : 'bg-white text-[#2559BD] border border-[#E3E8F0]'
                                }`}>
                                  <span className="material-symbols-outlined">{mode.icon}</span>
                                </span>
                                <div>
                                  <p className="text-sm font-bold text-[#191C1E]">{mode.title}</p>
                                  <p className="mt-1 text-xs leading-5 text-[#6B7280]">{mode.note}</p>
                                </div>
                              </div>
                              <span className={`grid h-6 w-6 place-items-center rounded-full border ${
                                active
                                  ? 'border-[#2559BD] bg-[#2559BD] text-white'
                                  : 'border-[#C3C6D5] bg-white text-transparent'
                              }`}>
                                <span className="material-symbols-outlined text-[15px]">check</span>
                              </span>
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    <div className="mt-6 space-y-4">
                      {workspacePreferenceItems.map((item) => (
                        <div
                          key={item}
                          className="flex items-center justify-between gap-4 rounded-[20px] border border-[#E3E8F0] bg-[#FBFCFE] px-4 py-4"
                        >
                          <span className="text-sm font-medium text-[#2F3441]">{item}</span>
                          <Checkbox
                            checked={formData.preferences[item]}
                            onClick={() =>
                              updateField('preferences', {
                                ...formData.preferences,
                                [item]: !formData.preferences[item],
                              })
                            }
                          />
                        </div>
                      ))}
                    </div>
                  </article>
                </section>

                <div className="flex flex-col gap-4 border-t border-[#E3E8F0] pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="rounded-2xl border border-[#D7DDEA] bg-white px-6 py-3.5 text-sm font-bold text-[#434653] transition hover:border-[#2559BD]/30 hover:text-[#191C1E]"
                  >
                    Reset Changes
                  </button>

                  <div className="flex flex-col gap-4 sm:flex-row">
                    <button
                      type="button"
                      className="rounded-2xl bg-[#F2F4F6] px-6 py-3.5 text-sm font-bold text-[#191C1E] transition hover:bg-[#E7EBF0]"
                    >
                      Save Draft
                    </button>
                    <button
                      type="submit"
                      disabled={isSaving}
                      className="rounded-2xl bg-[linear-gradient(90deg,#00327D,#2559BD)] px-6 py-3.5 text-sm font-black text-white shadow-[0_12px_28px_rgba(37,89,189,0.2)] transition hover:scale-[1.01]"
                    >
                      {isSaving ? 'Saving...' : 'Save Settings'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
