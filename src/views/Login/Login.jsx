import { useState } from 'react';

import { Button } from '../../common';
import { LoginContainer } from './styled';

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRemember, setIsRemember] = useState(false);
  const [pet, setPet] = useState("Dog");

  const emailValueHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordValueHandler = (event) => {
    setPassword(event.target.value);
  };

  const rememberHandler = () => {
    setIsRemember(!isRemember);
  };

  const choosePetHandler = (event) => {
    setPet(event.target.value)
  }

  const loginHandler = () => {
    const loginData = {
      email,
      password: password,
      rememberMe: isRemember,
      pet,
    };
    console.log('We logged in, with this data:', loginData);
  };

  return (
    <LoginContainer>
      <input type="text" value={email} onChange={emailValueHandler} />
      <input type="text" value={password} onChange={passwordValueHandler} />

      <input type="checkbox" checked={isRemember} onChange={rememberHandler} />
      Remember me?

      <select value={pet} onChange={choosePetHandler}>
        <option value="Cat">Cat</option>
        <option value="Dog">Dog</option>
        <option value="Horse">Horse</option>
      </select>

      <Button title="Sign In" onClick={loginHandler} />

    </LoginContainer>
  );
};
