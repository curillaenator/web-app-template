import { gql } from '@apollo/client';

export interface Task {
  id: number;
  content: string;
  created: string;
  completed: boolean;
  userId: number;
}

export const ALL_TASKS = gql`
  query allTasks($sortField: String, $sortOrder: String) {
    tasks: allTasks(sortField: $sortField, sortOrder: $sortOrder) {
      id
      created
      completed
      content
      userId
    }
  }
`;

export const NEW_TASK = gql`
  mutation CreateTask($userId: Int!, $content: String!, $completed: Boolean!, $created: Date!) {
    task: createTask(userId: $userId, content: $content, completed: $completed, created: $created) {
      id
      userId
      content
      completed
      created
    }
  }
`;

export const UPDATE_TASK = gql`
  mutation updateTask($taskId: ID!, $completed: Boolean) {
    task: updateTask(id: $taskId, completed: $completed) {
      id
      userId
      content
      completed
      created
    }
  }
`;

export const REMOVE_TASK = gql`
  mutation removeTask($taskId: ID!) {
    task: removeTask(id: $taskId) {
      id
      userId
      content
      completed
      created
    }
  }
`;
