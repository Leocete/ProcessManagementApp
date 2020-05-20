import { Action } from 'redux';
import UserModel from '../models/User';
import UserCredentials from '../models/UserCredentials';
import { ACTION_USER_SIGN_IN, ACTION_USER_SIGN_IN_SUCCESS, ACTION_USER_SIGN_IN_ERROR } from '../constants/ActionTypes';

/********** Action Interfaces **********/
export interface UserSignIn extends Action {
  type: ACTION_USER_SIGN_IN;
  credentials: object;
}

export interface UserSignInSuccess extends Action {
  type: ACTION_USER_SIGN_IN_SUCCESS;
  user: UserModel;
}

export interface UserSignInError extends Action {
  type: ACTION_USER_SIGN_IN_ERROR;
  errorMessage: string;
}

export type AuthActions = UserSignIn | UserSignInSuccess | UserSignInError;

/********** Action Creators **********/
export const signIn = (user: UserCredentials): AuthActions => ({
  type: ACTION_USER_SIGN_IN,
  credentials: user,
});

export const signInSuccess = (authUser: UserModel): AuthActions => ({
  type: ACTION_USER_SIGN_IN_SUCCESS,
  user: authUser,
});

export const signInError = (errorMessage: string): AuthActions => ({
  type: ACTION_USER_SIGN_IN_ERROR,
  errorMessage: errorMessage,
});
