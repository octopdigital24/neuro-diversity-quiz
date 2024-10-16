import React, { useState } from "react";
import logo from "../assets/neurodiversity-logo-black.png";
import transparency from "../assets/platinum-transparency-2024.png";

const navLinks = [
  {
    label: "Traits",
    url: "/",
    submenus: [
      { label: "Strength Triats", url: "/" },
      { label: "Growth Triats", url: "/" },
    ],
  },
  {
    label: "Conditions",
    url: "/",
  },
  {
    label: "Diagnosis",
    url: "/",
    submenus: [
      { label: "As a Child", url: "/" },
      { label: "As an Adult", url: "/" },
      { label: "Self Diagnosis", url: "/" },
    ],
  },
  {
    label: "Treatments",
    url: "/",
  },
  {
    label: "Assessments",
    url: "/",
    submenus: [
      { label: "Workplace Inclusion Test", url: "/" },
      { label: "Mission", url: "/" },
    ],
  },
  {
    label: "About Us",
    url: "/",
    submenus: [{ label: "Contact Us", url: "/" }],
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  return (
    <div className="shadow-md mb-10">
      <div className="py-2 max-w-screen-lg mx-auto flex justify-between items-center px-5 lg:px-0">
        {/* Logo */}
        <div>
          <img src={logo} className="h-16" alt="Logo" />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            className="text-gray-900 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          {navLinks.map((link, index) => (
            <div key={index} className="group relative">
              <a
                href={link.url}
                className="text-gray-900 group-hover:bg-[#FF5300] hover:text-white px-2 py-1 rounded-md transition-colors duration-200"
              >
                {link.label}
              </a>
              {link.submenus && (
                <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md p-2">
                  {link.submenus.map((submenu, subIndex) => (
                    <li key={subIndex}>
                      <a
                        href={submenu.url}
                        className="block px-4 py-2 text-gray-700 hover:text-gray-900"
                      >
                        {submenu.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <button className="py-1 px-3 bg-blue-500 hover:bg-blue-600 transition-colors duration-200 active:scale-95 text-white rounded-full ml-6">
            Donate
          </button>
          <img src={transparency} className="h-16 ml-2" alt="Transparency" />
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-16 right-4 w-1/2 sm:w-2/3 max-h-[70vh]  overflow-y-auto bg-white border shadow-2xl rounded-md ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="w-full flex flex-col items-start space-y-4 p-4 divide-y  ">
            {navLinks.map((link, index) => (
              <li key={index} className="w-full">
                <a
                  href={link.url}
                  className="text-gray-900 w-full px-4 py-2 hover:bg-gray-200 rounded-md flex justify-between items-center"
                  onClick={() => setSelected(link.label)}
                >
                  {link.label}{" "}
                  {link.submenus && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`  ${selected ? " rotate-180" : "rotate-0"}`}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  )}
                </a>
                {link.submenus && selected === link.label && (
                  <ul className="pl-4">
                    {link.submenus.map((submenu, subIndex) => (
                      <li key={subIndex}>
                        <a
                          href={submenu.url}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          {submenu.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <button className="py-2 px-3 w-full bg-blue-500 hover:bg-blue-600 transition-colors duration-200 active:scale-95 text-white rounded-full">
              Donate
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
