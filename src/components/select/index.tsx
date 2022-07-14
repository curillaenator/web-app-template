import React, { FC, useCallback, useState, useRef } from 'react';
import cn from 'classnames';
import Tippy from '@tippyjs/react';

import { useClickAway } from '@src/common/hooks/useClickAway';

import { Button } from '@src/components/button';

import { SelectProps, SelectItem } from './interfaces';
import s from './select.module.scss';

interface MenuProps {
  items: SelectItem[];
  selected: SelectItem;
  onSelect: (item: SelectItem) => void;
}

const Menu = React.forwardRef<HTMLDivElement, MenuProps>(({ items, selected, onSelect }, ref) => (
  <div className={s.menu} ref={ref}>
    {items.map((item) => (
      <button
        key={item.id}
        className={cn(s.item, {
          [s.item_active]: selected.id === item.id,
        })}
        onClick={() => onSelect(item)}
      >
        {item.label}
      </button>
    ))}
  </div>
));

export const Select: FC<SelectProps> = (props) => {
  const { items, onSelect } = props;

  const [open, setOpen] = useState<boolean>(false);

  const [selected, setSelected] = useState<SelectItem>(items[0]);

  const handleSelected = useCallback((item: SelectItem) => {
    setSelected(item);
    onSelect(item);
    setOpen(false);
  }, []);

  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useClickAway([triggerRef, menuRef], () => setOpen(false));

  return (
    <Tippy
      visible={open}
      placement="bottom-end"
      appendTo="parent"
      interactive
      arrow={false}
      duration={0}
      content={<Menu items={items} selected={selected} onSelect={handleSelected} ref={menuRef} />}
    >
      <Button size="s" onClick={() => setOpen((prev) => !prev)} ref={triggerRef}>
        {selected.label}
      </Button>
    </Tippy>
  );
};

export * from './interfaces';
