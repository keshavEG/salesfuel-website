"use client";
import useDeviceSize from "@/components/customHooks/useScreenSize";
import { withMeta } from "@/components/customHooks/withMeta";
import { isMobile } from "react-device-detect";
import ContactUsDesktopView from "./desktopview";
import ContactUsMobileView from "./mobileview/mobileview";

const ContactUsPage = () => {
  const [isMobileView] = useDeviceSize();

  return !(isMobileView || isMobile) ? (
    <div className="root">
      <ContactUsDesktopView />
    </div>
  ) : (
    <ContactUsMobileView />
  );
};

const ContactUsPageWithMeta = withMeta(
  ContactUsPage,
  "Contact Us | SalesFuel | B2B Contact Data | Chrome Extension",
  "We believe in supercharging clients with the B2B and B2C contact data. Access Sales Fuel extension for frequentl updated database of contacts."
);
export default ContactUsPageWithMeta;
