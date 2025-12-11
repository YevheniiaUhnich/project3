import { useAuthStore } from '../store/auth.store';
import { authService } from '../services/auth.service';

export const useAuth = () => {
  const { user, isAuthenticated, setUser, setToken, logout } = useAuthStore();

  const login = async (email: string, password: string) => {
    await authService.login(email, password);
  };

  const register = async (email: string, password: string) => {
    await authService.register(email, password);
  };

  const loginWithGoogle = async () => {
    await authService.loginWithGoogle();
  };

  return { user, isAuthenticated, login, register, loginWithGoogle, logout };
};
