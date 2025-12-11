import { useNutritionStore } from '../store/nutrition.store';
import { nutritionService } from '../services/nutrition.service';

export const useNutrition = () => {
  const { meals, goals, setMeals, setGoals, addMeal } = useNutritionStore();

  const loadMeals = async () => {
    const data = await nutritionService.getMeals();
    setMeals(data);
  };

  const loadGoals = async () => {
    const data = await nutritionService.getNutritionGoals();
    setGoals(data);
  };

  const saveMeal = async (meal: any) => {
    await nutritionService.addMeal(meal);
    addMeal(meal);
  };

  return { meals, goals, loadMeals, loadGoals, saveMeal };
};
