import { useEffect, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsSun, BsMoon } from "react-icons/bs"

import MenuIcon from '../menuIcon'
import { Link, animateScroll as scroll } from 'react-scroll'
import ToggleSwitch from './toggle'

export const menuItems: {title: string}[] = [
  {
    title: "About",
  },
  {
    title: "Projects",
  },
  {
    title: "Contact",
  },
]

export type HeaderProps = {
  showMenu: boolean
  setShowMenu: () => void
  setShowHeader: (arg: boolean) => void
  showHeader: boolean
}

export default function Header(props: HeaderProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { showMenu, setShowMenu, setShowHeader, showHeader } = props;
  //const [showHeader, setShowHeader] = useState(true)
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

  useEffect(() => {
    function handleScroll() {
      const currentPosition = window.scrollY;
      if (currentPosition > scrollPosition + 25) {
        setScrollPosition(currentPosition);
        setShowHeader(false)
      } else if (currentPosition < scrollPosition - 50) {
        setScrollPosition(currentPosition);
        setShowHeader(true)
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);


  return (
    <div
      data-testid="header"
    className={!showHeader && scrollPosition < 750
      ? "dark:bg-gray-800 justify-between font-display -translate-y-full transition duration-1000  fixed z-30 h-14 w-screen top-0 flex flex-row-reverse md:flex-row items-center fill-zinc-300 text-zinc-100"  
      : !showHeader
      ? "dark:bg-gray-800 justify-between font-display -translate-y-full transition duration-500 bg-white fixed z-30 h-14 w-screen top-0 flex flex-row-reverse md:flex-row items-center  shadow fill-zinc-300 text-black"  
      : "dark:bg-gray-800 justify-between font-display transition duration-500 ease-out fixed  bg-white z-30 h-14 w-screen top-0 flex flex-row-reverse md:flex-row  items-center  shadow fill-zinc-300 text-black"}>
        <div className='hidden md:flex w-screen  flex-row  justify-end pr-4'>
        <button data-testid="home-btn" className=' p-4 m-2 text-lg font-light hover:cursor-pointer active:text-zinc-400 dark:text-blue-400 dark:hover:text-yellow-300' onClick={() => scroll.scrollToTop({ smooth: true, duration: 500 })}>
          Home
        </button>
      {menuItems.map(i => (
        <Link onClick={() => setTimeout(() => setShowHeader(false), 750)} activeClass="active" to={i.title.toLowerCase()} spy={true} smooth={true} offset={50} duration={500}  key={i.title} className='dark:text-blue-400 dark:hover:text-yellow-300 p-4 m-2 text-lg font-light hover:cursor-pointer active:text-zinc-400'>
          <p>{i.title}</p>
        </Link>
      ))}
      </div>
      <div className=' flex flex-row items-center justify-center mx-4'>
      <ToggleSwitch setToggled={() => handleToggle()} toggled={darkMode} label='' />
        <div className="dark:text-yellow-400 text-slate-200 transition-colors duration-300 ">
          <BsMoon />
        </div>
        </div>
      <MenuIcon setShowMenu={() => setShowMenu()} showMenu={showMenu}/>
    </div>
  )
}