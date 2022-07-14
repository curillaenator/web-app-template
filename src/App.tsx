import React, { FC, Suspense } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import cn from 'classnames';

import { useStore } from 'effector-react';
import { themeStore } from '@src/store/theme';

import { Header } from '@src/components/header';
import { Sidebar } from '@src/components/sidebar';

import { navItems, Home, Components, Settings, Dummy, Manager } from '@src/appSetup';

import modes from '@src/theme/modes/modes.module.scss';
import themes from '@src/theme/themes/themes.module.scss';
import s from '@src/layout.module.scss';

const MainLayout: FC = () => {
  const { mode, theme } = useStore(themeStore);

  return (
    <div className={cn(s.layout, modes[mode], themes[theme])}>
      <Sidebar items={navItems} />

      <div className={cn(s.outlet)}>
        <Header />

        <main>
          <Suspense fallback={<div>...loading</div>}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </div>
  );
};

export const App: FC = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />

      <Route path="components/*" element={<Components />} />

      <Route path="manager" element={<Manager />} />

      <Route path="github" element={<Dummy />} />

      <Route path="settings" element={<Settings />} />
    </Route>
  </Routes>
);
