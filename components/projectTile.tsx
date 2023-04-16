import Link from "next/link";

export default function ProjectTile(props: {title: string, blurb: string, id: string}) {
  const { title, blurb, id } = props;
  return (
    <Link href={`/${id}`}>
      <div className="m-2 hover:bg-slate-50">
      <h2>{title}</h2>
      <p>{blurb}</p>
      </div>
    </Link>
  )
}