import { create } from 'zustand';
import type { FavoriteItem } from '../types';

interface FavoritesState {
  favorites: FavoriteItem[];
  setFavorites: (favorites: FavoriteItem[]) => void;
  addFavorite: (item: FavoriteItem) => void;
  removeFavorite: (id: string) => void;
}

export const useFavoritesStore = create<FavoritesState>((set) => ({
  favorites: [],
  setFavorites: (favorites) => set({ favorites }),
  addFavorite: (item) => set((state) => ({ favorites: [...state.favorites, item] })),
  removeFavorite: (id) => set((state) => ({
    favorites: state.favorites.filter((f) => f.id !== id)
  })),
}));
