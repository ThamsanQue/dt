import { motion } from "framer-motion";

import { Altron } from "../assets/logos/Altron";
import { FinanceA } from "../assets/logos/FinanceA";
import { Reunert } from "../assets/logos/Reunert";

export const Brands = () => (
  <section className="py-12 sm:py-24  w-full bg-customDarkBg1">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container px-4 mx-auto 2xl:w-[1200px] xl:w-[1100px] lg:w-[1000px] md:w-4/5">
        <div className="flex  flex-col items-center -mx-4 justify-center lg:text-left text-center">
          <div className="w-full lg:w-3/4 px-4 mb-12 lg:mb-0 justify-center ">
            <div className="flex flex-col">
              <h2 className="mb-2 text-4xl sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-white">
                <span className="text-customPrimary">Trusted</span> by Industry
                Leaders{" "}
              </h2>
              <p className="text-customGrayText text-center mt-5">
                We are trusted partners with 55% OF THE JSE Top 100
              </p>
            </div>
          </div>
          <div className="w-2/3 sm:w-[620px] lg:w-1/2 mx-auto lg:mx-0 lg:pl-10 mt-5">
            <motion.div className="flex flex-wrap -m-4">
              <motion.div
                initial={{ x: -130 }}
                animate={{ x: 0 }}
                transition={{ duration: 1 }}
                className="w-1/2 sm:w-1/3 py-6 flex justify-center"
              >
                <Reunert />
              </motion.div>
              <motion.div
                initial={{ x: -120 }}
                animate={{ x: 0 }}
                transition={{ duration: 2 }}
                className="w-1/2 sm:w-1/3 py-6 flex  justify-center"
              >
                <Altron />
              </motion.div>
              <motion.div
                initial={{ x: -110 }}
                animate={{ x: 0 }}
                transition={{ duration: 3 }}
                className="w-1/2 sm:w-1/3 py-6 mt-[-38px] flex  justify-center"
              >
                <FinanceA />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
