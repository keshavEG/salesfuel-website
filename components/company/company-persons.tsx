import { Company, Person } from "@/global";
import { getPersons } from "@/lib/server/person";
import { fetcher } from "@/lib/server/utils";
import { getAbsoluteURL, getCompanySlug } from "@/lib/utils";
import PersonCard from "../person/person-card";
import Button from "../ui/Button";

const getCompanyCeo = async (id: string) => {
  const res = await fetcher(getAbsoluteURL(`/api2/elastic/founder-ceo/${id}`));
  return res
};


export default async function CompanyPersons({
  company,
}: {
  company: Company;
}) {
  const ceo = await getCompanyCeo(company?.id);
  const companyName = company?.name?.trim()
  const persons = await getPersons(`company=${companyName}&page=1`);
  const colleagues = persons.items.slice(0, 5);
  return (
    <div className="flex flex-col gap-8">
      {ceo?.firstName && (
        <div>
          <div className="bg-[#F4F4F4] text-light text-[#585757] px-[37px] py-[30px] rounded-2xl cursor-pointer">
            <h2 className="mb-[24px] text-2xl capitalize">
              <span className="text-primary-purple-color mr-2">
                Founder/ Ceo
              </span>
              @ {company.name}
            </h2>
            <PersonCard person={ceo} isBlur={false} />
          </div>
        </div>
      )}
      {colleagues?.length > 0 && (
        <div className="bg-[#F4F4F4] text-light text-[#585757] px-[37px] py-[30px] rounded-2xl relative select-none">
          <h2 className="mb-[24px] text-3xl">View Employees</h2>
          <div className="flex flex-col gap-1">
            {colleagues?.map((people: Person) => (
              <PersonCard person={people} isBlur={false} />
            ))}
          </div>
          <div className=" mt-8 text-center">
            <a href={`/employee-directory/${getCompanySlug(company)}`}>
              <Button className="primary-button">
                <i className="mr-2"></i>
                View all employees
              </Button>
            </a>
          </div>
          {/* {colleagues?.length > 1 && !user && (
            <Link href={`/login`}>
              <div className="!mt-[35px] flex justify-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full">
                <Button className="primary-button py-[2px] px-8 text-medium">
                  <i className="mr-2"></i>
                  Sign in to view more
                </Button>
              </div>
            </Link>
          )} */}
        </div>
      )}
    </div>
  );
}
