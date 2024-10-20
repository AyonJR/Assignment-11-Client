import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-black custom-font">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <h1 className="max-w-lg text-xl font-semibold tracking-tight ">
              Stay updated with our latest news and articles by subscribing to
              our newsletter.
            </h1>
            <div className="flex flex-col mt-6 md:flex-row">
              <input
                id="email"
                type="text"
                className="px-4 py-2  bg-white border rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                placeholder="Email Address"
              />
              <button className="w-full px-6 py-2.5 mt-3 text-sm font-medium tracking-wider  bg-cyanCustom rounded-lg  md:mt-0 md:ml-4 md:w-auto">
                Subscribe
              </button>
            </div>
          </div>
          <div>
            <p className="font-semibold   ">
              Quick Links
            </p>
            <hr className="border-black border-[1px] w-[82px] mt-1" />
            <div className="flex flex-col mt-5 space-y-2">
              <a
                href="#"
                className=" hover:underline"
              >
                Home
              </a>
              <a
                href="#"
                className="hover:underline"
              >
                About Us
              </a>
              <a
                href="#"
                className="hover:underline"
              >
                Services
              </a>
            </div>
          </div>
          <div>
            <p className="font-semibold">
              Industries
            </p>
            <hr className="border-black border-[1px] w-[72px] mt-1" />
            <div className="flex flex-col mt-5 space-y-2">
              <a
                href="#"
                className=" hover:underline"
              >
                Retail & E-Commerce
              </a>
              <a
                href="#"
                className=" hover:underline"
              >
                Tech & IT Solutions
              </a>
              <a
                href="#"
                className="hover:underline"
              >
                Finance & Banking
              </a>
            </div>
          </div>
        </div>

        <hr className="my-6 bg-black border-t-2 border-black  md:my-8 " />

        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-semibold">TechQuery</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
