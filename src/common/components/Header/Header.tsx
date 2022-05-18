import { FC } from 'react';

import { useLanguage } from '../../../context/LanguageContext';
import { Button } from '../../ui/Button';
import { Username } from '../Username';
import { Menu } from '../Menu';
import { StyledHeaderContainer } from './styled';
import type { UserModel } from '../../../types';

interface HeaderProps {
  user: UserModel;
}

export const Header: FC<HeaderProps> = (props) => {
  const { user } = props;

  const { changeLang } = useLanguage();

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
