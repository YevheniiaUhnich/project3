import { useFavoritesStore } from '../store/favorites.store';
import { favoritesService } from '../services/favorites.service';

export const useFavorites = () => {
  const { favorites, setFavorites, addFavorite, removeFavorite } = useFavoritesStore();

  const loadFavorites = async () => {
    const data = await favoritesService.getFavorites();
    setFavorites(data);
  };

  const toggleFavorite = async (item: any) => {
    const exists = favorites.find((f) => f.id === item.id);
    if (exists) {
      await favoritesService.removeFavorite(item.id);
      removeFavorite(item.id);
    } else {
      await favoritesService.addFavorite(item);
      addFavorite(item);
    }
  };

  return { favorites, loadFavorites, toggleFavorite };
};
