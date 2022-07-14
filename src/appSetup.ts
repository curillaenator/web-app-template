import React from 'react';
import { NavItem } from '@src/components/sidebar';

const Home = React.lazy(() => import('@src/pages/home'));
const Components = React.lazy(() => import('@src/pages/components'));
const Settings = React.lazy(() => import('@src/pages/settings'));
const Dummy = React.lazy(() => import('@src/pages/dummy'));
const Manager = React.lazy(() => import('@src/pages/manager'));

export const navItems: NavItem[] = [
  { id: 'home', to: '/', label: 'Home', icon: 'home' },
  { id: 'components', to: 'components', label: 'Components', icon: 'bricks' },
  { id: 'manager', to: 'manager', label: 'Manager', icon: 'tasks' },
  { id: 'github', to: 'github', label: 'Github', icon: 'github' },
  // { id: 'settings', to: 'settings', label: 'Settings', icon: 'settings' },
];

export const pathLabelAssoc = Object.fromEntries(navItems.map(({ to, label }) => [to, label]));

export { Home, Components, Settings, Dummy, Manager };
