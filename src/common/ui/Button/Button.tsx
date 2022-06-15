import { FC, ReactElement } from 'react';

import { StyledButton } from './styled';

interface ButtonProps {
  disabled?: boolean;
  content: ReactElement | string | number;
  onClick: () => void;
}

export const Button: FC<ButtonProps> = (props) => {
  const { disabled = false, content, onClick } = props;

  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {content}
    </StyledButton>
  );
};
