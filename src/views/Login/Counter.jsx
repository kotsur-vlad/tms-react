import React from 'react';

import { Button } from '../../common';
import { Wrapper } from './styled';

export const Counter = React.memo((props) => {
  const { count, incHandler } = props;

  console.log('counter rendered');

  return (
    <Wrapper>
      {count}
      <Button title="Inc" onClick={incHandler} />
    </Wrapper>
  );
});
