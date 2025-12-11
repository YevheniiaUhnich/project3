import { useMusicStore } from '../store/music.store';
import { musicService } from '../services/music.service';

export const useMusic = () => {
  const { currentTrack, playlists, isPlaying, setCurrentTrack, setPlaylists, togglePlayback } = useMusicStore();

  const searchTracks = async (query: string) => {
    return await musicService.searchTracks(query);
  };

  const loadPlaylists = async () => {
    const data = await musicService.getPlaylists();
    setPlaylists(data);
  };

  const playTrack = (track: any) => {
    setCurrentTrack(track);
    togglePlayback();
  };

  return { currentTrack, playlists, isPlaying, searchTracks, loadPlaylists, playTrack, togglePlayback };
};
