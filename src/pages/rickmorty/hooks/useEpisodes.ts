import { useState, useEffect } from 'react';
import { useStore } from 'effector-react';
import { getEpisodes, rickmortyStore } from '@src/store/rickmorty';

export const useEpisodes = () => {
  const { episodes } = useStore(rickmortyStore);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  // getEpisodes.pending.watch((pending) => setLoading(pending));

  const next = () => setPage((prevPage) => prevPage + 1);
  const prev = () => setPage((prevPage) => prevPage - 1);

  useEffect(() => {
    getEpisodes(page);
  }, [page]);

  return { episodes, loading, next, prev };
};
