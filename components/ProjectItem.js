/** https://github.com/fireclint/portfolio-nextjs/blob/main/components/Projects.jsx */

import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({ title, backgroundImg, tech, projectUrl }) => {
  return (
    <div
      className=" relative flex items-center justify-center h-48 shadow-xl hover:shadow-[#75809C] shadow-[#75809C]
    rounded-3xl group hover:bg-gradient-to-b from-[#3E506C] to-[#72839A] hover:scale-105 duration-1000"
    >
      <Image
        className="h-full w-full object-scale-down rounded-md group-hover:opacity-10 overflow:hidden"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{tech}</p>
        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-3xl bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
