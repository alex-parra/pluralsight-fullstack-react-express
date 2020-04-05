import React from 'react';

import App from 'app/components/App';

import { Provider as StoreProvider } from 'react-redux';
import { initStore } from 'app/store';
import { defaultState } from 'server/defaultState';

const store = initStore(defaultState);

const Root = () => {
  return (
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  );
};

export default Root;
