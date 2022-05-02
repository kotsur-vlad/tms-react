import { Button, Input } from '../../common';
import { LoginContainer } from './styled';

export const Login = (props) => {
  const { email, password, emailValueHandler, passwordValueHandler, loginHandler } = props;

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
