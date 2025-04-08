import { projectsArr, projectsBlurb } from "@/lib/projects";
import { FaGithub, FaLaptopCode, FaLink, FaNpm } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Project from "./projects/[project]/project";


export default function Projects() {

  return (
    <section data-testid="projects-section" className="w-[95vw] py-12 m-2 flex flex-col items-center  min-h-[80vh]  ">
      <div className="flex flex-col w-full px-12 py-4 text-sm items-center">
        <h2 className=" ">Projects</h2>
      </div>
      <div className="flex flex-col sm:flex-row flex-wrap w-full justify-center items-center">
        {projectsArr.map((i, index) => (
            <Project key={index} project={i} />))}
      </div>
    </section>
  )
}