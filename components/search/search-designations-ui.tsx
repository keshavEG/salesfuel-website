"use client";

import { slugFilters } from "@/lib/utils";
import { IPeopleFilters } from "@/types/searchType";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import Button from "../ui/Button";

export default function SearchDesignationsUi({
  designations,
  filters,
}: {
  designations: string[];
  filters: IPeopleFilters;
}) {
  const pathname = usePathname();
  const basePath = pathname.split("/").slice(0, 2).join("/");
  const [showAll, setShowAll] = useState(false);

  const capitalizeString = (input = "") => {
    if (input.length <= 3) {
      // If the input has a length of 3 characters or less, capitalize the entire string.
      return input.toUpperCase();
    } else {
      // Otherwise, capitalize only the first letter and keep the rest of the string as is.
      return input.replace(/\b\w/g, (char) => char.toUpperCase());
    }
  };
  const baseFilters = JSON.parse(JSON.stringify(filters))
  baseFilters.title = []
  const breadcrumbs = useMemo(() => {
    let links = [
      {
        name: "Job Titles",
        link: `${basePath}/${slugFilters(baseFilters)}`,
      },
    ];
    const titles = filters?.title || [];
    const _links = titles.map((title, index) => {
      let localFilters = JSON.parse(JSON.stringify(filters));
      localFilters.title = localFilters.title.slice(0, index + 1);
      return {
        name: decodeURIComponent(title.replace("-", " ")) || "",
        link: `${basePath}/${slugFilters(localFilters)}`,
      };
    });
    links = [...links, ..._links];
    return links;
  }, [filters]);

  return (
    <section className="rounded shadow-[rgba(7,_65,_210,_0.1)_0px_0px_20px] text-gray-700">
      <div className="px-10 py-4 border-b">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center ">
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
                  {capitalizeString(breadcrumb.name)}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
      <div className="px-10 pt-6 pb-10">
        <ul
          className={`grid grid-cols-2 md:grid-cols-3 gap-6 overflow-hidden ${showAll ? "" : "max-h-[220px]"
            }`}
        >
          {designations.map((designation) => {
            const localFilters = JSON.parse(JSON.stringify(filters));
            if (filters.title?.length === 1) {
              localFilters.title[1] = encodeURIComponent(designation);
            } else {
              localFilters.title = [designation];
            }
            // localFilters.title = [designation];
            let link = `${basePath}/${slugFilters(localFilters)}`;
            return (
              <li
                key={designation}
                className="text-blue-600 hover:underline cursor-pointer"
              >
                <a href={link}>
                  {capitalizeString(designation)}
                </a>
              </li>
            );
          })}
        </ul>
        {designations.length > 15 && (
          <Button
            className="!rounded mt-4"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less Job Titles" : "Show All Job Titles"}
          </Button>
        )}
      </div>
    </section>
  );
}
