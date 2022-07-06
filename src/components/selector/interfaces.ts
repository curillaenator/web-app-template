import { ReactNode } from 'react';

export interface SelectorProps {
  id: string;
  value?: string;
  checked: boolean;
  onChange: (value: string) => void;
  children?: ReactNode;
  type?: 'radio' | 'switch';
}
