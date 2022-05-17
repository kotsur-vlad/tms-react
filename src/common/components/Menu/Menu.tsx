import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { menuItems } from '../../../router/menu';
import { MenuItem, MenuLink, MenuNavLink, MenuWrapper } from './styled';
import type { MenuModel } from '../../../router/types';

export const Menu: FC = () => {
  const active = ({ isActive }) => (isActive ? { color: 'red' } : undefined);

  const menuElements = menuItems.map((m: MenuModel) => {
    return (
      <MenuItem key={m.name}>
        <NavLink
          to={m.path}
          className={({ isActive }) => (isActive ? 'active-link' : undefined)}
          // style={active}
        >
          {m.title}
        </NavLink>
      </MenuItem>
    );
  });

  return <MenuWrapper>{menuElements}</MenuWrapper>;
};
