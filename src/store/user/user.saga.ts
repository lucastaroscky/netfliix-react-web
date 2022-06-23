import userService from 'services/user/user.service';
import { call, put, takeLatest } from 'redux-saga/effects';
import { AuthErrorMessage, AuthPayload, AuthResponse } from 'services/user/user.type';
import { initialState, userAction } from 'store/user/user.slice';
import { PayloadAction } from '@reduxjs/toolkit';
import { USER_TOKEN_COOKIE } from './user.type';

function* authentication(action: PayloadAction<AuthPayload>) {
  try {
    const { data }: AuthResponse = yield call(userService().auth, action.payload);

    yield put(userAction.setData(data));
    yield put(userAction.setError(initialState.error));
    localStorage.setItem(USER_TOKEN_COOKIE, data.token);
  } catch (exception) {
    yield put(userAction.setError([AuthErrorMessage.UNREACHABLE_AUTHENTICATION]));
  }
}

export default function* userSaga() {
  yield takeLatest('user/authentication', authentication);
}
