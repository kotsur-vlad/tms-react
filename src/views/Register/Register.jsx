import { Button, Input, Link, Title } from '../../common';
import { HaveAccount, RegisterContainer } from './styled';
import { useInputValue } from '../../utils/hooks/useInputValue';

export const Register = () => {
  const validator = (value) => {
    const newValue = `${value}!`;
    return newValue;
  };

  const [name, nameHandler] = useInputValue();
  const [email, emailHandler] = useInputValue(validator);
  const [password, passwordHandler] = useInputValue();
  const [confirmPassword, confirmPasswordHandler] = useInputValue();

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

      <Input type="text" placeholder="Your name" value={name} onChange={nameHandler} />
      <Input type="text" placeholder="Your email" value={email} onChange={emailHandler} />
      <Input
        type="password"
        placeholder="Your password"
        value={password}
        onChange={passwordHandler}
      />
      <Input
        type="password"
        placeholder="Confirm password"
        value={confirmPassword}
        onChange={confirmPasswordHandler}
      />

      <Button title="Sign Up" onClick={registerHandler} />

      <HaveAccount>
        Already have an account? <Link text="Sign In" />
      </HaveAccount>
    </RegisterContainer>
  );
};
