import type { Task } from '../types';

export class TasksService {
  async getTodayTasks(): Promise<Task[]> {
    return [];
  }

  async completeTask(id: string): Promise<void> {}
}

export const tasksService = new TasksService();
