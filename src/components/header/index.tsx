import React, { FC } from 'react';
import { useStore } from 'effector-react';

import { useHeaderLogic } from './hooks/useHeaderLogic';

import { setMode, setTheme, Themes, themeStore } from '@src/store/theme';

import { Button } from '@src/components/button';
import { Selector } from '@src/components/selector';
import { Select } from '@src/components/select';

import { THEME_ITEMS } from './constants';
import s from './styles.module.scss';

export const Header: FC = () => {
  const { mode } = useStore(themeStore);
  const { title, isBackButton, navBack } = useHeaderLogic();

  return (
    <header className={s.header}>
      <div className={s.slot}>
        {isBackButton && <Button icon="arrow-left" size="s" onClick={navBack} />}

        <h1>{title || 'Dummy'}</h1>
      </div>

      <div className={s.slot}>
        <Selector
          id={'current-mode-selector'}
          type="switch"
          checked={mode === 'dark'}
          onChange={() => setMode(mode === 'dark' ? 'light' : 'dark')}
        >
          {mode.slice(0, 1).toUpperCase() + mode.slice(1)}
        </Selector>

        <Select items={THEME_ITEMS} onSelect={({ id }) => setTheme(id as Themes)} />
      </div>
    </header>
  );
};
