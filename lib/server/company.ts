import { getAbsoluteURL } from "../utils";
import { fetcher } from "./utils";

interface IGetCompanies {
  page?: number;
  query?: string;
  location?: string;
  type?: string;
  country?: string;
  state?: string;
  city?: string;
  industry?: string;
  specialties?: string;
}
export async function getCompanies(filters: IGetCompanies) {
  const {
    page = 1,
    query,
    location,
    country,
    state,
    city,
    type,
    industry,
    specialties,
  } = filters;

  const searchParams = new URLSearchParams();
  searchParams.set("page", page.toString());

  if (query) searchParams.set("query", query);

  if (location) searchParams.set("location", location);

  if (country) searchParams.set("country", country);

  if (state) searchParams.set("state", state);

  if (city) searchParams.set("city", city);

  if (type) searchParams.set("type", type);

  if (industry) searchParams.set("industry", industry);

  if (specialties) searchParams.set("specialties", specialties);

  const url = getAbsoluteURL(
    `/api2/companies/search?${searchParams.toString()}`
  );

  try {
    const companies = await fetcher(url);
    return companies;
  } catch (error) {
    return { items: [], total: 0, totalPages: 0, page };
  }
}
