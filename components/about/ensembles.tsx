import Image from "next/image";
import { useState } from "react";

export type EnsembleProps = {
  ensembles: { 
    name: string
    favicon: string
  }[]
}

export default function Ensembles(props: EnsembleProps) {
  const { ensembles } = props;
  const [showAll, setShowAll] = useState<boolean>(false)

  return (
    <div data-testid="ensembles-section" className="flex flex-col items-center my-8">
      <h3>Ensembles I work for</h3>
      <div className=" flex flex-row flex-wrap justify-center w-full my-4 transition-all">
        {showAll 
        ? ensembles.map(i => (
          <div className=" text-zinc-500 flex shadow-sm flex-row p-2 m-1 border rounded items-center w-72 dark:border-zinc-700" key={i.favicon}>
            <Image title={`${i.name}-logo`} alt={`${i.name} favicon`} src={i.favicon} height={25} width={25} className="mr-2"/>
            <p>{i.name}</p>
          </div>
        )) 
        : <>
        {ensembles.slice(0, 4).map(i => (
          <div className="text-zinc-500 flex shadow-sm flex-row p-2 m-1 border rounded items-center w-72 dark:border-zinc-700" key={i.favicon}>
            <Image title={`${i.name}-logo`} alt={`${i.name} favicon`} src={i.favicon} height={25} width={25} className="mr-2"/>
            <p>{i.name}</p>
          </div>
        ))}
        {ensembles.slice(4, 6).map(i => (
          <div className="opacity-40 flex shadow-sm flex-row p-2 m-1 border rounded items-center w-72 dark:border-zinc-700" key={i.favicon}>
            <Image title={`${i.name}-logo`} alt={`${i.name} favicon`} src={i.favicon} height={25} width={25} className="mr-2"/>
            <p>{i.name}</p>
          </div>
        ))}
        </>
        }
      </div>
      <button data-testid="show-btn" className={`${!showAll && "-mt-2"} border hover:text-blue-500 w-24 py-1 px-2 rounded-full dark:text-blue-400 dark:hover:text-yellow-300 dark:border-zinc-700`} onClick={() => setShowAll(!showAll)}>{showAll ? `Show less`: `Show more`}</button> 
    </div>
  )
}