import React, { FC, ReactNode } from 'react';

import s from './styles.module.scss';

interface FlexmapProps {
  title?: string;
  children: ReactNode;
}

export const Flexmap: FC<FlexmapProps> = (props) => {
  const { title = 'title', children } = props;

  return (
    <div className={s.flexmap}>
      <h2>{title}</h2>

      <div className={s.flex}>{children}</div>
    </div>
  );
};
