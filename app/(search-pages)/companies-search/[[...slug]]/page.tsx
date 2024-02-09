import { CompaniesTable } from "@/components/CompaniesTable";
import LimitExceededPopup from "@/components/limit-exceeded-popup";
import LoadingCard from "@/components/loading-card";
import Industries from "@/components/search/industries";
import Locations from "@/components/search/locations";
import SearchBar from "@/components/search/search-bar";
import StaticAvatars from "@/components/static-avatar-group";
import Button from "@/components/ui/Button";
import siteConfig from "@/config/site";
import { getCompanies } from "@/lib/server/company";
import { isCrawlerBot } from "@/lib/server/utils";
import { getExtensionStatus } from "@/lib/session";
import {
  formatNumber,
  generateCompanyDirectoryTitle,
  unSlugFilters,
} from "@/lib/utils";
import { IFilters, SearchType } from "@/types/searchType";
import { Metadata } from "next";
import { Suspense } from "react";

interface Props {
  params: { slug: string[] };
  searchParams: { page: number };
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const slug = params?.slug || [];
  const pageInfo = await generateCompanyDirectoryTitle(slug);
  let url = `${process.env["NEXT_PUBLIC_SITE_URL"]}/companies-search`;
  if (slug.length) url += `/${slug.join("/")}`
  return {
    ...pageInfo,
    ...(searchParams?.page && {
      alternates: {
        canonical: url,
      },
    }),
  }
}

export default async function CompaniesSearchPage({
  params,
  searchParams,
}: Props) {
  const isExtensionInstalled = await getExtensionStatus();
  const googleBot = isCrawlerBot();

  const query: any = {
    page: searchParams?.page || 1,
    isExtensionInstalled,
    googleBot,
  };

  let urlFilters: IFilters = {
    location: {
      country: "",
      state: "",
      city: "",
    },
    industry: [],
  };

  if (params?.slug?.length) {
    urlFilters = unSlugFilters(params.slug.join("-"));
  }

  if (!params?.slug?.length) query["searchType"] = "all";

  if (urlFilters.location.country) {
    query["country"] = urlFilters.location.country
  }

  if (urlFilters.location.country && urlFilters.location.state) {
    query["country"] = urlFilters.location.country
    query["state"] = urlFilters.location.state
  }

  if (urlFilters.location) {
    query["country"] = urlFilters.location.country
    query["state"] = urlFilters.location.state
    query["city"] = urlFilters.location.city
  }

  if (urlFilters.industry.length === 1) {
    query["industry"] = urlFilters.industry[0]!;
  }

  if (urlFilters.industry.length === 2) {
    query["industry"] = urlFilters.industry[0]!;
    query["specialties"] = urlFilters.industry[1]!;
  }

  const companies = await getCompanies(query);


  const title = params.slug?.length
    ? generateCompanyDirectoryTitle(params.slug)
      .title.replace("at SalesFuel", "")
      .replace("| SalesFuel", "")
    : "Companies Search";

  return (
    <main className="container m-auto ">
      <div className="space-y-16">
        <section className="rounded shadow-[rgba(7,_65,_210,_0.1)_0px_0px_20px] text-gray-700">
          <div className="px-10 py-6 text-center flex flex-col justify-center items-center gap-8 md:flex-row md:justify-between md:text-left md:gap-0">
            <h2 className="text-2xl font-semibold text-gray-700">
              Reach your target accounts. Faster
            </h2>
            <StaticAvatars />
            <a
              href={siteConfig.chromeExtensionLink}
              target="_blank"
              title="Start Free"
            >
              <Button className="!rounded-3xl mb-0 px-10 text-base !bg-color-4">
                Start Free
              </Button>
            </a>
          </div>
        </section>
        <section className="rounded shadow-[rgba(7,_65,_210,_0.1)_0px_0px_20px] text-gray-700">
          <div className="px-8 md:px-10 py-8 flex justify-between">
            <div>
              <h4 className="text-xl font-semibold text-gray-800 capitalize">
                {title}
              </h4>
              <p className="mt-4 font-semibold text-sm">
                Lead Generation and Sales Prospecting Made Easy
              </p>
              <p className="mt-1 text-sm">
                Search for Companies by Industry, Location, Revenue and more
              </p>
              {companies?.total && (
                <p className="mt-2 text-sm font-semibold">
                  Total Companies: {formatNumber(companies?.total)}
                </p>
              )}
            </div>
            <div className="w-80 hidden md:block">
              <SearchBar tiny={true} placeholder="Search Companies" entity={SearchType.companies} />
            </div>
          </div>

          <div className="pb-10 px-8 md:px-0">
            <CompaniesTable
              loading={false}
              companies={companies?.items || []}
              onPageChange={false}
              page={companies.page}
              totalPages={companies?.totalPages}
              onLocationClick={false}
              onDesignationClick={false}
              filters={urlFilters}
            />
          </div>

          {+query.page >= 2 && !isExtensionInstalled && (
            <LimitExceededPopup show={true} />
          )}
        </section>


        <Suspense fallback={<LoadingCard />} >
          {/* @ts-expect-error Server Component */}
          <Industries filters={urlFilters} type="companies" />
        </Suspense>

        <Suspense fallback={<LoadingCard />}>
          {/* @ts-expect-error Server Component */}
          <Locations filters={urlFilters} type="companies" />
        </Suspense>
      </div>
    </main>
  );
}
