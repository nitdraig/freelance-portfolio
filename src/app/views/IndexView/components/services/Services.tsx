import { useLanguage } from "@/app/components/LanguageContext";
import translations from "@/app/locals/languages";
import React from "react";
import { FaDesktop } from "react-icons/fa";
import {
  HiDocumentMagnifyingGlass,
  HiOutlinePresentationChartLine,
} from "react-icons/hi2";
import { SiCloudflarepages } from "react-icons/si";
import { SlPresent } from "react-icons/sl";
import { TiShoppingCart } from "react-icons/ti";

const Services = () => {
  const { language } = useLanguage();
  return (
    <section
      className="bg-gradient-to-r from-[#0F0F0F] via-gray-900 to-[#0F0F0F]  h-full"
      id="services"
    >
      <h2 className="p-12 text-center uppercase tracking-[8px] text-gray-100 text-2xl lg:text-3xl  lg:pt-6 pb-8">
        {translations[language].service}
      </h2>
      <span className="h-[1.1px] px-10 absolute w-full bg-gray-300 block"></span>
      <div className="text-center mx-4 lg:mx-10 mt-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className="p-8 bg-[#C0C0C0] shadow-lg rounded-lg"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <SiCloudflarepages className="text-4xl text-[#6A0DAD] mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">
              {translations[language].serviceName1}
            </h3>
            <p className="text-black">
              {translations[language].serviceDescription1}
            </p>
          </div>
          <div
            className="p-8 bg-[#C0C0C0] shadow-lg rounded-lg"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <FaDesktop className="text-4xl text-[#6A0DAD] mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">
              {translations[language].serviceName2}
            </h3>
            <p className="text-black">
              {translations[language].serviceDescription2}
            </p>
          </div>
          <div
            className="p-8 bg-[#C0C0C0] shadow-lg rounded-lg"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <HiDocumentMagnifyingGlass className="text-4xl text-[#6A0DAD] mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">
              {translations[language].serviceName3}
            </h3>
            <p className="text-black">
              {translations[language].serviceDescription3}
            </p>
          </div>
          <div
            className="p-8 bg-[#C0C0C0] shadow-lg rounded-lg"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <TiShoppingCart className="text-4xl text-[#6A0DAD] mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">
              {translations[language].serviceName4}
            </h3>
            <p className="text-black">
              {translations[language].serviceDescription4}
            </p>
          </div>
          <div
            className="p-8 bg-[#C0C0C0] shadow-lg rounded-lg"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <HiOutlinePresentationChartLine className="text-4xl text-[#6A0DAD] mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">
              {translations[language].serviceName5}
            </h3>
            <p className="text-black">
              {translations[language].serviceDescription5}
            </p>
          </div>
          <div
            className="p-8 bg-[#C0C0C0] shadow-lg rounded-lg"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <SlPresent className="text-4xl text-[#6A0DAD] mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">
              {translations[language].serviceName6}
            </h3>
            <p className="text-black">
              {translations[language].serviceDescription6}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
