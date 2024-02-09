"use client";

import { Company } from "@/global";
import { capitalize, formatPhoneNumber, getCompanyHqLocation, getCompanyLinkedInUrl, removeProtocol } from "@/lib/utils";
import ApartmentIcon from "@mui/icons-material/Apartment";
import FacebookIcon from "@mui/icons-material/Facebook";
import LanguageIcon from "@mui/icons-material/Language";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useMemo, useState } from "react";
import SocialIcon from "../icons/social-icon";
import LimitExceededPopup from "../limit-exceeded-popup";
import ViewButton from "../view-button";

interface ICompanyInfoProps {
  company: Company;
  user: boolean;
  isExtensionInstalled?: boolean;
}
export default function CompanyInfo({
  company,
  user = false,
  isExtensionInstalled
}: ICompanyInfoProps) {
  const location = useMemo(() => getCompanyHqLocation(company), [company]);


  const phoneNumber = useMemo(() => {
    let phone = "(***) ***-***";
    if (company?.phoneNumber) {
      const formattedPhone = formatPhoneNumber(company.phoneNumber)!
      // replace last 5 digits with *
      phone = formattedPhone.slice(0, formattedPhone.length - 5) + "*".repeat(5)
    }
    return phone

  }, [company?.phoneNumber, user, isExtensionInstalled]);

  const [showLimitPopup, setShowLimitPopup] = useState(false);

  const linkedInUrl = useMemo(() => getCompanyLinkedInUrl(company), [company]);

  const handlePhoneClick = () => {
    if (!isExtensionInstalled) {
      return setShowLimitPopup(true);
    }
    if (user && company.phoneNumber) {
      return window.open(`tel:${phoneNumber}`);
    }
    if (!company.phoneNumber) {
      window.location.href = linkedInUrl
    }
  };

  return (
    <div className="bg-[#F4F4F4] text-[#585757] font-light p-6 rounded-lg md:rounded-2xl mb-10 flex flex-col gap-6">
      {location && (
        <div className="text-xl grid md:grid-cols-[200px_1fr] gap-2">
          <span className="w-[180px] flex">
            <LocationOnIcon className="mr-2" />
            Headquarters
          </span>
          <div className="capitalize">
            {location?.city && <a className="text-color-4 hover:underline" href={`/search?query=&type=companies&location=${location?.city}&page=1`}>{`${location?.city}, `}</a>}
            {location?.state && <a className="text-color-4 hover:underline" href={`/search?query=&type=companies&location=${location?.state}&page=1`}>{`${location?.state}, `}</a>}
            {location?.country && <a className="text-color-4 hover:underline" href={`/search?query=&type=companies&location=${location?.country}&page=1`}>{`${location?.country}`}</a>}
          </div>
        </div>
      )}
      {phoneNumber && (
        <div className="text-xl grid md:grid-cols-[200px_1fr] gap-2">
          <span className="w-[180px] flex">
            <PhoneIcon className="mr-2" />
            Phone Number
          </span>
          <div className="flex justify-between flex-wrap gap-2">
            <span
              className="text-primary-purple-color ml-8 md:ml-0 cursor-pointer"
              onClick={handlePhoneClick}
            >
              {phoneNumber}
            </span>
            <ViewButton href={linkedInUrl} popup={isExtensionInstalled} message={`to access ${capitalize(company.name)}'s information`} >
              View Mobile Number
            </ViewButton>
          </div>
        </div>
      )}
      <LimitExceededPopup show={showLimitPopup} setShow={setShowLimitPopup} goBack={false} infoMessage={`to access ${capitalize(company.name)}'s information`} />
      {company.website && (
        <div className="text-xl grid md:grid-cols-[200px_1fr] gap-2">
          <span className="w-[180px] flex">
            <LanguageIcon className=" mr-2" />
            Website
          </span>
          <span className="text-primary-purple-color ml-8 md:ml-0">
            <a href={`//${removeProtocol(company.websiteUrl || company.website)}`} target="_blank">
              {company.website}
            </a>
          </span>
        </div>
      )}
      {(company.socialProfiles?.facebook ||
        company.socialProfiles?.twitter ||
        linkedInUrl) && (
          <div className="text-xl grid md:grid-cols-[200px_1fr] gap-2">
            <span className="w-[180px] inline-block">
              <SocialIcon className=" mr-2 inline" />
              Social Media
            </span>
            <span className="ml-8 md:ml-0">
              <span className="flex gap-2">
                {company.socialProfiles?.facebook && (
                  <a
                    target="_blank"
                    href={
                      company.socialProfiles?.facebook?.includes("http") ||
                        company.socialProfiles?.facebook?.includes("https")
                        ? company.socialProfiles?.facebook
                        : "https://" + company.socialProfiles?.facebook
                    }
                    className="h-[35px] w-[35px] rounded-full text-center"
                    style={{ border: "1px solid #6C6C6C" }}
                  >
                    <FacebookIcon />
                  </a>
                )}
                {company.socialProfiles?.twitter && (
                  <a
                    target="_blank"
                    href={
                      company.socialProfiles?.twitter?.includes("http") ||
                        company.socialProfiles?.twitter?.includes("https")
                        ? company.socialProfiles?.twitter
                        : "https://" + company.socialProfiles?.twitter
                    }
                    className="h-[35px] w-[35px] rounded-full text-center"
                    style={{ border: "1px solid #6C6C6C" }}
                  >
                    <TwitterIcon />
                  </a>
                )}
                {linkedInUrl && (
                  <a
                    target="_blank"
                    href={linkedInUrl}
                    className="h-[35px] w-[35px] rounded-full text-center"
                    style={{ border: "1px solid #6C6C6C" }}
                  >
                    <LinkedInIcon />
                  </a>
                )}
              </span>
            </span>
          </div>
        )}
      {company.industry && (
        <div className="text-xl grid md:grid-cols-[200px_1fr] gap-2">
          <span className="w-[180px] capitalize flex">
            <ApartmentIcon className=" mr-2" />
            Industry
          </span>
          <a
            href={`/search?query=${encodeURIComponent(company.industry)}&type=industries&location=&page=1`}
          >
            <span className="flex capitalize text-primary-purple-color ml-8 md:ml-0">
              {company.industry}
            </span>
          </a>
        </div>
      )}
    </div>
  );
}
