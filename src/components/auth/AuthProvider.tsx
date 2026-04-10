import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react'
import { authStorage, fetchCurrentUser, type UserProfile } from '../../lib/auth'

type AuthContextValue = {
  user: UserProfile | null
  token: string | null
  isLoading: boolean
  isAuthenticated: boolean
  setSession: (token: string, user: UserProfile) => void
  updateUser: (user: UserProfile) => void
  clearSession: () => void
  refreshUser: (tokenOverride?: string) => Promise<UserProfile | null>
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(authStorage.getUser())
  const [token, setToken] = useState<string | null>(authStorage.getToken())
  const [isLoading, setIsLoading] = useState(true)

  const clearSession = useCallback(() => {
    authStorage.clearToken()
    authStorage.clearLegacyRole()
    authStorage.clearUser()
    setToken(null)
    setUser(null)
  }, [])

  const setSession = (nextToken: string, nextUser: UserProfile) => {
    authStorage.setToken(nextToken)
    authStorage.setLegacyRole(nextUser.role)
    authStorage.setUser(nextUser)
    setToken(nextToken)
    setUser(nextUser)
  }

  const updateUser = (nextUser: UserProfile) => {
    authStorage.setLegacyRole(nextUser.role)
    authStorage.setUser(nextUser)
    setUser(nextUser)
  }

  const refreshUser = useCallback(async (tokenOverride?: string) => {
    const activeToken = tokenOverride || authStorage.getToken()
    if (!activeToken) {
      clearSession()
      return null
    }

    try {
      const response = await fetchCurrentUser(activeToken)
      authStorage.setLegacyRole(response.data.role)
      authStorage.setUser(response.data)
      setToken(activeToken)
      setUser(response.data)
      return response.data
    } catch {
      clearSession()
      return null
    }
  }, [clearSession])

  useEffect(() => {
    let mounted = true

    const loadSession = async () => {
      const storedToken = authStorage.getToken()
      if (!storedToken) {
        if (mounted) setIsLoading(false)
        return
      }

      await refreshUser(storedToken)
      if (mounted) setIsLoading(false)
    }

    loadSession()

    return () => {
      mounted = false
    }
  }, [refreshUser])

  return (
    <AuthContext.Provider value={{ user, token, isLoading, isAuthenticated: Boolean(user && token), setSession, updateUser, clearSession, refreshUser }}>
      {children}
    </AuthContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }

  return context
}
