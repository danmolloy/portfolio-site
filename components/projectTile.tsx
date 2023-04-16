import Link from "next/link";
import { ProjectProps } from ".";
import Image from "next/image";

export default function ProjectTile(props: ProjectProps) {
  const { title, blurb, id, imgSrc, imgHeight, imgWidth } = props;
  return (
    <Link href={`/${id}`}>
      <div className="m-2 hover:bg-slate-50 flex flex-col items-center py-4 my-8">
      <h2 className="text-2xl ">{title}</h2>
      <p className="text-zinc-600">{blurb}</p>
      <Image className="py-2" alt="" src={imgSrc} width={Number(imgWidth)/4} height={Number(imgHeight)/4} />
      </div>
    </Link>
  )
}