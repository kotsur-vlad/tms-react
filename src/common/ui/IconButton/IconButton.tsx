import { FC } from 'react';

import { Icon, StyledButton } from './styled';

interface IconButtonProps {
  disabled?: boolean;
  icon: string;
  title: string;
  onClick: () => void;
}

export const IconButton: FC<IconButtonProps> = (props) => {
  const { disabled = false, icon, title, onClick } = props;

  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      <Icon src={icon} />
      {title}
    </StyledButton>
  );
};
