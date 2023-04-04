import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo-dit.png';

import './menu.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav class="fixed z-[100] top-0 md:flex md:items-center  bg-white w-full  h-[60px] md:px-8 border-gray-200 dark:bg-gray-900">
        <div class="w-full flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" class="flex items-center">
            <img src={logo} class="h-8 mr-3" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Daara IT
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            class={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul class="md:h-[53px] flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="md:item  md:flex md:items-center md:ml-6 md:px-6 md:py-[2px] md:hover:scale-110 md:hover:border-b-[4px] md:hover:border-black md:hover:pb-0 duration-150">
                <Link
                  to="/"
                  class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Accueil
                </Link>
              </li>
              <li className="md:item md:flex md:items-center md:ml-6 md:px-2 md:py-[2px] md:hover:scale-110 md:hover:border-b-[4px] md:hover:border-black md:hover:pb-0 duration-150">
                <Link
                  to="/a-propos"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  A propos
                </Link>
              </li>
              <li className="md:item md:flex md:items-center md:ml-6 md:px-2 md:py-[2px] md:hover:scale-110 md:hover:border-b-[4px] md:hover:border-black md:hover:pb-0 duration-150">
                <Link
                  to="/forum"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Forum
                </Link>
              </li>
              <li className="md:item md:flex md:items-center md:ml-6 md:px-2 md:py-[2px] md:hover:scale-110 md:hover:border-b-[4px] md:hover:border-black md:hover:pb-0 duration-150">
                <Link
                  to="/evenements"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Evenements
                </Link>
              </li>
              <li className="md:item md:flex md:items-center md:ml-6 md:px-2 md:py-[2px] md:hover:scale-110 md:hover:border-b-[4px] md:hover:border-black md:hover:pb-0 duration-150">
                <Link
                  to="/galerie"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Galerie
                </Link>
              </li>
              <li className="md:item md:flex md:items-center md:ml-6 md:px-2 md:py-[2px] md:hover:scale-110 md:hover:border-b-[4px] md:hover:border-black md:hover:pb-0 duration-150">
                <Link
                  to="/contact"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Menu;
