import Layout from '@/components/layout';
import { getAllProjecIds, getProjectData } from '../lib';
import Image from 'next/image';
import PhotoDiv from '@/components/photoDiv';
import ImageTile from '@/components/imageTile';
import { useState } from 'react';


export default function ProjectPage({ projectData }: any) {
  const [showImage, setShowImage] = useState<null|string>(null)

  let selectedImg = projectData.imageGallery.find((i: any) => i.id === showImage)

  return (
    <Layout>
        {selectedImg !== undefined && <PhotoDiv width={Number(selectedImg.imgWidth)/2} height={Number(selectedImg.imgHeight)/2} src={selectedImg.imgSrc} alt={""} title={selectedImg.title}  setShowImage={() => setShowImage(null)}/>}
      <div className={showImage !== null ? 'blur p-2 flex flex-col items-center ' : ' p-2 flex flex-col items-center '}>
        <h1 className='text-4xl font-semibold'>{projectData.title}</h1>
        <div className='my-4 p-2  w-2/3 sm:w-1/2 flex flex-row justify-between'>
          <a href={projectData.code} target='_blank' className=' text-emerald-500 hover:underline'>View Code</a>
          <a href={projectData.demo} target='_blank' className=' text-emerald-500 hover:underline'>Live Example</a>
        </div>
        <div className='prose dark:prose-zinc' dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
      </div>
      <div className={showImage !== null ? 'blur w-screen flex flex-row flex-wrap my-24 p-2 lg:w-1/2 self-center' : 'w-screen flex flex-row flex-wrap my-24 p-2 lg:w-1/2 self-center'}>
      {projectData.imageGallery.map((i:any) => (
        <div key={i.id} className='w-1/3'>
          <ImageTile setShowImage={() => setShowImage(i.id)} id={i.id} title="" alt="" src={i.imgSrc} width={Number(i.imgWidth)/2} height={Number(i.imgHeight)/2}/>
        </div>
      ))}
        </div>
        {showImage}
    </Layout>
  )
}

export async function getStaticProps({ params }: any) {
  const projectData = await getProjectData(params.id);
  
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