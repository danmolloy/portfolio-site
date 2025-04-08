'use client'
import { useEffect, useState } from "react"
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

export default function ToggleSwitch() {

  const [darkMode, setDarkMode] = useState<boolean>(false)

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setDarkMode(true)
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.removeItem("theme")
      setDarkMode(false)
    }
  }, [])

  const handleToggle = () => {
    if (!localStorage.theme || darkMode === false){
      document.documentElement.classList.add('dark')
      localStorage.setItem("theme", "dark")
      setDarkMode(true)
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.removeItem("theme")
      setDarkMode(false)
    }
    
  }

  return (
    <div data-testid="toggle-switch" onClick={() => handleToggle()} className="hover:cursor-pointer flex flex-row flex-wrap items-center  my-2 mx-4">
    <div className={darkMode ? "bg-blue-500 overflow-y-visible w-8 h-4 flex flex-row items-center  rounded-full transition duration-300" : " overflow-y-visible w-8 h-4 flex flex-row items-center rounded-full bg-zinc-50 border"}>
      <div className={darkMode ? "bg-zinc-100 border shadow w-5 h-5 rounded-full translate-x-full transition-all duration-300" : " -ml-2 bg-zinc-100 border shadow w-5 h-5 rounded-full transition-all duration-500"} />
    </div>
     <div className={"m-3 text-yellow-800"}>
      {darkMode 
      ? <IoMoonOutline />
      : <IoSunnyOutline />}
     </div>
     </div>
  )
}