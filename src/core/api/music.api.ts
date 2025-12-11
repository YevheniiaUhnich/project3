import APIClient from './client';

export class MusicAPI extends APIClient {
  constructor() {
    super('https://api.example.com');
  }

  async searchTracks(query: string) {
    return this.get(`/tracks?search=${query}`);
  }

  async getPlaylist(id: string) {
    return this.get(`/playlists/${id}`);
  }
}

export const musicAPI = new MusicAPI();
