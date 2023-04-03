import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo-dit.png';

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
      <div className="list-items h-full flex items-center justify-cente">
        <ul className="list h-full flex items-center justify-between">
          <li className="item h-full flex items-center ml-8 px-2 py-[2px] hover:scale-110 hover:border-b-[2px] hover:border-black hover:pb-0 duration-150">
            <Link to="/">Accueil</Link>
          </li>
          <li className="item h-full flex items-center ml-8 px-2 py-[2px] hover:scale-110 hover:border-b-[2px] hover:border-black hover:pb-0 duration-150">
            <Link to="/a-propos">A propos</Link>
          </li>
          <li className="item h-full flex items-center ml-8 px-2 py-[2px] hover:scale-110 hover:border-b-[2px] hover:border-black hover:pb-0 duration-150">
            <Link to="/forum">Forum</Link>
          </li>
          <li className="item h-full flex items-center ml-8 px-2 py-[2px] hover:scale-110 hover:border-b-[2px] hover:border-black hover:pb-0 duration-150">
            <Link to="/evenements">Evenements</Link>
          </li>
          <li className="item h-full flex items-center ml-8 px-2 py-[2px] hover:scale-110 hover:border-b-[2px] hover:border-black hover:pb-0 duration-150">
            <Link to="/commissions">Commissions</Link>
          </li>
          <li className="item h-full flex items-center ml-8 px-2 py-[2px] hover:scale-110 hover:border-b-[2px] hover:border-black hover:pb-0 duration-150">
            <Link to="/Galerie">Galerie</Link>
          </li>
          <li className="item h-full flex items-center ml-8 px-2 py-[2px] hover:scale-110 hover:border-b-[2px] hover:border-black hover:pb-0 duration-150">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
