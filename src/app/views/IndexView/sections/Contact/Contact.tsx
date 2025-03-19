import translations from "@/app/locals/languages";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Form from "./Form";
import { useLanguage } from "@/app/utils/LanguageContext";

const Contact = () => {
  const { language } = useLanguage();

  return (
    <section
      className="bg-gradient-to-r from-[#0F0F0F] via-gray-900 to-[#0F0F0F] h-full text-white pb-10 pt-10"
      id="contact"
    >
      <h3 className="lg:p-12 text-center uppercase tracking-[2px] lg:tracking-[8px] text-white text-2xl lg:text-3xl lg:pt-3 pt-5 pb-8">
        {translations[language].contactWithMe}
      </h3>
      <span className="h-[1.1px] px-10 absolute w-full bg-gray-300 block"></span>
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="max-w-5xl flex lg:mx-auto mx-4 flex-col lg:flex-row mt-8"
      >
        <div className="w-full max-w-lg lg:mr-10">
          <h3 className="text-2xl font-bold mb-4">
            {translations[language].contactText}
          </h3>
          <Form />
        </div>
        <div className="w-full max-w-lg mt-8 mb-4 lg:mt-0 lg:ml-10 text-left">
          <h3 className="text-2xl font-bold mb-4">
            {translations[language].contactText1}
          </h3>
          <p className="text-lg mb-4 ">{translations[language].contactText2}</p>
          <a
            href="https://cal.com/nitdraig"
            target="_blank"
            aria-label={translations[language].contactText5}
            className="text-2xl flex font-bold items-center text-[#fff] hover:text-[#6A0DAD]"
          >
            {translations[language].contactText5}
            <BsArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
