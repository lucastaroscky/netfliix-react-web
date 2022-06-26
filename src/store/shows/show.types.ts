export type Episode = {
  id: number,
  title: string,
  description: string,
  cover: string,
  duration: string,
  showId: number,
};

export type Show = {
  id: number,
  title: string,
  cover: string,
  director: string,
  actors: string,
  description: string,
  category: string,
  episodes?: Episode[],
};

export type List = {
  [key: string]: Show[]
};

export type Data = {
  myList: Show[]
  list: List
};

export type Shows = {
  data: Data,
  error: string
};

export const ShowStateName = 'shows';
