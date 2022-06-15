import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { authStatusSelector, logoutTC, useAppDispatch, userInfoSelector } from '../../../store';
import { useLanguage } from '../../../context/LanguageContext';

import { Button } from '../../ui/Button';
import { Menu } from '../Menu';
// import { SearchInputClick } from '../SearchInputClick';
import { SearchInputDebounce } from '../SearchInputDebounce';
import { Username } from '../Username';
import { StyledHeaderContainer } from './styled';

const Header: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isAuth = useSelector(authStatusSelector);
  const userInfo = useSelector(userInfoSelector);

  const { changeLang } = useLanguage();

  const loginHandler = () => {
    navigate('/login');
  };

  const logoutHandler = () => {
    dispatch(logoutTC());
  };

  const changeLanguageHandler = () => {
    changeLang();
  };

  return (
    <StyledHeaderContainer>
      <Menu />

      {/*<SearchInputClick />*/}
      <SearchInputDebounce />

      <Button content="change language" onClick={changeLanguageHandler} />

      {isAuth ? (
        <>
          <Username name={userInfo?.username} />
          <Button content="Log out" onClick={logoutHandler} />
        </>
      ) : (
        <Button content="Log in" onClick={loginHandler} />
      )}
    </StyledHeaderContainer>
  );
};

export { Header };
