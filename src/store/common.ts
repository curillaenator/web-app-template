import { createStore, createEvent } from 'effector';

interface CommonStore {
  headerTitle: string;
}

const INITIAL = {
  headerTitle: 'Home',
};

export const setHeaderTitle = createEvent<string>();
export const clearHeaderTitle = createEvent<string>();

export const commonStore = createStore<CommonStore>(INITIAL)
  .on(setHeaderTitle, (state, headerTitle) => ({ ...state, headerTitle }))
  .on(clearHeaderTitle, (state) => ({ state, headerTitle: '' }));
