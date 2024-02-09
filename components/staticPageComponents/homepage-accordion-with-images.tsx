"use client"
import DirectContactsEmployees from "@/assets/images/direct-contacts-employees.png";
import PersonalizedDashboard from "@/assets/images/personalized-dashboard.png";
import ReviewMarketTrends from "@/assets/images/review-market-trends.png";
import WideDataCoverageImage from "@/assets/images/wide-data-covereage.png";
import Image from "next/image";
import { useState } from "react";
import AccordionComponent from "./Accordion/accordion";
import styles from "@/app/(static)/page.module.css";

export default function HomepageAccordionWithImages() {
  const accordionData = [
    {
      title: "Authentic coverage on professional profiles of employees' emails and contact numbers ",
      content: `Cultivate your business relationship with free seamless connectivity on any verified contact numbers and email of companies’ employees to expand your business outreach in a universal Business arena`,
    },
    {
      title: "Extensive details on professional profile of company employees and their similar designation",
      content: `Foster the growth of your business with comprehensive information on companies’ employees with similar designations around the world from LinkedIn profile`,
    },
    {
      title: " Get access to any Business Prospects, find similar person with a similar designation ",
      content: `Be a market research specialist and identify the potential business prospects to expand the business in new markets with similar designations in various regions `,
    },
    {
      title: "Dominate the market by identifying Companies and similar Companies to Generate leads",
      content: `Leverage your business in high potential market by identifying leading companies and targeting similar companies to generate high-quality leads`,
    },
  ];

  const accordionImages = [
    WideDataCoverageImage,
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
        <Image style={{ marginTop: '10vh'}}
          className={styles["Image"]}
          src={accordionImages[activeIndex || 0] || ""}
          alt="top-image"
        />
        <br />
      </div>
    </div>
  );
}
