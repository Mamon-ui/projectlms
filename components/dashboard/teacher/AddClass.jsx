import React, { useState } from 'react'

import { MdTimer, MdOutlinePeopleAlt, MdOutlineChair, MdOutlineChromeReaderMode, MdOutlineRoom } from 'react-icons/md'
import { AiOutlineApartment, AiOutlineWifi } from 'react-icons/ai'
import { VscGitPullRequestCreate, VscLink } from 'react-icons/vsc'

const AddClass = () => {

  const [classes, setClasses] = useState([])

  const [classInfo, setClassInfo] = useState({
    subject: "",
    class: "",
    section: "",
    mode: "offline",
    start: "",
    end: "",
    room: "",
    link: "",
  })

  const handleChange = (e) => {
    const key = e.target.placeholder.toLowerCase()

    setClassInfo({ ...classInfo, [key]: e.target.value })
  }

  const handleClassAdd = (e) => {
    e.preventDefault()
    setClasses([...classes, classInfo])
    setClassInfo({
      subject: "",
      class: "",
      section: "",
      mode: "offline",
      start: "",
      end: "",
      room: "",
      link: "",
    })
  }

  return (
    <main className="mx-auto my-10 min-h-screen w-5/6 text-center flex flex-col justify-start items-center">
      <h1 className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Add Class</h1>
      <form onSubmit={handleClassAdd} className="my-12 p-4 bg-slate-100/50 rounded-xl sm:flex sm:flex-col gap-4 lg:grid lg:grid-cols-2 justify-evenly items-center">
        <section className="bg-white px-4 border-b-4 border-slate-200 focus-within:border-black w-fit h-fit flex justify-center items-center">
          <MdOutlineChromeReaderMode className="text-2xl" />
          <input required value={classInfo.subject} onChange={handleChange} type="text" className="p-4 outline-none rounded-3xl" placeholder="Subject" />
        </section>
        <section className="bg-white px-4 border-b-4 border-slate-200 focus-within:border-black w-fit h-fit flex justify-center items-center">
          <MdOutlinePeopleAlt className="text-2xl" />
          <input required value={classInfo.class} onChange={handleChange} type="text" className="p-4 outline-none rounded-3xl" placeholder="Class" />
        </section>
        <section className="bg-white px-4 border-b-4 border-slate-200 focus-within:border-black w-fit h-fit flex justify-center items-center">
          <AiOutlineApartment className="text-2xl" />
          <input required value={classInfo.section} onChange={handleChange} type="text" className="p-4 outline-none rounded-3xl" placeholder="Section" />
        </section>
        <section className="bg-white px-4 border-b-4 border-slate-200 focus-within:border-black w-full h-fit flex justify-center items-center">
          {classInfo.mode == "online" ? <AiOutlineWifi className="text-2xl" /> : <MdOutlineRoom className="text-2xl" />}
          <select onChange={(e) => { setClassInfo({ ...classInfo, mode: e.target.value }) }} placeholder="Mode" className="bg-white w-full h-full py-4 outline-none flex justify-center items-center" name="mode">
            <option onChange={(e) => alert(e.target.value)} className="w-full" value="offline">Offline</option>
            <option onChange={(e) => alert(e.target.value)} className="w-full" value="online">Online</option>
          </select>
        </section>
        <section className="bg-white px-4 border-b-4 border-slate-200 focus-within:border-black w-fit h-fit flex justify-center items-center">
          <MdTimer className="text-2xl" />
          <input required value={classInfo.start} onChange={handleChange} type="time" className="p-4 outline-none rounded-3xl" placeholder="Start" />
        </section>
        <section className="bg-white px-4 border-b-4 border-slate-200 focus-within:border-black w-fit h-fit flex justify-center items-center">
          <MdTimer className="text-2xl" />
          <input required value={classInfo.end} onChange={handleChange} type="time" className="p-4 outline-none rounded-3xl" placeholder="End" />
        </section>
        <section className="bg-white px-4 border-b-4 border-slate-200 focus-within:border-black w-fit h-fit flex justify-center items-center">
          {classInfo.mode == "online" ? <VscLink className="text-2xl" /> : <MdOutlineChair className="text-2xl" />}
          <input required value={classInfo.mode == "online" ? classInfo.link : classInfo.room} onChange={handleChange} type="text" className="p-4 outline-none rounded-3xl" placeholder={classInfo.mode == "online" ? "Link" : "Room"} />
        </section>

        <button className="transition-all bg-black group text-white px-4 py-2 text-xl flex gap-2 justify-center items-center rounded-lg col-span-2 w-full hover:font-medium">
          Add
          <VscGitPullRequestCreate className="group-hover:scale-105" />
        </button>
      </form>

      {
        classes.length > 0 ?

          <section className="w-5/6">
            <h1 className="text-3xl my-4 text-purple-600">Classes Added Just Now</h1>
            <section className="w-full flex flex-col rounded-lg overflow-hidden">
              <div className="bg-slate-200 text-lg grid grid-cols-6 text-medium">
                <span className="p-4">Subject</span>
                <span className="p-4">Class</span>
                <span className="p-4">Section</span>
                <span className="p-4">Timings</span>
                <span className="p-4">Mode</span>
                <span className="p-4">Room/Link</span>
              </div>
              {
                classes.map((cls, index) => {
                  return (
                    <div key={index} className="text-md bg-slate-100 text-slate-700 grid grid-cols-6 border-b-2 border-black">
                      <span className="p-4">{cls.subject}</span>
                      <span className="p-4">{cls.class}</span>
                      <span className="p-4">{cls.section}</span>
                      <span className="p-4">{cls.start}-{cls.end}</span>
                      <span className="p-4">{cls.mode}</span>
                      <span className="p-4">{cls.mode == "online" ? cls.link : cls.room}</span>
                    </div>
                  )
                })
              }
            </section>
          </section>
          :
          <>
          </>

      }


    </main>
  )
}

export default AddClass