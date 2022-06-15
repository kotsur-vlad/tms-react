import { ChangeEvent, FC } from 'react';

import { Button, Input, Link, Title } from '../../common';
import { ForgotPass, HaveAccount, LoginContainer } from './styled';

interface LoginProps {
  email: string;
  password: string;
  emailValueHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  passwordValueHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  loginHandler: () => void;
  welcomeTextShown: boolean;
}

export const Login: FC<LoginProps> = (props) => {
  const {
    email,
    password,
    emailValueHandler,
    passwordValueHandler,
    loginHandler,
    welcomeTextShown,
  } = props;

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
        <Link to="/reset-password" text="Forgot password?" type="secondary" />
      </ForgotPass>

      <Button content="Sign In" onClick={loginHandler} />

      <HaveAccount>
        Don’t have an account? <Link to="/register" text="Sign Up" />
      </HaveAccount>
    </LoginContainer>
  );
};
