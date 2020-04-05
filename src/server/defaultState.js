export const defaultState = {
  users: [
    { id: 'U1', name: 'Alex' },
    { id: 'U2', name: 'John' },
  ],

  groups: [
    { id: 'G1', name: 'Work To Dos', owner: 'U1' },
    { id: 'G2', name: 'Home To Dos', owner: 'U2' },
  ],

  tasks: [
    { id: 'T1', name: 'Add tests', group: 'G1', owner: 'U1', done: false },
    { id: 'T2', name: 'Fix lamp', group: 'G2', owner: 'U2', done: false },
  ],

  comments: [
    { id: 'C1', owner: 'U1', task: 'T1', content: 'LGTM!' },
    { id: 'C2', owner: 'U2', task: 'T2', content: 'Nice!' },
  ],
};
