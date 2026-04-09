import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import VerifyEmailPage from './pages/VerifyEmailPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import ProfileSetupPage from './pages/ProfileSetupPage'
import LearnerDashboard from './pages/LearnerDashboard'
import LearnerCoursesPage from './pages/LearnerCoursesPage'
import InstructorDashboard from './pages/InstructorDashboard'
import InstructorMyCoursesPage from './pages/InstructorMyCoursesPage'
import AcademicTracksPage from './pages/InstructorCoursesPage'
import AdminDashboard from './pages/AdminDashboard';
import UserManagementPage from './pages/AdminUserManagementPage';
import AdminUserDetailPage from './pages/AdminUserDetailPage';
import NotificationsPage from './pages/NotificationsPage'
import MyLearningPage from './pages/MyLearningPage'
import InstructorProfileSetupPage from './pages/InstructorProfileSetupPage'
import InstructorGradebookPage from './pages/InstructorGradebookPage'
import CertificatePage from './pages/CertificatePage'
import MessagesPage from './pages/MessagesPage'
import InstructorCourseBuilder from './pages/InstructorCourseBuilder'
import InstructorCurriculumBuilder from './pages/InstructorCurriculumBuilder'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/verify-email" element={<VerifyEmailPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/settings/profile-setup" element={<ProfileSetupPage />} />
        <Route path="/settings/instructor-setup" element={<InstructorProfileSetupPage />} />
        <Route path="/learner/dashboard" element={<LearnerDashboard />} />
        <Route path="/learner/courses" element={<LearnerCoursesPage />} />
        <Route path="/learner/notifications" element={<NotificationsPage />} />
        <Route path="/learner/my-learning" element={<MyLearningPage />} />
        <Route path="/learner/messages" element={<MessagesPage />} />
        <Route path="/certificate/:courseId" element={<CertificatePage />} />
        <Route path="/curriculum" element={<AcademicTracksPage />} />
        <Route path="/instructor/dashboard" element={<InstructorDashboard />} />
        <Route path="/instructor/courses" element={<InstructorMyCoursesPage />} />
        <Route path="/instructor/gradebook" element={<InstructorGradebookPage />} />
        <Route path="/instructor/messages" element={<MessagesPage />} />
        <Route path="/instructor/academic-oversight" element={<AcademicTracksPage />} />
        <Route path="/instructor/course-builder" element={<InstructorCourseBuilder />} />
        <Route path="/instructor/curriculum-builder" element={<InstructorCurriculumBuilder />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/user-management" element={<UserManagementPage />} />
        <Route path="/admin/talent-directory" element={<AdminUserDetailPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  )
}

export default App
