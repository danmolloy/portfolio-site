import Link from "next/link"


export default function Header() {

  return (
    <div
      data-testid="header"
    className={" justify-between fixed backdrop-blur-sm z-30 h-14 w-screen top-0 flex flex-row  items-center  shadow-sm  text-black"}>
        <Link href={"/"} data-testid="home-btn" className='font-sans p-4 m-2 text-lg active:text-zinc-400 dark:text-blue-400 dark:hover:text-yellow-300' >
          Daniel Molloy
        </Link>
    </div>
  )
}