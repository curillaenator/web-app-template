import React, { FC } from 'react';
import cn from 'classnames';
import { useStore } from 'effector-react';

import { themeStore } from '@src/store/theme';

import { Header } from '@src/components/header';

import modes from '@src/theme/modes/modes.module.scss';
import themes from '@src/theme/themes/themes.module.scss';

export const App: FC = () => {
  const { mode, theme } = useStore(themeStore);

  return (
    <div className={cn(modes[mode], themes[theme])}>
      <Header />
    </div>
  );
};
