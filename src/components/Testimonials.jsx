import { motion } from "framer-motion";

import QuoteIcon from "../assets/icons/qouteIcon.png";
import testimonial1 from "../assets/images/testimonial1.png";
import testimonial2 from "../assets/images/testimonial2.png";
import testimonial3 from "../assets/images/testimonial3.png";
import starIcon from "../assets/icons/starIcon.png";

const testimonialsData = [
  {
    customerName: "W. Russow",
    customerTitle: "Founder of Dashflow",
    content:
      "Data-Inc swiftly solved issues, aided implementation, and resolved connection problems within 24 hours. Excited for ongoing collaboration.",
    image: testimonial1,
  },
  {
    customerName: "L Magubane",
    customerTitle: "Founder of Dashflow",
    content:
      "Juan and the Data-Inc team have been awesome and are always there for me. Their support has been crucial to growing our product!",
    image: testimonial2,
  },
  {
    customerName: "T. Tobias",
    customerTitle: "Founder of Dashflow",
    content:
      "Data-inc has been a great partner. Super fast delivery and response. Highly recommended for any companies looking for a wireless data solution",
    image: testimonial3,
  },
];

export const Testimonials = () => (
  <section className="w-full flex justify-center pt-10 mb-16 lg:mb-32  relative">
    <div className="absolute -top-16" id="feedback" />
    <div className="flex flex-col w-full lg:w-[1150px] justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="text-center mb-10">
          <h2 className=" text-4xl font-bold mb-4">What Our Beloved</h2>
          <h2 className="text-customPrimary text-4xl font-bold mb-4">
            Customers Say
          </h2>
          <p className="">
            Their words inspire us to continually strive for excellence,
            ensuring that every interaction exceeds expectations. At the heart
            of our success lies the satisfaction
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center">
          {testimonialsData.map((testimonial, index) => (
            <div
              className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 custom-border-gray-darker rounded-xl bg-white flex flex-col px-6 py-4"
              key={`${testimonial.customerName}-${index}`}
            >
              <div className="text-black/50">"{testimonial.content}"</div>
              <div className="flex mt-4">
                {Array.from({ length: 5 }).map((_, index) => (
                  <img
                    src={starIcon.src}
                    alt=""
                    className="w-6 h-6 "
                    key={index}
                  />
                ))}
              </div>

              <div className="flex mt-2 mb-2 xl:mt-8 xl:mb-4 items-center justify-between">
                {/* <img src={testimonial.image} alt="" className="w-14 h-14" /> */}
                <div className="flex flex-col ml-4">
                  <div className="text-black font-medium text-xl">
                    {testimonial.customerName}
                  </div>
                  {/* <div className="custom-content-text-gray">
                    {testimonial.customerTitle}
                  </div> */}
                </div>
                <div className="flex mb-2 ml-8 w-14 h-14">
                  <img src={QuoteIcon.src} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
