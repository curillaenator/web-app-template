import React, { FC } from 'react';
import cn from 'classnames';

import s from './curls.module.scss';

interface CurlsProps {
  visible: boolean | null;
}

export const Curls: FC<CurlsProps> = (props) => {
  const { visible = false } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="88"
      viewBox="0 0 16 88"
      className={cn(s.curls, {
        [s.curls_visible]: visible,
      })}
    >
      <defs>
        <mask id="cut-top-left-shape">
          <rect x="0" y="0" width="16" height="16" fill="white" />
          <circle cx="0" cy="0" r="16" fill="black" />
        </mask>

        <mask id="cut-bottom-left-shape">
          <rect x="0" y="72" width="16" height="16" fill="white" />
          <circle cx="0" cy="88" r="16" fill="black" />
        </mask>
      </defs>

      <g>
        <rect mask="url(#cut-top-left-shape)" x="0" y="0" width="16" height="16" />

        <rect mask="url(#cut-bottom-left-shape)" x="0" y="72" width="16" height="16" />
      </g>
    </svg>
  );
};
