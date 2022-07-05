import React, { FC, useState } from 'react';
import { NavLink, useMatch } from 'react-router-dom';
import cn from 'classnames';

import { Icon } from '@src/components/icon';
import { Curls } from './components/Curls';

import { Item } from './interfaces';
import s from './styles.module.scss';

const items: Item[] = [
  { id: 'home', to: '/', label: 'Home', icon: 'home' },
  { id: 'works', to: 'works', label: 'Works', icon: 'like' },
  { id: 'skills', to: 'skills', label: 'Skills', icon: 'idea' },
  { id: 'about', to: 'about', label: 'About', icon: 'home' },
  { id: 'settings', to: 'settings', label: 'Settings', icon: 'settings' },
];

export const Sidebar: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <aside
      className={cn(s.sidebar, {
        [s.sidebar_opened]: open,
      })}
    >
      <div className={s.nav}>
        <div className={s.logo} />

        {items.map((item) => {
          const active = useMatch(item.to);

          return (
            <div
              key={item.id}
              className={cn(s.tab, {
                [s.tab_active]: !!active && open,
              })}
            >
              <NavLink to={item.to} className={({ isActive }) => cn(s.navlink, { [s.navlink_active]: isActive })}>
                <Icon icon={item.icon} appearance={!!active ? 'dark' : 'light'} />

                <span>{item.label}</span>
              </NavLink>

              <Curls visible={active?.pattern.path === item.to} />
            </div>
          );
        })}
      </div>

      <button className={s.openButton} onClick={() => setOpen((o) => !o)}>
        <Icon icon={open ? 'arrow-left' : 'arrow-right'} />
      </button>
    </aside>
  );
};
