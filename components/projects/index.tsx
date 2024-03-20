import { useState } from "react";
import ProjectDiv from "./projectDiv";
import { Element } from "react-scroll";
import { ProjectDivProps, projectsBlurb } from "@/lib/projects";

export type ProjectsSectionProps = {
  stackArray: string[]
  projectsArr: ProjectDivProps[]
}

export default function ProjectsSection(props: ProjectsSectionProps) {
  const [selectedStack, setSelectedStack] = useState<string>("")
  const { stackArray, projectsArr } = props;

  const handleStackBtn = (lib: string) => {
    if (selectedStack === lib) {
      setSelectedStack("")
    } else {
      setSelectedStack(lib)
    }
  }

  return (
    <Element data-testid="projects-section" name="projects" className="w-[95vw] py-12 m-2 flex flex-col items-center  min-h-[80vh]  lg:w-2/3">
      <div className="flex flex-col w-full px-12 py-4 text-sm items-center">
      <h1 className="font-display ">Projects</h1>
      <p className="my-4 text-zinc-500">{projectsBlurb}</p>
      </div>
      <div data-testid="filters-arr" className="dark:bg-zinc-800 rounded flex flex-row flex-wrap items-center justify-center sm:w-2/3">
        {stackArray.map((i: string) => (
          <button onClick={() => handleStackBtn(i)} 
          className={selectedStack === i 
            ? "transition ease-out duration-300 text-white bg-blue-500 text-sm rounded m-1 " 
            : "transition ease-out duration-300 text-blue-500 text-sm rounded m-1 hover:text-blue-700 active:text-blue-800 "
          } key={i}>{i}</button>
        ))}
      </div>
      {selectedStack === ""
      ? projectsArr.map((i) => (
          <ProjectDiv key={i.id} {...i} />
        ))
      : projectsArr.filter(i => i.stack.includes(selectedStack)).map((i) => (
          <ProjectDiv key={i.id}  {...i} />
        ))}
    </Element>
  )
}