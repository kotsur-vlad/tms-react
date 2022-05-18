import { FC } from 'react';

import { StyledButton } from './styled';

interface ButtonProps {
  disabled?: boolean;
  title: string;
  onClick: () => void;
}

export const Button: FC<ButtonProps> = (props) => {
  const { disabled = false, title, onClick } = props;

  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {title}
    </StyledButton>
  );
};
