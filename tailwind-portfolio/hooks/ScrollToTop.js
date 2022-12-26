/** See: https://www.skillthrive.com/hunter/posts/react-scroll-to-top-button */
import { useEffect, useState } from "react";
import { BiArrowFromBottom } from "react-icons/bi";

import { classNames } from "../utils/classNames";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-2 right-2">
      <button
        type="button"
        onClick={scrollToTop}
        className={classNames(
          isVisible ? "opacity-100" : "opacity-0",
          "bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 inline-flex items-center rounded-full p-3 text-white shadow-sm transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2"
        )}
      >
        <BiArrowFromBottom className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
};

/* See https://github.com/realstoman/nextjs-tailwindcss-portfolio/blob/main/hooks/useScrollToTop.js */
// import { useState, useEffect } from "react";
// import { FiChevronUp } from "react-icons/fi";

// function useScrollToTop() {
//   const [showScroll, setShowScroll] = useState(false);

//   useEffect(() => {
//     window.addEventListener("scroll", scrollToTop);
//     return function cleanup() {
//       window.removeEventListener("scroll", scrollToTop);
//     };
//   });

//   const scrollToTop = () => {
//     if (!showScroll && window.pageYOffset > 400) {
//       setShowScroll(true);
//     } else if (showScroll && window.pageYOffset <= 400) {
//       setShowScroll(false);
//     }
//   };

//   const backToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   if (typeof window !== "undefined") {
//     window.addEventListener("scroll", scrollToTop);
//   }

//   return (
//     <>
//       <FiChevronUp
//         className="scrollToTop"
//         onClick={backToTop}
//         style={{
//           height: 40,
//           width: 40,
//           padding: 7,
//           borderRadius: 50,
//           right: 50,
//           bottom: 50,
//           display: showScroll ? "flex" : "none",
//         }}
//       />
//     </>
//   );
// }

// export default useScrollToTop;
