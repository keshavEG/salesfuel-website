import GetExtensionInMail from "@/components/MobileViewComponents/GetExtensionMail/GetExtensionInMail";
import MultiTextHeader from "@/components/MobileViewComponents/MultiTextHeader/MultiTextHeader";
import SigninWithGoogle from "@/components/MobileViewComponents/SigninWithGoogle/SigninWithGoogle";
import SigninWithMicrosoft from "@/components/MobileViewComponents/SigninWithMicrosoft/SigninWithMicrosoft";
import Image from "next/image";
import HrmLogo from "../../../../assets/mobileview/hrmLogo.svg";
import classes from "./mobileview.module.scss";

const HrmPageMobileView = () => {
  return (
    <div>
      <MultiTextHeader
        titleBlack="RECRUIT,  GROW,&nbsp;AND"
        titleBlue=" RETAIN GREAT TALENT"
        description="Using actionable analytics and internal and external data, our aim is to empower companies with our recruitment practices with a clear picture of their contemporary and future talent."
      />
      <div style={{ marginTop: "-20px", marginBottom: "20px" }}>
        <Image src={HrmLogo} alt="" />
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
      <div style={{ padding: "0 24px" }}>
        <div>
          <div
            className="mobile_section_title black"
            style={{ marginTop: "60px" }}
          >
            Get Premium for free &{" "}
            <span className="blue">search candidates with no limits</span>
          </div>
          <div
            className="mobile_section_subtitle"
            style={{ marginTop: "15px" }}
          >
            An easy-to-use collection of data that require to add to chrome
            extension only. Free access to candidate’s full profile basic
            information to upgraded such as full name, contact numbers, email Id
            to qualifications, skills set, industry level, job experience,
            certifications if any and social media profile.
          </div>
        </div>
      </div>
      <div style={{ padding: "0 25px" }} className={classes["BottomContainer"]}>
        <div className="mobile_section_title blue">
          Unfolding Opportunities for Talents
          <div className="mobile_section_subtitle" style={{ margin: "10px 0" }}>
            Search company data by size, employee numbers, designation, and so
            on and get the most comprehensive and quality data.
          </div>
        </div>

        <div className="mobile_section_title blue">
          Monitor cost-effective talent pipeline
          <div className="mobile_section_subtitle" style={{ margin: "10px 0" }}>
            Ensure your employer brand is visible online to attract and
            influence talent
          </div>
        </div>

        <div className="mobile_section_title blue">
          Talent intelligence solutions
          <div className="mobile_section_subtitle" style={{ margin: "10px 0" }}>
            Using metrics of talent intelligence solutions during the Employee
            Lifecycle to know what progress your organization is making and
            whether your HRMS investment is worthwhile, you need to track
            metrics regardless of the size of your organization.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HrmPageMobileView;
