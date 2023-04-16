import Link from "next/link"
import React from "react"

export default function Footer() {
  return (
    <div className="w-full h-16 flex flex-row justify-between px-2 items-center">
      <Link href="/contact" >
        <p className=" p-1 rounded hover:bg-slate-50">Contact</p>
      </Link>
      <p className="text-sm text-zinc-500">Designed and built by Daniel Molloy</p>
    </div>
  )
}