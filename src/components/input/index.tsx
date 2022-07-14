import React, { forwardRef } from 'react';

import { InputProps } from './interfaces';

import s from './input.module.scss';

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <input className={s.input} {...props} ref={ref} />;
});
