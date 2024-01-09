import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { VscAccount } from 'react-icons/vsc'
import { useRouter } from 'next/router'

const MenuBtn = ({menu, showMenu}) => {
  return (
    <>
      <div onClick={() => showMenu(!menu)} className={`lg:hidden absolute top-0 translate-y-1/2 left-2 w-8 h-8 flex flex-col group justify-evenly items-start p-1 border-2 border-solid border-black rounded-md bg-white z-10 ${menu ? "left-1/3" : ""}`}>
        <span className="h-[0.125rem] rounded-sm w-4/12 bg-black transition-all group-hover:w-full group-hover:rotate-45 group-hover:translate-y-[200%]"></span>
        <span className="h-[0.125rem] rounded-sm w-7/12 bg-black transition-all group-hover:hidden"></span>
        <span className="h-[0.125rem] rounded-sm w-10/12 bg-black transition-all group-hover:w-full group-hover:-rotate-45 group-hover:-translate-y-[150%]"></span>
      </div>
    </>
  )
}

const Menu = ({className}) => {
  return (
    <>
      <nav className={className}>
        <ul className="flex flex-col bg-black gap-8 text-xl">
          <Link href="/login"><li className="text-2xl"><abbr title="Login"><VscAccount /></abbr></li></Link>
          <Link href="/"><li className="relative after:w-0 after:h-1 after:absolute after:bottom-0 after:left-0 after:translate-y-full after:bg-purple-600 hover:after:w-full after:transition-all after:duration-700 after:ease-in-out transition-all hover:font-medium">Home</li></Link>
          <Link href="/contact"><li className="relative after:w-0 after:h-1 after:absolute after:bottom-0 after:left-0 after:translate-y-full after:bg-purple-600 hover:after:w-full after:transition-all after:duration-700 after:ease-in-out transition-all hover:font-medium">Contact Us</li></Link>
          <Link href="/about"><li className="relative after:w-0 after:h-1 after:absolute after:bottom-0 after:left-0 after:translate-y-full after:bg-purple-600 hover:after:w-full after:transition-all after:duration-700 after:ease-in-out transition-all hover:font-medium">About Us</li></Link>
        </ul>
      </nav>
    </>
  )
}

const Header = () => {

  const router = useRouter()

  
  const [menu, showMenu] = useState(false)
  
  if (router.pathname.includes('dashboard')) {
    return (
      <>
      </>
    )
  }
  // setTimeout(() => {
  //   showMenu(false)
  // }, 5000)

  return (
    <>

      {/* MOBILE HEADER */}
      <header className="z-50 lg:hidden bg-white h-16 w-screen px-2 relative">
        <MenuBtn menu={menu} showMenu={showMenu} />
        <h1 className="font-bold text-black text-2xl text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">ARS Inventif</h1>
        <Menu className={`h-screen absolute left-0 top-0  transition-all ${menu ? 'translate-x-0' : '-translate-x-full'} bg-black text-white p-8`} />
      </header>

      {/* DESKTOP HEADER */}
      <header className="z-50 hidden lg:visible lg:flex items-end mb-1 py-4 shadow-lg shadow-gray justify-around h-fit">
        <div className="text-2xl lg:text-4xl  font-medium flex justify-center items-end ">
          <Image src={'/PNG.png'} width={130} height={100} alt="ARS Inventif"/>
          <span>ARS Inventif</span>
        </div>
        <nav className="h-full">
          <ul className="flex gap-12 text-xl">
            <Link href="/"><li className="relative after:w-0 after:h-1 after:absolute after:bottom-0 after:left-0 after:translate-y-full after:bg-purple-600 hover:after:w-full after:transition-all after:duration-700 after:ease-in-out transition-all hover:font-medium">Home</li></Link>
            <Link href="/contact"><li className="relative after:w-0 after:h-1 after:absolute after:bottom-0 after:left-0 after:translate-y-full after:bg-purple-600 hover:after:w-full after:transition-all after:duration-700 after:ease-in-out transition-all hover:font-medium">Contact Us</li></Link>
            <Link href="/about"><li className="relative after:w-0 after:h-1 after:absolute after:bottom-0 after:left-0 after:translate-y-full after:bg-purple-600 hover:after:w-full after:transition-all after:duration-700 after:ease-in-out transition-all hover:font-medium">About Us</li></Link>
            <Link href="/login"><li className="text-2xl"><abbr title="Login"><VscAccount /></abbr></li></Link>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header