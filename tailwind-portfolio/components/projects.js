/** https://github.com/fireclint/portfolio-nextjs/blob/main/components/Projects.jsx */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import pepeImg from "../public/assets/projects/pepe.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Transcriber App"
            backgroundImg={pepeImg} /** Edit image */
            projectUrl="/transcriber"
            tech="Python and PyQT"
          />
          <ProjectItem
            title="Audio Classifier POC"
            backgroundImg={pepeImg} /** Edit image */
            projectUrl="/audio-classifier"
            tech="Python and Streamlit"
          />
          <ProjectItem
            title="Personal Portfolio"
            backgroundImg={pepeImg} /** Edit image */
            projectUrl="/"
            tech="NextJS and TailWindCSS"
          />
          <ProjectItem
            title="Speech Analytics Dashboard"
            backgroundImg={pepeImg} /** Edit image */
            projectUrl="/speech-analytics-dashboard"
            tech="Python and Dash"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
