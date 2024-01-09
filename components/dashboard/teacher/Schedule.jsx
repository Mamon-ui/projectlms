import React from 'react'

const ClassCard = () => {

  return (
    <>
      <div className="card w-1/3 bg-base-100 shadow-xl">
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


const Schedule = () => {
  return (
    <main className="mx-auto min-h-screen w-5/6 text-center my-10 flex flex-col justify-start items-center">
      <h1 className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Schedule</h1>
      <section className="flex flex-col gap-4 p-4 justify-center items-center w-full">
        <h2 className="text-center font-bold text-2xl mr-auto">Today&apos;s Classes</h2>
        <div className="w-full h-96 border  bg-gray-100 shadow-black/10 rounded-lg flex justify-evenly items-center gap-4 p-4">
          <ClassCard />
          <ClassCard />
          <ClassCard />
        </div>
      </section>
      <section className="flex flex-col gap-4 p-4 justify-center items-center w-full">
        <h2 className="text-center font-bold text-2xl mr-auto">Upcoming Class</h2>
        <ClassCard />
      </section>

    </main>
  )
}

export default Schedule