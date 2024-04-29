import { motion } from "framer-motion";
import { Container } from "../Container";

import salesHero from "../../assets/illustrations/hero2.svg";
import { useState } from "react";
import { InvitationModal } from "../InvitationModal";

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="w-full sm:mb-16 pb-24 xl:m pt-24" id="home">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Container>
          <div
            className="relative flex flex-col items-center md:flex-row"
            id="hero"
          >
            <div className="row items-center py-5 md:w-full md:pb-20 md:pt-10">
              <div className="text-left space-y-3">
                <h1 className="text-4xl font-bold leading-wide md:text-6xl">
                  Secure Cellular
                  <br /> Connectivity Dedicated <br />{" "}
                  <span className="text-customPrimary">APN Solutions</span>
                </h1>
                <p className="mt-6 mb-8 text-xl font-normal leading-7 sm:mb-12 text-black/50">
                  Ensure the utmost security for your wireless connections,
                  spanning from remote cellular devices to your database
                  infrastructure, by leveraging a Private APN solution provided
                  by Data-Inc.
                </p>
                <div className="flex flex-col sm:flex-row">
                  <a href="#contact">
                    <button className="custom-button-colored w-full sm:w-64 h-12 mb-2 sm:mb-0">
                      Get Started
                    </button>
                  </a>
                  <a href="/#newSolutions">
                    <button className="custom-button-outlined2 w-full sm:w-64 h-12 mt-2 sm:mt-0 sm:ml-4">
                      View Packages
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center py-5 md:w-full md:pb-20 md:pt-10">
              <img src={salesHero.src} className="w-full" alt="Hero" />
            </div>
          </div>
        </Container>
      </motion.div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
