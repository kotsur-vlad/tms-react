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
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
`;

export const MenuNavLink = styled(NavLink)`
  text-decoration: none;

  // 1й костыль для активной ссылки, используя NavLink со styled-components
  &[aria-current] {
    color: blue;
  }

  // 2й костыль для активной ссылки, используя NavLink со styled-components
  //&.active {
  //  color: red;
  //  text-decoration: underline;
  //}

  // а должно работать с любым классом, который мы захотим использовать
  //&.active-link {
  //  color: red;
  //  text-decoration: underline;
  //}
`;
