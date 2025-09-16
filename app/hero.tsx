'use client'

import Link from "next/link"
import { useEffect, useRef } from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { motion, useScroll, useTransform } from "framer-motion"
export default function Hero() {
  const { scrollYProgress } = useScroll();

  return (
    <section data-testid="hero-section" className="pt-36 pb-24 px-2 flex flex-col items-start justify-between h-screen  w-screen">
             <div className=" flex flex-row flex-wrap w-full justify-start items-start ">
             <div className=" h-[60px]  overflow-hidden relative  w-[280px] " >
              <motion.div 
                style={{
                  y: useTransform(scrollYProgress, [0, 0.1], [0, 64])
                }}
                className="absolute -top-[64px] "
              >

            <h1 className="text-7xl font-bold self-start -mb-3 ">
              DANIEL
            </h1>
            <motion.h1
              key={"daniel"}
                          initial={{ opacity: 0,  }}

              whileInView={{ opacity: 1, }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.025, delay:   0.25 }}
              className="text-7xl font-bold self-start -mt-3">
              DANIEL
            </motion.h1>
            
              </motion.div>
            </div> 
            <div className=" h-[60px]  overflow-hidden relative w-[300px] " >
              <motion.div 
                style={{
                  y: useTransform(scrollYProgress, [0, 0.1], [0, 64])
                }}
                className="absolute -top-[64px]"
              >

            <h1 className="text-7xl font-bold self-start -mb-3">
              MOLLOY
            </h1>
            <motion.h1
                        initial={{ opacity: 0,  }}

              key={"molloy"}
              whileInView={{ opacity: 1, }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.025, delay:   0.5 }}
              
             className="text-7xl font-bold self-start -mt-3">
              MOLLOY
            </motion.h1>
            </motion.div>
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
              transition={{ duration: 0.2, delay:   1 }}
              className="text-xl md:text-md  hover:text-gray-500 m-1" href={'https://github.com/danmolloy/'}>
                <FaGithub />        
              </motion.a>
              <motion.a 
                          initial={{ opacity: 0,  }}

              whileInView={{ opacity: 1, }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.2, delay:   1 }}
              className="text-xl md:text-md ml-1 hover:text-gray-500 m-1" href={'https://www.linkedin.com/in/daniel-molloy-8b517032b/'}>
                <FaLinkedin />
              </motion.a>
              
            </div>
            <div className="flex flex-col justify-start text-sm text-right self-end mr-2">
            <motion.p 
            initial={{ opacity: 0,  }}
              whileInView={{ opacity: 1, }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.05, delay:   2.1 - .5 }}
            className="">
              frontend development
            </motion.p>
            <motion.p 
            initial={{ opacity: 0,  }}
              whileInView={{ opacity: 1, }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.05, delay:   2.25 - .5 }}
            className="">
              backend services
            </motion.p>
            <motion.p 
            initial={{ opacity: 0,  }}
              whileInView={{ opacity: 1, }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.05, delay:   2.4 - .5 }}
            className="">
              mobile apps
            </motion.p>
            <motion.p 
            initial={{ opacity: 0,  }}
              whileInView={{ opacity: 1, }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.05, delay:   2.55 - .5 }}
            className="">
              full stack engineering
            </motion.p>
            <motion.p 
            initial={{ opacity: 0,  }}
              whileInView={{ opacity: 1, }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.05, delay:   2.7 - .5 }}
            className="">
              ui/ux design
            </motion.p>
              </div>

            </div>
          
        </section>
  )
}