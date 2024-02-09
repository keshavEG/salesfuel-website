"use client";
import { Dropdown, Navbar } from "flowbite-react";
import { ChevronDownIcon } from "lucide-react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import NavigationSidebar from "./navigation-sidebar";
import ScheduleDemo from "./schedule-demo";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

export default function Header({ user }: { user: any }) {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const logout = async () => {
    document.cookie =
      "contact-data-access-token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    await signOut();
    // router.push("/login");
  };
  return (
    <>
      {/* add banner for dev env */}
      {process.env['NEXT_PUBLIC_ENV'] !== "production" && (
        <div className="bg-red-500 text-white text-sm text-center py-2 w-full" role="banner">
          This is a {process.env['NEXT_PUBLIC_ENV']} environment. Please do not use real data.
        </div>
      )}
      <header className="sticky top-0 z-20 uppercase  font-normal">
        <Navbar fluid className="h-full align-middle !px-0 !pl-4 py-3">
          <a href="/" className="flex">
            <img className="w-40" src="/sales-fuel-logo.png" alt="Sales Fuel" />
          </a>
          <Navbar.Collapse className="hidden md:block">
            {/* <a href="/" className="text-base">
              Home
            </a> */}
            <a href="/extension" className="text-base">
              Extension
            </a>
            <a href="/search" className="text-base">
              Search
            </a>
            <HoverCard openDelay={100}>
              <HoverCardTrigger>
                <div
                  className="text-base  rounded cursor-pointer"
                  onClick={() => router.push("/solutions")}
                >
                  Solutions
                  <ChevronDownIcon className="inline-block ml-1" />
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="p-2 w-[150px] bg-white">
                <div className="flex flex-col gap-1">
                  <a
                    href="/solutions-sales"
                    className=" px-2 py-1 hover:bg-gray-100 rounded"
                  >
                    Sales
                  </a>
                  <a
                    href="/solutions-marketers"
                    className=" px-2 py-1 hover:bg-gray-100 rounded"
                  >
                    Marketers
                  </a>
                  <a
                    href="/hrm"
                    className=" px-2 py-1 hover:bg-gray-100 rounded"
                  >
                    HRM
                  </a>
                </div>
              </HoverCardContent>
            </HoverCard>

            <HoverCard openDelay={100}>
              <HoverCardTrigger>
                <span className="text-base cursor-pointer">
                  Resources
                  <ChevronDownIcon className="inline-block ml-1" />
                </span>
              </HoverCardTrigger>
              <HoverCardContent className="p-2 w-[150px]">
                <div className="flex flex-col gap-1">
                  <a
                    href="/about-us"
                    className=" px-2 py-1 hover:bg-gray-100 rounded"
                  >
                    About Us
                  </a>
                  <a
                    href="/contact-us"
                    className="px-2 py-1 hover:bg-gray-100 rounded"
                  >
                    Contact Us
                  </a>
                </div>
              </HoverCardContent>
            </HoverCard>

            {/* <Dropdown
              label={<p className="text-base uppercase">Resources</p>}
              dismissOnClick={false}
              inline
              className="!text-base !uppercase"
            >
              <Dropdown.Item>
                <a href="/about-us" className="text-base">
                  About Us
                </a>
              </Dropdown.Item>
              <Dropdown.Item>
                <a href="/" className="text-base">
                  Blog
                </a>
              </Dropdown.Item>
            </Dropdown> */}
            <a href="/contact-us" className="text-base">
              Contact Us 
            </a>
          </Navbar.Collapse>
          <div className="flex gap-2">
            <Navbar.Toggle onClick={() => setShow(!show)} />
            <div className="px-[40px] text-lg md:flex items-center hidden">
              {/* <SignUpPopup /> */}
              <ScheduleDemo />
              {/* <a
              href="/"
              className="mr-2 bg-gray-800 text-white px-4 py-1 font-bold  rounded-lg"
            >
              SCHEDULE DEMO
            </a> */}

              {!user ? (
                <>
                  {/* <a
                    href="/login"
                    className="text-primary font-semibold mr-4"
                  >
                    Login
                  </a>
                  <div className="bg-[#6C2BD9] h-5 w-[3px]" />
                  <a
                    href="/register"
                    className="text-primary font-semibold ml-4"
                  >
                    Register
                  </a> */}
                </>
              ) : (
                <Dropdown
                  label={`${user?.firstName} ${user?.lastName}`}
                  inline={true}
                  className="block"
                >
                  <Dropdown.Item>
                    <a
                      href="https://chrome.google.com/webstore/detail/sales-fuel-%E2%80%93-access-b2b-c/emdakjpcbpbkpjnpmddfjkhdlfoinola"
                      target="_blank"
                      className="useExtension"
                    >
                      Get Free Extension
                    </a>
                  </Dropdown.Item>
                  {/* <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item> */}
                  <Dropdown.Item onClick={() => logout()}>
                    Sign out
                  </Dropdown.Item>
                </Dropdown>
              )}
            </div>
          </div>
        </Navbar>
      </header>
      {show && <NavigationSidebar user={user} logout={logout} />}
    </>
  );
}
