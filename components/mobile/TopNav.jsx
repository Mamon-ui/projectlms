import React, { useState } from 'react'

import { BiLogOut } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'

const ProfileMenu = () => {
  return (
    <div className="absolute top-16 right-2 bg-slate-900 py-4 px-2 text-white rounded-lg flex flex-col justify-center gap-2 items-center">
      <button className="w-full flex hover:bg-white/10 justify-between items-center py-2 px-4 gap-4 hover:font-bold rounded-md"><CgProfile/> Profile</button>
      <button className="w-full flex hover:bg-white/10 justify-between items-center py-2 px-4 gap-4 hover:font-bold rounded-md"><BiLogOut/> Log Out</button>
    </div>
  )
}

const TopNav = ({view}) => {

  const [menu, setMenu] = useState(true)

  const switchMenu = () => {
    setMenu(!menu)
  }


  return (
    <>
      <header className="w-screen bg-black h-16 p-4 flex items-center justify-between relative">
        <span className="text-white">&lt; Back</span>
        <span className="text-center text-white font-medium text-xl">{view}</span>
        <span onClick={switchMenu} className="bg-white rounded-full text-sm p-2 grid place-items-center text-black ">img</span>
        {
          menu ? <ProfileMenu/> : null
        }
      </header>
    </>
  )
}

export default TopNav