import React from 'react'

import SideMenu from '../components/modules/sidemenu'
import Menu from "../components/modules/menu"

const AppTemplate = ({children}) => {
  return (
    <div className='relative w-full h-screen'>
      <Menu />
      <div className='corps flex'>
        <SideMenu/>
        <div className='content w-full ml-[50px] mt-[50px]'>
            {children}
        </div>
      </div>
    </div>
  )
}

export default AppTemplate