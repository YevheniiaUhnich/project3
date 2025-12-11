export interface FavoriteItem {
  id: string;
  type: 'exercise' | 'video' | 'recipe';
  data: any;
  addedAt: string;
}
