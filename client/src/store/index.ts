import { createStore, Store } from 'redux';
import { createBrowserHistory } from 'history';
import reducers from '../reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';

const history = createBrowserHistory();

const configureStore = (): Store => {
  const store = createStore(reducers(history), composeWithDevTools());
  return store;
};

export { configureStore, history };
