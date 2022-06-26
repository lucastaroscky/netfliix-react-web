import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showAction } from 'store/shows/show.slice';
import Header from 'components/header/header';
import { showsList } from 'store/shows/show.selector';
import { Container } from '@mui/material';
import ShowsList from 'components/shows-list/shows-list';

export default function Shows() {
  const dispatch = useDispatch();
  const { list, myList } = useSelector(showsList);
  const movies = list.MOVIE;
  const tvShow = list.TV_SHOW;

  useEffect(() => {
    dispatch(showAction.getShows());
    dispatch(showAction.getMyList());
  }, []);

  return (
    <>
      <Header />
      <Container>
        {movies && (
          <ShowsList
            autoplay
            width="95%"
            height="560px"
            arrows={false}
            shows={movies}
            slidesToShow={1}
            autoplaySpeed={2400}
          />
        )}
      </Container>
      <Container>
        {myList && (
          <ShowsList
            title="Minha Lista"
            shows={myList}
          />
        )}
        {movies && (
          <ShowsList
            title="Filmes"
            shows={movies}
          />
        )}
        {tvShow && (
          <ShowsList
            title="Séries"
            shows={tvShow}
            slidesToShow={5}
          />
        )}
      </Container>
    </>
  );
}
