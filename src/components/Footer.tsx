import React, { useState } from "react";

const Footer = () => {


  const [email, setEmail] = useState("");


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  return (
    <>
      <footer
        className="relative text-gray-200"
        style={{
          backgroundImage: "url('https://files.catbox.moe/ftjrp3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="absolute inset-0 bg-black/90"></div>

        <div className="relative px-6 py-12 mx-auto max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <img
                  src="https://metalogic.com.np/metalogo.png"
                  alt="Meta Logic"
                  className="h-8"
                />

                <div>MetaLogic Pvt ltd</div>
              </div>

              <p className="max-w-md text-sm text-gray-400">
                From Concept to Creation
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Join Newsletters</h3>
                <form className="flex gap-2 text-sm">
                  <input
                    type="email"
                    value={email}
                    className=" border invalid:border-red-900  focus:border-sky-500 focus:outline focus:outline-blue-500 focus:invalid:border-pink-500 focus:invalid:outline-red-900 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20"
                    placeholder="Enter your email"
                    onChange={handleChange}
                  />
                  <button
                    type="submit"
                    className="p-2 text-white bg-[#A00201] rounded-lg hover:bg-[#600100] transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                </form>
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-xl font-semibold">Our Projects</h3>
              <ul className="space-y-4 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Project 1
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Project 2
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Project 3
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Project 4
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-xl font-semibold">Support</h3>
              <ul className="space-y-4 text-sm text-gray-400">
                <li>
                  <a
                    href="/privacy-policy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/conditions"
                    className="hover:text-white transition-colors"
                  >
                    Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="/company"
                    className="hover:text-white transition-colors"
                  >
                    Company
                  </a>
                </li>
                <li>
                  <a
                    href="/faq-terms"
                    className="hover:text-white transition-colors"
                  >
                    FAQ & Terms
                  </a>
                </li>
                <li>
                  <a
                    href="/contacts"
                    className="hover:text-white transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-xl font-semibold">Contact Us</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <div className="p-2 bg-[#A00201] hover:bg-[#600100] rounded-full">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.14.94.4 1.86.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone Number</p>
                    <p>9861331866</p>
                  </div>
                </li>

                <li className="flex items-center gap-3">
                  <div className="p-2 bg-[#A00201] hover:bg-[#600100] rounded-full">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email Address</p>
                    <p>metalogic@gmail.com</p>
                  </div>
                </li>

                <li className="flex items-center gap-3">
                  <div className="p-2 bg-[#A00201] hover:bg-[#600100] rounded-full">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 01-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0116 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Locations</p>
                    <p>Kathmandu, Nepal</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 mt-8 border-t border-gray-800">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-sm text-gray-400">
                © 2025 <span className="text-[#A00201]">MetaLogic Pvt ltd</span>
                . All Rights Reserved
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/metalogic"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/metalogic-software-pvt-ltd/"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/metalogic"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="m10 15 5-3-5-3z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/metalogic"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
