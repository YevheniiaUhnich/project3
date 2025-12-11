import { useProgressStore } from '../store/progress.store';
import { progressService } from '../services/progress.service';

export const useProgress = () => {
  const { entries, setEntries, addEntry, removeEntry } = useProgressStore();

  const loadProgress = async () => {
    const data = await progressService.getProgress();
    setEntries(data);
  };

  const saveProgress = async (entry: any) => {
    await progressService.addProgress(entry);
    addEntry(entry);
  };

  const deleteProgress = async (id: string) => {
    await progressService.deleteProgress(id);
    removeEntry(id);
  };

  return { entries, loadProgress, saveProgress, deleteProgress };
};
