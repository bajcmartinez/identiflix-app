export type IdentiflixVideo = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
}

export type IdentiflixPlaylist = {
  id: string;
  title: string;
  videos: IdentiflixVideo[];
}
