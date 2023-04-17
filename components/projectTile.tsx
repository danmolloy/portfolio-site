import Link from "next/link";
import { ProjectProps } from ".";
import Image from "next/image";

export default function ProjectTile(props: ProjectProps) {
  const { title, blurb, id, imgSrc, imgHeight, imgWidth } = props;
  return (
    <Link href={`/${id}`}>
      <div className="m-2 shadow-sm border border-zinc-200 p-2 rounded hover:bg-zinc-100 flex flex-col items-center py-4 my-8">
      <h2 className="text-3xl">{title}</h2>
      <p className="text-zinc-600 py-4">{blurb}</p>
      <Image className="py-4" alt="" src={imgSrc} width={Number(imgWidth)/4} height={Number(imgHeight)/4} />
      </div>
    </Link>
  )
}