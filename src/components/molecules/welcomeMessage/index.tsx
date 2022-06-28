import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {CustomText} from '../../atoms';
import {en} from '../../../i18n';

const {covid, spread_statistics} = en;
import styles from './style';

const {container, title, subTitle} = styles;

const WelcomeText: FunctionComponent = () => {
  return (
    <View style={container}>
      <CustomText style={title} textType="regular">
        {covid}
      </CustomText>
      <CustomText style={subTitle} textType="bold">
        {spread_statistics}
      </CustomText>
    </View>
  );
};

export default WelcomeText;
