"use client";
import Accordion from "@/components/MobileViewComponents/Accordion/Accordion";
import GetExtensionInMail from "@/components/MobileViewComponents/GetExtensionMail/GetExtensionInMail";
import MultiTextHeader from "@/components/MobileViewComponents/MultiTextHeader/MultiTextHeader";
import SigninWithGoogle from "@/components/MobileViewComponents/SigninWithGoogle/SigninWithGoogle";
import SigninWithMicrosoft from "@/components/MobileViewComponents/SigninWithMicrosoft/SigninWithMicrosoft";
import styles from "./page.module.css";

const HomePageMobileview = () => {
  return (
    <div style={{ marginBottom: '5vh'}}>
      <MultiTextHeader
        titleBlack="BOOST YOUR BUSINESS REACH WITH "
        titleBlue="FREE SALES FUEL CHROME EXTENSION"
        description="Download free Sales Fuel Chrome Extension to access email and phone number of any people & companies from Verified LinkedIn networks across the world.
        Get Free Extension"
      />

      <div
        style={{
          margin: "auto",
          width: "fit-content",
          display: "grid",
          gridRowGap: "16px",
          marginTop: "30px",
        }}
      >
        {/* <GetExtensionInMail /> */}
        {/* <SigninWithGoogle />
        <SigninWithMicrosoft /> */}
      </div>
      <div style={{ padding: "0 24px" }}>
        <div>
          <div
            className="mobile_section_title black"
            style={{ marginTop: "60px", textAlign: "center" }}
          >
            A <span className="blue">Reputable</span> Space For All B2B Business
          </div>
        </div>
        <div>
          <div className={styles["MobileTitleWithBorder"]}>
            Sales
            <div className={styles["MobileBorder"]}></div>
          </div>
          <div className={styles["MobileTitleDesc"]}>
          Cultivate your business Relationship with seamless connectivity of verified contact numbers and emails of any companies and employees to expand your business outreach in a universal trade arena
          </div>
        </div>
        <div>
          <div className={styles["MobileTitleWithBorder"]}>
            Marketers
            <div className={styles["MobileBorder"]}></div>
          </div>
          <div className={styles["MobileTitleDesc"]}>
          Harness the power of comprehensive insights on key decision-making authorities from companies about their employees and their contact information with pinpoint market identification
          </div>
        </div>
        <div>
          <div className={styles["MobileTitleWithBorder"]}>
            Recruiters
            <div className={styles["MobileBorder"]}></div>
          </div>
          <div className={styles["MobileTitleDesc"]}>
          Talent acquisition agents also use our database to access contact details, emails, and companies' influential stakeholders for their hiring process
          </div>
        </div>
        <div className={styles["PointsContainer"]}>
          <div
            className="mobile_section_title blue"
            style={{ textAlign: "center", margin: "40px 0" }}
          >
            SalesFuel-{" "}
            <span className="black">The quick-win approach to Discover Answers</span>
          </div>
          <div>
            <Accordion
              items={[
                {
                  title: "Authentic coverage on professional profiles of employees' emails and contact numbers",
                  content:
                    "Cultivate your business relationship with free seamless connectivity on any verified contact numbers and email of companies’ employees to expand your business outreach in a universal Business arena",
                },
                {
                  title: "Extensive details on professional profile of company employees and their similar designation",
                  content:
                    "Foster the growth of your business with comprehensive information on companies’ employees with similar designations around the world from LinkedIn profile",
                },
                {
                  title: "Get access to any Business Prospects, find similar person with a similar designation",
                  content:
                    "Be a market research specialist and identify the potential business prospects to expand the business in new markets with similar designations in various regions",
                },
                {
                  title: "Dominate the market by identifying Companies and similar Companies to Generate leads",
                  content:
                    "Leverage your business in high potential market by identifying leading companies and targeting similar companies to generate high-quality leads",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageMobileview;
