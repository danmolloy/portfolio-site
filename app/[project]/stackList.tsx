'use client'
import { motion } from 'framer-motion'

export default function StackList({stack}: {stack: string[]}) {
  return (
    <div>
    {stack.map((i, index) => (
          <motion.p 
           initial={{ opacity: 0,  }}
              whileInView={{ opacity: 1, }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.2, delay:   (index * .15) + .2 }}
          key={index} className="text-xs">{i}</motion.p>
        ))}
        </div>
  )
}