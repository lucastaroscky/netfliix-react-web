import React from 'react';
import { Props } from 'components/shows-list/components/item/item.type';
import { Link } from 'react-router-dom';
import { Cover } from './item.styled';

export default function Item({
  id,
  width,
  height,
  cover,
}: Props) {
  const to = id.toString();

  return (
    <Link to={to}>
      <Cover
        cover={cover}
        height={height}
        width={width}
      />
    </Link>
  );
}
