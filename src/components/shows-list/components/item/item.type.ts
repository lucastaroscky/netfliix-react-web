import { Show } from 'store/shows/show.types';

export type Props = Pick<Show, | 'cover' | 'id'> & { width: string, height: string };

export type CoverProps = Pick<Show, | 'cover'> & Pick<Props, | 'width' | 'height'>;

export type SpanProps = Pick<Props, 'cover'> & Pick<Props, | 'width' | 'height'>;
