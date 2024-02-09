import Accordion from "@/components/MobileViewComponents/Accordion/Accordion";
import GetExtensionInMail from "@/components/MobileViewComponents/GetExtensionMail/GetExtensionInMail";
import MultiTextHeader from "@/components/MobileViewComponents/MultiTextHeader/MultiTextHeader";
import SigninWithGoogle from "@/components/MobileViewComponents/SigninWithGoogle/SigninWithGoogle";
import SigninWithMicrosoft from "@/components/MobileViewComponents/SigninWithMicrosoft/SigninWithMicrosoft";
import Image from "next/image";
import AboutUsLogo from "./AboutUsLogo.svg";
import classes from "./mobileview.module.scss";

const AboutUsMobileView = () => {
  return (
    <div>
      <MultiTextHeader
        titleBlack="TO EMPOWER"
        titleBlue=" YOUR BUSINESS"
        description="We strive to advance the 
        professionalism to convey their 
        value through accurate databases."
      />
      <div style={{ marginTop: "-20px", marginBottom: "20px" }}>
        <Image src={AboutUsLogo} alt="" />
      </div>
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

      <div className={classes["Points"]}>
        <Accordion
          items={[
            {
              title: (
                <div className="black">
                  What is <span className="blue"> Sales Fuel?</span>
                </div>
              ),
              content: (
                <div>
                  <div>
                    Sales Fuel is designed to become a global professional
                    catalyst through our multidimensional service offerings,
                    which combine market expertise, superior data, and
                    proprietary technology.
                  </div>
                  <div style={{ marginTop: "10px" }}>
                    We believe in supercharging clients with the B2B and B2C
                    data in varied segments such as IT, telecom, ITES,
                    manufacturing, Saas, electronics and electrical industries
                    for altering their businesses by boosting sales. Also,
                    helping out Market Leaders, Recruiters, Corporates,
                    Financial Advisors as per their market size and its growth
                    rate analysis.
                  </div>
                </div>
              ),
            },

            {
              title: (
                <div className="black">
                  Your Reliance on us is
                  <span className="blue"> Our Responsibility</span>
                </div>
              ),
              content: (
                <div>
                  <div>
                    We have a wide range of offerings in terms of finding HRM
                    potential candidates and skills of B2B & B2C prospects and
                    their accurate contact details. A prospecting platform, web
                    extension data of not only of highest quantity but also
                    quality in depth. Sales Fuel make it possible for sales pros
                    to identify, engage, and close prospects.
                  </div>
                  <div style={{ marginTop: "10px" }}>
                    We stand out amongst our competitors in terms of accuracy,
                    compliance and successfully providing the best user
                    experience.
                  </div>
                </div>
              ),
            },

            {
              title: (
                <div className="black">
                  How do <span className="blue"> We Work</span>
                </div>
              ),
              content: (
                <div>
                  <div>
                    Utilising the business leads database via compiling accurate
                    firmographic, technographic, contact, and intent data
                    relevant as per industries requirement. We provide accurate
                    contact information by filtering leads as per designation,
                    revenue, sectors, location, or any other criteria.
                  </div><br />
                  <div>
                    Better discover decision makers,narrow prospects, and initate an email campaign using powerful data tools.Enabling data-driven marketing teams to target the right audience with the right audience with the right messaging and minimise the gap between marketing and sales.

                  </div>
                </div>
              ),
            },

            {
              title: (
                <div className="black">
                  How are we <span className="blue"> different</span> from other
                  database provider companies?
                </div>
              ),
              content: (
                <div>
                  <ul style={{ listStyleType: "circle" }}>
                    <li>Access to the free contact database to some extent.</li>
                    <li>
                      Leverage our highly precise and verified B2B & B2C data to produce conversion-worthy leads quickly.

                    </li>
                    <li>
                      Boost your ROI by understanding which contacts to occupy now with AI approvals.
                    </li>
                    <li>
                      Power up your sales outreach with a segmented technographic database.
                    </li>
                  </ul>
                </div>
              ),
            },

            {
              title: (
                <div className="black">
                  What does it serve to
                  <span className="blue"> Different Industries?</span>
                </div>
              ),
              content: (
                <div>
                  <ul style={{ listStyleType: "circle" }}>
                    <li>Marketing
                      <div style={{ marginLeft: '2vw' }}>With our strong and offbeat database marketing industries can quickly increase brand awareness, networking and sales with varied nature campaigns.</div>

                    </li>
                    <li>HRM
                      <div style={{ marginLeft: '2vw' }}>
                        We minimise the effort in storing the information about staff, managers and more with detailed information.
                      </div>
                    </li>
                    <li>Potential Leads
                      <div style={{ marginLeft: '2vw' }}>
                        Contact database provision strengthen the leads and make the conversion faster like never before in salesforce.<br />
                        Are you all set to dominate the market?
                      </div>
                    </li>
                  </ul>
                </div>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
};

export default AboutUsMobileView;
