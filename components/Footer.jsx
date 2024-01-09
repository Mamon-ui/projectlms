import { useRouter } from 'next/router'
import React from 'react'

const Footer = () => {

  const router = useRouter()

  if(router.pathname.includes('dashboard')){
    return
  }

  return (
    <>
      <footer className="w-full text-sm lg:text-xl text-center flex justify-center items-center gap-2 mt-auto bg-slate-50 text-gray-600">
          <h1 className="text-xl lg:text-3xl">&copy;</h1>Copyright 2022 : Developed and Managed by ARS Inventif
      </footer>
    </>
  )
}

export default Footer