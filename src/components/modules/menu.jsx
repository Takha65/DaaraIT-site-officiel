import React, { cloneElement } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import logo from "../../images/logo-dit.png";
import { sidebarRoutes } from "../../routes/sidebar.routes";
import MenuItem from "../menu/MenuItem";
import ResourceDataMap from "../ResourceDataMap";

import "./menu.css";

const Menu = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const closeMenu = () => {
    return setOpenNav(false);
  };

  const ClonedMenuItem = ({ menuItem }) =>
    cloneElement(<MenuItem menuItem={menuItem} />, { closeMenu });

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col items-start gap-y-3 md:gap-4 gap-1 md:p-0 p-4  lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 bg-white">
      <ResourceDataMap
        resourceData={sidebarRoutes}
        resourceItem={ClonedMenuItem}
        resourceName="menuItem"
      />
    </ul>
  );
  return (
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

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6  mb-3 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden  text-gray-900"
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
      <MobileNav open={openNav}>{navList}</MobileNav>
    </Navbar>
  );
};

export default Menu;
