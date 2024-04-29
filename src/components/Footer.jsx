import { InstagramIcon } from "../assets/icons/InstagramIcon";
import { DataIncLogoOne } from "../assets/logos/DataIncLogoOne";
import { DataIncLogoTwo } from "../assets/logos/DataIncLogoTwo";

export const Footer = () => {
  return (
    <footer>
      <div className="pt-10  lg:pt-20 lg:pb-12 bg-customDarkBg1 radius-for-skewed ">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap justify-center items-center">
            <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
              <div className="flex justify-center lg:justify-start items-center grow basis-0">
                <div className="text-white mr-2 text-6xl">
                  <DataIncLogoOne />
                </div>
                <div className="text-white font-['Inter'] font-bold text-xl">
                  <DataIncLogoTwo />
                </div>
              </div>
              <p className="mb-10 mt-4 sm:w-[22rem] lg:w-[20rem] xl:w-[24rem] text-gray-400 leading-loose text-center lg:text-left mx-auto lg:mx-0">
                We specialises in consolidating telecoms and data solutions to
                assist enterprise businesses in streamlining their operational
                connectivity costs and contributing to the ease of scalability.
              </p>
              <div className="w-36 mx-auto lg:mx-0 flex items-center justify-center">
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="https://www.instagram.com/data_inc_sa/"
                  target="_blank"
                >
                  <InstagramIcon />
                </a>
                <p className="text-white font-medium">Instagram</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
