import React, {FunctionComponent} from 'react';
import {View, ViewStyle} from 'react-native';
import styles from './style';

const {container} = styles;
type CustomProps = {
  style?: ViewStyle | ViewStyle[];
};

const CardView: FunctionComponent<CustomProps> = ({children, style}) => {
  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;
  return <View style={[container, {...passedStyles}]}>{children}</View>;
};

export default CardView;
