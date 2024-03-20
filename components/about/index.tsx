import Image from "next/image";
import IndexDiv from "../indexDiv";
import { aboutData } from "@/lib/about";
import Recordings from "./recordings";
import { soundtracks } from "@/lib/soundtracks";
import Ensembles from "./ensembles";

export default function AboutSection() {
  return (
    <IndexDiv name={"about"} title="About">
      <div className="">
          {aboutData.snippets.map(i => (
            <p className="text-zinc-500 mb-6 tracking-wider" key={i}>
              {i}
            </p>
          ))}
        </div>
     {/*  <div className="w-5/6 m-2 flex flex-col items-center p-2">
        <p className="p-2">Orchestras I perform for:</p>
        <ul className=" h-28 w-[90vw] md:w-full overflow-auto p-1 rounded border ">
          {aboutData.orchestras.map(i => (
            <li key={i.name} className="p-2 flex flex-row items-center bg-white text-zinc-500">
              {i.favicon && <Image title={`${i.name}-logo`} alt={`${i.name} favicon`} src={i.favicon} height={25} width={25} className="mr-2"/>}
              <p>{i.name}</p>
            </li>
          ))}
        </ul>
      </div> */}
      <Ensembles ensembles={aboutData.orchestras} />
      <Recordings recordings={soundtracks} />
    </IndexDiv>
  )
}