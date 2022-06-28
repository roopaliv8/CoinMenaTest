import {http} from './api';
import {
  FetchCovidStatisticsResponse,
  CovidWorldTotalStatsByDate,
} from '../types';

export const fetchCovidStatsApi = async (
  requestUrl: string,
): Promise<FetchCovidStatisticsResponse> => {
  const {data} = await http.get<FetchCovidStatisticsResponse>(`/${requestUrl}`);
  return data;
};

export const fetchCovidWordsStats = async (
  requestUrl: string,
): Promise<CovidWorldTotalStatsByDate[]> => {
  const {data} = await http.get<CovidWorldTotalStatsByDate[]>(`/${requestUrl}`);
  return data;
};
