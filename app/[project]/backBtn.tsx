'use client'
import { useRouter } from "next/navigation"
import { FaArrowLeft } from "react-icons/fa"

export default function BackButton() {
  const router = useRouter()

  return (
    <button className="flex flex-row items-center text-xs mb-2" onClick={() => router.back()}>
      <FaArrowLeft />
      <p className="ml-1 ">BACK</p>
    </button>
  )
}