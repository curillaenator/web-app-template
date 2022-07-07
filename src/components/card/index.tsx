import React, { FC } from 'react';

import { CardProps } from './interfaces';

import s from './card.module.scss';

export const Card: FC<CardProps> = (props) => {
  const { children, width, height } = props;

  return (
    <div className={s.card} style={{ width, height }}>
      {children}
    </div>
  );
};
