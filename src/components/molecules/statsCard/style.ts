import {StyleSheet} from 'react-native';
import {moderateScale, verticalScale} from '../../../utils/scaling';
import colors from '../..//../theme/colors';

const {mako} = colors;
export default StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: verticalScale(10),
  },
  subContainer: {
    padding: moderateScale(10),
  },
  labelStyle: {
    fontSize: moderateScale(16),
    color: mako,
  },
  subLabelStyle: {
    fontSize: moderateScale(16),
    color: mako,
  },
});
