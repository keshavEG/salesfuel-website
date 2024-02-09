import NoCompany from "@/assets/no-company.png";
import CompanyEmployeeFaq from "@/components/company/company-employee-faq";
import CompanyEmployeesTable from "@/components/company/company-employees-table";
import CompanyKeyEmployees from "@/components/company/company-key-employees";
import ContactButton from "@/components/contact-button";
import { Description } from "@/components/description";
import { fetcher } from "@/lib/server/utils";
import { getCurrentUser, getExtensionStatus } from "@/lib/session";
import { capitalize, getAbsoluteURL, getCompanyLinkedInUrl } from "@/lib/utils";
import Image from "next/image";

const getCompany = async (slug: string) => {
  const res = await fetcher(getAbsoluteURL(`/api2/companies/${slug}`));
  return res
};

const getEmployeesCount = async (companyName: string) => {
  try {
    const res = await fetcher(
      getAbsoluteURL(`/api2/companies/${companyName}/persons-count-by-location`)
    );
    return res
  } catch (e) {
    console.log(e)
  }

};

export async function generateMetadata({ params, searchParams }: { params: { slug: string }, searchParams: { page: number }; }) {
  const company: any = await getCompany(params.slug);
  const slug = params?.slug || [];
  let url = `${process.env["NEXT_PUBLIC_SITE_URL"]}/employee-directory/${slug}`;
  return {
    title: `${capitalize(company.name)} -  Employee Directory | SalesFuel`,
    description: `Browse employee directory of ${capitalize(company.name)} and get email addresses and phone numbers of ${capitalize(company.name)} employees.`,
    ...(searchParams?.page && {
      alternates: {
        canonical: url,
      },
    }),
  };
}

export default async function EmployeeSearchPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { page: string };
}) {

  const company: any = await getCompany(params.slug);
  const employeesCount: any = await getEmployeesCount(company?.name?.trim());
  const user = await getCurrentUser();
  const isExtensionInstalled = await getExtensionStatus();


  return (
    <main className="container m-auto">
      <div className="space-y-10">
        <section className="max-w-7xl mx-auto rounded  text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-5 mx-auto">
            <div className="-my-8 divide-y-2 divide-gray-100">
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-[14rem] md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <div className="min-w-[230px] max-w-[230px] flex-grow-1">
                    <Image
                      className="w-full h-full object-contain"
                      src={company.logoUrl || NoCompany}
                      alt={company.name}
                      width={230}
                      height={company.logoUrl ? 230 : 153}
                    />
                  </div>
                </div>
                <div className="md:flex-grow px-8 py-2 md:w-1/2">
                  <h1 className="text-3xl font-medium text-gray-700 title-font mb-4">
                    <span className="text-[#6c2bd9] capitalize"> {company.name}</span>{" "}
                    Employee Directory
                  </h1>

                  <Description text={company.description} user={!!user} />
                  <ContactButton href={getCompanyLinkedInUrl(company)} user={isExtensionInstalled} target="_blank" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto rounded  text-gray-600 body-font">
          <h2 className="pl-4 pt-6 text-2xl font-medium text-gray-900 title-font mb-2 px-5 py-5 capitalize">
            {company.name} Global Presence
          </h2>
          <div className="container mx-auto flex flex-wrap items-center">
            <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 flex justify-center">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="https://www.zoominfo.com/ge-assets/pic/pic-location-map.svg"
              />
            </div>
            <div className="lg:w-2/6 md:w-1/2 bg-[#f6f9fe] rounded-[1.5rem] p-8 flex flex-col w-full mt-10 md:mt-0 border-t-[4px] border-[#a9beef]">
              <table className="table-auto">
                <thead>
                  <tr>
                    <th className="py-2 text-left">Location</th>
                    <th className="py-2 text-left">People at location</th>
                  </tr>
                </thead>
                <tbody>
                  {employeesCount
                    .slice(0, 6)
                    .map((location: any, index: any) => (
                      <tr key={index}>
                        <td className="border-b border-gray-300 py-2 text-sm capitalize">
                          {location.location}
                        </td>
                        <td className="border-b border-gray-300 py-2 text-sm">
                          {location.count}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-center mt-4 w-[100%]">
              <ContactButton href={getCompanyLinkedInUrl(company) + "/people/"} user={isExtensionInstalled} target="_blank" className="py-2 px-8">
                Search All Employees
              </ContactButton>

            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto text-gray-600 body-font !mt-20">
          <div className="">
            <div>
              {/* @ts-expect-error Server Component */}
              <CompanyKeyEmployees company={company} />
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto rounded shadow-[rgba(7,_65,_210,_0.1)_0px_0px_20px]  text-gray-600 body-font">
          {/* <h2 className="text-2xl font-medium text-gray-700 px-6 pt-1 pb-4">
            Index of contact profiles from {company.name}
          </h2> */}
          <div className="px-10 py-8">
            <h4 className="text-xl font-semibold">
              Index of contact profiles from <span className="capitalize">{company.name}</span>
            </h4>
          </div>

          <div className="pb-10">
            {/* @ts-expect-error Server Component */}
            <CompanyEmployeesTable
              companyName={company.name}
              page={searchParams.page}
            />
          </div>
        </section>

        <section className="max-w-7xl px-8 py-8 mx-auto rounded shadow-[rgba(7,_65,_210,_0.1)_0px_0px_20px] text-gray-600 body-font">
          <h1 className="text-2xl font-semibold mb-4 capitalize">
            Frequently Asked Questions regarding {company.name} Employees
          </h1>
          <CompanyEmployeeFaq company={company} />
        </section>
      </div>
    </main>
  );
}
