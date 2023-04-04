import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo-dit.png';
import { sidebarRoutes } from '../../routes/sidebar.routes';
import MenuItem from '../menu/MenuItem';
import ResourceDataMap from '../ResourceDataMap';

import './menu.css';

const Menu = () => {
  return (
    <div className="fixed z-[100] top-0 w-full h-[45px] flex items-center justify-between px-8 text-sm text-gray-900 bg-white shadow-xl">
      <div className="logo">
        <Link to="/" className="link">
          <img
            className="imageLogo"
            src={logo}
            alt="logo daara it "
            style={{}}
          />
          Daara IT
        </Link>
      </div>
      <div className="list-items h-full flex items-center justify-cente ">
        <ul className="list h-full flex items-center justify-between">
          <ResourceDataMap 
            resourceData={sidebarRoutes}
            resourceItem={MenuItem}
            resourceName="menuItem"
          />
        </ul>
      </div>
    </div>
  );
};

export default Menu;
