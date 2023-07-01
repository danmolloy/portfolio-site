import Image from "next/image";
import IndexDiv from "./indexDiv";
import { useState } from "react";
import { FaLaptopCode, FaLink } from "react-icons/fa"

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
      <div className="w-full flex flex-row  mb-6 ">
        <button className={selectedTab === 0 ? "custom-border-gradient border-b border-blue-500  py-2 my-2 mx-4 hover:text-zinc-400 active:text-zinc-500 " : "py-2 my-2 mx-4 hover:text-zinc-400 active:text-zinc-500"} onClick={() => setSelectedTab(0)}>Overview</button>
        <button className={selectedTab === 1 ? "custom-border-gradient border-b border-blue-500  py-2 my-2 mx-4 hover:text-zinc-400 active:text-zinc-500 " : "py-2 my-2 mx-4 hover:text-zinc-400 active:text-zinc-500" } onClick={() => setSelectedTab(1)}>Features</button>
        <button className={selectedTab === 2 ? "custom-border-gradient border-b border-blue-500  py-2 my-2 mx-4 hover:text-zinc-400 active:text-zinc-500" : "py-2 my-2 mx-4 hover:text-zinc-400 active:text-zinc-500"} onClick={() => setSelectedTab(2)}>Stack</button>
      </div>
      {selectedTab === 0 
      ? <div className="flex flex-col lg:flex-row items-center lg:justify-between w-full text-start lg:items-start">
        <div className="lg:w-full flex flex-col ">
        <div className="text-blue-600 flex flex-row w-full sm:w-1/2 items-center justify-evenly text-xs ">
        <a href={githubLink} target="_blank" className="hover:underline flex flex-row items-center">
          <FaLaptopCode />
          <p className="ml-1">
            View GitHub
          </p>
        </a>
        <a href={previewLink} target="_blank" className="hover:underline flex flex-row items-center">
          <FaLink />
          <p className="ml-1">
            Live Example
          </p>
        </a>
      </div>
        <div className=" py-4  text-zinc-500">
          <p>{overview.blurb}</p>
        </div>
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
        <div className=" py-4 text-zinc-500  flex flex-row lg:flex-col flex-wrap items-center justify-center">
          {stack.stackArr.map(i => (
            <p className="m-2  text-start"  key={i}>
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