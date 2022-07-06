import React, { forwardRef } from 'react';
import cn from 'classnames';

import { SelectorProps } from './interfaces';

import s from './switch.module.scss';

const typeAssoc: Record<NonNullable<SelectorProps['type']>, HTMLInputElement['type']> = {
  radio: 'radio',
  switch: 'checkbox',
};

export const Selector = forwardRef<HTMLInputElement, SelectorProps>((props, ref) => {
  const { id, type = 'radio', checked, value, onChange, children } = props;

  return (
    <div className={s.selector}>
      <input
        type={typeAssoc[type]}
        id={id}
        ref={ref}
        value={value}
        checked={checked}
        onChange={(e) => onChange(e.target.value)}
      />

      <label className={s.label} htmlFor={id}>
        <div className={cn(s.toggler, s[`toggler_${type}`])}>
          <div
            className={cn(s.inner, {
              [s.inner_active]: checked,
            })}
          />
        </div>

        {children}
      </label>
    </div>
  );
});
