import { Recording } from "@/lib/soundtracks"
import Image from "next/image";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";


export type RecordingsProps = {
  recordings: Recording[]
}

export default function Recordings(props: RecordingsProps) {
  const { recordings } = props;


  return (
    <div data-testid="recordings-section" className="w-full flex flex-col my-8 items-center">
      <h3>Soundtracks I am on</h3>

      <div className="flex flex-row w-full my-4 ">
      {/* <button data-testid="scroll-left">
        <BsChevronCompactLeft />
      </button> */}
      <div className="overflow-scroll flex flex-row p-4">
        {recordings.sort((a, b) => b.year - a.year).map(i => (
          <Image 
            className="mx-1"
            key={i.imgSrc} 
            title={`${i.title} (${i.year})`}
            alt={i.title} 
            height={i.imgHeight/1.5} 
            width={i.imgWidth/1.5} 
            src={i.imgSrc} />
        ))}
        </div>
      {/* <button data-testid="scroll-right" >
        <BsChevronCompactRight />
      </button> */}
      </div>
    </div>
  )
}