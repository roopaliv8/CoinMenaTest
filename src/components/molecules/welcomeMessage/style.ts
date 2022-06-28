import {StyleSheet} from 'react-native';
import colors from '../..//../theme/colors';
import {scale, moderateScale, verticalScale} from '../../../utils/scaling';

const {mako, mirage} = colors;

export default StyleSheet.create({
  container: {marginVertical: verticalScale(10)},
  title: {
    fontSize: moderateScale(22),
    color: mako,
  },
  subTitle: {
    marginLeft: scale(50),
    fontSize: moderateScale(18),
    color: mirage,
  },
});
