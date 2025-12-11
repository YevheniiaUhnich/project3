import type { Track, Playlist } from '../types';

export class MusicService {
  async searchTracks(query: string): Promise<Track[]> {
    return [];
  }

  async getPlaylists(): Promise<Playlist[]> {
    return [];
  }
}

export const musicService = new MusicService();
