import { MutableRefObject, useEffect, useCallback } from 'react';

type UseClickAwayType = (refs: MutableRefObject<HTMLElement | null>[], onOutsideClick: () => void) => void;

export const useClickAway: UseClickAwayType = (refs, onOutsideClick): void => {
  const handleOutsideClick = useCallback(
    (e: MouseEvent) => {
      if (refs.every((ref) => !ref.current?.contains(e.target as HTMLElement))) {
        onOutsideClick();
      }
    },
    [refs, onOutsideClick]
  );

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => document.removeEventListener('click', handleOutsideClick);
  }, [handleOutsideClick]);
};
