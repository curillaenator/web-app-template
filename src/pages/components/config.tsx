import React from 'react';
import { Button } from '@src/components/button';
import { Selector } from '@src/components/selector';

export const componentsRoutes = [
  { id: 'button', route: 'button', Element: React.lazy(() => import('./stories/Button')) },
  { id: 'selector', route: 'selector', Element: React.lazy(() => import('./stories/Selector')) },
];

export const routesAssoc: Record<string, JSX.Element> = {
  button: (
    <Button size="l" icon="like">
      Button
    </Button>
  ),

  selector: (
    <Selector id="story_asset" checked={false} onChange={() => {}}>
      Selector
    </Selector>
  ),
};
