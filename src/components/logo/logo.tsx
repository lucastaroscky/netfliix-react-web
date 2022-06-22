import React from 'react';
import { LogoStyled } from './logo.styled';
import logo from '../../assets/netflix-logo.png';

export default function Logo() {
  return (
    <LogoStyled src={logo} />
  );
}
