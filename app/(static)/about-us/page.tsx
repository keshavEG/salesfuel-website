"use client";
import ConnectivityImage from "@/assets/images/ConnectivityImg.png";
import TopImage from "@/assets/images/empowerBusinessTitle.png";
import GoogleImage from "@/assets/images/GoogleImage.png";
import RelianceImg from "@/assets/images/RelianceImg.png";
import SalesFuel from "@/assets/images/SalesFuel.png";
import useDeviceSize from "@/components/customHooks/useScreenSize";
import { withMeta } from "@/components/customHooks/withMeta";
import SocialSignUp from "@/components/social-signup";
import GreyFooterEmail from "@/components/staticPageComponents/GreyFooterEmail/GreyFooterEmail";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { isMobile } from "react-device-detect";
import AboutUsMobileView from "./mobileview/mobileview";
import styles from "./page.module.css";

const AboutUsPage = () => {
  const [isMobileView] = useDeviceSize();
  return isMobileView || isMobile ? (
    <AboutUsMobileView />
  ) : (
    <div className="root">
      <div className={styles["Container"]}>
        <div className={styles["Flex"]}>
          <div className={styles["HeadingText"]}>
            <h1 className={styles["MainHeading"]}>
              TO EMPOWER
              <span className={styles["HeadingTextBlue"]}> YOUR BUSINESS</span>
            </h1>
            <div className={styles["SubText"]}>
              We strive to advance the professionalism to convey their value
              through accurate databases.
            </div>
            <div className="mt-8">
              <SocialSignUp title="Gather verified email addresses & phone numbers directly from LinkedIn" />
            </div>
          </div>
          <div className={styles["ImageText"]}>
            <Image
              className={styles["Image2"]}
              src={TopImage}
              alt="top-image"
            />
            <br />
          </div>
        </div>

        <div className={styles["Flex"]}>
          <div className={styles["HeadingText3"]}>
            <div className={styles["Borderleft"]}>
              <h2 className={styles["CenteredText3"]}>
                What is
                <span className={styles["CenteredTextBlue"]}>
                  Sales Fuel?
                </span>{" "}
              </h2>
              <div className={styles["SmallText2"]}>
                Sales Fuel is designed to become a global professional catalyst
                through our multidimensional service offerings, which combine
                market expertise, superior data, and proprietary technology.
                <br />
                <br />
                We believe in supercharging clients with the B2B and B2C data in
                varied segments such as IT, telecom, ITES, manufacturing, Saas,
                electronics and electrical industries for altering their
                businesses by boosting sales. Also, helping out Market Leaders,
                Recruiters, Corporates, Financial Advisors as per their market
                size and its growth rate analysis.
              </div>
            </div>
            <div className={styles["ButtonPlaceholder"]}>
              <Link href="/register">
                <Button style={{ backgroundColor: "#3b5aff" }} pill={true}>
                  <span style={{ fontSize: "1vw" }}>Get Extension</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className={styles["ImageTextRight"]}>
            <Image
              className={styles["Image3"]}
              src={SalesFuel}
              alt="top-image"
            />
            <br />
          </div>
        </div>
        <div className={styles["Flex"]}>
          <div className={styles["ImageText"]}>
            <Image
              className={styles["Image"]}
              src={RelianceImg}
              alt="top-image"
            />
            <br />
          </div>
          <div className={styles["HeadingText3"]}>
            <div className={styles["Borderleft"]}>
              <h2 className={styles["CenteredText3"]}>
                Your Reliance on us is
                <span className={styles["CenteredTextBlue2"]}>
                  our responsibility{" "}
                </span>
              </h2>
              <div className={styles["SmallText2"]}>
                We have a wide range of offerings in terms of finding HRM
                potential candidates and skills of B2B & B2C prospects and their
                accurate contact details. A prospecting platform, web extension
                data of not only of highest quantity but also quality in depth.
                Sales Fuel make it possible for sales pros to identify, engage,
                and close prospects.
              </div>
              <div className={styles["SmallText2"]}>
                We stand out amongst our competitors in terms of accuracy,
                compliance and successfully providing the best user experience.{" "}
              </div>
            </div>
          </div>
        </div>
        <div className={styles["Container"]}>
          <div>
            <h2 className={styles["CenteredText3"]}>
              How do
              <span className={styles["CenteredTextBlue"]}>we work? </span>{" "}
            </h2>
            <div className={`${styles["SmallTextFull"]} mt-4`}>
              Utilising the business leads database via compiling accurate
              firmographic, technographic, contact, and intent data relevant as
              per industries requirement. We provide accurate contact
              information by filtering leads as per designation, revenue,
              sectors, location, or any other criteria.
            </div>
            <div className={styles["SmallTextFull"]}>
              Better discover decision makers,narrow prospects, and initate an
              email campaign using powerful data tools.Enabling data-driven
              marketing teams to target the right audience with the right
              audience with the right messaging and minimise the gap between
              marketing and sales.
            </div>
            <div className={styles["MainCard"]}>
              <div className={styles["SmallTextMain"]}>
                <h3 className={styles["Smallheading"]}>Get Real Time Leads</h3>
                <ul
                  style={{
                    lineHeight: "1.5vw",
                    marginBottom: "25px",
                    fontSize: 16,
                    color: "#373636",
                    fontWeight: 300,
                  }}
                >
                  Obtain access to a frequently updated database of
                  contacts.Identify the nature of departments and it's role and
                  position
                </ul>
                <h3 className={styles["Smallheading"]}>
                  Find out who makes the decision
                </h3>
                <ul
                  style={{
                    lineHeight: "1.5vw",
                    marginBottom: "25px",
                    fontSize: 16,
                    color: "#373636",
                    fontWeight: 300,
                  }}
                >
                  Accelerates the sales cycle with better time management to
                  make the progression simpler and faster.{" "}
                </ul>
                <h3 className={styles["Smallheading"]}>
                  Determine what criteria to use for shortlisting leads
                </h3>
                <ul
                  style={{
                    lineHeight: "1.5vw",
                    marginBottom: "25px",
                    fontSize: 16,
                    color: "#373636",
                    fontWeight: 300,
                  }}
                >
                  With the largest private market intelligence provider,know the
                  market,your competitors and your opportunities for the
                  advanced level leads.{" "}
                </ul>
                <div className={styles["ButtonPlaceholder"]}>
                  <Link href="/register">
                    <Button style={{ backgroundColor: "#3b5aff" }} pill={true}>
                      <span style={{ fontSize: "1vw" }}>Get Extension</span>
                    </Button>
                  </Link>
                </div>
              </div>
              <div className={styles["RightContentMain"]}>
                <Image
                  className={styles["Image4"]}
                  src={ConnectivityImage}
                  alt="top-image"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles["Container"]}>
            <h2 className={styles["CenteredText3"]}>
              How are we
              <span className={styles["CenteredTextBlue"]}>different</span>
              from other database provider companies?
            </h2>
            <div className={styles["MainCard"]}>
              <div className={styles["SmallText3"]}>
                <div>
                  <ul
                    style={{ color: "#373636" }}
                    className="space-y-2 list-disc ml-4 text-base"
                  >
                    <li>Access to the free contact database to some extent.</li>
                    <li>
                      Leverage our highly precise and verified B2B & B2C data to
                      produce conversion-worthy leads quickly.
                    </li>
                    <li>
                      Boost your ROI by understanding which contacts to occupy
                      now with AI approvals.
                    </li>
                    <li>
                      Power up your sales outreach with a segmented
                      technographic database.
                    </li>
                  </ul>
                </div>
                <h2 className={styles["SubHeading"]}>Benefits</h2>
                <ul
                  style={{ color: "#373636" }}
                  className="space-y-2 list-disc ml-4 text-base"
                >
                  <li>Empowered with colossal private market intelligence</li>
                  <li>
                    Loyal and pre-qualified leads for higher prospects of sales.
                  </li>
                  <li>
                    Contribute more with your existing manual integration CRMs.
                  </li>
                  <li>
                    Customizable plans and packages for the relevant sales
                    organizations.
                  </li>
                </ul>
              </div>
              <div className={styles["RightContent"]}>
                <Image
                  className={styles["Image4"]}
                  src={GoogleImage}
                  alt="top-image"
                />
              </div>
            </div>
          </div>
        </div>
        <h2 className={styles["CenteredText"]}>
          What does it serve to
          <span className={styles["CenteredTextBlue"]}>
            {" "}
            different industries?{" "}
          </span>
        </h2>
        <div className={styles["RoundedContainer"]}>
          <div className={styles["CardRounded"]}>
            <div>
              <h3 className={styles["CenteredText4"]}>Marketing</h3>
              <p className={styles["CardText"]}>
                With our strong and offbeat database marketing industries can
                quickly increase brand awareness,networking and sales with
                varied nature campaigns.
              </p>
            </div>
          </div>
          <div className={styles["CardRounded"]}>
            <div>
              <h3 className={styles["CenteredText4"]}>HRM</h3>
              <p className={styles["CardText"]}>
                We minimise the effort in storing the information about
                staff,managers and more with detailed information.
              </p>
            </div>
          </div>
          <div className={styles["CardRounded"]}>
            <div>
              <h3 className={styles["CenteredText4"]}>Potential Leads</h3>
              <p className={styles["CardText"]}>
                Contact database provision strengthen the leads and make the
                conversion faster like never before in salesforce.
                <br />
                Are you all set to dominate the market?
              </p>
            </div>
          </div>
        </div>
      </div>
      <GreyFooterEmail
        mainTitle="Ready To Explore Our Contact Database?"
        mainValue="Gather verified email addresses & phone numbers directly from LinkedIn" />
    </div>
  );
};

const AboutUsPageWithMeta = withMeta(
  AboutUsPage,
  "Sales Fuel Contact Database | Sales Intelligence Platform",
  "SalesFuel believe in supercharging clients with the B2B and B2C data in varied segments such as IT, telecom, ITES, manufacturing, SaaS, electronics and electrical industries for altering their businesses by boosting sales."
);

export default AboutUsPageWithMeta;
