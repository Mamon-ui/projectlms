import React, { useEffect, useState } from 'react'
import { RiMenuUnfoldLine, RiArrowLeftSLine } from 'react-icons/ri'

import { HiOutlineCurrencyRupee } from 'react-icons/hi'
import { TfiBlackboard } from 'react-icons/tfi'
import { TbBallpen, TbBooks, TbCircles } from 'react-icons/tb'
import { MdOutlineWysiwyg, MdOutlineDashboard } from 'react-icons/md'
import { BsPeople } from 'react-icons/bs'
import { BiPaperPlane, BiLogOut } from 'react-icons/bi'
import { IoIosArrowForward } from 'react-icons/io'
import { RiSettings4Fill } from 'react-icons/ri'
import { MdOutlineSchedule, MdAddChart } from 'react-icons/md'
import { HiOutlineBadgeCheck } from 'react-icons/hi'
import { useRouter } from 'next/router'
import { useAuth } from '../../authContext'
import Image from 'next/image'


const MenuList = ({ item, menu, setMenu, view, setView }) => {

  const styles = "w-full cursor-pointer hover:bg-slate-100/10 hover:text-white rounded-xl p-2 transition-all flex justify-start items-center gap-4 relative text-md"

  const [expand, setExpand] = useState(false)

  useEffect(() => {
    if (!menu) {
      setExpand(menu)
    }
  }, [menu])

  const handleClick = (e) => {
    if(!menu && item.menu){
      setMenu(true)
    }
    setExpand(!expand)
    
    if (!item.menu) {
      setView(item.title.toLowerCase())
    }
  }

  return (
    <>
      <li onClick={handleClick} className={styles}>
        <span className="text-2xl"> {item.icon} </span>
        <span className={`${!menu ? "hidden" : "flex"} origin-left`}> {item.title} </span>
        {item.menu ? <IoIosArrowForward className={`ml-auto ${!menu ? "hidden" : ""} ${expand ? "rotate-90" : null} transition-all`} /> : null}

      </li>
      {item.menu && expand ?
        <ul className="w-full border-l border-slate-100/20 flex flex-col justify-center items-start translate-x-4">
          {item.children.map((child) => {
            return <MenuList view={view} menu={menu} setMenu={setMenu} setView={setView} key={child.title} item={child} />
          })}
        </ul>
        :
        null}
    </>
  )
}

const Sidebar = ({ view, setView }) => {

  const { user, setUser } = useAuth()

  const [menu, setMenu] = useState(false)

  const menuItems = [
    {
      title: "Overview",
      menu: false,
      icon: <MdOutlineDashboard />
    },
    {
      title: 'Class',
      menu: true,
      children: [
        {
          title: 'Add Class',
          menu: false,
          icon: <MdAddChart />
        },
        {
          title: 'Schedule',
          menu: false,
          icon: <MdOutlineSchedule />
        }
      ],
      icon: <TfiBlackboard />
    },
    {
      title: 'Exams',
      menu: true,
      children: [
        {
          title: 'MCQ',
          menu: false,
          icon: <TbCircles />
        },
        {
          title: 'Paper Evaluation',
          menu: false,
          icon: <HiOutlineBadgeCheck />
        }
      ],
      icon: <TbBallpen />
    },
    {
      title: 'Salary',
      menu: false,
      icon: <HiOutlineCurrencyRupee />
    },
    {
      title: 'Noticeboard',
      menu: false,
      icon: <MdOutlineWysiwyg />
    },
    {
      title: 'Study Materials',
      menu: false,
      icon: <TbBooks />
    },
    {
      title: 'Attendance',
      menu: false,
      icon: <BsPeople />
    },
    {
      title: 'Leaves',
      menu: false,
      icon: <BiPaperPlane />
    }
  ]


  useEffect(() => {
    console.log(menu)
  }, [menu])

  const router = useRouter()

  return (
    <>
      <section className={`z-10 h-screen transition-all ${menu ? "w-full md:w-80" : "w-16"}`}>
        <nav className="relative h-screen py-8 border-b-4 border-black w-full bg-black shadow-xl shadow-gray-600 transition-all flex flex-col justify-start gap-4 lg:gap-6 items-center">
          {
            menu ?
              <RiArrowLeftSLine onClick={() => { setMenu(!menu) }} className="absolute top-2 right-0 translate-x-1/2 text-4xl p-2 bg-white cursor-pointer text-slate-500 hover:text-black rounded-full shadow shadow-slate-400" />
              :
              <RiMenuUnfoldLine onClick={() => { setMenu(!menu) }} className="absolute top-2 right-0 translate-x-1/2 text-4xl p-2 bg-white cursor-pointer text-slate-500 hover:text-black rounded-full shadow shadow-slate-400" />
          }
          <h1 className={`text-white text-3xl font-bold origin-left ${menu ? "visible" : "invisible"}`}>
            <span className="rounded-full overflow-hidden h-10 w-10 bg-white"></span>
            Dashboard
          </h1>

          {/* MENU SECTION */}
          <span className={`text-slate-600 text-lg border-b border-solid border-slate-600 w-3/4 ${menu ? "visible" : "invisible"}`}>MENU</span>
          <ul className="w-full px-2 flex flex-col gap-2 text-md text-slate-300">
            {
              menuItems.map((item) => {
                return <MenuList view={view} menu={menu} setMenu={setMenu} setView={setView} key={item.title} item={item} />
              })
            }
          </ul>

          {/* PROFILE SECTION */}
          {/* <div className="w-3/4 mt-auto flex flex-col items-center justify-center gap-4">
            <span className={`text-slate-600 text-lg border-b border-solid border-slate-600 w-full ${menu ? "visible" : "invisible"}`}>PROFILE</span>
            <div className="flex items-center justify-start gap-4 w-full">
              <span className="h-12 w-12 rounded-full bg-slate-700 grid place-items-center">img</span>
              {
                menu ? 
                <>
                  <section>
                    <h4 className="text-slate-300 font-medium">{user.fullName.split(' ')[0]} {user.fullName.split(' ')[1]}</h4>
                    <h3 className="text-slate-500 capitalize">{user.type}</h3>
                  </section>
                  <RiSettings4Fill onClick={() => setView('profile')} className="text-slate-300 text-2xl hover:text-white hover:rotate-90 cursor-pointer ml-auto transition-all" />
                </> :
                <>
                </>
              }
            </div>
            <button onClick={logout} className={`text-white bg-white/20 rounded-xl text-md peer hover:font-bold w-full py-3 relative ${menu ? "visible": "invisible"}`}>
              <BiLogOut className="text-2xl absolute left-4 top-1/2 -translate-y-1/2" /> Log Out
            </button>
          </div> */}
        </nav>
      </section>
    </>
  )

}

export default Sidebar