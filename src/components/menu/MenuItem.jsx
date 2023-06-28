import React from 'react';
import {  NavLink } from 'react-router-dom';
const MenuItem = ({ menuItem, closeMenu }) => {
  const { to, label } = menuItem;
  return (
    <NavLink
      onClick={closeMenu}
      to={to}
      class="flex items-center md:mb-2 p-2 rounded"
    >
      {label}
    </NavLink>
  );
};

export default MenuItem;
