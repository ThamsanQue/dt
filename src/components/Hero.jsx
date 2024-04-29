import { motion } from "framer-motion";
import "../styles/Diagonals.css";
import hero from "../assets/images/hero.png";

export const Hero = () => {
  return (
    <section
      className="w-screen flex justify-center items-center hero-bg-gradient  "
      id="home"
      style={{ backgroundImage: `url(${hero.src})` }}
    >
      <div className="w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="text-5xl  lg:text-6xl font-bold tracking-wide text-white  px-8 sm:px-8 md:px-20 lg:px-4 mt-32  ">
            <p>
              Data-Inc Makes Private{" "}
              <span className="text-customPrimary">APN Data Connectivity </span>
              Simple For SMEs
            </p>
          </div>

          <div className="text-white text-sm sm:text-base  mb-2 sm:mt-10 mt-5    ">
            <span className="font-bold border-2 border-gray-400 rounded-2xl p-2">
              Discover New APN Technologies
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-white text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:px-48 ">
            Simplify M2M data plans, device management, and support with one M2M
            service provider
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex flex-col gap-2 sm:flex-row mt-14 mb-24 sm:mb-40 justify-center">
            <a href="#contact">
              <button className="custom-button-colored w-64 sm:w-52 h-12 mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0">
                Get Started
              </button>
            </a>
            <a href="#newSolutions">
              <button className="custom-button-outlined  w-64 sm:w-52 h-12 mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0">
                View Packages
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
