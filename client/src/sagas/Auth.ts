import { call, put, takeEvery } from 'redux-saga/effects';
import { ACTION_USER_SIGN_IN } from '../constants/ActionTypes';

/* Saga worker */
function* checkUserCredentials(action: any) {
  console.log(action.payload);
}

/* Saga watcher */
function* userLogin() {
  yield takeEvery(ACTION_USER_SIGN_IN, checkUserCredentials);
}

export default userLogin;
