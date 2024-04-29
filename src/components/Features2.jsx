import { motion } from "framer-motion";

import Card from "../assets/icons/sim0.svg";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import icon5 from "../assets/icons/icon5.png";

export const Features2 = () => (
  <section
    className="w-full  mt-12 sm:mt-20 mb-10 lg:my-20 pt-4"
    id="newSolutions"
  >
    {" "}
    <div className="text-center mb-10">
      <h2 className=" text-4xl font-bold mb-4">Unlocking The Exclusive</h2>
      <h2 className="text-customPrimary text-4xl font-bold mb-4">
        Advantage Of Private APNS
      </h2>
      <p className="">
        Private APNs offer a myriad of benefits for businesses seeking enhanced
        connectivity solutions, by establishing a private APN
      </p>
    </div>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
        <div className="w-11/12 sm:w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 justify-center order-last lg:order-first">
          <div className="mb-8 lg:mb-0 w-full px-2 lg:pl-16 flex flex-col justify-center md:pl-8">
            <motion.div
              initial={{ x: -120 }}
              animate={{ x: 0 }}
              transition={{ duration: 1.5 }}
              className="mb-4 py-3 md:pl-3 md:pr-20 lg:pr-12 rounded"
            >
              <img src={Card.src} alt="f1" className="rounded-xl" />
            </motion.div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 xl:pl-8">
          <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
            <div className="flex space-x-4 mb-4">
              <img src={icon5.src} alt="arrowIcon" />
              <h2 className="text-lg text-black">APN Light</h2>
            </div>
            <motion.ul
              initial={{ y: -120 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.5 }}
              className="mb-6 text-black/50"
            >
              <motion.li className="mb-4 flex ">
                <CheckArrowIcon />
                <span>100GB+</span>
              </motion.li>
              <motion.li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Managed Firewall</span>
              </motion.li>
              <motion.li className="mb-4 flex">
                <CheckArrowIcon />
                <span>40% off Monthly</span>
              </motion.li>
              <motion.li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Unlimited Sim Connections</span>
              </motion.li>
              <motion.li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Itemized data billing per Mb spent</span>
              </motion.li>
            </motion.ul>
          </div>
          <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
            <div className="flex space-x-4 mb-4">
              <img src={icon5.src} alt="arrowIcon" />
              <h2 className="text-lg text-black">APN Heavy Duty</h2>
            </div>
            <motion.ul
              initial={{ y: -120 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.5 }}
              className="mb-6 text-black/50"
            >
              <motion.li className="mb-4 flex ">
                <CheckArrowIcon />
                <span>500GB+</span>
              </motion.li>
              <motion.li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Managed Firewall</span>
              </motion.li>
              <motion.li className="mb-4 flex">
                <CheckArrowIcon />
                <span>50% off Monthly</span>
              </motion.li>
              <motion.li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Unlimited Sim Connections</span>
              </motion.li>
              <motion.li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Itemized data billing per Mb spent</span>
              </motion.li>
            </motion.ul>
          </div>
          <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
            <div className="flex space-x-4 mb-4">
              <img src={icon5.src} alt="arrowIcon" />
              <h2 className="text-lg text-black">APN Corporate</h2>
            </div>
            <motion.ul
              initial={{ y: -120 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.5 }}
              className="mb-6 text-black/50"
            >
              <motion.li className="mb-4 flex ">
                <CheckArrowIcon />
                <span>1000 GB+</span>
              </motion.li>
              <motion.li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Managed Firewall</span>
              </motion.li>
              <motion.li className="mb-4 flex">
                <CheckArrowIcon />
                <span>70% off Monthly</span>
              </motion.li>
              <motion.li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Unlimited Sim Connections</span>
              </motion.li>
              <motion.li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Itemized data billing per Mb spent</span>
              </motion.li>
            </motion.ul>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
