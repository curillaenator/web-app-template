import React, { forwardRef } from 'react';
import cn from 'classnames';

import { Icon } from '@src/components/icon';

import { ButtonProps } from './interfaces';

import s from './button.module.scss';

const getClassname = (props: ButtonProps) => {
  const { size = 'm', appearance = 'primary', shape = 'rounded', disabled } = props;

  // if (disabled) return cn(s.button, s[`size_${size}`], s.disabled);

  return cn(s.button, s[`button_${shape}`], s[`size_${size}`], s[appearance]);
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { icon, size = 'm', children, ...rest } = props;

  const className = getClassname(props);

  return (
    <button {...rest} className={className} ref={ref}>
      {icon && <Icon icon={icon} />}
      {children}
    </button>
  );
});
