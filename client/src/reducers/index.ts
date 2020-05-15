import { combineReducers, Reducer } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { authReducer } from './Auth';

// The top-level state object
// export interface ApplicationState {
//   router: any;
//   auth: AuthReducerState;
// }

export default (history: History) =>
  combineReducers({
    router: connectRouter(history),
    auth: authReducer,
  });
