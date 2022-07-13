import React from 'react';

export const componentsRoutes = [
  { id: 'button', route: 'button', Element: React.lazy(() => import('./stories/Button')) },
  { id: 'selector', route: 'selector', Element: React.lazy(() => import('./stories/Button')) },
];
