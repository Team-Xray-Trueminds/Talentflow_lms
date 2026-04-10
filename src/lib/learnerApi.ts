import { apiRequest } from './api'

export interface Course {
  id: string
  title: string
  category: string
  level: string
  img: string
  thumbnailUrl?: string
  description?: string
  instructorName?: string
}

export interface ProgressOverview {
  hoursCompleted: number
  percentile: number
  focus: number
  activeCourse?: string
}

export interface Mentor {
  id: string
  name: string
  role: string
  img: string
  thumbnailUrl?: string
}

export interface Milestone {
  id: string
  date: string
  days: string
  title: string
  desc: string
}

export interface AssignmentDetail {
  id: string
  title: string
  description: string
  dueDate: string
  points: number
  attachments?: string[]
}

export interface AssignmentAttempt {
  id: string
  attemptNumber: number
  submittedAt: string
  score?: number
  feedback?: string
}

export async function getCourses(token?: string) {
  return apiRequest<{ data: Course[] }>('/courses/recommended', {
    method: 'GET',
    token
  })
}

export async function getFeaturedCourses() {
  // Public endpoint
  return apiRequest<{ data: Course[] }>('/courses/featured', {
    method: 'GET'
  })
}

export async function getProgressOverview(token: string) {
  return apiRequest<{ data: ProgressOverview }>('/progress/overview', {
    method: 'GET',
    token
  })
}

export async function getProgressTimeline(token: string) {
  return apiRequest<{ data: Milestone[] }>('/progress/timeline', {
    method: 'GET',
    token
  })
}

export async function getRecommendedMentors(token: string) {
  return apiRequest<{ data: Mentor[] }>('/tutors/recommended', {
    method: 'GET',
    token
  })
}

export async function getAllAssignments(token: string, page: number = 1) {
  return apiRequest<{ data: any[] }>(`/assignments?page=${page}`, {
    method: 'GET',
    token
  })
}

export async function getAssignmentDetails(id: string, token: string) {
  return apiRequest<{ data: AssignmentDetail }>(`/assignments/${id}/details`, {
    method: 'GET',
    token
  })
}

export async function getAssignmentAttempts(id: string, token: string) {
  return apiRequest<{ data: AssignmentAttempt[] }>(`/assignments/${id}/attempts`, {
    method: 'GET',
    token
  })
}

export async function getMySubmission(id: string, token: string) {
  return apiRequest<{ data: any }>(`/assignments/${id}/submissions/me`, {
    method: 'GET',
    token
  })
}
