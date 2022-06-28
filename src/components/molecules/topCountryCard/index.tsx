import React, {FunctionComponent} from 'react';
import {TextStyle, View} from 'react-native';
import {CardView, CustomText} from '../../atoms';
import {CountryType} from '../../../stores/types';
import styles from './style';
import {en} from '../../../i18n';

const {
  topContainer,
  topSubContainer,
  labelStyle,
  subLabelStyle,
  cardContainer,
  countryLabelStyle,
} = styles;

type CustomProps = {
  countryData: CountryType;
  titleStyle?: TextStyle;
  subTitleStyle?: TextStyle;
};
const CountryTopCard: FunctionComponent<CustomProps> = ({
  countryData,
  titleStyle,
  subTitleStyle,
}) => {
  const {Country, TotalConfirmed, TotalDeaths, NewConfirmed} = countryData;
  const passedStyles = Array.isArray(titleStyle)
    ? Object.assign({}, ...titleStyle)
    : titleStyle;

  const subTitleNewStyle = Array.isArray(subTitleStyle)
    ? Object.assign({}, ...subTitleStyle)
    : subTitleStyle;

  return (
    <View style={topContainer}>
      <CardView style={topSubContainer}>
        <CustomText
          style={[countryLabelStyle, {...passedStyles}]}
          textType="regular">
          {Country == 'United States of America' ? 'USA' : Country}
        </CustomText>
        <View style={cardContainer}>
          <CustomText
            style={[labelStyle, {...subTitleNewStyle}]}
            textType="regular">
            {en.total_cases}
          </CustomText>
          <CustomText
            style={[subLabelStyle, {...subTitleNewStyle}]}
            textType="regular">
            {`${TotalConfirmed}`}
          </CustomText>
          <View />
          <CustomText
            style={[labelStyle, {...subTitleNewStyle}]}
            textType="regular">
            {en.new_confirmed}
          </CustomText>
          <CustomText
            style={[subLabelStyle, {...subTitleNewStyle}]}
            textType="regular">
            {`${NewConfirmed}`}
          </CustomText>
          <CustomText
            style={[labelStyle, {...subTitleNewStyle}]}
            textType="regular">
            {en.deaths}
          </CustomText>
          <CustomText
            style={[subLabelStyle, {...subTitleNewStyle}]}
            textType="regular">
            {`${TotalDeaths}`}
          </CustomText>
        </View>
      </CardView>
    </View>
  );
};

export default CountryTopCard;
