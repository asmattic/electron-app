// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

// Custom
import Routes from '../routes';

type RootType = {
   store: {},
   history: {}
};

const Root = ({ store, history }: RootType) => {
   return (
      <Provider store={store}>
         <ConnectedRouter history={history}>
            <Routes />
         </ConnectedRouter>
      </Provider>
   );
};

export default Root;
