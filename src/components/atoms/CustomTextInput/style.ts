import {StyleSheet} from 'react-native';
import colors from '../..//../theme/colors';
import {moderateScale, scale, verticalScale} from '../../../utils/scaling';

const {mirage, white} = colors;

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: white,
    borderWidth: scale(1),
    borderRadius: moderateScale(10),
    padding: moderateScale(8),
    backgroundColor: '#e9eef0',
    marginVertical: verticalScale(10),
  },
  textInputStyle: {
    padding: 0,
  },
  fill: {
    flex: 1,
  },
});
