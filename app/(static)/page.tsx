"use client";
import useDeviceSize from "@/components/customHooks/useScreenSize";
import { withMeta } from "@/components/customHooks/withMeta";
import HeroAnimation from "@/components/hero-animation";
import SearchBar from "@/components/search/search-bar";
import SocialSignUp from "@/components/social-signup";
import GreyFooterEmail from "@/components/staticPageComponents/GreyFooterEmail/GreyFooterEmail";
import HomepageAccordionWithImages from "@/components/staticPageComponents/homepage-accordion-with-images";
import { TitleDesc } from "@/components/staticPageComponents/TitleDesc/TitleDesc";
import { Button } from "flowbite-react";
import { isMobile } from "react-device-detect";
import HomePageMobileview from "./page.mobileview";
import styles from "./page.module.css";

const HomePage = () => {
  const [isMobileView] = useDeviceSize();
  if (isMobileView || isMobile) return <HomePageMobileview />;
  return (
    <div className="root">
      <div className={styles["Container"]}>
        <div className={styles["Flex"]}>
          <div className={styles["ImageText"]}>
            <HeroAnimation muted />
            {/* <Image
              className={styles["Image"]}
              src={HeroImage}
              alt="hero-image"
            /> */}
            <br />
          </div>
          <div className={styles["HeadingText"]}>
            <h1 className={styles["MainHeading"]}>
              {/* CONNECT WITH */}
              BOOST YOUR BUSINESS REACH WITH  
              <br />{" "}
              <span
                style={{ fontWeight: "600", fontSize: "4.1vh" }}
                className={styles["HeadingTextBlue"]}
              >
                FREE SALES FUEL CHROME EXTENSION
              </span>
            </h1>
            <div className={styles["SubText"]}>
              Download free Sales Fuel Chrome Extension to access email and
              phone number of any people & companies from Verified LinkedIn
              networks across the world.
            </div>
            <div style={{ display: "flex", alignItems: 'center', justifyContent: "space-among" }}>
              <div style={{ marginRight: '2vw', marginTop: '5vh'}}>
                <a
                  href="https://www.youtube.com/watch?feature=shared&v=_GTyeDiM4Qo"
                  target="_blank"
                  title="How it works"
                >
                  <Button style={{backgroundColor: 'white', color: '#6C2BD9', borderRadius: '20px', borderColor: '#6C2BD9', width: '10vw'}}>How it works</Button>
                </a>
              </div>

              <div>
                <SocialSignUp />
              </div>
              {/* {!user && <SocialSignUp />} */}
            </div>
          </div>
        </div>

        <div>
          {/* <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#6618E4",
            }}
            className="p-10"
          >
            <h1 style={{ fontSize: "2vw", color: "white" }}>
              Find Companies, Industries and Contacts
            </h1>
            <p style={{ color: "white" }}>
            Search emails and phone numbers of any contacts and companies from LinkedIn
            </p>
            <div className="p-6">
              <form style={{ display: "inline-flex" }}>
                <div className="mr-1">
                  <TextInput
                    style={{ borderRadius: "1px", width: "20vw" }}
                    id="email"
                    placeholder="Search Location..."
                  />
                </div>
                <div>
                  <TextInput
                    style={{ borderRadius: "1px", width: "25vw" }}
                    id="email"
                    placeholder="Search Location..."
                  />
                </div>
                <button
                  style={{
                    backgroundColor: "#3b3b3b",
                    width: "6vw",
                    color: "white",
                  }}
                >
                  Search
                </button>
              </form>
            </div>
          </div> */}

          <SearchBar />
        </div>

        {/* <div className="mt-8">
          <SocialSignUp title="Gather verified email addresses & phone numbers directly from LinkedIn" />
        </div> */}

        <div className="mt-12">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            className="p-10"
          >
            <h1
              style={{ fontSize: "2vw", color: "#5b5b5b", fontWeight: "600" }}
            >
              Worldwide Data Inclusion
            </h1>
            <p style={{ color: "#5b5b5b" }}>
              Get comprehensive access to extensive information globally for
              strategic business decisions and unparalleled market understanding
              with pinpoint market identification of -
            </p>
            <div style={{ display: "flex" }} className="p-6">
              <div
                style={{
                  borderWidth: "2px",
                  paddingLeft: "80px",
                  paddingRight: "80px",
                  paddingBottom: "10px",
                  paddingTop: "10px",
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <h1
                  style={{
                    fontSize: "2vw",
                    fontWeight: "600",
                    color: "#3b5aff",
                  }}
                >
                  200M+
                </h1>{" "}
                <p style={{ color: "#5b5b5b" }}>Employees</p>
              </div>
              <div
                style={{
                  borderWidth: "2px",
                  paddingLeft: "80px",
                  paddingRight: "80px",
                  paddingBottom: "10px",
                  paddingTop: "10px",
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <h1
                  style={{
                    fontSize: "2vw",
                    fontWeight: "600",
                    color: "#3b5aff",
                  }}
                >
                  150M+
                </h1>{" "}
                <p style={{ color: "#5b5b5b" }}>Professional Emails </p>
              </div>
              <div
                style={{
                  borderWidth: "2px",
                  paddingLeft: "80px",
                  paddingRight: "80px",
                  paddingBottom: "10px",
                  paddingTop: "10px",
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <h1
                  style={{
                    fontSize: "2vw",
                    fontWeight: "600",
                    color: "#3b5aff",
                  }}
                >
                  44M+
                </h1>{" "}
                <p style={{ color: "#5b5b5b" }}>Companies </p>
              </div>
              <div
                style={{
                  borderWidth: "2px",
                  paddingLeft: "80px",
                  paddingRight: "80px",
                  paddingBottom: "10px",
                  paddingTop: "10px",
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <h1
                  style={{
                    fontSize: "2vw",
                    fontWeight: "600",
                    color: "#3b5aff",
                  }}
                >
                  9M+
                </h1>{" "}
                <p style={{ color: "#5b5b5b" }}>Phone Number </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles["GreyHeader"]}>
          <h2 className={styles["CenteredText"]}>
            A<span className={styles["CenteredTextBlue"]}> Reputable</span>{" "}
            Space For All B2B Business
          </h2>
          <div
            style={{ display: "flex", justifyContent: "center" }}
            className={styles["TitleDescContainer"]}
          >
            <div>
              <TitleDesc
                title="SALES"
                description="Cultivate your business Relationship with seamless connectivity of verified contact numbers and emails of any companies and employees to expand your business outreach in a universal trade arena"
              />
            </div>
            <div>
              <TitleDesc
                title="MARKETERS"
                description="Harness the power of comprehensive insights on key decision-making authorities from companies about their employees and their contact information with pinpoint market identification"
              />
            </div>
            <div>
              <TitleDesc
                title="RECRUITERS"
                description="Talent acquisition agents also use our database to access contact details, emails, and companies' influential stakeholders for their hiring process  "
              />
            </div>
          </div>
        </div>
        <div className={styles["Container"]}>
          <h2 className={styles["CenteredText"]}>
            <span className={styles["CenteredTextBlue"]}>SalesFuel</span> – The
            quick-win approach to Discover Answers
          </h2>
          <div className={styles["SmallText"]}>
            Strategic business connectivity to the world helps you to excel in
            performance
          </div>
          <HomepageAccordionWithImages />
        </div>

        <div>
          <GreyFooterEmail
            mainTitle="Find Anyone's Email and Contact Number from Linkedin "
            mainValue="Stretch out your business prospect through accessing email and phone number of any contacts from LinkedIn Network"
          />
        </div>
      </div>
    </div>
  );
};

const HomePageWithMeta = withMeta(
  HomePage,
  "Company Contacts | B2B Contact Database | SalesFuel",
  "Access company contacts and B2B database through our sales intelligence and engagement platform. Search and engage with over 10 million company and employee contacts with SalesFuel."
);

export default HomePageWithMeta;
