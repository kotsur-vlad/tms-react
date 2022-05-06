import { StyledButton } from './styled';

export const Button = (props) => {
  const { disabled, title, onClick } = props;

  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {title}
    </StyledButton>
  );
};
