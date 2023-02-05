/** From: https://braydentw.io/ */
import React from "react";
import { skills } from "../content/home";

function Skills() {
  return (
    <div>
      <h3 className="font-bold pt-5">
        <span className="text-3xl flex justify-center white-space:pre-wrap tracking-widest uppercase text-gray-800 dark:text-white">
          {"Skills".split("").map((letter, index) => {
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
      <div className="flex flex-col md:flex-row justify-between relative">
        <h2 className="relative text-3xl w-full text-center md:text-left font-md md:max-w-lg mb-10 md:mr-10 md:mb-0 md:w-max mr-0 dark:text-white ">
          Experience developing software end-to-end for Government clients
          <br />
          <br />
          Here is my toolbelt for success.
        </h2>
        <div className="relative max-w-lg w-full mx-auto md:mx-none grid gap-x-8 gap-y-12 sm:gap-8 md:gap-12 grid-cols-3 sm:grid-cols-6 items-center place-content-center">
          {skills.map((item, index) => {
            return (
              <div
                title={item.title}
                key={index}
                className="w-10 mx-auto flex items-center flex-col justify-center dark:text-white"
              >
                <img src={item.icon} style={item.style} />
                <p className="text-xs text-fun-gray font-bold mt-3 opacity-80">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
