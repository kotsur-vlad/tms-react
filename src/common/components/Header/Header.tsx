import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { connect } from 'react-redux';
import { clearUserAC } from '../../../store/actions/user.actions';
import { userSelector } from '../../../store/selectors';
import { useLanguage } from '../../../context/LanguageContext';
import { Button } from '../../ui/Button';
import { Username } from '../Username';
import { Menu } from '../Menu';
import { StyledHeaderContainer } from './styled';
import type { UserModel } from '../../../types';

interface HeaderProps {
  user: UserModel;
  clearUser: () => void;
}

const Header: FC = () => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);

  const { changeLang } = useLanguage();

  const clearUserHandler = () => {
    dispatch(clearUserAC());
  };

  const changeLanguageHandler = () => {
    changeLang();
  };

  return (
    <StyledHeaderContainer>
      <Menu />

      <Button title="clear user" onClick={clearUserHandler} />
      <Button title="change language" onClick={changeLanguageHandler} />

      <Username name={user?.user?.username} />
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
