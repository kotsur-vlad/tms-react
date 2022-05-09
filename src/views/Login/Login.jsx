import { useEffect, useState } from 'react';
import { Button, Input, Link, Title } from '../../common';
import { ForgotPass, HaveAccount, LoginContainer } from './styled';
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

  const [welcomeTextShown, setWelcomeTextShown] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setWelcomeTextShown(true);
    }, 2000);
  }, []);

  return (
    <LoginContainer>
      {welcomeTextShown && <span>Welcome to our blog!</span>}

      <Title text="Sign In" indent />
      <Input type="text" placeholder="Your email" value={email} onChange={emailValueHandler} />
      <Input
        type="password"
        placeholder="Your password"
        value={password}
        onChange={passwordValueHandler}
      />

      <ForgotPass>
        <Link text="Forgot password?" type="secondary" />
      </ForgotPass>

      <Button title="Sign In" onClick={loginHandler} />

      <HaveAccount>
        Don’t have an account? <Link text="Sign Up" />
      </HaveAccount>

      <Counter count={count} incHandler={incHandler} />
      {/* <Wrapper> */}
      {/*  {count} */}
      {/*  <Button title="Inc" onClick={incHandler} /> */}
      {/* </Wrapper> */}
    </LoginContainer>
  );
};
