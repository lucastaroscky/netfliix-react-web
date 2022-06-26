import { createSlice } from '@reduxjs/toolkit';
import {
  getShows,
  setShows,
  setError,
  setList,
  getMyList,
} from './show.reducer';
import { Shows, ShowStateName } from './show.types';

export const initialState: Shows = {
  data: {
    myList: [],
    list: {},
  },
  error: '',
};

const showSlice = createSlice({
  name: ShowStateName,
  reducers: {
    getShows,
    getMyList,
    setShows,
    setError,
    setList,
  },
  initialState,
});

export const { actions: showAction, reducer: showReducer } = showSlice;
