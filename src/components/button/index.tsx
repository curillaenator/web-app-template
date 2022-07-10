import React, { forwardRef } from 'react';
import cn from 'classnames';

import { Icon } from '@src/components/icon';

import { ButtonProps } from './interfaces';

import s from './button.module.scss';

const getClassname = (props: ButtonProps) => {
  const { size = 'm', appearance = 'primary', variant = 'solid', shape = 'rounded', disabled } = props;

  const resolveAppearance = () => {
    if (disabled) return 'disabled';

    return appearance;
  };

  return cn(s.button, s[`button_${shape}`], s[`size_${size}`], s[variant], s[resolveAppearance()], {
    [s.button_disabled]: disabled,
  });
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { icon, size = 'm', children, ...rest } = props;

  const className = getClassname(props);

  return (
    <button {...rest} className={className} ref={ref}>
      {icon && <Icon icon={icon} size={size} />}
      {children}
    </button>
  );
});

export * from './interfaces';
