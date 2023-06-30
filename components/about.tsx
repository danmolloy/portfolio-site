import Image from "next/image";
import IndexDiv from "./indexDiv";

const aboutData = {
  snippets: [ 
    "I have spent much of my free time in the past 3 years learning web development and creating projects, both as a hobby and as a freelance developer.",
    "For 12 years I have worked as a classical musician, and play with some of the finest ensembles in the world.", 
    "I was born in Brisbane, and have lived in London for 9 years.",
  ],
  orchestras: [
    {
      name: "Academy of St Martin in the Fields",
      favicon: "/icons/asmf.png"
    },
    {name: "BBC Symphony Orchestra", favicon: "/icons/bbc.png"},
    {name: "City of London Sinfonia", favicon: "/icons/cls.png"},
    {name: "Cool Music Ltd", favicon: "/icons/cool-music.jpg"},
    {name: "English Chamber Orchestra", favicon: "/icons/eco.png"},
    {name: "Isobel Griffiths Ltd", favicon: "/icons/ig-ltd.png"},
    {name: "London Chamber Orchestra", favicon: "/icons/lco.png"},
    {name: "London Mozart Players", favicon: "/icons/lmp.png"},
    {name: "London Sinfonietta", favicon: "/icons/london-sinfonietta.jpg"},
    {name: "London Contemporary Orchestra", favicon: "/icons/london-contemporary-orchestra.png"},
    {
      name: "London Symphony Orchestra",
      favicon: "/icons/lso.png"
    },
    {name: "Orchestra of the Swan", favicon: "/icons/OOTS.png"},
    {name: "Oxford Philharmonic", favicon: "/icons/opo.png"},
    {name: "Queensland Symphony Orchestra", favicon: "/icons/qso.jpg"},
    {name: "Royal Philharmonic Orchestra", favicon: "/icons/rpo.jpg"},
    ]
}

export default function AboutSection() {
  return (
    <IndexDiv title="About">
      <div>
          {aboutData.snippets.map(i => (
            <p className="text-zinc-500 mb-6 tracking-wider" key={i}>
              {i}
            </p>
          ))}
        </div>
      <div className="w-5/6 m-2 flex flex-col items-center p-2">
        <p className="p-2">Orchestras I perform for:</p>
        <ul className=" h-28 w-full overflow-auto p-1 rounded border">
          {aboutData.orchestras.map(i => (
            <li key={i.name} className="p-2 flex flex-row items-center bg-white text-zinc-500">
              {i.favicon && <Image alt={`${i.name} favicon`} src={i.favicon} height={25} width={25} className="mr-2"/>}
              <p>{i.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </IndexDiv>
  )
}