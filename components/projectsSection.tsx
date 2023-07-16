import { useState } from "react";
import { ProjectProps } from "."
import ProjectDiv, { ProjectDivProps } from "./projectDiv";
import { Element } from "react-scroll";

type ProjectsSectionProps = {
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
    <Element name="projects" className="w-[95vw] py-12 m-2 flex flex-col items-center  min-h-[80vh]  lg:w-2/3">
      <div className="flex flex-row w-full px-12 py-4 text-sm  items-center">
      <h1 className="font-display ">Projects</h1>
      </div>
      <div className=" flex flex-row flex-wrap items-center justify-center sm:w-2/3">
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
          <div key={i.id} className="w-full m-2 flex flex-col items-center  min-h-[80vh] border rounded shadow-sm lg:w-2/3">
            <ProjectDiv {...i} />
          </div>
        ))
      : projectsArr.filter(i => i.stack.stackArr.includes(selectedStack)).map((i) => (
            <div key={i.id} className="w-[95vw] m-2 flex flex-col items-center  min-h-[80vh] border rounded shadow-sm lg:w-2/3">
              <ProjectDiv {...i} />
            </div>
          ))}
    </Element>
  )
}