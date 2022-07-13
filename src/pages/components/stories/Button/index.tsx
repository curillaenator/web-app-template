import React, { FC } from 'react';

import { Button } from '@src/components/button';

import { Flexmap } from '../../components';

import { BUTTONS_APPEARANCES, BUTTONS_SIZES } from './constants';

import s from '../styles.module.scss';

export const ButtonStory: FC = () => {
  return (
    <div className={s.page}>
      <h2>Button</h2>

      {BUTTONS_SIZES.map((bSize) => (
        <Flexmap title={`Solid ${bSize}`} key={`Solid ${bSize}`}>
          {BUTTONS_APPEARANCES.map((bAppearance) => (
            <Button key={bAppearance} appearance={bAppearance} size={bSize} icon="idea" variant="solid">
              {'ABC' + ' ' + bAppearance + ' ' + bSize?.toUpperCase()}
            </Button>
          ))}
        </Flexmap>
      ))}

      {BUTTONS_SIZES.map((bSize) => (
        <Flexmap title={`Outline ${bSize}`} key={`Outline ${bSize}`}>
          {BUTTONS_APPEARANCES.map((bAppearance) => (
            <Button key={bAppearance} appearance={bAppearance} size={bSize} icon="idea" variant="outline">
              {'ABC' + ' ' + bAppearance + ' ' + bSize?.toUpperCase()}
            </Button>
          ))}
        </Flexmap>
      ))}

      {BUTTONS_SIZES.map((bSize) => (
        <Flexmap title={`Ghost ${bSize}`} key={`Ghost ${bSize}`}>
          {BUTTONS_APPEARANCES.map((bAppearance) => (
            <Button key={bAppearance} appearance={bAppearance} size={bSize} icon="idea" variant="ghost">
              {'ABC' + ' ' + bAppearance + ' ' + bSize?.toUpperCase()}
            </Button>
          ))}
        </Flexmap>
      ))}
    </div>
  );
};

export default ButtonStory;
