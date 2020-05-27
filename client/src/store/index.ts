import { compose, createStore, Store, applyMiddleware } from 'redux';

import { createBrowserHistory } from 'history';
import reducers from '../reducers/index';

import createSagaMiddleware from 'redux-saga';
import rootSaga from 'sagas/index';

import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';

const history = createBrowserHistory();
const routeMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({});

const configureStore = (): Store => {
  const store = createStore(reducers(history), composeEnhancers(applyMiddleware(sagaMiddleware, routeMiddleware)));
  sagaMiddleware.run(rootSaga);

  return store;
};

export { configureStore, history };
