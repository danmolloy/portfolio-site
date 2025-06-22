import { projectsArr } from "@/lib/projects"
import Image from "next/image"
import Link from "next/link"
import { FaGithub, FaLink, FaArrowLeft } from "react-icons/fa"
import BackButton from "./backBtn"

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ project: string }>
}) {
    const { project } = await params

    const selectedProject = projectsArr.find(i => i.id === Number(project))

    if (!selectedProject) {
      return <p>Not found</p>
    }
    

  return (
    <div className={` w-screen  flex flex-col px-4 bg-dark text-light`}>
      <div className="mt-16 ">
        <BackButton />
        <h1 className="font-bold">{selectedProject.title.toLocaleUpperCase()}</h1>
      </div>
      <div className="flex flex-row justify-between my-12 text-sm">
        <div>
        <h2 className="text-sm font-semibold mb-4">STACK</h2>
        {selectedProject.stack.map((i, index) => (
          <p key={index} className="text-xs">{i}</p>
        ))}
        </div>
        <div className="">
          <h2 className="text-sm font-semibold mb-4">LINKS</h2>
          {selectedProject.previewLink && <Link  href={selectedProject.previewLink} className="flex flex-row hover:text-blue-300 hover:underline   w-32 items-center justify-start">
            <FaLink /><p className="mx-1 text-xs">Visit site</p>
          </Link>}
          <Link href={selectedProject.githubLink} className="flex flex-row hover:text-blue-300 hover:underline   w-32 items-center justify-start">
          <FaGithub /><p className="mx-1 text-xs">Github repo</p></Link>
        </div>
      </div>
      <div className="h-1/2 overflow-scroll flex flex-row md:items-center md:justify-center">
        {selectedProject.images.map(i => ( 
          <div key={i.imgSrc} className="relative m-1 flex-shrink-0 h-[400px] w-[225px] outline outline-zinc-700">
          <Image src={i.imgSrc} fill={true} alt={i.imgAlt}/>
          </div>
        ))}
      </div>
      <div className="mt-12 pb-[50vh] text-sm font-light md:mx-24">
       
        <p>{selectedProject.blurb}</p>
      </div>
    </div>
  )
}