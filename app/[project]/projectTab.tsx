'use client'

import { useState } from 'react'
import { ProjectDivProps } from "@/lib/projects"
import ProjectCard from "./projectCard"
import { FaArrowLeft } from "react-icons/fa"
import { motion, AnimatePresence } from 'framer-motion'

const slideVariants = {
  hidden: { y: "100%", opacity: .5 },
  visible: { y: 1, opacity: 1, transition: { duration: 0.4, ease: "easeInOut" } },
  exit: { y: "100%", opacity: 1, transition: { duration: 0.4, ease: "easeInOut" } },
}

export default function ProjectTab({
  project,
  closeTab,
}: {
  project: ProjectDivProps
  closeTab: () => void
}) {
  const [isClosing, setIsClosing] = useState(false)

  return (
    <AnimatePresence>
      {!isClosing && (
        <motion.div
          key="project-tab"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={slideVariants}
          onAnimationComplete={(definition: string) => {
            if (definition === "exit") {
              closeTab()
            }
          }}
          className="w-screen h-screen top-0 left-0 z-20 fixed overflow-y-scroll bg-dark text-light shadow-[0_-20px_40px_rgba(255,255,255,0.9)]"
        >
          <div className="w-screen flex flex-col px-4">
            <div className="mt-16">
              <button
                className="flex flex-row items-center text-xs mb-2"
                onClick={() => setIsClosing(true)}
              >
                <FaArrowLeft />
                <p className="ml-1">BACK</p>
              </button>
              <h1 className="font-bold">
                {project.title.toLocaleUpperCase()}
              </h1>
            </div>
            <ProjectCard project={project} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}