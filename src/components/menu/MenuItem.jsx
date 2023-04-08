import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-tailwind/react';
const MenuItem = ({ menuItem }) => {
  const { to, label } = menuItem;
  return (
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="p-2 font-normal md:hover:scale-110 md:hover:border-b-[2px] md:hover:border-black md:hover:pb-0 duration-150"
    >
      <Link
        to={to}
        class="flex items-center md:mb-2 p-2.5  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
      >
        {label}
      </Link>
    </Typography>
  );
};

export default MenuItem;
