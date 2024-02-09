export enum SearchType {
  companies = "companies",
  people = "people",
  industries = "industries",
  designation = "designation",
}

export interface IFilters {
  location: {
    city?: string;
    state?: string;
    country?: string;
  };
  industry: string[];
}

export interface IPeopleFilters extends IFilters {
  title: string[];
}
