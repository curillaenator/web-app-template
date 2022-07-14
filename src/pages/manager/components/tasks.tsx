import React, { FC, useCallback } from 'react';
import cn from 'classnames';
import { useQuery, useMutation } from '@apollo/client';

import { Selector } from '@src/components/selector';
import { Button } from '@src/components/button';

import { ALL_TASKS, REMOVE_TASK, UPDATE_TASK, Task } from '@src/apollo/tasks';

import s from './tasks.module.scss';

export const Tasks: FC = () => {
  const { loading, error, data } = useQuery<{ tasks: Task[] }>(ALL_TASKS, {
    variables: { sortField: 'created', sortOrder: 'DESC' },
  });

  const [updateTask, { error: updateError }] = useMutation<{ task: Task }>(UPDATE_TASK);

  const [removeTask, { error: removeError }] = useMutation<{ task: Task }>(REMOVE_TASK, {
    update(cache, { data }) {
      cache.modify({
        fields: {
          allTasks(currentTasks = []) {
            return currentTasks.filter((task: { __ref: string }) => task.__ref !== `Task:${data?.task.id}`);
          },
        },
      });
    },
  });

  const removeTaskHandler = useCallback(
    (taskId: Task['id']) => {
      let remove = confirm('Are you sure?');

      if (remove) {
        removeTask({ variables: { taskId } });
      }
    },
    [removeTask]
  );

  if (loading || !data?.tasks) return <div>...loading</div>;

  if (error || removeError || updateError) return <div>Error</div>;

  return (
    <div className={s.tasks}>
      {data.tasks.map((task) => (
        <div
          key={task.id}
          className={cn(s.task, {
            [s.task_success]: task.completed,
          })}
        >
          <h3>{task.content}</h3>

          <Selector
            id={`completed_${task.id}`}
            type="checkbox"
            checked={task.completed}
            onChange={() => updateTask({ variables: { taskId: task.id, completed: !task.completed } })}
          >
            Completed
          </Selector>

          <div className={s.status}>
            <span>
              <b>Created:</b> <span>{new Date(task.created).toLocaleString('ru-RU').split(', ')[0]}</span>
            </span>

            <Button
              icon="trashcan"
              variant="ghost"
              appearance="negative"
              size="s"
              onClick={() => removeTaskHandler(task.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
