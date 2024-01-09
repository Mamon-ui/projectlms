import React from 'react'

// *** @Icons *** //
// Salary
import { HiOutlineCurrencyRupee } from 'react-icons/hi'
// Class
import { TfiBlackboard } from 'react-icons/tfi'
// Exam StudyMaterials MCQ
import { TbBallpen, TbBooks, TbCircles } from 'react-icons/tb'
// NoticeBoard Dashboard
import { MdOutlineWysiwyg, MdOutlineDashboard } from 'react-icons/md'
// Attendance
import { BsPeople } from 'react-icons/bs'
// Leaves Logout
import { BiPaperPlane } from 'react-icons/bi'
// Settings
import { RiSettings4Fill } from 'react-icons/ri'
// 
import { MdOutlineSchedule, MdAddChart } from 'react-icons/md'
import { HiOutlineBadgeCheck } from 'react-icons/hi'

const MenuList = ({item, setView}) => {
  return(
    <li onClick={() => setView(item.title)} className="transition-all hover:scale-150 hover:bg-slate-700 p-1 bg-black rounded-full">
        {item.icon}
    </li>
  )
}

const BottomNav = ({view, setView}) => {

  const menuItems = [
    {
      title: "Class",
      icon: <TfiBlackboard/>
    },
    {
      title: "Exams",
      icon: <TbBallpen/>
    },
    {
      title: "Salary",
      icon: <HiOutlineCurrencyRupee/>
    },
    {
      title: 'Noticeboard',
      icon: <MdOutlineWysiwyg />
    },
    {
      title: 'Study Materials',
      icon: <TbBooks />
    },
    {
      title: 'Attendance',
      icon: <BsPeople />
    },
    {
      title: 'Leaves',
      icon: <BiPaperPlane />
    }
  ]
  return (
    <>
      <nav className="fixed bottom-1 left-1/2 -translate-x-1/2 w-11/12 h-12 rounded-3xl bg-black">
        <ul className="text-white flex justify-evenly items-center w-full h-full">
          {
            menuItems.map((item) => <MenuList item={item} setView={setView} key={item.title}/>)
          }
        </ul>
      </nav>
    </>
  )
}

export default BottomNav