import React, { useContext } from 'react';

import { StyledUsername } from './styled';
import { LanguageContext } from '../../../context/LanguageContext';

export const Username = React.memo((props) => {
  const { name } = props;

  const { lang } = useContext(LanguageContext);

  const greetingsText = lang === 'ru' ? 'Привет' : 'Hello';

  return (
    <StyledUsername>
      {greetingsText}, {name}!
    </StyledUsername>
  );
});
