import Link from "next/link";
import AboutSection from "./about";
import ContactSection from "./contact"
import Projects from "./projects";
import { FaChevronDown, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Page() {
  return (
    <div data-testid="index-section" className="w-screen flex flex-col items-center">
      <div className="w-36 h-24 outline top-0 left-0 mt-36 mr-24 fixed bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] blur-3xl" />
      <div className="w-36 h-36 outline bottom-0 mb-24 ml-48 fixed bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] blur-3xl" />
    <section data-testid="hero-section" className="  flex flex-col items-center h-screen  w-screen">
      <div className=" text-center mt-36 mx-12 font-medium">
        <h1 className="text-4xl ">
          Daniel Molloy
        </h1>
        <p className="text-2xl">
          Web Developer
        </p>
        <div className="flex flex-row justify-center">
          <Link className="text-lg m-1 hover:text-gray-600" href={'https://github.com/danmolloy/'}>
            <FaGithub />        
          </Link>
          <Link className="text-lg m-1 hover:text-gray-600" href={'https://www.linkedin.com/in/daniel-molloy-8b517032b/'}>
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