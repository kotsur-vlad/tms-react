import { StyledButton } from './styled';

export const Button = (props) => {

  return (
    <StyledButton
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.title}
    </StyledButton>
  );
};
