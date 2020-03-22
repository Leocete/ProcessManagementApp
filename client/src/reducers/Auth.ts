import { ACTION_USER_SIGN_IN, ACTION_USER_SIGN_IN_SUCCESS, ACTION_USER_SIGN_IN_ERROR } from '../constants/ActionTypes';

const INIT_STATE = {};

export const initialState: IPostState = {
  data: [],
  errors: [],
  loading: false,
};
export const postReducer = (
  state: IPostState = initialState,
  action: Action<TypeConstant> & PayloadAction<TypeConstant, IPostRaw[]>,
): IPostState => {
  switch (action.type) {
    case ACTION_USER_SIGN_IN: {
      return { ...state, loading: true };
    }
    case ACTION_USER_SIGN_IN_SUCCESS: {
      return { ...initialState, data: action.payload };
    }
    case ACTION_USER_SIGN_IN_ERROR: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
