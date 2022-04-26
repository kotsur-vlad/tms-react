import { StyledMainContainer } from './styled'

export const Main = (props) => {

  return (
    <StyledMainContainer>
      {props.children}
    </StyledMainContainer>
  );
}
