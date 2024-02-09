import { fetcher } from "@/lib/server/utils";
import { getAbsoluteURL } from "@/lib/utils";
import SearchDesignationsUi from "./search-designations-ui";

const getDesignations = async (
  country = "",
  state = "",
  city = "",
  industry = "",
  title = ""
) => {
  const searchParams = new URLSearchParams();
  if (country) searchParams.set("country", country);
  if (state) searchParams.set("state", state);
  if (city) searchParams.set("city", city);
  if (industry) searchParams.set("industry", industry);
  if (title) searchParams.set("title", title);
  try {
    const url = getAbsoluteURL(`/api2/persons/designations?${searchParams.toString()}`)
    const json = await fetcher(decodeURIComponent(url));
    return json;
  } catch (error) {
    return [];
  }
};

export default async function Designations({ filters }: any) {
  const designations =
    filters.title.length <= 1
      ? await getDesignations(
          filters.location.country,
          filters.location.state,
          filters.location.city,
          filters.industry[0],
          filters.title[0]
        )
      : [];
  return <SearchDesignationsUi filters={filters} designations={designations} />;
}
