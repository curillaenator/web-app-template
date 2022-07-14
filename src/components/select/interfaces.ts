export interface SelectItem {
  id: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps {
  items: SelectItem[];
  onSelect: (item: SelectItem) => void;
}
