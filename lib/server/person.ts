import { getAbsoluteURL } from "../utils";
import { fetcher } from "./utils";

export async function getPersons(searchQuery: string) {
  try {
    const url = getAbsoluteURL(`/api2/persons/search?${searchQuery}`);
    const persons = await fetcher(decodeURIComponent(url));
    return persons;
  } catch (error) {
    return {
      items: [],
      totalPages: 0,
      total: 0,
      page: 0,
    };
  }
}
