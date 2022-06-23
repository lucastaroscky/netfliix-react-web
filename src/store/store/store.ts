import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import showsSaga from 'store/shows/show.saga';
import { showReducer } from 'store/shows/show.slice';
import userSaga from 'store/user/user.saga';
import { userReducer } from '../user/user.slice';

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    user: userReducer,
    shows: showReducer,
  },
  middleware: [saga],
});

saga.run(userSaga);
saga.run(showsSaga);

export default store;
