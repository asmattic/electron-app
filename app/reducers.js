// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

// Custom
import counter from './containers/counter/reducer';

const rootReducer = combineReducers({
   counter,
   router,
});

export default rootReducer;
