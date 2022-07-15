import React, { FC, useState } from 'react';

import { Selector } from '@src/components/selector';

import s from '../styles.module.scss';

const SelectorStory: FC = () => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div className={s.page}>
      <h2>Selector</h2>

      <span>Checkbox</span>

      <Selector
        id="checkbox-story-example-unique-id"
        type="checkbox"
        checked={checked}
        onChange={() => setChecked((prev) => !prev)}
      >
        I'm checkbox
      </Selector>

      <span>Radio</span>

      <Selector
        id="radio-story-example-unique-id"
        type="radio"
        checked={checked}
        onChange={() => setChecked((prev) => !prev)}
      >
        I'm radio
      </Selector>

      <span>Switch</span>

      <Selector
        id="switch-story-example-unique-id"
        type="switch"
        checked={checked}
        onChange={() => setChecked((prev) => !prev)}
      >
        I'm switch
      </Selector>
    </div>
  );
};

export default SelectorStory;
