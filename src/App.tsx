import React, { FC } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import cn from 'classnames';

import { useStore } from 'effector-react';
import { themeStore } from '@src/store/theme';

import { Header } from '@src/components/header';
import { Sidebar } from '@src/components/sidebar';

import { Home, Settings, Dummy } from '@src/pages';

import modes from '@src/theme/modes/modes.module.scss';
import themes from '@src/theme/themes/themes.module.scss';
import s from '@src/layout.module.scss';

const Layout: FC = () => {
  const { mode, theme } = useStore(themeStore);

  return (
    <div className={cn(s.layout, modes[mode], themes[theme])}>
      <Sidebar />

      <div className={cn(s.outlet)}>
        <Header />

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="works" element={<Dummy />} />
        <Route path="skills" element={<Dummy />} />
        <Route path="about" element={<Dummy />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};
