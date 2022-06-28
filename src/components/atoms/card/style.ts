import {StyleSheet} from 'react-native';
import colors from '../..//../theme/colors';
import {moderateScale} from '../../../utils/scaling';

const {white} = colors;

export default StyleSheet.create({
  container: {
    backgroundColor: white,
    borderRadius: moderateScale(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
