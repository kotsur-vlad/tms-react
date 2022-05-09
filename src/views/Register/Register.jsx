import { useState } from 'react';

import { Button, Input, Link, Title } from '../../common';
import { HaveAccount, RegisterContainer } from './styled';

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

  const registerHandler = () => {
    const registerData = {
      name,
      email,
      password,
      confirmPassword,
    };
    console.log('Registration request was sent, with this data:', registerData);
  };

  return (
    <RegisterContainer>
      <Title text="Sign Up" indent />
      <Input type="text" placeholder="Your name" value={name} onChange={nameValueHandler} />
      <Input type="text" placeholder="Your email" value={email} onChange={emailValueHandler} />
      <Input
        type="password"
        placeholder="Your password"
        value={password}
        onChange={passwordValueHandler}
      />
      <Input
        type="password"
        placeholder="Confirm password"
        value={confirmPassword}
        onChange={confirmPasswordValueHandler}
      />
      <Button title="Sign Up" onClick={registerHandler} />

      <HaveAccount>
        Already have an account? <Link text="Sign In" />
      </HaveAccount>
    </RegisterContainer>
  );
};
