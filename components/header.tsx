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
    <div className="dark:bg-zinc-900 flex flex-row justify-between w-full h-16 border-b shadow-sm items-center px-2">
      <h1 className="">DM</h1>
      <button onClick={() => handleToggle()}>
      <div className="dark:flex hidden text-emerald-500">
          <BsSun />
        </div>
        <div className="dark:hidden">
          <BsMoon />
        </div>
      </button>
    </div>
  )
}