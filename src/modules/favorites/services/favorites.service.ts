import type { FavoriteItem } from '../types';

export class FavoritesService {
  async getFavorites(): Promise<FavoriteItem[]> {
    return [];
  }

  async addFavorite(item: FavoriteItem): Promise<void> {}

  async removeFavorite(id: string): Promise<void> {}
}

export const favoritesService = new FavoritesService();
