export type ProjectDivProps = {
  id: number
  title: string
  filters: string[]
  status: "Archived"|"Live"|"In Progress"
  soundBite?: string
  links: {
    github?: string
    preview?: string
    npm?: string
    appStore?: string
    website?: string
  }
  thumb?: {
    src: string
    imgWidth: string
    imgHeight: string
    imgAlt: string
  }
  images: {
    imgSrc: string
    imgWidth: string
    imgHeight: string
    imgAlt: string
  }[]
  blurb: string[]
  stack: string[]
}


export const projectsBlurb = "All projects are built with Test-Driven Development, RESTful API Integration, responsive mobile-first design and WCAG 2.0 Accessibility."



export const projectsArr: ProjectDivProps[] = [
  {
    id: 4,
    title: "Jam Jar",
    status: "Live",
    filters: ['frontend', 'backend'],
    soundBite: "Music practice tracking SaaS web app.",
    thumb: {
      src: "/images/jam-jar/background.png",
      imgWidth: '650',
      imgHeight: '650',
      imgAlt: "Jam Jar landing page"
    },
    links: {
      website: "https://www.jamjar.site/",
      github: "https://github.com/danmolloy/jam-jar-frontend",
    },
    images: [
      {
        imgSrc: "/images/jam-jar/landing.png",
        imgWidth: "747",
        imgHeight: "1080",
        imgAlt: "Landing Section"
      },
       {
        imgSrc: "/images/jam-jar/dashboard.png",
        imgWidth: "747",
        imgHeight: "1080",
        imgAlt: "Dashboard"
      },
       {
        imgSrc: "/images/jam-jar/charts.png",
        imgWidth: "747",
        imgHeight: "1080",
        imgAlt: "Charts Section"
      },
    ],
    stack: ["NextJS", "Django", "Postgresql", "AWS S3 & SES", "Stripe"],
    blurb: [
      `Jam Jar is a SaaS platform designed to help musicians structure and track their practice sessions, bringing the rigor of sports analytics to music education.`,
      `The app provides a complete practice management ecosystem where users can log sessions with descriptions and duration, set personalized goals, maintain practice diaries, and record audio to monitor progress over time. Advanced filtering with hashtags and activity types makes it easy to organize data, while interactive visualizations—including heat maps, bar charts, and rings—offer clear insights into practice habits.`,
      `Jam Jar combines Next.js 15 for the frontend with a robust Django REST Framework backend. It integrates Stripe for subscription billing, AWS S3 for secure audio storage, and PostgreSQL for relational data management. Authentication and authorization are handled via Auth.js with JWT tokens, while Tailwind CSS and Recharts ensure a responsive and visually appealing interface. Comprehensive testing spans Django, Jest, and React Testing Library, ensuring reliability across the stack.`
    ]
  },
  {
    filters: ['frontend'],
        status: "Live",

    soundBite: "Elegant and responsive site for a musician, rich with detail.",
    thumb: {
      src: "/images/fio-kelly/fk-thumb.png",
      imgWidth: '650',
      imgHeight: '650',
      imgAlt: "Fiona Kelly landing page"
    },
    id: 0,
    title: "Fiona Kelly",
    links: {
      preview: "https://www.fionakellyflute.com/",
      github: "https://github.com/danmolloy/fio-kelly",
    },
    images: [
      {
        imgSrc: "/images/fio-kelly/fk-hero.png",
        imgWidth: "375",
        imgHeight: "667",
        imgAlt: "Landing Section"
      },
      {
        imgSrc: "/images/fio-kelly/fk-menu.png",
        imgWidth: "375",
        imgHeight: "667",
        imgAlt: "Menu"
      },
       
      {
        imgSrc: "/images/fio-kelly/fk-photos.png",
        imgWidth: "375",
        imgHeight: "667",
        imgAlt: "Gallery Section"
      },

      {
        imgSrc: "/images/fio-kelly/fk-albums.png",
        imgWidth: "375",
        imgHeight: "667",
        imgAlt: "Recordings Section"
      },
    ],
    blurb: [
      `Fiona Kelly is a responsive, high-performance website built for a freelance musician, showcasing how thoughtful frontend design can elevate a personal brand. More than just a static portfolio, the site is designed to engage visitors through micro-interactions and smooth motion transitions, creating a browsing experience that feels dynamic and memorable.`,
      `The project is powered by Next.js 15, TypeScript, and Tailwind CSS, combining modern development practices with a maintainable stack. A robust contact form was implemented using Formik with Yup validation, ensuring reliability before messages are sent via AWS SES. Performance and accessibility were top priorities: the site leverages Next.js Image optimization and next/font for efficient rendering, achieving a 100 Lighthouse score while conforming to WCAG 2.0 accessibility standards. Features such as semantic HTML, keyboard navigation, proper alt text, and color contrast testing ensure inclusivity for all users.`,
      `In addition, the site is continuously monitored with Sentry, allowing errors to be tracked and addressed quickly.`
    ],
    stack: ["NextJS", "TypeScript", "Tailwind CSS", "Formik & Yup", "Sentry"]
  },
  {
        filters: ['frontend'],
    status: "Live",

    soundBite: "Modern high performance website with Sumup donations, calendar sync and accessible UX.",
    id: 1,
    title: "The Big Firkin Band",
    thumb: {
      src: "/images/firkin/firkin-thumb.png",
      imgWidth: '600',
      imgHeight: '600',
      imgAlt: "The Big Firkin Band landing page"
    },
    links: {
      preview: 'https://www.thebigfirkinband.com/',
      github: 'https://github.com/danmolloy/firkin',
    },
    images: [
      {
      imgSrc: '/images/firkin/firkin.png',
      imgWidth: "375",
      imgHeight: "667",
      imgAlt: "Hero section"
    },
    {
      imgSrc: '/images/firkin/calendar.png',
      imgWidth: "375",
      imgHeight: "667",
      imgAlt: "Calendar section"
    },
    {
      imgSrc: '/images/firkin/gallery.png',
      imgWidth: "375",
      imgHeight: "667",
      imgAlt: "Gallery section"
    },
    {
      imgSrc: '/images/firkin/about.png',
      imgWidth: "375",
      imgHeight: "667",
      imgAlt: "About section"
    },
    {
      imgSrc: '/images/firkin/menu.png',
      imgWidth: "375",
      imgHeight: "667",
      imgAlt: "Menu section"
    },

  ],
    stack: ["NextJS", "Figma", "Jest", "Tailwind CSS", "Formik & Yup", "Twilio", "Mailchimp"],
      blurb: [
        `Firkin is a modern website built for a professional jazz big band, designed to capture the group’s playful character while providing promoters and audiences with clear, up-to-date information. At the heart of the site is a dynamic events calendar, which fetches scheduling data directly from a public Google Calendar using Next.js Server Components. This ensures the latest event details are always displayed, with built-in error handling for missing or malformed data.`,
        `The site also features a robust contact form powered by Formik with Yup validation, delivering reliable submissions via AWS SES. Every interaction is designed to feel engaging, with thoughtful transitions and micro-interactions that keep users connected to the brand identity.`,
        `Technically, Firkin is built with Next.js 15, TypeScript, and Tailwind CSS, forming a lightweight and maintainable stack. It prioritizes performance through Next.js Image optimization and next/font, and achieves a 100 Lighthouse score while meeting WCAG 2.0 accessibility standards with semantic HTML, keyboard navigation, alt text, and color contrast. The site is actively monitored with Sentry to ensure smooth operation.`
      ]
    },
  {
        filters: ['frontend', 'backend'],
    status: "Archived",

    soundBite: "Full-stack communications and bookings platform for orchestras.",
    id: 2,
    title: "GigFix",
    links: {
      preview: "https://gig-fix.vercel.app/",
      github: "https://github.com/danmolloy/fixer",
    },
    images: [
      {
        imgSrc: '/images/gigfix/list.png',
      imgWidth: "375",
      imgHeight: "667",
      imgAlt: "Orchestra list"
      },
      {
        imgSrc: '/images/gigfix/gig-info.png',
      imgWidth: "375",
      imgHeight: "667",
      imgAlt: "Gig Info"
      },
      {
        imgSrc: '/images/gigfix/calendar.png',
      imgWidth: "375",
      imgHeight: "667",
      imgAlt: "Calendar view"
      },
    ],
    stack: ["NextJS", "TypeScript", "Node.js","Tailwind CSS", "Formik & Yup", "Auth.js", "Prisma & PostgresQL", "Twilio SMS & SendGrid", "Stripe", "Jest, React Testing Library & Playwright"],
      blurb: [
        `GigFix is a specialized communications platform designed to streamline orchestra management by centralizing bookings, event details, and communication with musicians. Traditionally, organizing players for rehearsals and performances involves a fragmented process of calls, spreadsheets, and messages. GigFix simplifies this workflow by giving management teams the ability to create events, assign musicians, and instantly relay updates through automated email and SMS notifications.`,
        `The platform supports team accounts with role-based access, a musician address book, detailed gig pages, and an integrated calendar with week, month, and year views. Its flexible booking system allows managers to check availability, assign varying numbers of players to rehearsals, and send personalized messages directly to musicians—ensuring everyone stays aligned.`,
        `Technically, GigFix is built with a lean, modern stack: Next.js, TypeScript, Tailwind CSS, Prisma, and PostgreSQL, with authentication and billing powered by Auth.js and Stripe. Communication tools are integrated via Twilio SMS and SendGrid. The app is rigorously tested with Jest, React Testing Library, and Playwright, and adheres to WCAG 2.0 accessibility standards.`,
        `This project has been archived for the foreseeable future and is not currently maintained.`
      ],
      thumb: {
      src: "/images/gigfix/gig-fix-thumb.png",
      imgWidth: '600',
      imgHeight: '600',
      imgAlt: "GigFix landing page"
    },
    
  },
  {
      filters: ['mobile'],
          status: "Live",
      id: 3,
      title: "Tuner",
      links: {
        github: "https://github.com/danmolloy/tuner",
        appStore: "https://apps.apple.com/gb/app/tuner/id6746412805",
      },
      images: [
        {
        imgSrc: '/images/tuner/home.png',
      imgWidth: "332",
      imgHeight: "726",
      imgAlt: "Tuner interface"
      },
       {
        imgSrc: '/images/tuner/about.png',
      imgWidth: "332",
      imgHeight: "726",
      imgAlt: "About page"
      },
       {
        imgSrc: '/images/tuner/settings.png',
      imgWidth: "332",
      imgHeight: "726",
      imgAlt: "Settings page"
      },
      ],
      stack: ["React Native", "Expo EAS", "Pitchy"],
      blurb: [
        `Chromatic Tuner is a professional-grade mobile app that delivers studio-quality tuning in an interface designed for musicians of all levels. Built for precision and accessibility, it uses real-time audio processing with the Pitchy library to provide accurate frequency detection, supporting both fully chromatic tuning and instrument-specific modes for guitar and bass. Musicians can tailor their experience by selecting different meter displays, adjusting calibration, and exploring temperament options ranging from equal temperament and just intonation to a variety of historical tunings. Beyond pitch detection, the app includes a built-in ToneJS drone generator, offering reference tones from C1 to C8 for ear training and practice.`,
        `Developed with React Native, Expo EAS, and TypeScript, Chromatic Tuner demonstrates modern mobile development practices with cross-platform deployment in mind. The app’s interface emphasizes both functionality and aesthetics, standing out from typical tuner designs with a distinctive styled look that proves professional tools can also be visually engaging.`


      ],
      thumb: {
      src: "/images/tuner/tuner-icon.png",
      imgWidth: '600',
      imgHeight: '600',
      imgAlt: "Tuner app icon"
      }
    }


  /* {
    soundBite: "Full-stack communications and bookings platform for orchestras.",
    id:10,
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
    stack: ["NextJS", "TypeScript", "Node.js","Tailwind CSS", "Formik & Yup", "Auth.js", "Prisma & PostgresQL", "Twilio SMS & SendGrid", "Stripe", "Jest, React Testing Library & Playwright"],
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
    soundBite: 'Fully featured habit tracker app using React Native and modern UI patterns.',
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
  }, */
  /* {
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
  }, */
/*   {
    soundBite: "Personal project: full-stack task manager with C# backend and user auth.",
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
    soundBite: "Blogging CMS built with Django and PostgreSQL, featuring full auth and CRUD.",
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
  }, */
]