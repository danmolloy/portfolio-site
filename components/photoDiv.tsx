import Image from "next/image"
import React, { useEffect, useRef } from "react"

type PhotoDivProps = {
  src: string
  height: number
  width: number
  alt: string
  title: string
  setShowImage: () => void
}

export default function PhotoDiv(props: PhotoDivProps) {
  const { src, height, width, alt, title, setShowImage } = props;
  const ref = useRef<any>(null);

  useEffect(() => {
    ref.current.focus()
  }, [])

  return (
    <div ref={ref} onBlur={() => setShowImage()} tabIndex={-1} className="z-10 fixed flex flex-col items-center bg-zinc-50 border shadow -mt-16 sm:-mt-0 sm:p-4 rounded">
      <button onClick={() => setShowImage()} className="p-1 rounded self-end m-1 hover:text-zinc-500">
        Close
      </button>
      <div className="">
        <Image alt={alt} src={src} width={width} height={height} />
      </div>
      <p className="my-4">{title}</p>
    </div>
  )
}