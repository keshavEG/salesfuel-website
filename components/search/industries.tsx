import { fetcher } from "@/lib/server/utils";
import { getAbsoluteURL } from "@/lib/utils";
import SearchIndustriesUi from "./search-industries-ui";

const getIndustries = async (
  country = "",
  state = "",
  city = "",
  type = "",
  title = ""
) => {
  const searchParams = new URLSearchParams();
  if (country) searchParams.set("country", country);
  if (state) searchParams.set("state", state);
  if (city) searchParams.set("city", city);
  if (title && type === 'persons') searchParams.set("designation", title);
  try {
    const url = decodeURIComponent(getAbsoluteURL(`/api2/${type}/industries?${searchParams.toString()}`))
    const json = await fetcher(url);
    // if (!res.ok) return [];
    // const json = await res.json();
    return json;
  } catch (error) {
    return [];
  }
};

const getSpecialties = async (
  industry: string,
  country = "",
  state = "",
  city = ""
) => {
  const searchParams = new URLSearchParams();
  if (country) searchParams.set("country", country);
  if (state) searchParams.set("state", state);
  if (city) searchParams.set("city", city);
  const url = getAbsoluteURL(`/api2/companies/industries/${industry}/specialties?${searchParams.toString()}`)
  try {
    const json = await fetcher(decodeURIComponent(url));
    // if (!res.ok) return [];
    // const json = await res.json();
    return json;
  } catch (error) {
    return [];
  }

};

export default async function Industries({
  filters,
  type,
}: {
  filters: any;
  type: "companies" | "persons";
}) {
  const industries = [];
  if (filters.industry.length === 1 && type === "companies") {
    industries.push(
      ...(await getSpecialties(
        filters.industry[0]!,
        filters.location.country,
        filters.location.state,
        filters.location.city
      ))
    );
  } else if (filters.industry.length === 2 || (filters.industry.length === 1 && type === "persons")) {
    industries.push(...[]);
  } else {
    industries.push(
      ...(await getIndustries(
        filters.location.country,
        filters.location.state,
        filters.location.city,
        type,
        filters?.title?.length === 2 ? filters?.title?.[1] : filters?.title?.[0]
      ))
    );
  }
  return <SearchIndustriesUi filters={filters} industries={industries} />;
}
