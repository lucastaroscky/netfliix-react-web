import { Show } from 'store/shows/show.types';

export type Props = {
  title?: string
  width?: string
  height?: string
  shows: Show[]
  autoplay?: boolean
  slidesToShow?: number
  autoplaySpeed?: number
  arrows?: boolean
};
