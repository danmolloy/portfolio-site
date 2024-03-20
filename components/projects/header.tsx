import { FaLaptopCode, FaLink } from "react-icons/fa"

export type ProjectHeaderProps = {
  title: string
  githubLink: string
  previewLink: string
  selectedTab: number
  setSelectedTab: (arg: number) => void
}

export default function ProjectHeader(props: ProjectHeaderProps) {
  const { githubLink, previewLink, selectedTab, setSelectedTab, title } = props;

  return (
    <div data-testid="project-header" className=" w-full">
      <div className="flex flex-row justify-between items-start w-full">
      <h2 className="text-blue-700 dark:text-blue-400">{title}</h2>
      <div className="flex flex-col">
        <a data-testid="github-link" href={githubLink} target="_blank" className="m-1 ml-2  flex flex-row items-center text-sm hover:text-blue-500 dark:hover:text-yellow-300">
          <FaLaptopCode />
          <p className="ml-1 hover:text-black dark:hover:text-yellow-300">
            View GitHub
          </p>
        </a>
        <a data-testid="example-link" href={previewLink} target="_blank" className="m-1 flex flex-row items-center text-sm hover:text-blue-500 dark:hover:text-yellow-300">
          <FaLink />
          <p className="ml-1 hover:text-black dark:hover:text-yellow-300">
            Live Example
          </p>
        </a>
        </div>
        </div>
      <div className="w-full flex flex-row mb-6">
        <button data-testid="overview-btn" className={selectedTab === 0 ? "custom-border-gradient border-b border-blue-500  py-2 my-2 mx-4 hover:text-zinc-400 " : "py-2 my-2 mx-4 hover:text-zinc-400"} onClick={() => setSelectedTab(0)}>Overview</button>
        <button className={selectedTab === 1 ? "custom-border-gradient border-b border-blue-500  py-2 my-2 mx-4 hover:text-zinc-400 " : "py-2 my-2 mx-4 hover:text-zinc-400" } onClick={() => setSelectedTab(1)}>Features</button>
      </div>
    </div>
  )
}