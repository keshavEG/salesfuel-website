export type Person = {
  id: string;
  firstName: string;
  lastName: string;
  middleName1: string;
  middleName2: string;
  profileImageUrl: string;
  subRole: string;
  industry: string;
  designation: string;
  mobileNumber: string;
  phoneNumber: string;
  birthYear: string;
  birthDate: string;
  birthMonth?: string;
  interests: string;
  gender: string;
  skills: string;
  seniority: string;
  isInvertor: boolean;
  emails: PersonEmail[];
  location: PersonLocation;
  education: PersonEducation[];
  socialProfiles: PersonSocialProfiles;
  funds: PersonFund[];
  companies: PersonCompany[];
  about?: string;
  isEmailViewed?: boolean;
  companyName?: string;
  companyLinkedUsername?: string;
  companyLinkedId?: string;
  industries: string[];
  designations: string[];
};

export type PersonCompany = {
    companyId: string;
    companyName: string;
    companyWebsite: string;
    logoUrl: string;
    isCurrent: boolean;
    joinedAt: string;
    leftAt: string;
};

export type PersonEducation = {
    organization: string;
    url?: string;
    logoUrl?: string;
    degree: string;
    fieldOfStudy: string;
    startDate: string;
    endDate: string;
    description: string;
};

export type PersonEmail = {
    email: string;
    type: string;
    status?: string;
};

export type PersonFund = {
    companyId: string;
    companyName: string;
    companyWebsite: string;
    amount: string;
    type: string;
    date: string;
};

export type PersonLocation = {
    address: string;
    city: string;
    state: string;
    region: string;
    country: string;
    continent: string;
    zipCode: string;
    geo: string;
};

export type PersonSocialProfiles = {
    facebook: string;
    instagram: string;
    github: string;
    linkedin: string;
    skype: string;
    twitter: string;
    youtube: string;
    website: string;
};


export type Company = {
    id: string;
    name: string;
    description: string;
    website: string;
    websiteUrl?: string;
    linkedinId?: string;
    foundedYear: string;
    industry: string;
    logoUrl: string;
    wikiUrl: string;
    phoneNumber: string;
    mobileNumber: string;
    landlineNumber: string;
    technologies: string;
    subpages: Subpage[];
    recentFunding: string;
    recentInvestor: string;
    emails: Email[];
    meta: Meta;
    linkedin: Linkedin;
    socialProfiles: SocialProfiles;
    address: Address[];
    funds: Fund[];
    headquarter: Address;
    specialties: string[];
};

export type Address = {
    address: string;
    name: string;
    website: string;
    type: string;
    continent: string;
    country: string;
    state: string;
    city: string;
    zipCode: string;
    region: string;
};

export type Email = {
    email: string;
    type: string;
};

export type Fund = {
    companyName: string;
    companyWebsite: string;
    amount: string;
    series: string;
    rounds: string;
    fundingOn: string;
    invertor: string;
    investorLogo?: string;
    type: string;
};

export type Linkedin = {
    companyId: string;
    about: string;
    employeeSizeRange: string;
    employeeSizeExact: string;
    companyUsername: string;
    specialties: string;
};

export type Meta = {
    title: string;
    description: string;
    keywords: string;
    image: string;
};

export type SocialProfiles = {
    facebook: string;
    instagram: string;
    github: string;
    linkedin: string;
    skype: string;
    twitter: string;
    youtube: string;
    crunchbase: string;
};

export type Subpage = {
    companyName: string;
    url: string;
    domain: string;
    name: string;
    about: string;
    logo: string;
};

