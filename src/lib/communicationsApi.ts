import { apiRequest } from './api'

export interface AppNotification {
  id: string
  title: string
  desc: string
  icon: string
  read: boolean
  createdAt: string
}

export async function getNotifications(token: string) {
  return apiRequest<{ data: AppNotification[] }>('/notifications', {
    method: 'GET',
    token
  })
}

export async function markNotificationRead(id: string, token: string) {
  return apiRequest<{ data: null }>(`/notifications/${id}/read`, {
    method: 'POST',
    token
  })
}
