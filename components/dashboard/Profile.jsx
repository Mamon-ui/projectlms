import React, { useState } from 'react'
import { useAuth } from '../../authContext'

const Profile = () => {

  const { user, setUser } = useAuth()

  const display = ["fullName", "email", "subject", "gender", "address", "experience", "qualification"]

  const handleChange = (e) => {
    const key = e.target.name
    const value = e.target.value

    setUser({ ...user, [key]: value })

  }

  const updateProfile = () => {
    console.log(user)
    for (const key in user) {
      localStorage.setItem(key, user[key])
    }
  }

  return (
    <section className="w-5/6 lg:w-3/4 mx-auto my-10 flex flex-col justify-center items-center">
      <h1 className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Today&apos;s Class</h1>
      <div className="w-full m-4 lg:my-8 shadow-md bg-white shadow-black/20 rounded-2xl flex flex-col lg:grid lg:grid-cols-[3fr_7fr] gap-4  lg:gap-16 overflow-hidden">
        <section className="h-full w-full bg-black flex justify-center items-center">
          <span className="w-20 h-20 m-10 lg:h-40 lg:w-40 bg-white grid place-items-center rounded-full text-black">img</span>
        </section>
        <form onSubmit={(e) => { e.preventDefault() }} className="flex flex-col justify-start w-4/5 mx-auto">
          {
            display.map((detail) => {
              return (
                <section key={detail} className="flex flex-col lg:flex-row justify-center items-start lg:grid lg:grid-cols-[3fr_7fr] gap-4 text-sm lg:text-xl py-4">
                  <label htmlFor={detail} className="font-semibold text-left capitalize">{detail}</label>
                  <input id={detail} type="text" name={detail} className="w-full text-left outline-none border-b-4 focus:border-black" value={user[detail]} onChange={handleChange} />
                </section>

              )
            })
          }

          <button onClick={updateProfile} className="bg-black col-span-2 w-fit my-4 p-4 text-purple-500 font-bold rounded-lg text-md hover:text-white hover:outline hover:outline-2 hover:outline-white transition-all">Save Changes</button>
        </form>
      </div>
    </section>
  )
}

export default Profile