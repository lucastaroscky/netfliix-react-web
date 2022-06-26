import React from 'react';
import { IconButton } from '@mui/material';
import { Props } from './icon.types';

export default function Icon({ children }: Props) {
  return (
    <IconButton
      size="large"
      edge="start"
      aria-label="menu"
    >
      {children}
    </IconButton>
  );
}
