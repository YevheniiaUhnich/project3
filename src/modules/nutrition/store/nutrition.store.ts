import { create } from 'zustand';
import type { Meal, NutritionGoals } from '../types';

interface NutritionState {
  meals: Meal[];
  goals: NutritionGoals | null;
  setMeals: (meals: Meal[]) => void;
  setGoals: (goals: NutritionGoals) => void;
  addMeal: (meal: Meal) => void;
}

export const useNutritionStore = create<NutritionState>((set) => ({
  meals: [],
  goals: null,
  setMeals: (meals) => set({ meals }),
  setGoals: (goals) => set({ goals }),
  addMeal: (meal) => set((state) => ({ meals: [...state.meals, meal] })),
}));
