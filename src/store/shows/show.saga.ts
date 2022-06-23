import { call, put, takeLatest } from 'redux-saga/effects';
import showService from 'services/show/show.service';
import { ShowsReponse } from 'services/show/show.type';
import { initialState, showAction } from './show.slice';

function* listShows() {
  try {
    const { data }: ShowsReponse = yield call(showService().showsList);

    yield put(showAction.setData(data));
    yield put(showAction.setError(initialState.error));
  } catch (exception) {
    yield put(showAction.setError('An error occurred trying to get shows list!'));
  }
}

export default function* showsSaga() {
  yield takeLatest('show/listShows', listShows);
}
