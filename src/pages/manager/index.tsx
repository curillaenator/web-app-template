import React, { FC } from 'react';

import { CreateForm, Tasks } from './components';

const Manager: FC = () => {
  return (
    <>
      <CreateForm />

      <Tasks />
    </>
  );
};

export default Manager;
