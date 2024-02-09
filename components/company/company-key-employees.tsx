import NoUser from "@/assets/no-user.png";
import { Company, Person } from "@/global";
import { fetcher } from "@/lib/server/utils";
import { getExtensionStatus } from "@/lib/session";
import { getAbsoluteURL, getCompanyLinkedInUrl, getPersonSlug } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import ContactButton from "../contact-button";
import EmailIcon from "../icons/email-icon";
import PhoneIcon from "../icons/phone-icon";
import PersonCard from "../person/person-card";
import Button from "../ui/Button";

const getCompanyCeo = async (id: string) => {
  const res = await fetcher(getAbsoluteURL(`/api2/elastic/founder-ceo/${id}`));
  return res
};

const cxosDesignations = [
  'Chief Executive Officer',
  'Chief Operating Officer',
  'Chief Financial Officer',
  'Chief Information Officer',
  'Chief Technology Officer',
  'Chief Marketing Officer',
  'Chief Human Resources Officer',
  'Chief Data Officer',
  'Chief Communications Officer',
  'Chief Legal Officer',
  'Chief Risk Officer',
  'Chief Security Officer',
  'Chief Diversity Officer',
  'Chief Quality Officer',
  'Chief Visionary Officer',
  'Chief Medical Officer',
  'Chief Nursing Officer',
  'Chief Knowledge Officer',
  'Chief Analytics Officer',
  'Chief Product Officer',
  'Chief Digital Officer',
  'Chief Customer Officer',
  'Chief Growth Officer',
  'Chief Value Officer',
  'Chief Compliance Officer',
  'Chief Merchandising Officer',
  'Chief Creative Officer',
  'Chief Content Officer',
  'Chief Culture Officer',
  'Chief Customer Experience Officer',
  'Chief Design Officer',
  'Chief Ethics Officer',
  'Chief Commercial Officer',
  'Chief Development Officer',
  'Chief People Officer',
  'Chief Innovation Officer',
  'Chief Operations Officer',
  'Chief Learning Officer',
  'Chief Strategy Officer',
  'Chief Revenue Officer',
  'Chief Diversity and Inclusion Officer',
  'Chief Transformation Officer',
  'Chief Intellectual Property Officer',
  'Chief Commercialization Officer',
  'Chief Sustainability Officer',
  'Chief Privacy Officer',
  'Chief Investment Officer',
  'Chief Outsourcing Officer',
  'Chief Logistics Officer',
  'Chief Legal and Compliance Officer',
  'Chief Collaboration Officer',
  'Chief Robotics Officer',
  'Chief Happiness Officer',
  'Chief Disruption Officer',
  'Chief Blockchain Officer',
  'Chief Sales Officer',
  'Chief Procurement Officer',
  'Chief Experience Officer',
  'Chief Legal Affairs Officer',
  'Chief Marketing and Communications Officer',
  'Chief People and Culture Officer',
  'Chief Technology and Information Officer',
];

const getCxos = async (name: string) => {
  if (!name) return [];
  try {
    const colleagues = await fetcher(
      getAbsoluteURL(`/api2/elastic/companies/${name?.toLowerCase()}/cxos`)
    );
    return (colleagues as Person[]) || ([] as Person[]);
  } catch (e) {
    return [];
  }
};

export default async function CompanyKeyEmployee({
  company,
}: {
  company: Company;
}) {
  const ceo = await getCompanyCeo(company?.id);
  const cxos = await getCxos(company.name);
  const isExtensionInstalled = await getExtensionStatus();
  return (
    <div className="container mx-auto flex  items-start gap-6">
      {ceo?.firstName && (
        <>
          <section className="rounded shadow-[rgba(7,_65,_210,_0.1)_0px_0px_20px] text-gray-700 lg:w-[300px] flex-shrink-0 ">
            <div className="px-10 py-4 border-b">
              <h4 className="text-lg font-semibold capitalize"> {company.name} CEO</h4>
            </div>
            <div className="px-10 pt-6 pb-10">
              <CeoCard people={ceo} />
            </div>
          </section>
          {/* <div className="lg:max-w-md lg:w-[320px] md:w-1/2 mb-2 md:mb-0">
            <div className="p-6 mx-auto rounded shadow-[rgba(7,_65,_210,_0.1)_0px_0px_20px] flex flex-col justify-center">
              <h1 className="sm:text-2xl text-xl font-medium  text-gray-700 px-2 pt-1 pb-4 mb-6">
                {company.name} CEO
              </h1>
              <CeoCard people={ceo} />
            </div>
          </div> */}
        </>
      )}

      {cxos.length !== 0 && (
        <section className="rounded shadow-[rgba(7,_65,_210,_0.1)_0px_0px_20px] text-gray-700">
          <div className="px-10 py-4 border-b">
            <h4 className="text-lg font-semibold capitalize">
              Key Employees of {company.name}
            </h4>
          </div>
          <div className="px-10 pt-6 pb-10 m-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-2">
              {cxos?.length > 0 &&
                cxos.map((person) => (
                  <PersonCard person={person} isBlur={false} />
                ))}
            </div>
            <div className="flex justify-center mt-4">
              <ContactButton href={getCompanyLinkedInUrl(company) + "/people/?keywords=" + cxosDesignations.join(",")} user={isExtensionInstalled} target="_blank" className="py-2 px-8 mt-4">
                Search Full List of Executives
              </ContactButton>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

function CeoCard({ people }: any) {

  const fullName = `${people.firstName} ${people.lastName}`;

  return (
    <Link
      href={`/contacts/${getPersonSlug(people)}`}
      key={people.id}
      className="flex-grow"
    >
      <div className="cursor-pointer">
        <div
          className={`rounded-lg pt-4 font-normal flex  flex-col items-center`}
        >
          <div className=" w-[100px] text-center">
            <Image
              src={people.profileImageUrl || NoUser}
              alt={people.firstName}
              width={100}
              height={100}
              className="object-cover rounded-full m-auto"
            />
          </div>

          <div className="text-center mt-2">
            <p className="text-primary-purple-color text-lg font-semibold capitalize mb-1">
              {fullName.toLowerCase()}
            </p>
            <p className="text-[#6B7280] text-sm font-light capitalize mb-4">
              {people.designation}
            </p>
            <div className="flex text-primary-purple-color cursor-pointer text-sm mt-2 items-center">
              <span className="mr-4">
                <PhoneIcon className="inline w-4 h-4 mr-1" />
                View mobile
              </span>
              <span>
                <EmailIcon className="inline w-4 h-4 mr-1" />
                View email
              </span>
            </div>
            <div className="mt-3">
              <Button className="mt-16 ">See Full Profile</Button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
