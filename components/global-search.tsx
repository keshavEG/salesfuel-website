import NoCompany from "@/assets/no-company.png";
import { useDebounce } from "@/hooks/useDebounce";
import useOnClickOutside from "@/hooks/useOutsideClick";
import { cn, getCompanySlug, getPersonSlug } from "@/lib/utils";
import { SearchType } from "@/types/searchType";
import { FC, useEffect, useRef, useState } from "react";
import ImageWithFallback from "./image-with-fallback";
import NoUser from "@/assets/no-user.png";
import { fetcher } from "@/lib/utils";

interface IProps {
  purpleTitle: string;
  title: string;
  searchHandler: any;
  type: SearchType;
  setType: any;
  location?: string;
  setLocation?: any;
  query?: string;
  setQuery?: any;
  tiny?: boolean;
  hideLocation?: boolean;
  hideType?: boolean;
  placeholder?: string;
}

const GlobalSearch: FC<IProps> = function (props): JSX.Element {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const ref = useRef<any>();
  const searchBtnRef = useRef<any>();
  const [isQueryTouched, setIsQueryTouched] = useState(false);
  const [isLocationTouched, setIsLocationTouched] = useState(false);

  useOnClickOutside(ref, () => setIsDropdownOpen(false));

  const selectOption = (type: string) => {
    setIsDropdownOpen(false);
    props.setType(type);
  };

  const handleSearch = () => {
    props.searchHandler(props.query, props.type, props.location);
  };

  return (
    <div className={cn("max-w-full lg:max-w-4xl py-8 w-full px-4")}>
      {!props.tiny && (
        <h2 className="text-3xl lg:text-4xl mb-[34px] text-[#585757] text-center">
          <span className="mr-3 text-primary-purple-color">
            {props.purpleTitle}
          </span>
          {props.title}
        </h2>
      )}

      <div className="w-full max-w-[800px]">
        <div className="flex flex-col md:flex-row gap-4 md:gap-0">
          {!props.hideType && (
            <div className="relative w-full md:w-[125px]">
              <button
                id="dropdown-button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                data-dropdown-toggle="dropdown"
                className="flex-shrink-0 w-full capitalize z-10 inline-flex items-center py-4 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border justify-between border-gray-300 rounded-lg md:rounded-r-none hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                type="button"
              >
                {props.type.toLowerCase()}
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              {isDropdownOpen && (
                <div
                  ref={ref}
                  id="dropdown"
                  onBlur={() => setIsDropdownOpen(false)}
                  className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 !top-[-15px]"
                  style={{
                    position: "absolute",
                    inset: "0px auto auto 0px",
                    margin: 0,
                    transform: "translate3d(4.5px, 72px, 0px)",
                  }}
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdown-button"
                  >
                    {Object.keys(SearchType).map((type) => (
                      <li key={type}>
                        <button
                          onClick={() => selectOption(type)}
                          type="button"
                          className="inline-flex capitalize w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          {type.toLowerCase()}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          <div className="relative w-full">
            <label
              htmlFor="search-dropdown"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search companies people
            </label>
            <input
              type="search"
              id="search-dropdown"
              className={cn(
                "block py-4 px-4 w-full min-w-[250px] z-20 text-sm text-gray-900 bg-gray-50  md:border-l-gray-300 border-l border border-gray-300 rounded-lg md:rounded-r-none  focus:outline-none focus:ring-0 focus:border-gray-300",
                {
                  "md:rounded-none md:border-l-gray-50": !props.hideType,
                  "py-2.5": props.hideType,
                }
              )}
              placeholder={
                props.placeholder || "Find companies and contacts"
              }
              required
              value={props.query}
              onFocus={() => setIsQueryTouched(true)}
              onChange={(e) => props.setQuery(e.target.value)}
              onKeyDown={(e) =>
                e.code === "Enter" && handleSearch()
              }
            />
            {isQueryTouched && (
              <SuggestionsDropdown
                query={props.query!}
                setQuery={props.setQuery}
                type={props.type}
                handleSearch={handleSearch}
              />)}
          </div>
          {!props.hideLocation && (
            <div className="relative w-full md:w-[300px]">
              <input
                type="location"
                id="location"
                className="block py-4 px-4 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300  focus:outline-none focus:ring-0 focus:border md:border-l-0 md:rounded-none"
                placeholder="Location"
                value={props.location}
                onFocus={() => setIsLocationTouched(true)}
                onChange={(e) => props.setLocation(e.target.value)}
                onKeyDown={(e) =>
                  e.code === "Enter" && handleSearch()
                }
              />
              {isLocationTouched && (
                <LocationSuggestionsDropdown
                  query={props.location!}
                  setQuery={props.setLocation}
                  type={props.type}
                  handleSearch={handleSearch}
                />)}
            </div>
          )}
          <button
            type="button"
            ref={searchBtnRef}
            className={cn(
              "flex primary-button mt-4 md:mt-0  gap-2 items-center justify-center top-0 py-3 md:py-4 px-7 text-sm font-medium text-white bg-blue-700 !rounded-lg md:!rounded-l-none border border-[#6c2bd9] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
              {
                "md:right-0": !props.hideLocation,
                "!py-2.5": props.hideLocation,
              }
            )}
            onClick={handleSearch}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span className="text-lg md:sr-only">Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

interface SuggestionsDropdownProps {
  query: string;
  setQuery: (query: string) => void;
  type: SearchType;
  handleSearch?: any;
}
function SuggestionsDropdown({
  query,
  setQuery,
  type,
  handleSearch
}: SuggestionsDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const [loading, setLoading] = useState(false);
  const ref = useRef<any>();
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const debouncedQuery = useDebounce<string>(query, 300);
  const [selectedSuggestion, setSelectedSuggestion] = useState("");

  const getSuggestions = async () => {
    if (query.length < 3 || selectedSuggestion === query) {
      setSuggestions([]);
      setIsDropdownOpen(false);
      return;
    }
    setLoading(true);
    setIsDropdownOpen(true);

    const searchParams = new URLSearchParams(
      `keyword=${encodeURIComponent(debouncedQuery)}&field=name&index=companies`
    );

    if (type === SearchType.industries) {
      searchParams.set("index", "companies");
      searchParams.set("field", "industry");
    }

    if (type === SearchType.people) {
      searchParams.set("index", "persons");
      searchParams.set("field", "firstName");
    }

    if (type === SearchType.designation) {
      searchParams.set("index", "persons");
      searchParams.set("field", "designations");
    }

    const data = await fetcher(
      `/api/elastic/suggestions?${searchParams.toString()}`
    );
    // const data = await res.json();
    setSuggestions(data.map((suggestion: any) => suggestion));
    setLoading(false);
  };

  const handleSuggestionClick = (suggestion: any) => {
    if (type === SearchType.companies) {
      const slug = getCompanySlug({
        name: suggestion.suggestion,
        id: suggestion.id,
      });
      window.open(`/companies/${slug}`);
    }

    if (type === SearchType.people) {
      const slug = getPersonSlug({
        firstName: suggestion.suggestion.split(" ")?.[0] || "",
        lastName: suggestion.suggestion.split(" ")?.[1] || "",
        id: suggestion.id,
      });
      window.open(`/contacts/${slug}`);
    }
    setQuery(suggestion.suggestion);
    setSelectedSuggestion(suggestion.suggestion);
    setSuggestions([]);
    setIsDropdownOpen(false);
  };

  useOnClickOutside(ref, () => setIsDropdownOpen(false));

  useEffect(() => {
    getSuggestions();
  }, [debouncedQuery]);

  if (!isDropdownOpen || selectedSuggestion === query || (!loading && !suggestions.length))
    return null;
  return (
    <div
      ref={ref}
      id="dropdown"
      onBlur={() => setIsDropdownOpen(false)}
      className="z-10 bg-gray-50 divide-y divide-gray-100 rounded-b-lg border border-t-0 shadow-2xl shadow-gray-200 w-full dark:bg-gray-700 !top-[-15px] relative"
      style={{
        position: "absolute",
        inset: "0px auto auto 0px",
        margin: 0,
        transform: "translate3d(0px, 68px, 0px)",
      }}
    >
      <ul
        className="pb-2 text-sm text-gray-700 dark:text-gray-200 max-h-[300px] overflow-y-auto mb-8"
        aria-labelledby="dropdown-button"
      >
        {/* Show Loading State */}
        {loading && Array.from({ length: 5 }).map((_, index) => (
          <li key={index}>
            <button
              type="button"
              className="inline-flex text-left items-center gap-4 capitalize w-full px-4 py-2"
            >
              <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse" />
              <div className="flex-1">
                <div className="w-40 h-4 bg-gray-200 rounded-full animate-pulse" />
                <div className="w-24 h-4 bg-gray-200 rounded-full animate-pulse mt-2" />
              </div>
            </button>
          </li>
        ))}
        {suggestions.length !== 0 && suggestions.map((suggestion, index) => (
          <li key={suggestion + index}>
            <button
              onClick={() => handleSuggestionClick(suggestion)}
              type="button"
              className="inline-flex text-left items-center gap-4 capitalize w-full px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              {(type === SearchType.people ||
                type === SearchType.companies) && (
                  <ImageWithFallback
                    key={suggestion.logo || (type === SearchType.people ? NoUser : NoCompany)}
                    src={suggestion.logo || (type === SearchType.people ? NoUser : NoCompany)}
                    fallbackSrc={type === SearchType.people ? NoUser : NoCompany}
                    alt={suggestion.suggestion}
                    width="30"
                    height="30"
                    className="rounded-full"
                  />
                )}
              <div>
                <p>{suggestion.suggestion.toLowerCase()}</p>
                {(type === SearchType.people ||
                  type === SearchType.companies) && (
                    <small>
                      {[
                        suggestion.location?.city,
                        suggestion.location?.region,
                        suggestion.location?.county,
                      ]
                        .filter(Boolean)
                        .join(", ")}
                    </small>
                  )}
              </div>
            </button>
          </li>
        ))}
      </ul>
      <div className="absolute bottom-0 w-full bg-gray-50 hover:bg-gray-200  text-center text-color-4 font-semibold py-2 cursor-pointer rounded-b-lg" onClick={() => {
        handleSearch()
        setIsDropdownOpen(false)
      }}>
        See all results
      </div>
    </div>
  );
}
function LocationSuggestionsDropdown({
  query,
  setQuery,
  type,
  handleSearch
}: SuggestionsDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const ref = useRef<any>();
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const debouncedQuery = useDebounce<string>(query, 500);
  const [selectedSuggestion, setSelectedSuggestion] = useState("");

  const getSuggestions = async () => {
    if (query.length < 3 || selectedSuggestion === query) {
      setSuggestions([]);
      return;
    }

    const searchParams = new URLSearchParams(
      `keyword=${encodeURIComponent(debouncedQuery)}&field=location&index=companies`
    );

    if (type === SearchType.industries) {
      searchParams.set("index", "companies");
      searchParams.set("field", "location");
    }

    if (type === SearchType.people) {
      searchParams.set("index", "persons");
      searchParams.set("field", "location");
    }

    if (type === SearchType.designation) {
      searchParams.set("index", "persons");
      searchParams.set("field", "location");
    }

    const data = await fetcher(
      `/api/elastic/suggestions?${searchParams.toString()}`
    );
    setSuggestions(data.map((suggestion: any) => suggestion.suggestion).filter(Boolean));
    setIsDropdownOpen(true);
  };

  const handleSuggestionClick = (suggestion: any) => {
    setQuery(suggestion);
    setSelectedSuggestion(suggestion);
    setSuggestions([]);
    setIsDropdownOpen(false);
  };

  useOnClickOutside(ref, () => setIsDropdownOpen(false));

  useEffect(() => {
    getSuggestions();
  }, [debouncedQuery]);

  if (!isDropdownOpen || !suggestions.length || selectedSuggestion === query)
    return null;
  return (
    <div
      ref={ref}
      id="dropdown"
      onBlur={() => setIsDropdownOpen(false)}
      className="z-10 bg-gray-50 divide-y divide-gray-100 rounded-b-lg border border-t-0 shadow-2xl shadow-gray-200 w-full dark:bg-gray-700 !top-[-15px] relative"
      style={{
        position: "absolute",
        inset: "0px auto auto 0px",
        margin: 0,
        transform: "translate3d(0px, 68px, 0px)",
      }}
    >
      <ul
        className="pb-2 text-sm text-gray-700 dark:text-gray-200 max-h-[300px] overflow-y-auto mb-8"
        aria-labelledby="dropdown-button"
      >
        {suggestions.map((suggestion, index) => (
          <li key={suggestion + index}>
            <button
              onClick={() => handleSuggestionClick(suggestion)}
              type="button"
              className="inline-flex text-left items-center gap-4 capitalize w-full px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <div>
                <p>{suggestion.toLowerCase()}</p>

              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GlobalSearch;
