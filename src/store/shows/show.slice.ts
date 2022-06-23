import { createSlice } from '@reduxjs/toolkit';
import { listShows, setData, setError } from './show.reducer';
import { Show, ShowStateName } from './show.types';

export const initialState: Show = {
  data: [{
    id: 0,
    title: '',
    cover: '',
    actors: '',
    director: '',
    description: '',
    category: '',
    episodes: [],
  }],
  error: '',
};

const showSlice = createSlice({
  name: ShowStateName,
  reducers: { listShows, setData, setError },
  initialState,
});

export const { actions: showAction, reducer: showReducer } = showSlice;
