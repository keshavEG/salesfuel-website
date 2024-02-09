"use client";
import styles from "./page.module.css";

import GetExtension from "@/assets/images/GetExtension.png";
import InteractionImg from "@/assets/images/InteractionImg.png";
import TopImage from "@/assets/images/peopleGroupImg.png";
import RoadPeople from "@/assets/images/RoadPeople.png";
import VelocityIcon from "@/assets/images/VelocityIcon.png";
import useDeviceSize from "@/components/customHooks/useScreenSize";
import { withMeta } from "@/components/customHooks/withMeta";
import GreyFooterEmail from "@/components/staticPageComponents/GreyFooterEmail/GreyFooterEmail";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { isMobile } from "react-device-detect";
import SolutionsSalesMobileView from "./mobileview/mobileview";
import SocialSignUp from "@/components/social-signup";

const SolutionsSalesPage = () => {
  const [isMobileView] = useDeviceSize();
  return isMobileView || isMobile ? (
    <SolutionsSalesMobileView />
  ) : (
    <div className="root">
      <div className={styles["Container"]}>
        <div className={styles["Flex"]}>
          <div className={styles["HeadingText"]}>
            <h1 className={styles["MainHeading"]}>
              ACCESS{" "}
              <span className={styles["HeadingTextBlue"]}>
                {" "}
                ESSENTIAL DATA.
              </span>
              <br />
              DEFINE{" "}
              <span className={styles["HeadingTextBlue"]}> MARKETS.</span>
              <br />
              DISCOVER{" "}
              <span className={styles["HeadingTextBlue"]}> BUYERS.</span>
            </h1>
            <div className={styles["SubText"]}>
              With the most valuable data, find new markets, accelerate your
              sales pipeline, and reach the revenue potential you didn’t
              imagine.
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

        <h2 className={styles["CenteredText"]}>
          Find and Connect with
          <span className={styles["CenteredTextBlue"]}> Real Prospects </span>
        </h2>
        <div className={styles["SmallText"]}>
          Determine, connect, and engage with the right prospects by accessing
          the contact data of companies including <br /> direct phone numbers &
          email addresses of their employees & key decision-makers.
        </div>
        <div className={styles["Flex"]}>
          <div className={styles["ImageText"]}>
            <Image
              className={styles["Image2"]}
              src={RoadPeople}
              alt="top-image"
            />
            <br />
          </div>
          <div className={styles["HeadingText4"]}>
            <div className={styles["Borderleft"]}>
              <div className={styles["HighlightLeft"]}>
                <h3 className={styles["SubText3"]}>Contact Data</h3>
                <div className={styles["SmallText2"]}>
                  Access 70M+ direct phone numbers and 200M+ verified email
                  addresses of companies’ employees; identify and connect with
                  potential customers
                </div>
              </div>
              <div className={styles["HighlightLeft"]}>
                <h3 className={styles["SubText3"]}>Find Prospects</h3>

                <div className={styles["SmallText2"]}>
                  Track the business of global companies by accessing crucial
                  data with contact details of employees and find and reach
                  ideal prospects.
                </div>
              </div>
              <div className={styles["HighlightLeft"]}>
                <h3 className={styles["SubText3"]}>
                  Monitor Competitive Strategies
                </h3>
                <div className={styles["SmallText2"]}>
                  Keep a close eye on your competitor’s strategies to shape your
                  own sales strategy and improve your sales pitch.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["Flex"]}>
          <div className={styles["HeadingText3"]}>
            <div className={styles["Borderleft"]}>
              <h2 className={styles["CenteredText3"]}>Market Study</h2>
              <div className={styles["SmallText2"]}>
                Identify, connect, and engage with your ideal prospects, size
                your target market, expand your reach, and more right through
                our trusted online market intelligence platform.
              </div>
            </div>
            <div className={styles["ButtonPlaceholder"]}>
              <Link href="/register">
                <Button color="purple" pill={true}>
                  <span style={{ fontSize: "1vw" }}>Get Extension</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className={styles["ImageTextRight"]}>
            <Image
              className={styles["Image3"]}
              src={InteractionImg}
              alt="top-image"
            />
            <br />
          </div>
        </div>
        <div className={styles["Flex"]}>
          <div className={styles["ImageText"]}>
            <a
              href="https://chrome.google.com/webstore/detail/sales-fuel-%E2%80%93-access-b2b-c/emdakjpcbpbkpjnpmddfjkhdlfoinola/related?hl=en&authuser=4"
              target="_blank"
            >
              <Image
                className={styles["Image"]}
                src={GetExtension}
                alt="top-image"
              />
            </a>
            <br />
          </div>
          <div className={styles["HeadingText3"]}>
            <div className={styles["Borderleft"]}>
              <h2 className={styles["CenteredText3"]}>Benchmarking</h2>

              <div className={styles["SmallText2"]}>
                Access vital data and explore a detailed view of the company’s
                business performance and compare it with other players. Choose
                the right companies and hit your sales target confidently.
              </div>
            </div>
          </div>
        </div>
        <div className={styles["Flex"]}>
          <div className={styles["HeadingText3"]}>
            <div className={styles["Borderleft"]}>
              <h2 className={styles["CenteredText3"]}>Data-driven Decisions</h2>
              <div className={styles["SmallText2"]}>
                Make data-driven business decisions by accessing company data
                with their contact details, and selecting a smart strategy
                backed by the freshest data, mitigating any uncertainty in your
                market. <br />
              </div>
            </div>
            <div className={styles["ButtonPlaceholder"]}>
              <Link href="/register">
                <Button color="purple" pill={true}>
                  <span style={{ fontSize: "1vw" }}>Get Extension</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className={styles["ImageText2"]}>
            <Image
              className={styles["Image2"]}
              src={VelocityIcon}
              alt="top-image"
            />
            <br />
          </div>
        </div>
      </div>
      <GreyFooterEmail
        mainTitle="Amplify Your Game With SalesFuel Extension"
          mainValue="Gather verified email addresses & phone numbers directly from LinkedIn"
      />
    </div>
  );
};

const SolutionsSalesPageWithMeta = withMeta(
  SolutionsSalesPage,
  "Company Contacts for Sales Team | B2B Contact Information",
  "Find and engage with the right prospects by accessing the contact data of companies including direct phone numbers & email addresses of their employees & key decision-makers."
);

export default SolutionsSalesPageWithMeta;
