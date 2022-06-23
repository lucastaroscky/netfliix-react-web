import { AxiosResponse } from 'axios';
import { Show } from 'store/shows/show.types';

export type ShowsReponse = AxiosResponse<Show['data']>;

export enum ShowsListErrorMessage {
  UNREACHABLE_AUTHENTICATION = 'An error occurred trying to get shows list!',
}
