import React from 'react';
import { WarningStyled } from './form-error.styled';
import { Props } from './form-error.type';

export default function Warning({ message }: Props) {
  return (
    <WarningStyled>
      {message}
    </WarningStyled>
  );
}
