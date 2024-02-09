"use client";
import GlobalSearch from "@/components/global-search";
import { cn } from "@/lib/utils";
import { SearchType } from "@/types/searchType";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export default function SearchBar({
  tiny,
  placeholder,
  entity,
}: {
  tiny?: boolean;
  placeholder?: string;
  entity?: SearchType;
}) {
  const [type, setType] = useState<SearchType>(entity || SearchType.industries);
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams()!;
  const pathname = usePathname();

  const searchHandler = async (
    query: string,
    type: string,
    location = "",
    page = 1
  ) => {
    const params = {
      query,
      type: type?.toString(),
      location,
      page: page?.toString(),
    };

    router.push("/search?" + new URLSearchParams(params), {});
  };

  useEffect(() => {
    if (searchParams.has("query")) setQuery(searchParams.get("query")!);
    if (searchParams.has("location"))
      setLocation(searchParams.get("location")!);
    if (searchParams.has("type"))
      setType(searchParams.get("type") as SearchType);
  }, [searchParams]);

  const isSearched = useMemo(() => {
    return (
      searchParams.toString().length > 0 ||
      tiny ||
      pathname.includes("contacts") ||
      pathname.includes("companies")
    );
  }, [searchParams, tiny]);

  return (
    <div
      className={cn(
        "w-full flex flex-col justify-center items-center dark:bg-gray-900 transition-all duration-200",
        {
          "md:h-[300px]": !isSearched,
          "md:h-[70px]": tiny,
        }
      )}
    >
      <GlobalSearch
        purpleTitle="Find"
        title="Companies and Contacts"
        searchHandler={searchHandler}
        location={location}
        setLocation={setLocation}
        setType={setType}
        query={query}
        setQuery={setQuery}
        type={type}
        tiny={isSearched}
        hideLocation={tiny}
        hideType={tiny}
        placeholder={placeholder}
      />
    </div>
  );
}
