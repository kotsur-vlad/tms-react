import { StyledTextArea } from './styled';

export const TextArea = (props) => {
  const { disabled, value, placeholder, onChange } = props;

  return (
    <StyledTextArea
      disabled={disabled}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
