import React, { FC } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import cn from 'classnames';

import { useStore } from 'effector-react';
import { themeStore } from '@src/store/theme';

import { Header } from '@src/components/header';
import { Sidebar } from '@src/components/sidebar';

import { Main } from '@src/pages';

import modes from '@src/theme/modes/modes.module.scss';
import themes from '@src/theme/themes/themes.module.scss';
import s from '@src/layout.module.scss';

const Layout: FC = () => {
  const { mode, theme } = useStore(themeStore);

  return (
    <div className={cn(s.layout, modes[mode], themes[theme])}>
      <Header />

      <Sidebar />

      <main className={s.outlet}>
        <Outlet />
      </main>
    </div>
  );
};

export const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
      </Route>
    </Routes>
  );
};
