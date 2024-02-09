"use client"
import DirectContactsEmployees from "@/assets/images/direct-contacts-employees.png";
import PersonalizedDashboard from "@/assets/images/personalized-dashboard.png";
import ReviewMarketTrends from "@/assets/images/review-market-trends.png";
import DirectChannelConnection from "@/assets/images/direct-channel-connection.png";
import Image from "next/image";
import { useState } from "react";
import AccordionComponent from "./Accordion/accordion";
import styles from "@/app/(static)/page.module.css";

export default function HomepageAccordionWithImagesCopy() {
  const accordionData = [
    {
      title: "Direct channel connection of companies’ employees",
      content: `Access the most complete data of companies including their contact details and identify and engage with the right business partners.`,
    },
    {
      title: "Authentic coverage of employees' emails and contact numbers",
      content: `Get direct contacts including phone numbers and email addresses of employees including key decision makers of organizations.`,
    },
    {
      title: " Extensive details of company employees and similar designation",
      content: `Explore multiple filters to find the exact data that you want to hit your target and find new business opportunities.`,
    },
    {
      title: "360 Data Command Centre",
      content: `Stretch out business with targeted lead acquisition`,
    },
  ];

  const accordionImages = [
    DirectChannelConnection,
    DirectContactsEmployees,
    ReviewMarketTrends,
    PersonalizedDashboard,
  ];
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className={styles["Flex"]}>
      <div className={styles["HeadingText3"]}>
        <AccordionComponent
          accordionData={accordionData}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </div>
      <div className={styles["ImageText"]}>
        <Image
          className={styles["Image"]}
          src={accordionImages[activeIndex || 0] || ""}
          alt="top-image"
        />
        <br />
      </div>
    </div>
  );
}
