import { getSortedProjectsData } from '../lib';


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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     {allProjectsData.map(({ id, date, title }: any) => (
            <li key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
    </main>
  )
}
