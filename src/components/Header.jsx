
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Button,
  Dropdown,
  DropdownItem,
} from "flowbite-react";

import { useState, useEffect } from "react";
import logo from "../assets/Logo-Light.png";
import { FaChevronDown } from "react-icons/fa6";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkStyle =
    "!flex !h-[40px] !items-center !pl-[40px] !pr-0 !bg-transparent !text-white !font-[Inter] !text-[13px] !font-medium !uppercase hover:!text-[#866452]";

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full font-sans transition-colors duration-300 ${isScrolled ? "bg-[#252A1F]" : "bg-transparent"
        }`}
    >
      <Navbar fluid className="!bg-transparent !px-[30px] !py-[25px]">

        <NavbarBrand href="#home" className="shrink-0">
          <img
            src={logo}
            alt="Flowra Yoga Studio"
            className="h-[50px] w-[180px] object-contain"
          />
        </NavbarBrand>

        <div className="flex items-center gap-5 md:order-2">

          <NavbarCollapse className="items-center">
            <NavbarLink
              href="#home"
              className="!cursor-pointer !font-['Inter'] !text-[13px] !font-medium !uppercase !text-white hover:!bg-transparent hover:!text-white"
            >
              Home
            </NavbarLink>

            <NavbarLink
              href="#home"
              className="!cursor-pointer !font-['Inter'] !text-[13px] !font-medium !uppercase !text-white hover:!bg-transparent hover:!text-white"
            >
              About
            </NavbarLink>

            <Dropdown
              label={
                <span className="flex cursor-pointer items-center gap-2 font-['Inter'] text-[13px] font-medium uppercase text-white">
                  Classes <FaChevronDown size={10} />
                </span>
              }
              inline
              dismissOnClick={true}
              className="flowra-dropdown"
            >
              <DropdownItem href="#classes">Classes</DropdownItem>
              <DropdownItem href="#class-details">Class Details</DropdownItem>
            </Dropdown>

            <Dropdown
              label={
                <span className="flex cursor-pointer items-center gap-2 font-['Inter'] text-[13px] font-medium uppercase text-white">
                  Pages <FaChevronDown size={10} />
                </span>
              }
              inline
              dismissOnClick={true}
              className="flowra-dropdown"
            >
              <DropdownItem href="#instructors">Instructors</DropdownItem>
              <DropdownItem href="#pricing">Pricing</DropdownItem>
              <DropdownItem href="#products">Products</DropdownItem>
              <DropdownItem href="#faqs">FAQs</DropdownItem>
              <DropdownItem href="#gallery">Gallery</DropdownItem>
              <DropdownItem href="#404">404 Error</DropdownItem>
              <DropdownItem href="#coming-soon">Coming Soon</DropdownItem>
            </Dropdown>

            <Dropdown
              label={
                <span className="flex cursor-pointer items-center gap-2 font-['Inter'] text-[13px] font-medium uppercase text-white">
                  Blog <FaChevronDown size={10} />
                </span>
              }
              inline
              dismissOnClick={true}
              className="flowra-dropdown"
            >
              <DropdownItem href="#blog">Blog</DropdownItem>
              <DropdownItem href="#single-post">Single Post</DropdownItem>
            </Dropdown>

            <NavbarLink
              href="#home"
              className="!cursor-pointer !font-['Inter'] !text-[13px] !font-medium !uppercase !text-white hover:!bg-transparent hover:!text-white"
            >
              Contact
            </NavbarLink>
          </NavbarCollapse>

          <Button className="!h-[48px] !whitespace-nowrap !rounded-[5px] !border-0 !bg-white !px-[25px] !py-[15px] !font-[Inter] !text-[14px] !font-medium !uppercase !text-[#252A1F] hover:!bg-[#866452] hover:!text-white">
            Contact Us <span className="ml-2">→</span>
          </Button>

          <NavbarToggle />
        </div>
      </Navbar>
    </header>
  );
}

export default Header;
