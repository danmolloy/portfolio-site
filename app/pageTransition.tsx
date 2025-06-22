'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import TransitionOverlay from './transitionOverlay'

export default function TransitionLink({
  href,
  children,
  bgColor
}: {
  href: string
  children: React.ReactNode
  bgColor: string
}) {
  const router = useRouter()
  const [isActive, setIsActive] = useState(false)

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault()
    setIsActive(true)

    // Wait for the animation to complete
    setTimeout(() => {
      router.push(href)
    }, 800) // Should match duration in TransitionOverlay
  }

  return (
    <>
      <a onClick={handleClick} className="cursor-pointer">
        {children}
      </a>
      <TransitionOverlay bgColor={bgColor} isActive={isActive} />
    </>
  )
}