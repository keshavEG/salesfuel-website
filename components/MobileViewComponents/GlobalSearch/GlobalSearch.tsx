// import { Field, Formik } from "formik";
import useOnClickOutside from "@/hooks/useOutsideClick";
import { SearchType } from "@/types/searchType";
import Image from "next/image";
import { FC, useRef, useState } from "react";
import DownArrow from "./DownArrow.svg";
import classes from "./GlobalSearch.module.scss";

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
}

const GlobalSearchMobile: FC<IProps> = function (props): JSX.Element {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const ref = useRef<any>();

  useOnClickOutside(ref, () => setIsDropdownOpen(false));

  const selectOption = (type: string) => {
    setIsDropdownOpen(false);
    props.setType(type);
  };

  return (
    <div>
      <div className={classes["Title"]}>
        <span className="blue"> {props.purpleTitle}</span> {props.title}
      </div>

      <div className={classes["FormContainer"]}>
        <div className={classes["SelectContainer"]}>
          <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            {props.type.toLowerCase()}

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
          <Image src={DownArrow} alt="" />
        </div>
        <div>
          <input
            type="search"
            id="search-dropdown"
            className="block py-4 px-7 w-full z-20 text-sm text-gray-900 bg-gray-50  border-l-gray-50 border-l-2 border border-gray-300  focus:outline-none focus:ring-0 focus:border"
            placeholder="Search companies, contacts and industries"
            required
            value={props.query}
            onChange={(e) => props.setQuery(e.target.value)}
            onKeyDown={(e) =>
              e.code === "Enter" &&
              props.searchHandler(props.query, props.type, props.location)
            }
          />
        </div>
        <div>
          <input
            type="location"
            id="location"
            className="block py-4 px-4 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300  focus:outline-none focus:ring-0 focus:border"
            placeholder="Location"
            value={props.location}
            onChange={(e) => props.setLocation(e.target.value)}
            onKeyDown={(e) =>
              e.code === "Enter" &&
              props.searchHandler(props.query, props.type, props.location)
            }
          />
        </div>
        <button
          type="submit"
          onClick={() =>
            props.searchHandler(props.query, props.type, props.location)
          }
          className={classes["PrimaryButton"]}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default GlobalSearchMobile;
