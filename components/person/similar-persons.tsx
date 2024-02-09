import NoUser from "@/assets/no-user.png";
import { Person } from "@/global";
import { getPersons } from "@/lib/server/person";
import { getPersonSlug } from "@/lib/utils";
import Image from "next/image";



export default async function SimilarPersons({ person }: { person: Person }) {
  // const persons = await getPersons(`designation=${person.designation}`);
  const name = `${person.firstName} ${person.lastName || ""}`;


  let tryCount = 0
  const getSimilarPersonsByDesignation = async (locationType = 'city'): Promise<Person[]> => {
    const location: any = {
      city: person.location?.city?.toLocaleLowerCase()?.trim() || '',
      state: person.location?.state?.toLocaleLowerCase()?.trim() || '',
      country: person.location?.country?.toLocaleLowerCase()?.trim() || '',
    }
    const designation = person.designations[0]?.toLowerCase() || ''
    let response: any = await getPersons(`designation=${designation}&${locationType}=${location[locationType]}`);
    if (response.total <= 1 && tryCount < 3) {
      tryCount++
      if (locationType === 'city')
        return getSimilarPersonsByDesignation('state')
      else if (locationType === 'state')
        return getSimilarPersonsByDesignation('country')
    }
    response = response.items.filter((i: Person) => i.socialProfiles.linkedin  !== person.socialProfiles.linkedin)
    return response
  }

  const persons = await getSimilarPersonsByDesignation()
  const similarPersons = persons?.slice(0, 3) || []


  if (!similarPersons.length) return (<></>)
  return (
    <div className="bg-[#F4F4F4] p-5 md:p-10 rounded-xl md:rounded-2xl">
      <h2 className="text-xl text-gray-600 font-medium mb-8">
        People similar to
        <span className="text-primary-purple-color ml-2 mb-4 capitalize">
          {name}
        </span>
      </h2>
      <div className="grid gap-3 xl:grid-cols-3  justify-center">
        {similarPersons.map((people: any) => (
          <PersonCard people={people} key={people.id} />
        ))}
      </div>
    </div>
  );
}

function PersonCard({ people }: { people: Person }) {
  if (!people?.socialProfiles?.linkedin) return <></>;

  const personSlug = getPersonSlug(people);

  return (
    <a href={`/contacts/${personSlug}`} key={people.id} className="flex-grow">
      <div className="text-center flex-1 flex flex-col items-center justify-between rounded-2xl bg-white px-10 pt-6 font-normal border p-4">
        <div>
          <div className="text-center">
            <Image
              src={people.profileImageUrl || NoUser}
              alt={people.firstName}
              width={100}
              height={100}
              className="object-cover rounded-full h-[100px] w-[100px] m-auto"
            />
          </div>

          <p className="text-gray-700 text-lg font-medium capitalize mt-2">
            {people.firstName} {people.lastName}
          </p>
          <p className="text-gray-500 text-xs font-semibold capitalize">
            {people.designation}
          </p>
          <div className="mt-5">
            <button className="py-1.5 px-4 bg-primary text-white rounded-2xl text-sm font-semibold">
              View Profile
            </button>
          </div>
        </div>
      </div>
    </a>
  );
}
