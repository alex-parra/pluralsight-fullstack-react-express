import React from 'react';
import { Link } from 'react-router-dom';
import useGroups from 'app/hooks/useGroups';
import useTasks from 'app/hooks/useTasks';
import NewTask from 'app/components/NewTask';

const Dashboard = () => {
  const groups = useGroups();
  const [tasks, addTask] = useTasks();

  return (
    <div>
      {groups.map((g) => (
        <div key={g.id} className="group">
          <h3>{g.name}</h3>
          {tasks
            .filter((t) => t.group === g.id)
            .map((t) => (
              <div key={t.id} className="task">
                <Link to={`task/${t.id}`}>{t.name}</Link>
              </div>
            ))}
          <NewTask group={g.id} onSubmit={addTask} />
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
