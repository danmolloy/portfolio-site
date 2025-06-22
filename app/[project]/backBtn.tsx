'use client'
import { useRouter } from "next/navigation"
import { useState } from "react"
import { FaArrowLeft } from "react-icons/fa"

export default function BackButton() {
  const router = useRouter()
  const [isActive, setIsActive] = useState(false)

  const handleBack = () => {
    setIsActive(true)

    setTimeout(() => {
      router.back()
    }, 1000) 
  }

  return (
    <button className="flex flex-row items-center text-xs mb-2" onClick={() => handleBack()}>
      <FaArrowLeft />
      <p className="ml-1 ">BACK</p>
    </button>
  )
}