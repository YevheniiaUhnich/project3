import { create } from 'zustand';
import type { Track, Playlist } from '../types';

interface MusicState {
  currentTrack: Track | null;
  playlists: Playlist[];
  isPlaying: boolean;
  setCurrentTrack: (track: Track) => void;
  setPlaylists: (playlists: Playlist[]) => void;
  togglePlayback: () => void;
}

export const useMusicStore = create<MusicState>((set) => ({
  currentTrack: null,
  playlists: [],
  isPlaying: false,
  setCurrentTrack: (track) => set({ currentTrack: track }),
  setPlaylists: (playlists) => set({ playlists }),
  togglePlayback: () => set((state) => ({ isPlaying: !state.isPlaying })),
}));
