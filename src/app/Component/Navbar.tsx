"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import NavLink from "./Navlink";
import Nav from "./Nav";

const NavLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href={"/"}>
          <img className="navbar-logo" src="/Images/logo.png" alt="Logo" />
        </Link>
        <div className="cv-button">
          {/* <a href="/Images/assests/Cv/Professional-Resume.pdf" download> */}
          <a href="/images/assests/Professional-Resume.pdf" download>
            <button>
              <span>Download CV</span>
            </button>
          </a>
        </div>
        <div className="mobile-menu">
          {!navbar ? (
            <button onClick={() => setNavbar(true)}>
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <>
              <button onClick={() => setNavbar(false)}>
                <XMarkIcon className="h-5 w-5" />
              </button>
            </>
          )}
        </div>
        <div className={`menu ${navbar ? "block" : "hidden"}`} id="navbar">
          <ul className="flex p-4 md:p-0 flex-row md:space-x-8 mt-0">
            {NavLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbar ? <Nav links={NavLinks} /> : null}
    </nav>
  );
};

export default Navbar;
