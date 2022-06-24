import { PayloadAction } from '@reduxjs/toolkit';
import { Data, Show } from './show.types';

export const listShows = (_state: Show, _action: PayloadAction) => { };

export const setData = (state: Show, action: PayloadAction<Data[]>) => {
  state.data = action.payload;
};

export const setError = (state: Show, action: PayloadAction<Show['error']>) => {
  state.error = action.payload;
};
