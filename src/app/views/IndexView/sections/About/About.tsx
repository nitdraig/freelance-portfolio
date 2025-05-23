import translations from "@/app/locals/languages";
import { useLanguage } from "@/app/utils/LanguageContext";
import { Image } from "@nextui-org/react";
import React, { useState } from "react";

const About = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: any) => {
    const rect = e.target.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setPosition({ x: 0, y: 0 });
    }, 300);
    setIsHovered(false);
  };
  const { language } = useLanguage();
  return (
    <section
      className="bg-gradient-to-r from-[#0F0F0F] via-gray-900 to-[#0F0F0F] h-full"
      id="aboutme"
    >
      <div
        className="flex justify-center items-center"
        data-aos="fade-down"
        data-aos-duration="3000"
      >
        <div className="w-full">
          <h2 className="lg:p-12 text-center lg:uppercase tracking-[2px] text-2xl lg:text-3xl  lg:tracking-[8px] text-white  lg:pt-3 pt-5 pb-4 lg:pb-8">
            {translations[language].aboutMe}
          </h2>
          <span className="h-[1.1px] px-10 absolute w-full bg-gray-300 block"></span>
          <div
            className="flex flex-col lg:flex-row justify-between items-center px-4 lg:px-8"
            onMouseMove={handleMouseMove}
          >
            <div className="lg:w-3/5 text-center lg:text-left lg:mt-0 mt-6">
              <p className="text-white lg:text-3xl text-2xl font-bold mb-4">
                {translations[language].myName}
              </p>
              <p className="text-white text-lg ">
                {translations[language].myDescription} <br />
                {translations[language].myDescription2}
              </p>
            </div>
            <div
              className="lg:w-4/5 lg:pl-8 flex lg:mt-2 mt-6 mb-6 justify-center lg:justify-end relative"
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
                transition: isHovered
                  ? "transform 0.3s ease-in-out"
                  : "transform 1s ease",
              }}
              onMouseLeave={handleMouseLeave}
            >
              <Image
                src="/profile4.png"
                alt="Making solutions by Agustín Avellaneda"
                className="w-full  lg:w-full floating-image "
                onMouseEnter={() => setIsHovered(true)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
