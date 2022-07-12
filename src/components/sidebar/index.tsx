import React, { FC, useState, useMemo } from 'react';
import { NavLink, useMatch } from 'react-router-dom';
import cn from 'classnames';

import { Icon } from '@src/components/icon';
import { Curls } from './components/Curls';

import { SidebarProps } from './interfaces';
import s from './styles.module.scss';

const getActivated = (to: string, basePath?: string) => {
  if (!basePath) return false;
  if (basePath === '/') return to === basePath;
  return to === basePath.slice(1);
};

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
            const match = useMatch(`${item.to}/*`);
            const active = getActivated(item.to, match?.pathnameBase);

            return (
              <div
                key={item.id}
                className={cn(s.tab, {
                  [s.tab_active]: active && open,
                })}
              >
                <NavLink to={item.to} className={cn(s.navlink, { [s.navlink_active]: active })}>
                  <Icon icon={item.icon} appearance={active ? 'dark' : 'light'} size="l" />

                  <span data-label="navlink-text">{item.label}</span>
                </NavLink>

                <Curls visible={active} />
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
