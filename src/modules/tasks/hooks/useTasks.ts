import { useTasksStore } from '../store/tasks.store';
import { tasksService } from '../services/tasks.service';

export const useTasks = () => {
  const { tasks, setTasks, toggleTask } = useTasksStore();

  const loadTasks = async () => {
    const data = await tasksService.getTodayTasks();
    setTasks(data);
  };

  const completeTask = async (id: string) => {
    await tasksService.completeTask(id);
    toggleTask(id);
  };

  return { tasks, loadTasks, completeTask };
};
