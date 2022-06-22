import React from 'react';
import { InputStyled } from './input.styled';
import { Props } from './input.type';

export default function Input({
  name,
  onChange,
  placeholder,
  type,
}: Props) {
  return (
    <InputStyled
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
