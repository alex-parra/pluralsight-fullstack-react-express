import React from 'react';
import { useSelector } from 'react-redux';

const App = () => {
  const users = useSelector((state) => state.users);

  return (
    <div>
      {users.map((u) => {
        return (
          <div key={u.id} className="user">
            {u.name}
          </div>
        );
      })}
    </div>
  );
};

export default App;
