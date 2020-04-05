import React from 'react';
import useGroups from 'app/hooks/useGroups';
import useTasks from 'app/hooks/useTasks';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const groups = useGroups();
  const tasks = useTasks();

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
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
