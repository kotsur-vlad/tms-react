import { InputHTMLAttributes, ChangeEvent, FC, ForwardedRef, forwardRef, memo } from 'react';

import { StyledInput } from './styled';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  // interface InputProps {
  ref?: ForwardedRef<HTMLInputElement>;
  // type: string;
  // disabled?: boolean;
  // value: string;
  // placeholder: string;
  // onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  // [rest: string]: any;
}

const InputComponent: FC<InputProps> = forwardRef((props, ref) => {
  // const { type, disabled, value, placeholder, onChange, ...rest } = props;

  return (
    <StyledInput
      ref={ref}
      // type={type}
      // disabled={disabled}
      // placeholder={placeholder}
      // value={value}
      // onChange={onChange}
      {...props}
    />
  );
});

export const Input = memo(InputComponent);
