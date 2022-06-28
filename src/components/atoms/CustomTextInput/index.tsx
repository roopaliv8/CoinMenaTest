import React from 'react';
import {View, TextInput, ViewStyle} from 'react-native';
import styles from './style';

const {container, textInputStyle, fill} = styles;

type CustomTextProps = {
  style?: ViewStyle;
  containerStyle?: ViewStyle;
  LeftComponent?: View;
  RightComponent?: View;
  placeholderText: string;
  onChangeTextValue: (text: string) => void;
};

const CustomTextInput = function (props: CustomTextProps) {
  const {
    containerStyle,
    style,
    LeftComponent,
    RightComponent,
    placeholderText,
    onChangeTextValue,
  } = props;

  return (
    <View style={[container, containerStyle]}>
      {LeftComponent}
      <TextInput
        onChangeText={onChangeTextValue}
        placeholder={placeholderText}
        style={[textInputStyle, fill, style]}
      />
      {RightComponent}
    </View>
  );
};

export default CustomTextInput;
