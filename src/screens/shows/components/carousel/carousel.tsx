import React, { useRef } from 'react';
import { CarouselStyled } from './carousel.styled';
import { Props } from './carousel.types';

export function Carousel({ children }: Props) {
  const carousel = useRef(null);

  return (
    <CarouselStyled ref={carousel}>
      {children}
    </CarouselStyled>
  );
}
