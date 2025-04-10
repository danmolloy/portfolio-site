'use client'
import { ProjectDivProps } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FaApple, FaGithub, FaLink, FaNpm } from "react-icons/fa";

export default function Project(props: {
  project: ProjectDivProps
}) {
  const { project } = props;
  const [selectedTab, setSelectedTab] = useState<"Tech"|"UX">("Tech");
  const [imgIndex, setImgIndex] = useState(0);

  
  return (
    <div key={project.id} data-testid={`project-${project.id}`} className="flex flex-col  w-full  my-4 border border-slate-400 rounded-lg ">
    <div className="flex flex-row justify-between">
        <h2 className="m-3 text-2xl ">{project.title}</h2>
        <div className="flex flex-col md:flex-row m-1">
        {project.npmLink &&<Link href={project.npmLink} className="flex flex-row hover:text-blue-600 hover:underline   w-32 items-center justify-start">
          <FaNpm size={24} /><p className="m-1 text-sm">NPM</p>
        </Link>}
        {project.appStoreLink &&<Link href={project.appStoreLink} className="flex flex-row hover:text-blue-600 hover:underline   w-32 items-center justify-start">
          <FaApple /><p className="m-1 text-sm">App Store</p>
        </Link>}
          <Link href={project.githubLink} className="flex flex-row hover:text-blue-600 hover:underline   w-32 items-center justify-start">
          <FaGithub /><p className="m-1 text-sm">Github</p></Link>
          {project.previewLink && <Link  href={project.previewLink} className="flex flex-row hover:text-blue-600 hover:underline   w-32 items-center justify-start">
            <FaLink /><p className="m-1 text-sm">Live Example</p>
          </Link>}
        </div>
        </div>
    <div className="flex flex-col md:flex-row justify-evenly">
      
      <div className="md:w-1/2 flex flex-col ">
        
        <div className="flex flex-row flex-wrap">
          {project.stack?.map((j, index) => (
            <div key={index} className="m-1 px-1 rounded-lg bg-blue-50 text-blue-950 dark:bg-slate-700 dark:text-blue-100">
              <p>{j}</p>
            </div>
          ))}
        </div>
        <p className="m-3">{project.blurb}</p>
      </div>
      <div className="md:w-1/2 p-2 relative flex flex-col items-center justify-center">
          <Image  className=" shadow m-2 rounded-md overflow-hidden" src={project.images[imgIndex].imgSrc} height={Number(project.images[imgIndex].imgHeight)/2} width={Number(project.images[imgIndex].imgWidth)/2}  alt={project.images[imgIndex].imgAlt} />
          <p className="m-1 p-1 ">{project.images[imgIndex].imgAlt}</p>
        {project.images.length > 1 && <div className="flex flex-row w-full items-center justify-center mb-4">
          <button onClick={() => setImgIndex(imgIndex - 1)} disabled={imgIndex === 0} className="text-lg p-2 mx-4 border rounded text-center disabled:opacity-35">
            <BsChevronLeft />
          </button>
          <button onClick={() => setImgIndex(imgIndex + 1)} disabled={imgIndex === project.images.length - 1} className="text-lg p-2 mx-4 border rounded text-center disabled:opacity-35">
          <BsChevronRight />
          </button>
        </div>}
      </div>
    </div>
    {(project.techFeatures || project.userFeatures )&& 
    <div>
    <div className="flex flex-row items-center justify-center">
      <button onClick={() => setSelectedTab("Tech")} className={`border-b p-2 m-2 ${selectedTab === "Tech" ? "text-blue-600 border-b-2 border-blue-600" : "text-slate-400"}`} >Technical Features</button>
      <button onClick={() => setSelectedTab("UX")} className={`border-b p-2 m-2 ${selectedTab === "UX" ? "text-blue-600 border-b-2 border-blue-600" : "text-slate-400"}`} >User Experience</button>
    </div>
   <div className="flex flex-col md:flex-row flex-wrap justify-center">
    {selectedTab === "Tech" ? project.techFeatures?.map(j => (
      <div className="p-2 md:w-[25vw]  rounded m-1" key={j.id}>
        <h3 className="font-semibold my-1">{j.key}</h3>
        <p className="">{j.value}</p>
      </div>
    )) 
    : project.userFeatures?.map(j => (
      <div className="p-2 md:w-[25vw]  rounded m-1" key={j.id}>
        <h3 className="font-semibold my-1">{j.key}</h3>
        <p className="">{j.value}</p>
      </div>
    ))}
    </div>
  </div>}
</div>
  )
}