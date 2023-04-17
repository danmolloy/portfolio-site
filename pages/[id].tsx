import Layout from '@/components/layout';
import { getAllProjecIds, getProjectData } from '../lib';
import Image from 'next/image';


export default function ProjectPage({ projectData }: any) {
  return (
    <Layout>
      <div className=' p-2 flex flex-col items-center'>
        <Image className="py-4" alt="" src={projectData.imgSrc} width={Number(projectData.imgWidth)/2} height={Number(projectData.imgHeight)/2} />
        <a href={projectData.code} target='_blank' className='p-1 text-emerald-500 hover:underline'>View Code</a>
        <a href={projectData.demo} target='_blank' className='p-1 text-emerald-500 hover:underline'>Live Example</a>

        <div className='prose dark:prose-zinc' dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
      </div>
    </Layout>
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