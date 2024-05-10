import AboutSection from "./about";
import ContactSection from "./contact"
import Projects from "./projects";
import { FaChevronDown } from "react-icons/fa";

export default function Page() {
  return (
    <div data-testid="index-section" className="dark:bg-zinc-900 dark:text-zinc-300  transition duration-1000  w-screen flex flex-col items-center">
    <div data-testid="hero-section" className="  flex bg-black text-white flex-col items-center h-screen justify-evenly w-screen">
      <div className="text-center my-3">
        <h1 className="text-3xl">
          Daniel Molloy
        </h1>
        <p className="text-xl">
          Web Developer
        </p>
      </div>
      <div className="absolute bottom-4">

    <FaChevronDown />
      </div>
    </div>
     <Projects />
    {/* <div className="w-[95vw] m-2 flex flex-col items-center  min-h-[80vh] lg:w-2/3"> 
      <AboutSection />
    </div> */}
    <div className="w-[95vw] m-2 flex flex-col items-center  min-h-[80vh] lg:w-2/3">
      <ContactSection />
    </div>
  </div>
  )
}