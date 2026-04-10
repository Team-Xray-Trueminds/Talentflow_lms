import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from './AuthProvider'
import { getRoleHomePath, type UserRole } from '../../lib/auth'

function FullScreenLoader() {
  return (
    <div className="min-h-screen bg-[#020816] text-[#9EF7FF] flex items-center justify-center">
      <div className="rounded-3xl border border-[#57FAE9]/20 bg-[#041522]/80 px-6 py-4 shadow-2xl shadow-[#57FAE9]/10 backdrop-blur-xl">
        <p className="text-sm font-semibold tracking-[0.2em] uppercase">Authorizing Session</p>
      </div>
    </div>
  )
}

export function ProtectedRoute({ allowedRoles }: { allowedRoles?: UserRole[] }) {
  const { user, isLoading } = useAuth()
  const location = useLocation()

  if (isLoading) {
    return <FullScreenLoader />
  }

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to={getRoleHomePath(user.role)} replace />
  }

  return <Outlet />
}

export function PublicOnlyRoute() {
  const { user, isLoading } = useAuth()

  if (isLoading) {
    return <FullScreenLoader />
  }

  if (user) {
    return <Navigate to={getRoleHomePath(user.role)} replace />
  }

  return <Outlet />
}
