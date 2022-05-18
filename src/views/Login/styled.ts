import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 40px;

  border: 1px solid #dadada;
  background-color: #dadada;
`;

export const ForgotPass = styled.div`
  margin-top: 16px;
`;

export const HaveAccount = styled.div`
  margin-top: 24px;

  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  color: ${({ theme }) => theme.palette.background.gray};
`;
