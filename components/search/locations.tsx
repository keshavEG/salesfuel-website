import { fetcher } from "@/lib/server/utils";
import { getAbsoluteURL } from "@/lib/utils";
import SearchLocationsUi from "./search-locations-ui";

const getLocations = async (
  country = "",
  state = "",
  industry = "",
  specialties = "",
  type = "companies",
  title = ""
) => {
  const searchParams = new URLSearchParams();
  if (industry) searchParams.set("industry", industry);
  if (specialties) searchParams.set("specialties", specialties);

  let url = getAbsoluteURL(
    `/api2/${type}/locations?${searchParams.toString()}`
  );
  if (country) {
    searchParams.set("country", country);
    url = getAbsoluteURL(`/api2/${type}/locations?${searchParams.toString()}`);
  }
  if (state) {
    searchParams.set("state", state);
    searchParams.set("country", country);
    url = getAbsoluteURL(`/api2/${type}/locations?${searchParams.toString()}`);
  }

  if (title && type === 'persons') {
    searchParams.set("designation", title);
    url = getAbsoluteURL(`/api2/${type}/locations?${searchParams.toString()}`);
  }
  try {
    const json = await fetcher(decodeURIComponent(url));
    // if (!res.ok) return []
    // const json = await res.json();
    return json;
  } catch (error) {
    return [];
  }

};

export default async function Locations({
  filters,
  type,
}: {
  filters: any;
  type: "companies" | "persons";
}) {
  const locations: string[] = [];
  if (!filters.location.city) {
    locations.push(
      ...(await getLocations(
        filters.location.country,
        filters.location.state,
        filters.industry?.[0],
        filters.industry?.[1],
        type,
        filters?.title?.length === 2 ? filters?.title?.[1] : filters?.title?.[0]
      ))
    );
  }
  return <SearchLocationsUi filters={filters} locations={locations} />;
}
