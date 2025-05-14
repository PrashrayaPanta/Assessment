import { useState } from "react";
import "./App.css";

import DesktopCardComponent from "./components/DesktopCardComponent";

import MobileScreenCardComponent from "./components/MobileScreenCardComponent";


import Footer from "./components/Footer";

const services = [
  {
    title: "Custom Software Development",
    desc: "Tailored software solutions for your needs.",
    img: "https://metalogic.com.np/services/mainpage/computer.svg",
  },
  {
    title: "Web Development",
    desc: "Websites that work on all devices.",
    img: "https://metalogic.com.np/services/web.svg",
  },
  {
    title: "Mobile App Development",
    desc: "Apps for phones and tablets.",
    img: "https://metalogic.com.np/services/mobile.svg",
  },
  {
    title: "Cloud Computing Services",
    desc: "Use the internet to improve your business.",
    img: "https://metalogic.com.np/services/cloud.svg",
  },
  {
    title: "Quality Assurance and Testing",
    desc: "Checking software for reliability.",
    img: "https://metalogic.com.np/services/qa.svg",
  },
  {
    title: "UI/UX Designing",
    desc: "Creating user-friendly interfaces.",
    img: "https://metalogic.com.np/services/ui.svg",
  },
  {
    title: "Maintenance and Support",
    desc: "Keep your software running smoothly.",
    img: "https://metalogic.com.np/services/mainpage/computer.svg",
  },
  {
    title: "Blockchain Solutions",
    desc: "Secure technology for your business.",
    img: "https://metalogic.com.np/services/support.svg",
  },
  {
    title: "DevOps",
    desc: "Faster and safer software delivery.",
    img: "https://metalogic.com.np/services/mainpage/computer.svg",
  },
];

function App() {
  const [openSmallScreenCertainList, setopenSmallScreenCertainLists] =
    useState(false);

  const [openBigScreenCertainList, setopenBigScreenCertainList] =
    useState(false);

  const [hambergmenuopen, setHambergMenuOpen] = useState(false);

  function handleMobileScreenCertainList() {
    setopenSmallScreenCertainLists(!openSmallScreenCertainList);
  }

  function handleHambergMenuOpening() {
    setHambergMenuOpen(!hambergmenuopen);
  }

  function handleBigScreenCertainList() {
    setopenBigScreenCertainList(!openBigScreenCertainList);
  }



  return (
    <>
      <div className="flex flex-col bg-white p-4 ">
        <div className="flex justify-between items-center w-full px-4">
          <div className="flex items-center gap-2 text-black xl:w-1/3 w-auto">
            {/* Company Logo */}
            <img
              src="https://metalogic.com.np/metalogo.png"
              alt="Meta Logic"
              className="w-10 h-auto"
            />
            <a href="#" className="text-lg font-semibold">
              MetaLogic
            </a>
          </div>

          {/* Large Screen Navbar */}

          {/* Center: Navigation */}
          <div className="xl:flex hidden justify-center gap-8 font-extrabold text-xl whitespace-nowrap  xl:w-1/3 items-center">
            <a href="#" className="py-4">
              Home
            </a>
            <a
              href="#"
              // onClick={handleCertainList}
              onClick={handleBigScreenCertainList}
              className="flex items-center gap-1 py-4"
            >
              Services
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
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </a>

            <div className=" absolute top-1/10 left-0 right-0">
              {/* //service list in Big Screen */}
              {openBigScreenCertainList && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  px-2 py-4 text-white">
                  {services.map((service, index) => (
                    <DesktopCardComponent
                      index={index}
                      service={service}
                      key={index}
                    />
                  ))}
                </div>
              )}
            </div>

            <a href="#" className="py-4">
              Careers
            </a>
            <a href="#" className="py-4">
              About Us
            </a>
            <a href="#" className="py-4">
              Blog
            </a>
          </div>

          {/* Right: Hamburger (mobile) + Get In Touch */}
          <div className="flex items-center gap-4 justify-end xl:w-1/3 w-auto">
            {/* Hamburger menu for small screens */}
            <a
              href="#"
              onClick={handleHambergMenuOpening}
              className="xl:hidden block"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </a>

            {/* Get In Touch Button (only on xl and up) */}
            <button className="bg-red-500 px-4 py-2 cursor-pointer font-extrabold text-xl hidden xl:block">
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* //Mobile Menu */}

      {hambergmenuopen && (
        <>
          <div className="flex flex-col justify-center min-h-2 py-2 xl:hidden bg-white">
            <a
              className="font-extrabold text-xl px-2 py-2  text-center"
              href="#"
            >
              Home
            </a>

            <a
              className="flex items-center px-2  justify-center py-2  font-extrabold text-xl "
              href="#"
              onClick={handleMobileScreenCertainList}
            >
              Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </a>

            {openSmallScreenCertainList && (
              <ul className="px-2  py-2 text-center">
                {services.map((service, index) => (
                  <MobileScreenCardComponent key={index} service={service} />
                ))}
              </ul>
            )}

            <div className="flex flex-col">
              <a href="#" className="font-extrabold text-center  text-xl py-2 ">
                Carrers
              </a>
              <a href="#" className="font-extrabold text-center text-xl py-2">
                Blogs
              </a>
              <a href="#" className="font-extrabold text-center  text-xl py-2">
                About Us
              </a>
              <button className="bg-red-500 px-2 py-2 cursor-pointer mx-auto font-extrabold text-xl">
                Get In Touch
              </button>
            </div>
          </div>
        </>
      )}

      <main className="flex justify-center items-center h-200 bg-red-500">
        I am main section
      </main>

      <Footer/>
     
    </>
  );
}

export default App;
