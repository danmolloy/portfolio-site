import Link from "next/link";
import AboutSection from "./about";
import ContactSection from "./contact"
import Projects from "./projects";
import { FaChevronDown, FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Hero from "./hero";
import { projectsArr } from "@/lib/projects";
import ProjectTile from "./projects/[project]/projectTile";


export default async function Page() {
  return (
    <div data-testid="index-section" className="w-screen flex flex-col items-center text-sm">
    <Hero />
     <div className="flex flex-col w-full  p-2">
      <div className="w-full border-b-2 border-black">

      <h1 className="font-medium text-lg">SELECTED WORK</h1>
      </div>
      {projectsArr.map((i, index) => (
        <ProjectTile key={i.id} project={i} index={index} />
      ))}
     </div>

    <section className="w-[95vw] m-2 flex flex-col items-center  min-h-[80vh] lg:w-2/3">
      <ContactSection />
    </section>
  </div>
  )
}