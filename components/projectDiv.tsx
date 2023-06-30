import Image from "next/image";
import IndexDiv from "./indexDiv";
import { useState } from "react";

export type ProjectDivProps = {
  id: number
  title: string
  githubLink: string
  previewLink: string
  overview: {
    blurb: string
    imgSrc: string
    imgWidth: string
    imgHeight: string
    imgAlt: string
  },
  features: {
    featuresArr: string[]
    imgSrc: string
    imgWidth: string
    imgHeight: string
    imgAlt: string
  }
  stack: {
    stackArr: string[]
    imgSrc: string
    imgWidth: string
    imgHeight: string
    imgAlt: string
  }
}

export default function ProjectDiv(props: ProjectDivProps) {
  const [selectedTab, setSelectedTab] = useState<number>(0)
  const { title, overview, features, stack, githubLink, previewLink } = props;
  return (
    <IndexDiv title={title}>

      <div className="text-blue-600 flex flex-row w-1/2 items-center justify-evenly text-xs ">
        <a href={githubLink} target="_blank" className="hover:underline ">GitHub Repo</a>
        <a href={previewLink} target="_blank" className="hover:underline">Live Example</a>
      </div>
      <div className="w-full flex flex-row  mb-6 ">
        <button className={selectedTab === 0 ? " border-b border-blue-500  py-2 px-2 m-2 " : "py-2 px-2 m-2"} onClick={() => setSelectedTab(0)}>Overview</button>
        <button className={selectedTab === 1 ? " border-b border-blue-500  py-2 px-2 m-2" : "py-2 px-2 m-2" } onClick={() => setSelectedTab(1)}>Features</button>
        <button className={selectedTab === 2 ? " border-b border-blue-500  py-2 px-2 m-2" : "py-2 px-2 m-2"} onClick={() => setSelectedTab(2)}>Stack</button>
      </div>
      {selectedTab === 0 
      ? <div className="flex flex-col lg:flex-row items-center lg:justify-between w-full text-start">
        <div className=" py-4 lg:w-1/3 text-zinc-500">
          <p>{overview.blurb}</p>
        </div>
        <div className="border  rounded overflow-hidden  py-4">
        <Image className="py-4" alt={overview.imgAlt} src={overview.imgSrc} width={Number(overview.imgWidth)/4} height={Number(overview.imgHeight)/4} />
        </div>
      </div>
      : selectedTab === 1
      ? <div className="flex flex-col lg:flex-row lg:justify-between items-center w-full text-start">
        <div className=" py-4 text-zinc-500">
          {features.featuresArr.map(i => (
          <p className="mb-2" key={i}>{i}</p>
        ))}
        </div>
        <div className="border  rounded overflow-hidden  py-4">
          <Image className="py-4" alt={features.imgAlt} src={features.imgSrc} width={Number(features.imgWidth)/4} height={Number(features.imgHeight)/4} />
        </div>
      </div>
      : <div className="flex  lg:flex-row lg:justify-between flex-col w-full items-center">
        <div className=" py-4 text-zinc-500">
          {stack.stackArr.map(i => (
            <p className="mb-2  text-start"  key={i}>
              {i}
            </p>
          ))}
        </div>
        <div className="border  rounded overflow-hidden  py-4">
        <Image className=" " alt={stack.imgAlt} src={stack.imgSrc} width={Number(stack.imgWidth)/4} height={Number(stack.imgHeight)/4} />
        </div>
      </div>}
    </IndexDiv>
  )
}