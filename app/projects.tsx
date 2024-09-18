import { projectsArr, projectsBlurb } from "@/lib/projects";
import { FaGithub, FaLaptopCode, FaLink, FaNpm } from "react-icons/fa";
import Image from "next/image";


export default function Projects() {

  return (
    <section data-testid="projects-section" className="w-[95vw] py-12 m-2 flex flex-col items-center  min-h-[80vh]  lg:w-2/3">
      <div className="flex flex-col w-full px-12 py-4 text-sm items-center">
      <h2 className=" ">Projects</h2>
      <p className="my-4 text-zinc-800 dark:text-zinc-600">{projectsBlurb}</p>
      </div>
      
      {projectsArr.map((i) => (
          <div key={i.id} data-testid={`project-${i.id}`} className="bg-white z-10 flex flex-col justify-center items-center my-8 border dark:border-zinc-700 p-4 rounded shadow-sm w-full">
          <div className="flex lg:flex-row flex-col justify-between items-start w-full">
          <h3 className="text-2xl font-semibold my-4">{i.title}</h3>
          <div className="flex flex-row justify-start  ">
            <a data-testid="github-link" href={i.githubLink} target="_blank" className="m-1  flex flex-row items-center text-sm hover:text-blue-500 dark:hover:text-yellow-300">
              <FaGithub size={14} color="black"/>
              <p className="ml-1 dark:hover:text-yellow-300 hover:underline">
                GitHub
              </p>
            </a>
            {i.npmLink && <a data-testid="npm-link" href={i.npmLink} target="_blank" className="m-1  flex flex-row items-center text-sm hover:text-blue-500 dark:hover:text-yellow-300">
              <FaNpm size={16} color="black"/>
              <p className="ml-1 dark:hover:text-yellow-300 hover:underline">
                NPM
              </p>
            </a>}
            <a data-testid="example-link" href={i.previewLink} target="_blank" className="m-1 flex flex-row items-center text-sm hover:text-blue-500 dark:hover:text-yellow-300">
              <FaLink size={12} color="black"/>
              <p className="ml-1 dark:hover:text-yellow-300 hover:underline">
                Preview
              </p>
            </a>
            </div>
            </div>
            <div className="flex flex-col items-center md:flex-row md:justify-between my-2">
          <div data-testid="project-text" className="transition duration-700 md:w-1/2">
            <p className="pb-4" >{i.blurb}</p>
            <a data-testid="github-link" href={i.githubLink} target="_blank" className="m-1 ml-2  flex flex-row items-center text-sm hover:text-blue-500 dark:hover:text-yellow-300">
            <FaLink />
              <p className="ml-1 dark:hover:text-yellow-300">
                View Readme
              </p>
            </a>
          </div>
          <Image  className="m-4" alt={i.image.imgAlt} title={i.image.imgAlt} width={Number(i.image.imgWidth)/4} height={Number(i.image.imgHeight)/4} src={i.image.imgSrc} />
          </div>
          </div>
        ))}
    </section>
  )
}