"use client";
import List from "@/assets/images/List.svg";
import Organization from "@/assets/images/Organization.svg";
import Person from "@/assets/images/Person.svg";
import CompanyInsightImage from "@/assets/images/platform/company-insight.png";
import DataRefresh from "@/assets/images/platform/data-refresh.png";
import HeaderImage from "@/assets/images/platform/header.png";
import SimilarProfileImage from "@/assets/images/platform/similar-profile.png";
import SkillSet from "@/assets/images/platform/skill-set.png";
import TryNowImage from "@/assets/images/platform/try-now.png";
import TickIcon from "@/assets/images/Tick.png";
import useDeviceSize from "@/components/customHooks/useScreenSize";
import { withMeta } from "@/components/customHooks/withMeta";
import HeroAnimation from "@/components/hero-animation";
import SocialSignUp from "@/components/social-signup";
import GreyFooterEmail from "@/components/staticPageComponents/GreyFooterEmail/GreyFooterEmail";
import Image from "next/image";
import { isMobile } from "react-device-detect";
import ExtensionPageMobileView from "./mobileview/mobileview";
import styles from "./page.module.css";

const ExtensionPage = () => {
  const [isMobileView] = useDeviceSize();
  return isMobileView || isMobile ? (
    <ExtensionPageMobileView />
  ) : (
    <>
      <div className="root">
        <div className={styles["Container"]}>
          <div className={styles["Flex"]}>
            <div className={styles["HeadingText"]}>
              <h1 className={styles["MainHeading"]}>
                YOUR TOP{" "}
                <span className={styles["HeadingTextBlue"]}> LEADS</span>
                <br /> ARE WAITING
              </h1>
              <div className={styles["SubText4"]}>
                Sell more and close more with the most accurate <br />
                company and contact data.
              </div>
              <SocialSignUp />
            </div>
            <HeroAnimation />
            {/* <div className={styles["ImageText"]}>
              <Image
                className={styles["Image"]}
                src={HeaderImage}
                alt="top-image"
              />
              <br />
            </div> */}
          </div>
        </div>
        <hr className={styles["LineLeft"]} />
        <div className={styles["Flex2"]}>
          <div className={styles["HeadingText3"]}>
            <div className={styles["StackContainer"]}>
              <div className={styles["StackBox"]}>
                <div className={styles["RightLine"]}>
                  <Image
                    className={styles["TickImage"]}
                    src={TickIcon}
                    alt="top-image"
                  />
                </div>
                <div style={{ display: "grid" }}>
                  <div className={styles["StackTitle"]}>
                    <h3>Start for free</h3>
                  </div>
                  <div className={styles["StackSubTitle"]}>
                    10X your revenue with Sales Fuel
                  </div>
                </div>
              </div>
              <div className={styles["StackBoxBottom"]}>
                <h3 className={styles["StackTitle"]}>
                  Expanded Extension Companies
                </h3>
                <div className={styles["StackSubTitle"]}>
                  More than 3 million companies with Sales Fuel
                </div>
              </div>
              <div className={styles["StackBoxBottom"]}>
                <h3 className={styles["StackTitle"]}>
                  Expanded Chrome Extension
                </h3>
                <div className={styles["StackSubTitle"]}>
                  Easily can expand extension
                </div>
              </div>
            </div>
          </div>
          <div className={styles["ImageText"]}>
            <Image
              className={styles["Image2"]}
              src={TryNowImage}
              alt="top-image"
            />
            <br />
          </div>
        </div>
        <hr className={styles["LineRight"]} />
        <div className={styles["Flex2"]}>
          <div className={styles["ImageText3"]}>
            <Image
              className={styles["Image2"]}
              src={CompanyInsightImage}
              alt="top-image"
            />
            <br />
          </div>
          <div className={styles["HeadingText3"]}>
            <div className={styles["Borderleft"]}>
              <h2 className={styles["CenteredText3"]}>
                <div className={styles["SpaceRight"]}>Company </div>
                <span className={styles["CenteredTextBlue"]}> Insights </span>
              </h2>
              <div className={styles["SmallText2"]}>
                Getting All Company Insights with Sales Fuel{" "}
              </div>
            </div>
          </div>
        </div>
        <hr className={styles["LineLeft"]} />
        <h2 className={styles["CenteredText"]}>
          <div className={styles["SpaceRight"]}>How to work </div>
          <span className={styles["CenteredTextBlue"]}> Sales Fuel </span>
        </h2>
        <div className={styles["Flex2"]}>
          <div className={styles["CardRounded"]}>
            <div>
              <Image
                className={styles["CardImage"]}
                src={Person}
                alt="top-image"
              />
            </div>
            <div>
              <h3 className={styles["CenteredText4"]}>PEOPLE</h3>

              <div className={styles["CardText"]}>
                Find people from everywhere <br />
                through sales fuel
              </div>
            </div>
          </div>

          <div className={styles["CardRounded"]}>
            <div>
              <Image
                className={styles["CardImage"]}
                src={Organization}
                alt="top-image"
              />
            </div>
            <div>
              <h3 className={styles["CenteredText4"]}>COMPANY</h3>
              <p className={styles["CardText"]}>
                Get complete detail of him <br />
                with similar profile.
              </p>
            </div>
          </div>

          <div className={styles["CardRounded"]}>
            <div>
              <Image
                className={styles["CardImage"]}
                src={List}
                alt="top-image"
              />
            </div>
            <div>
              <h3 className={styles["CenteredText4"]}>LIST</h3>
              <p className={styles["CardText"]}>
                Make your own list with <br />
                sales fuel
              </p>
            </div>
          </div>
        </div>

        <hr className={styles["LineRight"]} />

        <div className={styles["Flex2"]}>
          <div className={styles["ImageText3"]}>
            <Image className={styles["Image"]} src={SkillSet} alt="top-image" />
            <br />
          </div>
          <div className={styles["HeadingText3"]}>
            <div className={styles["Borderleft"]}>
              <h2 className={styles["CenteredText3"]}>
                <span className={styles["CenteredTextBlue"]}> Skill</span>Set
              </h2>
              <div className={styles["SmallText2"]}>
                You can see skill of Employee with
                sales fuel any time.{" "}
              </div>
            </div>
          </div>
        </div>
        <hr className={styles["LineLeft"]} />
        <div className={styles["Flex2"]}>
          <div className={styles["HeadingText3"]}>
            <div className={styles["Borderleft"]}>
              <h2 className={styles["CenteredText3"]}>
                <div className={styles["SpaceRight"]}>Similar</div>
                <span className={styles["CenteredTextBlue"]}>
                  {" "}
                  Designation{" "}
                </span>{" "}
                profile
              </h2>
              <div className={styles["SmallText2"]}>
                You can get all deal sevilar designation profile also <br />
                through our sales fuel services{" "}
              </div>
            </div>
          </div>
          <div className={styles["ImageText"]}>
            <Image
              className={styles["Image"]}
              src={SimilarProfileImage}
              alt="top-image"
            />
            <br />
          </div>
        </div>

        <hr className={styles["LineRight"]} />

        <div className={styles["Flex2"]}>
          <div className={styles["ImageText3"]}>
            <Image
              className={styles["Image"]}
              src={DataRefresh}
              alt="top-image"
            />
            <br />
          </div>
          <div className={styles["HeadingText3"]}>
            <div className={styles["Borderleft"]}>
              <h2 className={styles["CenteredText3"]}>
                <span className={styles["CenteredTextBlue"]}> Data </span>
                Refreshment
              </h2>
              <div className={styles["SmallText2"]}>
                You will get new data each time as our data refreshment <br />
                policy.which we done continuously. Our aim to give you best{" "}
                <br /> service as per your requirements.{" "}
              </div>
            </div>
          </div>
        </div>
        <GreyFooterEmail
          mainTitle="Access Wide Contact Database With Varied Information"
          mainValue="Gather verified email addresses & phone numbers directly from LinkedIn" />
      </div>
    </>
  );
};

const ExtensionPageWithMeta = withMeta(
  ExtensionPage,
  "Sales Intelligence and Engagement Platform | SalesFuel",
  "SalesFuel B2B contact data platform help to access high quality sales intelligence and engagement platform."
);

export default ExtensionPageWithMeta;
