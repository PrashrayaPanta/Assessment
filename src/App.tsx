import { useState } from "react";
import "./App.css";

function App() {
  const [certainListOpen, setCertainListOpen] = useState(false);

  const [openBigScreenCertainList, setopenBigScreenCertainList] =
    useState(false);

  const [hambergmenuopen, setHambergMenuOpen] = useState(false);

  function handleCertainList() {
    setCertainListOpen(!certainListOpen);
  }

  function handleHambergMenuOpening() {
    setHambergMenuOpen(!hambergmenuopen);
  }

  function handleBigScreenCertainList() {
    setopenBigScreenCertainList(!openBigScreenCertainList);
  }

  // function handleClick1() {
  //   setShow(false);
  // }

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

            <div className="bg-blue-500 absolute top-1/10 left-0 right-0">
              {/* <div className="flex justify-between px-3">
                <div className="flex items-center">
                  <div>image</div>
                  <div>
                    <h1>Custom Software development</h1>
                    <p>ijhksdgnkjfhdfksgkjhdsfgjkbdh</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div>image</div>
                  <div>
                    <h1>Custom Software development</h1>
                    <p>ijhksdgnkjfhdfksgkjhdsfgjkbdh</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div>image</div>
                  <div>
                    <h1>Custom Software development</h1>
                    <p>ijhksdgnkjfhdfksgkjhdsfgjkbdh</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between px-3">
                <div className="flex items-center">
                  <div>image</div>
                  <div>
                    <h1>Custom Software development</h1>
                    <p>ijhksdgnkjfhdfksgkjhdsfgjkbdh</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div>image</div>
                  <div>
                    <h1>Custom Software development</h1>
                    <p>ijhksdgnkjfhdfksgkjhdsfgjkbdh</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div>image</div>
                  <div>
                    <h1>Custom Software development</h1>
                    <p>ijhksdgnkjfhdfksgkjhdsfgjkbdh</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between px-3">
                <div className="flex items-center">
                  <div>image</div>
                  <div>
                    <h1>Custom Software development</h1>
                    <p>ijhksdgnkjfhdfksgkjhdsfgjkbdh</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div>image</div>
                  <div>
                    <h1>Custom Software development</h1>
                    <p>ijhksdgnkjfhdfksgkjhdsfgjkbdh</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div>image</div>
                  <div>
                    <h1>Custom Software development</h1>
                    <p>ijhksdgnkjfhdfksgkjhdsfgjkbdh</p>
                  </div>
                </div>
              </div> */}
              {/* //service list in Big Screen */}
              {openBigScreenCertainList && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  px-2 py-4 text-white">
                  <div className="flex items-center bg-red-500 px-2 gap-2 ">
                    <img
                      src="https://metalogic.com.np/services/mainpage/computer.svg"
                      alt=""
                      srcSet=""
                      className="w-14"
                    />

                    <div>
                      <h1 className="text-xl font-medium  ">
                        Custom Software Development
                      </h1>
                      <p className="text-md font-light">
                        Tailored software solutions for your needs.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center bg-red-500 gap-2">
                    <img
                      src="https://metalogic.com.np/services/web.svg"
                      alt=""
                      srcSet=""
                      className="w-14"
                    />

                    <div>
                      <h1 className="text-xl font-medium ">Web Development</h1>
                      <p className="text-md font-light">
                        Websites that work on all devices
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center bg-red-500   gap-2">
                    <img
                      src="https://metalogic.com.np/services/mobile.svg"
                      alt=""
                      srcSet=""
                      className="w-14"
                    />

                    <div>
                      <h1 className="text-xl font-medium">
                        Mobile App Devlopment
                      </h1>
                      <p className="text-md font-light">
                        App for phones and tables
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center bg-red-500 px-2  gap-2 ">
                    <img
                      src="https://metalogic.com.np/services/cloud.svg"
                      alt=""
                      srcSet=""
                      className="w-14"
                    />

                    <div>
                      <h1 className="text-xl font-medium">
                        Cloud computing services
                      </h1>
                      <p className="text-md font-light">
                        Use the internet to impove your business
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center bg-red-500 gap-2 ">
                    <img
                      src="https://metalogic.com.np/services/qa.svg"
                      alt=""
                      srcSet=""
                      className="w-14"
                    />

                    <div>
                      <h1 className="text-xl font-medium">
                        Quality Aussurance and testing
                      </h1>
                      <p className="text-md font-light">
                        Chceking softwares for relaibail;ity
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center bg-red-500 gap-2  ">
                    <img
                      src="https://metalogic.com.np/services/ui.svg"
                      alt=""
                      srcSet=""
                      className="w-14"
                    />

                    <div>
                      <h1 className="text-xl font-medium">UI/UX Designing</h1>
                      <p className="text-md font-light">
                        Creating user friendly interfaces
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center bg-red-500 px-2 gap-2">
                    <img
                      src="https://metalogic.com.np/services/mainpage/computer.svg"
                      alt=""
                      srcSet=""
                      className="w-14"
                    />

                    <div>
                      <h1 className="text-xl font-medium">
                        Maintance and support
                      </h1>
                      <p className="text-md font-light">
                        Keep your softwares running smoothly
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center bg-red-500 gap-2 ">
                    <img
                      src="https://metalogic.com.np/services/support.svg"
                      alt=""
                      srcSet=""
                      className="w-14"
                    />

                    <div>
                      <h1 className="">Block chain solutions</h1>
                      <p className="text-md font-light">
                        Secure your technology for your business
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center bg-red-500 gap-2">
                    <img
                      src="https://metalogic.com.np/services/mainpage/computer.svg"
                      alt=""
                      srcSet=""
                      className="w-14"
                    />

                    <div>
                      <h1 className="text-xl font-medium">Dev Ops</h1>
                      <p className="text-md font-light">
                        Faster and safer software delivery
                      </p>
                    </div>
                  </div>

                  {/* <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300 h-full">
                    <div>
                      <img
                        src="https://metalogic.com.np/services/mainpage/computer.svg"
                        alt=""
                        srcSet=""
                      />
                    </div>

                    <h1 className="text-2xl font-semibold  mb-3">
                      Cloud Computing Services
                    </h3>
                    <p className="text-gray-600 text-lg">
                      Use the internet to improve your business.
                    </p>
                  </div> */}
                  {/* 
                  <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300 h-full">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                      Maintenance and Support
                    </h3>
                    <p className="text-gray-600 text-lg">
                      Keeping your software running smoothly.
                    </p>
                  </div> */}

                  {/* <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300 h-full">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                      Web Development
                    </h3>
                    <p className="text-gray-600 text-lg">
                      Websites that work on all devices.
                    </p>
                  </div> */}

                  {/* <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300 h-full">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                      Quality Assurance and Testing
                    </h3>
                    <p className="text-gray-600 text-lg">
                      Checking software for reliability.
                    </p>
                  </div> */}
                  {/* 
                  <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300 h-full">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                      Dev Ops
                    </h3>
                    <p className="text-gray-600 text-lg">
                      Faster and safer software delivery.
                    </p>
                  </div> */}

                  {/* <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300 h-full">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                      Mobile App Development
                    </h3>
                    <p className="text-gray-600 text-lg">
                      Apps for phones and tablets.
                    </p>
                  </div> */}

                  {/* <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300 h-full">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                      UI/UX Designing
                    </h3>
                    <p className="text-gray-600 text-lg">
                      Creating user-friendly interfaces.
                    </p>
                  </div> */}

                  {/* <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300 h-full">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                      Blockchain Solutions
                    </h3>
                    <p className="text-gray-600 text-lg">
                      Secure technology for your business.
                    </p>
                  </div> */}
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
          <div className="flex flex-col justify-center min-h-2 py-2  bg-white">
            <a
              className="font-extrabold text-xl px-2 py-2   xl:hidden text-center"
              href="#"
            >
              Home
            </a>

            <a
              className="flex items-center px-2  justify-center py-2  font-extrabold text-xl xl:hidden"
              href="#"
              onClick={handleCertainList}
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

            {certainListOpen && (
              <ul className="px-2 bg-amber-600 py-2 xl:hidden text-center">
                <a href="" className="block py-2">
                  <li className="font-bold shadow-amber-400">
                    Custom software devlopment
                  </li>

                  <p>Tailored software solutions for your needs</p>
                </a>

                <a href="" className="block py-2">
                  <li className="font-bold">Web Development</li>
                  <p>Websites that work on all devices</p>
                </a>

                <a href="" className="block py-2">
                  <li className="font-bold">Mobile App Development</li>
                  <p>Apps for phones and tablets</p>
                </a>

                <a href="" className="block py-2">
                  <li className="font-bold">Cloud Computing Services</li>
                  <p>Use your internet to improve your services</p>
                </a>

                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2"
                >
                  <li className="font-bold">Quality Assurance and training</li>
                  <p>Checking softwares for reliability</p>
                </a>

                <a href="" className="block py-2">
                  <li className="font-bold">UI/UX Designing</li>
                  <p>Creating user-firendly interfaces.</p>
                </a>

                <a href="" className="block py-2">
                  <li className="font-bold">Maintenance and support</li>
                  <p>Keeping your software running smoothly</p>
                </a>

                <a href="" className="block py-2">
                  <li className="font-bold">Dev Ops</li>
                  <p>Faster and safer software delivery</p>
                </a>

                <a href="" className="block py-2">
                  <li className="font-bold">Block Chain Solutions</li>
                  <p>Secure technology for your business</p>
                </a>
              </ul>
            )}

            <div className="flex flex-col xl:hidden">
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

      <h1>Hello world</h1>
    </>
  );
}

export default App;
