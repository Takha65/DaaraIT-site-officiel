import React from 'react'
import './menu.css';

const Menu = () => {


    return (
        <div className='fixed z-[100] top-0 w-full h-[45px] flex items-center justify-between px-8 text-sm text-gray-900 bg-white shadow-xl'>
            <div className="logo"><a href="">LOGO</a></div>
            <div className="list-items h-full flex items-center justify-cente">
                <ul className="list h-full flex items-center justify-between">
                    <li className="item h-full flex items-center ml-8 px-2 py-[2px] hover:scale-110 hover:border-b-[2px] hover:border-black hover:pb-0 duration-150"><a href="" className=''>Accueil</a></li>
                    <li className="item h-full flex items-center ml-8 px-2 py-[2px] hover:scale-110 hover:border-b-[2px] hover:border-black hover:pb-0 duration-150"><a href="" className=''>A propos</a></li>
                    <li className="item h-full flex items-center ml-8 px-2 py-[2px] hover:scale-110 hover:border-b-[2px] hover:border-black hover:pb-0 duration-150"><a href="" className=''>Forum</a></li>
                    <li className="item h-full flex items-center ml-8 px-2 py-[2px] hover:scale-110 hover:border-b-[2px] hover:border-black hover:pb-0 duration-150"><a href="" className=''>Evénemants</a></li>
                    <li className="item h-full flex items-center ml-8 px-2 py-[2px] hover:scale-110 hover:border-b-[2px] hover:border-black hover:pb-0 duration-150"><a href="" className=''>Commissions</a></li>
                    <li className="item h-full flex items-center ml-8 px-2 py-[2px] hover:scale-110 hover:border-b-[2px] hover:border-black hover:pb-0 duration-150"><a href="" className=''>Galerie</a></li>
                    <li className="item h-full flex items-center ml-8 px-2 py-[2px] hover:scale-110 hover:border-b-[2px] hover:border-black hover:pb-0 duration-150"><a href="" className=''>Contacts</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Menu