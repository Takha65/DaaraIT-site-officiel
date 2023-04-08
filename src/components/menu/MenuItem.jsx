import React from 'react';
import { NavLink } from 'react-router-dom';
import { Typography } from '@material-tailwind/react';

const MenuItem = ({ menuItem }) => {
  const { to, label } = menuItem;
  return (
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="p-1 font-normal md:hover:scale-110 md:hover:border-b-[2px] md:hover:border-black md:hover:pb-0 duration-150"
    >
      <NavLink to={to} class="flex items-center  text-gray-900 pb-1.5">
        {label}
      </NavLink>
    </Typography>
  );
};

export default MenuItem;
