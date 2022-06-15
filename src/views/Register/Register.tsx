import { FC, useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import { registerTC, useAppDispatch } from '../../store';
import { Button, Input, Link, Title } from '../../common';
import { useInputValue } from '../../utils/hooks/useInputValue';
import { HaveAccount, RegisterContainer } from './styled';
import type { RegisterDTO } from '../../services/api/auth';

export const Register: FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  console.log('search params from location:', location.search);

  const [searchParams, setSearchParams] = useSearchParams();
  console.log('search params from searchParams:', searchParams.toString());

  const [name, nameHandler] = useInputValue();
  const [email, emailHandler] = useInputValue();
  const [password, passwordHandler] = useInputValue();
  const [confirmPassword, confirmPasswordHandler] = useInputValue();

  // Если мы получаем какие-то данные из searchParams
  // Например, код для авторизации после редиректа с другого сайта
  // А после сохранения кода, хотим занулить searchParams в адресной строке
  const [code, setCode] = useState('');
  useEffect(() => {
    const code = searchParams.get('code');
    if (code) {
      setCode(code);
      console.log('code from searchParams:', code);
      setSearchParams('', { replace: true });
    }
  }, []);

  const registerHandler = () => {
    const registerData = {
      username: name,
      email,
      password,
    } as RegisterDTO;
    dispatch(registerTC(registerData));
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

      <Button content="Sign Up" onClick={registerHandler} />

      <HaveAccount>
        Already have an account? <Link to="/login" text="Sign In" />
      </HaveAccount>
    </RegisterContainer>
  );
};
