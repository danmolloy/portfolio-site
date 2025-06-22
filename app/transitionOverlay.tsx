'use client'

import { motion } from 'framer-motion'

export default function TransitionOverlay({ isActive, bgColor }: { isActive: boolean, bgColor: string }) {
  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: isActive ? 0 : '100%' }}
      transition={{ duration: 0.5, ease: [0.77, 0, 0.175, 1] }}
      className={`fixed top-0 left-0 w-full h-full ${bgColor} z-20 pointer-events-none`}
    />
  )
}