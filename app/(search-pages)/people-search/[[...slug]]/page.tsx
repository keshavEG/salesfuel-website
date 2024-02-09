import LimitExceededPopup from "@/components/limit-exceeded-popup";
import LoadingCard from "@/components/loading-card";
import { PersonsTable } from "@/components/PersonsTable";
import Designations from "@/components/search/designations";
import Industries from "@/components/search/industries";
import Locations from "@/components/search/locations";
import SearchBar from "@/components/search/search-bar";
import SearchCount from "@/components/search/search-count";
import StaticAvatars from "@/components/static-avatar-group";
import Button from "@/components/ui/Button";
import siteConfig from "@/config/site";
import { getPersons } from "@/lib/server/person";
import { getExtensionStatus } from "@/lib/session";
import {
  generatePersonDirectoryTitle,
  unSlugFilters,
} from "@/lib/utils";
import { IPeopleFilters, SearchType } from "@/types/searchType";
import { Metadata } from "next";
import { Suspense } from "react";

interface Props {
  params: { slug: string[] };
  searchParams: { page: number };
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const slug = params?.slug || [];
  const pageInfo = await generatePersonDirectoryTitle(slug);
  let url = `${process.env["NEXT_PUBLIC_SITE_URL"]}/people-search`;
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

export default async function PeopleSearchPage({
  params,
  searchParams,
}: Props) {
  const isExtensionInstalled = await getExtensionStatus();
  const query: any = {
    page: searchParams?.page || 1,
  };

  let urlFilters: IPeopleFilters = {
    location: {
      country: "",
      state: "",
      city: "",
    },
    industry: [],
    title: [],
  };

  if (params?.slug?.length) {
    urlFilters = unSlugFilters(params.slug.join("-"));
  }

  console.log(urlFilters)
  if (urlFilters.location.country) {
    query["country"] = urlFilters.location.country;
  }
  if (urlFilters.location.state) {
    query["state"] = urlFilters.location.state;
  }
  if (urlFilters.location.city) {
    query["city"] = urlFilters.location.city;
  }

  // if (urlFilters.location.country && urlFilters.location.state) {
  //   query["country"] = urlFilters.location.country;
  //   query["state"] = urlFilters.location.state;
  // }

  // if (urlFilters.location.country && urlFilters.location.state && urlFilters.location.city) {
  //   query["country"] = urlFilters.location.country;
  //   query["state"] = urlFilters.location.state;
  //   query["city"] = urlFilters.location.city;
  // }

  // Designation Filters
  if (urlFilters?.title?.length === 1) {
    query["designation"] = urlFilters.title[0]!;
  }

  if (urlFilters?.title?.length === 2) {
    query["designation"] = urlFilters.title[1]!;
  }

  // Industry Filters
  if (urlFilters?.industry?.length) {
    query["industry"] = urlFilters.industry[0]!;
  }

  const queryParams = new URLSearchParams(query);

  let persons;
  try {
    persons = await getPersons(queryParams.toString());
  } catch (error) {
    persons = { items: [], page: 1, totalPages: 1 };
  }

  const title = params.slug?.length
    ? generatePersonDirectoryTitle(params.slug).title
    : "People Search";

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
          <div className="px-8 md:px-10 py-8 flex justify-between md:gap-8">
            <div>
              <h4 className="text-xl font-semibold text-gray-800">{title}</h4>
              <p className="mt-4 font-semibold text-sm">
                Search and Find Anyone's Email Address, Direct Phone Number and
                Much More
              </p>
              <p className="mt-1 text-sm">
                SalesFuel's database provides access to over 209 million
                professional profiles and 13 million business profiles,
                including more direct dials and email addresses of professionals
                than any other market intelligence provider.
              </p>
              <Suspense
                fallback={
                  <div className="w-[100px] bg-slate-100 animate-pulse " />
                }
              >
                {/* @ts-expect-error Server Component */}
                <SearchCount searchQuery={queryParams.toString()} />
              </Suspense>
            </div>
            <div className="w-80 hidden md:block">
              <SearchBar
                tiny={true}
                placeholder="Search People"
                entity={SearchType.people}
              />
            </div>
          </div>
          <div className="pb-10 px-8 md:px-0">
            <PersonsTable
              loading={false}
              persons={persons?.items || []}
              onPageChange={false}
              page={persons.page}
              totalPages={persons?.totalPages}
              onLocationClick={false}
              onDesignationClick={false}
              filters={urlFilters}
            />
          </div>

          {+query.page >= 2 && !isExtensionInstalled && (
            <LimitExceededPopup show={true} />
          )}
        </section>

        <Suspense fallback={<LoadingCard />}>
          {/* @ts-expect-error Server Component */}
          <Industries filters={urlFilters} type="persons" />
        </Suspense>

        <Suspense fallback={<LoadingCard />}>
          {/* @ts-expect-error Server Component */}
          <Locations filters={urlFilters} type="persons" />
        </Suspense>

        <Suspense fallback={<LoadingCard />}>
          {/* @ts-expect-error Server Component */}
          <Designations filters={urlFilters} />
        </Suspense>
      </div>
    </main>
  );
}
