import React from 'react';
import { useParams } from 'react-router-dom';
import useTasks from 'app/hooks/useTasks';

const TaskDetail = () => {
  const { id } = useParams();
  const [task] = useTasks(id);

  return (
    <div>
      <h2>
        <small>Task {task.id}</small>
        <div>{task.name}</div>
      </h2>
    </div>
  );
};

export default TaskDetail;
