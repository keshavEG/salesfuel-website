import CompanySearchResult from "@/components/company-search-result";
import { Company } from "@/global";
import { fetcher } from "@/lib/server/utils";
import { getCurrentUser, getExtensionStatus } from "@/lib/session";
import { capitalize, getAbsoluteURL } from "@/lib/utils";
import { Metadata } from "next";
import { cookies } from "next/headers";

interface ICompanyPageProps {
  params: { slug: string };
}

const getCompany = async (slug: string) => {
  try {
    const res = await fetcher(getAbsoluteURL(`/api2/companies/${slug}`), {
      next: {
        revalidate: 10,
      },
      headers: {
        Authorization: `Bearer ${cookies().get("contact-data-access-token")?.value
          }`,
      },
    });
    return res
  } catch (error) {
    console.error(error);
  }
};

export async function generateMetadata({
  params,
}: ICompanyPageProps): Promise<Metadata> {
  const company: Company = await getCompany(params.slug);
  const location = [
    company?.address?.[0]?.address?.trim(),
    company?.address?.[0]?.city,
    company?.address?.[0]?.state,
    company?.address?.[0]?.country,
  ]
    .filter(Boolean)
    .join(", ");
  return {
    title: `${capitalize(company.name)} - Overview, Employees and Competitors | SalesFuelData.com`,
    description: `${capitalize(company.name)} (${company.website}) is located in ${location}, description, industry, contact details, employees by title, revenue etc. Compare ${company.name} with similar companies.`,
    keywords: `${capitalize(company.name)}, salesfuel, web summary, professional summary, professional background, employment history, biography, web references, employees, contact information`,
  };
}

export default async function CompanyPage({ params }: ICompanyPageProps) {
  const user = await getCurrentUser();
  const company = await getCompany(params.slug);
  const isExtensionInstalled = await getExtensionStatus();
  return (
    <div className="wrapper md:p-[60px]">
      <CompanySearchResult company={company} user={!!user} isExtensionInstalled={isExtensionInstalled} />
    </div>
  );
}
