'use client'

import { ProjectDivProps } from "@/lib/projects"

import Image from "next/image"
import Link from "next/link"
import { FaApple, FaGithub, FaGlobe, FaLink } from "react-icons/fa"

export default function ProjectCard({project}: {project: ProjectDivProps}) {
  return (
    <div >
          
          <div className="relative flex flex-row justify-between my-12 text-sm">
            <div>
            <h2 className="text-sm font-semibold mb-4">STACK</h2>
             <div>
    {project.stack.map((i, index) => (
          <p 
           
          key={index} className="text-xs">{i}</p>
        ))}
        </div>
            </div>
            <div className="">
              <h2 className="text-sm font-semibold mb-4">LINKS</h2>
{project.links.preview && <Link  href={project.links.preview} className="flex flex-row hover:text-blue-300 hover:underline   w-32 items-center justify-start">
            <FaLink /><p className="mx-1 text-xs">Visit site</p>
          </Link>}
          {project.links.github && <Link href={project.links.github} target="_blank" className="flex flex-row hover:text-blue-300 hover:underline   w-32 items-center justify-start">
          <FaGithub /><p className="mx-1 text-xs">Github repo</p></Link>
          }
          {project.links.appStore && <Link href={project.links.appStore} target="_blank" className="flex flex-row hover:text-blue-300 hover:underline   w-32 items-center justify-start">
          <FaApple /><p className="mx-1 text-xs">App Store</p></Link>
          }
          {project.links.website && <Link href={project.links.website} target="_blank" className="flex flex-row hover:text-blue-300 hover:underline   w-32 items-center justify-start">
          <FaGlobe /><p className="mx-1 text-xs">Website</p></Link>
          }
    </div>           
          </div>

          <div className="h-1/2 flex overflow-scroll justify-start lg:justify-center scroll-pl-1">
            {project.images.map(i => ( 
              <div key={i.imgSrc} className="relative m-1 flex-shrink-0 h-[400px] w-[225px] outline outline-zinc-700">
               <Image src={i.imgSrc} fill={true} alt={i.imgAlt}/>
               </div>
            ))}
          </div>
          <div className="mt-12 pb-[50vh] text-sm font-light md:mx-24">
           
            {project.blurb.map((i, index) => (
              <p key={index} className="mb-4">{i}</p>
            ))}
          </div>
        </div>
  )
}