import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer className=" bg-gradient-to-r from-[#0F0F0F] via-gray-900 to-[#0F0F0F]">
      <div className="h-full flex flex-col gap-8 items-center justify-between p-10 sm:p-7">
        <h2
          data-aos="zoom-out"
          className=" text-gray-300 font-bold text-5xl sm:text-3xl pt-5"
        >
          Hablemos
        </h2>
        <span className="h-[1.1px] right-0 absolute w-full bg-gray-300 block"></span>
        <div className=" flex items-center justify-center gap-8 sm:gap-5">
          <a
            data-aos="fade-up"
            data-aos-duration="1000"
            href="https://www.linkedin.com/in/avellaneda-agustín-tns"
            target="_blank"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <FaLinkedinIn className="text-white  text-3xl hover:scale-125 hover:text-[#6A0DAD] cursor-pointer" />
          </a>
          <a
            data-aos="fade-up"
            data-aos-duration="1200"
            href="https://twitter.com/nitdraig"
            target="_blank"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <IoLogoTwitter className="text-white  text-3xl hover:scale-125 hover:text-[#6A0DAD] cursor-pointer" />
          </a>
        </div>
        <div className="lg:text-lg text-md text-center text-white hover:text-[#dbdbdb]">
          <a
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
