import { create } from 'zustand';
import type { AppSettings } from '../types';

interface SettingsState {
  settings: AppSettings;
  setSettings: (settings: AppSettings) => void;
  updateSettings: (settings: Partial<AppSettings>) => void;
}

export const useSettingsStore = create<SettingsState>((set) => ({
  settings: { notifications: true, language: 'en', theme: 'light' },
  setSettings: (settings) => set({ settings }),
  updateSettings: (updates) => set((state) => ({
    settings: { ...state.settings, ...updates }
  })),
}));
