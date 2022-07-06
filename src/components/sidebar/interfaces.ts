import { IconsType } from '@src/components/icon';

export interface Item {
  id: string;
  label: string;
  to: string;
  icon: IconsType;
}

export interface SidebarProps {
  items: Item[];
}
