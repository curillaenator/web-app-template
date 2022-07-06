import { createStore, createEvent } from 'effector';

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

export const setMode = createEvent<Modes>();
export const setTheme = createEvent<Themes>();

export const themeStore = createStore<ThemeStore>(INITIAL_THEME)
  .on(setMode, (state, mode) => ({ ...state, mode }))
  .on(setTheme, (state, theme) => ({ ...state, theme }));
