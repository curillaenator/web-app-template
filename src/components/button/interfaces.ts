import type { ButtonHTMLAttributes } from 'react';
import type { IconsType } from '@src/components/icon';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  appearance?: 'primary' | 'secondary' | 'positive' | 'attention' | 'negative';
  size?: 'l' | 'm' | 's';
  shape?: 'rounded' | 'circular';
  icon?: IconsType;
}
