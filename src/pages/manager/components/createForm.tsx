import React, { FC, useState, useCallback, MouseEvent } from 'react';
import { useMutation } from '@apollo/client';

import { ALL_TASKS, NEW_TASK, Task } from '@src/apollo/tasks';

import { Button } from '@src/components/button';
import { Input } from '@src/components/input';

import s from './form.module.scss';

export const CreateForm: FC = () => {
  const [value, setValue] = useState<string>('');

  const [createTask, { error }] = useMutation<{ task: Task }>(NEW_TASK, {
    update(cache, { data }) {
      const { tasks } = cache.readQuery({
        query: ALL_TASKS,
        variables: { sortField: 'created', sortOrder: 'DESC' },
      }) as { tasks: Task[] };

      cache.writeQuery({
        query: ALL_TASKS,
        variables: { sortField: 'created', sortOrder: 'DESC' },
        data: { tasks: [data?.task, ...tasks] },
      });
    },
  });

  const submitHandler = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      if (value.trim().length) {
        createTask({
          variables: {
            userId: 100,
            content: value,
            completed: false,
            created: new Date(),
          },
        });

        setValue('');
      }
    },
    [value]
  );

  if (error) return <div>Error</div>;

  return (
    <div className={s.form}>
      <h2>New task</h2>

      <form className={s.form}>
        <Input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Type something..." />

        <Button onClick={submitHandler} size="l" type="submit">
          Create task
        </Button>
      </form>
    </div>
  );
};
