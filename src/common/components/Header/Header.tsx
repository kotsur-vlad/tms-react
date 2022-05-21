import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// import { connect } from 'react-redux';
import { logoutAC, userInfoSelector } from '../../../store';
import { useLanguage } from '../../../context/LanguageContext';

import { Button } from '../../ui/Button';
import { Username } from '../Username';
import { Menu } from '../Menu';
import { StyledHeaderContainer } from './styled';
// import type { UserModel } from '../../../types';

// interface HeaderProps {
//   user: UserModel;
//   clearUser: () => void;
// }

const Header: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector(userInfoSelector);

  const { changeLang } = useLanguage();

  const logoutHandler = () => {
    dispatch(logoutAC());
    navigate('/');
  };

  const changeLanguageHandler = () => {
    changeLang();
  };

  return (
    <StyledHeaderContainer>
      <Menu />

      <Button title="change language" onClick={changeLanguageHandler} />

      <Username name={userInfo.username} />

      <Button title="Log out" onClick={logoutHandler} />
    </StyledHeaderContainer>
  );
};

export { Header };

// Вариант с connect внутри компоненты

// const mapStateToProps = (state) => ({
//   user: state.user.user,
// });
// const mapDispatchToProps = {
//   clearUser: clearUserAC,
// };
// const ConnectedHeader = connect(mapStateToProps, mapDispatchToProps)(Header);
// export { ConnectedHeader as Header };
