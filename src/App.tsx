import React, { FC, Suspense } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import cn from 'classnames';

import { useStore } from 'effector-react';
import { themeStore } from '@src/store/theme';

import { ErrorBoundary } from '@src/components/errorBoundary';
import { Header } from '@src/components/header';
import { Sidebar } from '@src/components/sidebar';

import { items } from '@src/config/sidebar';

import modes from '@src/theme/modes/modes.module.scss';
import themes from '@src/theme/themes/themes.module.scss';
import s from '@src/layout.module.scss';

const Home = React.lazy(() => import('@src/pages/home'));
const Components = React.lazy(() => import('@src/pages/components'));
const Settings = React.lazy(() => import('@src/pages/settings'));
const Dummy = React.lazy(() => import('@src/pages/dummy'));
const RickMorty = React.lazy(() => import('@src/pages/rickmorty'));

const MainLayout: FC = () => {
  const { mode, theme } = useStore(themeStore);

  return (
    <div className={cn(s.layout, modes[mode], themes[theme])}>
      <Sidebar items={items} />

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
  <ErrorBoundary>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />

        <Route path="components/*" element={<Components />} />

        <Route path="skills" element={<Dummy />} />

        <Route path="rickmorty" element={<RickMorty />} />

        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  </ErrorBoundary>
);
