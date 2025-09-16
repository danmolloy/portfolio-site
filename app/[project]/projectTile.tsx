'use client'
import { ProjectDivProps } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function ProjectTile({project, index, showProject}: {
  project: ProjectDivProps, 
  index: number, 
  showProject: (id: number) => void}) {
   const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= .75) {
          setVisible(true);
        } 
      },
      {
        threshold: .75
      }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
      observer.disconnect();
    };
  }, []);


  return (
/*     <Link href={`/${project.id}`} className="relative w-full flex flex-row justify-center my-2 p-2  transition-all duration-500">
 */      
    <button onClick={() => showProject(project.id)} className="relative w-full flex flex-row justify-center my-2 p-2  transition-all duration-500">

 <div  className={`bg-dark ${visible ? "w-full" : "w-full"} h-[2px] absolute bottom-0 left-0 transition-all duration-1000 delay-75`}/>
          <div className=" bg-dark relative h-[150px] md:h-[300px] aspect-square m-4 overflow-hidden shrink-0">
          <div ref={ref} className={`absolute h-[150px] z-10 md:h-[300px] aspect-square bg-light transition-all delay-750 duration-1000 ${visible ? "translate-y-full" : ""}`}/>
            {project.thumb && <Image className="absolute" fill={true} src={project.thumb?.src} alt={project.thumb.imgAlt}/>}
        </div>
        <div className="w-1/2  max-w-[400px] my-4 flex flex-col justify-between items-start ">
          <p className="self-end font-light">[{index}]</p>
           <div >
            <h2  className="font-medium text-lg">{project.title.toUpperCase()}</h2>
{/*             <p className="font-normal">{project.soundBite}</p>
 */}          </div> 
 </div>
        </button>
        
  )
}