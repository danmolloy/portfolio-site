import Image from "next/image"
import { useState } from "react"
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { BsDot } from "react-icons/bs";

export type ProjectImagesProps = {
  images: {
    imgSrc: string
    imgWidth: string
    imgHeight: string
    imgAlt: string
  }[]
}

export default function ProjectImages(props: ProjectImagesProps) {
  const { images } = props
  const [currentElIndex, setCurrentElIndex] = useState<number>(0)
  const [awaitChange, setAwaitChange] = useState<boolean>(false)

  const handleChevronClick = (newIndex: number) => {
    setAwaitChange(true)
    setTimeout(() => {
      setCurrentElIndex(newIndex)
      setAwaitChange(false)
    }, 300)
  }

  return (
    <div data-testid="project-images" className={` m-4 h-[${Number(images[currentElIndex].imgHeight)}px]  flex flex-col items-center justify-center `}>
      <Image 
          priority={true} key={images[currentElIndex].imgSrc} 
          className={awaitChange ? "mx-16 opacity-0 transition-opacity duration-200" : "mx-16 fade-in transition-opacity duration-200"} 
          alt={images[currentElIndex].imgAlt} src={images[currentElIndex].imgSrc} width={Number(images[currentElIndex].imgWidth)/4} height={Number(images[currentElIndex].imgHeight)/4} />
      <div className="flex flex-row my-4">
      <button
        data-testid="left-chevron"
        className={currentElIndex === 0 ? "opacity-30 transition-opacity duration-500 text-xl hover:text-amber-500": "opacity-100 transition-opacity duration-500 text-xl hover:text-amber-500"}
          onClick={() => {
          currentElIndex > 0 
          && handleChevronClick(currentElIndex - 1)
        }}>
        <FaChevronLeft />
      </button>
      <div className="flex flex-row">
        {images.map((i, index) => (
          <button key={i.imgSrc} onClick={() => handleChevronClick(index)} className={`hover:text-yellow-400 ${currentElIndex === index && "text-yellow-400"}  text-2xl`}>
            <BsDot />
          </button>
        ))}
      </div>
      <button 
        data-testid="right-chevron"
        className={
          currentElIndex >= images.length - 1 
          ? "opacity-30 transition-opacity duration-700 text-xl hover:text-amber-500"
          : "opacity-100 transition-opacity duration-700 text-xl hover:text-amber-500"}
        onClick={() => {
          currentElIndex < images.length - 1 
          && handleChevronClick(currentElIndex + 1)
        }}>
        <FaChevronRight />
      </button>
      </div>
    </div>
  )
}