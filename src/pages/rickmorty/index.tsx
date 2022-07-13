import React, { FC } from 'react';

import { Button } from '@src/components/button';
import { Card } from '@src/components/card';

import { useEpisodes } from './hooks/useEpisodes';

import s from './styles.module.scss';

export const RickMorty: FC = () => {
  const { page, episodes, loading, prev, next } = useEpisodes();

  if (loading) return <div>Loading...</div>;

  return (
    <div className={s.page}>
      <div className={s.episodes}>
        {episodes.map((ep) => (
          <Card width="calc(20% - 64px / 5)" height="200px" key={ep.id}>
            <div className={s.episode}>
              <h3>{ep.name}</h3>

              <p>{ep.created}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className={s.pagination}>
        <Button onClick={prev} icon="arrow-left" disabled={page < 2}>
          Prev
        </Button>

        <Button onClick={next} icon="arrow-right" disabled={episodes.length < 20}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default RickMorty;
