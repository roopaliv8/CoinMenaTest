import React, {FunctionComponent} from 'react';
import {View, Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {CovidWorldTotalStatsByDate} from '../../../stores/types';
import {getGraphArrays} from '../../../utils/helper';

const screenWidth = Dimensions.get('window').width;

import styles from './style';

const {container} = styles;

const chartConfig1 = {
  backgroundGradientFrom: '#ffffff',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#ffffff',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
  decimalPlaces: 0,
};

type GraphProps = {
  data: CovidWorldTotalStatsByDate[];
};

const CovidStatsGraph: FunctionComponent<GraphProps> = ({data}) => {
  const {graphLabel, graphData} = getGraphArrays(data);

  const covidStatistics = {
    labels: graphLabel,
    datasets: [
      {
        data: graphData,
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ['Daily Deaths'], // optional
  };

  return (
    <View style={container}>
      <LineChart
        data={covidStatistics}
        width={(screenWidth * 90) / 100}
        height={160}
        chartConfig={chartConfig1}
      />
    </View>
  );
};

export default CovidStatsGraph;
