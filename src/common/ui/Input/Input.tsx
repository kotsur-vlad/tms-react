import { ChangeEvent, FC, ForwardedRef, forwardRef, memo } from 'react';

import { StyledInput } from './styled';

interface InputProps {
  ref?: ForwardedRef<HTMLInputElement>;
  type: string;
  disabled?: boolean;
  value: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputComponent: FC<InputProps> = forwardRef((props, ref) => {
  const { type, disabled, value, placeholder, onChange } = props;

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
});

export const Input = memo(InputComponent);
