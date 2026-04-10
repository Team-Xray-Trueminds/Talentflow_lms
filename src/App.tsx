import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import VerifyEmailPage from './pages/VerifyEmailPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import ResetPasswordPage from './pages/ResetPasswordPage'
import ProfileSetupPage from './pages/ProfileSetupPage'
import LearnerDashboard from './pages/LearnerDashboard'
import LearnerCoursesPage from './pages/LearnerCoursesPage'
import InstructorDashboard from './pages/InstructorDashboard'
import InstructorMyCoursesPage from './pages/InstructorMyCoursesPage'
import AcademicTracksPage from './pages/InstructorCoursesPage'
import AdminDashboard from './pages/AdminDashboard';
import AdminUserManagementPage from './pages/AdminUserManagementPage';
import AdminInstructorProfilePage from './pages/AdminInstructorProfilePage';
import AdminAddInstructorPage from './pages/AdminAddInstructorPage';
import AdminUserDetailPage from './pages/AdminUserDetailPage';
import NotificationsPage from './pages/NotificationsPage'
import DiscussionsPage from './pages/DiscussionsPage'
import MyLearningPage from './pages/MyLearningPage'
import AssignmentsPage from './pages/AssignmentsPage'
import SubmissionsPage from './pages/SubmissionsPage'
import CertificatesPage from './pages/CertificatesPage'
import InstructorProfileSetupPage from './pages/InstructorProfileSetupPage'
import InstructorGradebookPage from './pages/InstructorGradebookPage'
import CertificatePage from './pages/CertificatePage'
import MessagesPage from './pages/MessagesPage'
import InstructorCourseBuilder from './pages/InstructorCourseBuilder'
import InstructorCurriculumBuilder from './pages/InstructorCurriculumBuilder'
import InstructorContentUploadPage from './pages/InstructorContentUploadPage'
import InstructorAssignmentBuilderPage from './pages/InstructorAssignmentBuilderPage'
import LearnerCoursePlayerPage from './pages/LearnerCoursePlayerPage'
import LearnerCoursePreviewPage from './pages/LearnerCoursePreviewPage'
import LearnerAssignmentPage from './pages/LearnerAssignmentPage'
import InstructorVerifyLoginPage from './pages/InstructorVerifyLoginPage'
import InstructorSetPasswordPage from './pages/InstructorSetPasswordPage'
import NotFoundPage from './pages/NotFoundPage'
import { ProtectedRoute, PublicOnlyRoute } from './components/auth/AuthGuards'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<PublicOnlyRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
        </Route>
        <Route path="/verify-email" element={<VerifyEmailPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/settings/profile-setup" element={<ProfileSetupPage />} />
          <Route path="/settings/instructor-setup" element={<InstructorProfileSetupPage />} />
          <Route path="/certificate/:courseId" element={<CertificatePage />} />
        </Route>
        <Route element={<ProtectedRoute allowedRoles={['learner']} />}>
          <Route path="/learner/dashboard" element={<LearnerDashboard />} />
          <Route path="/learner/courses" element={<LearnerCoursesPage />} />
          <Route path="/learner/course-player/:id?" element={<LearnerCoursePlayerPage />} />
          <Route path="/learner/course-preview/:id" element={<LearnerCoursePreviewPage />} />
          <Route path="/learner/assignment/:id" element={<LearnerAssignmentPage />} />
          <Route path="/learner/notifications" element={<NotificationsPage />} />
          <Route path="/learner/discussions" element={<DiscussionsPage />} />
          <Route path="/learner/progress" element={<MyLearningPage />} />
          <Route path="/learner/assignments" element={<AssignmentsPage />} />
          <Route path="/learner/submissions" element={<SubmissionsPage />} />
          <Route path="/learner/certificates" element={<CertificatesPage />} />
          <Route path="/learner/my-learning" element={<MyLearningPage />} />
          <Route path="/learner/messages" element={<MessagesPage />} />
        </Route>
        <Route element={<ProtectedRoute allowedRoles={['tutor']} />}>
          <Route path="/curriculum" element={<AcademicTracksPage />} />
          <Route path="/instructor/dashboard" element={<InstructorDashboard />} />
          <Route path="/instructor/courses" element={<InstructorMyCoursesPage />} />
          <Route path="/instructor/gradebook" element={<InstructorGradebookPage />} />
          <Route path="/instructor/messages" element={<MessagesPage />} />
          <Route path="/instructor/academic-oversight" element={<AcademicTracksPage />} />
          <Route path="/instructor/course-builder" element={<InstructorCourseBuilder />} />
          <Route path="/instructor/curriculum-builder" element={<InstructorCurriculumBuilder />} />
          <Route path="/instructor/content-upload" element={<InstructorContentUploadPage />} />
          <Route path="/instructor/assignment-builder" element={<InstructorAssignmentBuilderPage />} />
          <Route path="/instructor/verify-login" element={<InstructorVerifyLoginPage />} />
          <Route path="/instructor/set-password" element={<InstructorSetPasswordPage />} />
        </Route>
        <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
          <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/user-management" element={<AdminUserManagementPage />} />
          <Route path="/admin/talent-directory" element={<AdminInstructorProfilePage />} />
          <Route path="/admin/instructor-profile" element={<AdminInstructorProfilePage />} />
          <Route path="/admin/add-instructor" element={<AdminAddInstructorPage />} />
          <Route path="/admin/user-detail/:id?" element={<AdminUserDetailPage />} />
          <Route path="/admin/curriculum" element={<AcademicTracksPage />} />
          <Route path="/admin/settings" element={<ProfileSetupPage />} />
        </Route>
        
        {/* Global Catch-all / 404 Not Found */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}

export default App
