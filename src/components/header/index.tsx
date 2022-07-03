import React, { FC } from 'react';

import { setMode } from '@src/store/theme';

import s from './styles.module.scss';

export const Header: FC = () => {
  return (
    <header className={s.header}>
      <h1>This is header</h1>

      <button onClick={() => setMode('light')}>light</button>
      <button onClick={() => setMode('dark')}>dark</button>
    </header>
  );
};
