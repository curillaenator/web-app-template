import { useState, useEffect } from 'react';
import { useStore } from 'effector-react';
import { getEpisodes, rickmortyStore } from '@src/store/rickmorty';

export const useEpisodes = () => {
  const { episodes } = useStore(rickmortyStore);
  const loading = useStore(getEpisodes.pending);

  const [page, setPage] = useState<number>(1);

  const next = () => setPage((prevPage) => prevPage + 1);
  const prev = () => setPage((prevPage) => prevPage - 1);

  useEffect(() => {
    getEpisodes(page);
  }, [page]);

  return { page, episodes, loading, next, prev };
};
