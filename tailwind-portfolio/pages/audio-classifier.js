import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Navbar } from "../components/navbar";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div>
        <Head>
          <title>Christopher Luu Portfolio</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <main
        className="bg-white px-10 md:px-20 lg:px-40 
      transition-colors duration-1000
      dark:bg-gray-900 "
      >
        <section className="min-h-screen">
          <Navbar currentPage="Home" />
          <div className="flex flex-col items-center sm:justify-center sm:flex-row text-justify relative">
            <Image
              src="/assets/projects/pepe.jpg"
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
            <h2 className="text-5xl flex justify-center text-sky-600 font-medium md:text-6xl">
              Audio Classifier App
            </h2>
          </div>
        </section>
      </main>
    </div>
  );
}
