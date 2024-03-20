import Layout from '@/components/layout';
import IndexSection from '@/components';

/* 
export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
} */

export default function Home() {
  return (
    <Layout>
     <IndexSection />
    </Layout>
  )
}
