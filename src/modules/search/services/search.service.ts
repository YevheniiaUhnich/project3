import type { Exercise, Recipe } from '../types';

export class SearchService {
  async searchExercises(query: string): Promise<Exercise[]> {
    return [];
  }

  async searchRecipes(query: string): Promise<Recipe[]> {
    return [];
  }
}

export const searchService = new SearchService();
