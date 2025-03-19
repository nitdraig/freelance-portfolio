import translations from "@/app/locals/languages";
import { useLanguage } from "@/app/utils/LanguageContext";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  const { language } = useLanguage();
  return (
    <footer
      id="footer"
      className="bg-gradient-to-r from-[#0F0F0F] via-gray-900 to-[#0F0F0F]"
    >
      <div className="h-full flex flex-col gap-4 items-center justify-between lg:p-6 p-8">
        <h2
          data-aos="zoom-out"
          className=" text-gray-300 font-bold lg:text-5xl text-3xl pt-5"
        >
          {translations[language].talk}
        </h2>
        <span className="h-[1.1px] right-0 absolute w-full bg-gray-300 block"></span>
        <div className=" flex items-center justify-center gap-8 sm:gap-5">
          <a
            aria-hidden="true"
            href="https://www.linkedin.com/in/avellaneda-agustín-tns"
            target="_blank"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <FaLinkedinIn className="text-white  text-3xl hover:scale-125 hover:text-[#6A0DAD] cursor-pointer" />
          </a>
          <a
            aria-hidden="true"
            href="https://twitter.com/nitdraig"
            target="_blank"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <IoLogoTwitter className="text-white  text-3xl hover:scale-125 hover:text-[#6A0DAD] cursor-pointer" />
          </a>
        </div>
        <div className="lg:text-md text-sm text-center hover:scale-110 text-white hover:text-[#dbdbdb]">
          <a
            aria-hidden="true"
            href="https://www.linkedin.com/in/avellaneda-agustín-tns"
            target="_blank"
          >
            <p>
              All rights reserved Copyright © {new Date().getFullYear()}{" "}
              <br className="lg:hidden" />
              <span className="lg:inline hidden"> ||</span> Dev with &hearts; by
              Agustín Avellaneda
            </p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
