import cuid from 'cuid';

const scope = 'TASKS';

export const ADD_TASK = `${scope} >> ADD_TASK`;

export const ACTIONS = {
  addTask: (task) => ({ type: ADD_TASK, payload: task }),
};

export const reducer = (state = [], action = {}) => {
  const { type, payload } = action;

  if (type === ADD_TASK) return [...state, payload];

  return state;
};

export const middleware = () => (next) => (action) => {
  const isScopeAction = action.type.indexOf(scope) === 0;
  if (!isScopeAction) return next(action);

  if (action.type === ADD_TASK) {
    action.payload = { ...action.payload, id: cuid() };
    return next(action);
  }
};
