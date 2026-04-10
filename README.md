# TalentFlow LMS Frontend

TalentFlow LMS is a multi-role learning platform frontend built with React, TypeScript, Vite, and Tailwind CSS. It delivers a high-tech neon learner experience, instructor workspace, and admin oversight portal, while integrating with the TalentFlow Node.js backend for authentication, user profile sync, and protected application flows.

## Overview

This frontend currently supports:

- public landing, sign up, login, email verification, forgot password, and reset password flows
- protected learner, instructor, and admin routes
- persistent auth sessions backed by the API
- role-aware redirects and route guards
- learner dashboards, course discovery, progress views, discussions, notifications, certificates, and profile settings
- instructor dashboards, gradebook, curriculum, builder, and upload flows
- admin dashboard and user management surfaces

## Tech Stack

- React 19
- TypeScript
- Vite 8
- Tailwind CSS 4
- React Router 7
- Material Symbols
- Inter and Manrope fonts

## Design Direction

This project follows a high-tech neon visual language:

- bold editorial typography
- premium glass and glow treatments
- strong dashboard hierarchy
- animated but restrained interactions
- role-specific experiences across learner, instructor, and admin portals

## Project Structure

```text
src/
  components/
    auth/                  Auth provider, route guards, OTP input, auth UI
    layout/                Shared layout components such as BottomNav
    Sidebar.tsx            Role-aware primary navigation
  lib/
    api.ts                 Shared API request helpers
    auth.ts                Auth/session API integration
  pages/
    LandingPage.tsx
    LoginPage.tsx
    SignUpPage.tsx
    VerifyEmailPage.tsx
    ForgotPasswordPage.tsx
    ResetPasswordPage.tsx
    ProfileSetupPage.tsx
    Learner*.tsx           Learner portal pages
    Instructor*.tsx        Instructor portal pages
    Admin*.tsx             Admin portal pages
    CertificatePage.tsx
    CertificatesPage.tsx
  App.tsx                  Central route map
  main.tsx                 App bootstrap
```

## Routing Summary

### Public routes

- `/`
- `/login`
- `/signup`
- `/forgot-password`
- `/reset-password`
- `/verify-email`

### Shared protected routes

- `/settings/profile-setup`
- `/settings/instructor-setup`
- `/certificate/:courseId`

### Learner routes

- `/learner/dashboard`
- `/learner/courses`
- `/learner/course-preview/:id`
- `/learner/course-player/:id?`
- `/learner/assignment/:id`
- `/learner/notifications`
- `/learner/discussions`
- `/learner/progress`
- `/learner/my-learning`
- `/learner/assignments`
- `/learner/submissions`
- `/learner/certificates`
- `/learner/messages`

### Instructor routes

- `/instructor/dashboard`
- `/instructor/courses`
- `/instructor/gradebook`
- `/instructor/messages`
- `/instructor/academic-oversight`
- `/instructor/course-builder`
- `/instructor/curriculum-builder`
- `/instructor/content-upload`
- `/instructor/assignment-builder`
- `/curriculum`

### Admin routes

- `/admin`
- `/admin/dashboard`
- `/admin/user-management`
- `/admin/talent-directory`
- `/admin/instructor-profile`
- `/admin/add-instructor`
- `/admin/user-detail/:id?`
- `/admin/curriculum`
- `/admin/settings`

## Authentication Integration

The frontend is wired to the TalentFlow backend and expects an API base URL via environment variables.

### Environment

Create a local `.env` file from `.env.example`:

```bash
VITE_API_BASE_URL=http://localhost:4000
```

### Backend endpoints used by the frontend

- `POST /auth/register`
- `POST /auth/login`
- `POST /auth/verify-otp`
- `POST /auth/resend-otp`
- `POST /auth/forgot-password`
- `POST /auth/reset-password`
- `GET /users/me`
- `PUT /users/me/profile`

### Auth behavior

- token-based session persistence
- current-user bootstrap on refresh
- protected-route enforcement by role
- public-route redirect for authenticated users
- profile name sync across learner surfaces
- OAuth callback token handling from the login route

## Local Development

### Prerequisites

- Node.js 18+
- npm
- TalentFlow backend running locally

### Install

```bash
npm install
```

### Start the frontend

```bash
npm run dev
```

The Vite dev server normally runs at:

```text
http://localhost:5173
```

### Build for production

```bash
npm run build
```

### Preview the build

```bash
npm run preview
```

## Backend Pairing Notes

This frontend was connected against the local backend workspace:

```text
C:\Users\new\Desktop\Trueminds Internship\Talentflow-backend_node.js
```

For local development, the backend should allow the frontend origin:

- `CORS_ORIGIN=http://localhost:5173`
- `BRAND_APP_URL=http://localhost:5173`
- `OAUTH_SUCCESS_REDIRECT=http://localhost:5173/login`

If you are using XAMPP for MySQL, ensure MySQL is running before starting the backend.

## Key Frontend Features

### Learner portal

- dashboard overview
- course catalog
- course preview and player
- progress and my learning views
- notifications and discussions
- certificate listing and detailed certificate view
- profile settings and public profile data sync

### Instructor portal

- dashboard
- my courses
- curriculum and course builder flows
- content upload
- assignment builder
- gradebook

### Admin portal

- dashboard
- user management
- instructor profile access
- add instructor flow
- user detail pages

## Important Implementation Notes

- auth state is managed centrally through `AuthProvider`
- route access is enforced with `ProtectedRoute` and `PublicOnlyRoute`
- profile edits update both backend state and frontend auth state
- learner names are surfaced dynamically from the signed-in user profile
- certificate pages use the active signed-in name instead of hardcoded placeholders

## Recommended Workflow

When working with teammates:

1. check `git status` before starting
2. pull remote updates before pushing if your branch is clean or after stashing/committing local work
3. build locally before pushing
4. avoid overwriting teammate changes without reviewing incoming diffs

## Scripts

```json
{
  "dev": "vite",
  "build": "tsc -b && vite build",
  "lint": "eslint .",
  "preview": "vite preview"
}
```

## Status

The frontend currently builds successfully with:

```bash
npm run build
```

## License

Internal team project for TalentFlow.
