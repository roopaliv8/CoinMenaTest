import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {en} from '../../../i18n';
import {GlobalSummaryType} from '../../../stores/types';
import {StatsCard} from '../../molecules';
import styles from './style';

const {container, titleStyle, cardSpacing} = styles;

type CustomProps = {
  globalData: GlobalSummaryType;
};
const GlobalStats: FunctionComponent<CustomProps> = ({globalData}) => {
  const {TotalConfirmed, TotalDeaths, NewConfirmed} = globalData;

  return (
    <View style={container}>
      <StatsCard title={en.total_cases} subTitle={`${TotalConfirmed}`} />
      <View style={cardSpacing}>
        <StatsCard
          titleStyle={titleStyle}
          title={en.new_confirmed}
          subTitle={`${NewConfirmed}`}
        />
      </View>

      <StatsCard title={en.deaths} subTitle={`${TotalDeaths}`} />
    </View>
  );
};

export default GlobalStats;
