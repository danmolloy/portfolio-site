'use client'

import Link from "next/link"
import { useEffect, useRef } from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handleScroll = () => {
      const offset = Math.min(window.scrollY, 96);
      if (scrollRef.current) {
        scrollRef.current.style.transform = `translateY(${offset * .5}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <section data-testid="hero-section" className="pt-36 pb-24 px-2 flex flex-col items-start justify-between h-screen  w-screen">
            {/* <div className=" h-[44px]  overflow-hidden relative w-full" >
              <div ref={scrollRef} className="absolute -top-[56px]">

            <h1 className="text-6xl font-bold self-start -mb-3">
              DANIEL MOLLOY
            </h1>
            <h1 className="text-6xl font-bold self-start -mt-3">
              DANIEL MOLLOY
            </h1>
            
              </div>
            </div> */}
            <h1 className="text-7xl font-bold self-start ">
              DANIEL MOLLOY
            </h1>
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row items-end justify-start">
              <Link className="text-xl md:text-md  hover:text-gray-500 m-1" href={'https://github.com/danmolloy/'}>
                <FaGithub />        
              </Link>
              <Link className="text-xl md:text-md ml-1 hover:text-gray-500 m-1" href={'https://www.linkedin.com/in/daniel-molloy-8b517032b/'}>
                <FaLinkedin />
              </Link>
              
            </div>
            <div className="flex flex-col justify-start text-sm text-right self-end mr-2">
            <p className="">
              frontend development
            </p>
            <p className="">
              backend services
            </p>
            <p className="">
              mobile apps
            </p>
            <p className="">
              full stack engineering
            </p>
            <p className="">
              ui/ux design
            </p>
              </div>

            </div>
          
        </section>
  )
}