import React, {FunctionComponent} from 'react';
import {TextStyle, View} from 'react-native';
import {CardView, CustomText} from '../../atoms';
import styles from './style';

const {container, subContainer, labelStyle, subLabelStyle} = styles;

type CustomProps = {
  title: string;
  subTitle: string;
  titleStyle?: TextStyle;
  subTitleStyle?: TextStyle;
};
const StatsCard: FunctionComponent<CustomProps> = ({
  title,
  subTitle,
  titleStyle,
  subTitleStyle,
}) => {
  const passedStyles = Array.isArray(titleStyle)
    ? Object.assign({}, ...titleStyle)
    : titleStyle;

  const subTitleNewStyle = Array.isArray(subTitleStyle)
    ? Object.assign({}, ...subTitleStyle)
    : subTitleStyle;

  return (
    <View style={container}>
      <CardView style={subContainer}>
        <CustomText style={[labelStyle, {...passedStyles}]} textType="regular">
          {title}
        </CustomText>
        <CustomText
          style={[subLabelStyle, {...subTitleNewStyle}]}
          textType="regular">
          {subTitle}
        </CustomText>
      </CardView>
    </View>
  );
};

export default StatsCard;
