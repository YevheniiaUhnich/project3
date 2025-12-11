import { useProfileStore } from '../store/profile.store';
import { profileService } from '../services/profile.service';

export const useProfile = () => {
  const { profile, setProfile, updateProfile } = useProfileStore();

  const loadProfile = async () => {
    const data = await profileService.getProfile();
    if (data) setProfile(data);
  };

  const saveProfile = async (updates: any) => {
    await profileService.updateProfile(updates);
    updateProfile(updates);
  };

  return { profile, loadProfile, saveProfile };
};
