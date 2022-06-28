import {StyleSheet} from 'react-native';
import colors from '../..//theme/colors';
import {moderateScale, verticalScale} from '../../utils/scaling';

const {turquoise} = colors;

export default StyleSheet.create({
  subContainer: {
    flex: 1,
  },
  viewMoreContainer: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: verticalScale(10),
    marginBottom: verticalScale(10),
  },
  viewMore: {
    width: '100%',
    fontSize: moderateScale(18),
    color: turquoise,
    textAlign: 'right',
  },
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
  },
});
