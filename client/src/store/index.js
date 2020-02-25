import { createStore } from 'redux';
import { createBrowserHistory } from 'history';
import reducers, { countReducer } from '../reducers/index';

const history = createBrowserHistory();

const configureStore = () => {
  const store = createStore(reducers(history));
  return store;
};

export { configureStore, history };
