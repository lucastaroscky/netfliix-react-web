import { PayloadAction } from '@reduxjs/toolkit';
import { List, Shows } from './show.types';

export const getShows = (_state: Shows, _action: PayloadAction) => { };
export const getMyList = (_state: Shows, _action: PayloadAction) => { };

export const setShows = (state: Shows, action: PayloadAction<List>) => {
  state.data.list = action.payload;
};

export const setList = (state: Shows, action: PayloadAction<Shows['data']['myList']>) => {
  state.data.myList = action.payload;
};

export const setError = (state: Shows, action: PayloadAction<Shows['error']>) => {
  state.error = action.payload;
};
