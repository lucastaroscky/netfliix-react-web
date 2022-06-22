import React, { ChangeEvent, HTMLInputTypeAttribute } from 'react';

export type Props = {
  type: string,
  name: string,
  placeholder: string,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
};
