import React, { useEffect } from 'react';
import Wrapper from 'components/wrapper/wrapper';
import { useDispatch } from 'react-redux';
import { showAction } from 'store/shows/show.slice';
import { Grid } from '@mui/material';

export default function Shows() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showAction.listShows());
  }, []);

  return (
    <Wrapper>
      <Grid item xs={2}>
        Movies List
      </Grid>
    </Wrapper>
  );
}
