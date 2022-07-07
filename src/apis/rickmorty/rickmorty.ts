import { queries } from './queries';
import { EpisodesResponseType } from './interfaces';

const url = 'https://rickandmortyapi.com/graphql';

const makeRequest = <T>(query: string): Promise<T> => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ query }),
  }).then((res) => res.json());
};

export const rickmorty = {
  getEpisodes: (page: number) => {
    return makeRequest<EpisodesResponseType>(queries.episodes(page)).then((res) => res.data.episodes.results);
  },
};
