"use client";
import { Company } from "@/global";
import { getCompanyHqLocation } from "@/lib/utils";
import { Accordion } from "flowbite-react";

export default function CompanyFaq({ company }: { company: Company }) {
  const location = getCompanyHqLocation(company);
  const address = [location.address, location.city, location.state, location.country].filter(Boolean).join(", ");

  return (
    <div className="bg-[#F4F4F4] text-[#585757] font-light p-6 md:px-[50px] md:py-[40px] rounded-2xl md:mb-[40px]">
      <h2 className="mb-[24px] text-2xl md:text-3xl">
        <span className="text-primary-purple-color mr-2">Frequently</span>
        Asked Questions
      </h2>
      <Accordion flush>
        <Accordion.Panel>
          <Accordion.Title
            className={`text-xl md:text-2xl font-light faq-title-container !px-0 ${
              !location && "hidden"
            }`}
          >
            Where is {company?.name} located?
          </Accordion.Title>
          <Accordion.Content className="bg-white !px-3 !py-2">
            <p className="mb-2 text-gray-500 dark:text-gray-400 text-lg capitalize">
              {address}
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title
            className={`text-xl md:text-2xl font-light faq-title-container !px-0 ${
              !company.phoneNumber && "hidden"
            }`}
          >
            What is {company?.name} phone number?
          </Accordion.Title>
          <Accordion.Content className="bg-white !px-3 !py-2">
            <p className="mb-2 text-gray-500 dark:text-gray-400 text-lg">
              {company.phoneNumber}
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title
            className={`text-xl md:text-2xl font-light faq-title-container !px-0 ${
              !company.industry && "hidden"
            }}`}
          >
            Which industries does {company?.name} works in?
          </Accordion.Title>
          <Accordion.Content className="bg-white !px-3 !py-2">
            <p className="mb-2 text-gray-500 dark:text-gray-400 text-lg capitalize">
              {company?.industry}
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title
            className={`text-xl md:text-2xl font-light faq-title-container !px-0 ${
              !company.website && "hidden"
            }}`}
          >
            What is {company.name} official website?
          </Accordion.Title>
          <Accordion.Content className="bg-white !px-3 !py-2">
            <p className="mb-2 text-gray-500 dark:text-gray-400 text-lg">
              <a href={company?.websiteUrl} target="_blank">
                {company?.website}
              </a>
            </p>
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title
            className={`text-xl md:text-2xl font-light faq-title-container !px-0 ${
              !company.linkedin?.employeeSizeRange && "hidden"
            }`}
          >
            How many employees does {company?.name} have?
          </Accordion.Title>
          <Accordion.Content className="bg-white !px-3 !py-2">
            <p className="mb-2 text-gray-500 dark:text-gray-400 text-lg">
              {company.linkedin?.employeeSizeRange}
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
}
