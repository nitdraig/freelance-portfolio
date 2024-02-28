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

const NavBar = (props: any) => {
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
    { title: "Acerca de mí", url: "/#" },
    { title: "Proyectos", url: "/#" },
    { title: "Servicios", url: "/#" },
    { title: "Blog", url: "/#" },
    { title: "Contactame", url: "/#" },
  ];
  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={false}
      className={` lg:h-20 ${
        scrollPosition > 0
          ? `bg-black/80 shadow-md transition`
          : "bg-transparent"
      } `}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
        <NavbarBrand>
          <Link
            href="/#"
            className="text-2xl text-white  hover:text-[#8a5cf5] font-bold sm:text-3xl"
          >
            Agustín Dev
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 " justify="center">
        <NavbarItem>
          <a
            href="/#aboutme"
            className="text-white text-lg  uppercase hover:text-[#9b5cff]"
          >
            Acerca de mí
          </a>
        </NavbarItem>
        <NavbarItem>
          <a
            href="/#projects"
            className="text-white text-lg  uppercase hover:text-[#9b5cff]"
          >
            Proyectos
          </a>
        </NavbarItem>
        <NavbarItem>
          <a
            href="#"
            className="text-white text-lg  uppercase hover:text-[#9b5cff]"
          >
            Servicios
          </a>
        </NavbarItem>
        <NavbarItem>
          <a
            href="https://es.blog.agustin.top"
            target="_blank"
            className="text-white text-lg uppercase hover:text-[#9b5cff]"
          >
            Blog
          </a>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <a
            href="/#contact"
            className="bg-gray-200  text-[1rem] text-black px-8 py-2 rounded-lg font-bold hover:text-[#9b5cff] md:m-5 md:block md:mx-auto md:w-fit lg:px-3"
          >
            Contacta conmigo
          </a>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <button
            className="bg-[#422591] text-[1rem] text-white px-4 py-2 rounded-lg font-bold hover:text-[#7795f7] md:m-5 md:block md:mx-auto md:w-fit lg:px-3"
            // onClick={toggleLanguage}
          >
            Es
          </button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="text-white bg-black/60 ">
        <div className="mt-2">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`} className="mt-4">
              <Link
                color={"primary"}
                className="w-full text-2xl "
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

export default NavBar;
