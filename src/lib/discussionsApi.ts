import { apiRequest } from './api'

export interface DiscussionThread {
  id: string
  title: string
  body: string
  authorName: string
  authorAvatar?: string
  courseId?: string
  replyCount: number
  createdAt: string
  updatedAt: string
}

export interface DiscussionReply {
  id: string
  body: string
  authorName: string
  authorAvatar?: string
  createdAt: string
}

export async function getDiscussionThreads(token: string, params?: { courseId?: string, q?: string, page?: number, limit?: number }) {
  const query = new URLSearchParams()
  if (params?.courseId) query.append('courseId', params.courseId)
  if (params?.q) query.append('q', params.q)
  if (params?.page) query.append('page', String(params.page))
  if (params?.limit) query.append('limit', String(params.limit))

  const queryString = query.toString() ? `?${query.toString()}` : ''

  return apiRequest<{ data: DiscussionThread[] }>(`/discussions/threads${queryString}`, {
    method: 'GET',
    token
  })
}

export async function createDiscussionThread(token: string, payload: { title: string, body: string, courseId?: string }) {
  return apiRequest<{ data: DiscussionThread }>('/discussions/threads', {
    method: 'POST',
    token,
    body: JSON.stringify(payload)
  })
}

export async function getThreadDetails(id: string, token: string) {
  return apiRequest<{ data: DiscussionThread }>(`/discussions/threads/${id}`, {
    method: 'GET',
    token
  })
}

export async function getThreadReplies(id: string, token: string) {
  return apiRequest<{ data: DiscussionReply[] }>(`/discussions/threads/${id}/replies`, {
    method: 'GET',
    token
  })
}

export async function addThreadReply(id: string, token: string, payload: { body: string }) {
  return apiRequest<{ data: DiscussionReply }>(`/discussions/threads/${id}/replies`, {
    method: 'POST',
    token,
    body: JSON.stringify(payload)
  })
}
