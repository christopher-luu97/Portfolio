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
import consultingImg from "../public/assets/skills/consulting.jpg";
import systemsImg from "../public/assets/skills/systems_design.jpg";
import codingImg from "../public/assets/skills/coding.jpg";
import Footer from "../components/Footer";

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
      <div className="bg-[#DCDDDF] transition-colors duration-1000 dark:bg-[#2A4C65] ">
        <div
          className="w-full m-auto flex flex-col items-center justify-center min-h-screen"
          style={{ maxWidth: "1400px" }}
        >
          <Head>
            <title>Christopher Luu Portfolio</title>
            <meta name="description" content="Generated by create next app" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className="px-10 md:px-20 lg:px-40">
            <section className="min-h-screen">
              <Navbar currentPage="Home" />
              <div className="flex flex-col items-center sm:justify-center sm:flex-row text-justify relative ">
                <Image
                  src="/chrluu high res-modified.png"
                  alt="/"
                  width="250"
                  height="250"
                  layoutfill="true"
                  wrapper="h-60  w-1/2 bg-red-100 relative flex justify-center"
                />
              </div>
              <section>
                <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white">
                  <div className="pt-2">
                    <a>
                      <BsFillMoonStarsFill
                        onClick={() => setDarkMode(!darkMode)}
                        className="cursor-pointer text-4xl dark:text-white"
                      />
                    </a>
                  </div>

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
                <div className="relative w-full pb-40 m-auto flex justify-center text-center flex-col items-center z-1">
                  <h2 className="text-5xl py-2 text-sky-600 font-medium md:text-6xl dark:text-[#B3CAD8]">
                    Christopher Luu
                  </h2>
                  <h3 className="text-2xl font-bold py-2 md:text-3xl dark:text-white">
                    Engineer | Software Developer | Consultant
                  </h3>
                  <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">
                    Professional Engineer working as a Consultant within Data
                    Science. I develop software leveraging AI to augment
                    decision making and enhance efficiency for clients. Look
                    below to see my skills and projects!
                  </p>
                  <ScrollLink
                    activeClass="active"
                    to="skillsExperience"
                    spy={true}
                    offset={-30}
                    smooth={true}
                    duration={500}
                  >
                    <div
                      className="cursor-pointer font-bold whitespace-nowrap px-10 py-4 border-2 
                    text-xl rounded-full border-gray-500 text-gray-500
                     hover:border-black hover:text-black dark:hover:text-white dark:hover:border-white"
                    >
                      Tell me more
                    </div>
                  </ScrollLink>
                </div>
              </section>
            </section>
            <section>
              <div id="skillsExperience" className="text-center">
                <div className="shadow-lg rounded-3xl pb-10 shadow-[#75809C] bg-[#F2EEED] dark:bg-[#37668a] dark:shadow-[#E3E7EA]">
                  <div className="px-10">
                    <Skills />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-start">
                <div
                  className="shadow-[#75809C] dark:shadow-[#E3E7EA]
                  relative preserve-3d hover:my-rotate-y-180 
                  transform transition-all duration-1000
                  flex-1 justify-center items-center text-center shadow-lg p-5 rounded-3xl my-10
                  hover:shadow-[#75809C] bg-[#F2EEED]
                  dark:bg-[#37668a]"
                >
                  <div className="backface-hidden h-48 bg-white rounded-3xl">
                    <Image
                      className="h-full w-full rounded-3xl object-scale-down shadow-md shadow-[#75809C]"
                      src={codingImg}
                      alt="/"
                    />
                  </div>
                  <div className="flex my-rotate-y-180 backface-hidden absolute inset-0 h-full w-full rounded-3xl px-8 py-8 text-center">
                    <div className="m-auto rounded-3xl ring-2 ring-[#75809C] shadow-md shadow-[#75809C] dark:ring-white dark:shadow-[#E3E7EA]">
                      <div className="pt-5 px-5">
                        <AiFillCode className="h-16 w-full pt-2 text-5xl text-[#2A4C65] dark:text-white " />
                        <h3 className="pt-2 py-1 font-bold dark:text-white">
                          Software Developement
                        </h3>
                        <p className="pt-1 py-2 dark:text-white">
                          Developing applications to suit your needs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="shadow-[#75809C] dark:shadow-[#E3E7EA]
                  relative preserve-3d hover:my-rotate-y-180 
                  transform transition-all duration-1000
                  flex-1 justify-center items-center text-center shadow-lg p-5 rounded-3xl my-10
                  hover:shadow-[#75809C] bg-[#F2EEED]
                  dark:bg-[#37668a]"
                >
                  <div className="h-48 backface-hidden bg-white rounded-3xl">
                    <Image
                      className="h-full w-full rounded-3xl object-cover shadow-md shadow-[#75809C]"
                      src={consultingImg}
                      alt="/"
                    />
                  </div>
                  <div className="flex my-rotate-y-180 backface-hidden absolute inset-0 h-full w-full rounded-xl px-8 py-8 text-center">
                    <div className="m-auto rounded-3xl ring-2 ring-[#75809C] shadow-md shadow-[#75809C] dark:ring-white dark:shadow-[#E3E7EA]">
                      <div className="pt-5 px-5">
                        <AiFillRead className="h-16 w-full text-5xl pt-2 flex justify-center text-[#2A4C65] dark:text-white" />
                        <h3 className="pt-2 font-bold py-1 dark:text-white">
                          Consulting
                        </h3>
                        <p className="pt-1 py-2 dark:text-white">
                          Tailoring bespoke solutions and strategies.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="shadow-[#75809C] dark:shadow-[#E3E7EA]
                  relative preserve-3d hover:my-rotate-y-180 
                  transform transition-all duration-1000
                  flex-1 justify-center items-center text-center shadow-lg p-5 rounded-3xl my-10
                  hover:shadow-[#75809C] bg-[#F2EEED]
                  dark:bg-[#37668a]"
                >
                  <div className="h-48 backface-hidden bg-white rounded-3xl">
                    <Image
                      className="h-full w-full rounded-3xl object-scale-down shadow-md shadow-[#75809C]"
                      src={systemsImg}
                      alt="/"
                    />
                  </div>
                  <div className="flex my-rotate-y-180 backface-hidden absolute inset-0 h-full w-full rounded-3xl px-8 py-8 text-center">
                    <div className="m-auto rounded-3xl ring-2 ring-[#75809C] shadow-md shadow-[#75809C] dark:ring-white dark:shadow-[#E3E7EA]">
                      <div className="pt-5 px-5">
                        <AiFillLayout className="h-16 w-full text-5xl flex justify-center text-[#2A4C65] dark:text-white" />
                        <h3 className="pt-2 font-bold py-1 dark:text-white">
                          Systems Design
                        </h3>
                        <p className="pt-1 py-2 dark:text-white">
                          Designing robust systems from ideation to production
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="shadow-lg rounded-3xl shadow-[#75809C] bg-[#F2EEED] dark:bg-[#37668a] dark:shadow-[#E3E7EA]">
                <div className="flex flex-col gap-10 py-2 lg:flex-row lg:flex-wrap">
                  <Projects />
                </div>
              </div>
            </section>
            <ScrollToTop />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
