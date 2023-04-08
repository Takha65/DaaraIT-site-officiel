import React, { useState } from 'react';
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from '@material-tailwind/react';
import logo from '../../images/logo-dit.png';
import { sidebarRoutes } from '../../routes/sidebar.routes';
import MenuItem from '../menu/MenuItem';
import ResourceDataMap from '../ResourceDataMap';

import './menu.css';

const Menu = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 bg-white">
      <ResourceDataMap
        resourceData={sidebarRoutes}
        resourceItem={MenuItem}
        resourceName="menuItem"
      />
    </ul>
  );
  return (
    // <nav class="fixed z-[100] top-0 md:flex md:items-center  bg-white w-full  h-[60px] md:px-8 border-gray-200 dark:bg-gray-900">
    //   <div class="w-full flex flex-wrap items-center justify-between mx-auto p-4">
    //     <Link to="/" class="flex items-center">
    //       <img src={logo} class="h-8 mr-3" alt="Flowbite Logo" />
    //       <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
    //         Daara IT
    //       </span>
    //     </Link>
    //     <button
    //       data-collapse-toggle="navbar-default"
    //       type="button"
    //       class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    //       aria-controls="navbar-default"
    //       aria-expanded="false"
    //       onClick={() => setIsOpen(!isOpen)}
    //     >
    //       <span class="sr-only">Open main menu</span>
    //       <svg
    //         class="w-6 h-6"
    //         aria-hidden="true"
    //         fill="currentColor"
    //         viewBox="0 0 20 20"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path
    //           fill-rule="evenodd"
    //           d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
    //           clip-rule="evenodd"
    //         ></path>
    //       </svg>
    //     </button>
    //     <div
    //       class={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}
    //       id="navbar-default"
    //     >
    //       <ul class="md:h-[53px] flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    //         <ResourceDataMap
    //           resourceData={sidebarRoutes}
    //           resourceItem={MenuItem}
    //           resourceName="menuItem"
    //         />
    //       </ul>
    //     </div>
    //   </div>
    // </nav>

    <Navbar className="fixed inset-0 z-10 h-[60px] max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer flex items-center py-1.5 text-2xl font-semibold  text-gray-900"
        >
          <img src={logo} class="h-8 w-[50px] mr-3" alt="Flowbite Logo" /> Daara
          IT
        </Typography>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <Button
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block"
          >
            <span>Buy Now</span>
          </Button>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden  text-gray-900"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav}>
        {navList}
        <Button variant="gradient" size="sm" fullWidth className="mb-2">
          <span>Buy Now</span>
        </Button>
      </MobileNav>
    </Navbar>
  );
};

export default Menu;
