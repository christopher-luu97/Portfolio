/** https://github.com/fireclint/portfolio-nextjs/blob/main/components/Projects.jsx */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import pepeImg from "../public/assets/projects/pepe.jpg";
import meganImg from "../public/assets/projects/megan.PNG";

import transriberImg from "../public/assets/projects/transcriber.PNG";
import portfolioImg from "../public/assets/projects/portfolio.PNG";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 text-center">
        <h3 className="font-bold pt-5">
          <span className="text-3xl flex justify-center white-space:pre-wrap tracking-widest uppercase text-gray-800 dark:text-white">
            {"PROJECTS".split("").map((letter, index) => {
              return (
                <span
                  key={index}
                  className="hover:text-sky-600 hover:-mt-2 
                            transition-all duration-500 hover:duration-300"
                >
                  {letter}
                </span>
              );
            })}
          </span>
        </h3>
        <br />
        <div className="grid md:grid-cols-2 gap-8 px-5 pb-5">
          <ProjectItem
            title="Transcriber App"
            backgroundImg={transriberImg} /** Edit image */
            projectUrl="/transcriber"
            tech="Python, PyQT, SQL Server and AI"
          />
          <ProjectItem
            title="Voice Recorded ChatGPT Interactor"
            backgroundImg={meganImg} /** Edit image */
            projectUrl="/m3gan"
            tech="Python, PyQT and OpenAI"
          />
          <ProjectItem
            title="Personal Portfolio"
            backgroundImg={portfolioImg} /** Edit image */
            projectUrl="/"
            tech="NextJS and TailWindCSS"
          />
          <ProjectItem
            title="TBA" /*"Speech Analytics Dashboard"*/
            backgroundImg={pepeImg} /** Edit image */
            projectUrl="/speech-analytics-dashboard"
            tech="TBA" /*"Python and Dash"*/
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
