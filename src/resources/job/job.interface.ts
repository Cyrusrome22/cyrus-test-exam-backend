interface Job {
  id: string;
  jobTitle: string;
  annualSalary: number;
  currency: string;
  company: string;
  email: string;
  picture: string;
  address: string;
  phone: string;
  companyDescription: string;
  jobDescription: string;
  requirements: string[];
}

export interface JobQuery {
  q?: string;
  page: number;
  limit: number;
}

export interface JobSearchResult {
  data: Job[];
  page: number;
  limit: number;
  total: number;
  totalPage: number;
}

export default Job;
