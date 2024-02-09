"use client";
import BoostUp from "@/assets/images/BoostUp.svg";
import DemandSide from "@/assets/images/DemandSide.svg";
import TopImage from "@/assets/images/MagnetImg.png";
import ROIImage from "@/assets/images/ROIImage.svg";
import TickIcon from "@/assets/images/TickIcon.svg";
import useDeviceSize from "@/components/customHooks/useScreenSize";
import { withMeta } from "@/components/customHooks/withMeta";
import SocialSignUp from "@/components/social-signup";
import GreyFooterEmail from "@/components/staticPageComponents/GreyFooterEmail/GreyFooterEmail";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { isMobile } from "react-device-detect";
import SolutionsMarketersMobileView from "./mobileview/mobileview";
import styles from "./page.module.css";

const SolutionsMarketersPage = () => {
  const [isMobileView] = useDeviceSize();
  return isMobileView || isMobile ? (
    <SolutionsMarketersMobileView />
  ) : (
    <div className="root">
      <div className={styles["Container"]}>
        <div className={styles["Flex"]}>
          <div className={styles["HeadingText"]}>
            <h1 className={styles["MainHeading"]}>
              BUILD DATA-TO-ACTION STRATEGIES AND
              <span className={styles["HeadingTextBlue"]}> STEER</span> <br />
              YOUR BUSINESS TO SUCCESS
            </h1>
            <div className={styles["SubText4"]}>
              With Contact Data, get unprecedented insights into your digital
              media spending, customer journeys, and beyond.
            </div>
              <SocialSignUp title="Gather verified email addresses & phone numbers directly from LinkedIn" />
          </div>
          <div className={styles["ImageText"]}>
            <Image className={styles["Image"]} src={TopImage} alt="top-image" />
            <br />
          </div>
        </div>
      </div>
      <h2 className={styles["CenteredText"]}>
        Deliver efficient growth using
        <span className={styles["CenteredTextBlue"]}> essential data </span> and
        <span className={styles["CenteredTextBlue"]}> market insights</span>
      </h2>

      <div className={styles["SmallText"]}>
        Contact Data helps people see and understand data and transform the way
        they use data to solve problems.
        <br /> See why organizations of all sizes trust Contact Data to connect
        with the right prospects.
      </div>
      <div className={styles["ButtonPlaceholder"]}>
        <Link href="/register">
          <Button style={{ backgroundColor: "#3b5aff" }} pill={true}>
            <span style={{ fontSize: "1vw" }}>Get Extension</span>
          </Button>
        </Link>
      </div>

      <div className={styles["RoundedContainer"]}>
        <div className={styles["CardRounded"]}>
          <div>
            <h3 className={styles["CenteredText4"]}>
              <Image
                className={styles["ImageIcon"]}
                src={TickIcon}
                alt="top-image"
              />
              Build an Audience
            </h3>
            <p className={styles["CardText"]}>
              Access contact details of 3M+ companies across the globe and
              create a picture of your target market layered with consumer
              insights.
            </p>
          </div>
        </div>

        <div className={styles["CardRounded"]}>
          <div>
            <h3 className={styles["CenteredText4"]}>
              <Image
                className={styles["ImageIcon"]}
                src={TickIcon}
                alt="top-image"
              />
              Direct Connect
            </h3>
            <p className={styles["CardText"]}>
              Explore 65M+ direct dial numbers and 150M+ verified email
              addresses of employees, and key decision-makers and connect with
              the right prospects.
            </p>
          </div>
        </div>

        <div className={styles["CardRounded"]}>
          <div>
            <h3 className={styles["CenteredText4"]}>
              <Image
                className={styles["ImageIcon"]}
                src={TickIcon}
                alt="top-image"
              />{" "}
              Advanced Search
            </h3>
            <p className={styles["CardText"]}>
              Search company data by size, employee numbers, designation, and so
              on and get the most comprehensive and quality data.
            </p>
          </div>
        </div>
      </div>

      <div className={styles["Flex2"]}>
        <div className={styles["HeadingText3"]}>
          <div className={styles["Borderleft"]}>
            <h2 className={styles["CenteredText3"]}>
              Understand the &nbsp;
              <span className={styles["CenteredTextBlue4"]}>
                Buyer’s Journey
              </span>
            </h2>
            <div className={styles["SmallText2"]}>
              Access the most complete contact data including direct phone
              numbers and email addresses of employees & key decision-makers and
              understand the journey of buyers. These buyers consist of teams of
              people from different departments and with levels of seniority.
              With essential data, you will know who is involved in purchasing
              decisions and get a clear picture of your customers and prospects.
            </div>
          </div>
          <div className={styles["ButtonPlaceholder2"]}>
            <Link href="/register">
              <Button style={{ backgroundColor: "#3b5aff" }} pill={true}>
                <span style={{ fontSize: "1vw" }}>Get Extension</span>
              </Button>
            </Link>
          </div>
        </div>
        <div className={styles["ImageText"]}>
          <Image className={styles["Image"]} src={DemandSide} alt="top-image" />
          <br />
        </div>
      </div>
      <div className={styles["Flex2"]}>
        <div className={styles["ImageText3"]}>
          <Image className={styles["Image"]} src={BoostUp} alt="top-image" />
          <br />
        </div>
        <div className={styles["HeadingText3"]}>
          <div className={styles["Borderleft"]}>
            <h2 className={styles["CenteredText3"]}>
              Identify and Hit the
              <span className={styles["CenteredTextBlue"]}> Right Target </span>
            </h2>
            <div className={styles["SmallText2"]}>
              Explore contact data of organizations, and their employees to
              understand their business needs, and better identify your targets.
              Access direct dials and email addresses of key decision-makers of
              companies and connect with the right prospects to market your
              offerings.
            </div>
          </div>
          <div className={styles["ButtonPlaceholder2"]}>
            <Link href="/register">
              <Button style={{ backgroundColor: "#3b5aff" }} pill={true}>
                <span style={{ fontSize: "1vw" }}>Get Extension</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles["Flex2"]}>
        <div className={styles["HeadingText3"]}>
          <div className={styles["Borderleft"]}>
            <h2 className={styles["CenteredText3"]}>
              Unlock New
              <span className={styles["CenteredTextBlue"]}>
                {" "}
                Market Opportunities{" "}
              </span>
            </h2>
            <div className={styles["SmallText2"]}>
              Access crucial data of companies and their employees and evaluate
              their past deals to find trends you weren’t expecting. With a deep
              understanding of your customer’s journey and knowing types of
              prospects, uncover new market opportunities and crack the business
              deals successfully.
            </div>
          </div>
          <div className={styles["ButtonPlaceholder2"]}>
            <Link href="/register">
              <Button style={{ backgroundColor: "#3b5aff" }} pill={true}>
                <span style={{ fontSize: "1vw" }}>Get Extension</span>
              </Button>
            </Link>
          </div>
        </div>
        <div className={styles["ImageText"]}>
          <Image className={styles["Image"]} src={ROIImage} alt="top-image" />
          <br />
        </div>
      </div>

      <GreyFooterEmail
          mainTitle="B2C Lead Generation Made Easy"
          mainValue="Gather verified email addresses & phone numbers directly from LinkedIn"
      />
    </div>
  );
};

const SolutionsMarketersPageWithMeta = withMeta(
  SolutionsMarketersPage,
  "Contact Data for Marketers | Contacts for Marketing",
  "Get the most valuable contact data including direct phone numbers and email addresses of employees & key decision-makers and understand the journey of buyers."
);

export default SolutionsMarketersPageWithMeta;
