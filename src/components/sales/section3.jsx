import { motion } from "framer-motion";
import apn2 from "../../assets/illustrations/apn2.svg";
import thesis from "../../assets/thesis.pdf";

export const Section3 = () => {
  return (
    <section
      className="lg:mb-16 w-full flex flex-col justify-center items-center mt-10"
      id="newSolutions"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="bg-white rounded-lg py-8 sm:py-12 px-4 sm:px-6 mx-4 sm:mx-0 mb-10">
          {" "}
          {/* Added mx-2 for margin on the sides */}
          <div className="text-center m-5 sm:m-10">
            <h2 className="text-black text-2xl sm:text-4xl font-bold mb-4">
              Unveiling the World of &{" "}
              <span className="text-customPrimary ">
                Private <br /> APN
              </span>{" "}
              Networks
            </h2>
            <p className="text-black/50 text-sm sm:text-base">
              With our nationwide coverage, you can trust that your devices will
              stay connected no matter the location.
              <br /> Experience Quantum Performance.
            </p>
            <img
              src={apn2.src}
              alt="APN"
              className="w-full max-w-xl mx-auto mt-4 sm:mt-8"
            />
            <div className="text-start m-5 sm:m-10">
              <h2 className="text-black text-2xl font-bold mb-4">
                <span className="text-customPrimary">Comparing</span> Private
                APN and IPsec
              </h2>
              <p className="text-black/50 text-sm sm:text-base">
                Enhance security and streamline data management with Private
                APNs, cutting costs and bolstering defenses
                <br /> against IoT vulnerabilities effectively.
              </p>
              <a href={thesis} target="_blank">
                <button className="custom-button-colored w-48 sm:w-40 h-10 mt-4">
                  Learn More
                </button>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
