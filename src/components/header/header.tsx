// eslint-disable-next-line import/no-unresolved
import Logo from 'components/logo/logo';
import React from 'react';
import Menu from './components/logout/logout';
import Profile from './components/profile/profile';
import { HeaderStyled } from './header.styled';

export default function Header() {
  return (
    <HeaderStyled>
      <Menu />
      <Logo />
      <Profile />
    </HeaderStyled>
  );
}
