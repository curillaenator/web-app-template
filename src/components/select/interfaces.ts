export interface SelectItem {
  id: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps {
  items: SelectItem[];
  disabled?: boolean;
  onSelect: (item: SelectItem) => void;
}
