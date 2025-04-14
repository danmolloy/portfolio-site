export type ProjectDivProps = {
  id: number
  title: string
  githubLink: string
  npmLink?: string
  appStoreLink?: string
  previewLink?: string

  images: {
    imgSrc: string
    imgWidth: string
    imgHeight: string
    imgAlt: string
  }[]
  blurb: string
  stack: string[]
  userFeatures?: {
    id: number
    key: string
    value: string
  }[]
  techFeatures?: {
    id: number
    key: string
    value: string
  }[]
}


export const projectsBlurb = "All projects are built with Test-Driven Development, RESTful API Integration, responsive mobile-first design and WCAG 2.0 Accessibility."



export const projectsArr: ProjectDivProps[] = [
  {
    id: 0,
    title: "GigFix",
    previewLink: "https://gig-fix.vercel.app/",
    githubLink: "https://github.com/danmolloy/fixer",
    images: [{
      imgSrc: '/images/gig-fix.PNG',
      imgWidth: '750',
      imgHeight: '1092',
      imgAlt: "Gigfix landing page"
    },
    {
      imgSrc: '/images/gigfix-signin.png',
      imgWidth: '1400',
      imgHeight: '760',
      imgAlt: "Sign in page"
    },
    {
      imgSrc: '/images/gigfix-calendar.png',
      imgWidth: '1400',
      imgHeight: '760',
      imgAlt: "Calendar view"
    },
    {
      imgSrc: '/images/gigfix-diary.png',
      imgWidth: '1400',
      imgHeight: '760',
      imgAlt: "Address book view"
    },
    {
      imgSrc: '/images/gigfix-event.png',
      imgWidth: '1400',
      imgHeight: '760',
      imgAlt: "Event overview"
    },
    {
      imgSrc: '/images/gigfix-instrument.png',
      imgWidth: '1400',
      imgHeight: '760',
      imgAlt: "Instrument fixing"
    },
  ],
    blurb: "GigFix is a specialized communications tool designed to streamline the process of managing gig information for orchestras. It enhances communication between orchestra management and musicians by automating musician booking, centralizing gig information and promptly relaying updated information to the relevant parties. This project continues to be developed and I hope to eventually release it for commercial use",
    stack: ["NextJS", "TypeScript", "Tailwind CSS", "Formik & Yup", "Auth.js", "Prisma & PostgresQL", "Twilio SMS & SendGrid", "Stripe", "Jest, React Testing Library & Playwright"],
    userFeatures: [
      {
        id: 0,
        key: "Team Accounts",
        value: "Create and manage a management team with varying levels of access. Suitable for teams that use freelance staff for projects.",
      },
      {
        id: 1,
        key: "Musician Address Book",
        value: "Import and maintain a comprehensive address book of musicians."
      },
      {
        id: 2,
        key: "Event Summary",
        value: "View all gig details, overview of the orchestra list and booking status of each instrument."
      },
      {
        id: 3,
        key: "Automated Communications",
        value: "Send automated email/SMS offers, check availability, and book an entire orchestra of a bespoke size. All musicians are notified via email/SMS when gig information changes and reminded of an upcoming event."
      },
      {
        id: 4,
        key: "Flexible Bookings",
        value: "Book a varying number of players for each rehearsal, state their role, send them personal messages."
      },
      {
        id: 5,
        key: "Metered Billing",
        value: "Usage-based payments powered by Stripe billed monthly to the orchestra, depending on the number of musicians booked in that period."
      }
    ],
    
    techFeatures: [
      
      {
        id: 0,
        key: "Thoroughly Tested",
        value: "Unit tests with Jest and React Testing Library achieve a high code coverage threshold (87.56% Stmts, 88.25% lines), focusing on maintaining a consistent UI and critical logic. End-to-end tests with Playwright is currently under development."
      },
      {
        id: 1,
        key: "Robust Forms",
        value: "Forms built with Formik to perform database queries. Rigourously tested to provide a seamless experience, complete with Yup validation, error messages and feedback."
      },
      {
        id: 2,
        key: "Component Documentation",
        value: "Component cataloguing with Storybook is currently under development."
      },
      {
        id: 3,
        key: "Optimized Database Queries",
        value: "Efficient managemnet of CRUD operations with Prisma ORM on a PostGresQL database, using batched queries where possible."
      },
      {
        id: 4,
        key: "Optimised UX",
        value: "Server-Side Rendering and Static Generation (SSG) are utilised where possible to improve user experience."
      },
      {
        id: 5,
        key: "Webhooks and Integrations",
        value: "Twilio and Stripe webhooks updates as well as cron jobs handled in API route handlers."

      },
      {
        id: 6,
        key: "Concise Data Display",
        value: "HTML tables, thorough list filtering and sorting functions across various object arrays, ensuring clear and efficient presentation of complex data types."
      },
      {
        id: 7,
        key: "Responsive Calendar",
        value: "View events in a visually appealing calendar with day, week, month, and year views, optimized for all screen sizes."
      },
    ]
  },

  {
    id: 1,
    title: "Band Website",
    previewLink: 'https:/thebigfirkinband.com/',
    githubLink: 'https://github.com/danmolloy/firkin',
    images: [{
      imgSrc: '/images/firkin.png',
      imgWidth: '510',
      imgHeight: '780',
      imgAlt: "Hero section"
    }],
    stack: ["NextJS", "Figma", "Jest", "Tailwind CSS", "Formik & Yup", "Twilio", "Mailchimp"],
      blurb: "A modern, high-performance band website featuring Google Calendar integration and a Stripe-powered checkout for donations. The site boasts an attractive, responsive UI with a robust contact form built using Formik, Yup validation, and Twilio SendGrid, alongside a Mailchimp-powered newsletter signup. Optimized SEO ensures better search rankings, while Next.js performance enhancements—including Server-Side Rendering, lazy-loaded images, and next/font—keep the site fast and efficient. Thoroughly tested with Jest and React Testing Library, it delivers a seamless user experience, with Sentry integrated for real-time error monitoring. Designed to meet WCAG 2.0 accessibility standards, the site ensures inclusivity for all users.",
      
  },

  {
    id: 2,
    title: "TaskTrek",
    appStoreLink: "https://apps.apple.com/gb/app/tasktrek/id6462425051",
    githubLink: "https://github.com/danmolloy/routinee",
    blurb: "A habit tracking app available in the app store. CRUD operations, attractive UI and a variety of data rendering built using React Native. It was built as a personal exercise in creating native apps. It has been mildly successful, being downloaded over 500 times since late 2023.",
    images: 
      [
        {imgWidth: "584",
        imgHeight: "1272",
        imgSrc: '/images/taskTrek-home.png',
        imgAlt: "Home screen"},
        {imgWidth: "584",
          imgHeight: "1272",
          imgSrc: '/images/taskTrek-activity.png',
          imgAlt: "Activity detail view"},
          {imgWidth: "584",
            imgHeight: "1272",
            imgSrc: '/images/taskTrek-about.png',
            imgAlt: "About screen"}
      ],
    stack: ["React Native", "Expo", "TypeScript", "Formik", "Jest"],
  },
  {
    id: 3,
    title: "React Diary",
    previewLink: 'https://react-diary-example.vercel.app/',
    npmLink: "https://www.npmjs.com/package/react-diary",
    githubLink: 'https://github.com/danmolloy/react-diary',
    images:
      [{imgSrc: '/images/react-diary.png',
      imgWidth: '1132',
      imgHeight: '748',
      imgAlt: "MonthCalendar component."},
      {imgSrc: '/images/diary-datepicker.png',
        imgWidth: '800',
        imgHeight: '800',
        imgAlt: "DatePicker component."}
    ],
    blurb: "Unable to find a suitable calendar library for Gigfix, I built this component library for NPM. Simplifies scheduling events in calendars on a variety of screen sizes. It's proved to be more popular than expected with over 1600 downloads since it's release in April 2024.",
    stack: [ "Vite", "Storybook", "TypeScript", "Tailwind CSS", "Jest"]
  },
  {
    id: 4,
    title: "Task Manager",
    //previewLink: "https://taskhandle.azurewebsites.net/",
    githubLink: "https://github.com/danmolloy/taskManagement",
    images: [{
      imgSrc: "/images/taskManagement.png",
      imgWidth: "600",
      imgHeight: "700",
      imgAlt: "Home screen",
    }],
    stack: ["C#", "ASP.NET", "Entity Framework Core"], 
    blurb: "A simple task management app developed as a personal learning exercise in C# and ASP.NET. It provides users with a platform to manage their tasks efficiently and securely. Features include user auth and CRUD operations."
  },
  {
    id: 5,
    title: "RESTful|CMS",
    previewLink: 'https://restfulcms-production.up.railway.app/',
    githubLink: 'https://github.com/danmolloy/RESTfulCMS',
    images: [{
      imgSrc: '/images/restful-cms.png',
      imgWidth: '1546',
      imgHeight: '1270',
      imgAlt: "Index View"}],
      stack: ["Django", "Python", "CSS", "PostgresQL"],
      blurb: "A basic blogging CMS complete with an API endpoint, authorization and authentication, a variety of views and CRUD operations. Built with Django, PostgresQL and vanilla CSS, this was prodominantly a learning exercise in Django."
  },
]