import React, { FC, Suspense } from 'react';
import { Routes, Route, NavLink, useMatch } from 'react-router-dom';

import { Card } from '@src/components/card';

import { Gridmap } from './components';
import { componentsRoutes } from './config';

export const Components: FC = () => {
  const parentPage = useMatch('components');

  return (
    <>
      {!!parentPage && (
        <Gridmap>
          {componentsRoutes.map(({ id, route }) => (
            <NavLink key={id} to={route}>
              <Card width="100%" height="100%">
                {route}
              </Card>
            </NavLink>
          ))}
        </Gridmap>
      )}

      <Suspense fallback={<div>...loading</div>}>
        <Routes>
          {componentsRoutes.map(({ id, route, Element }) => (
            <Route key={id} path={route} element={<Element />} />
          ))}
        </Routes>
      </Suspense>
    </>
  );
};

export default Components;
