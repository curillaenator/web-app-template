import React, { FC } from 'react';

import s from './styles.module.scss';

export const Header: FC = () => {
  return (
    <header className={s.header}>
      <h1>This is header</h1>
    </header>
  );
};
