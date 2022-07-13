import React, { FC, ReactNode } from 'react';

import s from './styles.module.scss';

export const Gridmap: FC<{ children: ReactNode }> = ({ children }) => <div className={s.gridmap}>{children}</div>;
