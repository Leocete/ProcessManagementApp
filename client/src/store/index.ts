import { compose, createStore, Store, applyMiddleware } from 'redux';

import { createBrowserHistory } from 'history';
import reducers from '../reducers/index';

import createSagaMiddleware from 'redux-saga';
import authSaga from 'sagas/Auth';

import { composeWithDevTools } from 'redux-devtools-extension';

console.log(authSaga);

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({});

const configureStore = (): Store => {
  const store = createStore(reducers(history), composeEnhancers(applyMiddleware(sagaMiddleware)));
  sagaMiddleware.run(authSaga);

  return store;
};

export { configureStore, history };
