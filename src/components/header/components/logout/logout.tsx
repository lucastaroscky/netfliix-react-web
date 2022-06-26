import React from 'react';
import { IconButton } from '@mui/material';
import { MenuStyled } from './logout.styled';

export default function Menu() {
  return (
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
    >
      <MenuStyled />
    </IconButton>
  );
}
