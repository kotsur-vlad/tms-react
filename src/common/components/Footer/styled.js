import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 92px;

  border-top: 1px solid ${({ theme }) => theme.palette.background.medium};

  font-weight: 400;
  font-size: 16px;
  line-height: 150%;

  color: ${({ theme }) => theme.palette.background.gray};
`;
