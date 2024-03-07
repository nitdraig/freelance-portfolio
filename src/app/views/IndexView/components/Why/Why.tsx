import { useLanguage } from "@/app/components/LanguageContext";
import translations from "@/app/locals/languages";
import { Image } from "@nextui-org/react";
import React from "react";

const Why = () => {
  const { language, toggleLanguage } = useLanguage();
  return (
    <section
      className="bg-gradient-to-r from-[#0F0F0F] via-gray-900 to-[#0F0F0F] pt-10 w-screen"
      id="whyme"
    >
      <h2 className="p-12 text-center uppercase tracking-[8px] text-white text-2xl lg:text-3xl  lg:pt-6 pb-8">
        <span className="bg-gradient-to-r from-purple-400 to-gray-300 bg-clip-text text-transparent animate-shine">
          {translations[language].whySectionTitle}
        </span>
      </h2>
      <span className="h-[1.1px] px-10 absolute w-full bg-gray-300 block"></span>
      <div className="flex flex-col  lg:flex-row  mt-8">
        <div className="w-full lg:mx-10">
          <div
            className="grid gap-6 mx-8 sm:grid-cols-2"
            data-aos="fade-down-left"
          >
            <div className="relative z-0 text-center lg:text-left">
              <h3 className="lg:text-2xl text-3xl uppercase text-purple-400 ">
                {translations[language].whySectionSubTitle1}
              </h3>
              <p className="lg:text-2xl text-lg  mt-6 text-white mb-6">
                {translations[language].whySectionDescription1}
              </p>
            </div>
            <div className="lg:mx-auto text-center lg:text-left lg:mb-0 mb-6 ">
              <h3 className="lg:text-2xl text-3xl text-purple-400 mb-6">
                SAPQS
              </h3>
              <ul className="lg:text-2xl text-lg text-white">
                <li>Simplicity - Simplicidad</li>
                <li>Approach - Enfoque</li>
                <li>Personalization- Personalización</li>
                <li>Quality - Calidad</li>
                <li>Success - Éxito</li>
              </ul>
            </div>
          </div>
          <div className="lg:mx-10 mx-4">
            <div
              className="mb-4 mt-4 flex justify-center items-center"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <Image
                src={translations[language].whyImg}
                alt="Diagrama de flujo"
                className="diagram_img w-full"
                loading="lazy"
              />
            </div>
            <div data-aos="fade-left" data-aos-duration="2000">
              <p className="lg:text-3xl text-2xl text-white mb-8 text-center font-semibold">
                {translations[language].whyDescription3}
              </p>
            </div>
            {/* <div className="text-center flex justify-center">
              <a
                href="/#contact"
                className="text-lg bg-gray-200 rounded-md px-10 py-2 flex font-bold items-center text-[#0c0c0c] hover:text-[#6A0DAD]"
              >
                 <TfiWrite className="ml-2" />
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
