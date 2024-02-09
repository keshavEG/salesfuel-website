"use client";
import GreyFooterEmail from "@/components/staticPageComponents/GreyFooterEmail/GreyFooterEmail";
import SmallInputWithButton from "@/components/staticPageComponents/SmallInputWithButton/SmallInputWithButton";
import { Button } from "flowbite-react";
import Head from "next/head";
import Image from "next/image";
import ConnectivityImage from "@/assets/images/ConnectivityImg.png";
import TopImage from "@/assets/images/empowerBusinessTitle.png";
import GoogleImage from "@/assets/images/GoogleImage.png";
import RelianceImg from "@/assets/images/RelianceImg.png";
import SalesFuel from "@/assets/images/SalesFuel.png";
import styles from "./page.module.css";
const Index = () => {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta
          name="Sales Fuel Contact Database | Sales Intelligence Platform"
          content="SalesFuel believe in supercharging clients with the B2B and B2C data in varied segments such as IT, telecom, ITES, manufacturing, SaaS, electronics and electrical industries for altering their businesses by boosting sales."
        />
      </Head>
      <div className={styles["Container"]}>
        <div className={styles["Flex"]}>
          <div className={styles["HeadingText"]}>
            <div className={styles["MainHeading"]}>
              TO EMPOWER
              <span className={styles["HeadingTextBlue"]}> YOUR BUSINESS,</span>
            </div>
            <div className={styles["SubText"]}>
              We strive to advance the professionalism to convey their value
              through accurate databases.
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
              <div className={styles["CenteredText3"]}>
                What is
                <span className={styles["CenteredTextBlue"]}>
                  {" "}
                  Sales Fuel?
                </span>{" "}
              </div>
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
              <Button style={{ backgroundColor: "#3b5aff" }} pill={true}>
                <span style={{ fontSize: "1vw" }}>Get Extension</span>
              </Button>
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
          <div className={styles["ImageText2"]}>
            <Image
              className={styles["Image"]}
              src={RelianceImg}
              alt="top-image"
            />
            <br />
          </div>
          <div className={styles["HeadingText3"]}>
            <div className={styles["Borderleft"]}>
              <div className={styles["CenteredText3"]}>
                Your Reliance on us is
                <span className={styles["CenteredTextBlue2"]}>
                  {" "}
                  our responsibility{" "}
                </span>
              </div>
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
            <div className={styles["CenteredText3"]}>
              How do
              <span className={styles["CenteredTextBlue"]}>
                {" "}
                We work?{" "}
              </span>{" "}
            </div>
            <div className={styles["SmallTextFull"]}>
              Utilising the business leads database via compiling accurate
              firmographic, technographic, contact, and intent data relevant as
              per industries requirement. We provide accurate contact
              information by filtering leads as per designation, revenue,
              sectors, location, or any other criteria.{" "}
            </div>
            <div className={styles["SmallTextFull"]}>
              Better discover decision makers, narrow prospects, and initiate an
              email campaign using powerful data tools. Enabling data-driven
              marketing teams to target the right audience with the right
              messaging and minimise the gap between marketing and sales.{" "}
            </div>
            <div className={styles["MainCard"]}>
              <div className={styles["SmallTextMain"]}>
                <div className={styles["Smallheading"]}>
                  Get Real Time Leads
                </div>
                <ul
                  style={{
                    lineHeight: "1.5vw",
                    marginBottom: "0.5vw",
                    color: "#373636",
                  }}
                >
                  Obtain access to a frequently updated database of
                  contacts.Identify the nature of departments and it's role and
                  position
                </ul>
                <div className={styles["Smallheading"]}>
                  Find out who makes the decision
                </div>
                <ul
                  style={{
                    lineHeight: "1.5vw",
                    marginBottom: "0.5vw",
                    color: "#373636",
                  }}
                >
                  Accelerates the sales cycle with better time management to
                  make the progression simpler and faster.{" "}
                </ul>
                <div className={styles["Smallheading"]}>
                  Determine what criteria to use for shortlisting leads
                </div>
                <ul
                  style={{
                    lineHeight: "1.5vw",
                    marginBottom: "0.5vw",
                    color: "#373636",
                  }}
                >
                  With the largest private market intelligence provider,know
                  the market,your competitors and your opportunities for the
                  advanced-level leads.{" "}
                </ul>
                <div className={styles["ButtonPlaceholder"]}>
                  <Button style={{ backgroundColor: "#3b5aff" }} pill={true}>
                    <span style={{ fontSize: "1vw" }}>Get Extension</span>
                  </Button>
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
            <div className={styles["CenteredText3"]}>
              How are we
              <span className={styles["CenteredTextBlue"]}>
                {" "}
                different{" "}
              </span>{" "}
              from other database provider companies?
            </div>
            <div className={styles["MainCard"]}>
              <div className={styles["SmallText3"]}>
                <div>
                  <ul style={{ lineHeight: "1.5vw", color: "#373636" }}>
                    <li>
                      •Access to the free contact database to some extent.
                    </li>
                    <li>
                      •Leverage our highly precise and verified B2B & B2C data
                      to produce conversion-worthy leads quickly.
                    </li>
                    <li>
                      •Boost your ROI by understanding which contacts to occupy
                      now with AI approvals.
                    </li>
                    <li>
                      •Power up your sales outreach with a segmented
                      technographic database.
                    </li>
                  </ul>
                </div>
                <div className={styles["SubHeading"]}>Benefits</div>
                <ul style={{ lineHeight: "1.5vw", color: "#373636" }}>
                  <li>•Empowered with colossal private market intelligence</li>
                  <li>
                    •Loyal and pre-qualified leads for higher prospects of
                    sales.
                  </li>
                  <li>
                    •Contribute more with your existing manual integration CRMs.
                  </li>
                  <li>
                    •Customisable plans and packages for the relevant sales
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
        <div className={styles["CenteredText"]}>
          What does it serve to
          <span className={styles["CenteredTextBlue"]}>
            {" "}
            different industries?{" "}
          </span>
        </div>
        <div className={styles["RoundedContainer"]}>
          <div className={styles["CardRounded"]}>
            <div>
              <span className={styles["CenteredText4"]}>Marketing</span>
              <p className={styles["CardText"]}>
                With our strong and offbeat database marketing industries can
                quickly increase brand awareness,networking and sales with
                varied nature campaigns.
              </p>
            </div>
          </div>
          <div className={styles["CardRounded"]}>
            <div>
              <span className={styles["CenteredText4"]}>HRM</span>
              <p className={styles["CardText"]}>
                We minimise the effort in storing the information about
                staff,managers and more with detailed information.
              </p>
            </div>
          </div>
          <div className={styles["CardRounded"]}>
            <div>
              <span className={styles["CenteredText4"]}>Potential Leads</span>
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
        mainTitle="Start with Game-Changing Market Insights Today"
        mainValue="Book an appointment to get a demo of our online platform and learn how you can have the best use of data."
      />
    </div>
  );
};

export default Index;
