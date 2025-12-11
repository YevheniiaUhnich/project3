import { create } from 'zustand';
import type { ProgressEntry } from '../types';

interface ProgressState {
  entries: ProgressEntry[];
  setEntries: (entries: ProgressEntry[]) => void;
  addEntry: (entry: ProgressEntry) => void;
  removeEntry: (id: string) => void;
}

export const useProgressStore = create<ProgressState>((set) => ({
  entries: [],
  setEntries: (entries) => set({ entries }),
  addEntry: (entry) => set((state) => ({ entries: [...state.entries, entry] })),
  removeEntry: (id) => set((state) => ({
    entries: state.entries.filter((e) => e.id !== id)
  })),
}));
