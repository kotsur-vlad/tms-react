import React from 'react';

import { StyledInput } from './styled';

export const Input = React.memo(
  React.forwardRef((props, ref) => {
    const { type, disabled, value, placeholder, onChange } = props;

    console.log('Input rendered');

    return (
      <StyledInput
        ref={ref}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    );
  })
);
