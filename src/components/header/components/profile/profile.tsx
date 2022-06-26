import React from 'react';
import profileIcon from '../../../../assets/profile.png';
import { ProfileStyled } from './profile.styled';

export default function Profile() {
  return (
    <ProfileStyled src={profileIcon} />
  );
}
