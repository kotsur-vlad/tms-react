import { useState } from 'react';

import { Button, Input } from '../../common';
import { RegisterContainer } from './styled';

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const nameValueHandler = (event) => {
    setName(event.target.value);
  };

  const emailValueHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordValueHandler = (event) => {
    setPassword(event.target.value);
  };

  const confirmPasswordValueHandler = (event) => {
    setConfirmPassword(event.target.value);
  };

  const loginHandler = () => {
    const loginData = {
      name,
      email,
      password,
      confirmPassword,
    };
    console.log('Registration request was sent, with this data:', loginData);
  };

  return (
    <RegisterContainer>
      <Input type='text' placeholder='Your name' value={name} onChange={nameValueHandler} />
      <Input type='text' placeholder='Your email' value={email} onChange={emailValueHandler} />
      <Input
        type='password'
        placeholder='Your password'
        value={password}
        onChange={passwordValueHandler}
      />
      <Input
        type='password'
        placeholder='Confirm password'
        value={confirmPassword}
        onChange={confirmPasswordValueHandler}
      />

      <Button title='Sign In' onClick={loginHandler} />

    </RegisterContainer>
  );
};
