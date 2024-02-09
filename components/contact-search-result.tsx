import { Person } from "@/global";
import { capitalize, capitalizeSpecialCharacters, cn, getCompanySlug } from "@/lib/utils";
import NoUser from "../assets/no-user.png";
import ContactButton from "./contact-button";
import { Description } from "./description";
import ImageWithFallback from "./image-with-fallback";
import PersonColleagues from "./person/person-colleagues";
import PersonExperience from "./person/person-experience";
import PersonInfo from "./person/person-info";
import SimilarPersons from "./person/similar-persons";

interface IProps {
  person: Person;
  user: Boolean;
  isExtensionInstalled?: boolean;
}

export default function ContactSearchResult({ person, user, isExtensionInstalled }: IProps) {
  if (!person.firstName) return <div></div>;

  const companyObject: any = {
    name: capitalizeSpecialCharacters(person.companies?.[0]?.companyName!),
    id: person.companies?.[0]?.companyId,
  };
  const companySlug = getCompanySlug(companyObject);
  const viewCompanyUrl = `/companies/${companySlug}`;
  const name = `${person.firstName} ${person.lastName || ""}`.toLowerCase();
  const infoMessage = `to access ${capitalize(name)}'s information`;
  const designations = person.designations || [];

  return (
    <div>
      <div className="flex gap-10 md:gap-10 md:px-5 flex-wrap md:flex-nowrap mt-20 md:mt-0 items-start">
        <div className="min-w-[230px] max-w-[230px] flex-grow-1">
          <ImageWithFallback
            className="w-full h-full object-contain rounded-full "
            src={person.profileImageUrl || NoUser}
            alt={name}
            fallbackSrc={NoUser}
            width={230}
            height={230}
          />
        </div>
        <div className="w-full">
          <h2 className="text-3xl md:text-4xl mb-1 text-gray-700 capitalize text-center font-medium md:text-left">
            {name}
          </h2>
          <p className="mb-6 text-xl md:text-2xl text-color-5  capitalize text-center md:text-left">
            {designations.map((designation: any, index: any) => (
              <span key={designation}>
                <a  className="text-color-4 hover:underline" href={`/search?query=${designation}&type=designation&location=&page=1`} >
                  {designation.trim()}
                </a>
                {index !== designations.length - 1 && ", "}
              </span>
            ))}
            {/* <Link
              href={`/search?query=${person.designation}&type=designation&location=&page=1`}
              className="text-primary-purple-color hover:underline"
            >
              {person.designation}
            </Link> */}

            {person.companyName && " at "}

            {person?.companyName && (
              <a
                {...(person.companies?.[0]?.companyId ? { href: viewCompanyUrl } : {})}
                className={cn("capitalize", {
                  "text-primary-purple-color hover:underline": person.companies?.[0]?.companyId
                })}
              >
                {person.companies?.[0]?.companyName}
              </a>
            )}
          </p>
          <Description text={person.about} user={user} message={infoMessage} />
          <ContactButton href={`//${person.socialProfiles.linkedin}`} target="_blank" user={isExtensionInstalled} message={infoMessage} />

        </div>
      </div>
      <div className="m-5 my-[50px]">
        <p className="h-[0.5px] bg-[#cccaca] w-full"></p>
      </div>

      {/* @ts-expect-error Server Component */}
      <PersonInfo person={person} message={infoMessage} />

      <div className="grid gap-8 md:grid-cols-[1fr_400px]">
        <div>
          <PersonExperience
            companies={person.companies}
            education={person.education}
          />
          {/* @ts-expect-error Server Component */}
          <SimilarPersons person={person} />
        </div>
        <div>
          {/* @ts-expect-error Server Component */}
          <PersonColleagues
            company={person?.companies?.[0]}
            firstName={person.firstName}
            lastName={person.lastName}
            personId={person.id}
          />
        </div>
      </div>
    </div>
  );
}
