import React, { FC } from 'react';

import { Button } from '@src/components/button';

import { useEpisodes } from './hooks/useEpisodes';

import s from './styles.module.scss';

export const RickMorty: FC = () => {
  const { episodes, loading, prev, next } = useEpisodes();

  // if (loading) return <div>Loading...</div>;

  return (
    <div className={s.page}>
      <div className={s.episodes}>
        {episodes.map((ep) => (
          <div className={s.episode} key={ep.id}>
            <h3>{ep.name}</h3>

            <p>{ep.created}</p>
          </div>
        ))}
      </div>

      <div className={s.pagination}>
        {/* <Button onClick={prev} icon="arrow-left">
          Prev
        </Button>

        <Button onClick={next} icon="arrow-right">
          Next
        </Button> */}
      </div>
    </div>
  );
};
