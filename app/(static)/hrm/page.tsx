"use client";
import styles from "./page.module.css";

import TopImage from "@/assets/images/header-img.png";
import Image2 from "@/assets/images/img2.png";
import Image3 from "@/assets/images/img3.png";
import Image4 from "@/assets/images/img4.png";
import useDeviceSize from "@/components/customHooks/useScreenSize";
import { withMeta } from "@/components/customHooks/withMeta";
import SocialSignUp from "@/components/social-signup";
import GreyFooterEmail from "@/components/staticPageComponents/GreyFooterEmail/GreyFooterEmail";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { isMobile } from "react-device-detect";
import HrmPageMobileView from "./mobileview/mobileview";

// export const metadata = {
//   title: "Employees Contact Data for HRM | Sales Fuel Contact Data",
//   description:
//     "Find qualified employees contacts who are willing to fill open positions, as well as those who need qualified successors with a complete ATS life cycle including HR strategy, job & team design, recruitment, ",
// };

const HrmPage = () => {
  const [isMobileView] = useDeviceSize();

  return isMobileView || isMobile ? (
    <HrmPageMobileView />
  ) : (
    <div className="root">
      <div className={styles["Container"]}>
        <div className={styles["Flex"]}>
          <div className={styles["HeadingText"]}>
            <h1 className={`${styles["MainHeading"]} uppercase`}>
              Recruit, grow, and retain great talent
            </h1>
            <div className={styles["SubText4"]}>
              Using actionable analytics and internal and external data, our aim
              is to empower companies with our recruitment practices with a
              clear picture of their contemporary and future talent.
            </div>
              <SocialSignUp title="Gather verified email addresses & phone numbers directly from LinkedIn" />
          </div>
          <div className={styles["ImageText4"]}>
            <Image className={styles["Image"]} src={TopImage} alt="top-image" />
            <br />
          </div>
        </div>
      </div>
      <h2 className={styles["CenteredText"]}>
        Get Premium for
        <span className={styles["CenteredTextBlue"]}>
          free & search candidates
        </span>
        with no limits
      </h2>
      <div className={styles["SmallText"]}>
        An easy-to-use collection of data that require to add to chrome
        extension only. Free access to candidate’s full profile basic
        information to upgraded such as full name, contact numbers, email Id to
        qualifications, skills set, industry level, job experience,
        certifications if any and social media profile.
      </div>
      <div className={styles["ButtonPlaceholder"]}>
        <Button style={{ backgroundColor: "#3b5aff" }} pill={true}>
          <span style={{ fontSize: "1vw" }}>Get Extension</span>
        </Button>
      </div>

      <div className={styles["Flex3"]}>
        <div className={styles["Borderleft"]}>
          <h2 className={styles["CenteredText3"]}>
            Unfolding Opportunities for
            <span className={styles["CenteredTextBlue"]}> Talents </span>
          </h2>
          <div className={styles["GridTable"]}>
            <div className={styles["GridRowDashed"]}>
              {" "}
              <h3 className={styles["GridHeading"]}>
                Match your search with our Next-Gen AI Integration :{" "}
              </h3>
              <span className={styles["GridContent"]}>
                Shortlist more candidates with our integrated solution for small
                and medium businesses from which you can accelerate same
                designation profiles data to find the right employee for the
                right position for the particular company.
              </span>{" "}
            </div>
            <div className={styles["GridRowNormal"]}>
              {" "}
              <h3 className={styles["GridHeading"]}>
                Time and effort saving :{" "}
              </h3>
              <span className={styles["GridContent"]}>
                Stumble upon the appropriate candidate for effective manpower by
                saving time and effort.
              </span>{" "}
            </div>
            <div className={styles["GridRowDashed"]}>
              {" "}
              <h3 className={styles["GridHeading"]}>
                Obtain Workplace Communication Filters :{" "}
              </h3>
              <span className={styles["GridContent"]}>
                With this new perspective to work culture, you can filter the
                behaviours to avoid unwanted discussions such as politics, sex
                or religion.
              </span>{" "}
            </div>
            {/* <div className={styles["GridRowNormal"]}>
              {" "}
              <span className={styles["GridHeading"]}>
                Stronger & sustainable HRM practices :{" "}
              </span>
              <span className={styles["GridContent"]}>
                We are here to channel the data to fit in criteria to focus on
                screening, selecting, and framing the apt candidates.
              </span>{" "}
            </div> */}
          </div>
        </div>
        <div className={styles["ImageText5"]}>
          <Image className={styles["Image"]} src={Image2} alt="top-image" />
          <br />
        </div>
      </div>
      <h2 className={styles["CenteredText"]}>
        Monitor cost-effective talent
        <span className={styles["CenteredTextBlue"]}> pipeline </span>
      </h2>

      <div className={styles["SmallText"]}>
        Ensure your employer brand is visible online to attract and influence
        talent
      </div>
      <div className={styles["ButtonPlaceholder"]}>
        <Button style={{ backgroundColor: "#3b5aff" }} pill={true}>
          <span style={{ fontSize: "1vw" }}> Get Extension</span>
        </Button>
      </div>
      <div className={styles["Flex2"]}>
        <div className={styles["ImageText3"]}>
          <Image className={styles["Image3"]} src={Image3} alt="top-image" />
          <br />
        </div>

        <div className={styles["HeadingText3"]}>
          <div className={styles["Borderleft"]}>
            <div className={styles["GridTable2"]}>
              <div className={styles["GridRowDashed"]}>
                {" "}
                <h3 className={styles["GridHeading"]}>
                  Easy Onboarding <br />{" "}
                </h3>
                <span className={styles["GridContent"]}>
                  How about everything is only a few clicks away and making
                  onboarding easy for your innovative hires with email
                  personalization?
                </span>{" "}
              </div>
              <div className={styles["GridRowNormal"]}>
                <h3 className={styles["GridHeading"]}>
                  Data-Driven <br />{" "}
                </h3>
                <span className={styles["GridContent"]}>
                  5x more likely to be productive with the data-driven
                  implementation and easy access to key recruiting metrics.
                </span>{" "}
              </div>
              <div className={styles["GridRowDashed"]}>
                {" "}
                <h3 className={styles["GridHeading"]}>
                  Fill in the gap between employees & employers <br />
                </h3>
                <span className={styles["GridContent"]}>
                  How recruiters categorize and hire top talent by integrating
                  AI chatbots for the advanced approach. This makes the easy
                  hiring.
                </span>{" "}
              </div>
              <div className={styles["GridRowNormal"]}>
                {" "}
                <h3 className={styles["GridHeading"]}>
                  Boost Employee Act with Contemporary & Developed Management{" "}
                  <br />{" "}
                </h3>
                <span className={styles["GridContent"]}>
                  Rewarding and recognizing employees is becoming increasingly
                  important for organizations. With the Sales Fuel tracking
                  system, get faster joiners, and improve recruiter productivity
                  by removing manual work.
                </span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2 className={styles["CenteredText"]}>
        Talent
        <span className={styles["CenteredTextBlue"]}> intelligence</span>
        solutions
      </h2>

      <div className={styles["SmallText"]}>
        Using metrics of talent intelligence solutions during the Employee
        Lifecycle to know what progress your organization is making and whether
        your HRMS investment is worthwhile, you need to track metrics regardless
        of the size of your organization.
      </div>

      <div className={styles["Flex3"]}>
        <div className={styles["Borderleft"]}>
          <div className={styles["GridTable"]}>
            <div className={styles["GridRowDashed"]}>
              {" "}
              <h3 className={styles["GridHeading"]}>
                Use Sales Fuel HRM Features :{" "}
              </h3>
              <span className={styles["GridContent"]}>
                How our compiled candidate data sourcing is quite easy to
                consider, every business should be able to measure ROI even more
                easily with the powerful search to nominate. This does not
                require a vast amount of money to maintain.
              </span>{" "}
            </div>
            <div className={styles["GridRowNormal"]}>
              {" "}
              <h3 className={styles["GridHeading"]}>ATS Integration : </h3>
              <span className={styles["GridContent"]}>
                Find qualified employees who are willing to fill open positions,
                as well as those who need qualified successors with a complete
                ATS life cycle including business strategy, HR strategy,
                organizational design, job & team design, vision & culture,
                recruitment, training, and performance management.
              </span>{" "}
            </div>
            {/* <div className={styles["GridRowDashed"]}>
              {" "}
              <span className={styles["GridHeading"]}>Integrations: </span>
              <span className={styles["GridContent"]}>
                Get time back in your day using TalentS' ATS integrations.
                Export top candidates found in TalentS or across the web, and
                add them directly into your ATS or CRM.{" "}
              </span>{" "}
            </div> */}
          </div>
          <div className={styles["ButtonPlaceholder3"]}>
            <Button style={{ backgroundColor: "#3b5aff" }} pill={true}>
              <span style={{ fontSize: "1vw" }}> Get Extension</span>
            </Button>
          </div>
        </div>
        <br />

        <div className={styles["ImageText4"]}>
          <Image className={styles["Image"]} src={Image4} alt="top-image" />
          <br />
        </div>
      </div>

      <div className={styles["SmallText"]}>
        Why settle for less if you are served with advanced integration and a
        contrast of features and models.
      </div>

      <GreyFooterEmail
        mainTitle="Get Access To A Wide Contact Database"
          mainValue="Gather verified email addresses & phone numbers directly from LinkedIn"
      />
    </div>
  );
};

const HrmPageWithMeta = withMeta(
  HrmPage,
  "Employees Contact Data for HRM | Sales Fuel Contact Data",
  "Find qualified employees contacts who are willing to fill open positions, as well as those who need qualified successors with a complete ATS life cycle including HR strategy, job & team design, recruitment."
);


export default HrmPageWithMeta;
