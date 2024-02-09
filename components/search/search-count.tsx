import { fetcher } from "@/lib/server/utils";
import { formatNumber, getAbsoluteURL } from "@/lib/utils";

const getCount = async (searchQuery: string) => {
  const url = getAbsoluteURL(`/api2/persons/count?${searchQuery}`);
  const json = await fetcher(decodeURIComponent(url));
  return json;
};

export default async function SearchCount({ searchQuery }: any) {
  const count = await getCount(searchQuery);
  return (
    <p className="mt-2 text-sm font-semibold">
      Total People: {formatNumber(count?.count)}
    </p>
  );
}
