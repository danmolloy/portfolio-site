import Layout from '@/components/layout';
import { getSortedProjectsData } from '../lib';
import ProjectTile from '@/components/projectTile';
import IndexSection from '@/components';


export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
}

export default function Home({ allProjectsData }: any) {
  return (
    <Layout>
     <IndexSection projects={allProjectsData} />
    </Layout>
  )
}
