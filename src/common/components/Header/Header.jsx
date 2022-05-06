import Username from '../Username';
import { StyledHeaderContainer } from './styled';

export const Header = () => {
  return (
    <StyledHeaderContainer>
      <Username name="Ivan Ivanov" />
    </StyledHeaderContainer>
  );
};
