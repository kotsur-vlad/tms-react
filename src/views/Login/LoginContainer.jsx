import { useState } from 'react';

import { Login } from './Login';

export const LoginContainer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailValueHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordValueHandler = (event) => {
    setPassword(event.target.value);
  };

  const loginHandler = () => {
    const loginData = {
      email,
      password,
    };
    console.log('We logged in, with this data:', loginData);
  };

  return (
    <Login
      email={email}
      password={password}
      emailValueHandler={emailValueHandler}
      passwordValueHandler={passwordValueHandler}
      loginHandler={loginHandler}
    />
  );
};
