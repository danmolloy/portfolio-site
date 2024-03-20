import { useState } from "react";
import { ProjectDivProps } from "@/lib/projects";
import ProjectHeader from "./header";
import ProjectImages from "./images";

export default function ProjectDiv(props: ProjectDivProps) {
  const [selectedTab, setSelectedTab] = useState<number>(0)
  const { title, overview, features, stack, githubLink, previewLink, images } = props;

  return (
    <div data-testid="project-div" className="flex flex-col justify-center items-center my-8 border dark:border-zinc-700 p-4 rounded shadow w-full">
      <ProjectHeader {...{title, selectedTab, setSelectedTab, githubLink, previewLink}} />
      <div data-testid="project-text" className="transition duration-700">
      {selectedTab === 0 
      ? <div data-testid="overview-tab" className="w-full h-[50vh] md:px-8 md:h-[40vh] overflow-scroll">
        <div>
          {overview.map((i, index) => (
            <p className="pb-4" key={index}>{i}</p>
          ))}
          </div>
        </div>
      : <div data-testid="features-tab" className=" h-[50vh]  items-center md:px-8 md:h-[30vh]">
          {features.map(i => (
          <p className="" key={i}>{`- ${i}`}</p>
        ))}
        <div className="mt-4">
          {stack.map(i => (
            <p className="my-2" key={i}>
              {i}
            </p>
          ))}
        </div>
        </div>}
      </div>
      <ProjectImages images={images} />
      </div>
      )
}