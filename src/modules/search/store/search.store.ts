import { create } from 'zustand';
import type { Exercise, Recipe } from '../types';

interface SearchState {
  query: string;
  exercises: Exercise[];
  recipes: Recipe[];
  setQuery: (query: string) => void;
  setExercises: (exercises: Exercise[]) => void;
  setRecipes: (recipes: Recipe[]) => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  query: '',
  exercises: [],
  recipes: [],
  setQuery: (query) => set({ query }),
  setExercises: (exercises) => set({ exercises }),
  setRecipes: (recipes) => set({ recipes }),
}));
