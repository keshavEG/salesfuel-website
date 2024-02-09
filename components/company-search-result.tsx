import { Company } from "@/global";
import { capitalize, getCompanyLinkedInUrl } from "@/lib/utils";

// import Link from "next/link";
import NoCompany from "../assets/no-company.png";

import CompanyFaq from "./company/company-faq";
import CompanyInfo from "./company/company-info";
import CompanyPersons from "./company/company-persons";
import ContactButton from "./contact-button";
import { Description } from "./description";
import ImageWithFallback from "./image-with-fallback";

interface IProps {
  company: Company;
  user: boolean;
  isExtensionInstalled?: boolean;
}

export default function CompanySearchResult({ company, user, isExtensionInstalled }: IProps) {
  const infoMessage = `to access ${capitalize(company.name)}'s information`;
  return (
    <div>
      <div className="flex gap-5 md:gap-5 md:px-5 flex-wrap md:flex-nowrap mt-20 md:mt-0 items-start">
        <div className=" min-w-[230px] max-w-[230px] flex-grow-1">
          <ImageWithFallback
            className="w-full h-full object-contain rounded-full"
            src={company.logoUrl || NoCompany}
            alt={company.name}
            fallbackSrc={NoCompany}
            width={230}
            height={company.logoUrl ? 230 : 153}
          />
        </div>
        <div>
          <h2 className="text-4xl mb-1 text-gray-700 capitalize">
            {company.name}
          </h2>
          <p className="mb-[13px] font-semibold text-gray-600  uppercase">
            <a
              href={`/search?query=${encodeURIComponent(company.industry)}&type=industries&location=&page=1`}
            >
              {company.industry}
            </a>
          </p>


          <Description text={company.description} user={isExtensionInstalled} message={infoMessage} />

          <ContactButton href={getCompanyLinkedInUrl(company)} user={isExtensionInstalled} target="_blank" message={infoMessage} />


        </div>
      </div>
      <div className="m-5 my-[50px]">
        <p className="h-[0.5px] bg-[#cccaca] w-full"></p>
      </div>
      <div className="grid gap-8 md:grid-cols-[1fr_400px]">
        <div className="">
          <CompanyInfo company={company} user={user} isExtensionInstalled={isExtensionInstalled} />
          <CompanyFaq company={company} />
        </div>
        <div>
          {/* @ts-expect-error Server Component */}
          <CompanyPersons company={company} />
        </div>
      </div>
    </div>
  );
}
