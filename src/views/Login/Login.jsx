import { Button, Input } from '../../common';
import { LoginContainer, Wrapper } from './styled';
import { Counter } from './Counter';

export const Login = (props) => {
  const {
    count,
    incHandler,
    email,
    password,
    emailValueHandler,
    passwordValueHandler,
    loginHandler,
  } = props;

  return (
    <LoginContainer>
      <Input type="text" placeholder="Your email" value={email} onChange={emailValueHandler} />
      <Input
        type="password"
        placeholder="Your password"
        value={password}
        onChange={passwordValueHandler}
      />

      <Button title="Sign In" onClick={loginHandler} />

      <Counter count={count} incHandler={incHandler} />
      {/* <Wrapper> */}
      {/*  {count} */}
      {/*  <Button title="Inc" onClick={incHandler} /> */}
      {/* </Wrapper> */}
    </LoginContainer>
  );
};
