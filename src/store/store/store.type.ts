import { Show } from 'store/shows/show.types';
import { User } from 'store/user/user.type';

export type Store = {
  user: User,
  shows: Show,
};
