/** From: https://braydentw.io/ */
import Link from "next/link";
import React from "react";
import { routes } from "../data/global";

export function Navbar({ currentPage }) {
  return (
    <nav className="py-10 flex justify-between items-center">
      <li className="list-none font-bold text-lg cursor-pointer">
        <Link href="/">
          <span className="text-xl white-space:pre-wrap dark:text-white flex items-center">
            {"Christopher".split("").map((letter, index) => {
              return (
                <span
                  key={index}
                  className="hover:text-sky-600 hover:-mt-2 
                            transition-all duration-500 hover:duration-100"
                >
                  {letter}
                </span>
              );
            })}
            &nbsp;
            {"Luu".split("").map((letter, index) => {
              return (
                <span
                  key={index}
                  className="hover:text-sky-600 hover:-mt-2 
                            transition-all duration-500 hover:duration-100"
                >
                  {letter}
                </span>
              );
            })}
            &nbsp;
            {"Portfolio".split("").map((letter, index) => {
              return (
                <span
                  key={index}
                  className="hover:text-sky-600 hover:-mt-2 
                            transition-all duration-500 hover:duration-100"
                >
                  {letter}
                </span>
              );
            })}
          </span>
        </Link>
      </li>
      <ul
        className="flex space-x-3 mr-2 font-semibold
                   text-white px-4 py-2 rounded-md ml-8"
      >
        {routes.map((item, index) => {
          return (
            <li
              key={index}
              className={`list-none hover:bg-sky-700 text-gray-800 dark:text-white font-theme_bold py-1 pb-2
              rounded-md transition-all sm:px-2 sm:py-2 lg:text-sm" ${
                currentPage === item.title
                  ? "opacity-100"
                  : "opacity-40 hover:opacity-100 transition-opacity"
              }`}
            >
              <Link href={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
