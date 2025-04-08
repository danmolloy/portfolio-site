import Link from "next/link";
import AboutSection from "./about";
import ContactSection from "./contact"
import Projects from "./projects";
import { FaChevronDown, FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function Page() {
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
      <Image className="hidden dark:block bottom-32 absolute md:bottom-0" src={'/skyline-night.png'} height={3394/2} width={8633/2} alt="Brisbane city skyline"/>
      <Image className="block dark:hidden bottom-32 absolute md:bottom-0" src={'/skyline-day.png'} height={3394/2} width={8633/2} alt="Brisbane city skyline"/>
      {/* <div className="absolute bottom-4">

    <FaChevronDown />
      </div> */}
    </section>
     <Projects />

    <section className="w-[95vw] m-2 flex flex-col items-center  min-h-[80vh] lg:w-2/3">
      <ContactSection />
    </section>
  </div>
  )
}