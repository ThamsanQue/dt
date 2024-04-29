import { useState } from "react";
import { motion } from "framer-motion";

const FAQData = [
  {
    question: "Which areas Do Data-Inc Cover ? ",
    answer:
      "Data-Inc specializes in a comprehensive array of areas within the data realm, ensuring holistic solutions for businesses. From data analytics and business intelligence to data visualization and integration, we cover every aspect crucial for deriving valuable insights.",
  },
  {
    question: "How long does the process take ?",
    answer: "14 Working Days.",
  },
  {
    question: "Do we offer Home internet ?",
    answer: "No we do not.",
  },
  {
    question: "Do we have satellite solutions ?",
    answer: "Yes we do.",
  },
];

export const FAQ = () => (
  <section className="relative pt-16 pb-16 overflow-hidden">
    <div className="absolute -top-10" id="FAQ" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
        <div className="md:max-w-4xl mx-auto">
          <p className="mb-7 custom-block-subtitle text-center">
            Have any questions?
          </p>

          <h2 className="mb-8 text-4xl font-bold text-center">
            Frequently Asked{" "}
            <span className="text-customPrimary">Questions</span>
          </h2>
          <p className="pb-4 text-center">
            We've compiled a list of frequently asked questions from new users
            and provided answers to make your experience smoother.
          </p>
          <div className="mb-11 flex flex-wrap -m-1">
            {FAQData.map((item, index) => (
              <div className="w-full p-1">
                <FAQBox
                  title={item.question}
                  content={item.answer}
                  key={`${item.question}-${item.answer}`}
                  defaultOpen={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const FAQBox = ({ defaultOpen, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-white custom-border-gray-darker mb-4 relative hover:bg-gray-100 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col p-2  justify-center items-start">
        <h3 className="font-bold pt-3 sm:pt-0 pr-8 sm:pr-0">{title}</h3>
        <p
          className={`pt-4 transition-all duration-300 text-black/50 overflow-hidden ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          {content}
        </p>
      </div>
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8  rounded-full p-2 ">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500  ${
            isOpen ? "rotate-[180deg]" : "rotate-[270deg]"
          }`}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="#5EA4F4"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};
