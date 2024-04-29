import { motion } from "framer-motion";
import sim3 from "../assets/icons/sim3.svg";
import sim4 from "../assets/icons/sim4.svg";

export const FeaturesDiagonal = () => {
  return (
    <section
      className=" lg:mb-16 w-full flex flex-col justify-center items-center"
      id="success"
    >
      <div className="text-center m-10">
        <h2 className=" text-4xl font-bold mb-4">
          Seamless <span className="text-customPrimary ">Sim Activation</span>
        </h2>

        <p className=" ">
          Ready to lock-in your own private Secure APN Network? We make is
          painless to transmission to Data-Inc. No need to physically swap every
          Sim card in the field.
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex md:flex-row flex-col md:flex-col-2 justify-center items-center md:gap-8 mx-4 sm:mx-0">
          <div className="bg-white rounded-md w-full lg:w-1/4 mb-12 lg:mb-0 hover:scale-110 transition duration-300">
            <div className="bg-customBgLight m-4 rounded-md p-4">
              <img
                src={sim3.src}
                alt="Data-Inc Sim Card"
                className="mx-auto justify-center"
              />
            </div>
            <div className="m-4 space-y-4">
              <h2 className="font-bold text-start">
                Multi-Courier M2M Smart SIM Seamless Connectivity
              </h2>
              <p className="text-black/50">
                Unlocking seamless connectivity across multiple carriers, our
                Multi-Carrier M2M Smart SIM stands as the pinnacle of
                reliability and efficiency in the IoT landscape. With a
                commitment...
              </p>
              <a href="#contact">
                <button className="custom-button-colored w-64 sm:w-52 h-12 mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0 justify-end">
                  Get An APN Now
                </button>
              </a>
            </div>
          </div>
          <div className="bg-white rounded-md w-full lg:w-1/4 mb-12 lg:mb-0 hover:scale-110 transition duration-300">
            <div className="bg-customBgLight m-4 rounded-md p-4 ">
              <img
                src={sim4.src}
                alt="Data-Inc Sim Card"
                className="mx-auto justify-center"
              />
            </div>
            <div className="m-4 space-y-4">
              <h2 className="font-bold text-start">
                Elevated Single-Courier Solutions Going the Extra Mile
              </h2>
              <p className="text-black/50">
                Delivering Elevated Single-Courier Solutions with a Commitment
                to Excellence. Our mission is to surpass industry standards by
                providing unparalleled service that goes above and..
              </p>
              <a href="#contact">
                <button className="custom-button-colored w-64 sm:w-52 h-12 mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0 justify-end">
                  Get An APN Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
