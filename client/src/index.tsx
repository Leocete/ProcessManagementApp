import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { configureStore, history } from './store/index';
import './styles/index.scss';
import LoginPage from './app/routes/LoginPage';

export const store = configureStore();

const App: React.FC = (): ReactElement => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={LoginPage} />
      </Switch>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
