import Link from "next/link";
import React from "react";
import { routes } from "../data/global";
import { useState } from "react";

export function Navbar({ currentPage }) {
  return (
    <nav className="py-10 mb-12 flex items-center justify-between">
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
        className="flex space-x-3 mr-2 font-semibold bg-gradient-to-r from-sky-500 to-indigo-500
                   text-white px-4 py-2 rounded-md ml-8 ring-2 ring-sky-600
                hover:ring-slate-300 mx-8 shadow-lg shadow-indigo-500/50"
      >
        {routes.map((item, index) => {
          return (
            <li
              key={index}
              className={`list-none text-white ${
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
