export interface EpisodeType {
  id: string;
  name: string;
  episode: string;
  created: string;
  characters: Record<'name', string>[];
}

export interface EpisodesResponseType {
  data: {
    episodes: {
      results: EpisodeType[];
    };
  };
}
