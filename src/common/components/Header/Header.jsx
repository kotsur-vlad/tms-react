import { useContext } from 'react';

import { LanguageContext } from '../../../context/LanguageContext';
import Button from '../../ui/Button';
import { Username } from '../Username';
import { Menu } from '../Menu';
import { StyledHeaderContainer } from './styled';

export const Header = (props) => {
  const { user } = props;

  const { changeLang } = useContext(LanguageContext);

  const changeLanguageHandler = () => {
    changeLang();
  };

  return (
    <StyledHeaderContainer>
      <Menu />

      <Button title="change language" onClick={changeLanguageHandler} />

      <Username name={user?.username} />
    </StyledHeaderContainer>
  );
};
