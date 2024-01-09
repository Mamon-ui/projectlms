import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const totalDays = (start, end) => {
  const startDate = new Date(start)
  const endDate = new Date(end)

  const oneDay = 24 * 60 * 60 * 1000

  const total = Math.round(Math.abs(endDate - startDate) / oneDay) + 1

  return total
}

const Leaves = () => {

  const status = {
    "Pending": "text-yellow-500",
    "Declined": "text-red-500",
    "Approved": "text-lime-500",
  }

  // const allLeaves = [
  //   {
  //     title: "Wedding",
  //     start: "Dec 07, 2022",
  //     end: "Dec 20, 2022",
  //     total: 14,
  //     status: "Pending",
  //   },
  //   {
  //     title: "Medical",
  //     start: "Nov 28, 2022",
  //     end: "Nov 30, 2022",
  //     total: 3,
  //     status: "Approved"
  //   },
  //   {
  //     title: "Personal",
  //     start: "Sep 19, 2022",
  //     end: "Sep 25, 2022",
  //     total: 7,
  //     status: "Approved"
  //   },
  //   {
  //     title: "Personal",
  //     start: "Sep 12, 2022",
  //     end: "Sep 18, 2022",
  //     total: 7,
  //     status: "Declined"
  //   },
  // ]


  const [allLeaves, setAllLeaves] = useState([])

  const [leave, setLeave] = useState({
    title: "",
    start: "",
    end: "",
    total: null,
    status: "Pending"
  })

  const total = (leave.start && leave.end && leave.start < leave.end) ? totalDays(leave.start, leave.end) : null

  const handleChange = (e) => {
    setLeave({ ...leave, [e.target.id]: e.target.value })
  }

  const handleLeave = (e) => {
    e.preventDefault()

    if (leave.start > leave.end) {
      alert("Start > End")
      return
    }

    const calculatedLeave = leave

    calculatedLeave.total = total

    if (total < 5) {
      calculatedLeave.status = "Approved"
    } else if (total > 5 && total < 11) {
      calculatedLeave.status = "Pending"
    } else {
      calculatedLeave.status = "Declined"
    }

    setAllLeaves([...allLeaves, calculatedLeave])
  }

  return (
    <main className="min-h-screen flex flex-col justify-start items-center p-10 w-full mx-auto text-center">
      <h1 className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Leave</h1>

      <section className="w-5/6 my-10"> 
        <form onSubmit={handleLeave} className="w-full bg-white grid grid-cols-[3fr_1fr_1.5fr_1fr_1.5fr_1fr] place-items-center gap-4 p-4 rounded-xl shadow-xl shadow-black/10">
          <input required className="outline-none bg-slate-100 w-full p-2 text-lg" type="text" placeholder="Reason" value={leave.title} onChange={handleChange} id="title" />
          <label className="w-fit font-medium" htmlFor="start">Start Date</label>
          <input required className="outline-none bg-slate-100 w-full p-2 text-lg" name="start" type="date" value={leave.start} onChange={handleChange} id="start" />
          <label className="w-fit font-medium" htmlFor="start">End Date</label>
          <input required className="outline-none bg-slate-100 w-full p-2 text-lg" name="end" type="date" value={leave.end} onChange={handleChange} id="end" />
          <button className="p-2 text-lg text-white bg-black px-6 rounded-md">Apply</button>
        </form>
      </section>

      {
        allLeaves.length > 0 ?
          <section className="w-5/6 bg-black">
            <div className="grid grid-cols-[4fr_2fr_2fr_1fr_1fr] place-items-center p-4 bg-black text-xl text-white font-medium">
              <span className="text-center"> Title </span>
              <span className="text-center"> Start Date </span>
              <span className="text-center"> End Date </span>
              <span className="text-center"> Total Days </span>
              <span className="text-center"> Status </span>
            </div>
            {
              allLeaves.map((leave, index) => {

                return (
                  <div key={index} className=" grid grid-cols-[4fr_2fr_2fr_1fr_1fr] place-items-center bg-white p-4 text-lg">
                    <span className="text-center"> {leave.title} </span>
                    <span className="text-center"> {leave.start} </span>
                    <span className="text-center"> {leave.end} </span>
                    <span className="text-center"> {leave.total} days </span>
                    <span className={`text-center font-medium ${status[leave.status]}`}> {leave.status} </span>
                  </div>
                )
              })
            }
          </section>
          :
          null
      }


    </main>
  )
}

export default Leaves