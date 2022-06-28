import React, {FunctionComponent} from 'react';
import {Text, TextStyle} from 'react-native';
import styles from './style';

const {regular, bold, light} = styles;

type CustomTextProps = {
  style?: TextStyle | TextStyle[];
  textType?: 'regular' | 'bold' | 'light';
};

const CustomText: FunctionComponent<CustomTextProps> = ({
  children,
  style,
  textType,
}) => {
  let textStyle: {};
  switch (textType) {
    case 'regular':
      textStyle = regular;
      break;
    case 'bold':
      textStyle = bold;
      break;
    case 'light':
      textStyle = light;
      break;
    default:
      textStyle = regular;
      break;
  }
  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;

  return <Text style={[textStyle, {...passedStyles}]}>{children}</Text>;
};

export default CustomText;
