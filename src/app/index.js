import { initStore } from './store';
import { defaultState } from '../server/defaultState';

const store = initStore(defaultState);

console.info('Hello World!');
console.info(store.getState());
