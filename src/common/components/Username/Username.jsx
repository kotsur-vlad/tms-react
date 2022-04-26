import { StyledUsername } from './styled'

export const Username = (props) => {

  return (
    <StyledUsername>
      Hello, {props.name}!
    </StyledUsername>
  );
}
