"use client";
/* eslint-disable jsx-a11y/anchor-is-valid */
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { FC } from "react";

const Footer: FC<Record<string, never>> = function () {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-[40px] px-8 md:px-[60px] pb-[20px]">
      <div className="hidden md:flex">
        <a href="/" className="flex">
          <img className="w-40 ml-20" src="/sales-fuel-logo.png" alt="Sales Fuel" />
        </a>
      </div>
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-1 gap-8 px-4 py-6 md:grid-cols-3 lg:py-8 ">
          <div>
            <h2 style={{ borderBottom: '2px solid grey', width: '100px'}} className="mb-4 uppercase text-gray-500 font-bold dark:text-white">
              Services
            </h2>
            <ul className="text-gray-700 font-normal">
              <li className="mb-1">
                <a href="/extension" className="hover:underline">
                  Extension
                </a>
              </li>
              <li className="mb-1">
                <a href="/solutions-sales" className="hover:underline">
                  Sales
                </a>
              </li>
              <li className="mb-1">
                <a href="/solutions-marketers" className="hover:underline">
                  Marketing
                </a>
              </li>
              <li className="mb-1">
                <a href="/about-us" className="hover:underline">
                  Resources
                </a>
              </li>
              <li className="mb-1">
                <a href="/companies-search" className="hover:underline">
                  Company directory
                </a>
              </li>
              <li className="mb-1">
                <a href="/people-search" className="hover:underline">
                  People directory
                </a>
              </li>
              {/* <li className="mb-1">
                <a
                  href="https://blog.salesfueldata.com"
                  className="hover:underline"
                >
                  Blog
                </a>
              </li> */}
            </ul>
          </div>
          <div>
            <h2 style={{ borderBottom: '2px solid grey', width: '120px'}} className="mb-4 uppercase text-gray-500 font-bold dark:text-white">
              Who we are
            </h2>
            <ul className="text-gray-700 font-normal">
              <li className="mb-1">
                <a href="/about-us" className="hover:underline">
                  About Us
                </a>
              </li>

              <li className="mb-1">
                <a
                  href="https://blog.salesfueldata.com"
                  target="_blank"
                  className="hover:underline"
                >
                  Blog
                </a>
              </li>

              <li className="mb-1">
                <a href="/privacy-policy" className="hover:underline">
                  Privacy policy
                </a>
              </li>
              <li className="mb-1">
                <a href="/terms-and-conditions" className="hover:underline">
                  Terms and conditions
                </a>
              </li>
            </ul>

            {/* <h2 className="mb-4 mt-6 uppercase text-gray-500 font-bold dark:text-white">
              Other Services
            </h2>
            <ul className="text-gray-700">
              <li className="mb-1">
                <a href="#" className="hover:underline ">
                  Product and services
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:underline ">
                  Data availability
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:underline ">
                  Why choose us
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:underline ">
                  Plan and pricing
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:underline ">
                  Our clients
                </a>
              </li>
            </ul> */}
          </div>
          <div>
            <h2 className="mb-4 uppercase text-gray-500 font-bold dark:text-white">
              Resources
            </h2>
            <ul className="text-gray-700">
              <li style={{ borderBottom: '2px solid grey'}} className="mb-1">
                {/* <a href="#" className="hover:underline"> */}© 2024 Sales
                Fuel. All Rights Reserved. Salesfuel is owned by Market Inside
                ltd
                {/* </a> */}
              </li>
            </ul>
            <div>
              <h3
                style={{ marginTop: "4vh" }}
                className="mb-4 uppercase text-gray-500 font-bold dark:text-white"
              >
                Connect With Us
              </h3>
              <div className="flex gap-2 items-center mt-2">
                <div style={{ borderWidth: '2px'}} className="w-10 h-10 flex justify-center items-center border border-gray-700">
                  <a
                    href="https://www.facebook.com/profile.php?id=100092501613517"
                    target="_blank"
                  >
                    <FacebookIcon />
                  </a>
                </div>
                <div style={{ borderWidth: '2px'}} className="w-10 h-10 flex justify-center items-center border border-gray-700">
                  <a href="https://twitter.com/SalesFuelData" target="_blank">
                    <TwitterIcon />
                  </a>
                </div>
                <div style={{ borderWidth: '2px'}} className="w-10 h-10 flex justify-center items-center border border-gray-700">
                  <a
                    href="https://www.linkedin.com/company/sales-fuel-data/"
                    target="_blank"
                  >
                    <LinkedInIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="text-center col-span-full md:col-span-1 -order-1 md:order-last mt-10 md:mt-0">
            <a
              href="https://chrome.google.com/webstore/detail/sales-fuel-%E2%80%93-access-b2b-c/emdakjpcbpbkpjnpmddfjkhdlfoinola/related?hl=en&authuser=4"
              target="_blank"
            >
              <div className="relative">
                <button
                  className="py-3 px-[30px] font-bold text-lg rounded-full mb-1 bg-color-4 text-white"

                >
                  Get Extension
                </button>
                <Image
                  src={RocketImage}
                  alt="hero-image"
                  className="absolute right-0 top-[-7.7rem]"
                />
              </div>
            </a>
            <p className="text-gray-700 mt-1 font-medium whitespace-nowrap">Get email & contact no. from Linkedin</p>
            <div className="flex gap-2 justify-center items-center mt-2">
              <div className="w-12 h-12 rounded-full flex justify-center items-center border border-gray-700">
                <a
                  href="https://www.facebook.com/profile.php?id=100092501613517"
                  target="_blank"
                >
                  <FacebookIcon />
                </a>
              </div>
              <div className="w-12 h-12 rounded-full flex justify-center items-center border border-gray-700">
                <a href="https://twitter.com/SalesFuelData" target="_blank">
                  <TwitterIcon />
                </a>
              </div>
              <div className="w-12 h-12 rounded-full flex justify-center items-center border border-gray-700">
                <a
                  href="https://www.linkedin.com/company/sales-fuel-data/"
                  target="_blank"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div> */}
        </div>
        <div className="px-4 py-6 text-[#939393] md:flex md:items-center md:justify-between font-normal">
          <div>
            <span className="text-sm  dark:text-gray-300 sm:text-center mr-[100px]">
              © 2024 <a href="/">Sales Fuel</a>. All Rights Reserved. Salesfuel
              is owned by Market Inside ltd
            </span>
            {/* <span className="text-sm  dark:text-gray-300 sm:text-center text-[#828282] font-normal"></span> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
