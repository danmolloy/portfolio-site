import { getAllProjecIds, getProjectData } from '../lib';


export default function ProjectPage({ projectData }: any) {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
    </div>
  )
}

export async function getStaticProps({ params }: any) {
  const projectData = await getProjectData(params.id);
  console.log(projectData)
  return {
    props: {
      projectData
    }
  }
}


export async function getStaticPaths() {
  const paths = getAllProjecIds();
  return {
    paths,
    fallback: false,
  };
}