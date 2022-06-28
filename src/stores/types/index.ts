import {actionTypes} from '../constants';

export interface GlobalSummaryType {
  NewConfirmed: string;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
  Date: string;
}

export interface CountryType {
  ID: string;
  Country: string;
  CountryCode: string;
  Slug: string;
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
  Date: string;
  Premium: {};
}

export interface FetchCovidStatisticsResponse {
  ID: string;
  Message: string;
  Global: GlobalSummaryType;
  Countries: [CountryType];
  Date?: string;
}

export interface CovidWorldTotalStatsByDate {
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
  Date: string;
}

export interface FetchCovidRequest {
  type: typeof actionTypes.GET_COVID_STATS_DATA;
}

export interface FetchCovidStatsSuccess {
  type: typeof actionTypes.FETCHING_COVID_STATS_DATA_SUCCESS;
  payload: FetchCovidStatisticsResponse;
}

export interface FetchCovidStatsFailure {
  type: typeof actionTypes.FETCHING_OVID_STATS_DATA_FAILURE;
}

export interface CovidStatsStateType {
  isFetching: boolean;
  data: FetchCovidStatisticsResponse | null;
  error: boolean;
}

export interface CovidStatsReducerActionType {
  type: keyof typeof actionTypes;
  payload: FetchCovidStatisticsResponse;
}

export interface CovidStatsStore {
  covidStats: any;
  fetchCovidStats: (
    serviceUrl: string,
  ) => Promise<FetchCovidStatisticsResponse>;
}

export type ApiResponseTypes =
  | FetchCovidStatisticsResponse
  | CovidWorldTotalStatsByDate;
