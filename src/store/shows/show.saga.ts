import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import showService from 'services/show/show.service';
import { initialState, showAction } from './show.slice';
import { Show } from './show.types';

function* getShows() {
  try {
    const { data }: AxiosResponse<Show[]> = yield call(showService().getShows);

    const showsList = data.reduce((accumulator, show) => {
      // @ts-ignore
      const categoryKey = accumulator[show.category] || [];

      return {
        ...accumulator,
        [show.category]: categoryKey.concat(show),
      };
    }, {});

    yield put(showAction.setShows(showsList));
    yield put(showAction.setError(initialState.error));
  } catch (exception) {
    yield put(showAction.setError('An error occurred trying to get shows list!'));
  }
}

function* getMyList() {
  try {
    const { data }: AxiosResponse<Show[]> = yield call(showService().getList);

    yield put(showAction.setList(data));
    yield put(showAction.setError(initialState.error));
  } catch (exception) {
    yield put(showAction.setError('An error occurred trying to get your list!'));
  }
}

export default function* showsSaga() {
  yield takeLatest('shows/getShows', getShows);
  yield takeLatest('shows/getMyList', getMyList);
}
