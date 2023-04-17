import Link from "next/link"
import React from "react"
import { BsSun, BsMoon } from "react-icons/bs"

export default function Header() {

  const handleToggle = () => {
    if (!localStorage.theme){
      document.documentElement.classList.add('dark')
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.removeItem("theme")
    }
    
  }

  return (
    <div className="dark:bg-zinc-900 flex flex-row justify-between w-full h-16 border-b dark:border-b-zinc-700 items-center px-4">
      <Link href="/">
        <h1 className="text-emerald-500 dark:hover:bg-zinc-800 hover:bg-emerald-50 p-1 rounded">DM</h1>
      </Link>
      <button onClick={() => handleToggle()}>
      <div className="dark:flex hidden text-emerald-500 hover:text-emerald-400 p-2 rounded-full">
          <BsSun />
        </div>
        <div className="dark:hidden text-emerald-500 hover:text-emerald-400 p-2 rounded-full">
          <BsMoon />
        </div>
      </button>
    </div>
  )
}