import React from "react"
import { animateScroll as scroll } from 'react-scroll'


export default function Footer() {
  return (
    <div className="w-full h-20 dark:bg-zinc-900 flex sm:flex-row flex-col sm:justify-between p-2 items-center border-t">
      <button className='hover:underline font-display text-sm font-light hover:cursor-pointer active:text-zinc-400 m-1 ' onClick={() => scroll.scrollToTop({ smooth: true, duration: 750 })}>
        Back to top
      </button>
      <p className="text-sm text-zinc-400 font-display">Designed and built by Daniel Molloy</p>

    </div>
  )
}