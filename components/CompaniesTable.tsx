"use client";
import { getCompanyHqLocation, getCompanySlug, slugFilters, slugify } from "@/lib/utils";
// import { Pagination } from "flowbite-react";
import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";
import NoCompany from "../assets/no-company.png";
import ImageWithFallback from "./image-with-fallback";
import CompanyCard from "./search/company-card";
import Button from "./ui/Button";
import Pagination from "./ui/pagination";

export const CompaniesTable = ({
  loading,
  companies,
  onPageChange,
  page,
  totalPages,
  onLocationClick,
  onIndustryClick,
  filters,
}: any) => {
  if (loading) return <LoadingTable />;

  if (!loading && !companies?.length) return <div></div>;

  // const router = useRouter();
  const pathname = usePathname();
  const basePath = pathname.split("/").slice(0, 2).join("/");

  const handlePageChange = (page: number) => {
    if (onPageChange) {
      onPageChange(page);
      return;
    }
    window.location.href = `${pathname}?page=${page}`;
    // router.push(`${pathname}?page=${page}`);
  };

  const handleIndustryClick = (industry: string) => {
    if (onIndustryClick) {
      onIndustryClick(industry);
      return;
    }
    const localFilters = JSON.parse(JSON.stringify(filters));
    if (filters.industry?.length === 1 && !pathname.includes("people")) {
      localFilters.industry[1] = industry;
    } else if (filters.industry?.length === 2) {
      localFilters.industry[2] = industry;
    } else {
      localFilters.industry = [industry];
    }
    let link = `${basePath}/${slugFilters(localFilters)}`;
    window.location.href = link;
    // router.push(link);
  };

  const handleLocationClick = (location: any, type = "") => {
    if (onLocationClick) {
      onLocationClick(location[type]);
      return;
    }
    const localFilters = JSON.parse(JSON.stringify(filters));

    if (type === "country") {
      localFilters.location['country'] = location.country
      localFilters.location['state'] = ""
      localFilters.location['city'] = ""
    }
    else if (type === "state") {
      location.country && (localFilters.location['country'] = location.country)
      localFilters.location['state'] = location?.state
      localFilters.location['city'] = ""
      // localFilters.location = [location?.country, location?.state];
    }
    else if (type === "city") {
      location.country && (localFilters.location['country'] = location.country)
      location.state && (localFilters.location['state'] = location.state)
      localFilters.location['city'] = location?.city
      // localFilters.location = [location?.country, location?.state, location?.city];
    }

    let link = `${basePath}/${slugFilters(localFilters)}`;

    window.location.href = link;
    // router.push(link);
  };
  return (
    <>
      <div className="grid gap-12 py-4 md:hidden">
        {companies.map((company: any) => (
          <CompanyCard
            key={company.id}
            company={company}
            handleLocationClick={handleLocationClick}
            handleIndustryClick={handleIndustryClick}
          />
        ))}
      </div>
      <table className="w-full text-left text-sm border rounded hidden md:table">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3" />
            <th scope="col" className="px-6 py-3 font-semibold">
              Name
            </th>

            <th scope="col" className="px-6 py-3 font-semibold">
              HQ Location
            </th>
            <th scope="col" className="min-w-170px px-6 py-3 font-semibold">
              Employees
            </th>
            <th scope="col" className="min-w-160px px-6 py-3 font-semibold">
              Industry
            </th>
            <th scope="col" className="px-6 py-3 font-semibold">
              Founded
            </th>
            <th scope="col" className="min-w-160px px-6 py-3 font-semibold" />
          </tr>
        </thead>
        {loading && (
          <tbody v-if="!companies.length || loading" className="pt-2 px-2">
            <LoadingRow />
            <LoadingRow />
            <LoadingRow />
            <LoadingRow />
            <LoadingRow />
            <LoadingRow />
            <LoadingRow />
          </tbody>
        )}
        {!loading && (
          <tbody className="pt-2 px-2">
            {companies.map((company: any) => (
              <RenderCompanyRow
                key={company.id}
                company={company}
                handleLocationClick={handleLocationClick}
                handleIndustryClick={handleIndustryClick}
              />
            ))}
          </tbody>
        )}
      </table>

      <div className="w-full flex items-center justify-center text-center">
        <Pagination
          currentPage={page || 1}
          totalPages={totalPages || 1}
        />
      </div>
    </>
  );
};

const RenderCompanyRow = ({
  company,
  handleLocationClick,
  handleIndustryClick,
}: any) => {
  const location = useMemo(() => getCompanyHqLocation(company), [company]);

  const slug = getCompanySlug(company);
  const isSameIndustry = usePathname().includes(slugify(company?.industry));
  // const isSameLocation = usePathname().includes(
  //   slugify(
  //     Array.isArray(company?.address?.city)
  //       ? company?.address?.city?.[0]
  //       : company?.address?.city
  //   )
  // );
  return (
    <tr className="bg-white border-b  hover:bg-gray-50">
      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-800">
        <span className="flex items-center">
          <a href={`/companies/${slug}`}>
            <span className="w-[45px]">
              <ImageWithFallback
                className="rounded-full"
                src={company?.logoUrl || NoCompany}
                fallbackSrc={NoCompany}
                key={company?.logoUrl}
                alt=""
                width={45}
                height={45}
              />
            </span>
          </a>
        </span>
      </td>
      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-700 max-w-xs">
        <a href={`/companies/${slug}`}>
          <span className="flex items-center">
            <span className="cursor-pointer text-sm text-color-4 capitalize hover:text-color-15 whitespace-normal">
              {company?.name}
            </span>
          </span>
        </a>
      </td>
      <td
        className={`cursor-pointer px-4 py-2 capitalize text-sm `}
      >
        {location?.city && <span className="text-color-4 hover:underline" onClick={() => handleLocationClick(location, "city")}>{`${location?.city}, `}</span>}
        {location?.state && <span className="text-color-4 hover:underline" onClick={() => handleLocationClick(location, "state")}>{`${location?.state}, `}</span>}
        {location?.country && <span className="text-color-4 hover:underline" onClick={() => handleLocationClick(location, "country")}>{`${location?.country}`}</span>}
      </td>
      <td className="px-4 py-2 text-sm text-color-5">
        {company?.linkedin?.employeeSizeRange || "-"}
      </td>
      <td
        className={`cursor-pointer px-4 py-2 text-xs uppercase   ${isSameIndustry
          ? "text-color-5"
          : "text-color-4 font-medium hover:underline"
          }`}
        onClick={() => {
          if (isSameIndustry) return;
          handleIndustryClick(company?.industry);
        }}
      >
        {company?.industry || "-"}
      </td>
      <td className="cursor-pointer px-4 py-2 text-color-5 text-sm">
        {company?.foundedYear || "-"}
      </td>

      <td className="px-4 py-0.5">
        <a href={`/companies/${slug}`}>
          <Button type="button" className="!rounded-md w-[140px]">
            View Company
          </Button>
        </a>
      </td>
    </tr>
  );
};

const LoadingTable = () => {
  return (
    <>
      <div className="grid gap-8 py-4 md:hidden">
        <CompanyCard.Loading />
        <CompanyCard.Loading />
        <CompanyCard.Loading />
        <CompanyCard.Loading />
        <CompanyCard.Loading />
      </div>
      <table className="w-full text-left text-sm border rounded hidden md:table">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3" />
            <th scope="col" className="px-6 py-3 font-semibold">
              Name
            </th>

            <th scope="col" className="px-6 py-3 font-semibold">
              HQ Location
            </th>
            <th scope="col" className="min-w-170px px-6 py-3 font-semibold">
              Employees
            </th>
            <th scope="col" className="min-w-160px px-6 py-3 font-semibold">
              Industry
            </th>
            <th scope="col" className="px-6 py-3 font-semibold">
              Founded
            </th>
            <th scope="col" className="min-w-160px px-6 py-3 font-semibold" />
          </tr>
        </thead>

        <tbody className="pt-2 px-2">
          <LoadingRow />
          <LoadingRow />
          <LoadingRow />
          <LoadingRow />
          <LoadingRow />
          <LoadingRow />
          <LoadingRow />
        </tbody>
      </table>
    </>
  );
};

const LoadingRow = () => {
  return (
    <tr className="bg-white border-b animate-pulse">
      <td className="whitespace-nowrap px-2 py-2">
        <div className="w-[45px]  rounded-full h-[45px] bg-slate-100" />
      </td>
      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-700">
        <div className=" bg-slate-100 h-4 rounded-lg" />
      </td>
      <td className="px-4 py-2 text-sm text-color-5 capitalize">
        <div className=" bg-slate-100 h-4 rounded-lg" />
      </td>
      <td className="cursor-pointer px-4 py-2 capitalize text-sm text-color-4 hover:text-color-15">
        <div className=" bg-slate-100 h-4 rounded-lg" />
      </td>
      <td className="px-4 py-2 text-sm text-color-5">
        <div className=" bg-slate-100 h-4 rounded-lg" />
      </td>
      <td className="cursor-pointer px-4 py-2 text-sm text-color-4 hover:text-color-15">
        <div className=" bg-slate-100 h-4 rounded-lg" />
      </td>
      <td className="cursor-pointer px-4 py-2 text-sm text-color-4 hover:text-color-15">
        <div className=" bg-slate-100 h-4 rounded-lg" />
      </td>
    </tr>
  );
};
