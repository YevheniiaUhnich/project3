export interface FeedItem {
  id: string;
  type: 'exercise' | 'recipe' | 'challenge';
  title: string;
  description: string;
  imageUrl?: string;
}
