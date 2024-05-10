# Portfolio Site
## Overview
This is a personal portfolio site, targeting potential employers. It features a hero section, projects section and contact form. It is robustly built, rigorously tested and has a responsive design.
Technically, the project has a focus on UI/UX design, performance, basic functionality and accessibility.

## Features
### User Experience
- **Dark mode toggle** for a customizable experience, adapting to the user's system preference. The toggle itself is built to provide an enjoyable user experience.
- **Contact Form** rigourously tested to provide a seamless experience, complete with validation, error messages and feedback.
- **Responsive Design** built with a mobile-first philosophy. The website continues to be manually tested on a variety of screen sizes to ensure a pleasurable experience.

### Technical Excellence
### Performance Optimization
Many built-in NextJS 14 features have been leveraged to optimize this site, including:
- **Sever Components** for almost all components, with the exception of those needing JavaScript (namely the dark mode toggle).
- **`next/font`**, removin the neccessity for external network requests.
- **`next/image`** for all images, making visual layout stability and only loading images when they enter the viewport.


## Technologies Used
- NextJS 14
- TypeScript
- Formik, Yup & NodeMailer
- Tailwind CSS

## Testing
Unit tests with Jest and React Testing Library achieve a very high code coverage threshold (89.18% of statements), focusing on maintaining a consistent UI, critical logic and contact form submission. An array of Jest matchers (e.g., .toBe, .toEqual, .toBeInTheDocument) are leveraged for effective assertions. Predictable UI output is maintained with snapshot tests for all components. Test suites are regularly reviewed to ensure failures are swiftly captured, and the site continues to be manually tested across a variety of screen sizes. The contact form is tested with Jest, and Yup is leveraged for validation.

## Accessibility
The site has been created with the aim of an inclusive experience for all users. It is continually tested and improved to adhere to Web Content Accessibility Guidelines (WCAG) 2.0 conformance standards, levering tools such as Google Lighthouse (scoring 100/100), ESLint (including `eslint-plugin-jsx-a11y` extension) and Chrome DevTools.

Implemented Features:
- **Semantic HTML** to improve navigation for screen readers and assistive technologies.
- **Keyboard Navigation** makes the entire site accessible for users who rely on a keyboard only.
- **Alternative Text** for all non-text content (i.e. images), ensuring a meaningful and improved access to this content.
- **Colour Contrast** is maintained between text and background colours according to WCAG guidelines, improving readability for users with visually impairments.
- **Focus Management** Clear and visible focus indicators, aiding navigation.
- **Form Accessibility** Concise labels for each input section, in addition to clear error messages upon incorrect data submission.

## Credits
The entire project has been designed and built by Daniel Molloy.


## Running this project locally
There are three env variables required for this project, specifically for Nodemailer. These are the sending email email address, password, and the recieving email address.

Below is an excerpt from the original NextJS readme for help running this project.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
