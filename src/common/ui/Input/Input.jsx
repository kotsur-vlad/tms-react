import React from 'react';

import { StyledInput } from './styled';

export const Input = React.memo((props) => {
  const { type, disabled, value, placeholder, onChange } = props;

  console.log('Input rendered');

  return (
    <StyledInput
      type={type}
      disabled={disabled}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
});
