import Link from "next/link";
import AboutSection from "./about";
import ContactSection from "./contact"
import Projects from "./projects";
import { FaChevronDown, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Page() {
  return (
    <div data-testid="index-section" className="w-screen flex flex-col items-center">
    <section data-testid="hero-section" className="  flex flex-col items-center h-screen justify-start w-screen">
      <div className="text-start self-start mt-24 mx-12">
        <h1 className="text-3xl font-display">
          Daniel Molloy
        </h1>
        <p className="text-xl">
          Web Developer
        </p>
        <div className="flex flex-row">
          <Link className="text-lg m-1 hover:text-gray-600" href={'https://github.com/danmolloy/'}>
            <FaGithub />        
          </Link>
          <Link className="text-lg m-1 hover:text-gray-600" href={'https://uk.linkedin.com/'}>
            <FaLinkedin />
          </Link>

        </div>

      </div>
      <div className="absolute bottom-4">

    <FaChevronDown />
      </div>
    </section>
     <Projects />
    {/* <div className="w-[95vw] m-2 flex flex-col items-center  min-h-[80vh] lg:w-2/3"> 
      <AboutSection />
    </div> */}
    <section className="w-[95vw] m-2 flex flex-col items-center  min-h-[80vh] lg:w-2/3">
      <ContactSection />
    </section>
  </div>
  )
}