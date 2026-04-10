import { apiRequest } from './api'

export interface TutorDashboardStats {
  totalRevenue: string
  totalStudents: number
  courseRating: number
  revenueTrend?: string
  studentsTrend?: string
  ratingSubtext?: string
}

export interface Activity {
  id: string
  user: string
  action: string
  time: string
  course: string
  icon: string
  comment?: string
  attachment?: string
  status?: 'Pending Review' | 'Certificate Issued' | string
}

export interface ActiveCourse {
  id: string
  title: string
  students: number
  img: string
}

export async function getTutorOverview(token: string) {
  return apiRequest<{ 
    data: { 
      stats: TutorDashboardStats
      activities: Activity[]
      activeCourses: ActiveCourse[]
      pendingReviews: number
      pendingCourseName?: string
    }
  }>('/tutor-dashboard/overview', {
    method: 'GET',
    token
  })
}
