// "use client";

// import Link from "next/link";
// import React from "react";
// import { IoIosArrowDown } from "react-icons/io";
// import { motion } from "framer-motion";

// export default function ScrollToTop() {
//   return (
//     <motion.div
//       className="hidden sm:flex sm:justify-center sm:items-center mt-8"
//       initial={{ opacity: 0, y: 100 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{
//         delay: 0.725,
//       }}
//     >
//       <Link href="#aboutme">
//         <IoIosArrowDown className="text-slate-400 h-12 w-12 animate-pulse hover:text-slate-500" />
//       </Link>
//     </motion.div>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";

import { FaArrowCircleUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollUp = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  };
  return (
    <button
      className={`fixed bottom-5 left-5 dark:text-white ${
        isVisible ? "opacity-1" : "hidden cursor-none"
      }`}
      onClick={scrollUp}
    >
      <FaArrowCircleUp />
    </button>
  );
}
