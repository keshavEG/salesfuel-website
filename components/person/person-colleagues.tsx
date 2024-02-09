import { Person, PersonCompany } from "@/global";
import { getPersons } from "@/lib/server/person";
import { slugify } from "@/lib/utils";
import Button from "../ui/Button";
import PersonCard from "./person-card";

export default async function PersonColleagues({
  company,
  firstName,
  lastName,
  personId,
}: {
  company?: PersonCompany;
  firstName: string;
  lastName: string;
  personId: string;
}) {
  if (!company?.companyName) return <></>;

  const persons = await getPersons(`company=${company.companyName}`)
  const colleagues = persons.items.slice(0, 6).filter((i: any) => i.id !== personId)
  const companySlug = slugify(company?.companyName) + "-" + company?.companyId;
  if (!colleagues.length) return (<></>)

  return (
    <div className="bg-[#F4F4F4] text-light text-[#585757] px-[37px] py-[30px] rounded-2xl relative select-none mt-10">
      <h2 className="text-xl font-medium mb-2">Colleagues</h2>
      <p className="text-gray-500 mb-4 text-sm">
        <span className="capitalize">{company.companyName}</span> has 800
        employees. View{" "}
        <span className="capitalize">
          {firstName} {lastName}
        </span>{" "}
        colleagues in <span className="capitalize">{company.companyName}</span>{" "}
        employee directory.
      </p>
      <div className="flex flex-col gap-1">
        {colleagues.map((people: Person) => (
          <PersonCard person={people} isBlur={false} key={people.id} />
        ))}
      </div>
      <div className=" mt-8 text-center">
        <a href={`/employee-directory/${companySlug}`}>
          <Button className="primary-button">
            <i className="mr-2"></i>
            View all colleagues
          </Button>
        </a>
      </div>
    </div>
  );
}
