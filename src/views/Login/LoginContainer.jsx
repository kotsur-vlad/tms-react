import { useCallback, useEffect, useState } from 'react';

import { Login } from './Login';

export const LoginContainer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  //
  const emailValueHandler = useCallback((event) => {
    setEmail(event.target.value);
  }, []);

  const passwordValueHandler = useCallback((event) => {
    setPassword(event.target.value);
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
      emailValueHandler={emailValueHandler}
      passwordValueHandler={passwordValueHandler}
      loginHandler={loginHandler}
    />
  );
};
