import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuItem,
  NavbarMenu,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useLanguage } from "@/app/components/LanguageContext";
import translations from "../../../locals/languages";

export const NavBar = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const { language, toggleLanguage } = useLanguage();
  const toggleNav = (name: any) => {
    setIsOpen(!isOpen);
    setActiveIndex(name === activeIndex ? null : name);
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={false}
      className={` lg:h-20 text-white  ${
        scrollPosition > 0 ? `bg-gray-900/80 ` : "bg-transparent"
      } `}
    >
      <NavbarContent justify="start" className="">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden  "
        ></NavbarMenuToggle>
        <NavbarBrand>
          <Link
            href="/#"
            className="text-2xl text-white  hover:text-[#6A0DAD] font-bold sm:text-3xl"
          >
            Agustín Dev
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 " justify="center">
        <NavbarItem>
          <a
            aria-hidden="true"
            href="/#aboutme"
            className="text-white text-lg  uppercase hover:text-[#6A0DAD]"
          >
            {translations[language].about}
          </a>
        </NavbarItem>
        <NavbarItem>
          <a
            aria-hidden="true"
            href="/#projects"
            className="text-white text-lg  uppercase hover:text-[#6A0DAD]"
          >
            {translations[language].projects}
          </a>
        </NavbarItem>
        <NavbarItem>
          <a
            aria-hidden="true"
            href="/#services"
            className="text-white text-lg  uppercase hover:text-[#6A0DAD]"
          >
            {translations[language].service}
          </a>
        </NavbarItem>
        <NavbarItem>
          <a
            aria-hidden="true"
            href="https://es.blog.agustin.top"
            target="_blank"
            className="text-white text-lg uppercase hover:text-[#6A0DAD]"
          >
            Blog
          </a>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <a
            aria-hidden="true"
            href="/#contact"
            className="bg-gray-200  text-[1rem] text-black px-8 py-2 rounded-lg font-bold hover:text-[#6A0DAD] md:m-5 md:block md:mx-auto md:w-fit lg:px-3"
          >
            {translations[language].contact}
          </a>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <button
            className="bg-[#6A0DAD] text-[1rem] text-white px-4 py-2 rounded-lg font-bold hover:text-[#C0C0C0] md:m-5 md:block md:mx-auto md:w-fit lg:px-3"
            onClick={toggleLanguage}
          >
            {translations[language].toggleLanguage}
          </button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className=" bg-black/60  ">
        <div className="mt-2">
          {translations[language].menuItems.map((item: any, index: any) => (
            <NavbarMenuItem key={`${item}-${index}`} className="mt-4 ">
              <Link
                color={"primary"}
                aria-hidden="true"
                className="w-full text-2xl text-white  "
                href={item.url}
              >
                {item.title}
              </Link>
            </NavbarMenuItem>
          ))}
          <button
            className="bg-[#6A0DAD] mt-6 text-[1rem] text-white px-4 py-2 rounded-lg font-bold hover:text-[#C0C0C0] md:m-5 md:block md:mx-auto md:w-fit lg:px-3"
            onClick={toggleLanguage}
          >
            {translations[language].toggleLanguage}
          </button>
        </div>
      </NavbarMenu>
    </Navbar>
  );
};
