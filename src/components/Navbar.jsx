import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { DataIncLogoOne } from "../assets/logos/DataIncLogoOne";
import { DataIncLogoTwo } from "../assets/logos/DataIncLogoTwo";
import thesis from "../assets/thesis.pdf";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("/");

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPage(window.location.pathname);
    };
    if (typeof window !== "undefined") {
      setCurrentPage(window.location.pathname);
      window.addEventListener("popstate", handleLocationChange);
      return () => {
        window.removeEventListener("popstate", handleLocationChange);
      };
    }
  }, []);

  const navLinks = {
    "/": [
      { label: "Home", href: "#home", ariaLabel: "Home" },
      {
        label: "Quantum Features",
        href: "#quantumFeatures",
        ariaLabel: "Quantum Features",
      },
      {
        label: "Data Driven Analytics",
        href: "#dataDriven",
        ariaLabel: "dataDriven",
      },

      {
        label: "New Solutions",
        href: "#newSolutions",
        ariaLabel: "New Solutions",
      },
    ],
    "/sales": [
      { label: "Home", href: "/", ariaLabel: "Home" },
      {
        label: "Legacy Solutions",
        href: "#legacySolutions",
        ariaLabel: "Legacy Solutions",
      },
      {
        label: "New Solutions",
        href: "#newSolutions",
        ariaLabel: "New Solutions",
      },
      {
        label: "APN Thesis",
        href: thesis,
        ariaLabel: "APN Thesis",
      },
    ],
  };

  const currentPageLinks = navLinks[currentPage] || [];

  return (
    <>
      <nav className="w-full h-20 flex flex-col justify-center items-center fixed bg-customDarkBg1 lg:bg-customDarkBgTransparent z-40 lg:backdrop-blur-xl">
        <div className="2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <a className="navbar-link" href="#home" aria-label="Home">
              <div className="flex justify-start items-center grow basis-0">
                <div className="text-white mr-2 text-6xl">
                  <DataIncLogoOne />
                </div>
                <div className="text-white font-['Inter'] font-bold text-xl">
                  <DataIncLogoTwo />
                </div>
              </div>
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <div className="hidden lg:flex h-full pl-12 pb-2">
              {currentPageLinks.map(({ href, label, ariaLabel }) => (
                <a
                  className="navbar-link"
                  href={href}
                  target={`${label === "APN Thesis" ? "_blank" : ""}`}
                  aria-label={ariaLabel}
                  key={label}
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
          <div className="hidden lg:flex">
            <a href="#contact">
              <button className="custom-button-colored w-64 sm:w-52 h-12 mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0 justify-end">
                Get Started
              </button>
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          ></motion.div>
          <div
            className="lg:hidden flex flex-col  px-2 py-3 border-solid border border-gray-600 rounded-md cursor-pointer hover:bg-customDarkBg2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
            <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
            <div className="w-5 h-0.5 bg-gray-500 "></div>
          </div>
        </div>
        {/* Mobile navbar */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0 }}
            >
              <div
                className="flex flex-col mt-16 lg:hidden absolute top-4 left-0  bg-customDarkBg1 z-50 w-full 
        items-center gap-10 pb-10 border-y border-solid border-customDarkBg3 pt-10
        "
              >
                {currentPageLinks.map(({ label, href, ariaLabel }) => (
                  <a
                    key={href}
                    className="navbar-link"
                    href={href}
                    target={`${label === "APN Thesis" ? "_blank" : ""}`}
                    onClick={() => setIsOpen(false)}
                    aria-label={ariaLabel}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};
