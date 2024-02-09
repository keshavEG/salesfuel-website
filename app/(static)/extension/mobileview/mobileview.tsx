import Accordion from "@/components/MobileViewComponents/Accordion/Accordion";
import GetExtensionInMail from "@/components/MobileViewComponents/GetExtensionMail/GetExtensionInMail";
import MultiTextHeader from "@/components/MobileViewComponents/MultiTextHeader/MultiTextHeader";
import SigninWithGoogle from "@/components/MobileViewComponents/SigninWithGoogle/SigninWithGoogle";
import SigninWithMicrosoft from "@/components/MobileViewComponents/SigninWithMicrosoft/SigninWithMicrosoft";
import Image from "next/image";
import AboutUsLogo from "./AboutUsLogo.svg";
import classes from "./mobileview.module.scss";
import TickIcon from "./Tick.svg";

const ExtensionPageMobileView = () => {
  return (
    <div>
      <MultiTextHeader
        titleBlack="YOUR TOP"
        titleBlue=" LEADS ARE WAITING"
        description="Sell more and close more with 
        the most accurate company and
         contact data."
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

      <div className={classes["SecondarySection"]}>
        <div className={classes["SecondaryActiveContainer"]}>
          <div style={{ paddingRight: "10px" }}>
            <Image src={TickIcon} alt="" />
          </div>
          <div
            style={{
              borderLeft: "1px solid #C6C5C5",
              paddingLeft: "14px",
            }}
            className={classes["SecondaryContainer"]}
          >
            <div>Start for free</div>
            <div>10X your revenue with Sales Fuel</div>
          </div>
        </div>
        <div className={classes["SecondaryContainer"]}>
          <div>Expanded Extension Companies</div>
          <div>More than 30k companies with Sales Fuel</div>
        </div>
        <div className={classes["SecondaryContainer"]}>
          <div>Expanded Chrome Extension</div>
          <div>Easily can expand extension</div>
        </div>
      </div>

      <div style={{ marginTop: "60px", marginBottom: "20px" }}>
        <Image style={{ margin: "auto" }} src={AboutUsLogo} alt="" />
      </div>

      <div>
        <div className={classes["Points"]}>
          <Accordion
            items={[
              {
                title: (
                  <div className="black">
                    Company <span className="blue"> Insights</span>
                  </div>
                ),
                content: (
                  <div>
                    <div>Getting All Company Insights with Sales Fuel.</div>
                  </div>
                ),
              },
              {
                title: (
                  <div className="black">
                    Company Insights<span className="blue"> Sales Fuel</span>
                  </div>
                ),
                content: (
                  <div>
                    <div>Getting All Company Insights with Sales Fuel</div>
                  </div>
                ),
              },
              {
                title: (
                  <div className="black">
                    <span className="blue"> Skill </span> Set
                  </div>
                ),
                content: (
                  <div>
                    <div>
                      You can set skill of Employee with sales fuel any time
                    </div>
                  </div>
                ),
              },
              {
                title: (
                  <div className="black">
                    Similar <span className="blue"> Designation </span> Profile
                  </div>
                ),
                content: (
                  <div>
                    <div>
                      You can get all deal sevilar designation profile also
                      through our sales fuel services.
                    </div>
                  </div>
                ),
              },
              {
                title: (
                  <div className="black">
                    <span className="blue"> Data </span> Refreshment
                  </div>
                ),
                content: (
                  <div>
                    <div>
                      You will get new data each time as our data refreshment
                      policy.which we done continuously. Our aim to give you
                      best service as per your requirements.
                    </div>
                  </div>
                ),
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default ExtensionPageMobileView;
