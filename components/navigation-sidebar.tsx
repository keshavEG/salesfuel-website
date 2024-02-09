import { Button,Sidebar } from "flowbite-react";
import ScheduleDemo from "./schedule-demo";

export default function NavigationSidebar({ user, logout }: any) {
  return (
    <div className="bg-black/40 w-full h-full fixed top-0 left-0 z-10">
      <Sidebar
        aria-label="Sidebar with multi-level dropdown example"
        className="fixed right-0 z-20 border-l bg-white mt-16"
      >
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            {/* <Sidebar.Item href="/">Home</Sidebar.Item> */}
            <Sidebar.Item href="/extension">Platform</Sidebar.Item>
            <Sidebar.Item href="/search">Search</Sidebar.Item>
            <Sidebar.Collapse label="Solutions">
              <Sidebar.Item href="/solutions-sales">Sales</Sidebar.Item>
              <Sidebar.Item href="/solutions-marketers">Marketers</Sidebar.Item>
              <Sidebar.Item href="/hrm">HRM</Sidebar.Item>
            </Sidebar.Collapse>
            <Sidebar.Collapse label="Resources">
              <Sidebar.Item href="/about-us">About Us</Sidebar.Item>
              {/* <Sidebar.Item href="/">Blog</Sidebar.Item> */}
            </Sidebar.Collapse>
            <Sidebar.Item href="/contact-us">Contact Us</Sidebar.Item>
            {user ? <Sidebar.Item onClick={logout}>Logout</Sidebar.Item> : ""}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
        <div className="mt-4">
          <ScheduleDemo />
          {!user && (
            <>
              <Button
                className="!bg-primary w-full uppercase mt-2"
                outline
                size="sm"
                href="/login"
              >
                Login
              </Button>
              <Button
                className="!bg-primary w-full uppercase mt-2"
                outline
                size="sm"
                href="/register"
              >
                Register
              </Button>
            </>
          )}
        </div>
      </Sidebar>
    </div>
  );
}
