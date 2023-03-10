import Link from "next/link";
import React from "react";
import { footer } from "../data/global";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { useState } from "react";
import Modal from "../components/modal";
import ContactForm from "../components/contact/ContactForm";
import ContactDetails from "../components/contact/ContactDetails";
import { motion } from "framer-motion";

function Footer() {
  const [showModal, setShowModal] = useState(false);
  return (
    <footer className="flex flex-col w-screen px-5 py-10 border-t border-fun-pink-darker z-5 bg-bg dark:text-white">
      <div className="w-full max-w-4xl m-auto grid grid-cols-2 sm:grid-cols-3 justify-between items-start">
        {footer.map((item, index) => {
          return (
            <div key={index} className="text-left mb-5 sm:mb-0 ">
              <h4 className="uppercase text-fun-gray text-sm font-bold">
                {item.title}
              </h4>
              <div>
                {item.links.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="my-4 hover:underline text-gray-800 dark:text-white font-theme_bold py-1 pb-2
                    rounded-md transition-all"
                    >
                      {item.leavesWebsite ? (
                        <a
                          href={item.link}
                          target="_blank"
                          className="items-center flex"
                          rel="noopener noreferrer"
                        >
                          {item.icon && (
                            <span className="pr-2 -mb-1">
                              <img src={item.icon} width={20} height={20} />
                            </span>
                          )}
                          {item.name}
                        </a>
                      ) : (
                        <Link href={item.link}>{item.name}</Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div className="text-center">
          <a
            className="w-auto inline-flex items-center sm:w-auto font-bold flex-shrink text-xs border
                 border-gray-500 px-4 py-2 rounded-xl text-gray-500 cursor-pointer opacity-50
                 dark:text-white
                 hover:border-black hover:text-black dark:hover:text-white dark:hover:border-white"
            href="https://github.com/christopher-luu97/Portfolio"
            target="_blank"
            rel="noopener nooreferrer"
          >
            <AiFillGithub className="cursor-pointer text-lg" />
            <span className="ml-2">View Source Code </span>
          </a>
          {/* <div className="p-5 text-center">
            <button
              className="w-auto inline-flex items-center sm:w-auto font-bold flex-shrink text-xs border
              border-gray-500 px-4 py-2 rounded-xl text-gray-500 cursor-pointer opacity-50
              dark:text-white
              hover:border-black hover:text-black dark:hover:text-white dark:hover:border-white
              "
              onClick={() => setShowModal(true)}
            >
              Contact
            </button>
            <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.5,
                  delay: 0.1,
                }}
                className="container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-5"
              >
                <ContactForm />

                <ContactDetails />
              </motion.div>{" "}
            </Modal>
          </div> */}
        </div>
      </div>
      <div className="max-w-4xl w-full m-auto mt-8 pt-8 sm:mt-4 sm:pt-4 text-center text-fun-gray border-t border-fun-pink-dark">
        <div className="inline-flex items-center uppercase text-xs font-bold tracking-widest">
          Made with{" "}
          <div className="space-x-2 inline-flex items-center -mt-1 ml-3">
            <span>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                width="26"
                title="React"
              />
              <span className="sr-only">React</span>
            </span>
            <span>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                width="40"
                className="invert"
                title="NextJS"
              />
              <span className="sr-only">NextJS</span>
            </span>
            <span>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                width="26"
                title="TailwindCSS"
              />
              <span className="sr-only">TailwindCSS</span>
            </span>
          </div>
        </div>
        <div className="mt-2 text-xs ">
          Made by{" "}
          <span className="text-fun-gray-light font-medium">
            Christopher Luu.
          </span>{" "}
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
