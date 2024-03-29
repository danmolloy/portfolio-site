import Image from "next/image";

export type ImageProps = {
  src: string
  width: number
  height: number
  alt: string
  title: string
  id: string
  setShowImage: () => void
}

export default function ImageTile(props: ImageProps) {
  const { src, width, height, alt, title, id, setShowImage } = props;
  return (
    <button data-testid="image-tile" onClick={() => setShowImage()} key={id} className='w-full p-2 hover:bg-zinc-50'>
      <Image title={title} className=" shadow" alt={alt} src={src} width={width} height={height} />
    </button>
  )
}