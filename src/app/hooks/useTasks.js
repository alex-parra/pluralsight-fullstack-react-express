import { useSelector } from 'react-redux';

const useTasks = (id = null) => {
  const tasks = useSelector((state) => state.tasks);

  if (!id) return tasks;

  return tasks.find((t) => t.id === id);
};

export default useTasks;
