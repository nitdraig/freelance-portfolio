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
      className={` lg:h-20   ${
        scrollPosition > 0
          ? `bg-gray-900/80 shadow-md transition`
          : "bg-transparent"
      } `}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-text "
        />
        <NavbarBrand>
          <Link
            href="/#"
            className="text-2xl text-text  hover:text-second font-bold sm:text-3xl"
          >
            Agustín Dev
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 " justify="center">
        <NavbarItem>
          <a
            href="/#aboutme"
            className="text-text text-lg  uppercase hover:text-second"
          >
            Acerca de mí
          </a>
        </NavbarItem>
        <NavbarItem>
          <a
            href="/#projects"
            className="text-text text-lg  uppercase hover:text-second"
          >
            Proyectos
          </a>
        </NavbarItem>
        <NavbarItem>
          <a
            href="#"
            className="text-text text-lg  uppercase hover:text-second"
          >
            Servicios
          </a>
        </NavbarItem>
        <NavbarItem>
          <a
            href="https://es.blog.agustin.top"
            target="_blank"
            className="text-text text-lg uppercase hover:text-second"
          >
            Blog
          </a>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <a
            href="/#contact"
            className="bg-gray-200  text-[1rem] text-black px-8 py-2 rounded-lg font-bold hover:text-second md:m-5 md:block md:mx-auto md:w-fit lg:px-3"
          >
            Contacta conmigo
          </a>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <button
            className="bg-second text-[1rem] text-text px-4 py-2 rounded-lg font-bold hover:text-third md:m-5 md:block md:mx-auto md:w-fit lg:px-3"
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
                className="w-full text-2xl text-text  "
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
