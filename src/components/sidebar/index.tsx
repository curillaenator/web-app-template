import React, { FC, useState } from 'react';
import { NavLink, useMatch } from 'react-router-dom';
import cn from 'classnames';

import { Icon } from '@src/components/icon';
import { Curls } from './components/Curls';

import { SidebarProps } from './interfaces';
import s from './styles.module.scss';

export const Sidebar: FC<SidebarProps> = (props) => {
  const { items } = props;

  const [open, setOpen] = useState<boolean>(false);

  return (
    <aside
      className={cn(s.sidebar, {
        [s.sidebar_opened]: open,
      })}
    >
      <div className={s.block}>
        <button
          className={cn(s.menuButton, s.menuButton_mb, {
            [s.menuButton_active]: open,
          })}
          onClick={() => setOpen((o) => !o)}
        >
          <Icon icon="menu" />
        </button>

        <div className={s.nav}>
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

                  <span data-label="navlink-text">{item.label}</span>
                </NavLink>

                <Curls visible={active?.pattern.path === item.to} />
              </div>
            );
          })}
        </div>
      </div>

      <button className={s.menuButton} onClick={() => setOpen((o) => !o)}>
        <Icon icon={open ? 'arrow-left' : 'arrow-right'} />
      </button>
    </aside>
  );
};

export * from './interfaces';
