export type ProjectDivProps = {
  id: number
  title: string
  githubLink: string
  previewLink: string
  image: {
    imgSrc: string
    imgWidth: string
    imgHeight: string
    imgAlt: string
  }
  blurb: string,
}

export const projectsBlurb = "All projects are built with Test-Driven Development, RESTful API Integration, responsive mobile-first design and WCAG 2.0 Accessibility."


export const projectsArr: ProjectDivProps[] = [
  {
    id: 5,
    title: "Band Website",
    previewLink: 'https:/thebigfirkinband.com/',
    githubLink: 'https://github.com/danmolloy/firkin',
    image:
      {imgSrc: '/images/firkin.jpeg',
      imgWidth: '748',
      imgHeight: '1132',
      imgAlt: "Landing page of The Big Firkin Band website"},
    blurb: "A band's website with google calendar integration, Stripe checkout, attractive UI, WCAG 2.0 accessibility, robust contact form and responsive design. Built using NextJS 14, TypeScript, Tailwind CSS, and Formik.",
  },
  /* {
    id: 0,
    title: "Musician Website",
    previewLink: 'https://www.fionakellyflute.com/',
    githubLink: 'https://github.com/danmolloy/fio-kelly',
    image:
      {imgSrc: '/images/fk-landing.png',
      imgWidth: '870',
      imgHeight: '480',
      imgAlt: "Hero section of website"},
    blurb: "A musicians website with an attractive UI, WCAG 2.0 accessibility, robust contact form and responsive design. Built using NextJS 14, TypeScript, Tailwind CSS, and Formik.",
  }, */
  {
    id: 1,
    title: "Spelling Bee",
    previewLink: 'https://spelling-bee-danmolloy.vercel.app',
    githubLink: 'https://github.com/danmolloy/spelling-bee',
    image: {imgSrc: '/images/spelling-bee.PNG',
      imgWidth: '750',
      imgHeight: '1092',
      imgAlt: "Spelling Bee screenshot with pangram confetti"},
      blurb: "An interactive game UX with data fetching, WCAG 2.0 accessibility, keyboard event listeners and dynamic hints. Built with NextJS 14, TypeScript, Tailwind CSS and Jest.",
},
  /* {
    id: 2,
    title: "GigFix",
    previewLink: 'https://gig-fix-git-main-danmolloy.vercel.app/',
    githubLink: 'https://github.com/danmolloy/fixer',
    image: {imgSrc: '/images/gig-fix.PNG',
      imgWidth: '750',
      imgHeight: '1092',
      imgAlt: "GigFix landing page"},
      blurb: "A large personal project featuring CRUD operations on a relational database, authentication & authorization, WCAG 2.0 accessibility and an attractive UI. Built with NextJS, TypeScript, Formik,  Prisma (with PostgresQL), Twilio, TailwindCSS and Jest."
    
  }, */
  {
    id: 6,
    title: "RESTful|CMS",
    previewLink: 'https://restfulcms-production.up.railway.app/',
    githubLink: 'https://github.com/danmolloy/RESTfulCMS',
    image: {
      imgSrc: '/images/restful-cms.png',
      imgWidth: '1546',
      imgHeight: '1270',
      imgAlt: "Index View of Restful CMS website"},
      blurb: "A blogging CMS complete with an API endpoint, authorization and authentication, a variety of views and CRUD operations. Built with Django, PostgresQL and CSS."
  },
  {
    id: 4,
    title: "TaskTrek",
    previewLink: "https://apps.apple.com/gb/app/tasktrek/id6462425051",
    githubLink: "https://github.com/danmolloy/routinee",
    blurb: "A habit tracking app available in the app store. CRUD operations, attractive UI and a variety of data rendering built using React Native, TypeScript, Expo and Jest.",
    image: 
      {imgWidth: "750",
      imgHeight: "1334",
      imgSrc: '/images/tasktrek-detail.PNG',
      imgAlt: "TaskTrek activity detail page featuring github-style heat chart"},
  },
  /* {
    id: 3,
    title: "MyJournal",
    previewLink: 'https://django-journal-production.up.railway.app/',
    githubLink: 'https://github.com/danmolloy/django-journal',
    image: {
      imgSrc: '/images/myjournal-index.png',
      imgWidth: '1000',
      imgHeight: '1100',
      imgAlt: "Index View"},
      blurb: "A journaling app complete with authorization and authentication, a variety of views and CRUD operations. Built with Django, PostgresQL and CSS."
  }, */
]