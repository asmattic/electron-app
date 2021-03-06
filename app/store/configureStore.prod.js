// @flow
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';

// Custom
import rootReducer from '../reducers';
import type { counterStateType } from '../containers/counter/reducer';

const history = createBrowserHistory();
const router = routerMiddleware(history);
const enhancer = applyMiddleware(thunk, router);

function configureStore(initialState?: counterStateType) {
   return createStore(rootReducer, initialState, enhancer);
}

export default { configureStore, history };
