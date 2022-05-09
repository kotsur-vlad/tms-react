import { useState } from 'react';

import { Button, Input, Title } from '../../common';
import { EmailReceived, ResetPasswordContainer } from './styled';

export const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [emailSentShown, setEmailSentShown] = useState('');

  const emailValueHandler = (event) => {
    setEmail(event.target.value);
  };

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

      <Input type="text" placeholder="Your email" value={email} onChange={emailValueHandler} />

      <Button title="Reset" onClick={resetPasswordHandler} />
    </ResetPasswordContainer>
  );
};
