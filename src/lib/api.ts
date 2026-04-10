const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000').replace(/\/$/, '')

export class ApiError extends Error {
  code?: string
  status: number

  constructor(message: string, status: number, code?: string) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.code = code
  }
}

type RequestOptions = RequestInit & {
  token?: string | null
}

export async function apiRequest<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const { token, headers, ...rest } = options

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...rest,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
  })

  const payload = await response.text().then((text) => {
    if (!text) return null

    try {
      return JSON.parse(text)
    } catch {
      return text
    }
  }).catch(() => null)

  if (!response.ok) {
    throw new ApiError(
      typeof payload === 'object' && payload !== null
        ? payload?.error?.message || payload?.message || 'Request failed'
        : 'Request failed',
      response.status,
      typeof payload === 'object' && payload !== null ? payload?.error?.code : undefined,
    )
  }

  return payload as T
}

export { API_BASE_URL }
