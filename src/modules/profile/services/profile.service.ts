import type { UserProfile } from '../types';

export class ProfileService {
  async getProfile(): Promise<UserProfile | null> {
    return null;
  }

  async updateProfile(profile: Partial<UserProfile>): Promise<void> {}

  async uploadPhoto(uri: string): Promise<string> {
    return '';
  }
}

export const profileService = new ProfileService();
