import React from 'react';
import { Props } from './card.types';
import { CardMediaStyled, CardStyled } from './card.styed';

export default function ShowCard({ image, key, ...props }: Props) {
  return (
    <CardStyled style={{ backgroundColor: 'inherit', boxShadow: 'none' }}>
      <CardMediaStyled
        image={image}
        key={key}
        {...props}
      />
    </CardStyled>
  );
}
