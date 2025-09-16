'use client'
import { projectsArr } from "@/lib/projects";
import ProjectTile from "./projectTile";
import { useEffect, useRef, useState } from "react";
import ProjectTab from "./projectTab";
import { AnimatePresence } from "framer-motion";

export default function ProjectSection() {
  const [filter, setFilter] = useState<string|null>(null);
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [showProject, setShowProject] = useState<number|null>(null)

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver( ([entry]) => {
        if (entry.intersectionRatio >= .75) {
          setVisible(true);
        } 
      },
      {
        threshold: .75
      })

      observer.observe(ref.current);

      return () => {
      if (ref.current) observer.unobserve(ref.current);
      observer.disconnect();
    };

  }, [])

  return (
    <div className="flex flex-col w-full  p-2">
      <AnimatePresence>
      {showProject !== null && <ProjectTab closeTab={() => setShowProject(null)} project={projectsArr.find(i => i.id === showProject) || projectsArr[0]} />}
        </AnimatePresence>
      <div className="relative w-full flex flex-row justify-between ">
        <div ref={ref} className={`h-[2px] absolute ${visible ? "w-full" : "w-full"} left-0 transition-all duration-1000 delay-100 bg-black bottom-0`} />
      <h1 className="font-medium text-lg">SELECTED WORK</h1>
      <select onChange={(e) => {
        e.target.value === "" 
        ? setFilter(null)
        : setFilter(e.target.value)
      }} className="bg-light p-1">
        <option value={""}>Show all</option>
        <option value={'frontend'}>Frontend</option>
        <option value={'backend'}>Backend</option>
        <option value={'mobile'}>Mobile</option>
      </select>
      </div>
      {filter === null || filter === undefined
      ? projectsArr.map((i, index) => (
        <ProjectTile showProject={(id) => setShowProject(id)} key={i.id} project={i} index={index} />
      ))
      : projectsArr.filter(i => i.filters.includes(filter)).map((i, index) => (
        <ProjectTile showProject={(id) => setShowProject(id)} key={i.id} project={i} index={index} />
      ))
    }
      </div>
  )
}