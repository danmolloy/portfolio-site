export type ProjectDivProps = {
  id: number
  title: string
  githubLink: string
  previewLink: string
  images: {
    imgSrc: string
    imgWidth: string
    imgHeight: string
    imgAlt: string
  }[]
  overview: string[],
  features: string[]
  stack: string[]
}

export const projectsBlurb = "All projects are built with Test-Driven Development, RESTful API Integration, responsive mobile-first design and W3C Accessibility."


export const projectsArr: ProjectDivProps[] = [
  {
    id: 4,
    title: "TaskTrek",
    previewLink: "https://apps.apple.com/gb/app/tasktrek/id6462425051",
    githubLink: "https://github.com/danmolloy/routinee",
    overview: [
      "I enjoy learning new skills and am keen on maintaining habits which help achieve larger goals. TaskTrek helps the user log their daily habits with additional data (i.e. duration, count, hashtags) and view an overall pattern across a week, month or year. I created TaskTrek for my own use and eventually released it on the App Store.",
      "TaskTrek is built with React Native, TypeScript, Expo, Jest. Additionally, I used a few RN community packages to a lesser extent."
    ],
    images: [
      {imgWidth: "750",
      imgHeight: "1334",
      imgSrc: '/images/tasktrek-home.PNG',
      imgAlt: "App home page of TaskTrek"},
      {imgWidth: "750",
      imgHeight: "1334",
      imgSrc: '/images/tasktrek-detail.PNG',
      imgAlt: "TaskTrek activity detail page featuring github-style heat chart"},
      {imgWidth: "750",
      imgHeight: "1334",
      imgSrc: '/images/tasktrek-help.PNG',
      imgAlt: "TaskTrek help page featuring encouraging words"},
    ],
    features: [
        "CRUD database operations for activities and instances of activity",
        "Year overview heat map of activity, with option to filter by hashtag",
        "Interactive home page with haptics and animation when ticking of activity",
        "Animated movements on screen changes for a game-like experience",
      ],
    stack: [
        "React Native",
        "TypeScript",
        "Jest",
        "Expo"
      ],
  },
  {
    id: 0,
    title: "Musician Website",
    previewLink: 'https://www.fionakellyflute.com/',
    githubLink: 'https://github.com/danmolloy/fio-kelly',
    images: [
      {imgSrc: '/images/fk-landing.png',
      imgWidth: '870',
      imgHeight: '480',
      imgAlt: "Hero section of website"},
      {imgSrc: '/images/fk-albums.png',
      imgWidth: '870',
      imgHeight: '480',
      imgAlt: "Array of album covers"},
      {imgSrc: '/images/fk-contact.png',
      imgWidth: '870',
      imgHeight: '480',
      imgAlt: "Contact section and footer"},
    ],
    overview: [
      "I was approached by a colleague to create a website for prospective students, potential employers and concert organisers. The musician wanted a site that was modern and attractive, but largely gave me freedom to design the interface. I worked closely with them to create a design they were pleased with. It's not the most technical project in my portfolio but very practical.",
      "This site was built with NextJS, TypeScript and TailwindCSS. The contact form was built using NodeMailer, Formik and Yup validation."
  ],
    features: [
        "Event listeners to make header disappear on scroll",
        "Page scrolls to section on menu link click",
        "Attractive, modern design with logical layout",
        "Nodemailer contact form with email integration"
      ],
    stack: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
      ],
  },
  {
    id: 1,
    title: "Spelling Bee",
    previewLink: 'https://spelling-bee-danmolloy.vercel.app',
    githubLink: 'https://github.com/danmolloy/spelling-bee',
    images: [
      {imgSrc: '/images/spelling-bee.PNG',
      imgWidth: '750',
      imgHeight: '1092',
      imgAlt: "Spelling Bee screenshot with pangram confetti"
},
{imgSrc: '/images/spelling-bee-list.PNG',
imgWidth: '750',
imgHeight: '1092',
imgAlt: "Found words"},
{imgSrc: '/images/spelling-bee-yoyo.PNG',
imgWidth: '750',
imgHeight: '1092',
imgAlt: "Game interface"},
    ],
    overview: [
      "I'm a great fan of NYT's Spelling Bee word game and decided to replicate the game. The site fetches the original game data from the source code and saves your answers to local storage, allowing you to continue gameplay throughout the day. I&apos;ve tried my best to capture the playful character of the game using CSS animation and styling. Additionally, there is a dynamic table of hints.",
      "Spelling Bee is built with NextJS, TypeScript, TailwindCSS (as well as vanilla CSS) and Jest. For the data fetching, I use NextJS API routes."
    ],
      
    features: [
      "Replica of NYT original interface, including hexagonal 'hive'",
      "Playful CSS animations, in keeping with the game character",
      "Keyboard event listeners",
      "Fetches original game data from NYT",
      "Local storage saves user progress",
      "Dynamic hints page gives count for word combinations",
      ],
    stack: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Jest"
      ],
  },
  {
    id: 2,
    title: "GigFix",
    previewLink: 'https://gig-fix-git-main-danmolloy.vercel.app/',
    githubLink: 'https://github.com/danmolloy/fixer',
    images: [
      {imgSrc: '/images/gig-fix.PNG',
      imgWidth: '750',
      imgHeight: '1092',
      imgAlt: "GigFix landing page"},
      {imgSrc: '/images/gig-fix-calendar.PNG',
      imgWidth: '750',
      imgHeight: '1092',
      imgAlt: "GigFix calendar interface"},
      {imgSrc: '/images/gig-fix-directory.PNG',
      imgWidth: '750',
      imgHeight: '1092',
      imgAlt: "GigFix player directory"},
    ],
    overview: [
      "Orchestras often need to book a large number of freelancers in a very short space of time. Additionally, they must relay dynamic information to all relative musicians. GigFix address this workflow issue, saving orchestras large amounts of time and money. For the freelance musicians, it offers a directory where they can be connected with orchestras with whom they’ve not worked. I’m hoping to eventually release GigFix for public use.",
      "GIgFix is built primarily with NextJS, TypeScript, Formik,  Prisma (with PostgresQL), Twilio, TailwindCSS and Jest.",
    ],
    features: [
      "Attractive external site and landing page",
      "Intuitive calendar interface for an overview of events in month, week or day view",
      "A variety of CRUD database operations for a relational database",
      "Text messaging API integration",
      "Social network user profiles & directory",
      "Notifications section in the style of GitHub notifications page",
      "Concise event page information layout",
      "Flexible booking system for a variety of needs (i.e. only selected rehearsals, availability check vs booking, additional messages to individual)",
      "Simple address book layout for concise information display",
      ],
    stack: [
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
  },
  {
    id: 3,
    title: "MyJournal",
    previewLink: 'https://django-journal-production.up.railway.app/',
    githubLink: 'https://github.com/danmolloy/django-journal',
    images: [
      {imgSrc: '/images/myjournal-index.png',
      imgWidth: '1000',
      imgHeight: '1100',
      imgAlt: "Index View"},
      {imgSrc: '/images/myjournal-detail.png',
      imgWidth: '1000',
      imgHeight: '1100',
      imgAlt: "Entry Detail View"},
      {imgSrc: '/images/myjournal-signin.png',
      imgWidth: '1000',
      imgHeight: '1100',
      imgAlt: "Edit Entry View"},
    ],
    overview: [
      "My journal is a basic journalling web app, created as a personal learning tool when I was studying Django and Python. Very simply, users create an account and create journal entries which are only visible to themselves.",
      "MyJournal is built with Python and Django. It connects to a SQLite3 database and uses Django packages such as Django Auth."
    ],
    features: [
      "Authentication and authorisation",
      "All CRUD operations on journal entries",
      "Homepage, detail and sign in/sign up views", 
      "Password reset",
      "Vanilla CSS styling of Django views",
      ],
    stack: [
        "Python",
        "Django",
        "Django-Templates",
        "PostgreSQL",
      ],
    
  }
]