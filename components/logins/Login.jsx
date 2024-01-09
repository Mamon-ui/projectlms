import React, { useRef, useState } from 'react'
import { HiUser, HiEye } from 'react-icons/hi2'
import { HiEyeOff } from 'react-icons/hi'
import { RiLockPasswordFill } from 'react-icons/ri'
import { FaUserTie, FaUserGraduate, FaUsers } from 'react-icons/fa'
import Image from 'next/image'

import axios from 'axios'
import { useAuth } from '../../authContext'
import { useRouter } from 'next/router'

const Login = ({ type }) => {

  const { user, setUser } = useAuth()

  const [password, setPassword] = useState(true)

  const useridRef = useRef(null)
  const passwordRef = useRef(null)

  const router = useRouter()

  const icon = {
    parent: <FaUsers className="text-2xl lg:text-4xl  scale-125 p-1 border border-solid border-black rounded-full" />,
    student: <FaUserGraduate className="text-2xl lg:text-4xl  scale-125 p-1 border border-solid border-black rounded-full" />,
    teacher: <FaUserTie className="text-2xl lg:text-4xl  scale-125 p-1 border border-solid border-black rounded-full" />
  }

  const submitUser = async (e) => {
    e.preventDefault()

    const currentUser = {
      type: type,
      userid: useridRef.current.value,
      password: passwordRef.current.value
    }

    // const url = `http://192.168.29.57:3000/api/auth?userid=${currentUser.userid}&password=${currentUser.password}&type=${currentUser.type}`
    const url = `/api/auth?userid=${currentUser.userid}&password=${currentUser.password}&type=${currentUser.type}`

    const auth = await axios.get(url).then(response => response.data).catch(error => error.response.data)

    // const auth = {
    //   userid: "arsinventif",
    //   email: "arsinventif@gmail.com",
    //   password: "password",
    //   type: "teacher",
    //   fullName: "ARS Inventif",
    //   subject: "Computer Science",
    //   experience: "7 years",
    //   address: "Kolkata",
    //   qualification: "M. Tech.",
    //   gender: "Male",
    // }

    if(!auth["Error"]){
      setUser(auth)
      console.log(auth)
      for(const key in auth){
        localStorage.setItem(key, auth[key])
      }

      router.push('/dashboard')
    } else {
      alert("incorrect credentials")
    }
  }

  return (
    <>
      <main className="w-screen bg-white grid place-items-center relative bg-cover bg-no-repeat">
        <section className="flex w-11/12 overflow-hidden shadow-slate-400 rounded-2xl shadow-xl border-t-[1px] border-gray-100/50 my-16">
          <div className="hidden lg:grid bg-white place-items-center w-1/2">
            <Image src={'/Apna.png'} width={500} height={500} alt="Apna Sikshalaya" />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6 p-8 lg:gap-16 items-center bg-black/10 backdrop-blur-lg">
            {icon[type]}
            <h1 className="capitalize text-3xl text-black font-bold">{type}&apos;s Login</h1>
            <form onSubmit={submitUser} className="flex flex-col items-center justify-center gap-10">
              <div className="w-5/6 md:w-full p-4 rounded-[50px] flex justify-start items-center gap-2 bg-white focus-within:scale-x-105 transition-all">
                <HiUser className="text-slate-500 text-xl" />
                <input ref={useridRef} className="outline-none bg-inherit w-2/3  mr-auto md:w-auto" type="text" name="userid" id="userid" placeholder='user id' required />
              </div>
              <div className="w-5/6 md:w-full p-4 rounded-[50px] flex justify-start items-center gap-2 bg-white focus-within:scale-x-105 transition-all">
                <RiLockPasswordFill className="text-slate-500 text-xl" />
                <input ref={passwordRef} className="outline-none bg-inherit w-2/3  mr-auto md:w-auto" type={password ? "password" : "text"} name="password" id="password" placeholder='password' required />
                <span className="cursor-pointer w-fit bg-white" onClick={() => { setPassword(!password) }}>
                  {password ? <HiEye className="text-slate-500 text-xl" /> : <HiEyeOff className="text-slate-500 text-xl" />}
                </span>
              </div>
              <button className="bg-black py-2 w-1/2 text-purple-500 font-bold rounded-lg text-2xl hover:text-white hover:outline hover:outline-2 hover:outline-white transition-all">LOGIN</button>
              <span className="cursor-pointer hover:font-bold text-purple-600 lg:text-white transition-all">Forgot username or password?</span>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}

export default Login