import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import api from '../../services/api';
import { Button, Title } from '../../common';
import { ActivationContainer } from './styled';

export const Activation: FC = () => {
  const navigate = useNavigate();
  const { uid, token } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(uid, token);
  }, []);

  const activateHandler = async () => {
    setLoading(true);
    await api.auth.activation({ uid: uid!, token: token! });
    setLoading(false);
  };

  const redirectHandler = () => {
    navigate('/posts');
  };

  return (
    <ActivationContainer>
      <Title text="Activation" indent />

      <Button content="Activate" disabled={loading} onClick={activateHandler} />

      <Button content="Back to posts" disabled={loading} onClick={redirectHandler} />
    </ActivationContainer>
  );
};
