import { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Login } from './Login';
import { useInputValue } from '../../utils/hooks/useInputValue';
import { loginTC, useAppDispatch } from '../../store';
import type { LoginDTO } from '../../services/api/auth';

export const LoginContainer: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [welcomeTextShown, setWelcomeTextShown] = useState(false);
  const [email, emailHandler] = useInputValue();
  const [password, passwordHandler] = useInputValue();

  const loginHandler = () => {
    const loginData = {
      email,
      password,
    } as LoginDTO;
    dispatch(loginTC(loginData));
    // navigate('/', { replace: true, state: { from: location } });
  };

  useEffect(() => {
    setTimeout(() => {
      setWelcomeTextShown(true);
    }, 2000);
  }, []);

  return (
    <Login
      email={email}
      password={password}
      emailValueHandler={emailHandler}
      passwordValueHandler={passwordHandler}
      loginHandler={loginHandler}
      welcomeTextShown={welcomeTextShown}
    />
  );
};
