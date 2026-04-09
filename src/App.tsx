import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import VerifyEmailPage from './pages/VerifyEmailPage'
import ProfileSetupPage from './pages/ProfileSetupPage'
import LearnerDashboard from './pages/LearnerDashboard'
import LearnerCoursesPage from './pages/LearnerCoursesPage'
import InstructorDashboard from './pages/InstructorDashboard'
import InstructorMyCoursesPage from './pages/InstructorMyCoursesPage'
import AcademicTracksPage from './pages/InstructorCoursesPage'
import AdminDashboard from './pages/AdminDashboard';
import UserManagementPage from './pages/AdminUserManagementPage';
import AdminUserDetailPage from './pages/AdminUserDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/verify-email" element={<VerifyEmailPage />} />
        <Route path="/settings/profile-setup" element={<ProfileSetupPage />} />
        <Route path="/learner/dashboard" element={<LearnerDashboard />} />
        <Route path="/learner/courses" element={<LearnerCoursesPage />} />
        <Route path="/curriculum" element={<AcademicTracksPage />} />
        <Route path="/instructor/dashboard" element={<InstructorDashboard />} />
        <Route path="/instructor/courses" element={<InstructorMyCoursesPage />} />
        <Route path="/instructor/academic-oversight" element={<AcademicTracksPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/user-management" element={<UserManagementPage />} />
        <Route path="/admin/talent-directory" element={<AdminUserDetailPage />} />
      </Routes>
    </Router>
  )
}

export default App
