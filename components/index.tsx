import Image from "next/image";
import ContactSection from "./contact";
import AboutSection from "./about";
import ProjectsSection from "./projects";
import { projectsArr } from "@/lib/projects";

export default function IndexSection() {

  let stackArray: any = [];
  projectsArr.forEach(i => (
    stackArray.push(...i.stack)
  ))
  stackArray = Array.from(new Set(stackArray));


  return (
    <div data-testid="index-section" className="dark:bg-zinc-900 dark:text-zinc-300  transition duration-1000  w-screen flex flex-col items-center">
      <div data-testid="hero-section" className="flex flex-col items-center h-screen justify-evenly sm:flex-row font-display w-screen">
        <div className="text-center my-3">
          <h1 className="text-3xl">
            Daniel Molloy
          </h1>
          <p className="text-xl">
            Web Developer / Musician
          </p>
        </div>
        <div className="rounded-lg overflow-hidden mx-4">
        <Image className=" " src={"/images/danHero.jpg"} alt="" width={833/2} height={768/2} />
        </div>
      </div>
      <div className="w-[95vw] m-2 flex flex-col items-center  min-h-[80vh] lg:w-2/3"> 
        <AboutSection />
      </div>
      <ProjectsSection stackArray={stackArray} projectsArr={projectsArr} />
      <div className="w-[95vw] m-2 flex flex-col items-center  min-h-[80vh] lg:w-2/3">
        <ContactSection />
      </div>
    </div>
  )
}