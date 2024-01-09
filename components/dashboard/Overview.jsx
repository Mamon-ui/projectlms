import React from 'react'

const ClassCard = () => {

  return (
    <>
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body gap-4">
          <h2 className="card-title">Physics Class 2</h2>
          <p className="text-left">2nd Year Section C</p>
          <p className="text-left">11:30 - 12:30</p>
          <p className="text-left">Room: 1012</p>
          <div className="card-actions grid grid-cols-2 gap-4">
            <button className="p-2 rounded-md text-lg bg-black group transition-all">
              <span className="bg-white group-hover:bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold transition-all">Dismiss</span>
            </button>
            <button className="p-2 rounded-md text-lg bg-black group transition-all">
              <span className="bg-white group-hover:bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold transition-all">Start</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}


const Overview = () => {



  return (
    <>
      <main className="w-5/6 my-10 mx-auto flex flex-col lg:grid grid-cols-2 gap-4 justify-end items-center lg:items-center">
        <section className="w-full flex lg:w-full flex-col gap-10 justify-evenly items-center col-span-2">
          <h1 className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-center">Today&apos;s Class</h1>
          <div className="flex justify-start items-center w-11/12 overflow-hidden">
            <div className="w-full flex lg:grid lg:grid-cols-3 gap-4 p-4 lg:gap-10 justify-center items-center">

              {
                [1, 2, 3].map((no, idx) => {
                  return <ClassCard key={idx} no={no} />
                })
              }
            </div>
          </div>
        </section>
        <section className="w-5/6 lg:w-full flex flex-col justify-evenly items-center">
          <h1 className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Schedule</h1>
          <div className="flex flex-col w-full p-4 gap-4">
            <input className="w-full p-4 bg-slate-100 outline-none border-b-4 border-transparent focus:border-black" type="text" placeholder="Subject" />
            <input className="w-full p-4 bg-slate-100 outline-none border-b-4 border-transparent focus:border-black" type="text" placeholder="Class" />
            <input className="w-full p-4 bg-slate-100 outline-none border-b-4 border-transparent focus:border-black" type="text" placeholder="Section" />
            <input className="w-full p-4 bg-slate-100 outline-none border-b-4 border-transparent focus:border-black" type="text" placeholder="Mode" />
            <input className="w-full p-4 bg-slate-100 outline-none border-b-4 border-transparent focus:border-black" type="time" placeholder="Start" />
            <input className="w-full p-4 bg-slate-100 outline-none border-b-4 border-transparent focus:border-black" type="time" placeholder="End" />
            <input className="w-full p-4 bg-slate-100 outline-none border-b-4 border-transparent focus:border-black" type="text" placeholder="Room" />
          </div>
        </section>
        <section className="w-5/6 lg:w-full flex flex-col gap-10 justify-start items-center">
          <h1 className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Noticeboard</h1>
          <div className="flex flex-col w-full p-4 gap-4 bg-white shadow-lg shadow-slate-200">
            <span>Class Time : 10 A.M. to 12 P.M.</span>
            <span>Grade : V</span>
            <span>Section : A</span>
          </div>
          <div className="flex flex-col w-full p-4 gap-4 bg-white shadow-lg shadow-slate-200">
            <span>Class Time : 12 P.M. to 2 P.M.</span>
            <span>Grade : VII</span>
            <span>Section : C</span>
          </div>
          <div className="flex flex-col w-full p-4 gap-4 bg-white shadow-lg shadow-slate-200">
            <span>Class Time : 2 P.M. to 4 P.M.</span>
            <span>Grade : X</span>
            <span>Section : D</span>
          </div>
        </section>
      </main>
    </>
  )
}

export default Overview