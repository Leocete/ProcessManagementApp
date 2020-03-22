import { Action, Dispatch } from 'redux';
import UserModel from '../models/User';
import UserCredentials from '../models/UserCredentials';
import { ACTION_USER_SIGN_IN, ACTION_USER_SIGN_IN_SUCCESS, ACTION_USER_SIGN_IN_ERROR } from '../constants/ActionTypes';

/********** Action Interfaces **********/
export interface UserSignIn extends Action {
  type: ACTION_USER_SIGN_IN;
}

export interface UserSignInSuccess extends Action {
  type: ACTION_USER_SIGN_IN_SUCCESS;
  user: UserModel;
}

export interface UserSignInError extends Action {
  type: ACTION_USER_SIGN_IN_ERROR;
  errorMessage: string;
}

/********** Actions **********/
export const signIn = (user: UserCredentials): void => {
  type: ACTION_USER_SIGN_IN;
  payload: user;
};

export const signInSuccess = (authUser: UserModel): void => {
  type: ACTION_USER_SIGN_IN_SUCCESS;
  user: authUser;
};

export const signInError = (errorMessage: string): void => {
  type: ACTION_USER_SIGN_IN_ERROR;
  errorMessage: errorMessage;
};
