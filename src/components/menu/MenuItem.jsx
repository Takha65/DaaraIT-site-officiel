import React from 'react';
import { NavLink } from 'react-router-dom';
// import { NavLink } from 'react-bootstrap'

const MenuItem = ({ menuItem }) => {
  const { to, label } = menuItem;
  return (
    <li className="md:item md:flex md:items-center md:ml-2 md:px-2 md:py-2 md:hover:scale-110 md:hover:border-b-[4px] md:hover:border-black md:hover:pb-0 duration-150">
      <NavLink
        to={to}
        class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
      >
        {label}
      </NavLink>
    </li>
  );
};

export default MenuItem;
