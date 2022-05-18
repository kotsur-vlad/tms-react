import { FC } from 'react';

import { StyledTextArea } from './styled';

interface TextAreaProps {
  disabled?: boolean;
  value: string;
  placeholder: string;
  onChange: () => void;
}

export const TextArea: FC<TextAreaProps> = (props) => {
  const { disabled = false, value, placeholder, onChange } = props;

  return (
    <StyledTextArea
      disabled={disabled}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
