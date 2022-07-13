import { Item } from '@src/components/sidebar';

export const items: Item[] = [
  { id: 'home', to: '/', label: 'Home', icon: 'home' },
  { id: 'components', to: 'components', label: 'Components', icon: 'bricks' },
  { id: 'skills', to: 'skills', label: 'Skills', icon: 'idea' },
  { id: 'rickmorty', to: 'rickmorty', label: 'Rick&Morty', icon: 'graphql' },
  { id: 'settings', to: 'settings', label: 'Settings', icon: 'settings' },
];

export const pathLabelAssoc = Object.fromEntries(items.map(({ to, label }) => [to, label]));
