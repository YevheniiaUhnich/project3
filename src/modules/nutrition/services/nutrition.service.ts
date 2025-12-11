import type { Meal, NutritionGoals } from '../types';

export class NutritionService {
  async getMeals(): Promise<Meal[]> {
    return [];
  }

  async addMeal(meal: Meal): Promise<void> {}

  async calculateCalories(weight: number, height: number, age: number, activityLevel: string): Promise<number> {
    return 0;
  }

  async getNutritionGoals(): Promise<NutritionGoals> {
    return { dailyCalories: 2000, protein: 150, carbs: 250, fat: 65 };
  }
}

export const nutritionService = new NutritionService();
