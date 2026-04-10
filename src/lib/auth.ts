import { apiRequest } from './api'

const AUTH_TOKEN_KEY = 'authToken'
const USER_ROLE_KEY = 'userRole'
const PENDING_VERIFICATION_EMAIL_KEY = 'pendingVerificationEmail'
const AUTH_USER_KEY = 'authUser'

export type UserRole = 'learner' | 'tutor' | 'admin'

export interface UserProfile {
  id: string
  fullName: string
  email: string
  role: UserRole
  bio?: string | null
  skills?: string[] | null
  avatarUrl?: string | null
  isEmailVerified: boolean
}

type ApiEnvelope<T> = {
  message?: string
  data: T
}

type ApiRecord = Record<string, unknown>

function isRecord(value: unknown): value is ApiRecord {
  return typeof value === 'object' && value !== null
}

function unwrapData<T>(payload: unknown): T {
  if (isRecord(payload) && 'data' in payload) {
    return payload.data as T
  }

  return payload as T
}

function getMessage(payload: unknown, fallback: string) {
  if (isRecord(payload) && typeof payload.message === 'string') {
    return payload.message
  }

  return fallback
}

function normalizeRole(role: unknown): UserRole {
  if (typeof role !== 'string') return 'learner'

  const normalized = role.toLowerCase()
  if (normalized === 'admin') return 'admin'
  if (normalized === 'tutor' || normalized === 'instructor' || normalized === 'mentor') return 'tutor'
  return 'learner'
}

function normalizeUserProfile(payload: unknown): UserProfile {
  const record = isRecord(payload) ? payload : {}

  return {
    id: String(record.id ?? record._id ?? record.userId ?? ''),
    fullName: String(record.fullName ?? record.name ?? record.username ?? ''),
    email: String(record.email ?? ''),
    role: normalizeRole(record.role),
    bio: typeof record.bio === 'string' ? record.bio : null,
    skills: Array.isArray(record.skills) ? record.skills.map(String) : null,
    avatarUrl: typeof record.avatarUrl === 'string'
      ? record.avatarUrl
      : typeof record.avatar === 'string'
        ? record.avatar
        : null,
    isEmailVerified: Boolean(record.isEmailVerified ?? record.emailVerified ?? record.verified ?? false),
  }
}

function extractToken(payload: unknown): string | null {
  const data = unwrapData<ApiRecord>(payload)
  if (!isRecord(data)) return null

  const token = data.token ?? data.accessToken ?? data.access_token ?? data.jwt
  return typeof token === 'string' ? token : null
}

export const authStorage = {
  getToken: () => localStorage.getItem(AUTH_TOKEN_KEY),
  setToken: (token: string) => localStorage.setItem(AUTH_TOKEN_KEY, token),
  clearToken: () => localStorage.removeItem(AUTH_TOKEN_KEY),
  setPendingVerificationEmail: (email: string) => localStorage.setItem(PENDING_VERIFICATION_EMAIL_KEY, email),
  getPendingVerificationEmail: () => localStorage.getItem(PENDING_VERIFICATION_EMAIL_KEY),
  clearPendingVerificationEmail: () => localStorage.removeItem(PENDING_VERIFICATION_EMAIL_KEY),
  setLegacyRole: (role: UserRole) => localStorage.setItem(USER_ROLE_KEY, role),
  getLegacyRole: () => localStorage.getItem(USER_ROLE_KEY),
  clearLegacyRole: () => localStorage.removeItem(USER_ROLE_KEY),
  setUser: (user: UserProfile) => localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user)),
  getUser: () => {
    const raw = localStorage.getItem(AUTH_USER_KEY)
    if (!raw) return null

    try {
      return normalizeUserProfile(JSON.parse(raw))
    } catch {
      return null
    }
  },
  clearUser: () => localStorage.removeItem(AUTH_USER_KEY),
}

export async function register(payload: {
  fullName: string
  email: string
  password: string
  confirmPassword: string
}) {
  const response = await apiRequest<unknown>('/auth/register', {
    method: 'POST',
    body: JSON.stringify(payload),
  })

  return {
    message: getMessage(response, 'Registration successful'),
    data: unwrapData<{ userId: string }>(response),
  } satisfies ApiEnvelope<{ userId: string }>
}

export async function login(payload: { email: string; password: string }) {
  const response = await apiRequest<unknown>('/auth/login', {
    method: 'POST',
    body: JSON.stringify(payload),
  })

  const token = extractToken(response)

  return {
    message: getMessage(response, 'Login successful'),
    data: { token: token || '' },
  } satisfies ApiEnvelope<{ token: string }>
}

export async function verifyOtp(payload: { email: string; code: string }) {
  const response = await apiRequest<unknown>('/auth/verify-otp', {
    method: 'POST',
    body: JSON.stringify(payload),
  })

  return {
    message: getMessage(response, 'Verification successful'),
    data: unwrapData<null>(response),
  } satisfies ApiEnvelope<null>
}

export async function resendOtp(payload: { email: string }) {
  const response = await apiRequest<unknown>('/auth/resend-otp', {
    method: 'POST',
    body: JSON.stringify(payload),
  })

  return {
    message: getMessage(response, 'Verification code resent'),
    data: unwrapData<null>(response),
  } satisfies ApiEnvelope<null>
}

export async function forgotPassword(payload: { email: string }) {
  const response = await apiRequest<unknown>('/auth/forgot-password', {
    method: 'POST',
    body: JSON.stringify(payload),
  })

  return {
    message: getMessage(response, 'Password reset email sent'),
    data: unwrapData<null>(response),
  } satisfies ApiEnvelope<null>
}

export async function resetPassword(payload: {
  token: string
  password: string
  confirmPassword: string
}) {
  const response = await apiRequest<unknown>('/auth/reset-password', {
    method: 'POST',
    body: JSON.stringify(payload),
  })

  return {
    message: getMessage(response, 'Password reset successful'),
    data: unwrapData<null>(response),
  } satisfies ApiEnvelope<null>
}

export async function fetchCurrentUser(token: string) {
  const response = await apiRequest<unknown>('/users/me', {
    method: 'GET',
    token,
  })

  return {
    message: getMessage(response, 'User fetched'),
    data: normalizeUserProfile(unwrapData(response)),
  } satisfies ApiEnvelope<UserProfile>
}

export async function updateCurrentUserProfile(
  payload: { fullName: string; bio?: string; skills?: string[] },
  token: string,
) {
  const response = await apiRequest<unknown>('/users/me/profile', {
    method: 'PUT',
    token,
    body: JSON.stringify(payload),
  })

  return {
    message: getMessage(response, 'Profile updated'),
    data: normalizeUserProfile(unwrapData(response)),
  } satisfies ApiEnvelope<UserProfile>
}

export function getRoleHomePath(role: UserRole) {
  if (role === 'admin') return '/admin/dashboard'
  if (role === 'tutor') return '/instructor/dashboard'
  return '/learner/dashboard'
}
