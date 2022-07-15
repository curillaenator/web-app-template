import { createStore, createApi } from 'effector';

export type Modes = 'dark' | 'light';
export type Themes = 'ocean' | 'fire' | 'violet';

interface ThemeStore {
  theme: Themes;
  mode: Modes;
}

const INITIAL_THEME: ThemeStore = {
  theme: 'ocean',
  mode: 'light',
};

export const themeStore = createStore<ThemeStore>(INITIAL_THEME);

const themeApi = createApi(themeStore, {
  setMode: (state, mode: Modes) => ({ ...state, mode }),
  setTheme: (state, theme: Themes) => ({ ...state, theme }),
});

export const { setMode, setTheme } = themeApi;
