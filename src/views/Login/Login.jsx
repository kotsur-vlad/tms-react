import { useState } from 'react';

import { Button, Input } from '../../common';
import { LoginContainer } from './styled';

export const Login = () => {
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
      password: password,
    };
    console.log('We logged in, with this data:', loginData);
  };

  return (
    <LoginContainer>
      <Input type='text' placeholder='Your email' value={email} onChange={emailValueHandler} />
      <Input
        type='password'
        placeholder='Your password'
        value={password}
        onChange={passwordValueHandler}
      />

      <Button title='Sign In' onClick={loginHandler} />

    </LoginContainer>
  );
};
