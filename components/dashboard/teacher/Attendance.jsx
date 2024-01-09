import React, { useEffect, useRef, useState } from 'react'
import { AiFillCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'

const days = [...Array(30).keys()]
const month = days.map((day) => {
  const date = new Date()
  date.setDate(date.getDate() - day)
  const dateString = date.toDateString().split(" ")
  if (dateString[0] != "Sat" && dateString[0] != "Sun") {
    return date.toDateString()
  } else {
    return null
  }
})

const randomizer = () => {
  const outcomes = [true, false]
  const outcome = outcomes[Math.floor(Math.random() * outcomes.length)]
  return outcome
}


const PersonalAttendance = ({ month }) => {
  const periods = [...Array(8).keys()]

  return (
    <section className="w-full flex flex-col justify-between items-center col-span-2">
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-4 bg-black text-white w-full p-4 font-medium text-xl outline outline-1 outline-black/20">
        <span>Date</span>
        {
          periods.map(period => {
            return <span key={period}>Period {period + 1}</span>
          })
        }
      </div>
      {
        month.map((day, idx) => {
          return (
            day ?
              <div key={idx} className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-4 w-full p-4 text-lg bg-white outline outline-1 outline-black/20">
                <span>{day}</span>
                {
                  periods.map(period => {
                    const present = randomizer()
                    return (
                      <span key={period} className="grid place-items-center">
                        {present ? <AiFillCheckCircle /> : <AiOutlineCloseCircle />}
                      </span>
                    )
                  })
                }
              </div>
              :
              null
          )
        })
      }
    </section>
  )
}

const ClassAttendance = () => {

  return (
    <section className="w-full flex flex-col justify-between items-center cols-span-2">
      <section className="w-full flex flex-col justify-between items-center col-span-2">
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-4 bg-black text-white w-full p-4 font-medium text-xl outline outline-1 outline-black/20"></div>
      </section>
    </section>
  )
}

const Attendance = () => {

  const [attendanceView, setAttendanceView] = useState("personal")

  const views = {
    personal: <PersonalAttendance month={month} />,
    class: <ClassAttendance month={month} />,
  }

  const handleView = (e) => {
    setAttendanceView(e.target.id)
  }


  return (
    <main className="flex flex-col gap-10 min-h-screen justify-start items-center p-10 w-full mx-auto bg-slate-100/10 text-center">
      <h1 className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Attendance</h1>

      <section className="grid grid-cols-2 gap-x-10  justify-evenly items-center w-3/4">
        <button id="personal" onClick={handleView} className="bg-black p-4 text-white rounded-t-lg text-2xl">Personal</button>
        <button id="class" onClick={handleView} className="bg-black p-4 text-white rounded-t-lg text-2xl">Class</button>
        {
          views[attendanceView]
        }
      </section>
    </main>
  )
}

export default Attendance