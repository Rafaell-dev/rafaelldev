import { useState, useEffect, useCallback } from "react";
import { AuthService } from "../services/auth/authService";
import type { LoginCredentials, User } from "@/types/auth";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkAuth = () => {
      try {
        if (AuthService.isAuthenticated()) {
          const currentUser = AuthService.getCurrentUser();
          setUser(currentUser);
        }
      } catch (err) {
        console.error("Erro ao verificar autenticação:", err);
        AuthService.logout();
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Verifica expiração do token periodicamente
  useEffect(() => {
    if (!user) return;

    const checkTokenExpiry = () => {
      if (!AuthService.isAuthenticated()) {
        handleLogout();
      }
    };

    const interval = setInterval(checkTokenExpiry, 60000); // Verifica a cada minuto
    return () => clearInterval(interval);
  }, [user]);

  const handleLogin = useCallback(async (credentials: LoginCredentials) => {
    setIsLoading(true);
    setError(null);

    try {
      const loggedUser = await AuthService.login(credentials);
      setUser(loggedUser);
      return loggedUser;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Erro ao fazer login";
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleLogout = useCallback(() => {
    AuthService.logout();
    setUser(null);
    setError(null);
  }, []);

  return {
    user,
    isLoading,
    error,
    isAuthenticated: !!user,
    login: handleLogin,
    logout: handleLogout,
    clearError: () => setError(null),
  };
};
