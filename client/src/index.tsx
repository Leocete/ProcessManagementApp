import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import configureStore from './store/index';
import './styles/index.scss';
import LoginPage from './app/routes/LoginPage';

export const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Switch>
      <Route path="/" component={LoginPage} />
    </Switch>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
