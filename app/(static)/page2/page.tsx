"use client"
import useDeviceSize from "@/components/customHooks/useScreenSize";
import HeroAnimation from "@/components/hero-animation";
import SocialSignUp from "@/components/social-signup";
import GreyFooterEmail from "@/components/staticPageComponents/GreyFooterEmail/GreyFooterEmail";
import { TitleDesc } from "@/components/staticPageComponents/TitleDesc/TitleDesc";
import { TextInput } from "flowbite-react";
import { isMobile } from "react-device-detect";
import HomePageMobileview from "../page.mobileview";
import styles from "../page.module.css";
import HomepageAccordionWithImagesCopy from "@/components/staticPageComponents/homepage-accordion-with-images-copy";
import SearchBar from "@/components/search/search-bar";


const FirstPage = () => {
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
              ESTABLISH CONNECTION WITH
              <span>
                {" "}
                <h2
                  style={{ fontWeight: "600" }}
                  className={styles["HeadingTextBlue"]}
                >
                  B2B EXCELLENCE 
                </h2>
              </span>
            </h1>
            <div className={styles["SubText"]}>
            Stretch out your business to next-gen advancement with 24/7 contact access to businesses across the world
            </div>
            <div className={styles["HeadingSocialIcon"]}>
              <SocialSignUp />
              {/* {!user && <SocialSignUp />} */}
            </div>
          </div>
        </div>

        <div>
          <SearchBar />
        </div>

        {/* <div className="mt-8">
          <SocialSignUp title="Gather verified email addresses & phone numbers directly from LinkedIn" />
        </div> */}

        

        <div className={styles["GreyHeader"]}>
          <h2 className={styles["CenteredText"]}>
            An<span className={styles["CenteredTextBlue"]}> authentic hub</span>{" "}
            for All Global Business
          </h2>
          <div
            style={{ display: "flex", justifyContent: "center" }}
            className={styles["TitleDescContainer"]}
          >
            <div>
              <TitleDesc
                title="SALES"
                description="Build networks in wide-reaching platforms with authentic emails and contact numbers of companies & employees to explore the unexplored market potential"
              />
            </div>
            <div>
              <TitleDesc
                title="MARKETERS"
                description="Discover in-depth knowledge on the targeted market selection of top executive influencers of the companies, their contact details and Emails"
              />
            </div>
            <div>
              <TitleDesc
                title="RECRUITERS"
                description="Pioneer Recruiting agency also uses our instant research database to access personal information like Emails and Contact information for their recruiting process."
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
          <HomepageAccordionWithImagesCopy />
        </div>

        <div className="mt-12">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            className="p-10"
          >
            <div>
            <h1
              style={{ fontSize: "2vw", color: "#5b5b5b", fontWeight: "600" }}
            >
              Worldwide data inclusion
            </h1>
            <p style={{ color: "#5b5b5b" }}>
            Get comprehensive access to extensive information globally for strategic business decisions and unparalleled market understanding with pinpoint market identification of -
            </p>
            </div>
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
                <p style={{ color: "#5b5b5b" }}>Emails</p>
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
                <p style={{ color: "#5b5b5b" }}>Companies</p>
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
                <p style={{ color: "#5b5b5b" }}>Phone no</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <GreyFooterEmail
            mainTitle="Maximise Your Market and Business prospects with SalesFuel "
            mainValue="Build a repository of verified emails, contact numbers and the company’s key influencers from LinkedIn"
          />
        </div>
      </div>
    </div>
  );
}
export default FirstPage;