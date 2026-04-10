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
