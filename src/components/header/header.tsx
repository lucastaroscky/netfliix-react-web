// eslint-disable-next-line import/no-unresolved
import React from 'react';
import { HeaderStyled } from './header.styled';
import { Props } from './header.types';

export default function Header({ children }: Props) {
  return (
    <HeaderStyled>
      {children}
    </HeaderStyled>
  );
}
