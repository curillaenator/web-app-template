import React, { FC, ReactNode } from 'react';

import s from './scroll.module.scss';

interface ScrollProps {
  children: ReactNode;
}

export const Scroll: FC<ScrollProps> = ({ children }) => {
  return <div className={s.scroll}>{children}</div>;
};
