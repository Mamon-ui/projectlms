import React, { useState } from 'react'
import Sidebar from './dashboard/Sidebar'
import AddClass from './dashboard/teacher/AddClass'
import Profile from './dashboard/Profile'
import Schedule from './dashboard/teacher/Schedule'
import MCQ from './dashboard/teacher/MCQ'
import Evaluation from './dashboard/teacher/Evaluation'
import Salary from './dashboard/teacher/Salary'
import StudyMaterials from './dashboard/teacher/StudyMaterials'
import Noticeboard from './dashboard/teacher/Noticeboard'
import Attendance from './dashboard/teacher/Attendance'
import Leaves from './dashboard/Leaves'
import DashHeader from './dashboard/DashHeader'
import Overview from './dashboard/Overview'

const Dashboard = () => {

  const views = {
    "overview": <Overview />,
    "add class": <AddClass />,
    "profile": <Profile />,
    "schedule": <Schedule />,
    "mcq": <MCQ />,
    "paper evaluation": <Evaluation />,
    "salary": <Salary />,
    "noticeboard": <Noticeboard />,
    "study materials": <StudyMaterials />,
    "attendance": <Attendance />,
    "leaves": <Leaves />
  }

  const [view, setView] = useState('overview')
  return (
    <>
      <main className="flex justify-between items-between overflow-hidden">
        <Sidebar type={"teacher"} view={view} setView={setView} />
        <section className='w-full h-screen flex flex-col gap-2 bg-slate-100/10 justify-start items-center overflow-y-scroll scrollbar scrollbar-thumb-black scrollbar-track-slate-400 scrollbar-thumb-rounded-full'>
          <DashHeader setView={setView} />
          {view ? views[view] : null}
        </section>
      </main>
    </>
  )
}

export default Dashboard