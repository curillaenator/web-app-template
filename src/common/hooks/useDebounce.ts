import { useState, useEffect } from 'react';

export const useDebounce = (value: string, delay: number = 300) => {
  const [debounced, setDebounced] = useState<string>(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebounced(value), delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return { debounced };
};
