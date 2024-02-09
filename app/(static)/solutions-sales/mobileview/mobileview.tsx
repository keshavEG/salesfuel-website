import Accordion from "@/components/MobileViewComponents/Accordion/Accordion";
import Expandable from "@/components/MobileViewComponents/Expandable/Expandable";
import GetExtensionInMail from "@/components/MobileViewComponents/GetExtensionMail/GetExtensionInMail";
import MultiTextHeader from "@/components/MobileViewComponents/MultiTextHeader/MultiTextHeader";
import SigninWithGoogle from "@/components/MobileViewComponents/SigninWithGoogle/SigninWithGoogle";
import SigninWithMicrosoft from "@/components/MobileViewComponents/SigninWithMicrosoft/SigninWithMicrosoft";
import Image from "next/image";
import classes from "./mobileview.module.scss";
import SolutionsMarketersLogo from "./solutionsLogo.svg";

const SolutionsSalesMobileView = () => {
  return (
    <div>
      <MultiTextHeader
        titleBlack="ACCESS ESSENTIAL 
        DATA,"
        titleBlue="DEFINE 
        MARKETS, DISCOVER
        BUYERS."
        description="With the most valuable data, find 
        new markets, accelerate your 
        sales pipeline, and reach the revenue 
        potential you didn’t imagine."
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
            Find and Connect with
            <span className="blue"> Real Prospects</span>
          </div>
          <div
            className="mobile_section_subtitle"
            style={{ marginTop: "15px" }}
          >
            Determine, connect, and engage with the right prospects by accessing
            the contact data of companies including direct phone numbers & email
            addresses of their employees & key decision-makers.
          </div>
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Image src={SolutionsMarketersLogo} style={{ margin: "auto" }} alt="" />
      </div>
      <div className={classes["ViewMoreContainer"]}>
        <div className={classes["Points"]}>
          <Expandable
            items={[
              {
                title: <div className="black">Contact Data</div>,
                content: (
                  <div>
                    <div>
                      Access 70M+ direct phone numbers and 200M+ verified email
                      addresses of companies’ employees; identify and connect
                      with potential customers{" "}
                    </div>
                  </div>
                ),
              },
              {
                title: (
                  <div className="black">
                    Find Prospects <span className="blue"> </span>
                  </div>
                ),
                content: (
                  <div>
                    <div>
                      Track the business of global companies by accessing
                      crucial data with contact details of employees and find
                      and reach ideal prospects.{" "}
                    </div>
                  </div>
                ),
              },
              {
                title: (
                  <div className="black">Monitor Competitive Strategies</div>
                ),
                content: (
                  <div>
                    <div>
                      Keep a close eye on your competitor’s strategies to shape
                      your own sales strategy and improve your sales pitch.{" "}
                    </div>
                  </div>
                ),
              },
            ]}
          />
        </div>
      </div>
      <div style={{ padding: "0 24px" }}>
        <div className={classes["PointsContainer"]}>
          <>
            {
              <div className={classes["Points"]}>
                <Accordion
                  items={[
                    {
                      title: (
                        <div className="black">
                          Market <span className="blue"> Study</span>
                        </div>
                      ),
                      content: (
                        <div>
                          <div>
                            Identify, connect, and engage with your ideal
                            prospects, size your target market, expand your
                            reach, and more right through our trusted online
                            market intelligence platform.
                          </div>
                        </div>
                      ),
                    },
                    {
                      title: (
                        <div className="black">
                          Benchmarking <span className="blue"> </span>
                        </div>
                      ),
                      content: (
                        <div>
                          <div>
                            Access vital data and explore a detailed view of the
                            company’s business performance and compare it with
                            other players. Choose the right companies and hit
                            your sales target confidently.
                          </div>
                        </div>
                      ),
                    },
                    {
                      title: (
                        <div className="black">
                          Data-Driven <span className="blue"> Decisions</span>
                        </div>
                      ),
                      content: (
                        <div>
                          <div>
                            Make data-driven business decisions by accessing
                            company data with their contact details, and
                            selecting a smart strategy backed by the freshest
                            data, mitigating any uncertainty in your market.{" "}
                          </div>
                        </div>
                      ),
                    },
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

export default SolutionsSalesMobileView;
