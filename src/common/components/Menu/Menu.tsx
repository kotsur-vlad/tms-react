import { FC } from 'react';

import { menuItems } from '../../../router/menu';
import { MenuItem, MenuNavLink, MenuWrapper } from './styled';
import type { MenuModel } from '../../../router/types';

export const Menu: FC = () => {
  const menuElements = menuItems.map((m: MenuModel) => {
    return (
      <MenuItem key={m.name}>
        <MenuNavLink
          to={m.path}
          // className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          {m.title}
        </MenuNavLink>
      </MenuItem>
    );
  });

  return <MenuWrapper>{menuElements}</MenuWrapper>;
};
