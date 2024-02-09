"use client";
import { capitalizeSpecialCharacters, getCompanySlug, getPersonCompany, getPersonSlug, slugFilters, slugify } from "@/lib/utils";
import { usePathname } from "next/navigation";
import NoUser from "../assets/no-user.png";
import ImageWithFallback from "./image-with-fallback";
import PersonCard from "./search/person-card";
import Button from "./ui/Button";
import Pagination from "./ui/pagination";

export const PersonsTable = ({
  loading,
  persons,
  page,
  totalPages,
  onPageChange,
  onLocationClick,
  onDesignationClick,
  filters,
}: any) => {
  if (!loading && !persons?.length) return <div></div>;

  const pathname = usePathname();
  const basePath = pathname.split("/").slice(0, 2).join("/");


  const handlePageChange = (page: number) => {
    if (onPageChange) {
      onPageChange(page);
      return;
    }
    window.location.href = `${pathname}?page=${page}`;
  };

  const handleDesignationClick = (designation: string) => {
    if (onDesignationClick === 'search') {
      window.location.href = `/search?query=${designation.toLowerCase().trim()}&type=designation&location=&page=1`
      return;
    }
    if (onDesignationClick) {
      onDesignationClick(designation);
      return;
    }
    const localFilters = JSON.parse(JSON.stringify(filters));
    localFilters.title = [designation];
    let link = `${basePath}/${slugFilters(localFilters)}`;
    window.location.href = link;
  };


  const handleLocationClick = (location: any, type = "") => {
    if (onDesignationClick === 'search') {
      window.location.href = `/search?query=&type=people&location=${location[type]}&page=1`
      return;
    }
    if (onLocationClick) {
      onLocationClick(location[type]);
      return;
    }
    const localFilters = JSON.parse(JSON.stringify(filters));

    if (type === "country") {
      localFilters.location['country'] = location.country
      localFilters.location['state'] = ""
      localFilters.location['city'] = ""
    }
    else if (type === "state") {
      location.country && (localFilters.location['country'] = location.country)
      localFilters.location['state'] = location?.state
      localFilters.location['city'] = ""
    }
    else if (type === "city") {
      location.country && (localFilters.location['country'] = location.country)
      location.state && (localFilters.location['state'] = location.state)
      localFilters.location['city'] = location?.city
    }

    let link = `${basePath}/${slugFilters(localFilters)}`;



    window.location.href = link;
  };

  return (
    <>
      <div className="grid gap-12 py-4 md:hidden">
        {persons.map((person: any) => (
          <PersonCard
            key={person.id}
            person={person}
            onLocationClick={onLocationClick}
            handleDesignationClick={handleDesignationClick}
          />
        ))}
      </div>
      <table className="w-full text-left text-sm border rounded hidden md:table">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3" />
            <th scope="col" className="px-6 py-3 font-semibold">
              Name
            </th>

            <th scope="col" className="px-6 py-3 font-semibold">
              Designation
            </th>
            <th scope="col" className="min-w-170px px-6 py-3 font-semibold">
              Company
            </th>
            <th scope="col" className="min-w-160px px-6 py-3 font-semibold">
              Location
            </th>
            {/* <th scope="col" className="px-6 py-3 font-semibold">
            Founded
          </th> */}
            <th scope="col" className="min-w-160px px-6 py-3 font-semibold" />
          </tr>
        </thead>
        {loading && (
          <tbody className="pt-2 px-2">
            <LoadingRow />
            <LoadingRow />
            <LoadingRow />
            <LoadingRow />
            <LoadingRow />
            <LoadingRow />
            <LoadingRow />
          </tbody>
        )}
        {!loading && (
          <tbody className="pt-2 px-2">
            {persons.map((person: any) => (
              <RenderPersonRow
                key={person.id}
                person={person}
                handleLocationClick={handleLocationClick}
                handleDesignationClick={handleDesignationClick}
              />
            ))}
          </tbody>
        )}
      </table>
      <div className="w-full flex justify-center">
        <Pagination
          currentPage={page || 1}
          totalPages={totalPages || 1}
        />
      </div>
    </>
  );
};

const RenderPersonRow = ({
  person,
  handleLocationClick,
  handleDesignationClick,
}: any) => {
  const slug = getPersonSlug(person);
  const location = person.location
  let designations = person?.designations ? person.designations : [];

  // !Keep For Future
  // Split the designation by comma or & or and or And
  // if (person.designation) {
  //   person.designation = person.designation.replace(/(\(.*\))/g, '')
  //   designations = person.designation.split(/,|&|◆|-|_| at | and | And |\/|\|/)
  // }

  let personImage = (person?.profileImageUrl && person?.profileImageUrl !== 'NULL') ? person?.profileImageUrl : NoUser


  const company = getPersonCompany(person)
  const companyName = Array.isArray(company?.companyName) ? company?.companyName?.[0] : company?.companyName;
  const companyObj = { name: capitalizeSpecialCharacters(companyName), id: company?.companyId }
  const companySlug = getCompanySlug(companyObj);

  return (
    <tr className="bg-white border-b  hover:bg-gray-50">
      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-800">
        <a href={`/contacts/${slug}`}>
          <span className="flex items-center">
            <ImageWithFallback
              className="rounded-full"
              key={personImage}
              src={personImage}
              fallbackSrc={NoUser}
              alt=""
              width={45}
              height={45}
            />
          </span>
        </a>
      </td>
      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-700 max-w-xs">
        <span className="flex items-center">
          <a href={`/contacts/${slug}`}>
            <span className="cursor-pointer text-sm text-color-4 capitalize hover:text-color-15 whitespace-normal">
              {person.firstName} {person.lastName}
            </span>
          </a>
        </span>
      </td>
      <td className="cursor-pointer px-4 py-2 capitalize text-sm" >
        {designations.map((designation: any, index: any) => (
          <>
            <span key={index} className="text-color-4 hover:underline" onClick={() => handleDesignationClick(designation)}>
              {designation.trim()}
            </span>
            {index !== designations.length - 1 && ", "}
          </>
        ))}
      </td>
      <td className="px-4 py-2 text-sm cursor-pointer text-color-5 capitalize">
        {
          !!company?.companyId ?
            (<a href={`/companies/${companySlug}`} className="text-color-4 hover:underline">{companyName || ""}</a>) :
            (<span>{companyName || ""}</span>)
        }

      </td>
      <td className="cursor-pointer px-4 py-2  capitalize" >
        {location?.city && <span className="text-color-4 hover:underline" onClick={() => handleLocationClick(location, "city")}>{`${location?.city}, `}</span>}
        {location?.state && <span className="text-color-4 hover:underline" onClick={() => handleLocationClick(location, "state")}>{`${location?.state}, `}</span>}
        {location?.country && <span className="text-color-4 hover:underline" onClick={() => handleLocationClick(location, "country")}>{`${location?.country}`}</span>}
      </td>

      <td className="px-4 py-0.5">
        <a href={`/contacts/${slug}`}>
          <Button type="button" className="!rounded-md w-[140px] !mb-0">
            View Contact
          </Button>
        </a>
      </td>
    </tr>
  );
};

const LoadingRow = () => {
  return (
    <tr className="bg-white border-b animate-pulse">
      <td className="whitespace-nowrap px-2 py-2">
        <div className="w-[45px]  rounded-full h-[45px] bg-slate-100" />
      </td>
      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-700">
        <div className=" bg-slate-100 h-4 rounded-lg" />
      </td>
      <td className="px-4 py-2 text-sm text-color-5 capitalize">
        <div className=" bg-slate-100 h-4 rounded-lg" />
      </td>
      <td className="cursor-pointer px-4 py-2 capitalize text-sm text-color-4 hover:text-color-15">
        <div className=" bg-slate-100 h-4 rounded-lg" />
      </td>
      <td className="px-4 py-2 text-sm text-color-5">
        <div className=" bg-slate-100 h-4 rounded-lg" />
      </td>
      <td className="cursor-pointer px-4 py-2 text-sm text-color-4 hover:text-color-15">
        <div className=" bg-slate-100 h-4 rounded-lg" />
      </td>
    </tr>
  );
};
