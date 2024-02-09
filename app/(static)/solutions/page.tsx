import styles from "./page.module.css";

import Component1 from "@/assets/images/Component1.png";
import Component2 from "@/assets/images/Component2.png";
import Component3 from "@/assets/images/Component3.png";
import Component4 from "@/assets/images/Component4.png";
import DownArrow from "@/assets/images/Down.svg";
import PeopleChat from "@/assets/images/PeopleChat.png";
import TopImage from "@/assets/images/PeopleShare.png";
import UpArrow from "@/assets/images/Up.svg";
import MultipleUpArrows from "@/assets/images/UpArrows.svg";
import ZigzagArrow from "@/assets/images/ZigZagArrow.svg";
import SocialSignUp from "@/components/social-signup";
import GreyFooterEmail from "@/components/staticPageComponents/GreyFooterEmail/GreyFooterEmail";
import Image from "next/image";

export const metadata = {
  title: "Sales Fuel Solutions | Contact Database for Multiple Industries",
  description:
    "Get all solutions in one roof with sales fuel. Contact Data helps global businesses to find solutions and hit the numbers.",
};

const SolutionsPage = () => {
  return (
    <div>
      <div className={styles["Container"]}>
        <div className={styles["Flex"]}>
          <div className={styles["HeadingText"]}>
            <div className={styles["MainHeading"]}>
              BRING IN{" "}
              <span className={styles["HeadingTextBlue"]}> BUSINESS</span>
            </div>
            <div className={styles["MainHeading"]}>
              AND HIT YOUR SALES
              <span className={styles["HeadingTextBlue"]}> GOALS</span>
            </div>
            <div className={styles["SubText4"]}>
              Get all solutions in one roof with sales fuel
            </div>
            <SocialSignUp title="Gather verified email addresses & phone numbers directly from LinkedIn" />
          </div>
          <div className={styles["ImageText3"]}>
            <Image className={styles["Image"]} src={TopImage} alt="top-image" />
            <br />
          </div>
        </div>
      </div>

      <div className={styles["GreyHeader"]}>
        <div className={styles["CenteredTextGrey"]}>
          <span className={styles["CenteredTextBlue"]}> Sales</span> Experience
        </div>
        <div className={styles["Flex2"]}>
          <div className={styles["Card3"]}>
            <div>
              <Image
                className={styles["ArrowImg"]}
                src={DownArrow}
                alt="top-image"
              />
            </div>
            <div>
              <span className={styles["CenteredTextBlue3"]}>50%</span>
              <p className={styles["CardText"]}>Decrease in Research Time</p>
            </div>
          </div>

          <div className={styles["Card3"]}>
            <div>
              <Image
                className={styles["ArrowImg"]}
                src={UpArrow}
                alt="top-image"
              />
            </div>
            <div>
              <span className={styles["CenteredTextBlue3"]}>2X</span>
              <p className={styles["CardText"]}>Increase in Response rates</p>
            </div>
          </div>

          <div className={styles["Card3"]}>
            <div>
              <Image
                className={styles["ArrowImg"]}
                src={ZigzagArrow}
                alt="top-image"
              />
            </div>
            <div>
              <span className={styles["CenteredTextBlue3"]}>50%</span>
              <p className={styles["CardText"]}>More meetings booked</p>
            </div>
          </div>

          <div className={styles["Card3"]}>
            <div>
              <Image
                className={styles["ArrowImg"]}
                src={MultipleUpArrows}
                alt="top-image"
              />
            </div>
            <div>
              <span className={styles["CenteredTextBlue3"]}>2X</span>
              <p className={styles["CardText"]}>Increase in win rates</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["Container"]}>
        <div className={styles["Flex"]}>
          <div className={styles["HeadingText4"]}>
            <div className={styles["Borderleft"]}>
              <div className={styles["CenteredText4"]}>
                How to{" "}
                <span className={styles["CenteredTextBlue"]}> Start </span>{" "}
                Market
              </div>
              <div className={styles["SmallText2"]}>
                Get the right way to create your market <br /> and your leads
                with sales fuel
              </div>
            </div>
          </div>
          <div className={styles["ImageText2"]}>
            <Image
              className={styles["Image2"]}
              src={PeopleChat}
              alt="top-image"
            />
            <br />
          </div>
        </div>
        <div className={styles["Flex"]}>
          <div className={styles["ImageText"]}>
            <Image
              className={styles["FirstImage"]}
              src={Component1}
              alt="top-image"
            />
            <br />
          </div>
          <div className={styles["HeadingText3"]}>
            <div className={styles["RightContainer"]}>
              <div className={styles["CenteredText3"]}>
                Recruiters and Founders
              </div>
              <div>
                <div className={styles["CenteredTextBlue2"]}>
                  {" "}
                  LinkedIn San Fransisco, California
                </div>
              </div>
              <div className={styles["SmallText2"]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
                scelerisque viverra mauris in aliquam sem. Eget egestas purus
                viverra accumsan in nisl. Id faucibus nisl tincidunt eget.
              </div>
              <Image
                className={styles["SecondImage"]}
                src={Component2}
                alt="top-image"
              />
              <Image
                className={styles["ThirdImage"]}
                src={Component3}
                alt="top-image"
              />
              <Image
                className={styles["ForthImage"]}
                src={Component4}
                alt="top-image"
              />
            </div>
          </div>
        </div>
      </div>
      <GreyFooterEmail mainTitle="Essential Sales Intelligence In One Place" mainValue="Gather verified email addresses & phone numbers directly from LinkedIn" />
    </div>
  );
};

export default SolutionsPage;
