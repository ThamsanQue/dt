import { motion } from "framer-motion";
import apn1 from "../../assets/illustrations/apn1.svg";

export const Section2 = () => {
  return (
    <section
      className="lg:mb-16 w-full flex flex-col justify-center items-center mt-10"
      id="legacySolutions"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="bg-white rounded-lg py-8 sm:py-12 px-4 sm:px-6 mx-4 sm:mx-0 ">
          <div className="text-center m-5 sm:m-10">
            <h2 className="text-black text-2xl sm:text-4xl font-bold mb-4">
              <span className="text-customPrimary ">
                Public <br /> APN
              </span>{" "}
              Networks
            </h2>
            <p className="text-black/50 text-sm sm:text-base">
              With our nationwide coverage, you can trust that your devices will
              stay connected no matter the location.
              <br /> Experience Quantum Performance.
            </p>
            <img
              src={apn1.src}
              alt="APN"
              className="w-full max-w-xl mx-auto mt-4 sm:mt-8"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
