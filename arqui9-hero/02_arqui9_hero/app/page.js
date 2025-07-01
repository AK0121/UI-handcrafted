"use client"

import Header from "./components/Header";
import TransitionPage from "./components/TransitionPage";
import { IoIosArrowRoundDown } from "react-icons/io";
import { motion } from "framer-motion";

export default function Home() {
  return (  
    <div className="overflow-x-hidden h-[300vh] w-full font-body">
      <TransitionPage />
      <Header />
      <section className="hero-section w-full max-w-[100rem] mx-auto">
        <motion.div
        initial={{ clipPath: "polygon(25% 44%, 55% 24%, 71% 46%, 39% 67%)", scale: 0 }}
        animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", scale: 1}}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
        className="relative container w-full h-screen bg-center">
          <video autoPlay loop muted className="absolute top-0 left-0 object-cover w-full h-full">
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
            <h4 className="absolute top-72 left-56 text-lg font-lg font-bold text-white transform -translate-x-1/2 -translate-y-1/2 uppercase">
              Visualising this world and the next
            </h4>
            <h4 className="text-white absolute text-[15px] top-72 -right-5 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center gap-2 uppercase underline hover:text-black transition-colors duration-100 ease-in cursor-pointer">
              <span>Scroll down</span>
              <IoIosArrowRoundDown className="text-xl"/>
            </h4>
            <div className="absolute left-1/2 -bottom-32 transform -translate-x-1/2 -translate-y-1/2 flex text-[12rem] font-title font-extralight gap-6 italic">
            <h1>
              A
            </h1>
            <h1>
              K
            </h1>
            <h1>
              0
            </h1>
            <h1>
              1
            </h1>
            <h1>
              2
            </h1>
            <h1>
              1
            </h1>
        </div>
        </motion.div>
      </section>
    </div>
  );
}
