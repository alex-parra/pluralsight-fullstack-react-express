import React, { useState } from 'react';

const NewTask = ({ group, onSubmit }) => {
  const [value, setValue] = useState('');

  const onChange = (ev) => {
    setValue(ev.currentTarget.value);
  };

  const onKeyDown = (ev) => {
    if (ev.key !== 'Enter') return;
    onSubmit(value, group);
    setValue('');
  };

  return (
    <div>
      <input type="text" value={value} onChange={onChange} onKeyDown={onKeyDown} />
    </div>
  );
};

export default NewTask;
