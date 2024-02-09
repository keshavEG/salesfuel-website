"use client";
import Button from "@/components/ui/Button";
import { slugFilters } from "@/lib/utils";
import { IFilters } from "@/types/searchType";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

export default function SearchLocationsUi({
  locations,
  filters,
}: {
  locations: string[];
  filters: IFilters;
}) {
  const pathname = usePathname();
  const basePath = pathname.split("/").slice(0, 2).join("/");
  const [showAll, setShowAll] = useState(false);

  const baseFilters = JSON.parse(JSON.stringify(filters))
  delete baseFilters.location
  const breadcrumbs = useMemo(() => {
    let links = [
      {
        name: "Locations",
        link: `${basePath}/${slugFilters(baseFilters)}`,
      },
    ];
    const _links = Object.keys(filters.location).reverse().map((locationType) => {
      let localFilters = JSON.parse(JSON.stringify(filters));
      if (locationType === 'country') {
        localFilters.location = {
          country: localFilters.location.country,
          state: "",
          city: "",
        }
      }
      if (locationType === 'state') {
        localFilters.location = {
          country: localFilters.location.country,
          state: localFilters.location.state,
          city: "",
        }
      }
      if (locationType === 'city') {
        localFilters.location = {
          country: localFilters.location.country,
          state: localFilters.location.state,
          city: localFilters.location.city,
        }
      }
      const name = filters.location[locationType].replace("-", " ") || "";
      return {
        name,
        link: `${basePath}/${slugFilters(localFilters)}`,
      };
    });
    links = [...links, ..._links];
    return links.filter((link) => link.name);
  }, [filters]);

  return (
    <section className="rounded shadow-[rgba(7,_65,_210,_0.1)_0px_0px_20px] text-gray-700">
      <div className="px-10 py-3 border-b">
        {breadcrumbs.map((breadcrumb, index) => (
          <li className="inline-flex items-center" key={breadcrumb.name}>
            {index !== 0 && (
              <svg
                className="w-3 h-3 text-gray-400 mx-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            )}
            <a
              href={breadcrumb.link}
              className="inline-flex items-center capitalize text-lg font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              {breadcrumb.name}
            </a>
          </li>
        ))}
      </div>
      <div className="px-10 pt-6 pb-10">
        <ul
          className={`grid grid-cols-2 md:grid-cols-3 gap-6 overflow-hidden ${showAll ? "" : "max-h-[220px]"
            }`}
        >
          {locations.map((location) => {
            const localFilters = JSON.parse(JSON.stringify(filters));
            const locationsLength = Object.values(filters.location).filter(Boolean).length;
            if (locationsLength === 1) {
              localFilters.location.state = location;
            } else if (locationsLength === 2) {
              localFilters.location.city = location;
            } else {
              localFilters.location.country = location;
            }
            let link = `${basePath}/${slugFilters(localFilters)}`;
            return (
              <li
                key={location}
                className="text-blue-600 hover:underline cursor-pointer capitalize"
              >
                <a href={link}>
                  {location}
                </a>
              </li>
            );
          })}
        </ul>
        {locations.length > 15 && (
          <Button
            className="!rounded mt-4"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less Location" : "Show All Locations"}
          </Button>
        )}
      </div>
    </section>
  );
}
