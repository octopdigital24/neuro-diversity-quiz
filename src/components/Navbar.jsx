import React from "react";
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
  return (
    <div className="shadow-md mb-10">
      <div className=" py-2 max-w-screen-lg mx-auto flex justify-between items-center ">
        <div>
          <img src={logo} className="h-16" />
        </div>
        <div>
          <div className="flex  items-center ">
            {navLinks.map((link, index) => (
              <div key={index} className="ml-4">
                <a
                  href={link.url}
                  className="text-gray-900  group hover:bg-[#FF5300] hover:text-white  px-2 py-1 rounded-md transition-colors duration-200"
                >
                  {link.label}
                </a>
                {link.submenus && (
                  <ul className="ml-2 hidden group-hover:block">
                    {link.submenus.map((submenu, subIndex) => (
                      <li key={subIndex}>
                        <a
                          href={submenu.url}
                          className="text-gray-700 hover:text-gray-900"
                        >
                          {submenu.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <button
              className="py-1 px-3 bg-blue-500 hover:bg-blue-600
          transition-colors duration-200 active:scale-95  text-white rounded-full ml-6"
            >
              Donate
            </button>
            <img src={transparency} className="h-16 ml-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
