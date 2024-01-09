import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <>
      <main className="w-screen h-full p-10 flex flex-col justify-center items-center gap-4 lg:gap-10 bg-slate-50">
        <h1 className="text-4xl text-center text-purple-600">Everything in One Platform</h1>
        <h3 className="text-2xl font-bold uppercase">Login</h3>
        <section className="w-11/12 lg:w-1/2 lg:h-96 border-t-2 bg-white rounded-3xl gap-8 p-4 lg:p-12 m-10 shadow-md shadow-slate-400 flex flex-col lg:flex-row justify-evenly items-center">
          <Link href={'/login/teacher'} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-purple-600 transition duration-300 ease-out border-2 border-purple-600 rounded-full shadow-md group">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-600 group-hover:translate-x-0 ease">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="absolute text-xl flex items-center justify-center w-full h-full text-black font-bold transition-all duration-300 transform group-hover:translate-x-full ease">Teacher</span>
            <span className="relative text-xl invisible">Teacher</span>
          </Link>
          <Link href={'/login/student'} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-purple-600 transition duration-300 ease-out border-2 border-purple-600 rounded-full shadow-md group">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-600 group-hover:translate-x-0 ease">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="absolute text-xl flex items-center justify-center w-full h-full text-black font-bold transition-all duration-300 transform group-hover:translate-x-full ease">Student</span>
            <span className="relative text-xl invisible">Student</span>
          </Link>
          <Link href={'/login/parent'} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-purple-600 transition duration-300 ease-out border-2 border-purple-600 rounded-full shadow-md group">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-600 group-hover:translate-x-0 ease">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="absolute text-xl flex items-center justify-center w-full h-full text-black font-bold transition-all duration-300 transform group-hover:translate-x-full ease">Parent</span>
            <span className="relative text-xl invisible">Parent</span>
          </Link>
        </section>
        
      </main>
    </>
  )
}

export default Login