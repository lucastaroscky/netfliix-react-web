export type Episode = {
  id: number,
  title: string,
  description: string,
  cover: string,
  duration: string,
  showId: number,
};

export type Data = {
  id: number,
  title: string,
  cover: string,
  director: string,
  actors: string,
  description: string,
  category: string,
  episodes?: Episode[],
};

export type Show = {
  data: Data[],
  error: string
};

export const ShowStateName = 'show';
