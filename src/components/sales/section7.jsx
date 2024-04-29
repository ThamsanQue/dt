import { motion } from "framer-motion";

import tool from "../../assets/illustrations/tool.png";
import pointer from "../../assets/icons/pointer.svg";

export const Section7 = () => {
  return (
    <section
      className="w-full  mt-20 sm:mt-16 sm:mb-16 xl:mt-0 pb-24 xl:m pt-24"
      id="features"
    >
      <div className="text-center mb-4">
        <h2 className="text-black  text-4xl font-bold mb-4">
          Simple <span className="text-customPrimary">APN-Setup</span> &
          Management
        </h2>
        <p className="text-black/50">
          Simplify your APN setup and management with our intuitive solution. We
          understand the importance of hassle-free connectivity.
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-col-2  items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
              <h2 className="mt-6 mb-8 text-3xl  text-black font-bold">
                Simple IoT Management
              </h2>

              <ul className="mb-6 text-black/50">
                <li className="mb-4 flex space-x-3">
                  <img src={pointer.src} alt="" />
                  <span>
                    Drastically improve your data-Connectivity with a secure APN
                    network & unified SIM management.
                  </span>
                </li>
                <li className="mb-4 flex space-x-3">
                  <img src={pointer.src} alt="" />
                  <span>
                    Track data usage from sensor routes and anything connected
                    to your APN-network.
                  </span>
                </li>
                <li className="mb-4 flex space-x-3 ">
                  <img src={pointer.src} alt="" />
                  <span>
                    Manage your data- usage and dashboards and get real time
                    timed updates on your SIM fleets data usages limits spend
                    and more.
                  </span>
                </li>
              </ul>
              <a href="#contact">
                <button className="custom-button-colored w-64 sm:w-52 h-12 mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0 justify-end">
                  Get An APN Now
                </button>
              </a>
            </div>
          </div>
          <div className="w-3/4 mx-auto lg:w-3/4  lg:-mx-4 sm:pr-8 lg:pt-10 justify-center lg:pl-4 xl:px-8 hidden lg:flex">
            <div className="mb-8 lg:mb-0 w-full sm:w-1/2 px-2 lg:px-0">
              <div className="mb-4 py-3 pl-3 pr-2 rounded">
                <img src={tool.src} alt="f1" className="rounded-xl w-full" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
