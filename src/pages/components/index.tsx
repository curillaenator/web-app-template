import React, { FC } from 'react';

import { Routes, Route, NavLink } from 'react-router-dom';

import { ButtonStory } from './stories/Button';

export const Components: FC = () => {
  return (
    <>
      <NavLink to="button">Btn</NavLink>

      <Routes>
        <Route path="button" element={<ButtonStory />} />
      </Routes>
    </>
  );
};
