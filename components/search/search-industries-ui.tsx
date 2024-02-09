"use client";

import { slugFilters } from "@/lib/utils";
import { IFilters } from "@/types/searchType";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import Button from "../ui/Button";

export default function SearchIndustriesUi({
  industries,
  filters,
}: {
  industries: string[];
  filters: IFilters;
}) {
  const pathname = usePathname();
  const basePath = pathname.split("/").slice(0, 2).join("/");
  const [showAll, setShowAll] = useState(false);

  const baseFilters = JSON.parse(JSON.stringify(filters))
  baseFilters.industry = []

  const breadcrumbs = useMemo(() => {
    let links = [
      {
        name: "Industries",
        link: `${basePath}/${slugFilters(baseFilters)}`,
      },
    ];
    const _links = filters.industry?.map((industry, index) => {
      let localFilters = JSON.parse(JSON.stringify(filters));
      localFilters.industry = localFilters.industry.slice(0, index + 1);
      return {
        name: industry.replace("-", " ") || "",
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
                  {breadcrumb.name}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        {/* <h4 className="text-lg font-semibold">Industries</h4> */}
      </div>
      <div className="px-10 pt-6 pb-10">
        <ul
          className={`grid grid-cols-2 md:grid-cols-3 gap-6 overflow-hidden ${showAll ? "" : "max-h-[220px]"
            }`}
        >
          {industries.map((industry) => {
            const localFilters = JSON.parse(JSON.stringify(filters));
            if (filters.industry?.length === 1 && !pathname.includes("people")) {
              localFilters.industry[1] = industry;
            } else if (filters.industry?.length === 2) {
              localFilters.industry[2] = industry;
            } else {
              localFilters.industry = [industry];
            }
            let link = `${basePath}/${slugFilters(localFilters)}`;
            return (
              <li
                key={industry}
                className="text-blue-600 hover:underline cursor-pointer capitalize"
              >
                <a href={link}>
                  {industry}
                </a>
              </li>
            );
          })}
        </ul>
        {industries.length > 15 && (
          <Button
            className="!rounded mt-4"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less Industries" : "Show All Industries"}
          </Button>
        )}
      </div>
    </section>
  );
}
