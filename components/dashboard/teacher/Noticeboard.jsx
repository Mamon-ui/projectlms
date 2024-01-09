import React, { useState } from 'react'

import { GoPin } from 'react-icons/go'
import { TbTextResize, TbUrgent } from 'react-icons/tb'
import { MdSend } from 'react-icons/md'

import axios from 'axios'

import { useAuth } from '../../../authContext'

const Priority = ({ priority }) => {

  const colors = {
    high: "bg-red-600",
    medium: "bg-yellow-300",
    low: "bg-lime-300",
  }


  return (
    <>
      <div className="flex justify-center items-center w-fit gap-2 p-3 rounded-md bg-black text-white">
        <span className={`rounded-full ${colors[priority]} h-2 w-2`}></span>
        <span className="capitalize">{priority}</span>
      </div>
    </>
  )
}

const Noticeboard = () => {

  const { user } = useAuth()

  const [notice, setNotice] = useState({
    heading: "",
    body: "",
    priority: "",
  })

  const [allNotices, setAllNotices] = useState([])

  const handleChange = (e) => {
    const key = e.target.name
    const value = e.target.value

    setNotice({ ...notice, [key]: value })
  }

  const handleNewNotice = async (e) => {
    e.preventDefault()
    const time = new Date().toLocaleTimeString()
    setAllNotices([...allNotices, {...notice, timestamp: time}])
    console.log(allNotices)
  }

  return (
    <main className="mx-auto h-fit w-5/6 text-center grid grid-cols-2 place-items-start p-10">
      <section className="w-fit">
      <h1 className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">New Notice</h1>
        <form onSubmit={handleNewNotice} className="my-12 p-4 bg-slate-100/50 rounded-xl flex flex-col gap-4 justify-evenly items-center">
          <section className="bg-white px-4 border-b-4 border-slate-200 focus-within:border-black w-fit h-fit flex justify-center items-center">
            <GoPin className="text-2xl" />
            <input required value={notice.heading} onChange={handleChange} type="text" className="p-4 outline-none" placeholder="Heading" name="heading" />
          </section>
          <section className="bg-white px-4 border-b-4 border-slate-200 focus-within:border-black w-fit h-fit flex justify-center items-start">
            <TbTextResize className="text-2xl translate-y-1/2" />
            <textarea rows={4} required value={notice.body} onChange={handleChange} type="text" className="p-4 outline-none" placeholder="Body" name="body" />
          </section>
          <section className="bg-white border-b-4 border-slate-200 focus-within:border-black w-fill h-fit flex justify-center items-center">
            <TbUrgent className="text-2xl ml-4" />
            <select onChange={handleChange} className="bg-white w-full h-full px-20 py-4 outline-none flex justify-center items-center" name="priority" required>
              <option selected className="w-full disabled:text-slate-400" disabled value="">Priority</option>
              <option onChange={(e) => alert(e.target.value)} className="w-full" value="low">Low</option>
              <option onChange={(e) => alert(e.target.value)} className="w-full" value="mid">Medium</option>
              <option onChange={(e) => alert(e.target.value)} className="w-full" value="high">High</option>
            </select>
          </section>
          <button className="transition-all bg-black group text-white px-4 py-2 text-xl flex gap-2 justify-center items-center rounded-lg w-full hover:font-medium">
            Post
            <MdSend className="group-hover:scale-105" />
          </button>
        </form>
      </section>
      <section className="w-full flex flex-col gap-10">
      <h1 className="text-2xl lg:text-4xl  font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Notices</h1>
        {
          allNotices.length ?
            <aside className="flex flex-col shadow shadow-slate-300">
              <div className="bg-slate-400 grid grid-cols-4 gap-6 p-2 w-full">
                <span className="text-center">Title</span>
                <span className="text-center">Author</span>
                <span className="text-center">Time</span>
                <span className="text-center">Priority</span>
              </div>
              {
                allNotices.map((notice, index) => {
                  return (
                    <div key={index} className="grid grid-cols-4 gap-6 p-2 w-full">
                      <span className="text-center">{notice.heading}</span>
                      <span className="text-center">{user.userid} </span>
                      <span className="text-center">{notice.timestamp}</span>
                      <span className="text-center">{notice.priority}</span>
                    </div>
                  )
                })
              }
            </aside>
            :
            <aside className="flex flex-col">
              <div className="bg-slate-400 grid grid-cols-4 gap-6 p-2 w-full">
                <span className="text-center">Title</span>
                <span className="text-center">Author</span>
                <span className="text-center">Time</span>
                <span className="text-center">Priority</span>
              </div>
              <div className="grid place-items-center w-full text">
                <span className="text-black text-center p-4 bg-slate-100 w-full">No Notices</span>
              </div>
            </aside>
        }
      </section>
    </main>
  )
}

export default Noticeboard