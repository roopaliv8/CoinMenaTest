import {StyleSheet} from 'react-native';
import colors from '../theme/colors';
import {moderateScale} from '../utils/scaling';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.app_bg,
    paddingHorizontal: moderateScale(15),
  },
});
