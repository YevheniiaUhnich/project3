import { useSearchStore } from '../store/search.store';
import { searchService } from '../services/search.service';

export const useSearch = () => {
  const { query, exercises, recipes, setQuery, setExercises, setRecipes } = useSearchStore();

  const searchExercises = async (searchQuery: string) => {
    setQuery(searchQuery);
    const results = await searchService.searchExercises(searchQuery);
    setExercises(results);
  };

  const searchRecipes = async (searchQuery: string) => {
    setQuery(searchQuery);
    const results = await searchService.searchRecipes(searchQuery);
    setRecipes(results);
  };

  return { query, exercises, recipes, searchExercises, searchRecipes };
};
