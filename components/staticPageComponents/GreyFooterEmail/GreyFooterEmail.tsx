"use client";
import Extension_icon from "@/assets/images/Extension_icon.png";
import { SessionProvider } from "next-auth/react";
import Image from "next/image";
import styles from "./GreyFooterEmail.module.css";
import SocialSignUp from "@/components/social-signup";

export default function GreyFooterEmail(props: {
  mainTitle?: string;
  mainValue?: string;
}) {
  return (
    <SessionProvider
      basePath="local/api/auth"
      refetchInterval={5 * 60}
      refetchOnWindowFocus={true}
    >
      <GreyFooterEmailElm
        mainTitle={props.mainTitle}
        mainValue={props.mainValue}
      />
    </SessionProvider>
  );
}

const GreyFooterEmailElm = (props: {
  mainTitle?: string;
  mainValue?: string;
}) => {
  return (
    <div className={styles["GreyHeader2"]}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: '25vh', marginLeft: "10vw", marginRight: '5vw', cursor: "pointer" }}>
          <a
            href="https://chromewebstore.google.com/detail/sales-fuel-%E2%80%93-access-b2b-c/emdakjpcbpbkpjnpmddfjkhdlfoinola"
            target="_blank"
          >
            <Image src={Extension_icon} />
            <SocialSignUp />
          </a>
        </div>
        <div
          style={{ marginRight: "10vw", marginTop: "3vh", width: '35vw' }}
        >
          {Object.keys(props).length === 0 ? (
            <div className={styles["CenteredText"]}>
              <span className={styles["CenteredTextBlue"]}> Crush</span> your
              sales number with Contact Data
            </div>
          ) : (
            <div>
            <h2 style={{ fontSize: '2.5vw', display: 'inline-block'}} className={styles["CenteredText"]}>
              {props.mainTitle}{" "}
              {/* <span style={{ color: "#6C2BD9", fontSize: '2vw', fontWeight: '800' }}> SalesFuel </span> */}
            </h2>
            </div>
          )}

          {/* {Object.keys(props).length === 0 ? (
            <div className={styles["SmallText"]}>
              Trade Intelligence Data Online Platform Export Genius delivers
              global trade data online beyond expectations to businesses from
              different industries and geographies.
            </div>
          ) : (
            <div style={{ marginTop: '3vh', textAlign: 'left'}} className={styles["SmallText"]}>{props.mainValue}</div>
          )} */}


        </div>

        
      </div>
    </div>
  );
};
