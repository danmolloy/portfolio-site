'use client'

import Link from "next/link"
import { useEffect, useRef } from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { motion } from "framer-motion"
export default function Hero() {
  const firstRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handleScroll = () => {
      const offset = Math.min(window.scrollY, 96);
      if (firstRef.current && secondRef.current) {
        firstRef.current.style.transform = `translateY(${offset * .6}px)`;
                secondRef.current.style.transform = `translateY(${offset * .6}px)`;

      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <section data-testid="hero-section" className="pt-36 pb-24 px-2 flex flex-col items-start justify-between h-screen  w-screen">
             <div className=" flex flex-row flex-wrap w-screen justify-start items-start">
             <div className=" h-[60px]  overflow-hidden relative  w-[280px] " >
              <div ref={firstRef} className="absolute -top-[64px]  ">

            <h1 className="text-7xl font-bold self-start -mb-3 ">
              DANIEL
            </h1>
            <motion.h1
              key={"daniel"}
              initial={{ opacity: 0,  }}
              whileInView={{ opacity: 1, }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.025, delay:   0.5 }}
              className="text-7xl font-bold self-start -mt-3">
              DANIEL
            </motion.h1>
            
              </div>
            </div> 
            <div className=" h-[60px]  overflow-hidden relative w-[300px] " >
              <div ref={secondRef} className="absolute -top-[64px]">

            <h1 className="text-7xl font-bold self-start -mb-3">
              MOLLOY
            </h1>
            <motion.h1
              key={"molloy"}
              initial={{ opacity: 0,  }}
              whileInView={{ opacity: 1, }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.025, delay:   0.5 }}
              
             className="text-7xl font-bold self-start -mt-3">
              MOLLOY
            </motion.h1>
            </div>
              </div>
            </div> 
            {/* <h1 className="text-7xl font-bold self-start ">
              DANIEL MOLLOY
            </h1> */}
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row items-end justify-start">
              
              <motion.a 
              initial={{ opacity: 0,  }}
              whileInView={{ opacity: 1, }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.2, delay:   2.5 }}
              className="text-xl md:text-md  hover:text-gray-500 m-1" href={'https://github.com/danmolloy/'}>
                <FaGithub />        
              </motion.a>
              <motion.a 
              initial={{ opacity: 0,  }}
              whileInView={{ opacity: 1, }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.2, delay:   2.7 }}
              className="text-xl md:text-md ml-1 hover:text-gray-500 m-1" href={'https://www.linkedin.com/in/daniel-molloy-8b517032b/'}>
                <FaLinkedin />
              </motion.a>
              
            </div>
            <div className="flex flex-col justify-start text-sm text-right self-end mr-2">
            <motion.p 
            initial={{ opacity: 0,  }}
              whileInView={{ opacity: 1, }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.05, delay:   1 }}
            className="">
              frontend development
            </motion.p>
            <motion.p 
            initial={{ opacity: 0,  }}
              whileInView={{ opacity: 1, }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.05, delay:   1.2 }}
            className="">
              backend services
            </motion.p>
            <motion.p 
            initial={{ opacity: 0,  }}
              whileInView={{ opacity: 1, }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.05, delay:   1.4 }}
            className="">
              mobile apps
            </motion.p>
            <motion.p 
            initial={{ opacity: 0,  }}
              whileInView={{ opacity: 1, }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.05, delay:   1.6 }}
            className="">
              full stack engineering
            </motion.p>
            <motion.p 
            initial={{ opacity: 0,  }}
              whileInView={{ opacity: 1, }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.05, delay:   1.8 }}
            className="">
              ui/ux design
            </motion.p>
              </div>

            </div>
          
        </section>
  )
}