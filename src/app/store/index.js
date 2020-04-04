import { createStore, combineReducers } from 'redux';

import { reducer as users } from './users';
import { reducer as groups } from './groups';
import { reducer as tasks } from './tasks';
import { reducer as comments } from './comments';

const rootReducer = combineReducers({
  users,
  groups,
  tasks,
  comments,
});

export const initStore = (initialState = {}) => {
  const store = createStore(rootReducer, initialState);
  return store;
};
