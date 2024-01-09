import React, { useState } from 'react'
import { useAuth } from '../../authContext'

import { MdOutlineSettingsSuggest, MdLogout } from 'react-icons/md'


const ProfileMenu = ({ open = false, className, setView, logout }) => {

  if (!open) return null

  return (
    <div className={className}>
      <ul className="menu menu-compact p-2 w-40 rounded-box bg-slate-500">
        <li onClick={() => { setView("profile") }} className="hover:bg-slate-400 rounded-lg">
          <a className="text-white font-semibold flex justify-between items-center">Profile <MdOutlineSettingsSuggest className="text-xl" /></a>
        </li>
        <li onClick={logout} className="hover:bg-slate-400 rounded-lg">
          <a className="text-white font-semibold flex justify-between items-center">Logout <MdLogout className="text-xl" /></a>
        </li>
      </ul>
    </div>
  )
}

const DashHeader = ({ setView }) => {

  const { user, logout } = useAuth()

  const [open, setOpen] = useState(false)

  return (
    <div className="text-3xl shadow-md py-4 px-10 font-bold text-center w-full flex justify-end items-center relative">
      <span className="w-full">
        ARS Inventif
      </span>
      <button onClick={() => { setOpen(!open) }} className="avatar placeholder cursor-pointer">
        <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
          <span className="text-xs">{user.fullName[0]}</span>
        </div>
      </button>
      <ProfileMenu setView={setView} logout={logout} className="absolute right-0 top-0 translate-y-3/4 -translate-x-1/4" open={open} />
    </div >
  )
}

export default DashHeader