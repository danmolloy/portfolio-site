import Image from "next/image";
import { aboutData } from "@/lib/about";
import Recordings from "./recordings";
import { soundtracks } from "@/lib/soundtracks";
import Ensembles from "./ensembles";

export default function AboutSection() {
  return (
    <section data-testid="about-section">
      <h2>About</h2>
      <div className="">
          {aboutData.snippets.map(i => (
            <p className="text-zinc-500 dark:text-zinc-400 mb-6 tracking-wider" key={i}>
              {i}
            </p>
          ))}
        </div>
     
      <Ensembles ensembles={aboutData.orchestras} />
      <Recordings recordings={soundtracks} />
    </section>
  )
}