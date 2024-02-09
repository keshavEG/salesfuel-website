import { Company, Person } from "@/global";
import { fetcher } from "@/lib/server/utils";
import { getExtensionStatus } from "@/lib/session";
import { capitalizeSpecialCharacters, formatPhoneNumber, getAbsoluteURL, slugify } from "@/lib/utils";
import BuildingIcon from "../icons/building-icon";
import EmailIcon from "../icons/email-icon";
import LinkedInIcon from "../icons/linkedin-icon";
import LocationIcon from "../icons/location-icon";
import PhoneIcon from "../icons/phone-icon";
import Button from "../ui/Button";
import ViewButton from "../view-button";


const getCompany = async (slug: string) => {
  try {
    const data = await fetcher(getAbsoluteURL(`/api2/companies/${slug}`), {
      cache: "no-cache",
    });
    return data;

  } catch (error) {
    console.log(error)
    return false
  }
}

export default async function PersonInfo({ person, message }: { person: Person, message?: string }) {
  const isExtensionInstalled = await getExtensionStatus();
  const name = capitalizeSpecialCharacters(person.companies?.[0]?.companyName!)
  const companySlug = slugify(name) + "-" + person.companies?.[0]?.companyId;
  const viewCompanyUrl = `/companies/${companySlug}`;

  const company: Company = await getCompany(companySlug);
  const domain = company?.website || "********.com"


  const getPersonEmail = () => {
    const workEmail = person.emails?.find((email) => email?.type === "work")
    if (workEmail?.email) {
      const email = workEmail?.email
      const username = email?.split("@")[0] || person.firstName
      let sliceLength = username.length > 2 ? 2 : username.length
      sliceLength = username.length == 2 ? 1 : sliceLength
      // keep first 2 letters of username and replace the rest with *
      const maskedUsername = username?.slice(0, sliceLength) + "*".repeat(username.length - sliceLength)
      const emailDomain = email?.split("@")[1]
      return `${maskedUsername}@${emailDomain}`
    } else {
      return `******@${domain}`
    }
  }

  const getHqPhone = () => {
    let hqNumber = "(***) ***-***"
    if (company?.phoneNumber) {
      const formattedPhone = formatPhoneNumber(company.phoneNumber)!
      // replace last 5 digits with *
      hqNumber = formattedPhone.slice(0, formattedPhone.length - 5) + "*".repeat(5)
    }
    return hqNumber
  }

  const getPersonPhone = () => {
    let personNumber = "(***) ***-***"
    if (person?.mobileNumber) {
      const formattedPhone = formatPhoneNumber(person.mobileNumber)!
      // replace last 5 digits with *
      personNumber = formattedPhone.slice(0, formattedPhone.length - 5) + "*".repeat(5)
    }
    return personNumber
  }


  const location = person.location
  return (
    <div>
      <h2 className="text-xl text-gray-600 font-medium mb-8">
        Phone number and email
      </h2>
      <div className="grid lg:grid-cols-2 gap-4 text-xl font-normal text-gray-500">
        {/* Email */}
        <div className="grid md:grid-cols-[200px_1fr] text-sm items-center  text-left">
          <p className="font-medium flex items-center ">
            <EmailIcon className="mr-2 inline w-5" />
            Email
          </p>
          <div className="flex flex-wrap justify-between gap-2">
            <p className="text-primary-purple-color">
              {getPersonEmail()}
            </p>
            <ViewButton message={message} href={`//${person.socialProfiles.linkedin}`} popup={isExtensionInstalled} className="text-sm">
              View Email
            </ViewButton>
          </div>
        </div>

        {/* Company */}
        <div className="grid md:grid-cols-[200px_1fr] text-sm items-center">
          <p className="font-medium flex items-center ">
            <BuildingIcon className="mr-2 inline w-5" />
            Company
          </p>
          <p className="text-primary-purple-color capitalize">
            <a  {...(person.companies?.[0]?.companyId ? { href: viewCompanyUrl } : {})}>
              {person.companies?.[0]?.companyName}
            </a>
          </p>
        </div>

        {/* HQ Phone */}
        <div className="grid md:grid-cols-[200px_1fr] text-sm items-center">
          <p className="font-medium flex items-center ">
            <BuildingIcon className="mr-2 inline w-5" />
            HQ Phone
          </p>
          <div className="flex flex-wrap justify-between gap-2">
            <p className="text-primary-purple-color">
              {getHqPhone()}
            </p>

            <ViewButton message={message} href={`//${person.socialProfiles.linkedin}`} popup={isExtensionInstalled} className="text-sm" >
              View HQ Phone
            </ViewButton>
          </div>
        </div>

        {/* Address */}
        <div className="grid md:grid-cols-[200px_1fr] text-sm items-center">
          <p className="font-medium flex items-center ">
            <LocationIcon className="mr-2 inline w-5" />
            Address
          </p>
          <p>
            {location?.city && <a className="text-color-4 hover:underline" href={`/search?query=&type=people&location=${location?.city}&page=1`}>{`${location?.city}, `}</a>}
            {location?.state && <a className="text-color-4 hover:underline" href={`/search?query=&type=people&location=${location?.state}&page=1`}>{`${location?.state}, `}</a>}
            {location?.country && <a className="text-color-4 hover:underline" href={`/search?query=&type=people&location=${location?.country}&page=1`}>{`${location?.country}`}</a>}

          </p>
        </div>

        {/* Mobile Number */}
        <div className="grid md:grid-cols-[200px_1fr] text-sm items-center">
          <p className="font-medium flex items-center ">
            <PhoneIcon className="mr-2 inline w-5" />
            Mobile Number
          </p>
          <div className="flex flex-wrap justify-between gap-2">
            <p className="text-primary-purple-color">
              {getPersonPhone()}
            </p>
            <ViewButton message={message} href={`//${person.socialProfiles.linkedin}`} popup={isExtensionInstalled} className="text-sm">
              View Mobile Number
            </ViewButton>
          </div>
        </div>

        {/* LinkedIn */}
        <div className="grid md:grid-cols-[200px_1fr] text-sm items-center">
          <p className="font-medium flex items-center ">
            <LinkedInIcon className="mr-2 inline w-5" />
            LinkedIn Profile
          </p>
          <p className="text-primary-purple-color">
            {person.socialProfiles.linkedin ? (
              <a
                href={`//${person.socialProfiles.linkedin}`}
                target="_blank"
                className="text-primary-purple-color"
              >
                {person.socialProfiles.linkedin}
              </a>
            ) : (
              "No LinkedIn Profile"
            )}
          </p>
        </div>
      </div>
      <a
        href="https://chrome.google.com/webstore/detail/sales-fuel-%E2%80%93-access-b2b-c/emdakjpcbpbkpjnpmddfjkhdlfoinola/related?hl=en&authuser=4"
        target="_blank"
      >
        <Button className="primary-button py-2 px-9 mb-[40px] mt-[30px]">
          Get Extension
        </Button>
      </a>
    </div>
  );
}
