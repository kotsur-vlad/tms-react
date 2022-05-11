import { useCallback, useEffect, useState } from 'react';

import { Login } from './Login';
import { useInputValue } from '../../utils/hooks/useInputValue';

export const LoginContainer = () => {
  const [email, emailHandler] = useInputValue();
  const [password, passwordHandler] = useInputValue();

  const [count, setCount] = useState(0);

  const incHandler = useCallback(() => {
    setCount((prevState) => {
      return prevState + 3;
    });
  }, []);

  const someFunc = useCallback(() => {
    console.log('Login rendered', email);
  }, [email]);

  useEffect(() => {
    someFunc();
  }, []);

  const loginHandler = () => {
    const loginData = {
      email,
      password,
    };
    console.log('We logged in, with this data:', loginData);
  };

  return (
    <Login
      count={count}
      incHandler={incHandler}
      email={email}
      password={password}
      emailValueHandler={emailHandler}
      passwordValueHandler={passwordHandler}
      loginHandler={loginHandler}
    />
  );
};
