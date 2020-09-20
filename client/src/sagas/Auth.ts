import { call, put, takeEvery, all, fork, StrictEffect } from 'redux-saga/effects';
import { ACTION_USER_SIGN_IN } from '../constants/ActionTypes';
import UserCredentials from 'models/UserCredentials';
import { postData } from 'utils/requestApi';
import { UserSignIn } from 'actions/Auth';

const signInUserWithEmailPasswordRequest = async (email: string, password: string): Promise<object | null> => {
  console.log(email);
  console.log(password);
  const response = await postData('user/login', {
    email,
    password,
  });
  return response;
};

/* Worker Saga */
function* checkUserCredentials(action: UserSignIn): Generator<StrictEffect> {
  // const { email, password }: UserCredentials = action.credentials;
  console.log(action);
  try {
    // const signInUser = yield call(signInUserWithEmailPasswordRequest, email, password);
  } catch (error) {
    throw error;
  }
}

/* Watcher Saga */
function* userLogin(): any {
  yield takeEvery(ACTION_USER_SIGN_IN, checkUserCredentials);
}

export default function* rootSaga() {
  yield all([fork(userLogin)]);
}
