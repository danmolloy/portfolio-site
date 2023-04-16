import Image from "next/image";
import ProjectTile from "./projectTile";

type IndexProps = {
  projects: {
    id: string
    blurb: string
    title: string
  }[]
}

export default function IndexSection(props: IndexProps) {
  const { projects} = props;
  return (
    <div>
      <div className="flex flex-col items-center h-screen justify-evenly sm:flex-row">
        <div className="text-center">
        <h1 className="text-3xl">
          Daniel Molloy
        </h1>
        <p className="text-xl">
          Web Developer
        </p>
        </div>
        <Image className="rounded-sm overflow-hidden" src={"/images/danHero.jpg"} alt="" width={833/2} height={768/2} />
      </div>
      <div>
      {projects.map(({ id, blurb, title }: any) => (
            <div key={id}>
              <ProjectTile id={id} blurb={blurb} title={title} />
            </div>
          ))}
      </div>
    </div>
  )
}