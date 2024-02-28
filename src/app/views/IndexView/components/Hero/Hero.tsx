"use client";
import React, { useEffect } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";

function Hero() {
  const [text, count] = useTypewriter({
    words: ["Fullstack Web developer", "Project Managment", "QA-Tester"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section
      className="bg-gradient-to-r from-one via-gray-900 to-one"
      id="home"
    >
      <div className="  h-screen  -mt-20 flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <img
          className="relative rounded-full h-32 w-32 mx--auto object-cover"
          alt="perfil"
          src="https://res.cloudinary.com/draig/image/upload/v1688835318/profile-pic_2_pxpzfg.png"
        />
        <div className="z-20">
          <h1 className=" uppercase  text-3xl lg:text-5xl text-text pb-3 tracking-[8px]">
            Avellaneda Agustín
          </h1>
          <h3 className="uppercase lg:text-2xl font-serif text-lg text-text lg:mt-2 tracking-[2px]">
            Programador Web Freelance
          </h3>
          <h3 className="text-1xl text-text lg:text-3xl font-semibold lg:mt-4 mt-4 px-5 lg:px-10">
            <span className="mr-3 text-2xl">{text}</span>
            <Cursor cursorColor="#6A0DAD" />
          </h3>
        </div>
        <div className="icons flex mt-5">
          <ul
            data-aos="fade-up"
            data-aos-duration="1500"
            className=" flex gap-5"
          >
            <li>
              <a href="https://www.github.com/nitdraig" target="_blank">
                <AiFillGithub className="text-text h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 hover:text-secondary" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/avellaneda-agustín-tns"
                target="_blank"
              >
                <FaLinkedinIn className="text-text h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 hover:text-secondary " />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/nitdraig" target="_blank">
                <AiFillTwitterCircle className="  text-text h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 hover:text-secondary  " />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <a className="text-text bg-[#6A0DAD]" href="">
            Acerca de mí
          </a>
          <a className="text-text" href="">
            Mis servicios
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
