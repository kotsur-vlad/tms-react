import { StyledInput } from './styled';

export const Input = (props) => {
  const { type, disabled, value, placeholder, onChange } = props;

  return (
    <StyledInput
      type={type}
      disabled={disabled}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
