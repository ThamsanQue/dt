import { motion } from "framer-motion";
import sim5 from "../../assets/icons/icon5.svg";
import sim6 from "../../assets/icons/icon6.svg";
import sim7 from "../../assets/icons/icon7.svg";

export const Section4 = () => {
  return (
    <section className="py-12 sm:py-24  w-full bg-customDarkBg1">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex md:flex-row flex-col md:flex-col-2 justify-center items-center md:gap-8 mx-4 sm:mx-0">
          <div className="bg-customDarkBg2/30 rounded-md w-full lg:w-1/5  mb-8 lg:mb-0 border border-white text-center">
            <div className="bg-customDarkBg1 m-4 rounded-md p-4 w-1/4 mx-auto">
              <img
                src={sim5.src}
                alt="Data-Inc Sim Card"
                className="mx-auto justify-center"
              />
            </div>
            <div className="m-4 space-y-4">
              <h2 className="font-bold  text-white">
                Utilize Any SIM-Enabled Device
              </h2>
              <hr className="h-px w-3/4 bg-customPrimary/25 border-0 mx-auto" />
              <p className="text-white font-medium">
                To streamline and optimize data management across multiple
                carriers. Through this consolidated plan
              </p>
              <p className="text-white/40">
                With this innovative approach, you'll never have to worry about
                exceeding limits or juggling multiple plans again.
              </p>
            </div>
          </div>
          <div className="bg-customDarkBg2/30 rounded-md w-full lg:w-1/5 mb-12 lg:mb-0 border border-white text-center">
            <div className="bg-customDarkBg1 m-4 rounded-md p-4 w-1/4 mx-auto">
              <img
                src={sim6.src}
                alt="Data-Inc Sim Card"
                className="mx-auto justify-center"
              />
            </div>
            <div className="m-4 space-y-4">
              <h2 className="font-bold  text-white">
                Exploring End-to-End Encryption
              </h2>
              <hr className="h-px w-3/4 bg-customPrimary/25 border-0 mx-auto" />
              <p className="text-white font-medium">
                Data-Inc. offers access to tier-1 data from leading carriers,
                ensuring top-quality connectivity
              </p>
              <p className="text-white/40">
                Eliminating support wait-time and throttling from the equation
                at the business level involves.
              </p>
            </div>
          </div>
          <div className="bg-customDarkBg2/30 rounded-md w-full lg:w-1/5 mb-12 lg:mb-0 border border-white text-center">
            <div className="bg-customDarkBg1 m-4 rounded-md p-4 mx-auto w-1/4">
              <img
                src={sim7.src}
                alt="Data-Inc Sim Card"
                className="mx-auto justify-center"
              />
            </div>
            <div className="m-4 space-y-4">
              <h2 className="font-bold text-white">
                Controlling Data Usage and Expenses
              </h2>
              <hr className="h-px w-3/4 bg-customPrimary/25 border-0 mx-auto" />
              <p className="text-white font-medium">
                Efficiently manage and monitor your entire network of IoT
                devices with our comprehensive platform
              </p>
              <p className="text-white/40">
                Manage your usage limits, detect any irregularities, and
                conveniently monitor data usage across multiple carriers.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
