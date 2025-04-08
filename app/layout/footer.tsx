'use client'
import Link from "next/link"
import React from "react"


export default function Footer() {
  return (
    <div data-testid="footer" className="w-full z-10 h-20  flex sm:flex-row flex-col sm:justify-between p-2 items-center border-t  dark:border-t-zinc-600">
      <Link href="/" className=' hover:underline text-sm font-light hover:cursor-pointer active:text-zinc-400 m-1 ' >
        Back to top
      </Link>
      <p className="text-sm  text-zinc-800 dark:text-zinc-400">Designed and built by Daniel Molloy</p>
    </div>
  )
}