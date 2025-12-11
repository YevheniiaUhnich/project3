export interface Track {
  id: string;
  title: string;
  artist: string;
  previewUrl?: string;
  duration: number;
}

export interface Playlist {
  id: string;
  name: string;
  tracks: Track[];
}
