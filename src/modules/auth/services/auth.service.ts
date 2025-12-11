export class AuthService {
  async login(email: string, password: string): Promise<void> {}
  
  async register(email: string, password: string): Promise<void> {}
  
  async loginWithGoogle(): Promise<void> {}
  
  async logout(): Promise<void> {}
}

export const authService = new AuthService();
