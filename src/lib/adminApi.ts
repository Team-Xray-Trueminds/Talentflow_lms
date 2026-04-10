import { apiRequest } from './api'

export interface AdminMetrics {
  totalUsers: string
  activeCourses: string
  pendingAllocations: string
  avgLatency: string
  usersTrend?: string
}

export interface AdminUser {
  id: string
  name: string
  email: string
  expertise: string
  status: 'active' | 'pending' | string
}

export async function getAdminDashboard(token: string) {
  return apiRequest<{
    data: {
      metrics: AdminMetrics
      instructors: AdminUser[]
    }
  }>('/admin/dashboard', {
    method: 'GET',
    token
  })
}
