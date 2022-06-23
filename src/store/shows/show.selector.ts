import { Store } from 'store/store/store.type';

export const showsList = (state: Store) => state.shows.data;
export const errorMessage = (state: Store) => state.user.error;
