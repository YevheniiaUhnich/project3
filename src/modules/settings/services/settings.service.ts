import type { AppSettings } from '../types';

export class SettingsService {
  async getSettings(): Promise<AppSettings> {
    return { notifications: true, language: 'en', theme: 'light' };
  }

  async updateSettings(settings: Partial<AppSettings>): Promise<void> {}
}

export const settingsService = new SettingsService();
