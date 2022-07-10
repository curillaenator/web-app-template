import React, { FC } from 'react';
import cn from 'classnames';
import { icons } from './icons';

import { IconProps } from './interfaces';

import s from './styles.module.scss';

export const Icon: FC<IconProps> = (props) => {
  const { icon, size = 'm', appearance = 'light' } = props;

  const IconComponent = icons[icon] as React.ElementType;

  return (
    <span className={cn(s.icon, s[appearance], s[`size_${size}`])}>
      <IconComponent />
    </span>
  );
};

export * from './interfaces';
