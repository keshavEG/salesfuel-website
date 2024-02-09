import { getPersons } from "@/lib/server/person";
import { getExtensionStatus } from "@/lib/session";
import LimitExceededPopup from "../limit-exceeded-popup";
import { PersonsTable } from "../PersonsTable";


export default async function CompanyEmployeesTable({
  companyName,
  page,
}: {
  companyName: string;
  page: string;
}) {
  const isExtensionInstalled = await getExtensionStatus();
  let persons;
  try {
    persons = await getPersons(`company=${companyName.trim()}&page=${page}`);
  } catch (error) {
    persons = { items: [], page: 1, totalPages: 1 };
  }

  return (
    <>
      <PersonsTable
        loading={false}
        persons={persons.items || []}
        onPageChange={false}
        page={persons?.page}
        totalPages={persons?.totalPages}
        onLocationClick={'search'}
        onDesignationClick={'search'}
        slug={[]}
      />
      {+page >= 2 && !isExtensionInstalled && (
        <LimitExceededPopup show={true} />
      )}
    </>
  );
}
