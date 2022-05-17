import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const MenuWrapper = styled.ul`
  display: flex;
  align-items: center;
  gap: 12px;

  margin-right: auto;

  list-style: none;
`;

export const MenuItem = styled.li`
  display: block;

  .active-link {
    color: red;
  }
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
`;

export const MenuNavLink = styled(NavLink)`
  text-decoration: none;

  &.active-link {
    color: red;
  }
`;
