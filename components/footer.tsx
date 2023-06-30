import React from "react"
import { animateScroll as scroll } from 'react-scroll'


export default function Footer() {
  return (
    <div className="w-full h-20 dark:bg-zinc-900 flex flex-row justify-between px-2 items-center">
      <p className="text-sm text-zinc-400 font-display">Designed and built by Daniel Molloy</p>

      <button className='hover:underline font-display text-sm font-light hover:cursor-pointer active:text-zinc-400' onClick={() => scroll.scrollToTop({ smooth: true, duration: 750 })}>
        Back to top
      </button>
    </div>
  )
}