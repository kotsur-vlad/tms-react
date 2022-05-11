import { useEffect, useRef, useState } from 'react';

import { Button, Input, Title } from '../../common';
import { EmailReceived, ResetPasswordContainer } from './styled';

export const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [emailSentShown, setEmailSentShown] = useState('');

  const inputRef = useRef(null);

  const countRef = useRef(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('component rendered');
    inputRef.current.focus();
  });

  // const focusHandler = () => {
  //   inputRef.current.focus();
  // };

  const countHandler = () => {
    setCount(count + 1);
  };

  const countRefHandler = () => {
    countRef.current += 1;
  };

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
      <br />
      state: {count}
      <br />
      ref: {countRef.current}
      <Button title="Count(state)" onClick={countHandler} />
      <Button title="Count(ref)" onClick={countRefHandler} />
      <br />
      <br />
      <Input
        ref={inputRef}
        type="text"
        placeholder="Your email"
        value={email}
        onChange={emailValueHandler}
      />
      {/* <input */}
      {/*   ref={inputRef} */}
      {/*   type="text" */}
      {/*   placeholder="Your email" */}
      {/*   value={email} */}
      {/*   onChange={emailValueHandler} */}
      {/* /> */}
      {/* <Button title="Focus" onClick={focusHandler} /> */}
      <Button title="Reset" onClick={resetPasswordHandler} />
    </ResetPasswordContainer>
  );
};
