import { feedService } from '../services/feed.service';

export const useFeed = () => {
  const loadFeed = async () => {
    return await feedService.getFeedItems();
  };

  const refreshFeed = async () => {
    return await feedService.refreshFeed();
  };

  return { loadFeed, refreshFeed };
};
