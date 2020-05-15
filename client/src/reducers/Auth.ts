import { ACTION_USER_SIGN_IN, ACTION_USER_SIGN_IN_SUCCESS, ACTION_USER_SIGN_IN_ERROR } from '../constants/ActionTypes';
import { AuthActions } from '../actions/Auth';
import { AuthReducerState } from 'interfaces/Auth';

export const initialState: AuthReducerState = {
  loading: false,
  user: {},
};
export const authReducer = (state = initialState, action: AuthActions): AuthReducerState => {
  switch (action.type) {
    case ACTION_USER_SIGN_IN: {
      return { ...state, loading: true };
    }
    case ACTION_USER_SIGN_IN_SUCCESS: {
      return { ...state, user: action.user };
    }
    case ACTION_USER_SIGN_IN_ERROR: {
      return { ...state, loading: false };
    }
    default:
      return state;
  }
};
