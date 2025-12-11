import { useSettingsStore } from '../store/settings.store';
import { settingsService } from '../services/settings.service';

export const useSettings = () => {
  const { settings, setSettings, updateSettings } = useSettingsStore();

  const loadSettings = async () => {
    const data = await settingsService.getSettings();
    setSettings(data);
  };

  const saveSettings = async (updates: any) => {
    await settingsService.updateSettings(updates);
    updateSettings(updates);
  };

  return { settings, loadSettings, saveSettings };
};
