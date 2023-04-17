import Image from "next/image";
import ProjectTile from "./projectTile";

export type ProjectProps = {
  id: string
  blurb: string
  title: string
  imgSrc: string
  imgWidth: string
  imgHeight: string
}

type IndexProps = {
  projects: ProjectProps[]
}

export default function IndexSection(props: IndexProps) {
  const { projects} = props;
  return (
    <div>
      <div className="flex flex-col items-center h-screen justify-evenly sm:flex-row">
        <div className="text-center">
        <h1 className="text-4xl">
          Daniel Molloy
        </h1>
        <p className="text-2xl">
          Web Developer
        </p>
        </div>
        <Image className=" px-4" src={"/images/danHero.jpg"} alt="" width={833/2} height={768/2} />
      </div>
      <div className="px-2">
        <h2 className="text-3xl">Projects</h2>
      {projects.map((i) => (
            <div key={i.id}>
              <ProjectTile {...i} />
            </div>
          ))}
      </div>
    </div>
  )
}