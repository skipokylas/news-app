export interface ILocalization {
  ip: string;
  city: string;
  region: string;
  region_code: string;
  country: string;
  country_name: string;
  continent_code: string;
  in_eu: boolean;
  postal: string;
  latitude: number;
  longitude: number;
  timezone: string;
  utc_offset: string;
  country_calling_code: string;
  currency: string;
  languages: string;
  asn: string;
  org: string;
}

export interface ICountry {
  [key: string]: {
    name: string;
  };
}

export interface IArticle {
  source: ISource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface IArticleResponse {
  status: string;
  totalResults: number;
  articles?: IArticle[];
  message?: string;
}

export interface ISource {
  id: string;
  name: string;
}

export interface ITopHeadlinesParams {
  country?: string;
  sources?: string;
  category?: TCategories;
  q?: string;
  pageSize?: number;
  apiKey?: string;
}

export type TCategories = 'business' | 'entertainment' | 'general' | 'health' | 'science' | 'sports' | 'technology';
