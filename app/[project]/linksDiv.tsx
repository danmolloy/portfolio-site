'use client'
import { motion } from "framer-motion"
import Link from "next/link"
import { FaGithub, FaLink } from "react-icons/fa"

export default function LinksDiv({ previewLink, githubLink,}: {
  previewLink?: string
  githubLink: string
}) {
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{ opacity: 1, }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, delay: .2 }}
    >
{previewLink && <Link  href={previewLink} className="flex flex-row hover:text-blue-300 hover:underline   w-32 items-center justify-start">
            <FaLink /><p className="mx-1 text-xs">Visit site</p>
          </Link>}
          <Link href={githubLink} className="flex flex-row hover:text-blue-300 hover:underline   w-32 items-center justify-start">
          <FaGithub /><p className="mx-1 text-xs">Github repo</p></Link>
    </motion.div>
  )
}