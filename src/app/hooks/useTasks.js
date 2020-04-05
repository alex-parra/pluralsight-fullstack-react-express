import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { ACTIONS } from 'app/store/tasks';

const useTasks = (id = null) => {
  const dispatch = useDispatch();

  const addTask = (task, group) => {
    dispatch(ACTIONS.addTask({ name: task, group }));
  };

  const saveTask = () => {};

  const tasks = useSelector((state) => state.tasks);

  if (!id) return [tasks, addTask];

  const task = tasks.find((t) => t.id === id);
  return [task, saveTask];
};

export default useTasks;
