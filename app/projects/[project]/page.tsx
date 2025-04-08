import Project from "./project";

export default async function Page({
  params,
}: {
  params: Promise<{ project: string }>
}) {
  const project = (await params).project;
  
  return <div>
    <Project project={project} />
  </div>
}