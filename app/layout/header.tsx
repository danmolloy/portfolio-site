import { BsMoon } from "react-icons/bs"

import ToggleSwitch from './toggle'
import Link from "next/link"


export default function Header() {

  return (
    <div
      data-testid="header"
    className={" dark:bg-gray-800 justify-between  transition duration-500 ease-out fixed  bg-white z-30 h-14 w-screen top-0 flex flex-row  items-center  shadow fill-zinc-300 text-black"}>
        <Link href={"/"} data-testid="home-btn" className='font-sans p-4 m-2 text-lg active:text-zinc-400 dark:text-blue-400 dark:hover:text-yellow-300' >
          Daniel Molloy
        </Link>
      
      <div className=' flex flex-row items-center justify-center mx-4'>
      <ToggleSwitch />
        <div className="dark:text-yellow-400 text-slate-200 transition-colors duration-300 ">
          <BsMoon />
        </div>
        </div>
    </div>
  )
}