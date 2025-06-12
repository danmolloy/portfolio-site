'use client'
import { projectsArr } from "@/lib/projects";
import ProjectTile from "./projectTile";
import { useState } from "react";

export default function ProjectSection() {
  const [filter, setFilter] = useState<string|null>(null);

  return (
    <div className="flex flex-col w-full  p-2">
      <div className="w-full border-b-2 border-black flex flex-row justify-between ">
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
        <ProjectTile key={i.id} project={i} index={index} />
      ))
      : projectsArr.filter(i => i.filters.includes(filter)).map((i, index) => (
        <ProjectTile key={i.id} project={i} index={index} />
      ))
    }
      </div>
  )
}