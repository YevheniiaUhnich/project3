import APIClient from './client';

export class RecipeAPI extends APIClient {
  constructor() {
    super('https://api.example.com');
  }

  async searchRecipes(query: string) {
    return this.get(`/recipes?search=${query}`);
  }

  async getRecipeById(id: string) {
    return this.get(`/recipes/${id}`);
  }
}

export const recipeAPI = new RecipeAPI();
