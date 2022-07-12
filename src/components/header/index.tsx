import React, { FC } from 'react';
// import { useStore } from 'effector-react';
import { useLocation } from 'react-router-dom';

// import { commonStore, setHeaderTitle } from '@src/store/common';

// import { items } from '@src/config/sidebar';

import s from './styles.module.scss';

export const Header: FC = () => {
  const { pathname } = useLocation();

  return (
    <header className={s.header}>
      <h1>{pathname.slice(1) || 'Home'}</h1>
    </header>
  );
};
