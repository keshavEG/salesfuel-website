import ContactSearchResult from "@/components/contact-search-result";
// import LimitExceededPopup from "@/components/limit-exceeded-popup";
import { Person } from "@/global";
import { fetcher } from "@/lib/server/utils";
import { getCurrentUser, getExtensionStatus } from "@/lib/session";
import { capitalize, getAbsoluteURL } from "@/lib/utils";
import { Metadata } from "next";

interface IContactPageProps {
  params: { slug: string };
}

const getPersonDetails = async (slug: string, token?: string) => {
  const url = decodeURIComponent(getAbsoluteURL(`/api2/persons/slug/${slug}`))
  const data = await fetcher(url, {
    next: {
      revalidate: 10,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export async function generateMetadata({
  params,
}: IContactPageProps): Promise<Metadata> {
  const user = await getCurrentUser();
  const contact:Person = await getPersonDetails(params.slug, user?.accessToken);
  const company = contact?.companies?.[0]?.companyName || "";
  const name = `${contact.firstName} ${contact.lastName || ""}`;
  return {
    title: `Find ${name} Email And Phone Number - ${capitalize(company)} | salesfueldata.com`,
    description: `Get the details of ${name} - ${capitalize(company)} business profile including email address, phone number, work history and more.`,
    keywords: `${name}, ${contact.designation}, salesfuel data, web summary, professional summary, professional background, employment history, board memberships, education, biography, web references`,
  };
}

export default async function ContactPage({ params }: IContactPageProps) {
  const user = await getCurrentUser();
  const isExtensionInstalled = await getExtensionStatus()
  const contact = await getPersonDetails(params.slug, user?.accessToken);
  // const showLimitExceededPopup = contact?.error?.code === 429;

  return (
    <>
      <div className="wrapper md:p-[60px]">
        <ContactSearchResult person={contact} user={!!user} isExtensionInstalled={isExtensionInstalled} />
        {/* <LimitExceededPopup show={showLimitExceededPopup} /> */}
      </div>
    </>
  );
}
