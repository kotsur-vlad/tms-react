import { Button, Input, Link, Title } from '../../common';
import { ForgotPass, HaveAccount, LoginContainer } from './styled';

export const Login = (props) => {
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
        <Link text="Forgot password?" type="secondary" />
      </ForgotPass>

      <Button title="Sign In" onClick={loginHandler} />

      <HaveAccount>
        Don’t have an account? <Link text="Sign Up" />
      </HaveAccount>
    </LoginContainer>
  );
};
