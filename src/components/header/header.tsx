// eslint-disable-next-line import/no-unresolved
import Logo from 'components/logo/logo';
import React from 'react';
// import Logout from './components/logout/logout';
import Menu from './components/menu/menu';
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
