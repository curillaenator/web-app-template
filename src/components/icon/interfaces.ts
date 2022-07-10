import { icons } from './icons';

export type IconsType = keyof typeof icons;

export interface IconProps {
  icon: IconsType;
  size?: 's' | 'm' | 'l';
  appearance?: 'primary' | 'secondary' | 'positive' | 'attention' | 'negative' | 'light' | 'dark';
}
