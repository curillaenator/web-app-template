import { createStore, createEvent, createEffect } from 'effector';
import { EpisodeType, rickmorty } from '@src/apis/rickmorty';

interface InitialRickMorty {
  episodes: EpisodeType[];
  // episode: EpisodeType | null;
}

const INITIAL: InitialRickMorty = {
  episodes: [],
  // episode: null,
};

export const getEpisodes = createEffect(async (page: number) => await rickmorty.getEpisodes(page));

export const getSingleEpisode = createEffect(async (episodeId: string) => await rickmorty.getEpisodes(1));

export const rickmortyStore = createStore<InitialRickMorty>(INITIAL)
  .on(getEpisodes.doneData, (state, episodes) => ({ ...state, episodes }))
  .on(getSingleEpisode.doneData, (state, episode) => ({ ...state, episode }));
