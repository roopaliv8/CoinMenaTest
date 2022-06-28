import moment from 'moment';
import {
  CovidWorldTotalStatsByDate,
  FetchCovidStatisticsResponse,
  CountryType,
} from '../stores/types';

const getGraphArrays = (data: CovidWorldTotalStatsByDate[]) => {
  let graphLabel: string[] = [];
  let graphData: number[] = [];

  data.forEach((item: CovidWorldTotalStatsByDate) => {
    let day = moment.utc(item.Date).format('Do MMM');
    graphLabel.push(day);
    graphData.push(item.NewDeaths);
  });

  return {graphLabel, graphData};
};

const getTopCountriesData = (data: FetchCovidStatisticsResponse) => {
  const {Countries} = data;
  const filteredData = Countries?.sort((a, b) => {
    return b.TotalConfirmed - a.TotalConfirmed;
  });

  return filteredData.slice(0, 5);
};

const sortCovidStatsData = (
  data: CountryType[],
  sortParam: 'TotalDeaths' | 'TotalRecovered' | 'NewConfirmed',
) => {
  const sortedData = data?.sort((a, b) => {
    return a[sortParam] - b[sortParam];
  });

  return sortedData;
};

export {getGraphArrays, getTopCountriesData, sortCovidStatsData};
