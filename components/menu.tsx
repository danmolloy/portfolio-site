import { Link, animateScroll as scroll } from 'react-scroll'
import { menuItems } from './layout/header'

export type MenuProps = {
  setShowMenu: (i: boolean) => void
  setShowHeader: (i: boolean) => void
  showMenu: boolean
}

export default function Menu(props: MenuProps) {
  const { showMenu, setShowMenu,setShowHeader } = props;
  return (
    <div data-testid="menu" className={showMenu 
      ? ' ease-out transition  duration-500 opacity-90 rounded-bl flex flex-col z-20 bg-white dark:bg-zinc-900   fixed w-screen  min-h-screen  right-0 shadow text-2xl' 
      : ' ease-in -translate-y-full transition duration-500 opacity-90 rounded-bl flex flex-col z-20 bg-white dark:bg-zinc-900 fixed w-screen  min-h-screen right-0 shadow text-2xl'}>
      <div className='flex flex-col w-full justify-evenly  font-display mt-16'>
      <button className='py-4 m-4 flex flex-col text-black dark:text-blue-400 hover:dark:text-yellow-300 items-center justify-center hover:text-orange-500 active:text-amber-400' onClick={() => {setShowMenu(false); scroll.scrollToTop({ smooth: "true", duration: 500 })}}>
          Home
        </button>
      {menuItems.map(i => (
        <Link onClick={() => {setShowMenu(false);  setTimeout(() => setShowHeader(false), 1000)}} activeClass="active" to={i.title.toLowerCase()} spy={true} smooth={true} offset={50} duration={500}  key={i.title}>
          <div className='hover:cursor-pointer dark:text-blue-400 hover:dark:text-yellow-300 py-4 m-4 flex flex-col text-black  items-center justify-center hover:text-orange-500 active:text-amber-400 '>
            {i.title}
          </div>
        </Link>
      ))}
      </div>
    </div>
  )
}