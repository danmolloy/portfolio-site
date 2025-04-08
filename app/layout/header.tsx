import Link from "next/link"
import ToggleSwitch from "./toggle"


export default function Header() {

  return (
    <div
      data-testid="header"
    className={" justify-between fixed backdrop-blur-sm z-30 h-14 w-screen top-0 flex flex-row  items-center  shadow-sm  border-b border-slate-400"}>
        <Link href={"/"} data-testid="home-btn" className=' p-4 m-2 text-lg active:text-zinc-400  ' >
          Daniel Molloy
        </Link>
        <ToggleSwitch />
    </div>
  )
}