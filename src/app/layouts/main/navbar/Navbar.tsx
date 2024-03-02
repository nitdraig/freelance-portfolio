"use client";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuItem,
  NavbarMenu,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { GrBookmark } from "react-icons/gr";

export const NavBar = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

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

  const menuItems = [
    { title: "Acerca de mí", url: "/#aboutme" },
    { title: "Proyectos", url: "/#projects" },
    { title: "Servicios", url: "/#services" },
    { title: "Blog", url: "/#" },
    { title: "Contactame", url: "/#contact" },
  ];
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
            href="/#aboutme"
            className="text-white text-lg  uppercase hover:text-[#6A0DAD]"
          >
            Acerca de mí
          </a>
        </NavbarItem>
        <NavbarItem>
          <a
            href="/#projects"
            className="text-white text-lg  uppercase hover:text-[#6A0DAD]"
          >
            Proyectos
          </a>
        </NavbarItem>
        <NavbarItem>
          <a
            href="/#services"
            className="text-white text-lg  uppercase hover:text-[#6A0DAD]"
          >
            Servicios
          </a>
        </NavbarItem>
        <NavbarItem>
          <a
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
            href="/#contact"
            className="bg-gray-200  text-[1rem] text-black px-8 py-2 rounded-lg font-bold hover:text-[#6A0DAD] md:m-5 md:block md:mx-auto md:w-fit lg:px-3"
          >
            Contacta conmigo
          </a>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <button
            className="bg-[#6A0DAD] text-[1rem] text-white px-4 py-2 rounded-lg font-bold hover:text-[#C0C0C0] md:m-5 md:block md:mx-auto md:w-fit lg:px-3"
            // onClick={toggleLanguage}
          >
            Es
          </button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className=" bg-black/60  ">
        <div className="mt-2">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`} className="mt-4 ">
              <Link
                color={"primary"}
                className="w-full text-2xl text-white  "
                href={item.url}
              >
                {item.title}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </Navbar>
  );
};
