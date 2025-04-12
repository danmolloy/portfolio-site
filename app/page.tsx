'use server'
import Link from "next/link";
import AboutSection from "./about";
import ContactSection from "./contact"
import Projects from "./projects";
import { FaChevronDown, FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default async function Page() {
  return (
    <div data-testid="index-section" className="w-screen flex flex-col items-center ">
    <section data-testid="hero-section" className="  flex flex-col items-center h-screen  w-screen">
      <div className=" text-center mt-36 mx-12 font-medium">
        <h1 className="text-4xl ">
          Daniel Molloy
        </h1>
        <p className="text-2xl">
          Web Developer
        </p>
        <div className="flex flex-row justify-center">
          <Link className="text-lg md:text-xl m-1 hover:text-gray-500" href={'https://github.com/danmolloy/'}>
            <FaGithub />        
          </Link>
          <Link className="text-lg md:text-xl m-1 hover:text-gray-500" href={'https://www.linkedin.com/in/daniel-molloy-8b517032b/'}>
            <FaLinkedin />
          </Link>
        
        </div>

      </div>
      <div className="w-screen overflow-hidden absolute bottom-24 md:bottom-0">
  <Image
    priority={true}
    className="hidden dark:block mx-auto"
    src={'/skyline-night.png'}
    height={3394 / 2}
    width={8633 / 2}
    alt="Brisbane city skyline"
  />
  <Image
    priority={true}
    className="block dark:hidden mx-auto"
    src={'/skyline-day.png'}
    height={3394 / 2}
    width={8633 / 2}
    alt="Brisbane city skyline"
  />
</div>
    </section>
     <Projects />

    <section className="w-[95vw] m-2 flex flex-col items-center  min-h-[80vh] lg:w-2/3">
      <ContactSection />
    </section>
  </div>
  )
}