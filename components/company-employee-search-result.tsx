import { Company } from "@/global";
import Image from "next/image";
import NoCompany from "../assets/no-company.png";
import CompanyEmployeeFaq from "./company/company-employee-faq";
import CompanyKeyEmployees from "./company/company-key-employees";
import { PersonsTable } from "./PersonsTable";

interface IProps {
  company: Company;
  persons?: any;
}

export default function CompanySearchResult({ company, persons }: IProps) {
  return (
    <div className="space-y-10">
      <section className="max-w-7xl mx-auto rounded shadow-[rgba(7,_65,_210,_0.1)_0px_0px_20px] text-gray-600 body-font overflow-hidden">
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
                  <span className="text-[#6c2bd9]"> {company.name}</span>{" "}
                  Employee Directory
                </h1>
                <p className="">{company.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hidden max-w-7xl mx-auto rounded shadow-[rgba(7,_65,_210,_0.1)_0px_0px_20px] text-gray-600 body-font">
        <h2 className="pl-4 pt-6 text-2xl font-medium text-gray-900 title-font mb-2 px-5 py-5">
          {company.name} Global Presence
        </h2>
        <div className="container px-5 py-12 mx-auto flex flex-wrap items-center">
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
                  <th className="py-2 text-left">Address</th>
                </tr>
              </thead>
              <tbody>
                {company.address.slice(0, 6).map((location, index) => (
                  <tr key={index}>
                    <td className="border-b border-gray-300 py-2 text-sm">
                      {location.region}
                    </td>
                    <td className="border-b border-gray-300 py-2 text-sm">
                      {location.address}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center mt-4 w-[100%]">
            <button className="bg-[#6c2bd9] hover:bg-[#5924b8] text-white rounded-full py-2 px-8 text-lg">
              Search All Employees
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto text-gray-600 body-font">
        <div className="">
          <div>
            {/* @ts-expect-error Server Component */}
            <CompanyKeyEmployees company={company} />
          </div>
        </div>
      </section>

      <section className="max-w-7xl px-5 py-5 mx-auto rounded shadow-[rgba(7,_65,_210,_0.1)_0px_0px_20px] text-gray-600 body-font">
        <h2 className="text-3xl font-semibold  mb-8">
          Index of contact profiles from {company.name}
        </h2>

        <div className="pb-10">
          <PersonsTable
            loading={false}
            persons={persons?.items || []}
            onPageChange={false}
            page={persons?.meta?.current}
            totalPages={persons?.meta?.total_pages}
            onLocationClick={false}
            onDesignationClick={false}
            slug={[]}
          />
        </div>
      </section>

      <section className="max-w-7xl px-8 py-8 mx-auto rounded shadow-[rgba(7,_65,_210,_0.1)_0px_0px_20px] text-gray-600 body-font">
        <h1 className="text-2xl font-semibold mb-4">
          Frequently Asked Questions regarding {company.name} Employees
        </h1>
        <CompanyEmployeeFaq company={company} />
      </section>
    </div>
  );
}
