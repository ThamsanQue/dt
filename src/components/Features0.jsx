import { motion } from "framer-motion";

import sim1 from "../assets/icons/sim1.svg";
import sim2 from "../assets/icons/sim2.svg";
import icon1 from "../assets/icons/icon1.svg";
import icon2 from "../assets/icons/icon2.svg";
import icon3 from "../assets/icons/icon3.svg";
import icon4 from "../assets/icons/icon4.svg";

export const Features0 = () => {
  const cardData = [
    {
      icon: icon1,
      title: "Time Is Money",
      description:
        "Reduce your go-to market time & costswith unified data security and superior support providers. Our focus is on secure APN networks deployment with intergrated solutions & rates that nobody can compete with.",
    },
    {
      icon: icon2,
      title: "Guaranteed Connectivity",
      description:
        "Get tier 1 data connectivity anywhere in south africa no matter the location or size of the operation. Remove support wait time and throttling with business focused data-solutions",
    },
    {
      icon: icon3,
      title: "UNIFY Sim Management",
      description:
        "Track and control the usasges and accessibility of all your devices. Set clear usages limits detect anomalies and see data usage across the board connected to South-Africas Top carrier.",
    },
    {
      icon: icon4,
      title: "Expedite New Services ",
      description:
        "Cellular cyber security and content filtering is just one point fo contact away. Have your own private secure APN network and full control over where your data gets sent to saving your time and money.",
    },
  ];
  return (
    <section
      className="lg:mb-16 w-full flex flex-col justify-center items-center "
      id="quantumFeatures"
    >
      <div className="text-center m-10">
        <h2 className="text-black text-4xl font-bold mb-4">
          Quantum Performance &{" "}
          <span className="text-customPrimary ">
            Nation <br /> Wide
          </span>{" "}
          Coverage
        </h2>

        <p className="text-black/50 ">
          With our nationwide coverage, you can trust that your devices will
          stay connected no matter the location.
          <br /> Experience Quantum Performance.
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
                src={sim1.src}
                alt="Data-Inc Sim Card"
                className="mx-auto justify-center"
              />
            </div>
            <div className="m-4 space-y-4">
              <h2 className="font-bold text-start">
                Prioritized & Secure Connections
              </h2>
              <p className="text-black/50">
                With a public cellular network, all traffic is treated equally.
                An APN gives your company its own private gateway on the
                network. This prioritizes your data traffic, ensuring your
                employees experience faster and more consistent uploads and
                downloads, critical for tasks like video conferencing, large
                file transfers, and real-time...
              </p>
              <a href="/sales">
                <button className="custom-button-colored w-64 sm:w-52 h-12 mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0 justify-end mt-4">
                  Read More
                </button>
              </a>
            </div>
          </div>
          <motion.div className="bg-white rounded-md w-full lg:w-1/4 mb-12 lg:mb-0 hover:scale-110 transition duration-300">
            <div className="bg-customBgLight m-4 rounded-md p-4">
              <img
                src={sim2.src}
                alt="Data-Inc Sim Card"
                className="mx-auto justify-center"
              />
            </div>
            <div className="m-4 space-y-4">
              <h2 className="font-bold text-start">
                Cost Efficiency & Control
              </h2>
              <p className="text-black/50">
                With an APN, you can gain valuable insights into your company's
                data usage patterns. This allows you to optimize data plans and
                avoid exceeding data caps or incurring overage charges. You can
                also restrict access to specific websites or applications to
                control data usage and employee productivity.
              </p>
              <a href="/sales">
                <button className="custom-button-colored w-64 sm:w-52 h-12 mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0 justify-end mt-4">
                  Read More
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <div className="w-full lg:w-3/5 mx-auto pt-24">
        <div className="text-center m-10">
          <h2 className="text-black text-4xl font-bold mb-4">
            Start simplifying your{" "}
            <span className="text-customPrimary ">
              APN-DATA
              <br />
            </span>{" "}
            Connectivity with Data-Inc
          </h2>

          <p className="text-black/50 ">
            Discover the limitless possibilities with APN (Access Point Name)
            technology. APN technology opens doors to
            <br /> a world of connectivity innovations, enabling seamless access
            to networks for a myriad of applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          {cardData.map((card) => (
            <div
              key={card.title}
              className=" bg-white rounded-lg flex flex-col items-center text-center p-4 m-4"
            >
              <motion.div
                initial={{ y: -120 }}
                animate={{ y: 0 }}
                transition={{ duration: 1.5 }}
                className="bg-[#E6F1FD50] rounded-md p-2"
              >
                <img
                  src={card.icon.src}
                  alt={card.title}
                  className=" w-16 h-16 justify-center"
                />
              </motion.div>
              <h1 className="text-center text-2xl font-bold p-2">
                {card.title}
              </h1>{" "}
              <motion.div
                initial={{ x: -120 }}
                animate={{ x: 0 }}
                transition={{ duration: 1.5 }}
              >
                <p className="text-black/50">{card.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
