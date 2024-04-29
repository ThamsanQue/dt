import { motion } from "framer-motion";

export const Section1 = () => (
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
              <div className="text-white text-sm sm:text-base  mb-4 sm:mt-10 mt-5 mx-auto ">
                <span className="font-bold border-2 border-gray-400 rounded-2xl p-2">
                  Discover New APN Technologies
                </span>
              </div>
              <h2 className="mb-2 text-4xl sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-white">
                Enhancing Network{" "}
                <span className="text-customPrimary">Industry</span>
              </h2>
              <p className="text-customGrayText text-center mt-5">
                Private VPNs (Virtual Private Networks) provide a secure pathway
                for devices to connect to an IP network, ensuring data integrity
                and confidentiality. In contrast to public VPNs that are
                accessible to a wide range of users
              </p>
            </div>
          </div>
          <div className="w-2/3 sm:w-[620px] lg:w-1/2 mx-auto lg:mx-0 lg:pl-10 mt-5"></div>
        </div>
      </div>
    </motion.div>
  </section>
);
