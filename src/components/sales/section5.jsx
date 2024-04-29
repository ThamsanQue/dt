import { motion } from "framer-motion";
import Pointer from "../../assets/icons/pointer.svg";
import static1 from "../../assets/images/static1.jpg";
import static2 from "../../assets/images/static2.png";
import static3 from "../../assets/images/static3.png";

export const Section5 = () => {
  return (
    <section className="w-full  mt-12 sm:mt-20 mb-10 lg:my-20 pt-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex bg-white rounded-md flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="w-11/12 sm:w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 justify-center order-last lg:order-first">
            <div className="mb-8 lg:mb-0 w-full px-2 lg:pl-16 flex flex-col justify-center md:pl-8">
              <div className="py-3 md:pl-20 lg:pl-12 md:pr-2 rounded ">
                <img
                  src={static1.src}
                  alt="f2"
                  className="rounded-xl  custom-border-gray"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 xl:pl-8">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
              <h2 className="mt-6 mb-8 text-md lg:text-xl font-semibold text-black">
                Ensuring Secure Connectivity
              </h2>
              <ul className="mb-6 text-white">
                <li className="mb-4 flex text-black/50 space-x-2">
                  <img src={Pointer.src} alt="" />
                  <span>
                    Protect your SIM-based devices with advanced security
                    measures, safeguarding data traffic from exposure to the
                    public internet and shielding it from potential threats
                    posed by malicious actors.
                  </span>
                </li>
                <li className="mb-4 flex text-black/50 space-x-2">
                  <img src={Pointer.src} alt="" />

                  <span>
                    Leverage our cloud-based threat prevention engine to
                    automate the detection and mitigation of cyberattacks,
                    fortifying your defenses against evolving malware threats.
                  </span>
                </li>
                <li className="mb-4 flex text-black/50 space-x-2">
                  <img src={Pointer.src} alt="" />
                  <span>
                    Our comprehensive approach to security filtering prioritizes
                    the protection of sensitive information and safeguards
                    against potential threats. With our proactive measures in
                    place.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex bg-white rounded-md flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16 mt-10">
          <div className="w-11/12 sm:w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 justify-center order-last lg:order-second">
            <div className="mb-8 lg:mb-0 w-full px-2 lg:pl-16 flex flex-col justify-center md:pl-8">
              <div className="py-3 md:pl-20 lg:pl-12 md:pr-2 rounded ">
                <img
                  src={static2.src}
                  alt="f2"
                  className="rounded-xl  custom-border-gray"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 xl:pl-8">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
              <h2 className="mt-6 mb-8 text-md lg:text-xl font-semibold text-black">
                Maximizing Data Efficiency Analysis
              </h2>
              <ul className="mb-6 text-white">
                <li className="mb-4 flex text-black/50 space-x-2">
                  <img src={Pointer.src} alt="" />
                  <span>
                    To enhance transparency regarding the utilization of data on
                    corporate devices while safeguarding individual user
                    privacy, implementing comprehensive data monitoring and
                    protection measures is essential.
                  </span>
                </li>
                <li className="mb-4 flex text-black/50 space-x-2">
                  <img src={Pointer.src} alt="" />

                  <span>
                    To automate the monitoring of your data and ensure timely
                    alerts for usage thresholds, establish a comprehensive
                    system that tracks usage patterns across varying time
                    frames—hourly, daily, weekly, and monthly.
                  </span>
                </li>
                <li className="mb-4 flex text-black/50 space-x-2">
                  <img src={Pointer.src} alt="" />
                  <span>
                    Easily manage and scrutinize your company's mobile usage
                    across diverse devices and carriers through a centralized
                    portal, ensuring efficient monitoring of data consumption.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex bg-white rounded-md flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16 mt-10">
          <div className="w-11/12 sm:w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 justify-center order-last lg:order-first">
            <div className="mb-8 lg:mb-0 w-full px-2 lg:pl-16 flex flex-col justify-center md:pl-8">
              <div className="py-3 md:pl-20 lg:pl-12 md:pr-2 rounded ">
                <img
                  src={static3.src}
                  alt="f2"
                  className="rounded-xl  custom-border-gray"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 xl:pl-8">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
              <h2 className="mt-6 mb-8 text-md lg:text-xl font-semibold text-black">
                Data Usage Control Hub
              </h2>
              <ul className="mb-6 text-white">
                <li className="mb-4 flex text-black/50 space-x-2">
                  <img src={Pointer.src} alt="" />
                  <span>
                    Enhance data cost management efficiency through the
                    implementation of personalized filters, enabling seamless
                    regulation of approved websites and content to effectively
                    control data consumption.
                  </span>
                </li>
                <li className="mb-4 flex text-black/50 space-x-2">
                  <img src={Pointer.src} alt="" />

                  <span>
                    Optimize your data consumption by implementing bandwidth
                    restrictions tailored to predefined parameters, guaranteeing
                    effective management of your data plan allocation.
                  </span>
                </li>
                <li className="mb-4 flex text-black/50 space-x-2">
                  <img src={Pointer.src} alt="" />
                  <span>
                    Maintain adherence to mobile internet usage policies
                    effortlessly through the implementation of automated
                    enforcement mechanisms tailored to your specific needs.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
