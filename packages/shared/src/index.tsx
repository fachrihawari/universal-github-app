import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { AppContainer } from './router';
import { persistor, store } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppContainer />
      </PersistGate>
    </Provider>
  );
}

export default App;
