import { motion } from "framer-motion";
import footer from "../../assets/images/footer.png";

export const Section6 = () => (
  <section
    className="py-12 sm:py-24  w-full bg-customDarkBg1"
    style={{ backgroundImage: `url(${footer.src})`, backgroundSize: "cover" }}
  >
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
              <h2 className="mb-2 text-xl  font-bold tracking-normal text-white mx-auto">
                BRING YOUR IoT DEVICES TO LIFE
              </h2>
              <p className="text-customGrayText text-center mt-5">
                Turn-key connectivity solutions for all industries
              </p>
              <button
                className="custom-button-colored w-64 sm:w-52 h-12 mt-4 mx-auto"
                onClick={() => setIsModalOpen(true)}
              >
                Industries We Serve
              </button>
            </div>
          </div>
          <div className="w-2/3 sm:w-[620px] lg:w-1/2 mx-auto lg:mx-0 lg:pl-10 mt-5"></div>
        </div>
      </div>
    </motion.div>
  </section>
);
