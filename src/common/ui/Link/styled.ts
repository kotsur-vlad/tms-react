import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const baseLinkStyles = css`
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  text-decoration: none;
`;

export const PrimaryLink = styled(Link)`
  ${baseLinkStyles};

  color: ${({ theme }) => theme.palette.system.primary};
`;

export const SecondaryLink = styled(Link)`
  ${baseLinkStyles};

  color: ${({ theme }) => theme.palette.system.secondary};

  &:hover {
    color: ${({ theme }) => theme.palette.system.primary};
  }
`;
