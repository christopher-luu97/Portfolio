/** From: https://braydentw.io/ */
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";
import Link from "next/link";
import { ScrollToTop } from "../hooks/ScrollToTop";
import Skills from "../components/skills";
import { Navbar } from "../components/navbar";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Projects from "../components/projects";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillCode,
  AiFillRead,
  AiFillLayout,
  AiFillAndroid,
} from "react-icons/ai";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div
        className="w-full m-auto flex flex-col items-center justify-center min-h-screen"
        style={{ maxWidth: "1400px" }}
      >
        <Head>
          <title>Christopher Luu Portfolio</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main
          className="bg-white px-10 md:px-20 lg:px-40 
      transition-colors duration-1000
      dark:bg-gray-900 "
        >
          <section className="min-h-screen">
            <Navbar currentPage="Home" />
            <div className="flex flex-col items-center sm:justify-center sm:flex-row text-justify relative">
              <Image
                src="/chrluu high res-modified.png"
                width="250"
                height="250"
                layoutfill={true}
                wrapper="h-60  w-1/2 bg-red-100 relative flex justify-center"
              />
            </div>
            <section>
              <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white">
                <a>
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-4xl dark:text-white"
                  />
                </a>
                <a
                  target="_blank"
                  href="https://github.com/christopher-luu97"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub className="cursor-pointer" />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/christopher-luu-542691149/"
                  rel="noopener noreferrer"
                >
                  <AiFillLinkedin className="cursor-pointer" />
                </a>
              </div>
            </section>
            <div className="text-center">
              <h2 className="text-5xl py-2 text-sky-600 font-medium md:text-6xl">
                Christopher Luu
              </h2>
              <h3 className="text-2xl font-bold py-2 md:text-3xl dark:text-white">
                Engineer | Software Developer | Consultant
              </h3>
              <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">
                Professional Engineer working as a Consultant within Data
                Science. I develop software leveraging AI to augment decision
                making for clients. Look below to see some of my projects!
              </p>
              <ScrollLink
                activeClass="active"
                to="skillsExperience"
                spy={true}
                offset={-30}
                smooth={true}
                duration={500}
              >
                <div className="cursor-pointer font-bold whitespace-nowrap px-10 py-4 border-2 text-xl rounded-full border-fun-white text-gray-500 hover:text-black dark:hover:text-white">
                  Tell me more
                </div>
              </ScrollLink>
            </div>
            <div id="skillsExperience" className="text-center">
              <h3 className="text-3xl font-bold py-1 dark:text-white">
                Skills & Experience
              </h3>
              <br />
              <Skills />
            </div>
            <div className="lg:flex items-stretch gap-10 p-10">
              <div className="transform transition duration-500 hover:scale-105 hover:shadow-cyan-700 shadow-cyan-800/40  flex-1 justify-center items-center text-center shadow-lg p-5 rounded-xl my-10 dark:bg-white">
                <AiFillCode className="text-5xl flex justify-center gap-16 py-3 text-cyan-800" />
                <h3 className="font-bold">Software Developement</h3>
                <p className="py-2">Developing software to suit your needs.</p>
              </div>
              <div className="transform transition duration-500 hover:scale-105 hover:shadow-cyan-700 shadow-cyan-800/40 flex-1 text-center shadow-lg p-5 rounded-xl my-10 dark:bg-white">
                <AiFillRead className="text-5xl flex justify-center gap-16 py-3 text-cyan-700" />
                <h3 className="font-bold">Consulting</h3>
                <p className="py-2">
                  Tailoring bespoke solutions and strategies for your wicked
                  problems
                </p>
              </div>
              <div className="transform transition duration-500 hover:scale-105 hover:shadow-cyan-700 shadow-cyan-800/40 flex-1 text-center shadow-lg p-5 rounded-xl my-10 dark:bg-white">
                <AiFillLayout className="text-5xl flex justify-center gap-16 py-3 text-cyan-600" />
                <h3 className="font-bold">Systems Design</h3>
                <p className="py-2">
                  Designing robust systems to take proof-of-concepts to MVP
                </p>
              </div>
            </div>
          </section>
          <section>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <h3 className="text-3x py-1">Portfolio</h3>
              <Projects />
            </div>
          </section>
          <ScrollToTop />
        </main>
      </div>
    </div>
  );
}
