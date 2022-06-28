import create from 'zustand';
import {fetchCovidStatsApi, fetchCovidWordsStats} from './services';
import {
  CovidStatsStore,
  FetchCovidStatisticsResponse,
  CovidWorldTotalStatsByDate,
} from './types';

export const fetchCovidStatsSummery = async (
  serviceUrl: string,
): Promise<FetchCovidStatisticsResponse> => {
  return fetchCovidStatsApi(serviceUrl);
};

export const fetchCovidByWorldStats = async (
  serviceUrl: string,
): Promise<CovidWorldTotalStatsByDate[]> => {
  return fetchCovidWordsStats(serviceUrl);
};

export const useCovidStatsStore = create<CovidStatsStore>(set => ({
  covidStats: {},
  fetchCovidStats: (serviceUrl: string) => {
    const response = fetchCovidStatsSummery(serviceUrl);
    set({covidStats: response});
    return response;
  },
  fetchCovidWorldStatsByDate: (serviceUrl: string) => {
    const response = fetchCovidByWorldStats(serviceUrl);
    set({covidStats: response});
    return response;
  },
}));
