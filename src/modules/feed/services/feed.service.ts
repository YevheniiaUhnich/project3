import type { FeedItem } from '../types';

export class FeedService {
  async getFeedItems(): Promise<FeedItem[]> {
    return [];
  }

  async refreshFeed(): Promise<FeedItem[]> {
    return [];
  }
}

export const feedService = new FeedService();
