import React, { FC } from 'react';

import { useStore } from 'effector-react';
import { themeStore } from '@src/store/theme';

import { Selector } from '@src/components/selector';

import { setMode, setTheme, Modes, Themes } from '@src/store/theme';

export const Settings: FC = () => {
  const { mode, theme } = useStore(themeStore);

  return (
    <div>
      <h1>Settings</h1>

      <h2>Mode</h2>

      <Selector
        id={'current-mode-selector'}
        type="switch"
        checked={mode === 'dark'}
        onChange={() => setMode(mode === 'dark' ? 'light' : 'dark')}
      >
        {mode.slice(0, 1).toUpperCase() + mode.slice(1)}
      </Selector>

      <h2>Themes</h2>

      <Selector id="ocean-theme-selector" type="radio" checked={theme === 'ocean'} onChange={() => setTheme('ocean')}>
        Ocean
      </Selector>

      <Selector id="fire-theme-selector" type="radio" checked={theme === 'fire'} onChange={() => setTheme('fire')}>
        Fire
      </Selector>

      <Selector
        id="violet-theme-selector"
        type="radio"
        checked={theme === 'violet'}
        onChange={() => setTheme('violet')}
      >
        Violet
      </Selector>
    </div>
  );
};
