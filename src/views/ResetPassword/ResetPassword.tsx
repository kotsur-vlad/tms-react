import { FC, useEffect, useRef, useState } from 'react';

import { Button, Input, Title } from '../../common';
import { useInputValue } from '../../utils/hooks/useInputValue';
import { EmailReceived, ResetPasswordContainer } from './styled';

export const ResetPassword: FC = () => {
  const [email, emailHandler] = useInputValue();
  const [emailSentShown, setEmailSentShown] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  const resetPasswordHandler = () => {
    setEmailSentShown(email);
    const resetPassData = {
      email,
    };
    console.log('Reset password request was sent, with this data:', resetPassData);
  };

  return (
    <ResetPasswordContainer>
      <Title text="Reset password" indent />

      {emailSentShown && (
        <EmailReceived>
          You will receive an email <span className="email">{emailSentShown}</span> with a link to
          reset your password!
        </EmailReceived>
      )}

      <Input
        ref={inputRef}
        type="text"
        placeholder="Your email"
        value={email}
        onChange={emailHandler}
      />
      <Button title="Reset" onClick={resetPasswordHandler} />
    </ResetPasswordContainer>
  );
};
