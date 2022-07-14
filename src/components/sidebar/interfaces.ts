import { IconsType } from '@src/components/icon';

export interface NavItem {
  id: string;
  label: string;
  to: string;
  icon: IconsType;
}

export interface SidebarProps {
  items: NavItem[];
}
