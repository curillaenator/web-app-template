import React, { FC, ReactNode } from 'react';

import { Button } from '@src/components/button';

import s from './styles.module.scss';

import { BUTTONS_APPEARANCES, BUTTONS_SIZES } from './constants';

const Flex: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={s.block}>{children}</div>;
};

export const Components: FC = () => {
  return (
    <div className={s.page}>
      <h1>Dummy Page</h1>

      <h2>Button</h2>

      <h3>Solid</h3>

      {BUTTONS_SIZES.map((bSize) => (
        <Flex>
          {BUTTONS_APPEARANCES.map((bAppearance) => (
            <Button key={bAppearance} appearance={bAppearance} size={bSize} icon="idea" variant="solid">
              {'ABC' + ' ' + bAppearance + ' ' + bSize?.toUpperCase()}
            </Button>
          ))}
        </Flex>
      ))}

      <h3>Outline</h3>

      {BUTTONS_SIZES.map((bSize) => (
        <Flex>
          {BUTTONS_APPEARANCES.map((bAppearance) => (
            <Button key={bAppearance} appearance={bAppearance} size={bSize} icon="idea" variant="outline">
              {'ABC' + ' ' + bAppearance + ' ' + bSize?.toUpperCase()}
            </Button>
          ))}
        </Flex>
      ))}

      <h3>Ghost</h3>

      {BUTTONS_SIZES.map((bSize) => (
        <Flex>
          {BUTTONS_APPEARANCES.map((bAppearance) => (
            <Button key={bAppearance} appearance={bAppearance} size={bSize} icon="idea" variant="ghost">
              {'ABC' + ' ' + bAppearance + ' ' + bSize?.toUpperCase()}
            </Button>
          ))}
        </Flex>
      ))}
    </div>
  );
};
