import React, { useEffect } from 'react';
import Wrapper from 'components/wrapper/wrapper';
import { useDispatch, useSelector } from 'react-redux';
import { showAction } from 'store/shows/show.slice';
import Header from 'components/header/header';
import Logo from 'components/logo/logo';
import { showsList } from 'store/shows/show.selector';
import { Grid } from '@mui/material';
import ShowCard from './components/card/card';
import { Carousel } from './components/carousel/carousel';

export default function Shows() {
  const dispatch = useDispatch();
  const shows = useSelector(showsList);

  useEffect(() => {
    dispatch(showAction.listShows());
  }, []);

  return (
    <Wrapper
      container
      flexDirection="column"
      justifyContent="center"
      alignContent="center"
    >
      <Header>
        <Logo />
      </Header>
      <Grid item xs={10}>
        <Carousel>
          <ShowCard component="img" image="https://www.10wallpaper.com/wallpaper/1366x768/1108/Harry_Potter_7_-_Poster_Wallpaper_1366x768.jpg" alt="Harry Potter 7" key={1} />
          <ShowCard component="img" image="https://tm.ibxk.com.br/2021/12/22/22004154684013.jpg?ims=1200x675" alt="Matrix REssurections" key={2} />
        </Carousel>
        <Carousel>
          {shows.map((show) => <ShowCard component="img" image={show.cover} alt={show.title} key={show.id} />)}
        </Carousel>
      </Grid>
    </Wrapper>
  );
}
