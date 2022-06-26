import { PayloadAction } from '@reduxjs/toolkit';
import { AuthPayload } from 'services/user/user.type';
import { Data, User } from './user.type';

export const authentication = (_state: User, _action: PayloadAction<AuthPayload>) => { };

export const logout = (_state: User, _action: PayloadAction) => { };

export const setData = (state: User, action: PayloadAction<Data>) => {
  state.data = action.payload;
};

export const setError = (state: User, action: PayloadAction<User['error']>) => {
  state.error = action.payload;
};
