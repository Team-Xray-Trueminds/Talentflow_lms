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
  thumbnailUrl?: string
}

export interface SubmissionItem {
  id: string
  studentName: string
  assignmentTitle: string
  submittedAt: string
  status: 'pending' | 'reviewed'
}

export interface OfficeHourPayload {
  title: string
  startsAt: string
  durationMinutes?: number
  meetingUrl?: string
  courseId?: string
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

export async function getSubmissionQueue(token: string, sort: string = 'urgent') {
  return apiRequest<{ data: SubmissionItem[] }>(`/tutor-dashboard/submission-queue?sort=${sort}`, {
    method: 'GET',
    token
  })
}

export async function emailStudents(token: string, payload: { subject: string, body: string }) {
  return apiRequest<{ message: string }>('/tutors/actions/email-students', {
    method: 'POST',
    token,
    body: JSON.stringify(payload)
  })
}

export async function scheduleOfficeHour(token: string, payload: OfficeHourPayload) {
  return apiRequest<{ message: string }>('/tutors/actions/schedule-office-hour', {
    method: 'POST',
    token,
    body: JSON.stringify(payload)
  })
}
