import { Store } from 'store/store/store.type';

export const authenticated = (state: Store) => !!state.user.data.email;
export const errorMessage = (state: Store) => state.user.error;
export const getToken = (state: Store) => state.user.data.token;
