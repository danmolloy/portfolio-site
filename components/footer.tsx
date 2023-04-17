import Link from "next/link"
import React from "react"

export default function Footer() {
  return (
    <div className="w-full h-20 dark:bg-zinc-900 flex flex-row justify-between px-2 items-center">
      <Link href="/contact" >
        <p className=" p-1 rounded hover:bg-emerald-50 dark:hover:bg-zinc-800 text-emerald-500">Contact</p>
      </Link>
      <p className="text-sm text-zinc-400">Designed and built by Daniel Molloy</p>
    </div>
  )
}