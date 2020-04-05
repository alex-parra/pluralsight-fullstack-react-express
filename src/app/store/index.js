import { createStore, combineReducers, applyMiddleware } from 'redux';

import { reducer as users } from './users';
import { reducer as groups } from './groups';
import { reducer as tasks, middleware as tasksMiddleware } from './tasks';
import { reducer as comments } from './comments';

const rootReducer = combineReducers({
  users,
  groups,
  tasks,
  comments,
});

const middlewares = [tasksMiddleware];

export const initStore = (initialState = {}) => {
  const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares));

  return store;
};
