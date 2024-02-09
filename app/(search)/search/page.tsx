"use client";
import { CompaniesTable } from "@/components/CompaniesTable";
import LimitExceededPopup from "@/components/limit-exceeded-popup";
import { PersonsTable } from "@/components/PersonsTable";
import { BASE_URL } from "@/config/apiConfig";
import { formatNumber, cn, capitalize, fetcher } from "@/lib/utils";
import { SearchType } from "@/types/searchType";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface SearchResults {
  items: any[];
  total: number;
  totalPages: number;
  page: number;
}

export default function Search() {
  const [type, setType] = useState<SearchType>(SearchType.companies);
  const [results, setResults] = useState<SearchResults>();
  const [loading, setLoading] = useState(false);
  const [showLimitPopup, setShowLimitPopup] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("Search companies and contacts in millions through SalesFuel and get actionable data to engage with your next potential customers.");
  // const type = useRef(1);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const searchCompanies = async (
    query: string,
    location: string,
    page: number = 1
  ) => {
    const params: any = {
      query,
      page,
    };

    if (location && query) {
      params["query"] = query.trim();
      params["location"] = location.trim();
      params["type"] = "name_location";
    } else if (location) {
      params["location"] = location.trim();
      params["type"] = "location";
    } else {
      params["query"] = query.trim();
      params["type"] = "name";
    }
    const url = `${BASE_URL}/elastic/companies/search?${new URLSearchParams(
      params
    )}`;

    return fetcher(url);
  };

  const searchContacts = async (
    query: string,
    location: string,
    page: number = 1
  ) => {
    const params: any = {
      query,
      page,
    };
    if (location && query) {
      params["query"] = query.trim();
      params["location"] = location;
      params["type"] = "name_location";
    } else if (location) {
      params["location"] = location.trim();
      params["type"] = "location";
    } else {
      params["query"] = query.trim();
      params["type"] = "name";
    }
    let url = `${BASE_URL}/elastic/persons/search?${new URLSearchParams(
      params
    )}`;
    return fetcher(url);
  };

  const searchIndustry = async (
    query: string,
    location: string,
    page: number = 1
  ) => {
    const params: any = {
      query,
      page,
    };

    if (location && query) {
      params["query"] = ``;
      params["industry"] = query.trim();
      params["location"] = location.trim();
      params["type"] = "industry_location";
    } else if (location) {
      params["query"] = ``;
      params["location"] = location.trim();
      params["type"] = "location";
    } else {
      params["query"] = ``;
      params["industry"] = query.trim();
      params["type"] = "industry";
    }
    let url = `${BASE_URL}/elastic/companies/search?${new URLSearchParams(
      params
    )}`;

    return fetcher(url);
  };

  const searchDesignation = async (
    query: string,
    location: string,
    page: number = 1
  ) => {
    const params: any = {
      query,
      page,
    };

    if (location && query) {
      params["query"] = ``;
      params["designation"] = query.trim();
      params["location"] = location.trim();
      params["type"] = "industry_location";
    } else if (location) {
      params["query"] = '';
      params["type"] = "location";
    }
    let url = `${BASE_URL}/elastic/persons/search?page=${page}&designation=${encodeURIComponent(query.trim())}&location=${location}`;

    return fetcher(url);
  };

  const performSearch = async (
    query: string,
    type: SearchType,
    location = "",
    page = 1
  ) => {
    setLoading(true);
    let res: any;
    if (type === SearchType.companies)
      res = await searchCompanies(query, location, page);
    else if (type === SearchType.industries)
      res = await searchIndustry(query, location, page);
    else if (type === SearchType.designation)
      res = await searchDesignation(query, location, page);
    else res = await searchContacts(query, location, page);

    // Show Limit Exceeded Popup if limit is exceeded
    if (res?.error && res?.error?.response?.status === 429) {
      setShowLimitPopup(true);
    }

    setResults(res);
    setLoading(false);
    // router.push(pathname + "?" + new URLSearchParams(params), {});
  };

  const searchHandler = async (
    query: string,
    type: string,
    location = "",
    page = 1
  ) => {
    // setLoading(true);
    const params = {
      query,
      type: type?.toString(),
      location,
      page: page?.toString(),
    };

    // let res: any;
    // if (type === 1) res = await searchCompanies(query, location, page);
    // else if (type === 3) res = await searchIndustry(query, location, page);
    // else res = await searchContacts(query, location, page);
    // setResults(res?.data);
    // setLoading(false);
    router.push(pathname + "?" + new URLSearchParams(params), {});
  };

  const onPageChange = async (newPage: number) => {
    window.scrollTo(0, 0);
    searchHandler(query, type, location, newPage);
  };

  const handleLocationClick = (location: string) => {
    setLocation(location);
    router.push(
      `${pathname}?${new URLSearchParams({
        ...Object.fromEntries(searchParams),
        location,
      })}`,
      {}
    );
  };

  const handleIndustryClick = (industry: string) => {
    setQuery(industry);
    setType(SearchType.industries);
    const params: any = Object.fromEntries(searchParams);
    router.push(
      `${pathname}?${new URLSearchParams({
        ...params,
        query: industry,
        type: SearchType.industries,
      })}`,
      {}
    );
  };

  const handleDesignationClick = (designation: string) => {
    setQuery(designation);
    setType(SearchType.designation);
    const params: any = Object.fromEntries(searchParams);
    router.push(
      `${pathname}?${new URLSearchParams({
        ...params,
        query: designation,
        type: SearchType.designation,
      })}`,
      {}
    );
  };

  useEffect(() => {
    // convert search params to object

    if (searchParams.has("query")) setQuery(searchParams.get("query")!);
    if (searchParams.has("location"))
      setLocation(searchParams.get("location")!);
    if (searchParams.has("type"))
      setType(searchParams.get("type") as SearchType);
    if (searchParams.has("page")) setPage(+searchParams.get("page")!);
    // searchHandler(searchParams.query, searchParams.type, searchParams.location);
    if (searchParams.has("query") && searchParams.has("type"))
      performSearch(
        searchParams.get("query")!,
        searchParams.get("type") as SearchType,
        searchParams.get("location")!,
        +searchParams.get("page")!
      );
  }, [searchParams]);

  const updateMeta = () => {

    // If query is present in search params and type is companies and location is present
    if (query && type === SearchType.companies && location) {
      document.title = `${capitalize(query)} Companies in ${capitalize(location)} | SalesFuel | Contact Database`;
      setDescription(`Search ${capitalize(query)} companies in ${capitalize(location)}. Find contact database and employee directory of ${capitalize(query)} companies in ${capitalize(location)}`);
      return
    }

    // If query is present in search params and type is companies
    if (query && type === SearchType.companies) {
      document.title = `Search ${capitalize(query)} Company at SalesFuel`;
      setDescription(`Find ${capitalize(query)} companies and contacts. Get access to premium contact database including email and phone number of targeted leads from ${capitalize(query)} companies.`);
      return
    }


    // If query is present in search params and type is people and location is present
    if (query && type === SearchType.people && location) {
      document.title = `Email and Phone Number of ${capitalize(query)} in ${capitalize(location)}`;
      setDescription(`Find email and phone number of ${capitalize(query)} in ${capitalize(location)}`);
      return
    }

    // If query is present in search params and type is people
    if (query && type === SearchType.people) {
      document.title = `${capitalize(query)} Email and Phone Number`;
      setDescription(`Search ${capitalize(query)} email and phone number`);
      return
    }


    // If query is present in search params and type is industries and location is present
    if (query && type === SearchType.industries && location) {
      document.title = `${capitalize(query)} Companies in ${capitalize(location)} | SalesFuel | Contact Database`;
      setDescription(`Search ${capitalize(query)} companies in ${capitalize(location)}. Find contact database and employee directory of ${capitalize(query)} companies in ${capitalize(location)}`);
      return
    }

    // If query is present in search params and type is industries
    if (query && type === SearchType.industries) {
      document.title = `Search ${capitalize(query)} Company at SalesFuel`;
      setDescription(`Find ${capitalize(query)} companies and contacts. Get access to premium contact database including email and phone number of targeted leads from ${capitalize(query)} companies.`);
      return
    }

    // If query is present in search params and type is designation and location is present
    if (query && type === SearchType.designation && location) {
      document.title = `Emails and Phone Numbers of ${capitalize(query)} in ${capitalize(location)}`;
      setDescription(`Access emails and phone numbers of ${capitalize(query)} in ${capitalize(location)}`);
      return
    }

    // If query is present in search params and type is designation
    if (query && type === SearchType.designation) {
      document.title = `${capitalize(query)} Emails and Phone Numbers`;
      setDescription(`Search contact information such as emails and phone numbers of ${capitalize(query)}`);
      return
    }

    document.title = "Find 40M+ companies and 300M+ contacts";

  }

  useEffect(() => {
    setResults(undefined);
  }, [type]);


  useEffect(() => {
    updateMeta()
  }, [query, type, location]);

  return (
    <>
      <meta name="description" content={description} />
      <main>
        {results?.items?.length === 0 && !loading && (
          <div className="flex flex-col justify-center items-center mt-10">
            <h1 className="text-2xl font-semibold text-gray-700">
              No results found
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              No results found, please try another keyword
            </p>
          </div>
        )}
        <section className={cn("rounded  text-gray-700", {
          "shadow-[rgba(7,_65,_210,_0.1)_0px_0px_20px]": results?.items?.length || loading
        })}
        >
          {results?.items?.length ? (
            <div className="px-8 md:px-10 py-8">

              <h4 className="text-xl font-semibold text-gray-800 capitalize">
                Search {query}{" "}
                {type === SearchType.people || type === SearchType.designation
                  ? "People"
                  : "Companies"}{" "}
                {location ? `in ${location} area` : ""}
              </h4>
              <p className="mt-4 font-semibold text-sm">
                Lead Generation and Sales Prospecting Made Easy
              </p>
              <p className="mt-1 text-sm">
                Sales Fuel is the premier lead generation company. Gain access
                to the best database of targeted leads from {query}{" "}
                {type === SearchType.people || type === SearchType.designation
                  ? "People"
                  : "companies"}{" "}
                {location ? `in ${location} area` : ""}. Search for contacts or
                accounts by industry, job title, company size, and so much more
              </p>
              {results?.total && (
                <p className="mt-2 text-sm font-semibold text-gray-600">
                  Total Results: {formatNumber(results?.total)}
                </p>
              )}

            </div>
          ) : (
            ""
          )}
          {type === SearchType.companies && (
            <CompaniesTable
              loading={loading}
              companies={results?.items || []}
              onPageChange={onPageChange}
              page={page}
              totalPages={results?.totalPages}
              onLocationClick={handleLocationClick}
              onIndustryClick={handleIndustryClick}
            />
          )}
          {(type === SearchType.people || type === SearchType.designation) && (
            <PersonsTable
              loading={loading}
              persons={results?.items || []}
              onPageChange={onPageChange}
              page={page}
              totalPages={results?.totalPages}
              onLocationClick={handleLocationClick}
              onDesignationClick={handleDesignationClick}
            />
          )}
          {type === SearchType.industries && (
            <CompaniesTable
              loading={loading}
              companies={results?.items || []}
              onPageChange={onPageChange}
              onLocationClick={handleLocationClick}
              onIndustryClick={handleIndustryClick}
              totalPages={results?.totalPages}
              page={page}
            />
          )}

          {showLimitPopup && (
            <LimitExceededPopup show={showLimitPopup} setShow={setShowLimitPopup} />
          )}
          <br />
        </section>
      </main>
    </>
  );
}
