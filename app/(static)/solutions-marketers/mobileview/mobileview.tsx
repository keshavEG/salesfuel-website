import GetExtensionInMail from "@/components/MobileViewComponents/GetExtensionMail/GetExtensionInMail";
import MultiTextHeader from "@/components/MobileViewComponents/MultiTextHeader/MultiTextHeader";
import SigninWithGoogle from "@/components/MobileViewComponents/SigninWithGoogle/SigninWithGoogle";
import SigninWithMicrosoft from "@/components/MobileViewComponents/SigninWithMicrosoft/SigninWithMicrosoft";
import Image from "next/image";
import ArrowIcon from "../../../../assets/mobileview/arrow.svg";
import classes from "./mobileview.module.scss";
import SolutionsMarketersLogo from "./solutionsLogo.svg";
import Accordion from "@/components/MobileViewComponents/Accordion/Accordion";

const SolutionsMarketersMobileView = () => {
  return (
    <div>
      <MultiTextHeader
        titleBlack="BUILD DATA-TO-ACTION STRATEGIES AND"
        titleBlue="STEER YOUR BUSINESS TO SUCCESS"
        description="With Contact Data, get unprecedented insights into your digital media spending, customer journeys, and beyond."
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

        <SigninWithGoogle />
        <SigninWithMicrosoft />
      </div>
      <div style={{ padding: "0 24px" }}>
        <div>
          <div
            className="mobile_section_title black"
            style={{ marginTop: "60px" }}
          >
            Deliver efficient growth using
            <span className="blue"> Essential data and market insights</span>
          </div>
          <div
            className="mobile_section_subtitle"
            style={{ marginTop: "15px" }}
          >
            Contact Data helps people see and understand data and transform the
            way they use data to solve problems.See why organizations of all
            sizes trust Contact Data to connect with the right prospects. <br />
            <span style={{ textDecoration: "underline" }}>Get Extension</span>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Image src={SolutionsMarketersLogo} alt="" />
      </div>
      <div style={{ padding: "0 24px" }}>
        <div>
          <div className={classes["MobileTitleWithBorder"]}>
            <div>Build an Audience</div>
            <div className={classes["MobileBorder"]}></div>
          </div>
          <div className={classes["MobileTitleDesc"]}>
            Access contact details of 3M+ companies across the globe and create
            a picture of your target market layered with consumer insights
          </div>
        </div>
        <div>
          <div className={classes["MobileTitleWithBorder"]}>
            <div>Direct Connect</div>
            <div className={classes["MobileBorder"]}></div>
          </div>
          <div className={classes["MobileTitleDesc"]}>
            Explore 65M+ direct dial numbers and 150M+ verified email addresses
            of employees, and key decision-makers and connect with the right
            prospects.
          </div>
        </div>
        <div>
          <div className={classes["MobileTitleWithBorder"]}>
            <div>Advanced Search</div>
            <div className={classes["MobileBorder"]}></div>
          </div>
          <div className={classes["MobileTitleDesc"]}>
            Search company data by size, employee numbers, designation, and so
            on and get the most comprehensive and quality data.
          </div>
        </div>

        <div className={classes["PointsContainer"]}>
          <>
            {
              <div className={classes["Points"]}>
                <Accordion
                  items={[
                    {
                      title: (
                        <div className="black">
                          Understand the <span className="blue"> Buyer's Journey</span>
                        </div>
                      ),
                      content: (
                        <div>
                          <div>
                            Access the most complete contact data including direct phone numbers and email addresses of employees & key decision-makers and understand the journey of buyers. These buyers consist of teams of people from different departments and with levels of seniority. With essential data, you will know who is involved in purchasing decisions and get a clear picture of your customers and prospects.                          </div>

                        </div>
                      ),
                    },
                    {
                      title: (
                        <div className="black">
                          Identify and hit the <span className="blue"> Right Target</span>
                        </div>
                      ),
                      content: (
                        <div>
                          <div>
                            Explore contact data of organizations, and their employees to understand their business needs, and better identify your targets. Access direct dials and email addresses of key decision-makers of companies and connect with the right prospects to market your offerings.                          </div>

                        </div>
                      ),
                    },
                    {
                      title: (
                        <div className="black">
                          Unlock new <span className="blue"> Market Opportunities</span>
                        </div>
                      ),
                      content: (
                        <div>
                          <div>
                            Access crucial data of companies and their employees and evaluate their past deals to find trends you weren’t expecting. With a deep understanding of your customer’s journey and knowing types of prospects, uncover new market opportunities and crack the business deals successfully.                                             </div>

                        </div>
                      ),
                    }
                  ]}
                />
              </div>
            }
          </>
        </div>
      </div>
    </div>
  );
};

export default SolutionsMarketersMobileView;
