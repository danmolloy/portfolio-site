import Image from "next/image";
import ProjectTile from "./projectTile";
import ContactSection from "./contactSection";
import AboutSection from "./about";
import IndexDiv from "./indexDiv";
import ProjectDiv, { ProjectDivProps } from "./projectDiv";
import ProjectsSection from "./projectsSection";

export type ProjectProps = {
  id: string
  blurb: string
  title: string
  imgSrc: string
  imgWidth: string
  imgHeight: string
}

type IndexProps = {
  projects: ProjectProps[]
}

const projectsArr: ProjectDivProps[] = [
  {
    id: 1,
    title: "Spelling Bee",
    previewLink: 'https://spelling-bee-danmolloy.vercel.app',
    githubLink: 'https://github.com/danmolloy/spelling-bee',
    overview: {
      blurb: "A replica of the New York Times word game",
      imgSrc: '/images/spelling-bee.PNG',
      imgWidth: '750',
      imgHeight: '1092',
      imgAlt: "Spelling Bee screenshot with pangram confetti"
    },
    features: {
      featuresArr: [
        "Fetches game data from New York Times",
        "Saves answers to local storage",
        "Intuitive game interface",
        "Celebratory confetti when pangram found"
      ],
      imgSrc: '/images/spelling-bee-list.PNG',
      imgWidth: '750',
      imgHeight: '1092',
      imgAlt: "Found words"
    },
    stack: {
      stackArr: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Jest"
      ],
      imgSrc: '/images/spelling-bee-yoyo.PNG',
      imgWidth: '750',
      imgHeight: '1092',
      imgAlt: "Game interface"
    }
  },
  {
    id: 2,
    title: "GigFix",
    previewLink: 'https://gig-fix-git-main-danmolloy.vercel.app/',
    githubLink: 'https://github.com/danmolloy/fixer',
    overview: {
      blurb: "Automated booking of freelance musicians with an integrated calendar and directory",
      imgSrc: '/images/gig-fix.PNG',
      imgWidth: '750',
      imgHeight: '1092',
      imgAlt: "GigFix landing page"
    },
    features: {
      featuresArr: [
        "Attractive landing page",
        "Twilio-integrated player bookings via SMS and WhatsApp",
        "Intuitive calendar interface",
        "Social network user profiles",
      ],
      imgSrc: '/images/gig-fix-calendar.PNG',
      imgWidth: '750',
      imgHeight: '1092',
      imgAlt: "GigFix calendar interface"
    },
    stack: {
      stackArr: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "TailwindCSS",
        "Jest",
        "Prisma",
        "PostgreSQL",
        "Twilio",
        "Formik"
      ],
      imgSrc: '/images/gig-fix-directory.PNG',
      imgWidth: '750',
      imgHeight: '1092',
      imgAlt: "GigFix player directory"
    },
  },
  {
    id: 3,
    title: "MyJournal",
    previewLink: 'https://dan-journal-41929ffb093c.herokuapp.com/',
    githubLink: 'https://github.com/danmolloy/django-journal',
    overview: {
      blurb: "A journalling app built with Django",
      imgSrc: '/images/myjournal-index.PNG',
      imgWidth: '1440',
      imgHeight: '796',
      imgAlt: "Index View"
    },
    features: {
      featuresArr: [
        "Django Auth",
        "",
        "Intuitive calendar interface",
        "Social network user profiles",
      ],
      imgSrc: '/images/myjournal-detail.PNG',
      imgWidth: '1440',
      imgHeight: '796',
      imgAlt: "Entry Detail View"
    },
    stack: {
      stackArr: [
        "Python",
        "Django",
        "Django-Templates",
        "Django-Auth",
        "PostgreSQL",
      ],
      imgSrc: '/images/myjournal-edit.PNG',
      imgWidth: '1440',
      imgHeight: '796',
      imgAlt: "Edit Entry View"
    },
  }
]


export default function IndexSection(props: IndexProps) {
  const { projects} = props;

  let stackArray: any = [];
  projectsArr.forEach(i => (
    stackArray.push(...i.stack.stackArr)
  ))
  stackArray = Array.from(new Set(stackArray));


  return (
    <div className="dark:bg-zinc-900 dark:text-zinc-300  w-screen flex flex-col items-center">
      <div className="flex flex-col items-center h-screen justify-evenly sm:flex-row font-display w-screen">
        <div className="text-center my-3">
        <h1 className="text-3xl">
          Daniel Molloy
        </h1>
        <p className="text-xl">
          Web Developer / Musician
        </p>
        </div>
        <div className="rounded-lg overflow-hidden mx-4">
        <Image className=" " src={"/images/danHero.jpg"} alt="" width={833/2} height={768/2} />
        </div>
      </div>
      <div className="w-[95vw] m-2 flex flex-col items-center  min-h-[80vh] lg:w-2/3"> 
        <AboutSection />

      </div>
      <ProjectsSection stackArray={stackArray} projectsArr={projectsArr} />
      <div className="w-[95vw] m-2 flex flex-col items-center  min-h-[80vh] lg:w-2/3">
          <ContactSection />

          </div>
    </div>
  )
}